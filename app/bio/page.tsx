import React from 'react'
import Image from 'next/image'

export default function BioPage() {
  return (
    <div className="min-h-screen max-w-3xl w-11/12 mx-auto flex flex-col justify-center items-center p-24">
      <h1 className="text-6xl tracking-tighter font-light subpixel-antialiased">bio</h1>
      <Image src={`/images/dev.png`} alt="image of author" width={300} height={300} className="rounded-md"/>
    </div>
  )
}
