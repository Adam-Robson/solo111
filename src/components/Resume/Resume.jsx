import React from 'react';
import { NavLink } from 'react-router-dom';
import resume from '../../assets/resume.png';

export default function Resume() {
  return (
    <>
      <NavLink to="/" className="text-sm md:text-md m-10 absolute top-0 left-0">home</NavLink>
      <div className="min-h-screen w-screen">
        <img
          className="w-full md:w-1/2 mx-auto"
          src={ resume }
          alt="resume"
        />
      </div>

    </>
  );
}
