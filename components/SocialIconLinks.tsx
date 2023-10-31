import React from 'react'
import Link from 'next/link'
import {
  PiLinkedinLogoDuotone,
  PiCodeDuotone,
  PiMusicNoteDuotone
} from 'react-icons/pi';

export default function SocialIconLinks() {
  return (
    <ul className="max-w-xs w-40 md:max-w-md md:w-48 flex justify-between items-baseline">
      <li>
        <Link href="https://linkedin.com/in/adamrayrobson">
          <PiLinkedinLogoDuotone
            data-testid="icon-links"
            className="h-6 md:h-8 w-6 md:w-8"
          />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/Adam-Robson">
          <PiCodeDuotone
            data-testid="icon-links"
            className="h-6 md:h-8 w-6 md:w-8"
          />
        </Link>
      </li>
      <li>
        <Link href="https://spoti.fi/3QNqMuE">
          <PiMusicNoteDuotone
            data-testid="icon-links"
            className="h-6 md:h-8 w-6 md:w-8"
          />
        </Link>
      </li>
    </ul>
  )
}
