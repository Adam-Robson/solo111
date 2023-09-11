
export default function Home() {
  return (
    <>
      <main className="w-screen h-screen fadein">

        <h1 className="title max-w-full m-2 text-5xl sm:text-6xl md:text-7xl subpixel-antialiased">this is a portfolio</h1>
        <section className="h-full flex flex-col absolute right-4 sm:top-10 lg:top-20 text-right">
          <NavLink
            className="homelink text-2xl sm:text-3xl md:text-4xl my-2 lg:my-4 subpixel-antialiased"
            to="/bio"
            target="blank"
          >bio</NavLink>
          <NavLink
            className="homelink text-2xl sm:text-3xl md:text-4xl my-2 lg:my-4 subpixel-antialiased"
            to="/projects"
            target="blank"
          >projects</NavLink>
          <NavLink
            className="homelink text-2xl sm:text-3xl md:text-4xl my-2 lg:my-4 subpixel-antialiased"
            to="/arts"
            target="blank"
          >arts</NavLink>
          <NavLink
            className="homelink text-2xl sm:text-3xl md:text-4xl my-2 lg:my-4 subpixel-antialiased"
            to="/resume"
            target="blank"
          >resume</NavLink>
          <NavLink
            className="homelink text-2xl sm:text-3xl md:text-4xl my-2 lg:my-4 subpixel-antialiased"
            to="/misc"
            target="blank"
          >misc.</NavLink>
        </section>

        <h2 className="name absolute bottom-20 right-4 sm:bottom-8 w-full max-w-md mx-auto flex justify-end items-center text-4xl md:text-4xl lg:text-6xl">
          Adam Robson
        </h2>

        <section className="contact absolute bottom-8 w-full max-w-sm mx-auto flex justify-evenly items-baseline">

          <NavLink
            to="https://www.buymeacoffee.com/AdamRobson"
            className="homelink subpixel-antialiased"
            target="blank"
          >
            <SiBuymeacoffee
              className="project-icon"
              size={40}
              data-testid="coffee-icon-link"
            />
          </NavLink>

          <NavLink
            to="https://github.com/Adam-Robson"
            className="homelink subpixel-antialiased"
            target="blank"
          >
            <SiGithub
              className="project-icon"
              size={40}
              data-testid="github-icon-link"
            />
          </NavLink>

          <NavLink
            to="https://www.linkedin.com/in/adamrayrobson"
            className="homelink subpixel-antialiased"
            target="blank"
          >
            <SiLinkedin
              className="project-icon"
              size={40}
              data-testid="linkedin-icon-link"
            />
          </NavLink>

          <NavLink
            to="https://spoti.fi/3QNqMuE"
            className="homelink subpixel-antialiased"
            target="blank"
          >
            <SiSpotify
              className="project-icon"
              size={40}
              data-testid="spotify-icon-link"
            />
          </NavLink>
        </section>
      </main>
    </>
  );
}
