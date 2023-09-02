import { NavLink } from 'react-router-dom';

export default function Header() {
  return (

    <header
      className={
        `absolute top-0 left-0 w-full mx-auto my-4 flex justify-around font-light`
      }
    >
       <NavLink
        to="/bio"
        className="text-xl hover:underline hover:font-normal subpixel-antialiased"
      >bio</NavLink>

       <NavLink
        to="projects"
        className="text-xl hover:underline hover:font-normal subpixel-antialiased"
      >projects</NavLink>

      <NavLink
        to="arts"
        className="text-xl hover:underline hover:font-normal subpixel-antialiased"
      >arts</NavLink>

        <NavLink
        to="/resume"
        className="text-xl hover:underline hover:font-normal subpixel-antialiased"
      >resum&eacute;</NavLink>

      <NavLink
        to="/misc"
        className="text-xl hover:underline hover:font-normal subpixel-antialiased"
      >misc.</NavLink>
    </header>



  );
}
