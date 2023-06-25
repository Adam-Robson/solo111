import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/resume.png';

export default function Resume() {
  function handleDownload() {
    const img = document.getElementById('download');
    const url = img.src;
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume_robson_adam.png';
    link.click();
  }
  return (
    <>
      <section className="container fadeIn mx-auto">
        <Link className="text-7xl sm:text-8xl md:text-9xl relative top-8 subpixel-antialiased" to='/'>resume</Link>
        <div className="flex flex-col mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <img src={ resume } id="download" className="px-6" alt="resume page" />
          <Link className="px-10 py-6" onClick={ handleDownload }>download</Link>
        </div>
      </section>
    </>
  );
}
