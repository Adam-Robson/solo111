'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { PiListDuotone } from 'react-icons/pi'
import { Cairo_Play } from 'next/font/google';

const cairo = Cairo_Play({ subsets: ["latin"]})

export default function NavDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <>
      <button
        className="absolute top-8 left-4 z-20"
        onClick={toggleIsOpen}
      >
        <PiListDuotone />
      </button>
      <div className={`${cairo.className} drawer flex flex-col items-start justify-evenly absolute top-8 left-4 h-1/2 w-32 mt-6 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-1000 ease-in-out z-20`}>
        <Link className="text-xl/5 md:text-2xl/6 lg:text-3xl/7 tracking-tighter subpixel-antialiased" href="/" onClick={closeMenu}>
          home
        </Link>
        <Link className="text-xl/5 md:text-2xl/6 lg:text-3xl/7 tracking-tighter subpixel-antialiased" href="/projects" onClick={closeMenu}>
          projects
        </Link>
        <Link className="text-xl/5 md:text-2xl/6 lg:text-3xl/7 tracking-tighter subpixel-antialiased" href="/resume" onClick={closeMenu}>
          resume
        </Link>
        <Link className="text-xl/5 md:text-2xl/6 lg:text-3xl/7 tracking-tighter subpixel-antialiased" href="/bio" onClick={closeMenu}>
          bio
        </Link>
        <Link className="text-xl/5 md:text-2xl/6 lg:text-3xl/7 tracking-tighter subpixel-antialiased" href="/writing" onClick={closeMenu}>
          writing
        </Link>
      </div>
    </>
  )
}
