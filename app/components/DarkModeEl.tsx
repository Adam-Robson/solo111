import React from 'react'
import { PiMoon, PiMoonStars } from 'react-icons/pi';
import { useTheme } from '@/lib/context/ThemeContext';

export default function DarkModeEl() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div>
      <div
        onClick={toggleDarkMode}
        className="hover:cursor-pointer transition-transform duration-200 hover:scale-105 py-4"
      >
      {darkMode
        ? <PiMoon style={{color: '#dce5e7ff' }} size={24} />
        : <PiMoonStars style={{color: '#353839ff'}} size={24} />}
      </div>
    </div>
  )
}

