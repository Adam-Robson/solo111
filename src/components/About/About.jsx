import React from 'react';
import { Link } from 'react-router-dom';
import ufo from '../../assets/ufo.gif';
import scarf from '../../assets/scarf.png';
import daydream from '../../assets/daydream.png';
import swans from '../../assets/swans.gif';
import { SiSpotify } from 'react-icons/si';
import { SiWordpress } from 'react-icons/si';

export default function About() {
  return (
    <>
      <section className="">
        <h2
          className="subtitle max-w-max mx-auto text-center text-xl md:text-2xl my-16 p-2 font-light subpixel-antialiased underline"
        >
          About
        </h2>

        <div className="text-center text-sm md:text-xl font-light mx-2 md:mx-6 subpixel-antialiased">
          <p className="my-2 md:my-4 p-4 md:p-6">
            Born & raised in California, I currently live in the pacific northwest.
          </p>
          <img
            className="image h-60 md:h-80 mx-auto my-4"
            src={ ufo }
            alt="gif of a ufo" 
          />
          <span className="flex flex-col items-center justify-start mx-6">
            <p className="p-4 md:p-6">
              In the past, I traveled around the United States in a 1980 Volkswagen Vanagon.
              View images here:
            </p>
            <Link to="https://lapaztravels.wordpress.com/"><SiWordpress /></Link>
          </span>
          
          <img
            src={ daydream }
            alt="image of adam robson"
            className="image h-60 md:h-80 mx-auto my-4" 
          />
          <span className="flex flex-col items-center justify-start mx-6">
            <p className="p-4 md:p-6">
              Creativity is an animating force, a welcome challenge, and source of meaning for me. 
              View evidence here:
            </p><Link to="https://spoti.fi/3QNqMuE"><SiSpotify /></Link>
          </span>
          <img
            src={ swans }
            alt="gif of swans"
            className="image h-36 md:h-60 mx-auto mt-4"
          />
          <p className="my-2 md:my-4 p-4 md:p-6">
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
