'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingPage from "./components/LoadingPage";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500); // 2.5 seconds loading

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <LoadingPage key="loading" />
            ) : (
                <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Navbar/>
                    <Header/>
                    <About/>
                    <Services/>
                    <Work/>
                    <Contact/>
                    <Footer/>
                </motion.div>
            )}
        </AnimatePresence>
    );
}