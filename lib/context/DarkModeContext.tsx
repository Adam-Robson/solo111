'use client'
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { type DarkModeContextProps, type DarkModeProviderProps } from '../types';


const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(false)


  function checkLocalStorage() {
    // check if dark mode preference is stored in localStorage
    const localDarkMode = localStorage.getItem('darkMode');
    if (localDarkMode !== null) {
      // if dark mode preference is stored, return its boolean value
      return JSON.parse(localDarkMode);
    } else {
      return null;
    }
  }

  const setter = useCallback(function setLocalDarkMode() {
    const localDarkMode = checkLocalStorage();
    if (typeof localDarkMode === 'boolean') {
      setDarkMode(localDarkMode);
    } else {
      window.matchMedia('(prefers-color-scheme: dark)').matches ? setDarkMode(true) : setDarkMode(false);
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      if (newMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      setShowText(true);
      setTimeout(() => {
        setShowText(false)
      }, 2500)
      return newMode;
  });
}

  useEffect(() => {
    setter();
    const darkMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
    setDarkMode(darkMode);
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
}, [setter]);

  const value = { showText, darkMode, toggleDarkMode };
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  return context;
};
