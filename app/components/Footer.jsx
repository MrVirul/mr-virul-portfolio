import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp, FaHeart } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white font-Fira_Code border-t border-gray-800">
      <div className="container mx-auto py-12 px-6 lg:px-20 flex flex-col items-center">
        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="group bg-gradient-to-r from-[#22D3EE] to-[#0EA5E9] hover:from-[#FACC15] hover:to-[#F59E0B] text-[#0F172A] font-bold p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-[0_10px_30px_rgba(34,211,238,0.3)] mb-8"
          aria-label="Back to top"
        >
          <FaArrowUp className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>

        {/* Logo */}
        <div className="mb-8 group">
          <Image
            src={assets.logo_dark}
            alt="Dark Logo"
            width={200}
            height={50}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Professional tagline */}
        <p className="text-center text-gray-300 mb-8 max-w-md leading-relaxed">
          Crafting exceptional digital experiences with passion and precision.
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-8">
          <a 
            href="https://github.com/MrVirul" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-3 bg-[#1E293B] rounded-full text-gray-400 hover:text-white hover:bg-[#22D3EE] transition-all duration-300 transform hover:scale-110 hover:shadow-[0_5px_20px_rgba(34,211,238,0.4)]"
          >
            <FaGithub size={24} className="transition-transform duration-300 group-hover:rotate-12" />
          </a>
          <a 
            href="https://www.linkedin.com/in/meemana-virul-594459229/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-3 bg-[#1E293B] rounded-full text-gray-400 hover:text-white hover:bg-[#22D3EE] transition-all duration-300 transform hover:scale-110 hover:shadow-[0_5px_20px_rgba(34,211,238,0.4)]"
          >
            <FaLinkedin size={24} className="transition-transform duration-300 group-hover:rotate-12" />
          </a>
          <a 
            href="https://x.com/SoulOfVirul" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-3 bg-[#1E293B] rounded-full text-gray-400 hover:text-white hover:bg-[#22D3EE] transition-all duration-300 transform hover:scale-110 hover:shadow-[0_5px_20px_rgba(34,211,238,0.4)]"
          >
            <FaXTwitter size={24} className="transition-transform duration-300 group-hover:rotate-12" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm space-y-2">
          <p className="flex items-center justify-center gap-2">
            &copy; {currentYear} MrVirul. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-2">
            Designed & Built with <FaHeart className="text-[#22D3EE] w-4 h-4 animate-pulse" /> by MrVirul
          </p>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#22D3EE] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob"></div>
          <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-[#FACC15] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;