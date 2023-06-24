import * as React from 'react';
import { Link } from 'react-router-dom';
import { writings } from '../services/data.js';

export default function Art() {
  const list = writings.map((writing) => (
    <li key={ writing.id }>
      <Link className="text-2xl subpixel-antialiased" to={ writing.alias }>
        { writing.title }
      </Link>
    </li>
  ));

  return (
    <>
      <section className="w-screen h-screen fadein px-6 overflow-hidden">
        <Link className="absolute right-4 top-4 text-xl subpixel-antialiased" to='/'>home</Link>
        <h1 className="title text-8xl md:text-9xl relative top-8 subpixel-antialiased">artwork</h1>
        <article className="container w-full mx-auto flex flex-col p-4">
          <div className="container max-w-4xl w-full p-2 mx-auto">
            <h3 className="w-full text-right text-2xl md:text-5xl my-4">le fog</h3>
            <iframe
              className="rounded-lg md:w-3/5"
              src="https://open.spotify.com/embed/album/64LjLBqFsNtxvWGZ3jDtIy?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          <div className="container max-w-4xl w-full p-2 mx-auto">
            <h3 className="w-full text-right text-2xl md:text-5xl my-4">writings</h3>
            <ul className="min-w-full mx-auto grid grid-flow-col gap-8">{ list }</ul>
          </div>
        </article>
      </section>
    </>
  );
}
