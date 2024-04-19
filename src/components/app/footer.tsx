import { ExternalLink } from '@/components/ui/link'

export function Footer() {
  return (
    <footer className="px-4 py-8 text-xs text-muted-foreground">
      Made by <ExternalLink href="https://twitter.com/TravisBloom/">tbloom.eth</ExternalLink> and{' '}
      <ExternalLink href="https://marianoavila.eth.xyz/">marianoavila.eth</ExternalLink>
    </footer>
  )
}
