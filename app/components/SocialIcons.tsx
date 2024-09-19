import Link from "next/link";
import { PiLinkedinLogo, PiGithubLogo, PiSpotifyLogo } from "react-icons/pi";

export default function SocialIcons() {
  return (
    <div className="w-full max-w-screen-md mx-auto flex justify-between items-baseline z-50 px-12 pb-12">
      <ul className="w-full flex justify-between">
        <li>
          <Link
            href="https://linkedin.com/in/adamrayrobson"
            className="linkedinwrap"
            target="_blank"
          >
            <PiLinkedinLogo
              size={32}
              className="icon linkedin my-4"
              aria-label="linkedin"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/Adam-Robson"
            className="githubwrap"
            target="_blank"
          >
            <PiGithubLogo
              size={32}
              className="icon github my-4"
              aria-label="github"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://spoti.fi/3QNqMuE"
            className="spotifywrap"
            target="_blank"
          >
            <PiSpotifyLogo
              size={32}
              className="icon spotify my-4"
              aria-label="spotify"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
