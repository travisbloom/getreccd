import { getReccdContract } from './getReccdContract'

import {
  mintAndSend,
  MintAndSendParams,
} from '@/thirdweb/8453/0x71b6f46fb5c9529098bfeb3afc710afe81460ac7'
import { mintAndSend as testingMintAndSend } from '@/thirdweb/84532/0x17c864ee3aa63e84c848ad77580b1194b85a66df'
import { CHAIN_ENVIRONMENT } from '@/utils/shared/sharedEnv'

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
