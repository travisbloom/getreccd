'use client'
import { useState } from 'react'
import * as Sentry from '@sentry/nextjs'
import NextImage from 'next/image'
import { TransactionButton } from 'thirdweb/react'

import { useActiveAccountNormalized } from '@/hooks/useActiveAccountNormalized'
import {
  RECOMMENDATION_NFT_IMAGE_DIMENSIONS,
  RecommendationNFTSubmissionMetadata,
} from '@/utils/shared/nftMetadata'
import { getReccdMintAndSendTransaction } from '@/utils/shared/thirdweb/getReccdMintAndSendTransaction'
import { urls } from '@/utils/shared/urls'

export function StepMint({
  onSubmit,
  data,
}: {
  onSubmit: () => void
  data: RecommendationNFTSubmissionMetadata
}) {
  const activeAccount = useActiveAccountNormalized()
  const [isSubmitting, setIsSubmitting] = useState(false)
  return (
    <div className="w-full text-center">
      <div className="mx-auto h-72 w-72 overflow-hidden rounded-xl">
        <NextImage
          className="h-72 w-72"
          {...RECOMMENDATION_NFT_IMAGE_DIMENSIONS}
          alt="A preview image of your recommendation NFT"
          src={urls.mockNFTImage({ ...data, senderAddress: activeAccount!.address! })}
        />
      </div>
      <h1 className="mb-2 mt-6 font-mono text-2xl font-bold text-foreground sm:text-3xl">
        Send your recommendation
      </h1>
      <h2 className="mb-6 text-muted-foreground">
        Mint a Proof-Of-Recommendation for {data.receiverName} below.
      </h2>
      <TransactionButton
        onError={e => Sentry.captureException(e, { tags: { domain: 'transactionButton' } })}
        onTransactionConfirmed={onSubmit}
        onTransactionSent={() => setIsSubmitting(true)}
        transaction={() => getReccdMintAndSendTransaction(data)}
      >
        {isSubmitting ? 'Sending...' : 'Send Recommendation'}
      </TransactionButton>
    </div>
  )
}
