import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <Link className="min-w-full text-xs m-6 md:text-md md:m-12" to="/">back</Link>
      <h2 className="text-center text-xl md:text-2xl py-8 subpixel-antialiased">about</h2>
      <div className="text-center text-xs md:text-md md:leading-loose leading-relaxed px-8 flex flex-col items-center justify-center subpixel-antialiased">
        <p>I am a full-stack software engineer in the pacific northwest.</p>
        <span>===</span>
        <p>I am a creative person, who uses progressive programming methods to make technology.</p>
        <span>===</span>
        <p>I enjoy building user-focused programs, with empathy and foresight.</p>
        <spn>===</spn>
        <p>My goal is to empower users and to better connect them within their own community.</p>
        <span>===</span>
        <p>I mostly work with a PERN stack - PostgreSQL, Express, React & Node.</p>
        <div>
          <img
            src={ process.env.PUBLIC_URL + '/images/adaam.png' }
            alt="image of adam robson"
            className="mt-4 max-w-xs mx-auto object-scale-down h-60 w-96" />
        </div>
      </div>
    </>
  );
}
