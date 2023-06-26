import { NavLink } from 'react-router-dom';
import { SiSpotify, SiBuymeacoffee, SiGithub, SiLinkedin } from 'react-icons/si';

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen fadein">
        <div className="p-4">
          <h1 className="title max-w-full m-2 text-7xl sm:text-8xl md:text-9xl subpixel-antialiased">this is a portfolio</h1>
        </div>
        <div className="h-full flex flex-col absolute right-4 text-right">
          <NavLink
            className="homelink text-3xl sm:text-4xl md:text-5xl subpixel-antialiased"
            to="/bio"
          >bio</NavLink>
          <NavLink
            className="homelink text-3xl sm:text-4xl md:text-5xl subpixel-antialiased"
            to="/projects"
          >projects</NavLink>
          <NavLink
            className="homelink text-3xl sm:text-4xl md:text-5xl subpixel-antialiased"
            to="/arts"
          >arts</NavLink>
          <NavLink
            className="homelink text-3xl sm:text-4xl md:text-5xl subpixel-antialiased"
            to="/resume"
          >resume</NavLink>
          <NavLink
            className="homelink text-3xl sm:text-4xl md:text-5xl subpixel-antialiased"
            to="/misc"
          >misc.</NavLink>
        </div>

        <article className="name absolute bottom-20 right-4 sm:bottom-8 w-full max-w-md mx-auto flex justify-end items-center text-4xl md:text-5xl lg:text-6xl">
          Adam Robson
        </article>

        <article className="contact absolute bottom-8 w-full max-w-sm mx-auto flex justify-evenly items-baseline">

          <NavLink
            href="https://www.buymeacoffee.com/AdamRobson"
            className="homelink subpixel-antialiased">
            <SiBuymeacoffee className="project-icon" size={ 40 } />
          </NavLink>

          <NavLink
            href="https://github.com/Adam-Robson"
            className="homelink subpixel-antialiased">
            <SiGithub className="project-icon" size={ 40 } />
          </NavLink>

          <NavLink
            href="https://www.linkedin.com/in/adamrayrobson/"
            className="homelink subpixel-antialiased">
            <SiLinkedin className="project-icon" size={ 40 } />
          </NavLink>

          <NavLink
            href="https://spoti.fi/3QNqMuE"
            className="homelink subpixel-antialiased">
            <SiSpotify className="project-icon" size={ 40 } />
          </NavLink>
        </article>
      </main>
    </>
  );
}
