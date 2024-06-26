'use client'
import { RocketIcon } from 'lucide-react'
import { useActiveAccount } from 'thirdweb/react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { useHasHydrated } from '@/hooks/useHasHydrated'
import { useLocalUser } from '@/hooks/useLocalUser'
import { RecommendationWithENSData } from '@/utils/server/formatRecommendationsWithENSData'

export function MaybeRecentMint({
  recommendationsSent,
  userAddress,
}: {
  userAddress: string
  recommendationsSent: RecommendationWithENSData[]
}) {
  const account = useActiveAccount()
  const hydrated = useHasHydrated()
  const localUser = useLocalUser()
  const recentMints =
    localUser.persisted?.recentRecommendationsSent?.filter(x => {
      return recommendationsSent.every(
        rec =>
          rec.receiverAddress !== x.receiverAddress ||
          rec.description !== x.description ||
          rec.receiverName !== x.receiverName,
      )
    }) || []
  if (!recentMints.length || !hydrated || !account || userAddress !== account.address) {
    return null
  }
  return (
    <Alert className="mx-auto mb-4 max-w-xl">
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Pending recommendations</AlertTitle>
      <AlertDescription>
        You recently sent some recommendations onchain. Once they're fully confirmed they'll show up
        here.
      </AlertDescription>
    </Alert>
  )
}
