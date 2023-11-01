import React from "react";
import Link from 'next/link'
import type { ProjectTypes } from '../lib/types'

export default function ProjectCard({ project }: { project: ProjectTypes } ) {
  return (
    <div className="my-2 mx-4 max-w-xl group">
      <h3 className="text-center text-lg tracking-tighter subpixel-antialiased">{project.title}
      </h3>
      <div className='group-hover:visible invisible'>
      <p className="text-sm tracking-tighter subpixel-antialiased">{project.description}
      </p>
        <div className="flex justify-around items-baseline mt-6">
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </Link>

          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
};
