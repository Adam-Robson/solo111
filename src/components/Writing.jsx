import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { writings } from '../services/data.js';

export default function Writing() {
  const navigate = useNavigate();
  const { name } = useParams();

  function goBack() {
    navigate(-1);
  }

  const writing = writings.find(({ alias }) => alias === name);

  return (
    <>
      <Link className="absolute right-8 top-8 text-xl subpixel-antialiased" to='/'>home</Link>
      <button className="absolute left-8 top-8 text-xl subpixel-antialiased" onClick={goBack}>back</button>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-8 mt-12 md:mt-24 subpixel-antialiased">{ writing.title }</h2>
      <div className="text-center mx-8">
        <p className="max-w-sm mx-auto flex justify-center text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl subpixel-antialiased">
          { writing.text }
        </p>
      </div>
    </>
  );
}
