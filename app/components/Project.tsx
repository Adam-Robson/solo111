import Link from "next/link"
import React from 'react';
import type { ProjectTypes } from '../utils/data/types'

export default function Project({ title, url, description }: ProjectTypes
) {
  return (
    <article>
      <h2 className="text-2xl text-center font-light underline underline-offset-4 decoration-1 subpixel-antialiased my-2">{title}</h2>
      <p className="text-sm font-light subpixel-antialiased p-2">
        {description}
      </p>

      <div className="p-2 text-center subpixel-antialiased font-light text-lg">
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Project
        </Link>
      </div>
    </article>
  );
};
