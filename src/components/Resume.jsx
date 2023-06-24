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
    <section className="container fadein px-6">
      <Link className="absolute right-4 top-4 text-xl subpixel-antialiased" to='/'>home</Link>
      <h1 className="title text-7xl sm:text-8xl md:text-9xl relative top-8 subpixel-antialiased">resume</h1>
      <div className="container fadeIn px-4 flex flex-col items-center justify-center my-8">
        <img src={ resume } id="download" className="m-6" alt="resume page" />
        <Link className="m-2" onClick={ handleDownload }>download</Link>
      </div>
    </section>
  );
}
