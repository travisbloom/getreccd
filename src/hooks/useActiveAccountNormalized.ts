import { useActiveAccount } from 'thirdweb/react'
import { Account } from 'thirdweb/wallets'

import { normalizeETHAddress } from '@/utils/shared/normalizedETHAddress'

export function useActiveAccountNormalized() {
  const results = useActiveAccount()
  if (results) {
    return { ...results, address: normalizeETHAddress(results.address) } as Account
  }
  return results
}
