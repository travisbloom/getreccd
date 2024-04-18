import { getContract } from 'thirdweb'

import {
  mintAndSend,
  MintAndSendParams,
} from '@/thirdweb/84532/0x71b6f46fb5c9529098bfeb3afc710afe81460ac7'
import { NEXT_PUBLIC_ENVIRONMENT } from '@/utils/shared/sharedEnv'
import { ACTIVE_CHAIN } from '@/utils/web/activeChain'
import { thirdwebClient } from '@/utils/web/thirdweb/client'

function getContractAddress() {
  if (NEXT_PUBLIC_ENVIRONMENT === 'production') {
    throw new Error('Need to deploy prod contract')
  }
  return '0x71B6f46Fb5c9529098bfEb3afC710aFE81460AC7'
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
