import * as React from 'react';
import { Link } from 'react-router-dom';
import { writings } from '../services/data.js';

export default function Arts() {
  const list = writings.map((writing) => (
    <li key={ writing.id }>
      <Link className="text-2xl subpixel-antialiased" to={ writing.alias }>
        {writing.title}
      </Link>
    </li>
  ));

  return (
    <>
      <section className="container mx-auto fadein px-6">
        <Link className="text-xl absolute top-8 right-8 subpixel-antialiased" to="/">home</Link>
        <h1 className="title text-8xl md:text-9xl relative top-8 subpixel-antialiased">arts</h1>
        <article className="container w-full mx-auto flex flex-col p-4">
          <div className="container max-w-4xl w-full p-2 mx-auto">
            <h3 className="w-full text-left text-2xl md:text-5xl my-8 underline">le fog</h3>
            <iframe
              className="rounded-lg md:w-4/5"
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
            <h3 className="w-full text-left text-2xl md:text-5xl my-8 underline">writings</h3>
            <ul className="w-full mx-auto grid grid-flow-row md:grid-flow-col gap-8 mt-8">{ list }</ul>
          </div>
        </article>
      </section>
    </>
  );
}
