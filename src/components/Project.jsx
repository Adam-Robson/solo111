import { useState } from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from './FeatureCard';

export default function Project({ title, description, link, features }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      className="my-8 p-4 border text-center rounded-lg hover:border-cyan-700 hover:shadow-md transition duration-300 ease-in-out"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2 className="text-2xl font-light project-title">{title}</h2>
      <div className={`cloak ${hover ? 'block' : 'hidden'}`}>
        <p className="description">{description}</p>

        <Link
          to={link}
          target="blank"
          rel="noopener noreferrer"
          className=" text-pink-100 text-center text-light text-3xl mt-2"
        >View Project</Link>
        <div className="flex list-none w-full justify-between items-baseline py-6">
          <FeatureCard features={features} />
        </div>
      </div>
    </article>
  );


}
