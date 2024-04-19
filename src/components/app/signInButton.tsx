'use client'
import { ConnectButton, ConnectButtonProps } from 'thirdweb/react'
import { createWallet, walletConnect } from 'thirdweb/wallets'

import { InternalLink } from '@/components/ui/link'
import { useActiveAccountNormalized } from '@/hooks/useActiveAccountNormalized'
import { thirdwebClient } from '@/utils/shared/thirdweb/client'
import { urls } from '@/utils/shared/urls'
import { ACTIVE_CHAIN } from '@/utils/web/activeChain'

const wallets = [createWallet('com.coinbase.wallet'), createWallet('io.metamask'), walletConnect()]

export function SignInButton(props: Partial<ConnectButtonProps>) {
  const account = useActiveAccountNormalized()
  return (
    <div>
      <ConnectButton
        chain={ACTIVE_CHAIN}
        client={thirdwebClient}
        connectButton={{
          className: 'max-sm:!p-1 max-sm:!text-md',
        }}
        connectModal={{
          size: 'compact',
          titleIcon: 'https://www.getreccd.com/favicon.ico',
          showThirdwebBranding: false,
        }}
        detailsModal={{
          hideSwitchToPersonalWallet: true,
          footer: footerProps =>
            account ? (
              <p className="ml-[48px] mt-2">
                <InternalLink
                  href={urls.profile(account.address)}
                  onClick={() => footerProps.close()}
                >
                  View Recc'd Profile
                </InternalLink>
              </p>
            ) : (
              <div></div>
            ),
        }}
        switchButton={{
          className: 'max-sm:!p-1 max-sm:!text-md',
        }}
        theme={'dark'}
        wallets={wallets}
        {...props}
      />
    </div>
  )
}
