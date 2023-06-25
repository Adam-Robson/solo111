import React from 'react';
import { Link } from 'react-router-dom';
import crystal from '../assets/crystal-min.png';

export default function Misc() {
  return (
    <>
      <section className="w-screen h-screen fadein px-6 overflow-hidden">
        <Link className="absolute right-4 top-4 text-xl subpixel-antialiased" to='/'>home</Link>
        <h1 className="title text-8xl md:text-9xl relative top-8 subpixel-antialiased">misc.</h1>
        <img src={crystal} className="h-96" alt="image of out my window"/>
        <aside>
          See some of my past adventures <Link to='https://lapaztravels.wordpress.com/'>here</Link>.
        </aside>
      </section>
    </>
  );
}

