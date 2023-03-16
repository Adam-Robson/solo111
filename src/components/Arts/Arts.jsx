import React from 'react';
import { Link } from 'react-router-dom';
import { writings } from '../../data.js';

export default function Arts() {

  const list = writings.map((writing) => (

    <li className="" key={ writing.id }>
      <Link className="text-center text-sm subpixel-antialiased" to={ writing.name }>
        <p className="">{ writing.title }</p>
      </Link>
    </li>
  ));

  return (
    <>
      <Link className="min-w-full text-xs m-6 md:m-12 subpixel-antialiased" to="/">back</Link>
      
      <h2 className="text-center text-xl py-8 md:text-3xl subpixel-antialiased">arts</h2>
      <div className="flex flex-col items-center">
        <h3 className="text-center text-md underline subpixel-antialiased">writings</h3>
      
        <ul>{ list }</ul>
      
        <h3 className="text-center text-md underline mt-12 subpixel-antialiased">songs</h3>

        <Link to="https://spoti.fi/3QNqMuE">
          <img src={ process.env.PUBLIC_URL + '/images/lefog.png' } alt="le fog" className="mt-4 h-64" />
          <h4 className="text-center text-sm mt-2" id="label">LE FOG</h4>
        </Link>
      </div>
    </>
  );
}
