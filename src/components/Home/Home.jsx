import React from 'react';

export default function Home() {
  return (
    <>
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
      </section>
    </>
  );
}
