'use client'
import { Base } from '@thirdweb-dev/chains'
import {
  coinbaseWallet,
  en,
  metamaskWallet,
  ThirdwebProvider,
  walletConnect,
} from '@thirdweb-dev/react'

import { requiredEnv } from '@/utils/shared/requiredEnv'
import { NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN } from '@/utils/shared/sharedEnv'

const NEXT_PUBLIC_THIRDWEB_CLIENT_ID = requiredEnv(
  process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
  'NEXT_PUBLIC_THIRDWEB_CLIENT_ID',
)

// This component includes all top level client-side logic
export function TopLevelClientLogic({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider
      activeChain={Base}
      authConfig={{
        domain: NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN,
        authUrl: '/api/auth',
      }}
      clientId={NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
      locale={en()}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet({ recommended: true }),
        walletConnect(),
        // embeddedWallet({
        //   auth: {
        //     options: ['google', 'email'],
        //   },
        // }),
      ]}
    >
      {children}
    </ThirdwebProvider>
  )
}
