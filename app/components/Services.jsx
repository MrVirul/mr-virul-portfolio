import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Fira_Code">What I offers</h4>
      <h2 className="text-center mb-2 text-5xl font-Fira_Code">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Fira_Code">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div key={index}
          className="border border-gray-400 rounded-lg p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] transition-all">
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              {" "}
              Read more <Image alt='arrow' src={assets.right_arrow} className='w-6' />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
