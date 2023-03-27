import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <>
      <h2 className="text-center text-xl md:text-3xl py-8 subpixel-antialiased">projects</h2>
      <aside className="text-center text-sm max-w-xs mx-auto my-12 md:text-lg md:max-w-md">
        all of the projects listed below were created by the author.  collabo and tallyho were
        built by the author as a part of a team with 3-4 other developers.
      </aside>
      <section className="flex flex-col items-center flex-wrap md:flex-row md:justify-evenly md:items-center md:mt-16 md:mx-16">
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
          {/* <span className="invisible">
            <aside id="pop-out" className="group-hover/pic:visible">
              music sharing platform
            </aside>
          </span> */}
        </Link>
        <Link
          to="https://tally-ho-road-trips.netlify.app/auth/sign-in">
          <img
            src={ process.env.PUBLIC_URL + '/images/tallyho.png' }
            alt="icon for tallyho"
            className="group/pic"
          />
          <p className="text-center subpixel-antialiased">tallyho</p>
          {/* <span className="invisible">
            <aside id="pop-out" className="group-hover/pic:visible">
              plan a roadtrip!
            </aside>
          </span> */}
        </Link>
        <Link
          to="https://deft-rolypoly-d4e615.netlify.app/">
          <img
            src={ process.env.PUBLIC_URL + '/images/book.png' }
            alt="icon for good books"
            className="group/pic"
          />
          <p className="text-center subpixel-antialiased">books</p>
          {/* <span className="invisible">
            <aside id="pop-out" className="group-hover/pic:visible">
              my favorite books and authors.
            </aside>
          </span> */}
        </Link>
        <Link
          to="https://preeminent-bunny-fb20a4.netlify.app">
          <img
            src={ process.env.PUBLIC_URL + '/images/marked.png' }
            alt="icon for marked-icon"
            className="group/pic"
          />
          <p className="text-center subpixel-antialiased">markdown editor</p>
          {/* <span className="invisible">
            <aside id="pop-out" className="group-hover/pic:visible">
              i built a markdown editor!
            </aside>
          </span> */}
        </Link>
        <Link
          to="https://stirring-creponne-0aabc9.netlify.app">
          <img
            src={ process.env.PUBLIC_URL + '/images/poem.png' }
            alt="icon for poetry"
            className="group/pic"
          />
          <p className="text-center subpixel-antialiased">just like poetry</p>
          {/* <span className="group/pic invisible group-hover/pic:visible">
            <aside id="pop-out" className="group-hover/pic:visible">
              build a haiku from random phrases from other poems!
            </aside>
          </span> */}
        </Link>
      </section>
    </>
  );
}
