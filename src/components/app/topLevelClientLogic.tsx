'use client'
import { ThirdwebProvider } from 'thirdweb/react'

// This component includes all top level client-side logic
export function TopLevelClientLogic({ children }: { children: React.ReactNode }) {
  return <ThirdwebProvider>{children}</ThirdwebProvider>
}
