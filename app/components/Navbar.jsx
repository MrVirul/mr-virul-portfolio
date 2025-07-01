import {assets} from "@/assets/assets";
import React from "react";
import Image from "next/image";

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
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
                <Image
                    src={assets.header_bg_color}
                    alt="Header Background"
                    className="w-full"
                />
            </div>
            <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between bg- z-50">
                <a href="#top">
                    <Image
                        src={assets.logo}
                        alt="Virul logo"
                        className="w-28 cursor-pointer mr-14"
                    />
                </a>
                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 backdrop-blur-md text-gray-800">
                    <li>
                        <a className="font-Fira_Code" href="#top">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="font-Fira_Code" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <a className="font-Fira_Code" href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a className="font-Fira_Code" href="#work">
                            My work
                        </a>
                    </li>
                    <li>
                        <a className="font-Fira_Code" href="#contact">
                            Contact me
                        </a>
                    </li>
                </ul>
                <div className="flex items-center gap-4">


                    {/* Contact button for mobile view */}
                    <a
                        href="#contact"
                        className="flex md:hidden items-center justify-center gap-2 ml-3 px-4 py-2.5 rounded-full bg-white shadow-sm bg-opacity-50 backdrop-blur-md text-gray-800 hover:bg-gray-100 transition-colors duration-300"
                    >
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

                    {/*Web view contact button*/}
                    {/* <button>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </button> */}
                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-8 py-2.5 rounded-full bg-white shadow-sm bg-opacity-50 backdrop-blur-md text-gray-800 hover:bg-gray-100 transition-colors duration-300"
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

                    {/* open menu button for mobile view */}
                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image src={assets.menu_black} alt="" className="w-6"/>
                    </button>
                </div>

                {/* Mobile menu */}
                <ul
                    ref={sideMenueRef}
                    className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 transform translate-x-full"
                >
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <Image
                            src={assets.close_black}
                            alt=""
                            className="w-5 cursor-pointer"
                        />
                    </div>
                    <li>
                        <a className="font-Fira_Code" onClick={closeMenu} href="#top">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="font-Fira_Code" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <a className="font-Fira_Code" href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a className="font-Fira_Code" href="#work">
                            My work
                        </a>
                    </li>
                    <li>
                        <a className="font-Fira_Code" href="#contact">
                            Contact me
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
