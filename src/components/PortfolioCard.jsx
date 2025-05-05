import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ project }) => {
  return (
    <div className="group h-full flex flex-col relative overflow-hidden rounded-xl bg-gray-800 transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-64 flex-shrink-0 overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="relative p-6 flex-grow flex flex-col">
        <span className="inline-block rounded-full bg-purple-600/10 px-3 py-1 text-sm font-medium text-purple-400 w-fit">
          {project.projectType}
        </span>

        <h3 className="mt-4 text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="mt-3 text-gray-400 line-clamp-3 flex-grow">
          {project.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <Link
            to={`/portfolio/${project.id}`}
            className="group/link inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            View Case Study
            <svg
              className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-300 transition-colors duration-300"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard; 