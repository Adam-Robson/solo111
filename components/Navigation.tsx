'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { PiListDuotone } from 'react-icons/pi'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavDrawer() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="max-h-lg h-11/12 my-auto mx-10 flex flex-col justify-between items-center">
      <div className="relative">

      <button className="cursor-pointer" onClick={toggleNavDrawer}>
        <PiListDuotone />
      </button>
      {
        isOpen && (
          <div className="drawer fixed top-0 left-[-250px] w-[250px] h-full p-0 my-2 mx-0">
            <ul className="list-none p-0 my-2 mx-0">
                <li className="cursor-pointer p-1">
                  <Link className="drop-shadow-md tracking-tighter font-normal text-lg md:text-xl subpixel-antialiased" href={`/`}>
                    Home
                  </Link>
                </li>
                <li className="cursor-pointer p-1">
                  <Link className="drop-shadow-md tracking-tighter font-normal text-lg md:text-xl subpixel-antialiased" href={`/projects`}>
                    Projects
                  </Link>
                </li>
                <li className="cursor-pointer p-1">
                  <Link className="drop-shadow-md tracking-tighter font-normal text-lg md:text-xl subpixel-antialiased" href={`/resume`}>
                    Resume
                  </Link>
                </li>
                <li className="cursor-pointer p-1">
                  <Link className="drop-shadow-md tracking-tighter font-normal text-lg md:text-xl subpixel-antialiased" href={`/bio`}>
                    Bio
                  </Link>
                </li>
            </ul>
          </div>
        )
        }
        </div>
    </div>
  )
}
