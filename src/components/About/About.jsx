import React from 'react';
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <>
      <section className="w-3/5 mx-auto my-10">
        <h2 className="text-center text-2xl md:text-3xl py-4 subpixel-antialiased underline">about</h2>
        <div className="text-center text-xs md:text-lg leading-loose flex flex-col items-center justify-center subpixel-antialiased mx-4">
          <p>I grew up in California, and now live in the pacific northwest, where I am a software engineer, working with a PostgreSQL, Express, React & Node stack.</p>
          <img
            src={ process.env.PUBLIC_URL + '/images/adaam.png' }
            alt="image of adam robson"
            className="p-4 max-w-sm md:max-w-md" />
          <p>I traveled around the western half of the United States in a 1980 Volkswagen Vanagon a few years ago. Images of the adventures can be seen <Link to="https://lapaztravels.wordpress.com/">here</Link>.</p>
          <img
            src={ process.env.PUBLIC_URL + '/images/cafe.png' }
            alt="image of adam robson"
            className="p-4 max-w-sm md:max-w-md" />
          <p>Creativity is an animating force, a welcome challenge, and source of meaning for me.</p>
          <img
            src={ process.env.PUBLIC_URL + '/images/cactu.png' }
            alt="image of adam robson"
            className="p-4 max-w-sm md:max-w-md" />
          <span>___</span>
        </div>
      </section>
    </>
  );
}
