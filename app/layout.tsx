import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reece Yang',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="retro" lang="en">
      <body className={inter.className}>
        <Header />
        <div className="overflow-clip">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
