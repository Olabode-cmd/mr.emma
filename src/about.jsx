import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import User from './assets/mr.emma.jpg';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <AboutHeroSection />
        <ExpertiseSection />
        <CollaborationSection />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SAY GOODBYE TO GUESSWORK
            </h1>
            <h2 className="text-2xl font-bold mb-4">WELCOME TO THE SCIENCE AND ART OF HUMAN-CENTERED DESIGN</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I believe great design starts with empathy and ends with measurable impact. Dive into my portfolio, and you’ll see how I blend research, design thinking, and aesthetic precision to create meaningful digital experiences. But first, here’s a glimpse into who I am.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-4xl font-bold text-purple-600">3+</p>
                <p className="text-gray-600">Years of Experience</p>
              </div>
            </div>
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
          <h4 className="text-lg font-semibold mb-2">CRAFTING INTENTIONAL EXPERIENCES BACKED BY STRATEGY</h4>
          <p className="text-gray-700 mb-4">
            With over 3 years of experience in product design, I specialize in transforming real-world problems into elegant digital solutions. From mobile to web, I’ve designed across domains with one goal in mind: designing with purpose. My strength lies in creating user experiences that not only look and feel right — but perform.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">INTERACTION DESIGN</h3>
          <h4 className="text-lg font-semibold mb-2">BECAUSE USER FLOWS SHOULD NEVER FEEL LIKE MAZES</h4>
          <p className="text-gray-700 mb-4">
            I obsess over how users move through digital interfaces. Whether it’s tapping, scrolling, swiping, or pausing — every micro-movement matters. I bring clarity to complex interactions through intuitive flows and responsive feedback, ensuring users always know where they are and where they’re going.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">VISUAL DESIGN</h3>
          <h4 className="text-lg font-semibold mb-2">FUNCTION MEETS FORM IN A BALANCED DANCE</h4>
          <p className="text-gray-700 mb-4">
            Great visuals do more than catch the eye — they guide behavior. I create clean, purposeful visuals that elevate usability. My approach is grounded in visual hierarchy, consistency, and brand alignment, blending aesthetic intelligence with user psychology. Every pixel has a job to do.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">UX RESEARCH</h3>
          <h4 className="text-lg font-semibold mb-2">ASKING THE RIGHT QUESTIONS TO UNCOVER THE REAL NEEDS</h4>
          <p className="text-gray-700 mb-4">
            I don’t guess — I gather. Through interviews, usability tests, surveys, and field research, I uncover insights that drive evidence-based design. Whether it's identifying friction points or validating design decisions, I ensure the user’s voice is embedded into every phase of the product lifecycle. Research is where I start, and often where I return to iterate and improve.
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
        I’m passionate about working with teams that value clarity, collaboration, and curiosity. Whether you need someone to lead user discovery, map interaction flows, or craft a clean, pixel-perfect UI — I’m ready to partner with you.
      </p>
      <p className="text-xl text-gray-700 mb-8">
        Let’s create something that works beautifully and feels effortless.
      </p>
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
        <h3 className="text-xl font-semibold mb-2">LinkedIn Profile Link:</h3>
        <a href="https://www.linkedin.com/in/john-emmanuel-3327a11a1" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline break-all">www.linkedin.com/in/john-emmanuel-3327a11a1</a>
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