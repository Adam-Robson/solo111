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
      <div className={`drawer flex flex-col items-center justify-around absolute top-8 left-4 shadow-sm h-full w-56 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-1000 ease-in-out`}>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/bio">Bio</Link>
      </div>
    </>
    )
}
