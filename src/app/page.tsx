import { PageProps } from '@/types'

export const dynamic = 'error'

export default async function Home(_props: PageProps) {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center bg-black">
      <h1 className="text-4xl font-bold text-purple-600">Get Recc'd</h1>
    </div>
  )
}
