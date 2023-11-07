import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BioPage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center items-center p-12">
      <div className='parent max-w-2xl'>
        <div className='div1 p-2 m-2'>
          <p className="text-center text-7xl md:text-8xl font-light tracking-tighter subpixel-antialiased">
            bio
          </p>
        </div>

        <div className="div3 max-w-md w-full ml-10 pr-12">
          <p className='mb-4 text-sm md:text-lg font-normal tracking-tighter subpixel-antialiased'>
            I am a full-stack software developer trained in <Link href="https://www.postgresql.org/"><b>Postgres</b></Link>, <Link href="https://expressjs.com/"><b>Express</b></Link>, <Link href="https://react.dev/"><b>React</b></Link>, <Link href="https://www.typescriptlang.org/"><b>TypeScript</b></Link>, and <Link href="https://nodejs.org/en"><b>Node</b></Link>.
          </p>
          <p className='mb-4 text-sm md:text-lg font-normal tracking-tighter subpixel-antialiased'>
            After spending ten years in the legal field, I chose to transition to software.
          </p>
          <p className='mb-4 text-sm md:text-lg font-normal tracking-tighter subpixel-antialiased'>
            In my personal time, I write, play, record, edit, and produce original music.
          </p>

          <p className='mb-4 text-sm md:text-lg font-normal tracking-tighter subpixel-antialiased'>
            It can be found <Link href="https://lefogsong.bandcamp.com/">here</Link> or by searching any major music platform for le fog.
          </p>

        </div>

        <div className="div2 p-2">
          <Image
            src={'/images/dev.png'}
            alt='dev img'
            width={250}
            height={250}
          />
        </div>

      </div>
    </div>
  )
}
