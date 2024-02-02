import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Cairo_Play } from 'next/font/google'
import Loader from './components/Loader'
import Navigation from './components/Navigation'
import { DarkModeProvider } from '@/lib/context/DarkModeContext'
import './globals.css'

const cairo = Cairo_Play({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adam Robson | Portfolio',
  description: 'Portfolio by Adam Robson'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <DarkModeProvider>
        <Navigation />
        <Suspense fallback={<Loader />}>
          {children}
        </Suspense>
        </DarkModeProvider>
      </body>
    </html>
  )
}
