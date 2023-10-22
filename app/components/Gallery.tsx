import React, { useState } from 'react';
import type { PhotoListTypeProps, PhotoTypeProps } from '../utils/data/types'
import Image from 'next/image';

export default function Gallery({ photos }: PhotoListTypeProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoTypeProps | null>(null);

  function handleClick(photo: PhotoTypeProps) {
    setSelectedPhoto(photo);
  }

  function handleClose() {
    setSelectedPhoto(null);
  }

  function handleArrowClick(direction: 'next' | 'prev') {
    if (!selectedPhoto) return;

    const currentIndex = photos.findIndex(photo => photo === selectedPhoto);
    let newIndex = currentIndex + (direction === 'next' ? 1 : -1);

    if (newIndex < 0) {
      newIndex = photos.length - 1;
    } else if (newIndex >= photos.length) {
      newIndex = 0;
    }

    setSelectedPhoto(photos[newIndex]);
  }

  return (
    <div>
      {photos.map(photo => (
        <div key={photo.id} className="photo-container">
          <Image
            src={photo.url}
            alt={photo.caption}
            onClick={() => handleClick(photo)}
            className="thumbnail"
          />
          <div className="caption">{photo.caption}</div>
        </div>
      ))}

      {selectedPhoto && (
        <div className="floating-window">
          <span className="close-icon" onClick={handleClose}>X</span>
          <Image src={selectedPhoto.url} alt={selectedPhoto.caption} />
          <div className="arrow left" onClick={() => handleArrowClick('prev')}>&lt;</div>
          <div className="arrow right" onClick={() => handleArrowClick('next')}>&gt;</div>
        </div>
      )}
    </div>
  );
}
