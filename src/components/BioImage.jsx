import React, { useState } from 'react';

export default function BioImage({ imageUrl, text }) {
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
      className="relative group rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
    >
      <img src={imageUrl} alt="Bio Image" className="rounded-lg max-w-xs w-full mx-auto" />

      {isHovered && (
        <div
          className="p-6 absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
          {text}
        </div>
      )}
    </div>
  );
}


