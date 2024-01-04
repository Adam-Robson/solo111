'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { PiListDuotone } from 'react-icons/pi'
import { Cairo_Play } from 'next/font/google';
import NavButton from './NavButton';
import DarkModeButton from './DarkModeButton';

const cairo = Cairo_Play({ subsets: ["latin"] })

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
      <NavButton onClick={toggleIsOpen} />
      <div className={`${cairo.className} flex flex-col items-start justify-evenly absolute top-8 left-4 h-2/5 w-32 mt-6 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-1000 ease-in-out z-20`}>
        
        <Link className="text-lg/4 sm:text-xl/5 md:text-2xl/6 tracking-tighter subpixel-antialiased" href="/" onClick={closeMenu}>
          home
        </Link>
        <Link className="text-lg/4 sm:text-xl/5 md:text-2xl/6 tracking-tighter subpixel-antialiased" href="/bio" onClick={closeMenu}>
          bio
        </Link>
        <Link className="text-lg/4 sm:text-xl/5 md:text-2xl/6 tracking-tighter subpixel-antialiased" href="/resume" onClick={closeMenu}>
          resume
        </Link>
        <Link className="text-lg/4 sm:text-xl/5 md:text-2xl/6 tracking-tighter subpixel-antialiased" href="/projects" onClick={closeMenu}>
          projects
        </Link>
        <Link className="text-lg/4 sm:text-xl/5 md:text-2xl/6 tracking-tighter subpixel-antialiased" href="/music" onClick={closeMenu}>
          music
        </Link>
        <Link className="text-lg/4 sm:text-xl/5 md:text-2xl/6 tracking-tighter subpixel-antialiased" href="/writing" onClick={closeMenu}>
          writing
        </Link>
        <Link className="text-lg/4 sm:text-xl/5 md:text-2xl/6 tracking-tighter subpixel-antialiased" href="/photos" onClick={closeMenu}>
          photos
        </Link>
        <DarkModeButton />
      </div>
    </>
  )
}
