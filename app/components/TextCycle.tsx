'use client';
import { useState, useEffect } from 'react';
import { mes } from '../lib/data'
export default function TextCycle() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mes.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-full text-center">
      <p className="text-base sm:text-lg md:text-xl subpixel-antialiased p-4">{mes[currentIndex]}</p>
    </div>
  );
}
