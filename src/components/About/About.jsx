import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <Link className="min-w-full text-xs m-6 md:text-md md:m-48" to="/">back</Link>
      <h2 className="text-center text-xl md:text-3xl py-8 subpixel-antialiased">about</h2>
      <div className="text-center text-xs md:text-lg md:leading-loose leading-relaxed px-8 flex flex-col items-center justify-center subpixel-antialiased">
        <p>I am a full-stack software engineer in the pacific northwest.</p>
        <span>===</span>
        <p>I am a creative person, who uses progressive programming methods to make technology.</p>
        <span>===</span>
        <p>I enjoy building user-focused programs, with empathy and foresight.</p>
        <spn>===</spn>
        <p>My goal is to empower users and to better connect them within their own community.</p>
        <span>===</span>
        <p>I mostly work with a PERN stack - PostgreSQL, Express, React & Node.</p>
        <div className="flex flex-col md:flex-row max-w-fit mx-auto">
          <img
            src={ process.env.PUBLIC_URL + '/images/adaam.png' }
            alt="image of adam robson"
            className="m-4 max-w-xs mx-auto object-scale-down h-60 w-96" />
          <img
            src={ process.env.PUBLIC_URL + '/images/cafe.png' }
            alt="image of adam robson"
            className="m-4 max-w-xs mx-auto object-scale-down h-60 w-96" />
          <img
            src={ process.env.PUBLIC_URL + '/images/cactu.png' }
            alt="image of adam robson"
            className="m-4 max-w-xs mx-auto object-scale-down h-60 w-96" />
        </div>
      </div>
    </>
  );
}
