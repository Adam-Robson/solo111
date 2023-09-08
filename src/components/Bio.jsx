import React from 'react';
import { useNavigate } from 'react-router-dom';
import BioImage from './BioImage';
import or from '../assets/slvrfls.png';
import adam from '../assets/adaam.png';
import globe from '../assets/globe.png';
export default function Bio() {
  const navigate = useNavigate();

  function handleHomeNav() {
    navigate('/');
  }

  return (
    <section className="max-w-full w-11/12 mx-auto fadein px-6">
      <button onClick={ handleHomeNav } className="absolute top-6 right-6 subpixel-antialiased" to="/">home</button>
      <h1 className="text-8xl font-light subpixel-antialiased mt-8">bio</h1>

      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl w-full mx-auto p-2 flex flex-col lg:flex-row lg:justify-center space-y-4 lg:space-y-0 lg:space-x-4">
        <BioImage className="bioimage max-w-xs lg:max-w-lg" imageUrl={or} text="I am a software engineer and artist living in the beautiful pacific northwest." />
        <BioImage className="bioimage max-w-xs lg:max-w-lg" imageUrl={globe} text={
          `Not all programs are straight roads. We may, for example, want to create a branching road, where the program takes on the proper branch based on the situation at hand. This is called conditional execution. --Marijn Haverbeke`} />
        <BioImage className="bioimage max-w-xs lg:max-w-lg" imageUrl={adam} text="I enjoy working with Postgres, Express, React and Node." />
      </div>
    </section>
  );
}
