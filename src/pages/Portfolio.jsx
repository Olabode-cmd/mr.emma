import React from 'react';
import { portfolioData } from '../data/data';
import PortfolioCard from '../components/PortfolioCard';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Portfolio = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <div className="relative py-20 md:py-40 2xl:py-60 bg-gray-200 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                My Portfolio
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore my latest projects and case studies. Each project represents a unique challenge and solution in web development and design.
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((project, index) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <PortfolioCard project={project} />
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