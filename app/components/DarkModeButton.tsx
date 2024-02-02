'use client'
import React, { useEffect, useState } from 'react'
import { PiMoon, PiMoonStars } from 'react-icons/pi'
import { useDarkMode } from '@/lib/context/DarkModeContext'

export default function DarkModeButton() {
  const { showText, darkMode, toggleDarkMode } = useDarkMode();
  const [visible, setVisible] = useState(true)

  const handleToggleDarkMode = () => {
    toggleDarkMode();
  };

  return (
    <div
      onClick={handleToggleDarkMode}
      className={
        `hover:cursor-pointer min-h-16 h-16 toggle-text-wrap text-sm md:text-base/4 lg:text-lg/5 flex flex-col items-center`
      }
    >
      {darkMode
        ? <PiMoon style={{color: '#f0f8ffff' }} size={24} className="mr-2"/>
        : <PiMoonStars style={{color: '#f0f8ffff'}} size={24} className="mr-2"/>}

      <div>
        {showText && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
      </div>
    </div>
  )
}
