'use client'
import { TransactionButton } from 'thirdweb/react'

import { getReccdMintAndSendTransaction } from '@/utils/web/thirdweb/getReccdMintAndSendTransaction'

// TODO
const logArgs = (msg: string) => (args: any) => console.log(msg, args)

export function MintNFTButton() {
  return (
    <TransactionButton
      onError={logArgs('onError')}
      onTransactionConfirmed={logArgs('onTransactionConfirmed')}
      onTransactionSent={logArgs('onTransactionSent')}
      transaction={() =>
        getReccdMintAndSendTransaction({
          senderName: 'Sender Name',
          receiverAddress: '0x164cE5c1128aB7D891B29683e7e70Bb35AC9eEb2',
          receiverName: 'Receiver Name',
          description: 'Sample Description',
        })
      }
    >
      Confirm Transaction
    </TransactionButton>
  )
}
