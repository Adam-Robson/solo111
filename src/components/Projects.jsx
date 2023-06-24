import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <section className="w-screen h-screen fadein px-6 overflow-hidden">
      <Link className="absolute right-4 top-4 text-xl subpixel-antialiased" to='/'>home</Link>
      <h1 className="title text-8xl md:text-9xl relative top-8 subpixel-antialiased">projects</h1>
    </section>
  );
}
