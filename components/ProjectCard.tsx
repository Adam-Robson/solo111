import React from "react";
import type { ProjectType } from '../lib/types'

export default function ProjectCard({ project }: { project: ProjectType } ) {
  return (
     <div className="max-w-lg max-h-20">
      <h3 className="text-center text-lg tracking-tighter subpixel-antialiased">{project.title}
      </h3>
    </div>
  );
};
