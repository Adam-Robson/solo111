import React from 'react'

export default function TitleCard() {
  return (
    <div 
    className="max-w-md absolute left-1/2 transform -translate-x-1/2 z-10 text-center">
      <div className="titlewrap">
        <h1 className="title text-8xl font-light tracking-tighter subpixel-antialiased">
          portfolio
        </h1>
      </div>
      <h2 className="title text-xl font-normal tracking-tighter subpixel-antialiased">
        Adam Robson
      </h2>
    </div>
  );
}
