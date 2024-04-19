'use client'
import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { InternalLink } from '@/components/ui/link'
import { useActiveAccountNormalized } from '@/hooks/useActiveAccountNormalized'
import { RecommendationNFTSubmissionMetadata } from '@/utils/shared/nftMetadata'
import { urls } from '@/utils/shared/urls'

export function StepConfirmation({ data }: { data: RecommendationNFTSubmissionMetadata }) {
  const activeAccount = useActiveAccountNormalized()
  return (
    <div className="text-center">
      <div className="mx-auto flex h-72 w-72 items-center justify-center overflow-hidden rounded-full bg-primary">
        <Check className="h-52 w-52" />
      </div>
      <h1 className="mb-2 mt-6 font-mono text-2xl font-bold text-foreground sm:text-3xl">
        Recommendation sent!
      </h1>
      <h2 className="mb-6 text-muted-foreground">
        You sent a recommendation to {data.receiverName}. The NFT will arrive in their wallet
        shortly.
      </h2>
      <Button asChild>
        <InternalLink href={urls.profile(activeAccount!.address)}>View my profile</InternalLink>
      </Button>
    </div>
  )
}
