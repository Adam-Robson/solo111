import {
  SiBuymeacoffee,
  SiGithub,
  SiLinkedin,
  SiSpotify
} from 'react-icons/si';
import {
  PiLinkedinLogoLight,
  PiGithubLogoDuotone
} from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full absolute bottom-0 flex justify-around">
      <NavLink
        to="https://github.com/Adam-Robson"
        className="homelink subpixel-antialiased"
        target="blank"
      >
        <PiGithubLogoDuotone
          className="m-4"
          size={24}
          data-testid="github-icon-link"
        />
      </NavLink>
      <NavLink
        to="https://www.linkedin.com/in/adamrayrobson"
        className="homelink subpixel-antialiased"
        target="blank"
      >
        <PiLinkedinLogoLight
          className="m-4"
          size={24}
          data-testid="linkedin-icon-link"
        />
      </NavLink>
      <NavLink
        to="https://spoti.fi/3QNqMuE"
        className="homelink subpixel-antialiased"
        target="blank"
      >
        <SiSpotify
          className="m-4"
          size={24}
          data-testid="spotify-icon-link"
        />
      </NavLink>
    </footer>
  );
}
