'use client'
import { useState } from 'react'
import NextImage from 'next/image'
import { TransactionButton, useActiveAccount } from 'thirdweb/react'

import {
  RECOMMENDATION_NFT_IMAGE_DIMENSIONS,
  RecommendationNFTSubmissionMetadata,
} from '@/utils/shared/nftMetadata'
import { urls } from '@/utils/shared/urls'
import { getReccdMintAndSendTransaction } from '@/utils/web/thirdweb/getReccdMintAndSendTransaction'

// TODO
const logArgs = (msg: string) => (args: any) => console.log(msg, args)

export function StepMint({
  onSubmit,
  data,
}: {
  onSubmit: () => void
  data: RecommendationNFTSubmissionMetadata
}) {
  const activeAccount = useActiveAccount()
  const [isSubmitting, setIsSubmitting] = useState(false)
  return (
    <div className="text-center">
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
        Submit your recommendation and your friend will receive their NFT today.
      </h2>
      <TransactionButton
        onError={logArgs('onError')}
        onTransactionConfirmed={onSubmit}
        onTransactionSent={() => setIsSubmitting(true)}
        transaction={() => getReccdMintAndSendTransaction(data)}
      >
        {isSubmitting ? 'Sending...' : 'Send Recommendation'}
      </TransactionButton>
    </div>
  )
}
