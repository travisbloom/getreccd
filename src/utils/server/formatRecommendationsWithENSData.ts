import {
  getENSDataMapFromCryptoAddresses,
  UserENSData,
} from '@/utils/server/thirdweb/getENSDataFromCryptoAddresses'
import { RecommendationNFTMetadata } from '@/utils/shared/nftMetadata'
import { normalizeETHAddress } from '@/utils/shared/normalizedETHAddress'

export type RecommendationWithENSData = RecommendationNFTMetadata & {
  senderENSData: UserENSData | null
  receiverENSData: UserENSData | null
}

export function formatRecommendationsWithENSData(
  recommendations: {
    id: string | undefined | null
    tokenId: number | undefined | null
    data_senderName: string | undefined | null
    data_description: string | undefined | null
    data_receiverName: string | undefined | null
    data_senderAddress: string | undefined | null
    data_receiverAddress: string | undefined | null
  }[],
  ensMap: Awaited<ReturnType<typeof getENSDataMapFromCryptoAddresses>>,
): RecommendationWithENSData[] {
  return recommendations.map(x => {
    const senderENSData = ensMap[x.data_senderAddress!] || null
    const receiverENSData = ensMap[x.data_receiverAddress!] || null
    return {
      senderENSData,
      receiverENSData,
      id: x.id!,
      tokenId: x.tokenId!,
      senderName: x.data_senderName!,
      description: x.data_description!,
      receiverName: x.data_receiverName!,
      senderAddress: normalizeETHAddress(x.data_senderAddress!),
      receiverAddress: normalizeETHAddress(x.data_receiverAddress!),
    }
  })
}
