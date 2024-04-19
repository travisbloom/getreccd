import { PageRecentActivity } from '@/components/app/pageRecentActivity'
import { PageProps } from '@/types'

export const dynamic = 'error'
export const revalidate = 1

export default async function Mint(_props: PageProps) {
  return <PageRecentActivity />
}
