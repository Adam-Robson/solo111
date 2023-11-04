import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import Loader from '@/components/Loader'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Adam Robson | Projects',
  description: 'Built with Next, TypeScript, & Tailwind'
}

export default function ProjectsLayout({
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
        <Suspense fallback={<Loader />}>
          {children}
        </Suspense>
      </div>
    </div>
  )
}
