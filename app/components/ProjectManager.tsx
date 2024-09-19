import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { projects } from '@/lib/data';
import { Project } from '@/lib/types';

import collabo from '@pub/images/collabo.svg';
import pal from '@pub/images/pal.svg';
import tallyho from '@pub/images/tallyho.svg';
import ellington from '@pub/images/ellington.svg';

export default function ProjectManager() {
  const icons: Record<string, StaticImageData> = {
    collabo,
    pal,
    tallyho,
    ellington
  };
  return (
    <div className="grid-container">
      {projects.map((project: Project) => (
        <div key={project.id} className="project-item">
          <Link href={project.url} target="_blank">
            <Image
              src={icons[project.icon]}
              alt={project.title}
              height={180}
              width={180}
              className="icon"
            />
          </Link>
          <div className="project-details">
            <h2 className="project-title subpixel-antialiased">
              {project.title}
            </h2>
            <br />
            <p className="text-wrap text-sm md:text-base subpixel-antialiased">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
