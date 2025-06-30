import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="text-center py-32 px-4">
      {/* Profile Image */}
      <div className="mb-8">
        <Image
          src={assets.profile_img}
          alt="profile photo"
          className="rounded-full w-32 h-32 mx-auto object-cover"
        />
      </div>

      {/* Greeting */}
      <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-6 font-Fira_Code">
        Hi! I'm Virul Meemana
        <Image 
          src={assets.hand_icon} 
          alt="waving hand" 
          className="w-6 h-6" 
        />
      </h3>

      {/* Main Heading - Fixed typo and sizing */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-Ovo mb-6">
        Frontend Web Developer
      </h1>

      {/* Description */}
      <p className="max-w-2xl mx-auto font-Ovo text-gray-600 mb-8 leading-relaxed">
        I am a frontend web developer with a passion for creating beautiful and
        functional websites. I have experience in HTML, CSS, JavaScript, and
        React, and I am always eager to learn new technologies and improve my
        skills.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        {/* Contact Button */}
        <a
          href="#contact"
          className="px-8 py-3 bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            className="w-4 h-4"
          />
        </a>

        {/* Resume Button */}
        <a
          href="/sample-resume.pdf"
          download
          className="px-8 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-colors"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="download icon"
            className="w-4 h-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;