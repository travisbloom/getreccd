'use client'

import { SignInButton } from '@/components/app/signInButton'

export function StepConnectWallet() {
  return (
    <div>
      <h1 className="mb-2 font-mono text-2xl font-bold text-foreground sm:text-3xl">
        Connect your wallet
      </h1>
      <h2 className="mb-6 text-muted-foreground">
        Finally, connect your wallet so we can submit your onchain recommendation.
      </h2>
      <SignInButton connectButton={{ label: 'Connect your wallet' }} />
    </div>
  )
}
