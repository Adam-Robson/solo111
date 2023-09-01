import { Link } from 'react-router-dom';
import wa from '../assets/pttwnsnd.png';
import or from '../assets/slvrfls.png';

export default function Bio() {
  return (
    <>
      <section className="mx-auto fadein px-6 overflow-hidden">
        <Link className="text-xl absolute top-6 right-8 subpixel-antialiased" to="/">home</Link>
        <h1 className="title text-8xl md:text-9xl relative top-12 subpixel-antialiased mb-2">bio</h1>
        <div className="md:grid md:grid-cols-2 md:gap-8 p-4">
          <article className="md:flex md:flex-col md:justify-evenly my-8">
            <p className="title text-lg sm:text-2xl md:text-3xl lg:text-4xl text-right subpixel-antialiased my-2">
              I live in the pacific northwest.
            </p>
            <p className="title text-lg sm:text-2xl md:text-3xl lg:text-4xl  text-right subpixel-antialiased my-2">
              I am a f/s software developer, a musician & artist.
            </p>
            <p className="title text-lg sm:text-2xl md:text-3xl lg:text-4xl text-right subpixel-antialiased my-2">
              I am proficient in Postgres, Express, React, and Node.
            </p>
          </article>
          <article>
            <img src={wa} alt='image of adam robson' className="bioImage w-2/3 mx-auto my-8 max-w-md" />
            <img src={or} alt='image of adam robson' className="bioImage w-2/3 mx-auto my-8 max-w-md" />
          </article>
        </div>
      </section>
    </>
  );
}
