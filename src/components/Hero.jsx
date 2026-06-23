import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";

const RESUME_LINK = "https://drive.google.com/file/d/1v53wcrosbDih7Bmq_6Kx7pNnhQsmzD3I/view?usp=sharing";

const TypeWriter = ({ text, delay = 0 }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="animate-blink text-terminal-green">█</span>
      )}
    </span>
  );
};

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 200);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-terminal-green/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-terminal-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="z-10 text-center px-4 max-w-5xl mx-auto">
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-md border border-terminal-green/20 bg-terminal-green/5 text-terminal-green text-sm font-mono">
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
              Full Stack Developer & Competitive Programmer
            </div>

            {/* Comment line */}
            <div className="text-slate-400 text-sm font-mono mb-4">
              {"// Welcome to my portfolio"}
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 font-sans">
              <span className="text-slate-400 font-mono text-lg md:text-xl block mb-2">
                {"const developer = {"}
              </span>
              <span className="text-terminal-text-primary">Hi, I'm </span>
              <span className="glow-green">
                <TypeWriter text="Mukund Mahakalkar" delay={400} />
              </span>
              <span className="text-slate-400 font-mono text-lg md:text-xl block mt-2">
                {"};"}
              </span>
            </h1>

            {/* Bio */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-mono leading-relaxed">
              <span className="text-slate-400">{">"} </span>
              Final year CSE student at IIIT Bhopal (GPA: 8.62). Building 
              full-stack apps with React, Next.js, TypeScript & Node.js. 
              Experienced with AWS, Docker & microservices in production.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="terminal-btn-primary flex items-center gap-2 text-base"
              >
                <span className="text-terminal-cyan">❯</span> View Work{" "}
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="https://github.com/chmp0940"
                target="_blank"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="terminal-btn flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> GitHub
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/mukund-mahakalkar-789aa6289/"
                target="_blank"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="terminal-btn flex items-center gap-2 border-terminal-cyan/30 text-terminal-cyan hover:bg-terminal-cyan/10 hover:border-terminal-cyan/60 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </motion.a>

              <motion.a
                href={RESUME_LINK}
                target="_blank"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="terminal-btn flex items-center gap-2 border-terminal-amber/30 text-terminal-amber hover:bg-terminal-amber/10 hover:border-terminal-amber/60 hover:shadow-[0_0_15px_rgba(255,176,0,0.15)]"
              >
                <FileText className="w-4 h-4" /> Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="font-mono text-xs text-slate-400 flex flex-col items-center gap-2">
          <span>scroll</span>
          <span className="text-terminal-green">▼</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
