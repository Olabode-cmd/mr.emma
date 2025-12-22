import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ project, isReversed }) => {
  return (
    <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      <div className={`relative overflow-hidden rounded-2xl ${isReversed ? 'lg:order-last' : ''}`}>
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className={`flex flex-col ${isReversed ? 'lg:pr-12' : 'lg:pl-12'}`}>
        {/* <span className="px-3 py-1 text-sm font-medium text-purple-700 bg-purple-50 rounded-full w-fit mb-6">
          {project.projectType}
        </span> */}

        <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm md:text-lg leading-6 md:leading-8 mb-4">
          {project.overview.summary}
        </p>

        <p className="text-purple-600 font-medium text-sm mb-8">
          {project.roleInfo}
        </p>

        <Link
          to={`/portfolio/${project.id}`}
          className="inline-flex text-sm md:text-base items-center text-purple-700 font-medium hover:text-purple-900 transition-colors duration-300 mt-auto group/link"
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
      </div>
    </div>
  );
};

export default PortfolioCard; 