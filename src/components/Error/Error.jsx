import React from 'react';
import life from '../../assets/life.gif';

export default function Error() {
  return (
    <>
      <section className="w-screen h-screen mx-auto flex flex-col justify-center items-center">
        <h2 className="text-lg my-10 subpixel-antialiased">Something went wrong a bit!</h2>
        <img src={ life } alt="life does not always go as planned gif" />
        <h3 className="text-xl my-10 subpixel-antialiased font-semibold">Error 404: This resource has not been found.</h3>
      </section>
    </>
  );
}
