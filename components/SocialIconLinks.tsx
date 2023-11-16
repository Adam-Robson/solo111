import Link from 'next/link'
import {
  PiLinkedinLogoLight,
  PiGithubLogoLight,
  PiSpotifyLogoLight
} from 'react-icons/pi';

export default function SocialIconLinks() {
  return (
    <ul className="max-w-md w-60 flex justify-between items-baseline">
      <li>
        <Link href="https://linkedin.com/in/adamrayrobson">
          <PiLinkedinLogoLight
            size={48}
            className="socialicon"
          />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/Adam-Robson">
          <PiGithubLogoLight
            size={48}
            className="socialicon"
          />
        </Link>
      </li>
      <li>
        <Link href="https://spoti.fi/3QNqMuE">
          <PiSpotifyLogoLight
            size={48}
            className="socialicon"
          />
        </Link>
      </li>
    </ul>
  )
}
