import ProjectList from '@/components/ProjectList'
import React from 'react'

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center items-center p-12">
      <h1 className="text-center text-7xl md:text-8xl font-light tracking-tighter subpixel-antialiased">
        projects
      </h1>
      <ProjectList />
    </div>
  )
}
