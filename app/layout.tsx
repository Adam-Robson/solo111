import type { Metadata } from 'next'
import { Cairo_Play } from 'next/font/google'
import './globals.css'

const cairoPlay = Cairo_Play({ 
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Adam Robson | Portfolio | Be Kind',
  description: 'Portfolio for Adam Robson - Built with Next, TypeScript, Tailwind, and Care'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cairoPlay.className}>{children}</body>
    </html>
  )
}
