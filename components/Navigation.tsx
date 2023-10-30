import React from 'react'
import Link from 'next/link'

function Navigation() {
  return (
    <nav className="container">
      <ul className="max-w-lg w-11/12 mx-auto my-10 flex justify-between items-baseline">
        <li>
          <Link className="drop-shadow-md tracking-tighter font-normal text-xl subpixel-antialiased" href={`/`}>
            Home
          </Link>
        </li>
        <li>
          <Link className="drop-shadow-md tracking-tighter font-normal text-xl subpixel-antialiased" href={`/projects`}>
            Projects
          </Link>
        </li>
        <li>
          <Link className="drop-shadow-md tracking-tighter font-normal text-xl subpixel-antialiased" href={`/resume`}>
            Resume
          </Link>
        </li>
        <li>
          <Link className="drop-shadow-md tracking-tighter font-normal text-xl subpixel-antialiased" href={`/bio`}>
            Bio
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
