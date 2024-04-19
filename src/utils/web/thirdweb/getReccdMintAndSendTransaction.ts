import { getContract } from 'thirdweb'

import {
  mintAndSend,
  MintAndSendParams,
} from '@/thirdweb/8453/0x71b6f46fb5c9529098bfeb3afc710afe81460ac7'
import { mintAndSend as testingMintAndSend } from '@/thirdweb/84532/0x17c864ee3aa63e84c848ad77580b1194b85a66df'
import { CHAIN_ENVIRONMENT } from '@/utils/shared/sharedEnv'
import { ACTIVE_CHAIN } from '@/utils/web/activeChain'
import { thirdwebClient } from '@/utils/web/thirdweb/client'

function getContractAddress() {
  if (CHAIN_ENVIRONMENT === 'production') {
    return '0x71B6f46Fb5c9529098bfEb3afC710aFE81460AC7'
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
  if (CHAIN_ENVIRONMENT === 'production') {
    return mintAndSend({
      ...params,
      contract: getReccdContract(),
    })
  }
  return testingMintAndSend({
    ...params,
    contract: getReccdContract(),
  })
}
