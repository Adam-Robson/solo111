import { Link } from 'react-router-dom';
import scribble from '../assets/scribble.gif';
export default function NotFound() {
  return (
    <>
      <section className="max-w-full w-11/12 mx-auto fadein px-6">
        <Link className="text-lg absolute top-10 right-10 subpixel-antialiased" to="/">home</Link>
        <h1 className="text-7xl sm:text-8xl subpixel-antialiased mt-12">oh no!</h1>
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl subpixel-antialiased mt-12">
          Page Not Found!
        </h2>
        <hr className="my-6 max-w-lg mx-auto"/>
        <p className="text-center text-lg sm:text-xl md:text-2xl subpixel-antialiased">
          There has been an unexpected error.
        </p>
        <img
          width="260"
          src={scribble}
          className="gif max-w-md mx-auto my-6"
          alt="scribble error gif"
        />
      </section>
    </>
  );
}
