'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { PiListDuotone } from 'react-icons/pi'
import clsx from 'clsx'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavDrawer() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="">
      <div className="relative">
      <button className="cursor-pointer z-10" onClick={toggleNavDrawer}>
        <PiListDuotone />
      </button>
        {
          isOpen && (
            <div className={clsx('drawer', isOpen && 'onscreen')}>
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
