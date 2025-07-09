import React from 'react';
import { useParams } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// Helper function to handle image sources
const getImageSource = (imageName) => {
  // If it's a string that looks like an image name and doesn't start with http, return a placeholder
  // Otherwise, return the image as is (could be an imported image or URL)
  if (typeof imageName === 'string' && !imageName.startsWith('http') && !imageName.startsWith('data:') && !imageName.includes('.')) {
    return `https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&text=${encodeURIComponent(imageName)}`;
  }
  return imageName;
};

const CaseStudy = () => {
  const { id } = useParams();
  const project = portfolioData.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600">The project you're looking for doesn't exist or has been moved.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-white">
          {/* Hero Section */}
          <div className="relative h-[80vh] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${getImageSource(project.heroImage)})`,
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800/40 to-gray-900/80" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl">
                  {project.overview.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Project Overview */}
            <section className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Project Overview
                  </h2>
                  <div className="space-y-8">
                    {project.overview.project && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          The Project
                        </h3>
                        <p className="text-gray-600">
                          {project.overview.project}
                        </p>
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        The Problem
                      </h3>
                      <p className="text-gray-600">
                        {project.overview.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        The Goal
                      </h3>
                      <p className="text-gray-600">{project.overview.goal}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Project Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="text-gray-900 font-medium">
                        {project.overview.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Role</p>
                      <p className="text-gray-900 font-medium">
                        {project.role.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* My Role */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Role</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.role.responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <span className="text-purple-600 mt-1">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* User Research - Only render if it exists */}
            {project.userResearch && (
              <section className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  User Research
                </h2>
                <div className="space-y-12">
                  <div>
                    <p className="text-gray-600 mb-8">
                      {project.userResearch.summary}
                    </p>

                    {/* Pain Points */}
                    {project.userResearch.painPoints && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {project.userResearch.painPoints.map((painPoint, index) => (
                          <div 
                            key={index}
                            className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                          >
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                <svg
                                  className="w-6 h-6 text-red-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                  />
                                </svg>
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900">
                                {painPoint.title || painPoint.user}
                              </h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                              {painPoint.description || (painPoint.points && painPoint.points.join(', '))}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Personas */}
                    {project.userResearch.personas && (
                      <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                          User Personas
                        </h3>
                        <div className="max-w-6xl mx-auto">
                          {project.userResearch.personas.map((persona, index) => (
                            <div 
                              key={index}
                              className="bg-white shadow-lg rounded-xl overflow-hidden w-full mx-auto"
                            >
                              <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/3">
                                  <img
                                    src={getImageSource(persona.image)}
                                    alt={persona.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="md:w-2/3 p-8">
                                  <div className="mb-6">
                                    <h4 className="text-2xl font-semibold text-gray-900 mb-1">
                                      {persona.name}
                                    </h4>
                                    <p className="text-purple-600 font-medium">
                                      {persona.type}
                                    </p>
                                  </div>
                                  
                                  <p className="text-gray-600 mb-8 leading-relaxed">
                                    {persona.description}
                                  </p>

                                  <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                      <h5 className="font-semibold text-gray-900 mb-4">
                                        Goals
                                      </h5>
                                      <ul className="space-y-3">
                                        {persona.goals.map((goal, goalIndex) => (
                                          <li
                                            key={goalIndex}
                                            className="flex items-start space-x-2 text-gray-700"
                                          >
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span>{goal}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    {persona.frustrations && (
                                      <div>
                                        <h5 className="font-semibold text-gray-900 mb-4">
                                          Frustrations
                                        </h5>
                                        <ul className="space-y-3">
                                          {persona.frustrations.map((frustration, frustrationIndex) => (
                                            <li
                                              key={frustrationIndex}
                                              className="flex items-start space-x-2 text-gray-700"
                                            >
                                              <span className="text-red-500 mt-1">•</span>
                                              <span>{frustration}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* User Journey Map */}
                    {project.userResearch.userJourneyMap && (
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                          User Journey Map
                        </h3>
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                          <img
                            src={getImageSource(project.userResearch.userJourneyMap.image)}
                            alt="User Journey Map"
                            className="w-full h-auto"
                          />
                          <p className="p-6 text-gray-600 bg-gray-50">
                            {project.userResearch.userJourneyMap.description}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* How Might We Statements */}
                    {project.userResearch.howMightWeStatements && project.userResearch.howMightWeStatements.length > 0 && (
                      <div className="mt-16 mb-12">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8">How Might We Statements</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                          {project.userResearch.howMightWeStatements.map((statement, idx) => (
                            <div key={idx} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl hover:scale-105 hover:bg-purple-50 hover:border-purple-200 transition-all duration-300 ease-in-out cursor-pointer">
                              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-700 font-bold text-xl mb-4 group-hover:bg-purple-200 group-hover:text-purple-800">{idx + 1}</div>
                              <p className="text-gray-700 font-medium hover:text-purple-900">{statement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Design Process */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Design Process
              </h2>

              {/* Wireframes - New section for Verbum Dei */}
              {project.designProcess.wireframes && (
                <div className="mb-20">
                  <div className="max-w-3xl mx-auto text-center mb-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                      Wireframes
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.designProcess.wireframes.description}
                    </p>
                    {project.designProcess.wireframes.tools && (
                      <div className="mt-6">
                        <p className="text-sm text-gray-500 mb-2">Tools used:</p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {project.designProcess.wireframes.tools.map((tool, index) => (
                            <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
                      {project.designProcess.wireframes.images.map(
                        (image, index) => (
                          <div
                            key={index}
                            className="group overflow-hidden rounded-xl shadow-lg"
                          >
                            <img
                              src={getImageSource(image)}
                              alt={`Wireframe ${index + 1}`}
                              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Design System - New section for Verbum Dei */}
              {project.designProcess.designSystem && (
                <div className="mb-20">
                  <div className="max-w-3xl mx-auto text-center mb-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                      Design System
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.designProcess.designSystem.description}
                    </p>
                  </div>

                  {/* Design System Foundations */}
                  <div className="max-w-6xl mx-auto mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {/* Typography */}
                      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                          </svg>
                          Typography
                        </h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Font:</strong> {project.designProcess.designSystem.foundations.typography.primaryFont}</p>
                          <p><strong>Scale:</strong> {project.designProcess.designSystem.foundations.typography.scale}</p>
                          <p><strong>Line Height:</strong> {project.designProcess.designSystem.foundations.typography.lineHeight}</p>
                        </div>
                      </div>

                      {/* Colors */}
                      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                          </svg>
                          Colors
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 rounded" style={{backgroundColor: project.designProcess.designSystem.foundations.colors.primary}}></div>
                            <span>Primary: {project.designProcess.designSystem.foundations.colors.primary}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 rounded" style={{backgroundColor: project.designProcess.designSystem.foundations.colors.accent}}></div>
                            <span>Accent: {project.designProcess.designSystem.foundations.colors.accent}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 rounded" style={{backgroundColor: project.designProcess.designSystem.foundations.colors.success}}></div>
                            <span>Success: {project.designProcess.designSystem.foundations.colors.success}</span>
                          </div>
                        </div>
                      </div>

                      {/* Iconography */}
                      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Iconography
                        </h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Library:</strong> {project.designProcess.designSystem.foundations.iconography.library}</p>
                          <p><strong>Rules:</strong> {project.designProcess.designSystem.foundations.iconography.rules}</p>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                          </svg>
                          Buttons
                        </h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Variants:</strong> {project.designProcess.designSystem.foundations.buttons.variants.join(', ')}</p>
                          <p><strong>States:</strong> {project.designProcess.designSystem.foundations.buttons.states.join(', ')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Components */}
                  <div className="max-w-4xl mx-auto">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">Key Components</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.designProcess.designSystem.components.map((component, index) => (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                          <span className="text-purple-600">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{component}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Storyboard - Only render if it exists */}
              {project.designProcess.storyboard && (
                <div className="mb-20">
                  <div className="max-w-3xl mx-auto text-center mb-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                      Storyboard
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.designProcess.storyboard.description}
                    </p>
                  </div>
                  <div className="max-w-6xl mx-auto">
                    <div className={`grid ${project.designProcess.storyboard.images.length <= 2 ? 'grid-cols-2' : project.designProcess.storyboard.images.length >= 5 ? 'grid-cols-5' : `grid-cols-${project.designProcess.storyboard.images.length}`} gap-10 justify-center`}>
                      {project.designProcess.storyboard.images.map(
                        (image, index) => (
                          <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl"
                          >
                            <img
                              src={getImageSource(image)}
                              alt={`Storyboard frame ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Paper Wireframes - Only render if it exists */}
              {project.designProcess.paperWireframes && (
                <div className="mb-20">
                  <div className="max-w-3xl mx-auto text-center mb-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                      Paper Wireframes
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.designProcess.paperWireframes.description}
                    </p>
                  </div>
                  <div className="max-w-5xl mx-auto">
                    <div className={`grid ${project.designProcess.paperWireframes.images.length <= 2 ? 'grid-cols-2' : project.designProcess.paperWireframes.images.length >= 5 ? 'grid-cols-5' : `grid-cols-${project.designProcess.paperWireframes.images.length}`} gap-10 justify-center`}>
                      {project.designProcess.paperWireframes.images.map(
                        (image, index) => (
                          <div
                            key={index}
                            className="group aspect-square overflow-hidden rounded-xl"
                          >
                            <img
                              src={getImageSource(image)}
                              alt={`Paper wireframe ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Digital Wireframes - Only render if it exists */}
              {project.designProcess.digitalWireframes && (
                <div className="mb-20">
                  <div className="max-w-3xl mx-auto text-center mb-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                      Digital Wireframes
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.designProcess.digitalWireframes.description}
                    </p>
                  </div>
                  <div className="max-w-5xl mx-auto">
                    <div className={`grid ${project.designProcess.digitalWireframes.images.length <= 2 ? 'grid-cols-2' : project.designProcess.digitalWireframes.images.length >= 5 ? 'grid-cols-5' : `grid-cols-${project.designProcess.digitalWireframes.images.length}`} gap-10 justify-center`}>
                      {project.designProcess.digitalWireframes.images.map(
                        (image, index) => (
                          <div
                            key={index}
                            className="group aspect-square overflow-hidden rounded-xl"
                          >
                            <img
                              src={getImageSource(image)}
                              alt={`Digital wireframe ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Low-Fidelity Prototype */}
              {project.designProcess.lowFidelityPrototype && (
              <div className="mb-20">
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Low-Fidelity Prototype
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.designProcess.lowFidelityPrototype.description}
                  </p>
                </div>
                <div className="max-w-5xl mx-auto mb-10">
                  <div>
                    {project.designProcess.lowFidelityPrototype.images.map(
                      (image, index) => (
                        <div
                          key={index}
                          className="group overflow-hidden rounded-xl"
                        >
                          <img
                            src={getImageSource(image)}
                            alt={`Low-fidelity prototype ${index + 1}`}
                            className="w-full h-98 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href={project.designProcess.lowFidelityPrototype.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
                  >
                    View Interactive Prototype
                    <svg
                      className="w-5 h-5 ml-2"
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
                </div>
              </div>
              )}
              
              {/* Usability Feedback - New section for Verbum Dei */}
              {project.designProcess.usabilityFeedback && (
                <div className="mb-20">
                  <div className="max-w-3xl mx-auto text-center mb-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                      Usability Feedback
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.designProcess.usabilityFeedback.overview}
                    </p>
                  </div>
                  
                  <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                      {project.designProcess.usabilityFeedback.findings.map((finding, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-bold text-lg">{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">{finding.feature}</h4>
                              <div className="space-y-3">
                                <div>
                                  <h5 className="font-medium text-red-600 mb-1">Issue:</h5>
                                  <p className="text-gray-600 text-sm">{finding.issue}</p>
                                </div>
                                <div>
                                  <h5 className="font-medium text-green-600 mb-1">Solution:</h5>
                                  <p className="text-gray-600 text-sm">{finding.solution}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-6 bg-purple-50 rounded-xl">
                      <p className="text-gray-700 italic text-center">
                        "{project.designProcess.usabilityFeedback.insight}"
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Final Design - New section for Verbum Dei */}
              {project.designProcess.finalDesign && (
                <div className="mb-20">
                  <div className="max-w-3xl mx-auto text-center mb-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                      Final Design
                    </h3>
                  </div>

                  {/* Features */}
                  <div className="max-w-4xl mx-auto mb-12">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.designProcess.finalDesign.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                          <span className="text-purple-600">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Highlights */}
                  <div className="max-w-6xl mx-auto mb-12">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">Visual Highlights</h4>
                    {project.id === 'verbumdei_ui_admin' && project.designProcess.finalDesign.visualHighlights ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {project.designProcess.finalDesign.visualHighlights.map((img, idx) => (
                          <div key={idx} className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                            <img
                              src={img}
                              alt={`Visual highlight ${idx + 1}`}
                              className="w-full h-56 object-cover group-hover:brightness-90 transition duration-300"
                            />
                            {project.designProcess.finalDesign.visualHighlightsCaptions && project.designProcess.finalDesign.visualHighlightsCaptions[idx] && (
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm font-medium">{project.designProcess.finalDesign.visualHighlightsCaptions[idx]}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {project.designProcess.finalDesign.visualHighlights && project.designProcess.finalDesign.visualHighlights
                          .filter(v => typeof v === 'string')
                          .map((highlight, index) => (
                            <div key={index} className="flex items-start space-x-3 p-4 bg-white shadow-sm rounded-lg border border-gray-100">
                              <span className="text-purple-600 mt-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                </svg>
                              </span>
                              <span className="text-gray-700">{highlight}</span>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>

                  {/* Images */}
                  {project.designProcess.finalDesign.images && (
                  <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {project.designProcess.finalDesign.images.map((image, index) => (
                        <div key={index} className="group overflow-hidden rounded-xl shadow-lg">
                          <img
                            src={getImageSource(image)}
                            alt={`Final design ${index + 1}`}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  )}
                </div>
              )}
            </section>

            {/* Usability Study - Only render if it exists */}
            {project.usabilityStudy && (
              <section className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Usability Study</h2>
                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-700 mb-3">Research Questions</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {project.usabilityStudy.details.researchQuestions.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-700 mb-3">Participants</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {project.usabilityStudy.details.participants.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-700 mb-3">Methodology</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {project.usabilityStudy.details.methodology.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Session Images */}
                <div className="mb-12 flex flex-col md:flex-row gap-8 justify-center items-center">
                  {project.usabilityStudy.sessionImages.map((img, i) => (
                    <img key={i} src={getImageSource(img)} alt={`Usability study session ${i+1}`} className="rounded-xl shadow-lg w-full md:w-1/2 object-cover" />
                  ))}
                </div>
                {/* Findings */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-8">Usability Study Findings</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {project.usabilityStudy.findings.map((finding, i) => (
                      <div key={i} className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-full shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-200 text-blue-800 font-bold text-xl mb-4">{i+1}</div>
                        <h4 className="font-semibold text-blue-900 mb-2">{finding.title}</h4>
                        <p className="text-gray-700 text-sm">{finding.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Refined Designs - Only render if it exists */}
            {project.refinedDesigns && (
              <section className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Refined Designs
                </h2>
                <p className="text-gray-600 mb-8">
                  {project.refinedDesigns.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 max-w-lg mx-auto">
                  {project.refinedDesigns.images.map((image, index) => (
                    <img
                      key={index}
                      src={getImageSource(image)}
                      alt={`Refined design ${index + 1}`}
                      className="rounded-lg shadow-lg"
                    />
                  ))}
                </div>
              </section>
            )}

            {/* High-Fidelity Prototype */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                High-Fidelity Prototype
              </h2>
              <p className="text-gray-600 mb-8">
                {project.highFidelityPrototype.description}
              </p>
              <div className="mb-6">
                <img
                  src={getImageSource(project.highFidelityPrototype.screenshot)}
                  alt="High-fidelity prototype screenshot"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <a
                href={project.highFidelityPrototype.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-700"
              >
                View Prototype
                <svg
                  className="w-5 h-5 ml-2"
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
            </section>

            {/* Accessibility Considerations - Only render if it exists */}
            {project.accessibilityConsiderations && (
              <section className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Accessibility Considerations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.accessibilityConsiderations.map(
                    (consideration, index) => (
                      <div key={index} className="p-6 bg-gray-50 rounded-xl">
                        <p className="text-gray-700">{consideration}</p>
                      </div>
                    )
                  )}
                </div>
              </section>
            )}

            {/* Accessibility - New section for Verbum Dei */}
            {project.accessibility && (
              <section className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Accessibility
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.accessibility.considerations.map(
                    (consideration, index) => (
                      <div key={index} className="p-6 bg-gray-50 rounded-xl">
                        <p className="text-gray-700">{consideration}</p>
                      </div>
                    )
                  )}
                </div>
              </section>
            )}

            {/* Results - New section for Verbum Dei */}
            {project.results && (
              <section className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-10">Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {/* Impact */}
                  <div className="flex flex-col items-center bg-white rounded-2xl shadow p-8 text-center">
                    <span className="mb-4 text-4xl text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact</h3>
                    <p className="text-gray-700 text-base">{project.results.impact}</p>
                  </div>
                  {/* Feedback */}
                  <div className="flex flex-col items-center bg-white rounded-2xl shadow p-8 text-center">
                    <span className="mb-4 text-4xl text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">User Feedback</h3>
                    <p className="text-gray-700 text-base italic">{project.results.feedback}</p>
                  </div>
                  {/* Learnings */}
                  <div className="flex flex-col items-center bg-white rounded-2xl shadow p-8 text-center">
                    <span className="mb-4 text-4xl text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 3.5a2.121 2.121 0 013 3L7 19.5 3 21l1.5-4L16.5 3.5z" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Key Learnings</h3>
                    <p className="text-gray-700 text-base">{project.results.learnings}</p>
                  </div>
                </div>
              </section>
            )}

            {/* Takeaways - Only render if it exists */}
            {project.takeaways && (
              <section className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-10">Takeaways</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {/* Impact */}
                  <div className="flex flex-col items-center bg-white rounded-2xl shadow p-8 text-center">
                    <span className="mb-4 text-4xl text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact</h3>
                    <p className="text-gray-700 text-base">{project.takeaways.impact}</p>
                  </div>
                  {/* What I Learned */}
                  <div className="flex flex-col items-center bg-white rounded-2xl shadow p-8 text-center">
                    <span className="mb-4 text-4xl text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 3.5a2.121 2.121 0 013 3L7 19.5 3 21l1.5-4L16.5 3.5z" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">What I Learned</h3>
                    <p className="text-gray-700 text-base">{project.takeaways.whatILearned}</p>
                  </div>
                </div>
                {/* Next Steps */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Next Steps</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                    {project.takeaways.nextSteps.map((step, idx) => (
                      <div key={idx} className="flex flex-col items-center bg-gray-50 rounded-2xl shadow p-8 text-center">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-xl mb-4">{idx + 1}</div>
                        <p className="text-gray-800 font-medium">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Next Steps - New section for Verbum Dei */}
            {project.nextSteps && !project.takeaways && (
              <section className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Next Steps</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {project.nextSteps.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center bg-gray-50 rounded-2xl shadow p-8 text-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-xl mb-4">{idx + 1}</div>
                      <p className="text-gray-800 font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Conclusion */}
            <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Conclusion
              </h2>
              <p className="text-gray-600 mb-8">{project.conclusion.summary}</p>
              <p className="text-gray-700 font-medium">
                {project.conclusion.connect || project.conclusion.callToAction}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy; 