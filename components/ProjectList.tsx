import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from '@/lib/data';
import { ProjectTypes } from '@/lib/types'

export default function ProjectList() {
  return (
    <div className="flex flex-col">
      {projects.map((project: ProjectTypes) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
