import { useEffect, useState } from 'react';
import Header from './Header';
import SocialIcons from './SocialIcons';

/**
 * create a set of color values
 * from which to cycle through
 * for the color of the title
 * element to change color
 */

const colorArray = [
  // 'hsl(17, 64%, 88%)', // dogwood
  // 'hsl(32, 74%, 81%)', // orange
  'hsl(208, 13%, 74%)', // french
  'hsl(120, 5%, 54%)'   // battleship
];

/**
 * set the duration for how long
 * each color will be displayed
 * before switching to the next
 * color
 */

const transitionDuration = 3000;

export default function Home() {
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
    <div className="max-w-full">
      <Header />
      <main>
        <article
          className="max-w-xl absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        >
          <h1
            style={{ color: colorArray[currentColorIndex] }}
            className="text-8xl font-light subpixel-antialiased"
          >portfolio.
            <p className="text-xl text-right absolute top-20 right-20">Adam Robson</p></h1>
        </article>
      </main>
      <SocialIcons />
    </div>
  );
}
