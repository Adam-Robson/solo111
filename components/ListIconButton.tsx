'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { PiListDuotone } from 'react-icons/pi'

export default function ListIconButton() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        className="absolute top-8 left-4"
        onClick={toggleIsOpen}
      >
        <PiListDuotone />
      </button>
      <div className={`drawer flex flex-col items-center justify-evenly absolute top-8 left-4 h-1/3 w-36 mt-6 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-1000 ease-in-out z-10`}>
         <Link className="text-lg/4 md:text-2xl/6 lg:text-3xl/7 tracking-tighter subpixel-antialiased" href="/">
          home
        </Link>
        <Link className="text-lg/4 md:text-2xl/6 lg:text-3xl/7 tracking-tighter subpixel-antialiased" href="/projects">
          projects
        </Link>
        <Link className="text-lg/4 md:text-2xl/6 lg:text-3xl/7 tracking-tighter subpixel-antialiased" href="/resume">
          resume
        </Link>
        <Link className="text-lg/4 md:text-2xl/6 lg:text-3xl/7 tracking-tighter subpixel-antialiased" href="/bio">
          bio
        </Link>
      </div>
    </>
    )
}
