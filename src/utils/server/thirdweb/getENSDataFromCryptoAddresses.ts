import * as Sentry from '@sentry/nextjs'
import { compact } from 'lodash-es'

import { formatENSAvatar } from '@/utils/server/formatENSAvatar'
import { ethRPCClient } from '@/utils/server/thirdweb/thirdwebRPCClients'
import { getLogger } from '@/utils/shared/logger'
import { stringToEthereumAddress } from '@/utils/shared/stringToEthereumAddress'

const client = ethRPCClient

export interface UserENSData {
  ensName: string
  ensAvatarUrl: string | null
}

const logger = getLogger('getENSDataMapFromCryptoAddresses')

export async function getENSDataMapFromCryptoAddresses(
  _addresses: string[],
): Promise<Record<string, UserENSData>> {
  const addresses = compact(_addresses.map(addr => stringToEthereumAddress(addr)))
  const nameResult = await Promise.all(
    addresses.map(address =>
      client.getEnsName({ address }).catch(e => {
        Sentry.captureException(e, { extra: { address } })
        return null
      }),
    ),
  )
  logger.info('nameResult')
  const addressesWithENS = nameResult
    .map((result, index) => ({
      cryptoAddress: addresses[index],
      ensName: result!,
    }))
    .filter(({ ensName }) => ensName)
  const records = await Promise.all(
    addressesWithENS.map(address =>
      client.getEnsAvatar({
        name: address.ensName!,
      }),
    ),
  )
  logger.info('records')
  return addressesWithENS.reduce(
    (acc, { cryptoAddress, ensName }, index) => {
      const avatar = records[index]
      acc[cryptoAddress] = {
        ensName,
        ensAvatarUrl: avatar ? formatENSAvatar(avatar) : null,
      }
      return acc
    },
    {} as Record<string, UserENSData>,
  )
}

export async function getENSDataFromCryptoAddress(address: string): Promise<UserENSData | null> {
  const results = await getENSDataMapFromCryptoAddresses([address])
  if (results[address]) {
    return results[address]
  }
  return null
}
