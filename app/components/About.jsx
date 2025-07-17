import React from 'react';
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
import { FaCode, FaGraduationCap, FaTasks, FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb } from 'react-icons/si';

const About = () => {
    const techIcons = {
        'HTML': <FaHtml5 className="w-5 sm:w-7 text-[#22D3EE]" />,
        'CSS': <FaCss3Alt className="w-5 sm:w-7 text-[#22D3EE]" />,
        'JavaScript': <FaJs className="w-5 sm:w-7 text-[#22D3EE]" />,
        'React': <FaReact className="w-5 sm:w-7 text-[#22D3EE]" />,
        'Node.js': <FaNodeJs className="w-5 sm:w-7 text-[#22D3EE]" />,
        'Next.js': <SiNextdotjs className="w-5 sm:w-7 text-[#22D3EE]" />,
        'TypeScript': <SiTypescript className="w-5 sm:w-7 text-[#22D3EE]" />,
        'Tailwind': <SiTailwindcss className="w-5 sm:w-7 text-[#22D3EE]" />,
        'MongoDB': <SiMongodb className="w-5 sm:w-7 text-[#22D3EE]" />,
        'Database': <FaDatabase className="w-5 sm:w-7 text-[#22D3EE]" />
    };

    return (
        <div id={'about'} className="w-full px-[12%] py-20 scroll-mt-20 bg-[#0F172A] text-white">
            <div className="animate-fade-in-up">
                <h4 className='text-center mb-2 text-lg font-Fira_Code text-[#22D3EE] tracking-wider'>Introduction</h4>
                <h2 className='text-center mb-2 text-5xl font-Fira_Code bg-gradient-to-r from-white to-[#22D3EE] bg-clip-text text-transparent'>About Me</h2>
            </div>
            
            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none group animate-fade-in-left'>
                    <div className="relative overflow-hidden rounded-3xl">
                        <Image 
                            src={assets.user_image} 
                            alt={"user"} 
                            className="w-full rounded-3xl transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#22D3EE]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
                
                <div className='flex-1 animate-fade-in-right'>
                    <p className='mb-10 max-w-2xl font-Ovo text-gray-300 leading-relaxed text-lg'>
                        I'm a passionate frontend developer specializing in creating exceptional digital experiences. 
                        With expertise in modern web technologies and a keen eye for design, I transform ideas into 
                        scalable, user-centric applications that drive business growth.
                    </p>
                    
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ title, description }, index) => {
                            let iconComponent;
                            if (title === "Languages") {
                                iconComponent = <FaCode className="w-7 mt-3 text-[#22D3EE]" />;
                            } else if (title === "Education") {
                                iconComponent = <FaGraduationCap className="w-7 mt-3 text-[#22D3EE]" />;
                            } else if (title === "Projects") {
                                iconComponent = <FaTasks className="w-7 mt-3 text-[#22D3EE]" />;
                            }
                            return (
                                <li key={index}
                                    className='border border-gray-600 rounded-xl p-6 cursor-pointer hover:bg-[#1E293B] hover:border-[#22D3EE] hover:-translate-y-2 duration-500 hover:shadow-[0_10px_30px_rgba(34,211,238,0.3)] transition-all group'>
                                    <div className="group-hover:scale-110 transition-transform duration-300">
                                        {iconComponent}
                                    </div>
                                    <h3 className='my-4 font-semibold text-white group-hover:text-[#22D3EE] transition-colors duration-300'>{title}</h3>
                                    <p className='text-gray-400 text-sm leading-relaxed'>{description}</p>
                                </li>
                            );
                        })}
                    </ul>
                    
                    <h4 className='my-8 text-xl text-white font-Fira_Code'>Technology Stack</h4>
                    <ul className='flex items-center flex-wrap gap-4 sm:gap-6'>
                        {Object.entries(techIcons).map(([name, icon], index) => (
                            <li
                                className='flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 border border-gray-600 rounded-xl cursor-pointer hover:border-[#22D3EE] hover:-translate-y-2 duration-500 hover:shadow-[0_5px_20px_rgba(34,211,238,0.4)] transition-all group bg-[#1E293B]/50'
                                key={index}
                                title={name}>
                                <div className="group-hover:scale-125 transition-transform duration-300">
                                    {icon}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;