import { useRouteError } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <section className="mx-auto fadein px-6">
        <h1
          className="text-4xlsubpixel-antialiased"
        >
          oh no!
        </h1>
        <h2 className="subpixel-antialiased">
          Page Not Found!
        </h2>
        <p className="subpixel-antialiased">
          There has been an unexpected error.
        </p>
        <img
          src="../assets/scribble.gif"
          className=""
          alt="scribble error gif"
        />
        <em>
          {error.statusText || error.message}
        </em>
      </section>
    </>
  );
}
