import { compact, flatten, uniq } from 'lodash-es'

import { fetchFromGoldSky } from '@/data/subgraphs/fetchFromGoldSky'
import { GetRecentRecommendationsQuery } from '@/types/subgraphs/generated'
import { formatRecommendationsWithENSData } from '@/utils/server/formatRecommendationsWithENSData'
import { getENSDataMapFromCryptoAddresses } from '@/utils/server/thirdweb/getENSDataFromCryptoAddresses'

export async function getRecentRecommendations() {
  const results = await fetchFromGoldSky<GetRecentRecommendationsQuery>(/* GraphQL */ `
    query GetRecentRecommendations {
      recent: recommendeds(orderBy: timestamp_, orderDirection: desc, first: 100) {
        id
        tokenId
        data_senderName
        data_description
        data_receiverName
        data_senderAddress
        data_receiverAddress
      }
    }
  `)
  const ensMap = await getENSDataMapFromCryptoAddresses(
    uniq(compact(flatten(results.recent.map(x => [x.data_senderAddress, x.data_receiverAddress])))),
  )
  return formatRecommendationsWithENSData(results.recent, ensMap)
}
