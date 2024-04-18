import { fetchFromGoldSky } from '@/data/subgraphs/fetchFromGoldSky'
import { GetRecentTransactionsQuery } from '@/types/subgraphs/generated'

export async function getRecentTransactions() {
  const results = await fetchFromGoldSky<GetRecentTransactionsQuery>(/* GraphQL */ `
    query GetRecentTransactions {
      recommendeds(orderBy: timestamp_, orderDirection: desc) {
        tokenId
        data_senderName
        data_description
        data_receiverName
        data_senderAddress
        data_receiverAddress
      }
    }
  `)
  return results.recommendeds as Array<Required<GetRecentTransactionsQuery['recommendeds'][0]>>
}
