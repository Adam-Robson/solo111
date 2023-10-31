import React from "react";
import Link from 'next/link'
import type { ProjectTypes } from '../lib/types'

export default function ProjectCard({ project }: { project: ProjectTypes } ) {
  return (
    <div className="max-w-md h-24">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </Link>
      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
        Live Demo
      </Link>
    </div>
  );
};
