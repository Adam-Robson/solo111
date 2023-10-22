'use client'
import Link from "next/link"
import { useState } from 'react';
import type { ProjectProps } from "../utils/data/types";

export default function Project({ title, description, link }: ProjectProps) {
  const [hover, setHover] = useState(false);
  return (
    <article
      className="my-12 p-4 rounded-lg"
    >
      <h2 className="subtitle text-3xl text-center font-light underline underline-offset-4 decoration-1 project-title">{title}</h2>
        <p className="font-light">{description}</p>
        <div className="text-center">
          <Link
            href={link}
            target="blank"
            rel="noopener noreferrer"
            className="text-center font-light text-lg my-4"
          >View Project</Link>
        </div>
    </article>
  );
}
