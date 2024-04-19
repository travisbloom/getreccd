'use client'

import { useState } from 'react'
import { useActiveWalletConnectionStatus } from 'thirdweb/react'

import { StepConfirmation } from '@/components/app/pageMint/stepConfirmation'
import { StepConnectWallet } from '@/components/app/pageMint/stepConnectWallet'
import { StepDescription } from '@/components/app/pageMint/stepDescription'
import { StepMint } from '@/components/app/pageMint/stepMint'
import { StepReceiverAddress } from '@/components/app/pageMint/stepReceiverAddress'
import { StepReceiverName } from '@/components/app/pageMint/stepReceiverName'
import { StepSenderName } from '@/components/app/pageMint/stepSenderName'
import { getLocalUser, setLocalUserPersistedValues } from '@/utils/web/clientLocalUser'

export function PageMintForms() {
  const [finalFormValues, setFinalFormValues] = useState({
    senderName: '',
    receiverAddress: '',
    receiverName: '',
    description: ``,
  })
  const walletConnection = useActiveWalletConnectionStatus()
  const [hasMinted, setHasMinted] = useState(false)
  if (!finalFormValues.receiverName) {
    return (
      <StepReceiverName
        onSubmit={values => setFinalFormValues({ ...finalFormValues, ...values })}
      />
    )
  }
  if (!finalFormValues.receiverAddress) {
    return (
      <StepReceiverAddress
        onSubmit={values => setFinalFormValues({ ...finalFormValues, ...values })}
      />
    )
  }
  if (!finalFormValues.description) {
    return (
      <StepDescription onSubmit={values => setFinalFormValues({ ...finalFormValues, ...values })} />
    )
  }
  if (walletConnection !== 'connected') {
    return <StepConnectWallet />
  }
  if (!finalFormValues.senderName) {
    return (
      <StepSenderName onSubmit={values => setFinalFormValues({ ...finalFormValues, ...values })} />
    )
  }
  if (!hasMinted) {
    return (
      <StepMint
        data={finalFormValues}
        onSubmit={() => {
          setLocalUserPersistedValues({
            recentRecommendationsSent: [
              ...(getLocalUser().persisted?.recentRecommendationsSent || []),
              finalFormValues,
            ],
          })
          setHasMinted(true)
        }}
      />
    )
  }
  return <StepConfirmation data={finalFormValues} />
}

export function PageMint() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 items-center">
      <PageMintForms />
    </div>
  )
}
