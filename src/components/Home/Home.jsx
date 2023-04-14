import React from 'react';

export default function Home() {
  return (
    <>
      <section className="w-screen mx-auto min-h-full">
        <h1 className="text-5xl font-extralight my-10 md:text-7xl">
          <p className="subpixel-antialiased">
            <strong className="subpixel-antialiased">
              this.
            </strong>
            portfolio
          </p>
        </h1>

        <h2 className="text-4xl w-1/2 mx-auto my-12 flex flex-row justify-evenly">
          adam ray robson
        </h2>

        <div className="flex justify-center">
          <img
            id="eloquent"
            className="min-h-96 w-96 mix-blend-luminosity"
            src={ process.env.PUBLIC_URL + '/images/condition.png' }
            alt="quote from Eloquent JavaScript"
          />
        </div>
        <ul className="flex justify-evenly items-end min-w-full absolute bottom-0 mb-20">
          <li className="cursor-pointer">
            <a href="/about" className="text-xl subpixel-antialiased">about</a>
          </li>
          <li className="cursor-pointer">
            <a href="/projects" className="text-xl subpixel-antialiased">projects</a>
          </li>
          <li className="cursor-pointer">
            <a href="/arts" className="text-xl subpixel-antialiased">arts</a>
          </li>
          <li className="cursor-pointer">
            <a href="/contact" className="text-xl subpixel-antialiased">contact</a>
          </li>
        </ul>
      </section>
    </>
  );
}
