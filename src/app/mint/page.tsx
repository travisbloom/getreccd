import { PageMint } from '@/components/app/pageMint'
import { PageProps } from '@/types'

export const dynamic = 'error'

export default async function Mint(_props: PageProps) {
  return <PageMint />
}
