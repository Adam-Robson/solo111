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
      <h2 className="text-center text-2xl md:text-3xl py-8 subpixel-antialiased">arts</h2>
      <div className="flex flex-col items-center">
        <h3 className="text-center text-md underline subpixel-antialiased md:text-xl md:mb-6">writings</h3>
        <ul>{ list }</ul>
        
        <h3 className="text-center text-md underline mt-4 subpixel-antialiased md:text-xl">songs</h3>

        <Link to="https://spoti.fi/3QNqMuE">
          <img src={ process.env.PUBLIC_URL + '/images/lefog.png' } alt="le fog" className="mt-4 h-64" />
          <h4 className="text-center text-sm mt-2" id="label">LE FOG</h4>
        </Link>
        <span className="text-center text-xs p-8">
          <i>
            all songs, sounds, writings, recordings and compositions herein are solely the work of the author. they are grateful you have taken the time to experience their work.
          </i>
        </span>
      </div>
    </>
  );
}
