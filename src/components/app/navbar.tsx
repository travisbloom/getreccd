import { SignInButton } from '@/components/app/signInButton'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-8">
      <div>
        <div className="font-mono">Get Recc'd</div>
      </div>
      <div>
        <SignInButton />
      </div>
    </nav>
  )
}
