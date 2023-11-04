import PDF from '@/components/PDF'
import React from 'react'

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center items-center mt-12">
      <h1 className="text-center text-7xl md:text-8xl font-light tracking-tighter subpixel-antialiased">
        resume
      </h1>
      <div className="max-w-2xl">
        <PDF />
      </div>
    </div>
  )
}
