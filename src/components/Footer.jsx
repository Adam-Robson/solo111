import {
  PiLinkedinLogoDuotone,
  PiGithubLogoDuotone,
  PiSpotifyLogoDuotone
} from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full mr-10 absolute top-0 flex justify-end items-center">
        <NavLink
          to="https://github.com/Adam-Robson"
          className="subpixel-antialiased"
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
          className="subpixel-antialiased"
          target="blank"
        >
          <PiLinkedinLogoDuotone
            data-testid="linkedin-icon-link"
            className="m-4"
            size={24}
          />
        </NavLink>
      <NavLink
        to="https://spoti.fi/3QNqMuE"
        className="subpixel-antialiased"
        target="blank"
      >
        <PiSpotifyLogoDuotone
          className="m-4"
          size={24}
          data-testid="spotify-icon-link"
        />
      </NavLink>
    </footer>
  );
}
