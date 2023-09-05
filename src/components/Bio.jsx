import React from 'react';
import { Link } from 'react-router-dom';
import BioImage from './BioImage';
import or from '../assets/slvrfls.png';
import adam from '../assets/adaam.png';

export default function Bio() {
  return (
    <section className="max-w-full w-2/3 mx-auto fadein px-6">
      <Link className="text-xl absolute top-10 right-10 subpixel-antialiased" to="/">home</Link>
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl subpixel-antialiased mt-12">bio</h1>
      <div className="max-w-full mx-auto flex flex-col lg:flex-row lg:justify-center space-y-4 lg:space-y-0 lg:space-x-4">
        <BioImage className="max-w-xl p-4" imageUrl={or} text="I am a software engineer, musician and artist living in the beautiful pacific northwest." />
        <BioImage className="max-w-xl p-4" imageUrl={adam} text="I enjoy working with Postgres, Express, React and Node." />
      </div>
    </section>
  );
}
