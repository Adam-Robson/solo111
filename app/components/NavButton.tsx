'use client'
import { useState } from 'react';
import { PiListDuotone } from 'react-icons/pi';

export default function NavButton() {
  const [open, setOpen] = useState<boolean>(false);

  function handleMouseDown(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setOpen(true);
  }

  function handleMouseUp(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setOpen(false);
  }

  return (
    <button
      className={`nav-button ${open ? 'pressed' : ''} absolute top-8 left-4 z-20`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{ color: '#ffffff', border: '#ffffff' }}
    >
      <PiListDuotone />
    </button>
  );
}
