import { NavLink } from 'react-router-dom';

export default function Navigation() {
  /**
   * This component renders the
   * navigation menu for the home page.
   *
   */
  return (
    <nav
      className="absolute top-0 left-0 my-8 mx-6 flex flex-col font-light">
      <NavLink
        to="/bio"
        className="text-lg sm:text-xl md:my-1 hover:underline hover:font-normal tracking-wider subpixel-antialiased"
      >bio</NavLink>

      <NavLink
        to="projects"
        className="text-lg sm:text-xl md:my-1 hover:underline hover:font-normal tracking-wider subpixel-antialiased"
      >projects</NavLink>

      <NavLink
        to="arts"
        className="text-lg sm:text-xl md:my-1 hover:underline hover:font-normal tracking-wider subpixel-antialiased"
      >arts</NavLink>

      <NavLink
        to="/resume"
        className="text-lg sm:text-xl md:my-1 hover:underline hover:font-normal tracking-wider subpixel-antialiased"
      >resume</NavLink>

      <NavLink
        to="/misc"
        className="text-lg sm:text-xl md:my-1 hover:underline hover:font-normal tracking-wider subpixel-antialiased"
      >misc.</NavLink>
    </nav>
  );
}
