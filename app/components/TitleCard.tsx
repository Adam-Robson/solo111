import React from 'react'
import Image from 'next/image';

export default function TitleCard() {
  return (
    <div
      className="max-w-md absolute left-1/2 transform -translate-x-1/2 z-10 text-center">
          <Image
            src="/images/logo.svg"
            alt="a portfolio by Adam Robson logo"
            width={500}
            height={500}
          />
        <h2 className="subtitle text-xl font-normal tracking-tighter subpixel-antialiased">
          a portfolio by Adam Robson
        </h2>
    </div>
  );
}
