import { MintNFTButton } from '@/components/app/mintNFTButton'
import { SignInButton } from '@/components/app/signInButton'

export function PageHome() {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center bg-black">
      <div>
        <h1 className="text-4xl font-bold text-purple-600">Get Recc'd</h1>
        <SignInButton />
        <MintNFTButton />
      </div>
    </div>
  )
}
