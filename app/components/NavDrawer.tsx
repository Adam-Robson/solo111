'use client'
import React, { useState } from 'react'
import { Cairo_Play } from 'next/font/google';
import Link from 'next/link';

import NavButton from './NavButton';
import { navigationLinks } from '@/lib/data';

const cairo = Cairo_Play({ subsets: ["latin"] })

export default function NavDrawer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks = navigationLinks.map(({ id, href, label }) => {
    return (
      <Link
        key={id}
        href={href}
        className="text-base/5 sm:text-lg/6 tracking-tighter subpixel-antialiased transition-transform duration-600 ease-in-out z-20 hover:scale-105 mt-4"
        style={{ color: '#f2e9e4ff' }}
      >
        {label}
      </Link>
    )
  });

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavButton />
      <div
        className={`drawer ${cairo.className} transform ${isOpen ? 'translate-x-2' : '-translate-x-full'} duration-1000 ease-in-out z-20 w-1/3`}
      >
        {navLinks}
        </div>
    </div>
  )
}
