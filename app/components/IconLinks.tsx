import React from 'react'
import Link from 'next/link'
import {
  PiLinkedinLogoDuotone,
  PiGithubLogoDuotone,
  PiSpotifyLogoDuotone
} from 'react-icons/pi';

export default function IconLinks() {
  return (
    <ul className="max-w-xl w-full flex justify-between items-baseline">
      <li>
        <Link href="https://linkedin.com/in/adamrayrobson">
          <PiLinkedinLogoDuotone className="h-8 w-8" />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/Adam-Robson">
          <PiGithubLogoDuotone className="h-8 w-8" />
        </Link>
      </li>
      <li>
        <Link href="https://spoti.fi/3QNqMuE">
          <PiSpotifyLogoDuotone className="h-8 w-8" />
        </Link>
      </li>
    </ul>
  )
}
