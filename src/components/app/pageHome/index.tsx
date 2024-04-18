import { MintNFTButton } from '@/components/app/mintNFTButton'
import { SignInButton } from '@/components/app/signInButton'
import { getRecentTransactions } from '@/data/subgraphs/getRecentTransactions'

export async function PageHome() {
  const data = await getRecentTransactions()
  return (
    <div className="flex h-dvh w-dvw items-center justify-center bg-black text-white">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-purple-600">Get Recc'd</h1>
        <div>
          <SignInButton />
        </div>
        <div>
          <MintNFTButton />
        </div>
        <ul className="space-y-10">
          {data.map(item => (
            <li key={item.tokenId}>
              <div>
                Sender: {item.data_senderAddress}: {item.data_senderName}
              </div>
              <div>
                Receiver: {item.data_receiverAddress}: {item.data_receiverName}
              </div>
              <div>Description: {item.data_description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
