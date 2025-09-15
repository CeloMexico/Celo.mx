import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';
const Providers = dynamic(() => import('@/components/Providers'), { ssr: false });
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'CELO Mexico',
  description: 'Celo Mexico: el hub para builders y comunidad.',
  openGraph: {
    title: 'CELO Mexico',
    description: 'Celo Mexico: el hub para builders y comunidad.',
    type: 'website',
    url: 'https://celo-mexico.local',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CELO Mexico',
    description: 'Celo Mexico: el hub para builders y comunidad.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`theme-yellow ${inter.variable} min-h-screen antialiased celo-bg celo-text`} style={{ ['--font-display' as any]: 'GT Alpina Trial Fine, ui-serif, system-ui' }}>        
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 overflow-x-hidden">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
