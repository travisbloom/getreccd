import { PageRecommendation } from '@/components/app/pageRecommendation'
import { PageProps } from '@/types'

export const dynamic = 'error'
export const revalidate = 60

export default async function Recommendation(props: PageProps<{ id: string }>) {
  return <PageRecommendation id={props.params.id} />
}
