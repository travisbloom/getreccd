import { MaybeENSAvatar } from '@/components/app/maybeENSAvatar'
import { InternalLink } from '@/components/ui/link'
import { LinkBox, linkBoxLinkClassName } from '@/components/ui/linkBox'
import { getRecommendation } from '@/data/subgraphs/getRecommendation'
import { urls } from '@/utils/shared/urls'
import { cn } from '@/utils/web/cn'

export async function PageRecommendation({ id }: { id: string }) {
  const recommendation = await getRecommendation({ id })
  return (
    <div className="mx-auto w-full max-w-xl space-y-6">
      <LinkBox className="flex w-full max-w-lg items-center gap-6 rounded-xl bg-muted p-8">
        <MaybeENSAvatar
          ensData={recommendation.senderENSData}
          sharedClassName="h-16 w-16"
          userAddress={recommendation.senderAddress}
        />
        <InternalLink
          className={cn('font-mono text-xl font-bold', linkBoxLinkClassName)}
          href={urls.profile(recommendation.senderAddress)}
        >
          {recommendation.senderENSData?.ensName || recommendation.senderName}
        </InternalLink>
      </LinkBox>
      <p>sent a recommendation to</p>
      <LinkBox className="flex w-full max-w-lg items-center gap-6 rounded-xl bg-muted p-8">
        <MaybeENSAvatar
          ensData={recommendation.receiverENSData}
          sharedClassName="h-16 w-16"
          userAddress={recommendation.receiverAddress}
        />
        <InternalLink
          className={cn('font-mono text-xl font-bold', linkBoxLinkClassName)}
          href={urls.profile(recommendation.receiverAddress)}
        >
          {recommendation.receiverENSData?.ensName || recommendation.receiverName}
        </InternalLink>
      </LinkBox>
      <p>that said</p>
      <p className="rounded-xl bg-muted p-12">{recommendation.description}</p>
    </div>
  )
}
