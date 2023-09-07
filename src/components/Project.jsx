import { useState } from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from './FeatureCard';

export default function Project({ title, description, link, features }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      className="p-8 m-4 border border-gray-600 rounded-lg hover:border-cyan-700 hover:shadow-md transition duration-300 ease-in-out relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2 className="text-2xl font-normal project-title">{title}</h2>
      <div className={`cloak ${hover ? 'block' : 'hidden'}`}>
        <p className="description">{description}</p>

        <Link
          to={link}
          target="blank"
          rel="noopener noreferrer"
          className=" text-pink-100 text-center text-2xl mt-2 block"
        >View Project</Link>
        <div className="flex list-none w-full justify-between items-baseline">
          <FeatureCard features={features} />
        </div>
      </div>
    </article>
  );


}
