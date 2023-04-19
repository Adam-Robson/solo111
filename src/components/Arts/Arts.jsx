import React from 'react';
import { Link } from 'react-router-dom';
import { writings } from '../../data.js';

export default function Arts() {

  const list = writings.map((writing) => (

    <li key={ writing.id }>
      <Link className="text-center text-md subpixel-antialiased md:leading-loose" to={ writing.alias }>
        <p className="">{ writing.title }</p>
      </Link>
    </li>
  ));

  return (
    <>
      <section className="w-screen mx-auto my-8">
        <h2 className="text-center text-2xl md:text-3xl py-10 subpixel-antialiased underline">arts</h2>
        <div className="flex flex-col items-center">
          <h3 className="text-center text-md subpixel-antialiased font-semibold md:text-xl md:mb-6">writings:</h3>
          <ul>{ list }</ul>
        
          <h3 className="text-center text-md mt-4 subpixel-antialiased font-semibold md:text-xl">songs:</h3>

          <Link to="https://spoti.fi/3QNqMuE">
            <img src={ process.env.PUBLIC_URL + '/images/lefog.png' } alt="le fog" className="mt-4 h-64" />
            <h4 className="text-center text-sm mt-2" id="label">LE FOG</h4>
          </Link>
          <span className="md:w-1/2 text-center text-xs md:text-lg p-8">
            <i>
            all songs, sounds, writings, recordings and compositions are by Adam Robson, & they are grateful you have taken the time to experience their work.
            </i>
          </span>
        </div>
      </section>
    </>
  );
}
