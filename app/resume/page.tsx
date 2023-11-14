import React from 'react'
import Link from 'next/link'
import PDF from '@/components/PDF'
import { PiFloppyDiskDuotone } from 'react-icons/pi'

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center items-center mt-12">
      <h1 className="text-center text-7xl md:text-8xl font-light tracking-tighter subpixel-antialiased">
        resume
      </h1>
      <div className="relative max-w-sm mx-auto my-10 flex justify-center items-baseline">
        <Link
          href="/pdf/resume.pdf"
          download="resume.pdf"
          className="flex justify-between items-center"
        >
          <PiFloppyDiskDuotone size={30} color={'#b39180'} />
          Download
        </Link>
      </div>
      <div className="max-w-lg">
        <PDF />
      </div>
    </div>
  )
}
