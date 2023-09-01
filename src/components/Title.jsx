import { useEffect, useState } from 'react';

const colorArray = [
  'hsl(209, 18%, 30%)',
  'hsl(74, 11%, 54%)',
  'hsl(4, 35%, 56%)',
  'hsl(342, 17%, 54%)',
  'hsl(252, 11%, 65%)'
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
      className="flex flex-col justify-center"
    >
      <h1
        style={{ color: colorArray[currentColorIndex] }}
        className="subpixel-antialiased">
        a catalogue
      </h1>
      <em
        style={{ color: colorArray[currentColorIndex] }}
        className="subpixel-antialiased">
        by Adam Robson
      </em>
    </article>
  );
}
