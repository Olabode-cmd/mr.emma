import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/data';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = portfolioData.find(p => p.id === id);
  
  if (!project) {
    navigate('/portfolio');
    return null;
  }

  return (
    <div className="font-sans">
      <Navbar />
      <div className="min-h-screen bg-gray-900">
        <div className="relative">
          <div className="h-[80vh] relative">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900"></div>
          </div>

          {/* Project Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-block rounded-full bg-purple-600/70 px-4 py-1.5 text-sm font-medium text-gray-100">
                  {project.projectType}
                </span>
                <span className="inline-block rounded-full bg-gray-700/50 px-4 py-1.5 text-sm font-medium text-gray-300">
                  {project.duration}
                </span>
                <span className="inline-block rounded-full bg-gray-700/50 px-4 py-1.5 text-sm font-medium text-gray-300">
                  {project.client}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        {project.metrics && (
          <div className="bg-gray-800 py-12 mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <p className="text-3xl font-bold text-purple-400 mb-2">{value}</p>
                    <p className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">My Role</h3>
              <div className="flex flex-wrap gap-3">
                {project.role.map((role, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Tools Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Design Process */}
          {project.designProcess && (
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-12">Design Process</h2>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-800"></div>
                <div className="space-y-12">
                  {project.designProcess.map((phase, index) => (
                    <div key={index} className="relative pl-20">
                      <div className="absolute left-7 w-3 h-3 bg-purple-500 rounded-full transform -translate-x-1/2"></div>
                      <div className="bg-gray-800 rounded-xl p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                          <span className="text-sm text-purple-400">{phase.duration}</span>
                        </div>
                        <p className="text-gray-400">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Research Methods & Key Findings */}
          {project.researchMethods && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Research Methods</h3>
                <ul className="space-y-4">
                  {project.researchMethods.map((method, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Key Findings</h3>
                <ul className="space-y-4">
                  {project.keyFindings.map((finding, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <svg className="w-5 h-5 text-purple-400 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {finding}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && (
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-12">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.keyFeatures.map((feature, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{feature.name}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Solutions */}
          {project.challenges && (
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-12">Challenges & Solutions</h2>
              <div className="space-y-8">
                {project.challenges.map((item, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Challenge</h3>
                        <p className="text-gray-400">{item.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Solution</h3>
                        <p className="text-gray-400">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials */}
          {project.testimonials && (
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-12">User Feedback</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl p-8">
                    <svg className="w-8 h-8 text-purple-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-xl text-gray-300 italic mb-6">{testimonial.quote}</p>
                    <div>
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Next Steps */}
          {project.nextSteps && (
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-12">What's Next</h2>
              <div className="bg-gray-800 rounded-xl p-8">
                <ul className="space-y-4">
                  {project.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Project Images */}
          {project.images && (
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-12">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.images.map((image, index) => (
                  <div key={index} className="relative aspect-video rounded-xl overflow-hidden">
                    <img
                      src={image}
                      alt={`Project screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-20 border-t border-gray-800 pt-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              <svg
                className="mr-2 h-4 w-4 transform rotate-180"
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
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudy; 