import React from "react";
import { ReactTyped } from "react-typed";
import { userData, portfolioData } from "./data/data";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import PortfolioCard from "./components/PortfolioCard";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Bio Section */}
      <BioSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      <Footer />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden h-screen 2xl:h-[85vh] flex items-center">
      <div className="absolute inset-0 z-0">
        {/* Element touching top right */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        {/* Additional elements */}
        <div className="absolute -top-20 left-20 w-[30rem] h-[30rem] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        <div className="absolute bottom-40 right-60 w-[20rem] h-[20rem] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-60 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="md:max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-semibold mb-4  lowercase">
            <span className="block">
              <ReactTyped
                strings={userData.displayPositions}
                typeSpeed={120}
                backSpeed={20}
                loop
                className="irish-grover"
              />
            </span>
          </h1>
          <p className="text-2xl text-gray-700 mb-12">
            with a passion for creating thoughtful and visually stunning digital
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

const BioSection = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p data-aos="fade-up" className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            {userData.bio}
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div data-aos="fade-up">
              <p className="text-5xl font-bold text-purple-600">
                {userData.yearsOfExperience}+
              </p>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-5xl font-bold text-purple-600">
                {userData.projectsCompleted}+
              </p>
              <p className="text-gray-600">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <div id="portfolio" className="bg-gray-900 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            data-aos="fade-up" 
            className="text-4xl font-bold text-white mb-4"
          >
            Featured Projects
          </h2>
          <p 
            data-aos="fade-up" 
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Here are some of the projects I've worked on.
          </p>
        </div>
        
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
  );
};

export default App;
