import React, { useEffect, useState } from "react";
import {
  HiArrowRight,
  HiCode,
  HiDownload,
  HiLightningBolt,
  HiSparkles,
} from "react-icons/hi";
import { motion } from "framer-motion";

import { assets } from "@/assets/assets";

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      {/* Interactive Cursor Light */}
      <div
        className="fixed w-96 h-96 pointer-events-none z-10 transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: `radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(6,182,212,0.05) 30%, transparent 70%)`,
          filter: "blur(1px)",
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
        />
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full opacity-40"
        />
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-50"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Profile Section */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-xl">
                <img
                  src={assets.profile_img}
                  alt="Virul Meemana"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-cyan-300 text-sm font-medium">
              <HiSparkles className="w-4 h-4" />
              Available for projects
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 variants={itemVariants} className="mb-6">
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Vibe Coder{" "}
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Mode On
              </span>
            </div>
            <div className="text-xl md:text-2xl text-slate-300 font-light">
             Learning. Building. Growing @ SLIIT
            </div>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg text-slate-300 mb-8 leading-relaxed"
          >
            Engineering intelligent digital experiences through{" "}
            <span className="text-cyan-300 font-medium">clean code</span>,{" "}
            <span className="text-purple-300 font-medium">
              innovative design
            </span>
            , and{" "}
            <span className="text-emerald-300 font-medium">
              cutting-edge technology
            </span>
            .
          </motion.p>

          {/* Skills Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            {[
              {
                icon: HiCode,
                label: "Clean Code",
                color: "from-cyan-400 to-cyan-600",
              },
              {
                icon: HiLightningBolt,
                label: "Performance",
                color: "from-purple-400 to-purple-600",
              },
              {
                icon: HiSparkles,
                label: "Innovation",
                color: "from-emerald-400 to-emerald-600",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <skill.icon
                  className={`w-4 h-4 bg-gradient-to-r ${skill.color} text-transparent`}
                />
                <span className="text-sm font-medium text-white">
                  {skill.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(6,182,212,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                Let's Connect
                <HiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.a>

            <motion.a
              href="/Virul Meemana.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
            >
              <div className="flex items-center gap-2">
                Download Resume
                <HiDownload className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </motion.div>
      </div> */}
    </div>
  );
};

export default Header;
