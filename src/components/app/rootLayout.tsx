import { orbitronFont, satoshiFont } from '@/utils/web/fonts'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${satoshiFont.variable} ${orbitronFont.variable} dark font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
