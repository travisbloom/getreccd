import 'server-only'

import { fetchReq } from '@/utils/shared/fetchReq'
import { getLogger } from '@/utils/shared/logger'
import { NEXT_PUBLIC_ENVIRONMENT } from '@/utils/shared/sharedEnv'

const logger = getLogger('fetchFromGoldSky')

const API_ENDPOINT =
  NEXT_PUBLIC_ENVIRONMENT === 'production'
    ? 'https://api.goldsky.com/api/public/project_clv5n6dbek7v101zj51lr5n21/subgraphs/getreccd-testing-base-sepolia/2/gn' // TODO replace
    : 'https://api.goldsky.com/api/public/project_clv5n6dbek7v101zj51lr5n21/subgraphs/getreccd-testing-base-sepolia/2/gn'
export const fetchFromGoldSky = async <R, V = object>(query: string, variables?: V) => {
  logger.debug(`fetchFromGoldSky called`)
  const response = await fetchReq(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  logger.debug(`fetchFromGoldSky returned with status ${response.status}`)
  const json = (await response.json()) as { data: R } | { errors: any[] }
  if ('errors' in json) {
    throw new Error(`fetchFromGoldSky threw with ${JSON.stringify(json.errors)}`)
  }
  return json.data
}
