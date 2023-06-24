import * as React from 'react';
import { useParams } from 'react-router-dom';

export default function Writing({ writings }) {
  const { name } = useParams();

  const writing = writings.find(({ alias }) => alias === name);

  return (
    <>
      <h2 className="text-center text-xl md:text-2xl py-8 mt-12 md:mt-24 subpixel-antialiased">{ writing.title }</h2>
      <div className="text-center mx-8">
        <p className="max-w-sm mx-auto flex justify-center text-center md:leading-loose subpixel-antialiased">{ writing.text }</p>
      </div>
    </>
  );
}
