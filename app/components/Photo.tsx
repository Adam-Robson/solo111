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
        width={400}
        height={400}
        className='rounded-xl'
      />
    </div>
  );
};
