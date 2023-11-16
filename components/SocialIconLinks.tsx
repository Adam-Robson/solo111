import Link from 'next/link'
import {
  PiLinkedinLogoLight,
  PiGithubLogoLight,
  PiSpotifyLogoLight
} from 'react-icons/pi';

export default function SocialIconLinks() {
  return (
    <ul className="max-w-sm w-48 flex justify-between items-baseline">
      <li>
        <Link href="https://linkedin.com/in/adamrayrobson">
          <PiLinkedinLogoLight
            size={40}
          />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/Adam-Robson">
          <PiGithubLogoLight
            size={40}
          />
        </Link>
      </li>
      <li>
        <Link href="https://spoti.fi/3QNqMuE">
          <PiSpotifyLogoLight
            size={40}
          />
        </Link>
      </li>
    </ul>
  )
}
