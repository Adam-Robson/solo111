import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import Loader from '@/components/Loader'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Adam Robson | Bio',
  description: 'Built with Next, TypeScript, & Tailwind'
}

export default function BioLayout({
  children
}: {
    children: React.ReactNode
  }) {
  return (
    <div
      className="min-h-screen w-full mx-auto"
    >
      <div>
        <Navigation />
        <h1 className="text-center tracking-tighter font-light w-full subpixel-antialiased">bio</h1>
        <Suspense fallback={<Loader />}>
          {children}
        </Suspense>
      </div>
    </div>
  )
}
