'use client'
import { useEffect } from 'react'
import { ThirdwebProvider } from 'thirdweb/react'

import { bootstrapLocalUser } from '@/utils/web/clientLocalUser'

// This component includes all top level client-side logic
export function TopLevelClientLogic({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    bootstrapLocalUser()
  }, [])
  return <ThirdwebProvider>{children}</ThirdwebProvider>
}
