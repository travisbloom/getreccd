import { MaybeENSAvatar } from '@/components/app/maybeENSAvatar'
import { InternalLink } from '@/components/ui/link'
import { LinkBox, linkBoxLinkClassName } from '@/components/ui/linkBox'
import { RecommendationWithENSData } from '@/utils/server/formatRecommendationsWithENSData'
import { urls } from '@/utils/shared/urls'

export function RecommendationSummary({
  recommendation,
}: {
  recommendation: RecommendationWithENSData
}) {
  return (
    <LinkBox className="flex items-center gap-4">
      <div className="flex">
        <div className="relative left-2">
          <MaybeENSAvatar
            ensData={recommendation.senderENSData}
            sharedClassName="w-16 h-16 text-xs relative"
            userAddress={recommendation.senderAddress}
          />
        </div>
        <div className="relative right-2">
          <MaybeENSAvatar
            ensData={recommendation.receiverENSData}
            sharedClassName="w-16 h-16 text-xs"
            userAddress={recommendation.receiverAddress}
          />
        </div>
      </div>
      <div>
        <div className="font-bold">
          {recommendation.senderENSData?.ensName || recommendation.senderName}
        </div>
        <div>
          <InternalLink
            className={linkBoxLinkClassName}
            href={urls.recommendation(recommendation.id)}
          >
            <span className="text-muted-foreground">recommended</span>{' '}
            {recommendation.receiverENSData?.ensName || recommendation.receiverName}
          </InternalLink>
        </div>
      </div>
    </LinkBox>
  )
}
