import React, { useRef, useEffect, useState } from 'react';

export default function LazyImageLoader({ src, alt }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const image = entries[0];
      if (image.isIntersecting) {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);
        imgRef.current.src = src;
        observer.unobserve(imgRef.current);
      }
    });

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return <img ref={imgRef} src={loaded ? src : ''} alt={alt} />;
}
