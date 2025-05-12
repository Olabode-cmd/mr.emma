import React from 'react';
import { portfolioData } from '../data/data';
import PortfolioCard from '../components/PortfolioCard';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Portfolio = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative py-20 md:py-32 bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Dive into detailed case studies of my selected projects. Each study showcases the complete design process from research to final implementation.
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="space-y-32">
            {portfolioData.map((project, index) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="first:mt-0"
              >
                <PortfolioCard project={project} isReversed={index % 2 !== 0} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio; 