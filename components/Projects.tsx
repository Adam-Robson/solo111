"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import type { ProjectListProps } from '@/components/lib/types'

export default function Projects({ projects }: ProjectListProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  function handleHoveredProject(projectId: number): void {
    setSelectedProjectId(projectId);
  }
  function handleLeaveHoveredProject(): void {
    setSelectedProjectId(null);
  }
  return (
    <div className="max-w-2xl mx-auto hover:cursor-pointer">
      <ul>
        {
          projects.map((project) => {
            const isHovered = selectedProjectId === project.id;

            return (
              <li
                key={project.id}
                className={`max-w-lg mx-auto`}
                onMouseEnter={() => handleHoveredProject(project.id)}
                onMouseLeave={handleLeaveHoveredProject}
              >
                <div className="max-w-md md:max-w-lg mx-auto sm:p-10 md:p12 m-4">
                  <div className="text-center text-lg/5 md:text-xl/6">
                    {project.title}
                  </div>
                </div>

                {isHovered && (
                  <div className={`max-w-sm mx-auto shadow-md min-h-fit p-4`}>
                    <div className="w-full p-4">
                      {project.description}
                    </div>

                    <div className="w-full flex justify-evenly items-baseline mx-auto">
                      <Link className="text-sm/4 md:text-lg/5" href={project.githubLink}>GitHub Repository</Link>
                      <Link className="text-sm/4 md:text-lg/5" href={project.liveLink}>Live Deploy</Link>
                    </div>
                  </div>
                )}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
