import React from 'react';
import { Link } from 'react-router-dom';
import crystal from '../assets/crystal.png';

export default function Misc() {
  return (
    <>
      <section className="fadein px-6">
        <Link className="text-xl absolute top-8 right-8 subpixel-antialiased" to="/">home</Link>
        <h1 className="title text-8xl md:text-9xl relative top-8 subpixel-antialiased">misc.</h1>
        <img src={crystal} className="h-96" alt="image of out my window"/>
        <aside>
          See some of my past adventures <Link to='https://lapaztravels.wordpress.com/'>here</Link>.
        </aside>
      </section>
    </>
  );
}

