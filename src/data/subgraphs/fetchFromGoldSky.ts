import 'server-only'

import { fetchReq } from '@/utils/shared/fetchReq'
import { getLogger } from '@/utils/shared/logger'
import { requiredEnv } from '@/utils/shared/requiredEnv'
import { CHAIN_ENVIRONMENT } from '@/utils/shared/sharedEnv'

const logger = getLogger('fetchFromGoldSky')

const GOLDSKY_API_KEY = requiredEnv(process.env.GOLDSKY_API_KEY, 'GOLDSKY_API_KEY')

const API_ENDPOINT =
  CHAIN_ENVIRONMENT === 'production'
    ? 'https://api.goldsky.com/api/private/project_clv5n6dbek7v101zj51lr5n21/subgraphs/getreccd-base/2/gn'
    : 'https://api.goldsky.com/api/private/project_clv5n6dbek7v101zj51lr5n21/subgraphs/getreccd-testing-base-sepolia/2/gn'
export const fetchFromGoldSky = async <R, V = object>(query: string, variables?: V) => {
  logger.debug(`fetchFromGoldSky called`)
  const response = await fetchReq(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GOLDSKY_API_KEY}`,
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
