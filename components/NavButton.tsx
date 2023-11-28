'use client'
import { useState } from 'react';
import type { ButtonProps } from '@/lib/types';
import { PiListDuotone } from 'react-icons/pi';

export default function NavButton({ onClick }: ButtonProps) {
  const [open, setOpen] = useState(false);

  function handleMouseDown(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setOpen(true);
  }

  function handleMouseUp(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setOpen(false);
    onClick()
  }

  function handleTouchStart(event: React.TouchEvent<HTMLButtonElement>) {
    event.preventDefault();
    setOpen(true);
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLButtonElement>) {
    event.preventDefault();
    setOpen(false);
    onClick();
  }

  return (
    <button
      className={`nav-button ${open ? 'pressed' : ''} absolute top-8 left-4 z-20`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <PiListDuotone />
    </button>
  );
}
