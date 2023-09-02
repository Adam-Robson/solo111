import { useEffect, useState } from 'react';

const colorArray = [
  'hsl(203, 24%, 87%)',
  'hsl(354, 100%, 96%)',
  'hsl(159, 21%, 84%)',
  'hsl(208, 13%, 74%)',
  'hsl(139, 27%, 82%)'
];

const transitionDuration = 3000;

export default function Title() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);


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
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
    >
      <h1
        style={{ color: colorArray[currentColorIndex] }}
        className="text-3xl subpixel-antialiased">
        a catalogue
      </h1>
      <em
        style={{ color: colorArray[currentColorIndex] }}
        className="text-lg italic subpixel-antialiased">
        by Adam Robson
      </em>
    </article>
  );
}
