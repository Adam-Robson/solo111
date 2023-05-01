import React from 'react';
import { Link } from 'react-router-dom';
import buddystock from '../../assets/giphy.gif';
import collabo from '../../assets/collabo.png';
import tallyho from '../../assets/tallyho.png';
import heart from '../../assets/heart-512.png';
import marked from '../../assets/marked.png';

export default function Projects() {
  return (
    <>
      <section>
        <div className="backdrop p-4 font-light md:p-10 m-6 md:mx-48">

          <h2
            className="subtitle max-w-max mx-auto text-center text-xl md:text-4xl my-16 p-2 subpixel-antialiased underline"
          >
          Projects
          </h2>

          <aside className="caption text-center text-xs md:text-sm relative bottom-12"><em>hover image to view name</em></aside>
       
          <article className="text-center flex flex-col items-center justify-around">
            <div className="my-10">
              <Link
                to="https://buddystockviii.com">
                <img
                  src={ buddystock }
                  alt="icon for buddystock"
                  className="project_icon h-40 md:h-72"
                />
                <label className="label">buddystock</label>
              </Link>
            </div>
            <div className="my-10">
              <Link
                to="https://collabomusic.co/">
                <img
                  src={ collabo }
                  alt="icon for collabo"
                  className="project_icon md:h-72"
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
                  className="project_icon md:h-40"
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
                  className="project_icon h-40 md:h-72"
                />
                <label className="label">favorite books</label>
              </Link>
            </div>
            <div className="my-10">
              <Link
                to="https://preeminent-bunny-fb20a4.netlify.app">
                <img
                  src={ marked }
                  alt="icon for marked-icon"
                  className="project_icon md:h-72"
                />
                <label className="label">marxdown</label>
              </Link>
            </div>
            <div className="caption w-1/2 mx-auto text-center text-sm md:text-md subpixel-antialiased mb-20">
              <em>
              buddystock, books, and marxdown were created by adam robson; tallyho and collabo were built by adam robson on a team with four developers.
              </em>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
