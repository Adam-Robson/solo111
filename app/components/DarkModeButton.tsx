'use client'
import React from 'react'
import { PiMoon, PiMoonStars } from 'react-icons/pi'
import { useDarkMode } from '@/lib/context/DarkModeContext'

export default function DarkModeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div 
      onClick={toggleDarkMode}
      className={
        `hover: cursor-pointer toggle-text-wrap text-sm md:text-base/4 lg:text-lg/5 flex flex-col items-center`
      }
    >
      {darkMode 
        ? <PiMoon style={{color: 'var(--primary)' }} size={24} className="mr-2"/> 
        : <PiMoonStars style={{color: 'var(--primary)'}} size={24} className="mr-2"/>}

        <span className="toggle-text">{darkMode ? 'light mode' : 'dark mode'}</span>
    </div>
  )
}
