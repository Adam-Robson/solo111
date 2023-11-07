import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import Loader from '@/components/Loader'
import Navigation from '@/components/Navigation'
import { Cairo_Play } from 'next/font/google'

const cairo = Cairo_Play({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Adam Robson | Projects',
  description: 'Projects route for portfolio site by Adam Robson'
}

export default function ProjectsLayout({
  children
}: {
    children: React.ReactNode
  }) {
  return (
    <div className={cairo.className}>
      <div>
        <Navigation />
        <Suspense fallback={<Loader />}>
          {children}
        </Suspense>
      </div>
    </div>
  )
}
