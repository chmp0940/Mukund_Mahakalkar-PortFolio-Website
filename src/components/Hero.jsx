import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="home" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      
      <ParticleBackground />

      {/* Content Layer */}
      <div className="z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           style={{ y: y1 }}
        >
             <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-card border-white/20 text-lg font-medium text-pink-300 tracking-wide uppercase">
                 Full Stack Developer & Competitive Programmer
             </div>
             
             <h1 className="text-6xl md:text-7xl font-semibold tracking-tight mb-8 leading-tight">
               Hi I'm <br />
               <span className="text-gradient drop-shadow-2xl">Mukund Mahakalkar</span>
             </h1>
             
             <p className="text-xl md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
              Pre-final year CSE student at IIIT Bhopal. Worked with the MERN stack and now diving deeper into backend development and system architecture to build scalable, real-world applications.
             </p>

             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <motion.a
                 href="#projects"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all flex items-center gap-2"
               >
                 View Work <ArrowRight className="w-5 h-5" />
               </motion.a>
               <motion.a
                  href="https://github.com/chmp0940"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-card text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
               >
                  <Github className="w-5 h-5" /> GitHub
               </motion.a>
               <motion.a
                  href="https://www.linkedin.com/in/mukund-mahakalkar-789aa6289/"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-card text-blue-400 rounded-full font-bold text-lg hover:bg-blue-500/10 transition-all flex items-center gap-2"
               >
                  <Linkedin className="w-5 h-5" /> LinkedIn
               </motion.a>
               <motion.a
                  href="https://drive.google.com/file/d/1i5hTjMLCIz_VjxA6okhgXdHPMeKroAjA/view?usp=sharing"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-card text-pink-400 rounded-full font-bold text-lg hover:bg-pink-500/10 transition-all flex items-center gap-2"
               >
                  Resume
               </motion.a>
             </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
         className="absolute bottom-10 left-1/2 -translate-x-1/2"
         animate={{ y: [0, 10, 0] }}
         transition={{ repeat: Infinity, duration: 2 }}
      >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
      </motion.div>
    </section>
  );
};

export default Hero;
