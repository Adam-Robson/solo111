import React from 'react';

export default function Home() {
  return (
    <>
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
      </section>
    </>
  );
}
