import React from 'react';
import { Link } from 'react-router-dom';
import crystal from '../assets/crystal.png';

export default function Misc() {
  return (
    <>
      <section className="fadein px-6">
        <Link className="text-xl absolute top-6 right-8 subpixel-antialiased" to="/">home</Link>
        <h1 className="title text-8xl md:text-9xl relative top-12 subpixel-antialiased">misc.</h1>
        <div>
          <img src={crystal} className=" w-11/12 p-6" alt="image of out my window" />
          <p className="w-40 absolute top-40 left-24 md:top-60 md:left-60 text-2xl md:text-3xl">
            see some of my past adventures 
            <Link className="adventure font-semibold" to='https://lapaztravels.wordpress.com/'> here</Link>.</p>
        </div>
      </section>
    </>
  );
}

