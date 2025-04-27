import React, { useState, useEffect } from "react";
import { userData } from "../data/data";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 w-full z-10 transition-all duration-300 ${
        scrolled ? "bg-white/20 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center justify-between">
              <div className="mr-1">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 8H32V32H8V8Z" stroke="#6B46C1" strokeWidth="2" />
                  <path d="M20 8V32" stroke="#6B46C1" strokeWidth="2" />
                  <path d="M8 20L20 8" stroke="#6B46C1" strokeWidth="2" />
                  <path d="M20 32L32 20" stroke="#6B46C1" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Mr.Emma</span>
                <span className="font-bold text-gray-800">UI/UX Designer</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-10">
              <Link
                to="/about"
                className="text-gray-800 hover:text-purple-600 transition font-medium"
              >
                About Me
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-800 hover:text-purple-600 transition font-medium"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-purple-600 transition font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;