'use client'
import { useEffect, useState } from 'react';
import { TITLE_COLORS } from '../utils/constants';

export default function Title() {
  const colors = TITLE_COLORS;
  
  const [colorIndex, setColorIndex] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((idx) =>
        (idx + 1) % colors.length
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [colors.length]);


  return (
        <h1 style={{ color: colors[colorIndex] }} className="text-8xl m-4 font-light subpixel-antialiased">portfolio</h1>
  )
}
