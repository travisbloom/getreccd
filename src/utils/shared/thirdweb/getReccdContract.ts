import { getContract } from 'thirdweb'

import { CONTRACT_ADDRESS } from '@/utils/shared/nftMetadata'
import { thirdwebClient } from '@/utils/shared/thirdweb/client'
import { ACTIVE_CHAIN } from '@/utils/web/activeChain'

export function getReccdContract() {
  const contract = getContract({
    client: thirdwebClient,
    chain: ACTIVE_CHAIN,
    address: CONTRACT_ADDRESS,
  })
  return contract
}
