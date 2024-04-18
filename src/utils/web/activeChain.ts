import { base, baseSepolia } from 'thirdweb/chains'

import { NEXT_PUBLIC_ENVIRONMENT } from '@/utils/shared/sharedEnv'

export const ACTIVE_CHAIN = NEXT_PUBLIC_ENVIRONMENT === 'production' ? base : baseSepolia
