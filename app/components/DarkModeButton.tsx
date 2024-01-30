'use client'
import React, { useEffect, useState } from 'react'
import { PiMoon, PiMoonStars } from 'react-icons/pi'
import { useDarkMode } from '@/lib/context/DarkModeContext'

export default function DarkModeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const [text, setText] = useState('')
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    if (text !== '') {
      setShowText(true)
      setTimeout(() => {
        setShowText(false)
      }, 5000)
    }
  }, [text])


  const handleToggleDarkMode = () => {
    toggleDarkMode();
    setText(darkMode ? 'Light Mode' : 'Dark Mode');
  };

  return (
    <div
      onClick={handleToggleDarkMode}
      className={
        `hover: cursor-pointer toggle-text-wrap text-sm md:text-base/4 lg:text-lg/5 flex flex-col items-center`
      }
    >
      {darkMode
        ? <PiMoon style={{color: '#f0f8ffff' }} size={24} className="mr-2"/>
        : <PiMoonStars style={{color: '#f0f8ffff'}} size={24} className="mr-2"/>}

        <span className="toggle-text">{text}</span>
    </div>
  )
}
