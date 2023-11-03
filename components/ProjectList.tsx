'use client'
import React, { useState } from "react"
import ProjectCard from "./ProjectCard"
import FloatingCard from "./FloatingCard"

import { projects } from '@/lib/data'

import type { ProjectType } from '@/lib/types'

export default function ProjectList() {
  const [showProject, setShowProject] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)

  function handleProjectHover(project: ProjectType | null) {
    setShowProject(true)
    setSelectedProject(project)
  }

  function handleCloseCard() {
    setShowProject(false)
    setSelectedProject(null)

  }
  return (
    <div className="flex flex-col">
      <div>
      {
          showProject && (
            <FloatingCard selectedProject={selectedProject} onClose={handleCloseCard} />
      )}
      </div>
      {projects.map((project: ProjectType) => (
        <div
          key={project.id}
          onMouseEnter={() => handleProjectHover(selectedProject)}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};
