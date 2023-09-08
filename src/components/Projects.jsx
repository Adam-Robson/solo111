import { useNavigate } from 'react-router-dom';
import { projects } from '../services/data';
import Project from './Project';

export default function Projects() {
  const navigate = useNavigate();

  function handleHomeNav() {
    navigate('/');
  }

  return (
    <section className="max-w-full w-11/12 mx-auto fadein px-6">
      <button onClick={ handleHomeNav } className="text-lg absolute top-10 right-10 subpixel-antialiased" to="/">home</button>
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
