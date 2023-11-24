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
          className="h-80 w-80 my-4 border-2 border-gray-700"
          width={400}
          height={400}
        />
      ))}
    </div>
  );
};
