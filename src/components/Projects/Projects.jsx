import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <>
      <Link className="min-w-full text-xs m-6 subpixel-antialiased md:m-12" to="/">back</Link>
      <h2 className="text-center text-xl py-8 subpixel-antialiased md:text-3xl">projects</h2>
      <section className="flex flex-col items-center">
        <Link
          to="https://collabomusic.co/">
          <img
            src={ process.env.PUBLIC_URL + '/images/collabo.png' }
            alt="icon for collabo" />
          <p className="text-center mb-4 subpixel-antialiased">collabo</p>
        </Link>
        <Link
          to="https://tally-ho-road-trips.netlify.app/auth/sign-in">
          <img
            src={ process.env.PUBLIC_URL + '/images/tallyho.png' }
            alt="icon for tallyho" />
          <p className="text-center subpixel-antialiased">tallyho</p>
        </Link>
        <Link
          to="https://deft-rolypoly-d4e615.netlify.app/">
          <img
            src={ process.env.PUBLIC_URL + '/images/book.png' }
            alt="icon for good books" />
          <p className="text-center subpixel-antialiased">books</p>
        </Link>
        <Link
          to="https://preeminent-bunny-fb20a4.netlify.app">
          <img
            src={ process.env.PUBLIC_URL + '/images/marked.png' }
            alt="icon for marked-icon" />
          <p className="text-center subpixel-antialiased">markdown editor</p>
        </Link>
        <Link
          to="https://stirring-creponne-0aabc9.netlify.app">
          <img
            src={ process.env.PUBLIC_URL + '/images/poem.png' }
            alt="icon for poetry" />
          <p className="text-center subpixel-antialiased">just like poetry</p>
        </Link>
      </section>
    </>
  );
}
