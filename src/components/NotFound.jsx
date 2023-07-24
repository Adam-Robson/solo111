import { Link, useRouteError } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <section className="mx-auto fadein px-6">
        <Link className="text-xl absolute top-8 right-8 subpixel-antialiased" to="/">home</Link>
        <h1 className="title text-8xl md:text-9xl relative top-8 subpixel-antialiased">no!</h1>
        <p>Sorry, there has been an unexpected error.</p>
        <em>
          {error.statusText || error.message}
        </em>
      </section>
    </>
  );
}