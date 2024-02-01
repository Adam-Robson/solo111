'use client'
import React, { useEffect, useState } from 'react'
import { PiMoon, PiMoonStars } from 'react-icons/pi'
import { useDarkMode } from '@/lib/context/DarkModeContext'

export default function DarkModeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [text, setText] = useState('')
  const [visible, setVisible] = useState(true)

  const handleToggleDarkMode = () => {
    toggleDarkMode();
    setText(darkMode ? 'Dark Mode' : 'Light Mode');
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (visible) {
      timer = setTimeout(() => {
        setVisible(false);
      }, 2000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [visible]);

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
      {
        visible ? (
          <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
        ) : null
      }
    </div>
  )
}
