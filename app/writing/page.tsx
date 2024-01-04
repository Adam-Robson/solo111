import React from 'react'
import Writings from '../components/Writings'
import { writings } from '@/lib/data'

export default function WritingPage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center items-center p-2">
      <h1 className="text-center text-6xl sm:text-7xl md:text-8xl font-light tracking-tighter subpixel-antialiased mt-8 mb-4">
        writing
      </h1>
      <Writings writings={writings} />
    </div>
  )
}
