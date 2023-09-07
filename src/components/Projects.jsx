import { Link } from 'react-router-dom';
import { projects } from '../services/data';
import Project from './Project';

export default function Projects() {
  return (
    <section className="max-w-4xl w-11/12 mx-auto">
      <Link className="text-xl absolute top-10 right-10 subpixel-antialiased" to="/">home</Link>
      <h1 className="text-8xl subpixel-antialiased">arts</h1>
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
