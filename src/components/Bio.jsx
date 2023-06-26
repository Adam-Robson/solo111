import { Link } from 'react-router-dom';
import face from '../assets/faace.png';
export default function Bio() {
  return (
    <>
      <section className="mx-auto fadein px-6 overflow-hidden">
        <Link className="text-xl absolute top-8 right-8 subpixel-antialiased" to="/">home</Link>
        <h1 className="title text-8xl md:text-9xl relative top-8 subpixel-antialiased">bio</h1>
        <div className="md:grid md:grid-cols-2 md:gap-8 p-4">
          <div className="md:flex md:flex-col md:justify-evenly my-8">
            <p className="title text-lg sm:text-2xl md:text-3xl lg:text-4xl text-right subpixel-antialiased">
              I live in the pacific northwest.
            </p>
            <p className="title text-lg sm:text-2xl md:text-3xl lg:text-4xl  text-right subpixel-antialiased">
              I am a musician & artist.
            </p>
            <p className="title text-lg sm:text-2xl md:text-3xl lg:text-4xl text-right subpixel-antialiased">
              I am a f/s software engineer.
            </p>
            <p className="title text-lg sm:text-2xl md:text-3xl lg:text-4xl text-right subpixel-antialiased">
              I am proficient in postgresql, express, react, and node.
            </p>
          </div>
          <img src={ face } alt='image of adaam robson' className="w-full mx-auto my-8 max-w-lg" />
        </div>
      </section>
    </>
  );
}
