import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { Cairo_Play } from 'next/font/google'
import Loader from '@/components/Loader'
import Navigation from '@/components/Navigation'

const cairo = Cairo_Play({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adam Robson | Bio',
  description: 'Bio route for portfolio site by Adam Robson'
}
export default function BioLayout({
  children
}: {
    children: React.ReactNode
  }) {
  return (
    <div
      className={cairo.className}
    >
      <div>
        <Navigation />
        <Suspense fallback={<Loader />}>
          {children}
        </Suspense>
      </div>
    </div>
  )
}
