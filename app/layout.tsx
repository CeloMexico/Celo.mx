import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CELO Mexico - El hub para builders y comunidad en México',
  description: 'Únete a la comunidad CELO en México. Construye dApps, aprende sobre blockchain y conecta con otros builders.',
  keywords: ['CELO', 'blockchain', 'México', 'dApps', 'cryptocurrency', 'DeFi'],
  authors: [{ name: 'CELO Mexico' }],
  openGraph: {
    title: 'CELO Mexico - El hub para builders y comunidad en México',
    description: 'Únete a la comunidad CELO en México. Construye dApps, aprende sobre blockchain y conecta con otros builders.',
    type: 'website',
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CELO Mexico - El hub para builders y comunidad en México',
    description: 'Únete a la comunidad CELO en México. Construye dApps, aprende sobre blockchain y conecta con otros builders.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
