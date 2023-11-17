'use client'
import { useState } from 'react';
import type { ButtonProps } from '@/lib/types';
import { PiListDuotone } from 'react-icons/pi';

export default function NavButton({ onClick }: ButtonProps) {
  const [down, setDown] = useState(false);

  function handleMouseDown() {
    setDown(true);
  }

  function handleMouseUp() {
    setDown(false);
    onClick()
  }

  return (
    <button
      className={`nav-button ${down ? 'pressed' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      <PiListDuotone />
    </button>
  );
}
