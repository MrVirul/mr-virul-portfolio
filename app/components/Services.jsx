import { assets, serviceData } from "@/assets/assets";
import React from "react";
import {
    FaCode,
    FaMobile,
    FaDesktop,
    FaShoppingCart,
    FaSearch,
    FaRocket,
    FaArrowRight,
    FaCog,
    FaPalette,
    FaDatabase
} from "react-icons/fa";

const Services = () => {
    // Icon mapping for different service types
    const getServiceIcon = (title) => {
        const iconMap = {
            "Web Development": <FaCode className="w-10 h-10 text-[#22D3EE]" />,
            "Mobile Development": <FaMobile className="w-10 h-10 text-[#22D3EE]" />,
            "UI/UX Design": <FaPalette className="w-10 h-10 text-[#22D3EE]" />,
            "E-commerce": <FaShoppingCart className="w-10 h-10 text-[#22D3EE]" />,
            "SEO Optimization": <FaSearch className="w-10 h-10 text-[#22D3EE]" />,
            "Performance": <FaRocket className="w-10 h-10 text-[#22D3EE]" />,
            "Backend": <FaDatabase className="w-10 h-10 text-[#22D3EE]" />,
            "Consulting": <FaCog className="w-10 h-10 text-[#22D3EE]" />
        };
        return iconMap[title] || <FaDesktop className="w-10 h-10 text-[#22D3EE]" />;
    };

    return (
        <div id="services" className="w-full px-[12%] py-20 scroll-mt-20 bg-[#0F172A] text-white">
            <div className="animate-fade-in-up">
                <h4 className="text-center mb-2 text-lg font-Fira_Code text-[#22D3EE] tracking-wider">
                    What I Offer
                </h4>
                <h2 className="text-center mb-2 text-5xl font-Fira_Code bg-gradient-to-r from-white to-[#22D3EE] bg-clip-text text-transparent">
                    Professional Services
                </h2>
            </div>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-300 leading-relaxed text-lg">
                Delivering cutting-edge digital solutions with modern technologies and best practices.
                Transform your vision into powerful, scalable applications that drive business success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div
                        key={index}
                        className="border border-gray-600 rounded-xl p-6 cursor-pointer hover:bg-[#1E293B] hover:border-[#22D3EE] hover:-translate-y-2 duration-500 hover:shadow-[0_10px_30px_rgba(34,211,238,0.3)] transition-all group bg-[#0F172A]/50 backdrop-blur-sm"
                    >
                        <div className="group-hover:scale-110 transition-transform duration-300 mb-4">
                            {getServiceIcon(title)}
                        </div>

                        <h3 className="my-4 font-semibold text-white group-hover:text-[#22D3EE] transition-colors duration-300 text-lg">
                            {title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {description}
                        </p>

                        <a
                            href={link}
                            className="inline-flex items-center gap-2 text-sm text-[#22D3EE] hover:text-[#FACC15] font-medium transition-all duration-300 group-hover:gap-3"
                        >
                            Learn More
                            <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;