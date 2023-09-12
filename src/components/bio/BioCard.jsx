import { useState } from 'react';

export default function BioCard({ imageUrl, text }) {
  const [isHovered, setIsHovered] = useState(false);
  /**
 *
 * the setIsHovered method is called with
 * three different DOM events that together
 * change the state of the image and/or the
 * text that toggles as an overlay to the
 * image. The first two events are mouse
 * events and the third event is a touch event.
 *
 */
  return (
    <div
      className="relative group rounded-lg overflow-hidden my-2 aspect-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
    >
      <img
        src={imageUrl}
        alt="Bio Image"
        className="rounded-lg max-w-sm w-full mx-auto"
      />
      {isHovered && (
        <div
          className="p-4 max-w-sm mx-auto rounded-lg absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
          {text}
        </div>
      )}
    </div>
  );
}
