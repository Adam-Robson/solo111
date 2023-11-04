import React from 'react'
import Link from 'next/link'
import { projects } from '@/lib/data'
import type { ProjectType } from '@/lib/types'

export default function ProjectList() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <ul className="mt-4">{projects.map((project: ProjectType) => (
        <li key={project.id}>
          <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto h-32 sm:h-40 p-6 sm:p-10 md:p12">
            <h4 className="text-center text-lg/5 md:text-xl/6">{project.title}</h4>
            <p className="my-2 text-sm/4 md:text-lg/5">{project.description}</p>
            <div className="max-w-xs mx-auto flex justify-around items-baseline">
              <Link className="text-sm/4 md:text-lg/5" href={project.githubLink}>GitHub</Link>
              <Link className="text-sm/4 md:text-lg/5" href={project.liveLink}>Live Deploy</Link>
            </div>
          </div>
        </li>
      ))}
      </ul>
    </div>
  )
}
