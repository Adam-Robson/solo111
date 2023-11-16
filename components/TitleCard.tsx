import React from 'react'
export default function TitleCard() {
  return (
    <div className="max-w-lg absolute left-1/2 transform -translate-x-1/2 text-center z-50">
      <div className="titlewrap">
        <h1 className="title text-8xl font-light tracking-tighter subpixel-antialiased">portfolio</h1>
      </div>
      <p className="text-lg lg:text-xl font-normal tracking-tighter subpixel-antialiased">Adam Robson</p>
    </div>
  );
}
