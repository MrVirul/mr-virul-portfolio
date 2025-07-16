import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white font-Fira_Code">
      <div className="container mx-auto py-8 px-6 lg:px-20 flex flex-col items-center">
        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold p-3 rounded-full transition-colors duration-300 mb-6"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6">
          <a href="https://github.com/MrVirul" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/meemana-virul-594459229/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaLinkedin size={28}  />
          </a>
          <a href="https://x.com/SoulOfVirul" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaXTwitter size={28} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-center text-sm">
          &copy; {currentYear} MrVirul. All rights reserved. <br />
          Designed & Built by MrVirul.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
