import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillsData = {
  Frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Redux Toolkit", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "TypeScript", level: 80 },
    { name: "JavaScript", level: 90 },
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "Microservices", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "Redis", level: 75 },
    { name: "RabbitMQ", level: 70 },
    { name: "GraphQL", level: 70 },
  ],
  "Tools & Cloud": [
    { name: "Docker", level: 75 },
    { name: "Git/GitHub", level: 90 },
    { name: "Postman", level: 85 },
    { name: "Vercel", level: 80 },
    { name: "VS Code", level: 95 },
  ],
  "Core & Languages": [
    { name: "C++", level: 90 },
    { name: "DSA", level: 85 },
    { name: "DBMS", level: 80 },
    { name: "OS", level: 75 },
  ]
};

const SkillOrb = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    className="glass-card px-6 py-4 rounded-full flex items-center gap-3 cursor-default hover:bg-white/10 transition-colors group relative overflow-hidden"
  >
    {/* Inner Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" />
    <span className="font-medium text-lg relative z-10">{skill.name}</span>
    <span className="text-xs text-gray-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
        {skill.level}%
    </span>
  </motion.div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-16"
        >
             <h2 className="text-5xl font-bold mb-4">
               Technical <span className="text-gradient">Proficiency</span>
             </h2>
             <p className="text-gray-400 max-w-xl mx-auto">
               A comprehensive toolkit developed through academic rigor and practical application.
             </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-white/10 border border-white/20 rounded-full shadow-lg backdrop-blur-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="min-h-[400px]">
           <motion.div 
             layout
             className="flex flex-wrap justify-center gap-6"
           >
             <AnimatePresence mode="wait">
               {skillsData[activeTab].map((skill, index) => (
                 <SkillOrb key={skill.name} skill={skill} index={index} />
               ))}
             </AnimatePresence>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
