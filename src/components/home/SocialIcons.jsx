import {
  PiLinkedinLogoDuotone,
  PiGithubLogoDuotone,
  PiSpotifyLogoDuotone
} from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-fit absolute top-4 right-4 flex justify-end items-center">
      <NavLink
        to="https://github.com/Adam-Robson"
        className=""
        target="blank"
      >
        <PiGithubLogoDuotone
          className="icon m-4 subpixel-antialiased"
          data-testid="github-icon-link"
        />
      </NavLink>
      <NavLink
        to="https://www.linkedin.com/in/adamrayrobson"
        className=""
        target="blank"
      >
        <PiLinkedinLogoDuotone
          data-testid="linkedin-icon-link"
          className=" icon m-4 subpixel-antialiased"
        />
      </NavLink>
      <NavLink
        to="https://spoti.fi/3QNqMuE"
        className=""
        target="blank"
      >
        <PiSpotifyLogoDuotone
          className="icon m-4 subpixel-antialiased"
          data-testid="spotify-icon-link"
        />
      </NavLink>
    </footer>
  );
}
