import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <>
      <section className="w-screen mx-auto my-20 h-screen">
        <h2 className="text-center text-2xl md:text-3xl py-4 subpixel-antialiased underline w-2/3 mx-auto">projects</h2>
        <div className="w-1/2 mx-auto text-center text-xs md:text-lg leading-loose subpixel-antialiased">
          <p>All of the projects listed below were created by Adam Robson.  collabo and tallyho were built as a part of a team with 3-4 other developers.</p>  
        </div>
        <article className="flex flex-col items-center flex-wrap md:flex-row md:justify-evenly md:items-center mt-16 md:mx-16">
          <Link
            to="https://buddystockviii.com">
            <img
              src={ process.env.PUBLIC_URL + '/images/giphy.gif' }
              alt="icon for buddystock"
              className="max-h-44"
            />
            <p className="text-center mb-4 subpixel-antialiased">buddystock viii</p>
          </Link>
          <Link
            to="https://collabomusic.co/">
            <img
              src={ process.env.PUBLIC_URL + '/images/collabo.png' }
              alt="icon for collabo"
              className="group/pic"
            />
            <p className="text-center mb-4 subpixel-antialiased">collabo</p>
          </Link>
          <Link
            to="https://tally-ho-road-trips.netlify.app/auth/sign-in">
            <img
              src={ process.env.PUBLIC_URL + '/images/tallyho.png' }
              alt="icon for tallyho"
              className="group/pic"
            />
            <p className="text-center subpixel-antialiased">tallyho</p>
          </Link>
          <Link
            to="https://https://deft-rolypoly-d4e615.netlify.app/">
            <img
              src={ process.env.PUBLIC_URL + '/images/book.png' }
              alt="icon for good books"
              className="group/pic"
            />
            <p className="text-center subpixel-antialiased">books</p>
          </Link>
          <Link
            to="https://preeminent-bunny-fb20a4.netlify.app">
            <img
              src={ process.env.PUBLIC_URL + '/images/marked.png' }
              alt="icon for marked-icon"
              className="group/pic"
            />
            <p className="text-center subpixel-antialiased">markdown editor</p>
          </Link>
          <span>___</span>
        </article>
      </section>
    </>
  );
}
