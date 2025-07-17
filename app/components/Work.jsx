import { assets, workData } from "@/assets/assets";
import React from "react";
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaEye, FaCode } from "react-icons/fa";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-20 scroll-mt-20 bg-[#0F172A] text-white">
      <div className="animate-fade-in-up">
        <h4 className="text-center mb-2 text-lg font-Fira_Code text-[#22D3EE] tracking-wider">
          My Portfolio
        </h4>
        <h2 className="text-center mb-2 text-5xl font-Fira_Code bg-gradient-to-r from-white to-[#22D3EE] bg-clip-text text-transparent">
          Featured Projects
        </h2>
      </div>
      
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-300 leading-relaxed text-lg">
        Explore my latest work showcasing innovative solutions and cutting-edge technologies. 
        Each project represents a unique challenge solved with creativity and technical excellence.
      </p>
      
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 my-10 md:grid-cols-2">
        {workData.map((project, index) => (
          <div
            key={index}
            className="group relative bg-[#1E293B]/50 backdrop-blur-sm border border-gray-600 rounded-2xl overflow-hidden hover:shadow-[0_20px_50px_rgba(34,211,238,0.3)] transition-all duration-500 transform hover:-translate-y-2 hover:border-[#22D3EE]"
          >
            {/* Image Container with Overlay */}
            <div className="relative h-64 w-full overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Quick Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.link || "https://github.com/mrbhanukab/CarCare"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#22D3EE]/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-[#22D3EE] hover:scale-110 transition-all duration-200"
                  title="View Live Demo"
                >
                  <FaEye className="w-4 h-4 text-[#0F172A]" />
                </a>
                <a
                  href="https://github.com/mrbhanukab/CarCare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#1E293B]/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-[#1E293B] hover:scale-110 transition-all duration-200 border border-gray-600"
                  title="View Source Code"
                >
                  <FaGithub className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#22D3EE] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>
              
              {/* Tech Stack Tags */}
              {project.techStack && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] text-xs rounded-full font-medium hover:bg-[#22D3EE]/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              {/* CTA Button */}
              <div className="flex items-center justify-between mt-6">
                <a
                  href={project.link || "https://github.com/mrbhanukab/CarCare"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FACC15] text-[#0F172A] rounded-lg font-medium hover:bg-[#FACC15]/90 hover:shadow-[0_5px_20px_rgba(250,204,21,0.4)] transition-all duration-300 transform hover:scale-105"
                >
                  <FaCode className="w-4 h-4" />
                  View Project
                  <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                
                {/* Status Badge */}
                <span className="px-3 py-1 bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] text-xs font-medium rounded-full">
                  Production Ready
                </span>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#22D3EE] to-[#FACC15] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;