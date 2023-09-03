import { Link } from 'react-router-dom';
import or from '../assets/slvrfls.png';
import pool from '../assets/barcorner.png';

export default function Bio() {
  return (
    <>
      <section className="bg-section mx-auto fadein px-6 overflow-hidden">
        <Link className="text-xl absolute top-10 right-10 subpixel-antialiased" to="/">home</Link>
        <h1 className="text-6xl absolute top-20 left-10 subpixel-antialiased">bio</h1>


        <label>
          I am a JavaScript software developer and a musician living in the coastal forests of the northwest.

        </label>
        <img width="500" className="project hover:cursor-pointer relative top-48" src={or} alt="me at silver falls in the mist" />

        <label>Working with software challenges creatively and analytically.</label>

        <img width="500" className="project hover:cursor-pointer relative top-60" src={pool} alt="at a pool table in portland oregon" />
        <h2>Fundamentals I try and live by:</h2>
        <ul>
          <li>
            What I try to understand becomes integrated and is eventually a part of me. It has the power to transform.
          </li>
          <li>
            Humility fosters growth and enriches interactions & experience.
          </li>
          <li>
            The unique parts of individuals and the planet reinforce diversity as a wellspring of strength.
          </li>
          <li>
            I try and acknowledge that I will go through mistakes and remember to consider them as an opportunity for growth.
          </li>

          <li>Collaboration and sharing is at the core of making meaning in the world.
          
          </li>
        </ul>
      </section>
    </>
  );
}
