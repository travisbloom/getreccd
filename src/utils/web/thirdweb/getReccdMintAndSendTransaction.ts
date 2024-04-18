import { getContract } from 'thirdweb'

import {
  mintAndSend,
  MintAndSendParams,
} from '@/thirdweb/84532/0x17c864ee3aa63e84c848ad77580b1194b85a66df'
import { NEXT_PUBLIC_ENVIRONMENT } from '@/utils/shared/sharedEnv'
import { ACTIVE_CHAIN } from '@/utils/web/activeChain'
import { thirdwebClient } from '@/utils/web/thirdweb/client'

function getContractAddress() {
  if (NEXT_PUBLIC_ENVIRONMENT === 'production') {
    throw new Error('Need to deploy prod contract')
  }
  return '0x17c864EE3aA63E84C848AD77580B1194b85a66Df'
}

function getReccdContract() {
  const contract = getContract({
    client: thirdwebClient,
    chain: ACTIVE_CHAIN,
    address: getContractAddress(),
  })
  return contract
}

export function getReccdMintAndSendTransaction(params: MintAndSendParams) {
  return mintAndSend({
    ...params,
    contract: getReccdContract(),
  })
}
