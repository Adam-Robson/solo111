import React from 'react';
import { useRouteError } from 'react-router-dom';
import life from '../../assets/life.gif';

export default function Error() {
  const error = useRouteError();
  return (
    <>
      <div className="flex flex-col w-screen mx-auto p-8">
        <p className="text-center subpixel-antialiased m-10">
          There was been an error loading this page.
        </p>
        <aside>Something went wrong a bit!</aside>
        <img src={ life } className="h-40" />
        <i className="text-center subpixel-antialiased m-10">
          { error.statusText || error.message }
        </i>
      </div>
    </>
  );
}
