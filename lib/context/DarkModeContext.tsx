'use client'
import React, { createContext, useContext, useState } from 'react';

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface DarkModeProviderProps {
  children: React.ReactNode;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function checkLocalStorage() {
    // Check if dark mode preference is stored in localStorage
    const localDarkMode = localStorage.getItem('darkMode');
    if (localDarkMode !== null) {
      // If dark mode preference is stored, return its boolean value
      return JSON.parse(localDarkMode);
    } else {
      return 'There is no dark mode set in local storage'
    }
  }

  function setLocalDarkMode() {
    const localDarkMode = checkLocalStorage();
    if (typeof localDarkMode === 'boolean') {
      setDarkMode(localDarkMode);
    } else {
      window.matchMedia('(prefers-color-scheme: dark)').matches ? setDarkMode(true) : setDarkMode(false);
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
  }

  function toggleDarkMode() {
    let check = checkLocalStorage();
    let set = setLocalDarkMode();
    if (localStorage.getItem('darkMode') === 'true') {
      localStorage.setItem('darkMode', 'false');
      setDarkMode(false);
      console.log(darkMode);

    } else {
      localStorage.setItem('darkMode', 'true');
      setDarkMode(true);
      console.log(darkMode);

    }
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
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
