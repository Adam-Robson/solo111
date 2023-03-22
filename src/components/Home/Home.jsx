import React from 'react';

export default function Home() {
  return (
    <>
      <section id="home-section" className="text-center md:min-h-full" style={ { color: `var(--feldgrau)` } }>
        <div className="text-center">
          <h1 className="text-center text-5xl my-32 font-extralight tracking-wider md:text-7xl subpixel-antialiased">
            <p><strong><i>this</i></strong>.portfolio</p>
          </h1>
          <h2 className="text-xl font-light tracking-wider subpixel-antialiased md:text-3xl">adam robson</h2>
          <h3 className="text-center text-sm font-light tracking-wider subpixel-antialiased my-32 mx-8 md:text-lg">
            <i>creative software solutions designed using progressive programming methods</i>
          </h3>
          <ul className="flex justify-evenly items-end min-w-full absolute bottom-0 mb-20 subpixel-antialiased">
            <li className="cursor-pointer"><a href="/about">about</a></li>
            <li className="cursor-pointer"><a href="/projects">projects</a></li>
            <li className="cursor-pointer"><a href="/arts">arts</a></li>
            <li className="cursor-pointer"><a href="/contact">contact</a></li>
          </ul>
        </div >
      </section>
    </>
  );
}
