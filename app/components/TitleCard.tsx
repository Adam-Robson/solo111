import React from 'react'
import Image from 'next/image';

export default function TitleCard() {
  return (
    <div
      className="max-w-xl absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
        <Image
          src="/images/logo.svg"
          alt="a portfolio by Adam Robson logo"
          width={500}
          height={500}
          className="z-20"
        />

      <h2 className="subtitle text-lg font-normal tracking-tighter subpixel-antialiased text-center relative bottom-28 left-10">
        a portfolio by Adam Robson
      </h2>
    </div>
  );
}
