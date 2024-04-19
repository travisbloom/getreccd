import { PageProfile } from '@/components/app/pageProfile'
import { PageProps } from '@/types'

export const dynamic = 'error'
export const revalidate = 1

export default async function Profile(_props: PageProps) {
  return <PageProfile />
}
