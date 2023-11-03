import React from 'react'
import Link from 'next/link'
import { projects } from '@/lib/data'
import type { ProjectType } from '@/lib/types'

export default function ProjectList() {
  return (
    <div className="container">
      <h1 className="text-center text-5xl subpixel-antialiased">
        Projects
      </h1>
      <ul className="mt-10">{projects.map((project: ProjectType) => (
        <li key={project.id}>
          <div className="max-w-xl mx-auto h-40 p-12">
            <h4 className="text-center text-xl/7">{project.title}</h4>
            <p className="my-6">{project.description}</p>
            <span className="flex justify-between items-baseline">
              <Link href={project.githubLink}>GitHub</Link>
              <Link href={project.liveLink}>Live Deploy</Link>
            </span>
          </div>
        </li>
      ))}
      </ul>
    </div>
  )
}
