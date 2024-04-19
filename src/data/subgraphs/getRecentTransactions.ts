import { fetchFromGoldSky } from '@/data/subgraphs/fetchFromGoldSky'
import { GetRecentRecommendationsQuery } from '@/types/subgraphs/generated'

export async function getRecentRecommendations() {
  const results = await fetchFromGoldSky<GetRecentRecommendationsQuery>(/* GraphQL */ `
    query GetRecentRecommendations {
      recent: recommendeds(orderBy: timestamp_, orderDirection: desc, first: 10) {
        tokenId
        data_senderName
        data_description
        data_receiverName
        data_senderAddress
        data_receiverAddress
      }
    }
  `)
  return results.recent as Array<Required<GetRecentRecommendationsQuery['recommendeds'][0]>>
}
