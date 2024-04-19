import { createThirdwebClient } from 'thirdweb'

import { requiredEnv } from '@/utils/shared/requiredEnv'

const NEXT_PUBLIC_THIRDWEB_CLIENT_ID = requiredEnv(
  process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
  'NEXT_PUBLIC_THIRDWEB_CLIENT_ID',
)
export const thirdwebClient = createThirdwebClient({
  clientId: NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
})
