import { NavLink } from 'react-router-dom';
import face from '../assets/face.png';

export default function Bio() {
  return (
    <>
      <section className="w-screen h-screen fadein px-6 overflow-hidden">
        <NavLink className="absolute right-4 top-4 text-xl subpixel-antialiased" to='/'>home</NavLink>
        <h1 className="title text-8xl md:text-9xl relative top-8 subpixel-antialiased">bio</h1>
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
