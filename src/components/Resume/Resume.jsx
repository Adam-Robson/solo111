import React from 'react';
import resume from '../../assets/resume.png';

export default function Resume() {
  return (
    <>
      <div className="min-h-screen w-screen">
        <img
          className="w-4/5 h-full mt-24 mx-auto md:w-1/2 md:mt-32 md:mb-12"
          src={ resume }
          alt="resume"
        />
      </div>

    </>
  );
}
