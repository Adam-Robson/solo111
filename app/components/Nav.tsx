import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex flex-col">{[
      ['bio', '/bio'],
      ['projects', '/projects'],
      ['resume', '/resume'],
      ['contact', '/contact'],
      ['music', '/music'],
      ['writings', '/writings'],
      ['misc.', '/misc']
    ].map(([title, url]) => (
      <Link
        key={url}
        href={url}
        className="rounded-lg px-3 pt-2 pb-1 text-sm sm:text-xl font-normal tracking-tight subpixel-antialiased">
          {title}
      </Link>
    ))}</nav>
  )
}
