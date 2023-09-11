import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <section className="max-w-full w-11/12 mx-auto fadein px-6">
        <Link className="absolute top-6 right-6 subpixel-antialiased border border-cyan-300" to="/">home</Link>
        <h1 className="text-7xl sm:text-8xl font-light subpixel-antialiased mt-12">oh no!</h1>
        <h2 className="text-center text2xl sm:text-3xl md:text-4xl subpixel-antialiased mt-12">
          Page Not Found!
        </h2>
        <hr className="my-6 max-w-lg mx-auto"/>
        <p className="text-center text-xl sm:text-2xl md:text-3xl subpixel-antialiased">
          There has been an unexpected error.
        </p>
        <p className="text-center text-lg sm:text-xl md:text-2xl subpixel-antialiased">
          Please try again later.
        </p>
      </section>
    </>
  );
}
