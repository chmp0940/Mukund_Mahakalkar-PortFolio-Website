import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, User, Briefcase, Code, Mail, Home, Trophy, Award } from "lucide-react";

const Navbar = ({ onSwitchToTerminal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Achievements", href: "#achievements", icon: Trophy },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const sections = navLinks.map((link) => document.querySelector(link.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => s && observer.observe(s));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((s) => s && observer.unobserve(s));
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center py-4 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-terminal-bg/80" : ""
        }`}
      >
        <div className="flex items-center gap-1 px-2 py-2 rounded-lg border border-terminal-border bg-terminal-surface/80 backdrop-blur-md">
          {/* Terminal toggle */}
          <button
            onClick={onSwitchToTerminal}
            className="px-3 py-2 rounded-md text-terminal-green hover:bg-terminal-green/10 transition-all mr-2 group"
            title="Switch to Terminal"
          >
            <Terminal className="w-4 h-4 group-hover:animate-pulse" />
          </button>

          <div className="w-px h-6 bg-terminal-border mr-1" />

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveHash(link.href)}
              className="relative px-4 py-2 rounded-md text-sm font-mono transition-all duration-300"
            >
              {activeHash === link.href && (
                <motion.div
                  layoutId="activeNavPill"
                  className="absolute inset-0 bg-terminal-green/10 border border-terminal-green/20 rounded-md"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeHash === link.href
                    ? "text-terminal-green"
                    : "text-slate-300 hover:text-terminal-text-primary"
                }`}
              >
                {activeHash === link.href && <span className="text-terminal-cyan mr-1">❯</span>}
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 w-full z-50 p-3">
        <div className="flex justify-between items-center bg-terminal-surface/90 backdrop-blur-md border border-terminal-border p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <button
              onClick={onSwitchToTerminal}
              className="text-terminal-green hover:bg-terminal-green/10 p-1.5 rounded transition-colors"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <span className="font-mono text-terminal-green text-sm">mukund@portfolio</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-terminal-text-primary p-2 rounded-md hover:bg-white/5 font-mono text-sm"
          >
            {isOpen ? "[✕]" : "[≡]"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-terminal-bg/98 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-terminal-green font-mono text-lg transition-colors"
            >
              [✕ close]
            </button>

            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.08 }}
                  className="flex items-center gap-3 text-2xl font-mono text-slate-300 hover:text-terminal-green transition-colors"
                >
                  <span className="text-terminal-cyan text-sm">❯</span>
                  {link.name.toLowerCase()}
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
