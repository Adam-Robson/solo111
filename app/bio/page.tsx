import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BioPage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center items-center p-2">
      <div className='parent max-w-2xl'>
        <div className='div1'>
          <h1 className="text-center text-6xl sm:text-7xl md:text-8xl font-light tracking-tighter subpixel-antialiased mt-8 mb-4">
            bio
          </h1>
        </div>

        <div className="div3 max-w-lg w-full ml-8 pr-12">
          <p className='mb-4 text-sm md:text-lg font-normal tracking-tighter subpixel-antialiased'>
            As a dedicated full-stack developer, I thrive on perpetual learning, specializing in technologies such as <Link href="https://www.postgresql.org/"><b>Postgres</b></Link>, <Link href="https://expressjs.com/"><b>Express</b></Link>, <Link href="https://react.dev/"><b>React</b></Link>, <Link href="https://www.typescriptlang.org/"><b>TypeScript</b></Link>, and <Link href="https://nodejs.org/en"><b>Node</b></Link>.
          </p>
          <p className='mb-4 text-sm md:text-lg font-normal tracking-tighter subpixel-antialiased'>
            With a decade-long background in the legal field, I made the pivotal decision to transition into the dynamic realm of software development.
          </p>
          <p className='mb-4 text-sm md:text-lg font-normal tracking-tighter subpixel-antialiased'>
            Beyond coding, my passion extends to writing, playing, recording, editing, and producing original music.
          </p>
          <p className='mb-4 text-sm md:text-lg font-normal tracking-tighter subpixel-antialiased'>
            Explore my musical creations on <Link href="https://lefogsong.bandcamp.com/"><b>Bandcamp</b></Link> or search for `&apos;`le fog`&apos;` on any major music platform.
          </p>


        </div>

        <div className="div2 p-2">
          <Image
            src={'/images/dev.png'}
            alt='dev img'
            width={500}
            height={500}
          />
        </div>

      </div>
    </div>
  )
}
