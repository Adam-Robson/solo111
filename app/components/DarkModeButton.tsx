'use client'
import React from 'react'
import { PiMoonBold, PiMoonStarsBold } from 'react-icons/pi'
import { useDarkMode } from '@/lib/context/DarkModeContext'

export default function DarkModeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div 
      onClick={toggleDarkMode}
      className={
        `hover: cursor-pointer toggle-text-wrap text-sm md:text-base/4 lg:text-lg/5 flex justify-end items-center absolute bottom-6 left-8 z-10`
      }
    >
      {darkMode 
        ? <PiMoonBold size={32} className="mr-2"/> 
        : <PiMoonStarsBold size={32} className="mr-2"/>}

        <span className="toggle-text">{darkMode ? 'switch to light mode.' : 'switch to dark mode.'}</span>
    </div>
  )
}
