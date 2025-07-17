
import {assets} from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { HiMail, HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const sideMenueRef = React.useRef();

    const openMenu = () => {
        sideMenueRef.current.style.transform = "translateX(-16rem)";
    };

    const closeMenu = () => {
        sideMenueRef.current.style.transform = "translateX(16rem)";
    };

    return (
        <>
            {/* Remove the light background image */}
            <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between bg-[#0F172A]/95 backdrop-blur-md z-50 border-b border-gray-800/50">
                <a href="#top" className="transition-transform duration-300 hover:scale-105">
                    <Image
                        src={assets.logo}
                        alt="Virul logo"
                        className="w-28 cursor-pointer mr-14 filter brightness-0 invert"
                    />
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-[#1E293B]/80 backdrop-blur-md border border-gray-700/50 shadow-lg">
                    <li>
                        <a
                            className="font-Fira_Code text-white hover:text-[#22D3EE] transition-colors duration-300 relative group"
                            href="#top"
                        >
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#22D3EE] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-Fira_Code text-white hover:text-[#22D3EE] transition-colors duration-300 relative group"
                            href="#about"
                        >
                            About me
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#22D3EE] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-Fira_Code text-white hover:text-[#22D3EE] transition-colors duration-300 relative group"
                            href="#services"
                        >
                            Services
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#22D3EE] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-Fira_Code text-white hover:text-[#22D3EE] transition-colors duration-300 relative group"
                            href="#work"
                        >
                            My work
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#22D3EE] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-Fira_Code text-white hover:text-[#22D3EE] transition-colors duration-300 relative group"
                            href="#contact"
                        >
                            Contact me
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#22D3EE] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    {/* Contact button for mobile view */}
                    <a
                        href="#contact"
                        className="flex md:hidden items-center justify-center gap-2 ml-3 px-4 py-2.5 rounded-full bg-[#1E293B]/80 backdrop-blur-md border border-gray-700/50 text-white hover:bg-[#22D3EE] hover:border-[#22D3EE] hover:text-[#0F172A] transition-all duration-300 transform hover:scale-105"
                    >
                        <HiMail className="w-4 h-4" />
                    </a>

                    {/* Desktop contact button */}
                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-8 py-2.5 rounded-full bg-[#FACC15] text-[#0F172A] font-medium hover:bg-[#FACC15]/90 hover:shadow-[0_5px_20px_rgba(250,204,21,0.4)] transition-all duration-300 transform hover:scale-105"
                    >
                        Get in Touch
                        <HiMail className="w-4 h-4" />
                    </a>

                    {/* Mobile menu button */}
                    <button
                        className="block md:hidden ml-3 p-2 rounded-lg bg-[#1E293B]/80 backdrop-blur-md border border-gray-700/50 text-white hover:bg-[#22D3EE] hover:border-[#22D3EE] hover:text-[#0F172A] transition-all duration-300 transform hover:scale-105"
                        onClick={openMenu}
                    >
                        <HiMenu className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile menu */}
                <ul
                    ref={sideMenueRef}
                    className="flex md:hidden flex-col gap-6 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-[#0F172A] border-l border-gray-800/50 backdrop-blur-md transition-transform duration-500 transform translate-x-full"
                >
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <button className="p-2 rounded-lg bg-[#1E293B]/80 border border-gray-700/50 text-white hover:bg-[#22D3EE] hover:border-[#22D3EE] hover:text-[#0F172A] transition-all duration-300 transform hover:scale-105">
                            <HiX className="w-5 h-5" />
                        </button>
                    </div>

                    <li className="mt-8">
                        <a
                            className="font-Fira_Code text-white hover:text-[#22D3EE] transition-colors duration-300 text-lg py-3 block border-b border-gray-800/50 hover:border-[#22D3EE]/50"
                            onClick={closeMenu}
                            href="#top"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-Fira_Code text-white hover:text-[#22D3EE] transition-colors duration-300 text-lg py-3 block border-b border-gray-800/50 hover:border-[#22D3EE]/50"
                            onClick={closeMenu}
                            href="#about"
                        >
                            About me
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-Fira_Code text-white hover:text-[#22D3EE] transition-colors duration-300 text-lg py-3 block border-b border-gray-800/50 hover:border-[#22D3EE]/50"
                            onClick={closeMenu}
                            href="#services"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-Fira_Code text-white hover:text-[#22D3EE] transition-colors duration-300 text-lg py-3 block border-b border-gray-800/50 hover:border-[#22D3EE]/50"
                            onClick={closeMenu}
                            href="#work"
                        >
                            My work
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-Fira_Code text-white hover:text-[#22D3EE] transition-colors duration-300 text-lg py-3 block border-b border-gray-800/50 hover:border-[#22D3EE]/50"
                            onClick={closeMenu}
                            href="#contact"
                        >
                            Contact me
                        </a>
                    </li>

                    {/* Mobile CTA Button */}
                    <li className="mt-8">
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-[#FACC15] text-[#0F172A] font-medium hover:bg-[#FACC15]/90 hover:shadow-[0_5px_20px_rgba(250,204,21,0.4)] transition-all duration-300 transform hover:scale-105"
                        >
                            Get in Touch
                            <HiMail className="w-4 h-4" />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;