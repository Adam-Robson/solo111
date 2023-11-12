import React from 'react'
import Writings from '@/components/Writings'
import { writings } from '@/components/lib/data'

export default function WritingPage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center items-center p-12">
      <h1 className="text-center text-7xl md:text-8xl font-light tracking-tighter subpixel-antialiased">
        writing
      </h1>
      <Writings writings={writings} />
    </div>
  )
}
