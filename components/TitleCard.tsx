import React from 'react'
export default function TitleCard() {
  return (
   <div className="max-w-lg absolute left-1/2 transform -translate-x-1/2 text-center">
      <div className="titlewrap container">
        <p className="title text-7xl md:text-8xl font-extralight tracking-tighter subpixel-antialiased">portfolio</p>
      </div>
        <p className="text-lg lg:text-xl font-normal tracking-tighter subpixel-antialiased">Adam Robson</p>
    </div>
  );
}
