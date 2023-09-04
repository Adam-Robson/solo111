import React from 'react';
import { Link } from 'react-router-dom';
import BioImage from './BioImage';
import or from '../assets/slvrfls.png';
import adam from '../assets/adaam.png';

export default function Bio() {
  return (
    <section className="min-w-full fadein px-6">
      <Link className="text-xl absolute top-10 right-10 subpixel-antialiased" to="/">home</Link>
      <h1 className="text-8xl subpixel-antialiased mt-12">bio</h1>
      <div className="min-w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <BioImage className="max-w-md p-2" imageUrl={or} text="I am a software engineer, musician and artist living in the beautiful pacific northwest." />
        <BioImage className="max-w-md p-2" imageUrl={adam} text="I like working with a Postgres Express React and Node stack." />
      </div>
    </section>
  );
}
