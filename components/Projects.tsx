import Link from 'next/link';
import type { ProjectListProps } from '@/lib/types'

export default function Projects({ projects }: ProjectListProps) {
  return (
    <ul>
      {projects.map((project) => (
        <li
          key={project.id}
          className={`p-6 m-4`}
        >
          <div className={`card shadow-sm rounded-md p-4 mt-2`}>
            <div className='text-center font-normal text-base/5 sm:text-lg/6 md:text-xl/7 subpixel-antialiased'>{project.title}</div>

            <div>
              <div className="w-full font-light text-sm/3 sm:text-base/4 md:text-lg/5 subpixel-antialiased p-2">
                {project.description}
              </div>
            </div>

            <div className="w-full flex justify-evenly items-baseline mx-auto">
              <Link className="text-sm/4 md:text-lg/5 underline underline-offset-2 decoration-1" href={project.githubLink}>GitHub</Link>
              <Link className="text-sm/4 md:text-lg/5 underline underline-offset-2 decoration-1" href={project.liveLink}>See it Live</Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
