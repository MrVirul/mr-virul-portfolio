import React, { useEffect, useState } from "react";
import { HiArrowRight, HiDownload, HiCode, HiLightningBolt, HiSparkles } from "react-icons/hi";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

const Header = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: { delay, duration: 0.6, ease: "easeOut" },
        }),
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

            {/* Mouse Glow */}
            <div
                className="fixed w-72 h-72 rounded-full pointer-events-none blur-3xl opacity-30"
                style={{
                    left: mousePosition.x - 144,
                    top: mousePosition.y - 144,
                    background: "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 max-w-7xl w-full px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Text Section */}
                <div className="text-center lg:text-left max-w-xl">
                    <motion.span
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-sm font-medium"
                    >
                        <HiSparkles className="w-4 h-4" /> Available for Projects
                    </motion.span>

                    <motion.h1
                        variants={fadeInUp}
                        custom={0.2}
                        initial="hidden"
                        animate="visible"
                        className="mt-4 text-5xl md:text-7xl font-bold leading-tight"
                    >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Undergraduate
            </span>{" "}
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Developer
            </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        custom={0.4}
                        initial="hidden"
                        animate="visible"
                        className="mt-6 text-lg text-slate-300 leading-relaxed"
                    >
                        Building sleek, high-performance web experiences with{" "}
                        <span className="text-cyan-300 font-medium">clean code</span>,{" "}
                        <span className="text-purple-300 font-medium">creative design</span>, and{" "}
                        <span className="text-emerald-300 font-medium">modern tech</span>.
                    </motion.p>

                    {/* Skills */}
                    <motion.div
                        variants={fadeInUp}
                        custom={0.6}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap gap-3 mt-6"
                    >
                        {[
                            { icon: HiCode, label: "Clean Code" },
                            { icon: HiLightningBolt, label: "Performance" },
                            { icon: HiSparkles, label: "Innovation" },
                        ].map((skill, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
                            >
                                <skill.icon className="w-4 h-4 text-cyan-300" />
                                <span className="text-sm text-white">{skill.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        custom={0.8}
                        initial="hidden"
                        animate="visible"
                        className="mt-8 flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/30 transition"
                        >
                            Let’s Connect <HiArrowRight className="inline-block ml-2" />
                        </a>
                        <a
                            href="/Virul Meemana.pdf"
                            download
                            className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition"
                        >
                            Download Resume <HiDownload className="inline-block ml-2" />
                        </a>
                    </motion.div>
                </div>

                {/* Right Image Section */}
                <motion.div
                    variants={fadeInUp}
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-lg shadow-cyan-500/10 hover:rotate-3 transition-transform duration-500"
                >
                    <img src={assets.profile_img} alt="Virul Meemana" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 mix-blend-overlay" />
                </motion.div>
            </div>
        </section>
    );
};

export default Header;
