import { useState } from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from './FeatureCard';

export default function Project({ title, description, link, features }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      className="my-12 p-4 border rounded-lg border-cyan-300 hover:border-cyan-700 hover:shadow-md transition duration-300 ease-in-out"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2 className="text-3xl text-center font-light underline underline-offset-4 decoration-1 project-title">{title}</h2>
      <div className={`cloak ${hover ? 'block' : 'hidden'}`}>
        <p className="font-light">{description}</p>
        <div className="text-center">
          <Link
            to={link}
            target="blank"
            rel="noopener noreferrer"
            className="text-center font-light text-3xl my-4"
          >View Project</Link>
        </div>
        <div className="flex list-none w-full justify-between items-baseline py-6">
          <FeatureCard features={features} />
        </div>
      </div>
    </article>
  );
}
