import { Link } from 'react-router-dom';
import face from '../assets/faace.png';

export default function Bio() {
  return (
    <>
      <section className="container fadein px-6 overflow-hidden">
        <Link className="w-1/4 text-8xl md:text-9xl relative top-8 subpixel-antialiased" to='/'>
          bio
        </Link>
        <div className="md:grid md:grid-cols-2 md:gap-8 p-4">
          <div className="md:flex md:flex-col md:justify-evenly my-8">
            <p className="title leading-6 text-lg sm:text-2xl md:text-3xl lg:text-4xl text-right subpixel-antialiased">I live in the pacific northwest.</p>
            <p className="title leading-6 text-lg sm:text-2xl md:text-3xl
            lg:text-4xl  text-right subpixel-antialiased">I am a musician & artist.</p>
            <p className="title leading-6 text-lg sm:text-2xl md:text-3xl lg:text-4xl text-right subpixel-antialiased">I am a f/s software engineer.</p>
            <p className="title leading-6 text-lg sm:text-2xl md:text-3xl lg:text-4xl text-right subpixel-antialiased">I am experienced in postgres, express, react, & node.</p>
          </div>
          <img src={ face } alt='image of adaam robson' className="w-full mx-auto my-8 max-w-lg" />
        </div>
      </section>
    </>
  );
}
