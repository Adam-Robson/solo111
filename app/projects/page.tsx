import { projects } from "../utils/data/store"
import Project from "../components/Project"
export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-11/12 mx-auto fade px-4">
      <section className="max-w-full w-10/12 mx-auto fadein px-6">
      <h1 className="text-7xl sm:text-8xl font-light subpixel-antialiased mt-12">projects</h1>

      {projects.map(({ title, description, link }, index) => (
        <>
          <Project
            key={index}
            title={title}
            description={description}
            link={link}
          />
        </>
      ))}
    </section>
    </div>
  );
}
