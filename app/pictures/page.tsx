import React from 'react'
import Link from 'next/link'
import Gallery from '../components/Gallery'
import { PiArrowLeftDuotone } from 'react-icons/pi'
import { photos } from '../utils/data/store'

export default function PicturesPage() {

  return (
   <div className="fade min-h-screen h-auto w-11/12 mx-auto px-6">
      <div className="relative">
        <Link className="absolute top-4 left-4" href="/">
          <PiArrowLeftDuotone size={30} color={'#b39180'} />
        </Link>
      </div>

      <div className="w-full flex justify-center mt-8">
        <h1 className="text-7xl text-center font-light tracking-tight subpixel-antialiased my-6 underline underline-offset-[2.12rem] decoration-0">pictures</h1>
      </div>

      <article className="max-w-sm md:max-w-md mx-auto flex flex-col items-center">
        <Gallery photos={photos} />
      </article>
    </div>
  )
}
