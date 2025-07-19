import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { HiMail, HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "My work" },
  { href: "#contact", label: "Contact me" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const sideMenuRef = React.useRef(null);

  // Handle scroll effect for dynamic navbar
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  // Handle smooth scrolling and close menu
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 px-4 md:px-8 xl:px-[8%] py-4 flex items-center justify-between z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20' 
          : 'bg-transparent backdrop-blur-sm border-b border-transparent'
      }`}
    >
      {/* Logo with glow effect */}
      <motion.a 
        href="#top" 
        className="relative group"
        onClick={(e) => handleNavClick(e, '#top')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <Image
          src={assets.logo}
          alt="Virul logo"
          className="w-28 cursor-pointer relative z-10 filter brightness-0 invert group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300"
        />
      </motion.a>

      {/* Desktop Navigation with floating effect */}
      <motion.ul 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="hidden md:flex items-center gap-1 lg:gap-2 rounded-2xl px-8 py-3 bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl shadow-black/10 hover:shadow-primary/10 transition-all duration-500"
      >
        {navLinks.map((link, index) => (
          <motion.li 
            key={link.href}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
          >
            <motion.a
              className="relative font-inter text-text/80 hover:text-white px-4 py-2 rounded-xl transition-all duration-300 group focus:outline-none overflow-hidden"
              href={link.href}
              tabIndex={0}
              aria-label={link.label}
              onClick={(e) => handleNavClick(e, link.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 rounded-xl"
                layoutId="navHover"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              
              {/* Text with glow effect */}
              <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                {link.label}
              </span>
              
              {/* Animated underline */}
              <motion.div
                className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Enhanced CTA button */}
      <motion.a
        href="#contact"
        className="hidden lg:flex items-center gap-3 px-8 py-3 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 transform hover:scale-105 ml-6 font-inter relative overflow-hidden group"
        aria-label="Get in Touch"
        onClick={(e) => handleNavClick(e, '#contact')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {/* Animated shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        
        <span className="relative z-10">Get in Touch</span>
        <motion.div
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiMail className="w-4 h-4 relative z-10" />
        </motion.div>
      </motion.a>

      {/* Modern mobile menu button */}
      <motion.button
        className="block md:hidden ml-3 p-3 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        aria-expanded={menuOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={menuOpen ? { rotate: 90 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <HiMenu className="w-6 h-6" />
        </motion.div>
      </motion.button>

      {/* Ultra-modern mobile menu */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <>
            {/* Enhanced backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-xl"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Futuristic side menu */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.4 
              }}
              className="fixed right-0 top-0 z-[70] w-80 max-w-[85vw] h-full bg-gradient-to-b from-surface/90 to-background/90 backdrop-blur-2xl border-l border-white/10 shadow-2xl overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex flex-col h-full relative">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>

                {/* Header with modern close button */}
                <div className="flex justify-between items-center p-6 border-b border-white/10 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/60 font-inter text-sm uppercase tracking-widest"
                  >
                    Navigation
                  </motion.div>
                  <motion.button
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 group"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <HiX className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300" />
                  </motion.button>
                </div>

                {/* Navigation Links with stagger animation */}
                <nav className="flex-1 px-6 py-8 relative z-10">
                  <ul className="space-y-2">
                    {navLinks.map((link, idx) => (
                      <motion.li 
                        key={link.href}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                      >
                        <motion.a
                          className="group relative font-inter text-white/80 hover:text-white text-lg py-4 block rounded-xl px-4 transition-all duration-300 overflow-hidden"
                          href={link.href}
                          tabIndex={0}
                          aria-label={link.label}
                          onClick={(e) => handleNavClick(e, link.href)}
                          whileHover={{ x: 10 }}
                        >
                          {/* Hover background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
                          
                          {/* Animated border */}
                          <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                          
                          <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                            {link.label}
                          </span>
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Enhanced mobile CTA */}
                  <motion.div 
                    className="mt-12 pt-8 border-t border-white/10"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <motion.a
                      href="#contact"
                      onClick={(e) => handleNavClick(e, '#contact')}
                      className="group relative flex items-center justify-center gap-3 px-8 py-4 w-full rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 transform hover:scale-105 font-inter overflow-hidden"
                      aria-label="Get in Touch"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                      
                      <span className="relative z-10">Get in Touch</span>
                      <motion.div
                        animate={{ rotate: [0, 15, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <HiMail className="w-5 h-5 relative z-10" />
                      </motion.div>
                    </motion.a>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;