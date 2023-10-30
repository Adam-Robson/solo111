import type { Metadata } from 'next'
import { Cairo_Play } from 'next/font/google'
import './globals.css'

const cairo = Cairo_Play({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adam Robson | Catalog',
  description: 'Built with Next, TypeScript, & Tailwind'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
