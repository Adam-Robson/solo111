
import { useNavigate } from 'react-router-dom';
import { projects } from '../../services/projects';
import Project from './Project';

export default function Projects() {
  const navigate = useNavigate();

  function handleHomeNav() {
    navigate('/');
  }

  return (
    <section className="max-w-full w-10/12 mx-auto fadein px-6">
      <button onClick={ handleHomeNav } className="absolute top-6 right-6 subpixel-antialiased homelink" to="/">home</button>
      <h1 className="text-7xl sm:text-8xl font-light subpixel-antialiased mt-12">projects</h1>

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
