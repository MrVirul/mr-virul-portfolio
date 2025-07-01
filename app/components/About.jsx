import React from 'react'
import Image from "next/image";
import {assets, infoList, toolsData} from "@/assets/assets";

const About = () => {
    return (
        <div id={'about'} className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className='text-center mb-2 text-lg font-Fira_Code'>Introduction</h4>
            <h2 className='text-center mb-2 text-5xl font-Fira_Code'>About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt={"user"} className="w-full rounded-3xl"/>
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        I am a frontend web developer with a passion for creating beautiful and
                        functional websites. I have experience in HTML, CSS, JavaScript, and
                        React, and I am always eager to learn new technologies and improve my
                        skills.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon, iconDark, title, description}, index) => (
                            <li key={index}
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] transition-all'>
                                <Image src={icon} alt={title} className="w-7 mt-3"/>
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className='my-6 text accent-gray-700 font-Fira_Code'>Tools I use</h4>
                    <ul className='flex ietms-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li className='flex items-center justify-center w-12 sm:-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About