import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Globe, Zap, Coffee, Heart, Music, GraduationCap } from "lucide-react";

const BentoCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02, rotate: 1 }}
    className={`glass-card p-6 flex flex-col justify-between group overflow-hidden relative ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    {children}
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl font-bold mb-6"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[180px]">
          
          {/* Main Bio - Large Square (2x2) */}
          <BentoCard className="md:col-span-2 md:row-span-2">
             <div className="h-full flex flex-col justify-center space-y-6 relative z-10">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                   <UserIcon />
                </div>
                <h3 className="text-3xl font-bold text-white">Pixels to Logic</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I'm a Full Stack Developer bridging creativity and engineering. I specialize in building scalable MERN applications and high-performance backend systems using Microservices architecture.
                </p>
                <div className="pt-4 flex flex-wrap gap-2">
                   {["React", "Node.js", "Express", "MongoDB", "Redux", "Docker"].map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-full bg-white/5 text-sm border border-white/10 hover:bg-white/20 transition-colors">{tag}</span>
                   ))}
                </div>
             </div>
          </BentoCard>

          {/* Projects (1x2) */}
          <BentoCard delay={0.1} className="md:row-span-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
             <div className="flex flex-col items-center justify-center text-center h-full gap-4 relative z-10">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center animate-pulse">
                   <Zap className="w-10 h-10 text-yellow-300" />
                </div>
                <div>
                   <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">8+</span>
                   <p className="text-lg font-bold mt-2">Projects</p>
                </div>
                <p className="text-sm font-medium opacity-80 max-w-[150px]">
                   Built diverse web apps ranging from E-commerce to Social Media
                </p>
             </div>
          </BentoCard>

          {/* Tech Stack Focus (1x2) */}
          <BentoCard className="md:row-span-2" delay={0.2}>
              <div className="flex flex-col items-center justify-center h-full text-center gap-6 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                      <Cpu className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="space-y-2">
                      <div className="text-xs uppercase tracking-widest text-cyan-400">Specialization</div>
                      <div className="font-extrabold text-2xl leading-tight">
                        Microservices <br/> & Backend
                      </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                     <span className="text-xs px-2 py-1 bg-cyan-500/10 rounded-md text-cyan-300">RabbitMQ</span>
                     <span className="text-xs px-2 py-1 bg-cyan-500/10 rounded-md text-cyan-300">Redis</span>
                     <span className="text-xs px-2 py-1 bg-cyan-500/10 rounded-md text-cyan-300">Docker</span>
                  </div>
              </div>
          </BentoCard>

          {/* Education - Wide (Bottom Left) */}
          <BentoCard className="md:col-span-2" delay={0.3}>
            <div className="flex flex-col justify-center h-full space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <GraduationCap className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold">Education</h4>
                <p className="text-purple-300 font-semibold mt-1">Indian Institute of Information Technology, Bhopal</p>
              </div>
              <div className="flex justify-between items-end">
                <div>
                   <p className="text-gray-300">B.Tech in Computer Science</p>
                   <p className="text-gray-500 text-sm">2023 - 2027</p>
                </div>
                <div className="bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                   <span className="text-sm font-bold text-gradient">CGPA: 8.49</span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Hobbies - Wide (Bottom Right) */}
          <BentoCard className="md:col-span-2" delay={0.35}>
             <div className="flex flex-col md:flex-row items-center justify-between gap-6 h-full px-8 relative z-10">
                <div className="space-y-2 text-center md:text-left">
                   <h4 className="text-2xl font-bold">Beyond the Code</h4>
                   <p className="text-gray-400">Exploration fuels my creativity.</p>
                </div>
                <div className="flex gap-8">
                   <HobbyIcon icon={Music} label="Music" />
                   <HobbyIcon icon={Coffee} label="Coffee" />
                   <HobbyIcon icon={Heart} label="Design" />
                   <HobbyIcon icon={Globe} label="Travel" />
                </div>
             </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
)

const HobbyIcon = ({ icon: Icon, label }) => (
    <div className="flex flex-col items-center gap-1 group">
        <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
            <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
        </div>
        <span className="text-xs text-gray-500">{label}</span>
    </div>
)

export default About;
