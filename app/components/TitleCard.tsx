import React from 'react'
import Image from 'next/image';
import { useTheme } from '@/lib/context/ThemeContext';

export default function TitleCard() {
  const { darkMode } = useTheme();
  console.log({darkMode})
  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center">
      {darkMode ? (
        <Image
          src="/images/golo.svg"
          alt="a portfolio by Adam Robson logo"
          width={350}
          height={350}
        />
      ) : (
        <Image
          src="/images/logo.svg"
          alt="a portfolio by Adam Robson logo"
          width={350}
          height={350}
        />
      )}
      <h2 className="text-base/5 tracking-tighter subpixel-antialiased relative">
        a portfolio by Adam Robson
        </h2>
    </section>
  );
}
