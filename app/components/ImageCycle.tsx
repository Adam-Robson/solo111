import { useEffect, useState } from 'react';
import Image from 'next/image';
import { meimages } from '../lib/data';

export default function ImageCycle() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % meimages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <Image
        src={meimages[currentImageIndex]}
        className="max-w-full h-auto"
        alt="a photo of adam"
        width="500"
        height="500"
      />
    </div>
  );
}
