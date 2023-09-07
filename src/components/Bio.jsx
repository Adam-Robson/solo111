import React from 'react';
import { Link } from 'react-router-dom';
import BioImage from './BioImage';
import or from '../assets/slvrfls.png';
import adam from '../assets/adaam.png';

export default function Bio() {
  return (
    <section className="max-w-full w-11/12 mx-auto fadein px-6">
      <Link className="text-lg absolute top-10 right-10 subpixel-antialiased" to="/">home</Link>
      <h1 className="text-7xl sm:text-8xl subpixel-antialiased mt-12">bio</h1>

      <div className="max-w-full mx-auto p-4 flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4">
        <BioImage className="bioimage max-w-md" imageUrl={or} text="I am a software engineer and artist living in the beautiful pacific northwest." />
        <BioImage className="bioimage max-w-md" imageUrl={adam} text="I enjoy working with Postgres, Express, React and Node." />
      </div>
    </section>
  );
}
