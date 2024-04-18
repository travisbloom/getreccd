import '@/globals.css'

import { capitalize } from 'lodash-es'
import type { Metadata, Viewport } from 'next'

import { Footer } from '@/components/app/footer'
import { Navbar } from '@/components/app/navbar'
import { TopLevelClientLogic } from '@/components/app/topLevelClientLogic'
import { FullHeight } from '@/components/ui/fullHeight'
import { PageProps } from '@/types'
import { getOpenGraphImageUrl } from '@/utils/server/generateOpenGraphImageUrl'
import { generateMetadataDetails } from '@/utils/server/metadataUtils'
import { NEXT_PUBLIC_ENVIRONMENT } from '@/utils/shared/sharedEnv'
import { fontClassName } from '@/utils/web/fonts'

const title = `${
  NEXT_PUBLIC_ENVIRONMENT === 'production'
    ? ''
    : `${capitalize(NEXT_PUBLIC_ENVIRONMENT.toLowerCase())} Env - `
}Get Recc'd`
const description = `Send onchain recommendations to people you respect`
const ogImage = getOpenGraphImageUrl({ title: description })

export const viewport: Viewport = {
  viewportFit: 'cover',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#fff',
}

export const metadata: Metadata = {
  ...generateMetadataDetails({ description, title, ogImage }),
  title: {
    default: title,
    template: "%s | Get Recc'd",
  },
  metadataBase: new URL('https://www.getreccd.com'),
  applicationName: "Get Recc'd",
  icons: [
    { url: '/logo/favicon-16x16.png', sizes: '16x16' },
    { url: '/logo/favicon-32x32.png', sizes: '32x32' },
  ],
  // manifest: '/site.webmanifest', // LATER-TASK figure out why we get 401s when we uncomment this
  appleWebApp: {
    title: "Get Recc'd",
    statusBarStyle: 'black-translucent',
    startupImage: ['/logo/apple-touch-icon.png'],
  },
}

export default function Layout({ children }: PageProps & { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={fontClassName}>
        <TopLevelClientLogic>
          <FullHeight.Container>
            <Navbar />
            <FullHeight.Content>{children}</FullHeight.Content>
            <Footer />
          </FullHeight.Container>
        </TopLevelClientLogic>
      </body>
    </html>
  )
}
