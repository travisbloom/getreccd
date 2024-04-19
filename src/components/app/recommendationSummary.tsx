import { MaybeENSAvatar } from '@/components/app/maybeENSAvatar'
import { RecommendationWithENSData } from '@/utils/server/formatRecommendationsWithENSData'

export function RecommendationSummary({
  recommendation,
}: {
  recommendation: RecommendationWithENSData
}) {
  return (
    <div className="flex items-center gap-4">
      <MaybeENSAvatar
        ensData={recommendation.senderENSData}
        sharedClassName="w-16 h-16 text-xs"
        userAddress={recommendation.senderAddress}
      />
      <div>
        <div className="font-bold">
          {recommendation.senderENSData?.ensName || recommendation.senderName}
        </div>
        <div>
          <span className="text-muted-foreground">recommended</span>{' '}
          {recommendation.receiverENSData?.ensName || recommendation.receiverName}
        </div>
      </div>
    </div>
  )
}
