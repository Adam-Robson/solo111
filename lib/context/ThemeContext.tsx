'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProviderType, ThemeContextType } from '../types';


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }: ThemeProviderType) {
  const [darkMode, setDarkMode] = useState(() => {
    const localDarkMode = localStorage.getItem('darkMode');
    return localDarkMode ? JSON.parse(localDarkMode) : false;
  });

  function toggleDarkMode() {
    setDarkMode((prevDarkMode: boolean) => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem('darkMode', JSON.stringify(newDarkMode));

      if (newDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }

      return newDarkMode;
    });
  }

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  // Effect to update local storage when dark mode changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    // Add/remove dark-mode class to body
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
