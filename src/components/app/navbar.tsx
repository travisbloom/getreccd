import { SignInButton } from '@/components/app/signInButton'
import { InternalLink } from '@/components/ui/link'
import { urls } from '@/utils/shared/urls'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-8">
      <InternalLink className="flex items-center gap-2" href={urls.home()}>
        <div>
          <svg
            fill="none"
            height="34"
            viewBox="0 0 192 103"
            width="64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 50.5862L46.2931 3L89.5862 50.5862L46.2931 99.2069L3 50.5862Z"
              fill="white"
              stroke="black"
              stroke-width="3.2069"
            />
            <path
              d="M51.1035 50.5862L94.3966 3L137.69 50.5862L94.3966 99.2069L51.1035 50.5862Z"
              fill="white"
              stroke="black"
              stroke-width="4"
            />
            <path
              d="M102.414 50.5862L145.707 3L189 50.5862L145.707 99.2069L102.414 50.5862Z"
              fill="white"
              stroke="black"
              stroke-width="4"
            />
          </svg>
        </div>
        <div className="font-mono font-bold">Get Recc'd</div>
      </InternalLink>
      <div>
        <SignInButton />
      </div>
    </nav>
  )
}
