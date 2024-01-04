import React from 'react';
import Image from 'next/image';
import type { ImageGalleryProps, ImageType } from '@/lib/types';

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="flex flex-col justify-evenly items-center">
      {images.map((image: ImageType) => (
        <Image
          key={image.id}
          src={image.src}
          alt={image.alt}
          className="my-4 mx-10 border-2 border-gray-700"
          width={250}
          height={250}
        />
      ))}
    </div>
  );
};
