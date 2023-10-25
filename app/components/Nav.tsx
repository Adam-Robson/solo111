import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex flex-col mt-2 ml-2">{[
      ['bio', '/bio'],
      ['projects', '/projects'],
      ['resume', '/resume'],
      ['music', '/music'],
      ['writings', '/writings'],
      ['pictures', '/pictures']
    ].map(([title, url]) => (
      <Link
        key={url}
        href={url}
        className="px-3 text-lg sm:px-5 lg:text-2xl md:my-2 md:px-7 lg:px-9 lg:my-6 font-normal tracking-tight subpixel-antialiased">
          {title}
      </Link>
    ))}</nav>
  )
}
