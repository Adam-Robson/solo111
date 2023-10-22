'use client'
import Link from "next/link"
import { useState } from 'react';
import type { ProjectTypeProps, IconTypeProps } from "../utils/data/types";

export default function Project({
  title,
  description,
  link,
  features
}: ProjectTypeProps) {

  const icons = features.map((el) => {
    <div key={}>
      <span>{  }</span>
    </div>
  })

  return (
    <article className="">
      <h2 className="text-2xl text-center font-light underline underline-offset-4 decoration-1 subpixel-antialiased my-2">
        {title}
      </h2>
      <p className="text-sm font-light subpixel-antialiased p-2">
        {description}
      </p>
      <div className="p-2 text-center subpixel-antialiased font-light text-lg">
        <Link
          href={link}
          target="blank"
          rel="noopener noreferrer"
        >Visit Project</Link>
      </div>
    </article>
  );
}
