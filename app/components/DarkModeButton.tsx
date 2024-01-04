'use client'
import React from 'react'
import { PiMoonBold } from 'react-icons/pi'
import { useDarkMode } from '@/lib/context/DarkModeContext'

export default function DarkModeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div 
      onClick={toggleDarkMode}
      className="flex justify-end items-center absolute top-4 right-8 z-10"
    >
        <PiMoonBold size={32} />
        {darkMode ? 'Dark Mode' : 'Light Mode'}
    </div>
  )
}
