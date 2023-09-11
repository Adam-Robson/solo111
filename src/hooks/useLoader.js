import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import loading from '../assets/modern_load.gif';

export default function useLoader({ children }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {
        showLoader ? (
          <>
            <article
              className="loading w-2/3 h-2/3 mx-auto pb-28"
            >
              <img
                src={loading}
                width="100%"
                height="100%"
                frameBorder="0"
                className="absolute inset-0 m-auto p-4"
              />
            </article>
            <p>
              <Link
                className="max-w-xl text-xs sm:text-sm absolute bottom-4 left-1/2 transform -translate-x-1/2 subpixel-antialiased"
                href="">loader by giphy</Link>
            </p>
          </>
        ) : children
      }
    </>
  );
}
