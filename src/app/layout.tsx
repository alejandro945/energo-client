import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/presentation/styles/index.css';
import '@/presentation/styles/App.css';
import AppWrappers from './AppWrappers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Energo',
  description: 'Energy management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id="root" className={inter.className}>
        <AppWrappers>{children}</AppWrappers>
      </body>
    </html>
  )
}
