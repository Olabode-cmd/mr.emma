import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import User from './assets/mr.emma.jpg';
import { userData } from "./data/data";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <AboutHeroSection />
        <ExpertiseSection />
        <SkillsSection />
        <CollaborationSection />
        <NowNextSection />
        <EducationCertSection />
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
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              I'm Emmanuel John, a UI/UX & Product Designer based in Lagos,
              Nigeria, with 3+ years of experience designing web and mobile
              products across education, SaaS, and service platforms.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              I combine UX research, interaction design, and clean visual
              systems to help teams ship products that are not only beautiful,
              but usable, accessible, and easy to maintain.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              Currently, I design experiences at Digital Fortress LTD, and I've
              previously worked on admin tools, mobile apps, and digital
              platforms for teams like Verbum Dei Academy and other startups.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -m-4 bg-purple-200 rounded-full blur-md opacity-70"></div>
              <img
                src={User}
                alt="John Emmanuel"
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

const ExpertiseSection = () => (
  <div className="bg-gray-50 py-24">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Expertise</h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
      </div>
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold mb-2">UX DESIGN</h3>
          <p className="text-purple-600 font-medium mb-2">User flows, IA, prototypes, usability feedback.</p>
          <h4 className="text-lg font-semibold mb-2">CRAFTING INTENTIONAL EXPERIENCES BACKED BY STRATEGY</h4>
          <p className="text-gray-700 mb-4">
            With over 3 years of experience in product design, I specialize in transforming real-world problems into elegant digital solutions. From mobile to web, I've designed across domains with one goal in mind: designing with purpose. My strength lies in creating user experiences that not only look and feel right — but perform.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">INTERACTION DESIGN</h3>
          <p className="text-purple-600 font-medium mb-2">Microinteractions, transitions, state handling.</p>
          <h4 className="text-lg font-semibold mb-2">BECAUSE USER FLOWS SHOULD NEVER FEEL LIKE MAZES</h4>
          <p className="text-gray-700 mb-4">
            I obsess over how users move through digital interfaces. Whether it's tapping, scrolling, swiping, or pausing — every micro-movement matters. I bring clarity to complex interactions through intuitive flows and responsive feedback, ensuring users always know where they are and where they're going.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">VISUAL DESIGN</h3>
          <p className="text-purple-600 font-medium mb-2">Layout, grids, typography, color systems, responsive UI.</p>
          <h4 className="text-lg font-semibold mb-2">FUNCTION MEETS FORM IN A BALANCED DANCE</h4>
          <p className="text-gray-700 mb-4">
            Great visuals do more than catch the eye — they guide behavior. I create clean, purposeful visuals that elevate usability. My approach is grounded in visual hierarchy, consistency, and brand alignment, blending aesthetic intelligence with user psychology. Every pixel has a job to do.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">UX RESEARCH</h3>
          <p className="text-purple-600 font-medium mb-2">Interviews, surveys, usability tests, insight synthesis.</p>
          <h4 className="text-lg font-semibold mb-2">ASKING THE RIGHT QUESTIONS TO UNCOVER THE REAL NEEDS</h4>
          <p className="text-gray-700 mb-4">
            I don't guess — I gather. Through interviews, usability tests, surveys, and field research, I uncover insights that drive evidence-based design. Whether it's identifying friction points or validating design decisions, I ensure the user's voice is embedded into every phase of the product lifecycle. Research is where I start, and often where I return to iterate and improve.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const CollaborationSection = () => (
  <div className="bg-white py-20">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-xl text-gray-700 mb-6">
        I'm passionate about working with teams that value clarity, collaboration, and curiosity. Whether you need someone to lead user discovery, map interaction flows, or craft a clean, pixel-perfect UI — I'm ready to partner with you.
      </p>
      <p className="text-xl text-gray-700 mb-8">
        Let's create something that works beautifully and feels effortless.
      </p>
    </div>
  </div>
);

const NowNextSection = () => (
  <div className="bg-gray-50 py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Now / Next</h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Currently open to</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-purple-600 mr-3">•</span>
            UI/UX or Product Design roles (onsite/hybrid/remote)
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 mr-3">•</span>
            Freelance/product collaborations in edtech, marketplaces, and SaaS
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const EducationCertSection = () => (
  <div className="bg-gray-50 py-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>B.Sc. Computer Science – University of the People (2024 – 2027) (In View)</li>
          <li>MSc. Environmental Pollution and Toxicology – University of Calabar (2023)</li>
          <li>PGD in Project Management – CIPM, Ghana (2020)</li>
          <li>B.Sc. Zoology & Environmental Biology – University of Calabar (2018)</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Certifications & Training</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Certified UX Designer - IXDF (2025) (In view)</li>
          <li>Google UX Design Certificate - Google (2025)</li>
          <li>UI/UX Master Class – EmboldLab, UK. (2024)</li>
          <li>Front-End Web Development – SimpliLearn (2024)</li>
          <li>Website UI/UX Design Using ChatGPT – SimpliLearn (2024)</li>
          <li>Product Designer (UI/UX) – Terra Learning (2022)</li>
        </ul>
      </div>
    </div>
  </div>
);

export default AboutPage;