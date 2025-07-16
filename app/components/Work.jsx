import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Fira_Code">My Portfolio</h4>
      <h2 className="text-center mb-2 text-5xl font-Fira_Code">
        My latest Works
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Fira_Code">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {workData.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* This div uses the background image */}
            <div
              className="h-56 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            ></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:underline">
                View Project
                <Image src={assets.send_icon} alt='View project' className='w-6 h-6' />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
