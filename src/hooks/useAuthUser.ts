/*
This hook wraps the useUser hook from @thirdweb-dev/react-core and adds our jwt-specific metadata we pass back to the client
see https://portal.thirdweb.com/wallets/auth/server-frameworks/next#enhancing-session-data
*/

import { Json } from '@thirdweb-dev/auth'
import { useUser } from '@thirdweb-dev/react'

import { parseThirdwebAddress } from '@/hooks/useThirdwebAddress/parseThirdwebAddress'
import { AuthSessionMetadata } from '@/utils/server/thirdweb/types'

export function useThirdwebAuthUser() {
  const data = useUser<Json, AuthSessionMetadata>()
  return {
    ...data,
    user: data.user
      ? {
          ...data.user,
          address: parseThirdwebAddress(data.user.address),
        }
      : undefined,
  }
}
