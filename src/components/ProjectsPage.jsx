import React from "react";
import { Link } from 'react-router-dom';

import { projects } from '../services/data';

export default function ProjectsPage() {
  return (
    <section className="max-w-full w-11/12 mx-auto fadein px-6">
      <Link className="text-xl absolute top-10 right-10 subpixel-antialiased" to="/">home</Link>
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl subpixel-antialiased mt-12">projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className=" max-w-xs p-4 border border-gray-300 rounded-lg hover:border-blue-300 hover:shadow-md transition duration-300 ease-in-out"
        >
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="description hidden md:block">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:underline mt-2 block"
          >
            View Project
          </a>
        </div>
      ))}
      </div>
    </section>
  );
};
