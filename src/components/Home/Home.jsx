import React from 'react';

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      <section className="w-screen mx-auto min-h-full">
        <h1 className="font-extralight my-8">
          <p className="text-5xl md:text-7xl subpixel-antialiased">
            <strong className="subpixel-antialiased">
              this.
            </strong>
            portfolio
          </p>
        </h1>

        <h2 className="text-2xl md:text-4xl w-1/2 mx-auto my-10 flex flex-row justify-evenly">
          adam ray robson
        </h2>

        <div className="flex justify-center">
          <img
            id="eloquent"
            className="min-h-72 w-72 md:w-96 mix-blend-luminosity"
            src={ process.env.PUBLIC_URL + '/images/condition.png' }
            alt="quote from Eloquent JavaScript"
          />
        </div>
        <ul className="flex justify-evenly items-end min-w-full absolute bottom-0 mb-10">
          <li className="cursor-pointer">
            <a href="/about" className="text-lg md:text-xl subpixel-antialiased">about</a>
          </li>
          <li className="cursor-pointer">
            <a href="/projects" className="text-lg md:text-xl subpixel-antialiased">projects</a>
          </li>
          <li className="cursor-pointer">
            <a href="/arts" className="text-lg md:text-xl subpixel-antialiased">arts</a>
          </li>
          <li className="cursor-pointer">
            <a href="/contact" className="text-lg md:text-xl subpixel-antialiased">contact</a>
          </li>
        </ul>
=======
      <section id="home-section" className="text-center md:min-h-full">
        <div>
          
          <h1
            className="title p-2 text-center text-5xl my-20 font-extralight md:text-7xl w-1/2 mx-auto subpixel-antialiased"
          >
            <p>
              <strong>
                <i>
                  this
                </i>
              </strong>
              .portfolio
            </p>
          </h1>

          <h2
            className="name text-3xl my-10 font-light tracking-wider subpixel-antialiased md:text-4xl"
          >
            adam robson
          </h2>
         
          <figure className="my-20">
            <blockquote cite="https://eloquentjavascript.net/">
              <p className="quote text-sm md:text-xl font-thin w-3/4 mx-auto subpixel-antialiased">
                {
                  '"not all programs are straight roads.  we may,  for example, want to create a branching road, where the program takes the proper branch based on the situation at hand.  this is call conditional execution."'
                }
              </p>
            </blockquote>
            <figcaption className="my-10">
              —<a href="https://eloquentjavascript.net/">Eloquent JavaScript</a>,
              <cite>{
                ' Marijn Haverbeke'
              }</cite>
            </figcaption>
          </figure>
          
          <ul
            className="flex justify-evenly items-end min-w-full absolute bottom-0 mb-20 subpixel-antialiased"
          >
            <li>
              <a href="/about">
                about
              </a>
            </li>
            <li>
              <a href="/projects">
                projects
              </a>
            </li>
            <li>
              <a href="/arts">
                arts
              </a>
            </li>
            <li>
              <a href="/contact">
                contact
              </a>
            </li>
          </ul>
        </div >
>>>>>>> a181277 (face-lift the home page complete)
      </section>
    </>
  );
}
