import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from '@/lib/data';
import { ProjectTypes } from '@/lib/types'

export default function ProjectList() {
  return (
    <div className="project-list">
      {projects.map((project: ProjectTypes) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
