import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px:[8%] py-4 flex items-center justify-between bg- z-50">
        <a href="#top">
          <Image
            src={assets.logo}
            al="Virul logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#work">My work</a>
          </li>

          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div>
          <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border-gray-500 rounded-full ml-4 hover:bg-black hover:text-white transition-colors duration-300">
            Contact <Image src={assets.arrow_icon} className="w-3" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
