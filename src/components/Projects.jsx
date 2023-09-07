import { Link } from 'react-router-dom';
import { projects } from '../services/data';
import Project from './Project';

export default function Projects() {
  return (
    <section className="max-w-full w-11/12 mx-auto fadein px-6">
      <Link className="text-lg absolute top-10 right-10 subpixel-antialiased" to="/">home</Link>
      <h1 className="text-7xl sm:text-8xl subpixel-antialiased mt-12">projects</h1>

      {projects.map(({ title, description, link, features }, index) => (
        <>
          <Project
            key={index}
            title={title}
            description={description}
            link={link}
            features={features}
          />
        </>
      ))}
    </section>
  );
}
