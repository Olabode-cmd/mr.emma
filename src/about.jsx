import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { userData } from "./data/data";
import User from './assets/mr.emma.jpg';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <AboutHeroSection />
        <SkillsSection />
        <ToolsSection />
        <EducationSection />
      </main>
      <Footer />
    </>
  );
};

const AboutHeroSection = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-white py-24">
      <div className="absolute inset-0 z-0">
        {/* Background blur elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -top-20 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        <div className="absolute bottom-40 right-60 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {userData.name}
            </h1>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              {userData.bio}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-4xl font-bold text-purple-600">
                  {userData.yearsOfExperience}+
                </p>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-purple-600">
                  {userData.projectsCompleted}+
                </p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>

            <Link to="/contact" className="inline-flex items-center group">
              <div className="border-2 border-gray-400 rounded-full p-4 mr-4 group-hover:border-purple-600 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:text-purple-600 text-gray-600 transition-colors"
                >
                  <path
                    d="M19 12L5 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 19L5 12L12 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-gray-600 uppercase tracking-wider font-medium group-hover:text-purple-600 transition-colors">
                Get In Touch
              </span>
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -m-4 bg-purple-200 rounded-full blur-md opacity-70"></div>
              <img
                src={User}
                alt={userData.name}
                className="w-full max-w-md rounded-md relative z-10 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skillset</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {userData.skillset.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3Z"
                    stroke="#7C3AED"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13Z"
                    stroke="#7C3AED"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 3H15C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3Z"
                    stroke="#7C3AED"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 13H15C13.8954 13 13 13.8954 13 15V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13Z"
                    stroke="#7C3AED"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ToolsSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Tools</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {userData.designTools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                <span className="text-2xl">{tool.charAt(0)}</span>
              </div>
              <p className="text-gray-800 font-medium">{tool}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {userData.education.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 10V16C22 17.1 21.1 18 20 18H4C2.9 18 2 17.1 2 16V8C2 6.9 2.9 6 4 6H20C21.1 6 22 6.9 22 8V10ZM20 10H4V16H20V10Z"
                        fill="#7C3AED"
                      />
                      <path
                        d="M2 8V16C2 17.1 2.9 18 4 18H20C21.1 18 22 17.1 22 16V8C22 6.9 21.1 6 20 6H4C2.9 6 2 6.9 2 8ZM20 8V16H4V8H20Z"
                        stroke="#7C3AED"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 13.5H10M18 13.5H14"
                        stroke="#7C3AED"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="h-full w-0.5 bg-purple-200 mx-auto mt-2 hidden md:block"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
                  <div className="text-sm text-purple-600 font-semibold mb-1">
                    {edu.yearGraduated}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;