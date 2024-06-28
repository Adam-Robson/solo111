'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { meimages } from '../lib/data';

export default function ImageCycle() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % meimages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-full rounded-lg">
      <Image
        src={meimages[currentImageIndex]}
        className="image max-w-full h-auto rounded-lg m-2 p-2"
        alt="a photo of adam"
        width="500"
        height="500"
      />
    </div>
  );
}
