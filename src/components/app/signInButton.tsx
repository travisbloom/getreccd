'use client'
import { ConnectButton, ConnectButtonProps } from 'thirdweb/react'
import { createWallet, walletConnect } from 'thirdweb/wallets'

import { thirdwebClient } from '@/utils/shared/thirdweb/client'
import { ACTIVE_CHAIN } from '@/utils/web/activeChain'

const wallets = [createWallet('com.coinbase.wallet'), createWallet('io.metamask'), walletConnect()]

export function SignInButton(props: Partial<ConnectButtonProps>) {
  return (
    <ConnectButton
      chain={ACTIVE_CHAIN}
      client={thirdwebClient}
      connectModal={{
        size: 'compact',
        titleIcon: 'https://www.getreccd.com/favicon.ico',
        showThirdwebBranding: false,
      }}
      theme={'dark'}
      wallets={wallets}
      {...props}
    />
  )
}