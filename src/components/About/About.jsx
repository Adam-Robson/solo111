import React from 'react';
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <>
      <h2 className="text-center text-xl md:text-3xl py-6 subpixel-antialiased">about</h2>
      <div className="text-center text-xs md:text-lg leading-loose px-4 flex flex-col items-center justify-center max-w-3xl mx-auto subpixel-antialiased">
        <p>I grew up in California, and now live in the pacific northwest.</p>
        <span>===</span>
        <p>Before settling in, my partner and I travelled around the western half of the United States in a 1980 Volkswagen Vanagon. Images of the adventures can be seen <Link to="https://lapaztravels.wordpress.com/">here</Link>.</p>
        <span>===</span>
        <p>For me, creativity is an animating force, a welcome challenge, and source of meaning.</p>
        <span>===</span>
        <p>I use progressive programming methods to build user-focused technology with empathy and foresight.</p>
        <span>===</span>
        <p>My goal is to empower people and to contribute to better connected community.</p>
        <span>===</span>
        <p>I mainly work with a PostgreSQL, Express, React & Node stack.</p>
        <span>===</span>
        <div className="flex flex-col md:flex-row max-w-full mx-auto mt-6 md:mt-24">
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
