import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Code, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => sections.forEach((section) => {
      if (section) observer.unobserve(section);
    });
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      {/* Desktop Floating Pill Navbar */}
      {/* Desktop Floating Pill Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-5 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none"
      >
        <div className="glass-card px-4 py-3 rounded-full flex items-center gap-2 pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveHash(link.href)}
              className="relative px-6 py-3 rounded-full text-base font-medium text-gray-300 transition-colors duration-300 hover:text-white"
            >
              {activeHash === link.href && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/5 shadow-inner"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                 {/* Show icon only for active or hover? Maybe just text for clean look */}
                 {link.name}
              </span>
            </a>
          ))}
        </div>
      </motion.nav>


      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 w-full z-50 p-4">
        <div className="flex justify-between items-center glass-card p-4 rounded-2xl">
           <span className="font-bold text-white tracking-widest text-lg">PORTFOLIO</span>
           <button 
             onClick={() => setIsOpen(!isOpen)}
             className="text-white p-2 rounded-lg hover:bg-white/10"
           >
             {isOpen ? <X /> : <Menu />}
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 bg-aurora-bg/98 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center"
          >
             <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
             >
                <X className="w-8 h-8" />
             </button>

             <nav className="flex flex-col items-center space-y-8">
               {navLinks.map((link, i) => (
                 <motion.a
                   key={link.name}
                   href={link.href}
                   onClick={() => setIsOpen(false)}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 + i * 0.1 }}
                   className="group flex items-center gap-4 text-3xl font-bold text-gray-400 hover:text-white transition-colors"
                 >
                   <span className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors text-purple-400 group-hover:text-purple-300">
                      <link.icon className="w-8 h-8" />
                   </span>
                   {link.name}
                 </motion.a>
               ))}
             </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
