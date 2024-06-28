import Link from 'next/link';
import { PiLinkedinLogo, PiGithubLogo, PiSpotifyLogo } from 'react-icons/pi';

export default function SocialIcons() {
  return (
    <ul className="w-full flex justify-between items-baseline ">
      <li><Link href="https://linkedin.com/in/adamrayrobson" className="linkedinwrap" target="_blank"><PiLinkedinLogo size={32} className="linkedin my-4" /></Link></li>
      <li><Link href="https://github.com/Adam-Robson" className="githubwrap" target="_blank"><PiGithubLogo size={32} className="github my-4" /></Link></li>
      <li><Link href="https://spoti.fi/3QNqMuE" className="spotifywrap" target="_blank"><PiSpotifyLogo size={32} className="spotify my-4" /></Link></li>
    </ul>
  );
}
