import Link from 'next/link'
import { PiArrowLeftDuotone } from 'react-icons/pi';
import { projects } from "../utils/data/store"
import Project from "../components/Project"

export default function ProjectsPage() {
  return (
    <div className="fade min-h-screen w-11/12 mx-auto px-6">
      <div className="relative">
        <Link className="absolute top-4 left-4" href="/">
          <PiArrowLeftDuotone size={30} color={'#b39180'} />
        </Link>
      </div>

      <div className="w-full flex justify-center mt-8">
        <h1 className="text-7xl text-center font-light tracking-tight subpixel-antialiased my-6 underline underline-offset-[2.12rem] decoration-0">projects</h1>
      </div>

      <div className="max-w-sm md:max-w-md mx-auto flex flex-col items-center">
        {projects.map(({ title, description, url }) => (
          <>
            <Project
              key={title}
              title={title}
              description={description}
              url={url}
            />
          </>
        ))}
      </div>
    </div>
  );
}
