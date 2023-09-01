import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header
      className="w-screen max-h-40 h-1/5 flex justify-around items-baseline"
    >

      <NavLink
        to="projects"
        className="text-2xl subpixel-antialiased"
      >projects</NavLink>

      <NavLink
        to="/resume"
        className="text-2xl subpixel-antialiased"
      >resum&eacute;</NavLink>

      <NavLink
        to="arts"
        className="text-2xl subpixel-antialiased"
      >arts</NavLink>

      <NavLink
        to="/bio"
        className="text-2xl subpixel-antialiased"
      >bio</NavLink>

      <NavLink
        to="/misc"
        className="text-2xl subpixel-antialiased"
      >misc.</NavLink>

    </header>
  );
}
