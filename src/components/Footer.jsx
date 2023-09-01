import {
  SiBuymeacoffee,
  SiGithub,
  SiLinkedin,
  SiSpotify
} from 'react-icons/si';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full absolute bottom-0">
      <NavLink
        to="https://www.buymeacoffee.com/AdamRobson"
        className="homelink subpixel-antialiased"
        target="blank"
      >
        <SiBuymeacoffee
          className="m-4"
          size={28}
          data-testid="coffee-icon-link"
        />
      </NavLink>
      <NavLink
        to="https://github.com/Adam-Robson"
        className="homelink subpixel-antialiased"
        target="blank"
      >
        <SiGithub
          className="m-4"
          size={28}
          data-testid="github-icon-link"
        />
      </NavLink>
      <NavLink
        to="https://www.linkedin.com/in/adamrayrobson"
        className="homelink subpixel-antialiased"
        target="blank"
      >
        <SiLinkedin
          className="m-4"
          size={28}
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
          size={28}
          data-testid="spotify-icon-link"
        />
      </NavLink>
    </footer>
  );
}
