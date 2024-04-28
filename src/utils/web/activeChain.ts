import { base, baseSepolia } from 'thirdweb/chains'

import { CHAIN_ENVIRONMENT } from '@/utils/shared/sharedEnv'

export const ACTIVE_CHAIN = CHAIN_ENVIRONMENT === 'production' ? base : baseSepolia
