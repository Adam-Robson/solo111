'use client'
import { useState } from 'react'
import type { WritingType } from '@/lib/types';

export default function WritingCard({ title, body }: WritingType) {
  const [showCard, setShowCard] = useState(false);

  function toggleCard() {
    setShowCard(!showCard);
  }

  return (
    <div>
      {showCard && (
        <div className="border-2 border-gray-600 shadow-md rounded-md w-48 h-72">
          <div className='text-center text-lg/5 subpixel-antialiased'>{title}</div>
          <div className='text-base/4 subpixel-antialiased'>{body}</div>
        </div>
      )}
    </div>
  );
}
