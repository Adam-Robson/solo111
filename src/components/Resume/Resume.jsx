import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../assets/resume.png';

export default function Resume() {
  return (
    <>
      <div className="animate__fadeIn min-h-screen w-screen flex flex-col items-center justify-start">
      
        <img
          className="w-2/5 mx-auto md:mt-10"
          src={ resume }
          alt="resume"
        />
        <Link 
          className="m-4" 
          to="/resume.pdf" 
          target="_blank" 
          download
        >Download</Link>

      </div>
    </>
  );
}
