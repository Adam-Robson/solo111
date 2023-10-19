import React from 'react'
import Title from './Title'

export default function TitleCard() {
  return (
    <div className="max-w-2xl absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
      <Title />
        <p className="text-xl font-normal subpixel-antialiased">Adam Robson</p>
    </div>
  );
}
