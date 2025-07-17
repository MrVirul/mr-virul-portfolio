import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { HiArrowLongRight, HiOutlineArrowDownTray } from "react-icons/hi2";
import { PiHandWavingFill } from "react-icons/pi";
import { FaCode, FaRocket, FaLightbulb } from "react-icons/fa";

const Header = () => {
  return (
    <div className="relative text-center py-32 px-4 bg-[#0F172A] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#22D3EE] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#FACC15] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-[#22D3EE] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Profile Image */}
  <div className="mb-8 animate-fade-in-up">
    <div className="relative group">
        <Image
          src={assets.profile_img}
            alt="Virul Meemana - Frontend Developer"
            className="rounded-full w-36 h-36 mx-auto object-cover border-4 border-[#22D3EE] shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] profile-image-container"
          />
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#22D3EE]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div>
    </div>
</div>

        {/* Greeting */}
        <h3 className="flex items-center justify-center gap-3 text-xl md:text-2xl mb-8 font-Fira_Code text-gray-300 animate-fade-in-up animation-delay-200">
          Hi there! I'm Virul Meemana
          <PiHandWavingFill className="w-7 h-7 text-[#FACC15] animate-wave" />
        </h3>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-Ovo mb-8 animate-fade-in-up animation-delay-400">
          <span className="bg-gradient-to-r from-white via-[#22D3EE] to-white bg-clip-text text-transparent">
            Frontend Developer
          </span>
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl text-[#22D3EE] font-Fira_Code">
            & Digital Craftsman
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto font-Ovo text-gray-300 mb-12 leading-relaxed text-lg animate-fade-in-up animation-delay-600">
          Transforming ideas into exceptional digital experiences through clean
          code, innovative design, and cutting-edge technology. I specialize in
          creating scalable web applications that drive business success.
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 animate-fade-in-up animation-delay-800">
          <div className="flex items-center gap-2 text-[#22D3EE] font-Fira_Code">
            <FaCode className="w-5 h-5" />
            <span>Clean Code</span>
          </div>
          <div className="flex items-center gap-2 text-[#22D3EE] font-Fira_Code">
            <FaRocket className="w-5 h-5" />
            <span>Fast Performance</span>
          </div>
          <div className="flex items-center gap-2 text-[#22D3EE] font-Fira_Code">
            <FaLightbulb className="w-5 h-5" />
            <span>Creative Solutions</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 animate-fade-in-up animation-delay-1000">
          {/* Contact Button */}
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#22D3EE] to-[#0EA5E9] text-[#0F172A] font-bold rounded-full flex items-center gap-3 hover:from-[#FACC15] hover:to-[#F59E0B] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_30px_rgba(34,211,238,0.3)] font-Fira_Code tracking-wider"
          >
            Let's Connect
            <HiArrowLongRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Resume Button */}
          <a
            href="/sample-resume.pdf"
            download
            className="group px-8 py-4 border-2 border-[#22D3EE] text-[#22D3EE] rounded-full flex items-center gap-3 hover:bg-[#22D3EE] hover:text-[#0F172A] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_30px_rgba(34,211,238,0.3)] font-Fira_Code tracking-wider"
          >
            Download Resume
            <HiOutlineArrowDownTray className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
