import Link from 'next/link'
import {
  PiLinkedinLogo,
  PiGithubLogo,
  PiSpotifyLogo,
} from 'react-icons/pi';

export default function SocialIconLinks() {
  return (
    <ul className="max-w-md w-60 flex justify-between items-baseline">
      <li>
        <Link href="https://linkedin.com/in/adamrayrobson">
          <PiLinkedinLogo
            size={48}
          />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/Adam-Robson">
          <PiGithubLogo
            size={48}
          />
        </Link>
      </li>
      <li>
        <Link href="https://spoti.fi/3QNqMuE">
          <PiSpotifyLogo
            size={48}
          />
        </Link>
      </li>
    </ul>
  )
}
