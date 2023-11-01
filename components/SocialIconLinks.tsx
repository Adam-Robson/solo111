import React from 'react'
import Link from 'next/link'
import {
  PiLinkedinLogoLight,
  PiGithubLogoLight,
  PiSpotifyLogoLight
} from 'react-icons/pi';

export default function SocialIconLinks() {
  return (
    <ul className="max-w-sm w-48 md:max-w-md md:w-52 flex justify-between items-baseline">
      <li>
        <Link href="https://linkedin.com/in/adamrayrobson">
          <PiLinkedinLogoLight
            data-testid="icon-links"
            className="h-6 md:h-8 lg:h-10 w-6 md:w-10 lg:w-12"
          />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/Adam-Robson">
          <PiGithubLogoLight
            data-testid="icon-links"
            className="h-6 md:h-8 lg:h-10 w-6 md:w-10 lg:w-12"
          />
        </Link>
      </li>
      <li>
        <Link href="https://spoti.fi/3QNqMuE">
          <PiSpotifyLogoLight
            data-testid="icon-links"
            className="h-6 md:h-8 lg:h-10 w-6 md:w-10 lg:w-12"
          />
        </Link>
      </li>
    </ul>
  )
}
