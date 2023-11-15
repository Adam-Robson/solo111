import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import Loader from '@/components/Loader'
import Navigation from '@/components/Navigation'
import { Inter_Tight } from 'next/font/google'

const interTight = Inter_Tight({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Adam Robson | Resume',
  description: 'Resume route for portfolio site by Adam Robson'
}

export default function ResumeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={interTight.className}>
      <Navigation />
      <Suspense fallback={<Loader />}>
        {children}
      </Suspense>
    </div>
  )
}
