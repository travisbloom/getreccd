'use client'

import { ErrorPagesContent } from '@/components/app/errorPagesContent'
import { RootLayout } from '@/components/app/rootLayout'
import { useHandlePageError } from '@/hooks/useHandlePageError'

export const dynamic = 'error'

export default function GlobalErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useHandlePageError({
    domain: 'rootErrorPage',
    humanReadablePageName: 'Global',
    error,
  })

  return (
    <RootLayout>
      <ErrorPagesContent reset={reset} />
    </RootLayout>
  )
}
