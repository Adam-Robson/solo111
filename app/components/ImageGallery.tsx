import React from 'react';
import Image from 'next/image';
import type { ImageGalleryProps, ImageType } from '@/lib/types';

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="image-container flex flex-col md:flex-row justify-evenly items-baseline pt-20">
      {images.map((image: ImageType) => (
        <Image
          key={image.id}
          src={image.src}
          alt={image.alt}
          className="img"
          width={400}
          height={400}
        />
      ))}
    </div>
  );
};
