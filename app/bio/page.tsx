import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BioPage() {
  return (
    <div className="min-h-screen containier max-w-3xl mx-auto flex flex-col justify-center items-center p-24">
      <h2>bio</h2>
      <p>
        I am a full-stack software developer with a Postgres Express React TypeScript and Node stack. I am also in the process of gaining an expertise in Pythen and Data Engineering.
      </p>
      <Image src={'/images/dev.png'} alt='dev img' />
      <h4>about me</h4>
      <p>
        After spending ten years in the legal field, I chose to transition, and became a software engineer.
      </p>
      <p>
        I write play record edit and prodece original music. It can be found by searching any major music platform for 'le fog'
      </p>
      <p>
        I travelled in a 1980 Volkswagen Van with my partner around the western US for eight months and details of the trip can be viewed <Link href="https://lapaztravels.wordpress.com">here</Link>.
      </p>
    </div>
  )
}
