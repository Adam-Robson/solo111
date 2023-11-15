import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import Loader from '@/components/Loader'
import Navigation from '@/components/Navigation'
import { Cairo_Play, Inter_Tight, Overpass } from 'next/font/google'

const overpass = Overpass({ subsets: ["latin"] })

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
    <div className={overpass.className}>
      <div>
        <Navigation />
        <Suspense fallback={<Loader />}>
          {children}
        </Suspense>
      </div>
    </div>
  )
}
