import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import buddystock from '../../assets/giphy.gif';
import collabo from '../../assets/collabo.png';
import tallyho from '../../assets/tallyho.png';
import heart from '../../assets/heart-512.png';
import marked from '../../assets/marked.png';

export default function Projects() {
  return (
    <>
      <NavLink to="/" className="text-sm md:text-lg m-10 absolute top-0 left-0">home</NavLink>
      <section className="">
        <h2
          className="subtitle max-w-max mx-auto text-center text-xl md:text-2xl my-16 p-2 subpixel-antialiased underline"
        >
          projects
        </h2>
        <aside className="caption text-center text-xs relative bottom-12"><em>*hover on image to view name</em></aside>
       
        <article className="text-center flex flex-col items-center justify-around">
          <div className="my-10">
            <Link
              to="https://buddystockviii.com">
              <img
                src={ buddystock }
                alt="icon for buddystock"
                className="project_icon h-40"
              />
              <label className="label">buddystock viii</label>
            </Link>
          </div>
          <div className="my-10">
            <Link
              to="https://collabomusic.co/">
              <img
                src={ collabo }
                alt="icon for collabo"
                className="project_icon"
              />
              <label className="label">collabo</label>
            </Link>
          </div>
          <div className="my-10">
            <Link
              to="https://tally-ho-road-trips.netlify.app/auth/sign-in">
              <img
                src={ tallyho }
                alt="icon for tallyho"
                className="project_icon"
              />
              <label className="label">tallyho</label>
            </Link>
          </div>
          <div className="my-10">
            <Link
              to="https://https://deft-rolypoly-d4e615.netlify.app/">
              <img
                src={ heart }
                alt="icon for good books"
                className="project_icon h-40"
              />
              <label className="label">books</label>
            </Link>
          </div>
          <div className="my-10">
            <Link
              to="https://preeminent-bunny-fb20a4.netlify.app">
              <img
                src={ marked }
                alt="icon for marked-icon"
                className="project_icon"
              />
              <label className="label">markdown editor</label>
            </Link>
          </div>
          <div className="caption w-1/2 mx-auto text-center text-sm md:text-lg subpixel-antialiased mb-20">
            <em>
              buddystock, books, and marxdown! were created by adam robson; tallyho and collabo were built by adam robson on a four-person team of developers.
            </em>
          </div>
        </article>
      </section>
    </>
  );
}
