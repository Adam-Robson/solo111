import React from 'react'
import Link from 'next/link'
import {
  PiLinkedinLogoDuotone,
  PiCodeDuotone,
  PiMusicNoteDuotone
} from 'react-icons/pi';

export default function IconLinks() {
  return (
    <ul className="max-w-xs w-40 md:max-w-md md:w-48 flex justify-between items-baseline">
      <li>
        <Link href="https://linkedin.com/in/adamrayrobson">
          <PiLinkedinLogoDuotone className="h-6 md:h-8 w-6 md:w-8" />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/Adam-Robson">
          <PiCodeDuotone className="h-6 md:h-8 w-6 md:w-8" />
        </Link>
      </li>
      <li>
        <Link href="https://spoti.fi/3QNqMuE">
          <PiMusicNoteDuotone className="h-6 md:h-8 w-6 md:w-8" />
        </Link>
      </li>
    </ul>
  )
}
