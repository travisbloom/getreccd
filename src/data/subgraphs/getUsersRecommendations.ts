import { compact, flatten, uniq } from 'lodash-es'

import { fetchFromGoldSky } from '@/data/subgraphs/fetchFromGoldSky'
import {
  GetUsersRecommendationsQuery,
  GetUsersRecommendationsQueryVariables,
} from '@/types/subgraphs/generated'
import { formatRecommendationsWithENSData } from '@/utils/server/formatRecommendationsWithENSData'
import { getENSDataMapFromCryptoAddresses } from '@/utils/server/thirdweb/getENSDataFromCryptoAddresses'

export async function getUsersRecommendations(args: GetUsersRecommendationsQueryVariables) {
  const results = await fetchFromGoldSky<
    GetUsersRecommendationsQuery,
    GetUsersRecommendationsQueryVariables
  >(
    /* GraphQL */ `
      query GetUsersRecommendations($userAddress: String!) {
        recommendationsSent: recommendeds(
          orderBy: timestamp_
          orderDirection: desc
          where: { data_senderAddress: $userAddress }
        ) {
          tokenId
          data_senderName
          data_description
          data_receiverName
          data_senderAddress
          data_receiverAddress
        }
        recommendationsReceived: recommendeds(
          orderBy: timestamp_
          orderDirection: desc
          where: { data_receiverAddress: $userAddress }
        ) {
          tokenId
          data_senderName
          data_description
          data_receiverName
          data_senderAddress
          data_receiverAddress
        }
      }
    `,
    args,
  )
  const ensMap = await getENSDataMapFromCryptoAddresses(
    uniq(
      compact([
        ...flatten(
          results.recommendationsReceived.map(x => [x.data_senderAddress, x.data_receiverAddress]),
        ),
        ...flatten(
          results.recommendationsSent.map(x => [x.data_senderAddress, x.data_receiverAddress]),
        ),
      ]),
    ),
  )
  return {
    recommendationsSent: formatRecommendationsWithENSData(results.recommendationsSent, ensMap),
    recommendationsReceived: formatRecommendationsWithENSData(
      results.recommendationsReceived,
      ensMap,
    ),
  }
}
