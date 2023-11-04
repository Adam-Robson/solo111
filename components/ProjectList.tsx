import React from 'react'
import Link from 'next/link'
import { projects } from '@/lib/data'
import type { ProjectType } from '@/lib/types'

export default function ProjectList() {
  return (
    <div className="container">
      <h1 className="text-center text-7xl md:text-8xl font-light tracking-tighter subpixel-antialiased">
        Projects
      </h1>
      <ul className="mt-4">{projects.map((project: ProjectType) => (
        <li key={project.id}>
          <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto h-32 sm:h-40 md:h-60 p-6 sm:p-10 md:p12">
            <h4 className="text-center text-lg/5">{project.title}</h4>
            <p className="my-2 text-xs/3">{project.description}</p>
            <div className="max-w-xs flex justify-around items-baseline">
              <Link className="text-sm md:text-lg" href={project.githubLink}>GitHub</Link>
              <Link className="text-sm md:text-lg" href={project.liveLink}>Live Deploy</Link>
            </div>
          </div>
        </li>
      ))}
      </ul>
    </div>
  )
}
