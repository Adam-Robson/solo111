'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import { PhotoTypeProps } from '../utils/data/types';

export default function Photo({ url, caption }: PhotoTypeProps) {
  return (
    <div className="p-2 rounded-lg text-center subpixel-antialiased font-light text-lg">
      <Image
        src={url}
        alt={caption}
        width={200}
        height={200}
        className='rounded-xl'
      />
    </div>
  );
};
