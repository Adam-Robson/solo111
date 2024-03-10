'use client'
import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import { DarkModeContextProps, DarkModeProviderProps } from '../types';


const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState<boolean>(getInitialDarkMode());

  function getInitialDarkMode() {
    const localDarkMode = localStorage.getItem('darkMode');
    if (localDarkMode !== null) {
      return JSON.parse(localDarkMode);
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  }

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  const value = { darkMode, toggleDarkMode };

  return (
    <DarkModeContext.Provider value={value}>
      { children }
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;

}
