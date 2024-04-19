import { compact, uniq } from 'lodash-es'

import { fetchFromGoldSky } from '@/data/subgraphs/fetchFromGoldSky'
import {
  GetRecommendationQuery,
  GetRecommendationQueryVariables,
} from '@/types/subgraphs/generated'
import { formatRecommendationsWithENSData } from '@/utils/server/formatRecommendationsWithENSData'
import { getENSDataMapFromCryptoAddresses } from '@/utils/server/thirdweb/getENSDataFromCryptoAddresses'

export async function getRecommendation(props: GetRecommendationQueryVariables) {
  const results = await fetchFromGoldSky<GetRecommendationQuery, GetRecommendationQueryVariables>(
    /* GraphQL */ `
      query GetRecommendation($id: ID!) {
        recommended(id: $id) {
          id
          tokenId
          data_senderName
          data_description
          data_receiverName
          data_senderAddress
          data_receiverAddress
        }
      }
    `,
    props,
  )
  const ensMap = await getENSDataMapFromCryptoAddresses(
    uniq(
      compact([results.recommended!.data_senderAddress, results.recommended!.data_receiverAddress]),
    ),
  )
  return formatRecommendationsWithENSData([results.recommended!], ensMap)[0]
}
