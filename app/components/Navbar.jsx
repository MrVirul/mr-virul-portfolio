import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
    <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
      <Image src={assets.header_bg_color} alt="Header Background" className="w-full" />
    </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px:[8%] py-4 flex items-center justify-between bg- z-50">
        <a href="#top">
          <Image
            src={assets.logo}
            al="Virul logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacityy-50 backdrop-blur-md text-black font-semibold">
          <li>
            <a className="font-Fira_Code" href="#top">
              Home
            </a>
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
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border-gray-400 border rounded-full ml-4 hover:bg-black hover:text-white transition-colors duration-300"
          >
            Contact
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
