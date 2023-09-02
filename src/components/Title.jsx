import { useEffect, useState } from 'react';

/**
 * create a set of color values
 * from which to cycle through
 * for the color of the title
 * element to change color
 */
const colorArray = [
  'hsl(17, 64%, 88%)', // dogwood
  'hsl(78, 15%, 77%)', // ash
  'hsl(32, 74%, 81%)', // orange
  'hsl(208, 13%, 74%)' // french
];

/**
 * set the duration for how long
 * each color will be displayed
 * before switching to the next
 * color
 */

const transitionDuration = 2500;

export default function Title() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  /**
   * the color change event will be
   * activity on the page that
   * is not the executive purpose
   * of the function component,
   * and which will be necessary
   * for the desired functionality
   * we seek to employ: useEffect
   */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) =>
        (prevIndex + 1) % colorArray.length
      );
    }, transitionDuration);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <article
      className="max-w-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
    >
      <h1
        style={{ color: colorArray[currentColorIndex] }}
        className="max-w-lg text-7xl sm:text-8xl font-light tracking-wider animation-colorChange subpixel-antialiased">
        catalog.
      </h1>
      <p
        className="max-w-lg text-xl sm:text-2xl tracking-wider subpixel-antialiased">
        by Adam Robson
      </p>
    </article>
  );
}
