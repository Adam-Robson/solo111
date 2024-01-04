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
        <Link href="https://linkedin.com/in/adamrayrobson" className="linkedwrap">
          <PiLinkedinLogo
            size={48}
            className="linked"
          />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/Adam-Robson" className="githubwrap">
          <PiGithubLogo
            size={48}
            className="github"
          />
        </Link>
      </li>
      <li>
        <Link href="https://spoti.fi/3QNqMuE" className="spotwrap">
          <PiSpotifyLogo
            size={48}
            className="spot"
          />
        </Link>
      </li>
    </ul>
  )
}
