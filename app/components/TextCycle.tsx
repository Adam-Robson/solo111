import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navigation from '../components/Navigation'
import { mes } from '../lib/data'
export default function TextCycle() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mes.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-full text-center">
      <p className="text-base sm:text-xl md:text-2xl subpixel-antialiased">{mes[currentIndex]}</p>
    </div>
  );
}
