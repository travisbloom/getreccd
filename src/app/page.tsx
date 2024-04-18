import { PageHome } from '@/components/app/pageHome'
import { PageProps } from '@/types'

export const dynamic = 'error'
export const revalidate = 1

export default async function Home(_props: PageProps) {
  return <PageHome />
}
