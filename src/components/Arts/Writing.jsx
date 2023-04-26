import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

export default function Writing({ writings }) {
  const { id } = useParams();
  const result = writings.find(({ alias }) => alias === id);
  return (
    <>
      <NavLink to="/" className="text-sm md:text-md m-10 absolute top-0 left-0">home</NavLink>
      <h2 className="text-center text-xl md:text-2xl py-8 mt-12 md:mt-24 subpixel-antialiased">{ result.title }</h2>
      <div className="text-center mx-8">
        <p className="max-w-sm mx-auto flex justify-center text-center md:leading-loose subpixel-antialiased">{ result.text }</p>
      </div>
    </>
  );
}
