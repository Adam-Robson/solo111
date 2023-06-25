import React from 'react';
import { Link } from 'react-router-dom';
import pantry from '../assets/pal.png';
import poster from '../assets/poster.png';
import collabo from '../assets/collabo.png';
import marked from '../assets/markdown.svg';
import tallyho from '../assets/tallyho.png';
import heart from '../assets/heart.png';

export default function Projects() {
  return (
    <>
      <section className="fadein px-6">
        <Link className="text-7xl sm:text-8xl md:text-9xl relative top-8 mb-20 subpixel-antialiased" to='/'>
          projects
        </Link>
        <div className="flex justify-center items-center">
          <article className="container flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly md:items-center">
            <div className="icon text-center text-3xl subpixel-antialiased p-6">
              <Link
                to="https://pantry-pal-colab.heroku.app">
                <img
                  src={ pantry }
                  alt="icon for pantry pal"
                  className="icon project_icon h-60 md:mx-32"
                />
                <label className="label">pantry pal</label>
              </Link>
            </div>
            <div className="text-center text-3xl subpixel-antialiased">
              <Link
                to="https://buddystockviii.com">
                <img
                  src={ poster }
                  alt="icon for buddystock"
                  className="project_icon h-96 md:mx-32"
                />
                <label className="label">buddystock</label>
              </Link>
            </div>
            <div className="text-center text-3xl subpixel-antialiased">
              <Link
                to="https://collabomusic.co/">
                <img
                  src={ collabo }
                  alt="icon for collabo"
                  className="project_icon h-72 my-10 md:mx-32"
                />
                <label className="label">collabo</label>
              </Link>
            </div>
            <div className="text-center text-3xl subpixel-antialiased">
              <Link
                to="https://tally-ho-road-trips.netlify.app/auth/sign-in">
                <img
                  src={ tallyho }
                  alt="icon for tallyho"
                  className="project_icon h-40 my-10 md:mx-32"
                />
                <label className="label">tallyho</label>
              </Link>
            </div>
            <div className="text-center text-3xl subpixel-antialiased">
              <Link
                to="https://adaamsfavoritebooks.netlify.app/">
                <img 
                  src={ heart } 
                  alt="a heart image" 
                  className="project_icon h-52 my-10 md:mx-32  " />
                <label className="label">favorite books</label>
              </Link>
            </div>
            <div className="text-center text-3xl subpixel-antialiased">
              <Link
                to="https://meek-griffin-f402ef.netlify.app">
                <img
                  src={ marked }
                  alt="icon for marked-icon"
                  className="project_icon h-72 my-10 md:mx-32"
                />
                <label className="label">marxdown</label>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
  