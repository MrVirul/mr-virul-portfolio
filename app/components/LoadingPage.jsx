// app/components/LoadingPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaPalette, FaMobile } from "react-icons/fa";

const LoadingPage = () => {
  const floatingIcons = [
    { icon: <FaCode />, delay: 0 },
    { icon: <FaRocket />, delay: 0.5 },
    { icon: <FaPalette />, delay: 1 },
    { icon: <FaMobile />, delay: 1.5 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center w-full max-w-2xl mx-auto px-4">
        {/* Main Loading Animation */}
        <motion.div
          className="relative mb-8" // Reduced margin-bottom
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Central Loading Spinner */}
          <div className="relative w-32 h-32 mx-auto mb-6"> {/* Reduced margin-bottom */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent"
              style={{
                background: "conic-gradient(from 0deg, transparent, #06b6d4, #8b5cf6, transparent)",
                borderRadius: "50%",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="absolute inset-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="text-cyan-400"
                >
                  <FaCode className="w-8 h-8" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating Icons */}
          {floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              className="absolute w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-cyan-400"
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: "0 0",
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                rotate: [0, 360],
                x: [0, Math.cos((index * 90 * Math.PI) / 180) * 80],
                y: [0, Math.sin((index * 90 * Math.PI) / 180) * 80],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut",
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-4 mb-12" // Adjusted margin-bottom
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent font-inter">
            Loading Portfolio
          </h2>
          
          <div className="flex justify-center space-x-2 mt-6">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>

          <motion.p
            className="text-slate-300 font-sora max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Preparing your digital experience...
          </motion.p>
        </motion.div>

        {/* Progress Bar - Now positioned relative to the container */}
        <div className="relative w-full mt-12"> {/* Added margin-top */}
          <motion.div
            className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;