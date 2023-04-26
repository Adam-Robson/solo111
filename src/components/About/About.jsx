import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ufo from '../../assets/ufo.gif';
import scarf from '../../assets/scarf.png';
import daydream from '../../assets/daydream.png';
import swans from '../../assets/swans.gif';

export default function About() {
  return (
    <>
      <NavLink to="/" className="text-sm md:text-md m-10 absolute top-0 left-0">home</NavLink>
      <section className="">
        <h2
          className="subtitle max-w-max mx-auto text-center text-xl md:text-2xl my-16 p-2 subpixel-antialiased underline"
        >
          about me
        </h2>

        <div className="text-center text-sm md:text-xl mx-2 md:mx-6 subpixel-antialiased">
          <p className="my-2 md:my-4">
            Born & raised in California, I currently live in the pacific northwest.
          </p>
          <img
            className="image h-60 md:h-80 mx-auto my-4"
            src={ ufo }
            alt="gif of a ufo" 
          />
          <p className="my-2">
            In the past, I traveled around the United States in a 1980 Volkswagen Vanagon. View images
            <Link
              to="https://lapaztravels.wordpress.com/"
            >{
                ' here.'
              }</Link>
          </p>
          <img
            src={ daydream }
            alt="image of adam robson"
            className="image h-60 md:h-80 mx-auto my-4" 
          />
          <p className="my-2"> 
            Creativity is an animating force, a welcome challenge, and source of meaning for me.
          </p>
          <img
            src={ swans }
            alt="gif of swans"
            className="image h-36 md:h-60 mx-auto mt-4"
          />
          <p className="my-2">
            I am a software engineer, working with a PostgreSQL, Express, React & Node stack.
          </p>
          <img
            src={ scarf }
            alt="image of adam robson"
            className="image h-60 md:h-80 mx-auto my-4"
          />
        </div>
        <div className="h-32"></div>
      </section>
    </>
  );
}
