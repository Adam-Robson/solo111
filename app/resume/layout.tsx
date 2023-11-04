import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import Loader from '@/components/Loader'
import Navigation from '@/components/Navigation'
import { Cairo_Play } from 'next/font/google'

const cairo = Cairo_Play({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adam Robson | Resume',
  description: 'Built with Next, TypeScript, & Tailwind'
}

export default function ResumeLayout({
  children
}: {
    children: React.ReactNode
  }) {
  return (
    <div className={cairo.className}>
        <Navigation />
        <Suspense fallback={<Loader />}>
          {children}
        </Suspense>
    </div>
  )
}
