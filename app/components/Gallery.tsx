import React from 'react'
import type { PhotoListTypeProps } from '../utils/data/types'
import Photo from './Photo'

export default function Gallery({ photos }: PhotoListTypeProps) {
  return (
    <div>
      {photos.map(photo => (
        <div key={photo.id} className="group hover:cursor-pointer max-w-sm mt-8  flex flex-col justify-start items-center">
          <Photo
            id={photo.id}
            url={photo.url}
            caption={photo.caption}
          />
          <div className="invisible group-hover:visible text-center text-sm subpixel-antialiased">
            {photo.caption}
          </div>
        </div>
      ))}
    </div>
  );
}
