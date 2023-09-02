import { Link } from 'react-router-dom';
import or from '../assets/slvrfls.png';
import pool from '../assets/barcorner.png';

export default function Bio() {
  return (
    <>
      <section className="bg-section mx-auto fadein px-6 overflow-hidden">
        <Link className="text-xl absolute top-6 right-8 subpixel-antialiased" to="/">home</Link>
        <h1 className="title text-8xl md:text-9xl relative top-12 subpixel-antialiased mb-2">bio</h1>

      </section>
    </>
  );
}
