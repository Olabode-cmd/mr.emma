import React from "react";
import { userData } from "../data/data";
import { Mail, ArrowRight, Linkedin, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <div
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-950 text-white py-24"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="absolute right-0 top-0 h-20 w-20 bg-purple-500 rounded-bl-full opacity-20"></div>
      <div className="absolute left-0 bottom-0 h-16 w-16 bg-indigo-500 rounded-tr-full opacity-20"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PHBhdGggZD0iTTAgMGgzMHYzMEgweiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PHBhdGggZD0iTTMwIDBoMzB2MzBIMzB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Let's bring your ideas to life
            </h2>
            <p className="text-sm md:text-xl text-purple-100 mb-8 max-w-lg">
              Have a project in mind? I'm always open to discussing new
              opportunities and creative collaborations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={`mailto:${userData.contactEmail}`}
                className="inline-flex text-sm md:text-base items-center justify-center px-6 py-3 bg-white text-purple-900 font-medium rounded-lg hover:bg-purple-50 transition group"
              >
                <Mail size={18} className="mr-2" />
                Send Email
              </a>
              <a
                href="#"
                className="inline-flex text-sm md:text-base items-center justify-center px-6 py-3 bg-transparent border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition group"
              >
                <span>Schedule a Call</span>
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={userData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-purple-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={userData.socials.dribbble}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-purple-200 transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble size={24} />
              </a>
              {/* <a
                href={userData.socials.behance}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-purple-200 transition-colors"
                aria-label="Behance"
              >
                <Behance size={24} />
              </a> */}
            </div>
          </div>

          {/* Right side - Stats and location */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-white mb-1">
                  {userData.yearsOfExperience}+
                </p>
                <p className="text-purple-200 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white mb-1">
                  {userData.projectsCompleted}+
                </p>
                <p className="text-purple-200 text-sm">Projects Completed</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-purple-600/20 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-300"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-1">
                  Based in
                </h3>
                <p className="text-purple-200">{userData.location}</p>
                <p className="text-purple-300 text-sm mt-1">
                  Available for remote work worldwide
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-purple-200 mb-4 md:mb-0">
            © {new Date().getFullYear()} {userData.name} — All rights reserved
          </p>
          <div className="flex items-center gap-6 text-sm text-purple-200">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;