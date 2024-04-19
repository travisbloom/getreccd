import { Button } from '@/components/ui/button'
import { InternalLink } from '@/components/ui/link'
import { urls } from '@/utils/shared/urls'

export async function PageHome() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="space-y-6">
        <h1 className="font-mono text-3xl font-bold sm:text-4xl">Send onchain recommendations</h1>
        <h2 className="text-muted-foreground">
          Endorse the people you respect onchain by sending them a Proof-Of-Recommendation NFT.
        </h2>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild>
            <InternalLink href={urls.mint()}>Send a recommendation</InternalLink>
          </Button>
          <Button asChild variant="secondary">
            <InternalLink href={urls.activity()}>View recent recommendations</InternalLink>
          </Button>
        </div>
      </div>
    </div>
  )
}
