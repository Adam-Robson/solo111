import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex flex-col mt-4 ml-2">{[
      ['bio', '/bio'],
      ['projects', '/projects'],
      ['resume', '/resume'],
      ['music', '/music'],
      ['writings', '/writings'],
      ['misc.', '/misc']
    ].map(([title, url]) => (
      <Link
        key={url}
        href={url}
        className="px-3 py-1 text-lg sm:text-xl font-normal tracking-tight subpixel-antialiased">
          {title}
      </Link>
    ))}</nav>
  )
}
