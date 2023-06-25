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
    <section className="mx-auto fadein px-6">
      <Link className="absolute right-4 top-4 text-xl subpixel-antialiased" to='/'>home</Link>
      <h1 className="title text-7xl sm:text-8xl md:text-9xl relative top-8 subpixel-antialiased">resume</h1>
      <div className="fadeIn my-8 grid grid-cols-3 grid-rows-2">
        <img src={ resume } id="download" className="m-6 col-start-2 col-span-1 row-start-1 row-span-1" alt="resume page" />
        <Link className="slight mx-6 text-lg row-start-2 row-span-1 col-start-2 col-span-1 subpixel-antialiased" onClick={ handleDownload }>download</Link>
      </div>
    </section>
  );
}
