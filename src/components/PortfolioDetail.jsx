import React from 'react';

const PortfolioDetail = ({ project }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src={project.heroImage} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Problem</h3>
                  <p className="text-gray-600">{project.overview.problem}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Goal</h3>
                  <p className="text-gray-600">{project.overview.goal}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="text-gray-900 font-medium">{project.overview.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="text-gray-900 font-medium">{project.role.title}</p>
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
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{responsibility}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* User Research */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">User Research</h2>
          <div className="space-y-12">
            <div>
              <p className="text-gray-600 mb-8">{project.userResearch.summary}</p>
              
              {/* Pain Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {project.userResearch.painPoints.map((userType, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {userType.user}
                    </h3>
                    <ul className="space-y-3">
                      {userType.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-3">
                          <span className="text-red-500 mt-1">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Personas */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">User Personas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.userResearch.personas.map((persona, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden">
                      <img 
                        src={persona.image} 
                        alt={persona.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{persona.name}</h4>
                        <p className="text-purple-600 text-sm font-medium mb-4">{persona.type}</p>
                        <p className="text-gray-600 mb-4">{persona.description}</p>
                        <div>
                          <h5 className="text-sm font-semibold text-gray-900 mb-2">Goals</h5>
                          <ul className="space-y-2">
                            {persona.goals.map((goal, goalIndex) => (
                              <li key={goalIndex} className="flex items-center space-x-2 text-gray-700">
                                <span className="text-purple-600">•</span>
                                <span>{goal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* User Journey Map */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">User Journey Map</h3>
                <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                  <img 
                    src={project.userResearch.userJourneyMap.image}
                    alt="User Journey Map"
                    className="w-full h-auto"
                  />
                  <p className="p-6 text-gray-600 bg-gray-50">
                    {project.userResearch.userJourneyMap.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Design Process</h2>
          
          {/* Paper Wireframes */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Paper Wireframes</h3>
            <p className="text-gray-600 mb-6">{project.designProcess.paperWireframes.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.designProcess.paperWireframes.images.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`Paper wireframe ${index + 1}`}
                  className="rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>

          {/* Digital Wireframes */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Digital Wireframes</h3>
            <p className="text-gray-600 mb-6">{project.designProcess.digitalWireframes.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.designProcess.digitalWireframes.images.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`Digital wireframe ${index + 1}`}
                  className="rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>

          {/* Low-Fidelity Prototype */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Low-Fidelity Prototype</h3>
            <p className="text-gray-600 mb-6">{project.designProcess.lowFidelityPrototype.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              {project.designProcess.lowFidelityPrototype.images.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`Low-fidelity prototype ${index + 1}`}
                  className="rounded-lg shadow-lg"
                />
              ))}
            </div>
            <a 
              href={project.designProcess.lowFidelityPrototype.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-600 hover:text-purple-700"
            >
              View Prototype
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Usability Studies */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Usability Studies Findings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.designProcess.usabilityStudies.findings.map((finding, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl"
                >
                  <p className="text-gray-700">{finding}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Refined Designs */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Refined Designs</h2>
          <p className="text-gray-600 mb-8">{project.refinedDesigns.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.refinedDesigns.images.map((image, index) => (
              <img 
                key={index}
                src={image}
                alt={`Refined design ${index + 1}`}
                className="rounded-lg shadow-lg"
              />
            ))}
          </div>
        </section>

        {/* High-Fidelity Prototype */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">High-Fidelity Prototype</h2>
          <p className="text-gray-600 mb-8">{project.highFidelityPrototype.description}</p>
          <div className="mb-6">
            <img 
              src={project.highFidelityPrototype.screenshot}
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
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </section>

        {/* Accessibility Considerations */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Accessibility Considerations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.accessibilityConsiderations.map((consideration, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 rounded-xl"
              >
                <p className="text-gray-700">{consideration}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Takeaways */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Takeaways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lessons Learned</h3>
              <ul className="space-y-4">
                {project.takeaways.lessons.map((lesson, index) => (
                  <li 
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-purple-600 mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h3>
              <ul className="space-y-4">
                {project.takeaways.nextSteps.map((step, index) => (
                  <li 
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-purple-600 mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <p className="text-gray-600 mb-8">{project.conclusion.summary}</p>
          <p className="text-gray-700 font-medium">{project.conclusion.connect}</p>
        </section>
      </div>
    </div>
  );
};

export default PortfolioDetail; 