import {
  getRecommendationData,
  GetRecommendationDataParams,
} from '@/thirdweb/8453/0x71b6f46fb5c9529098bfeb3afc710afe81460ac7'
import { getRecommendationData as testingGetRecommendationData } from '@/thirdweb/84532/0x17c864ee3aa63e84c848ad77580b1194b85a66df'
import { RecommendationNFTMetadata } from '@/utils/shared/nftMetadata'
import { prettyLog } from '@/utils/shared/prettyLog'
import { CHAIN_ENVIRONMENT } from '@/utils/shared/sharedEnv'
import { getReccdContract } from '@/utils/shared/thirdweb/getReccdContract'

export async function getReccdGetRecommendationData(params: GetRecommendationDataParams) {
  const results =
    CHAIN_ENVIRONMENT === 'production'
      ? await getRecommendationData({
          ...params,
          contract: getReccdContract(),
        })
      : await testingGetRecommendationData({
          ...params,
          contract: getReccdContract(),
        })
  // const [senderAddress, receiverAddress, senderName, receiverName, description] = results
  // const data = {
  //   senderAddress,
  //   receiverAddress,
  //   senderName,
  //   receiverName,
  //   description,
  // } as RecommendationNFTMetadata
  // @ts-ignore
  const data = results as RecommendationNFTMetadata
  prettyLog(results)
  if (data.senderAddress === '0x0000000000000000000000000000000000000000') {
    throw new Error('invalid token id')
  }
  return data
}
