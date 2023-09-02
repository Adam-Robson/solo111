import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header
      className={
        `absolute top-2 left-0 w-full mx-auto my-4 flex justify-around font-light`
      }
    >
       <NavLink
        to="/bio"
        className="text-xl sm:text-2xl lg:text-3xl hover:underline hover:font-normal tracking-wider subpixel-antialiased"
      >bio</NavLink>

       <NavLink
        to="projects"
        className="text-xl  sm:text-2xl lg:text-3xl hover:underline hover:font-normal tracking-wider subpixel-antialiased"
      >projects</NavLink>

      <NavLink
        to="arts"
        className="text-xl sm:text-2xl lg:text-3xl hover:underline hover:font-normal tracking-wider subpixel-antialiased"
      >arts</NavLink>

        <NavLink
        to="/resume"
        className="text-xl sm:text-2xl lg:text-3xl hover:underline hover:font-normal tracking-wider subpixel-antialiased"
      >resume</NavLink>

      <NavLink
        to="/misc"
        className="text-xl sm:text-2xl lg:text-3xl hover:underline hover:font-normal tracking-wider subpixel-antialiased"
      >misc.</NavLink>
    </header>
  );
}
