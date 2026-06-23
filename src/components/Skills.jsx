import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const skillsData = {
  Frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Redux Toolkit", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "ShadCN UI", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 90 },
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "Microservices", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "Prisma ORM", level: 75 },
    { name: "Redis", level: 75 },
    { name: "RabbitMQ", level: 70 },
    { name: "GraphQL", level: 70 },
    { name: "REST APIs", level: 90 },
    { name: "WebSockets", level: 70 },
  ],
  "Cloud & DevOps": [
    { name: "AWS (S3, SQS)", level: 75 },
    { name: "Docker", level: 75 },
    { name: "Git/GitHub", level: 90 },
    { name: "Vercel", level: 80 },
    { name: "Render", level: 75 },
    { name: "CI/CD", level: 70 },
    { name: "Postman", level: 85 },
    { name: "Linux", level: 75 },
    { name: "VS Code", level: 95 },
  ],
  "Core CS": [
    { name: "C++", level: 90 },
    { name: "DSA", level: 85 },
    { name: "DBMS", level: 80 },
    { name: "OS", level: 75 },
  ],
};

const SkillBar = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.3, delay: index * 0.04 }}
    className="group"
  >
    <div className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-white/[0.02] transition-colors">
      <span className="text-terminal-cyan text-xs w-4 text-right font-mono">{String(index + 1).padStart(2, "0")}</span>
      <span className="text-terminal-text-primary text-sm font-mono min-w-[130px]">{skill.name}</span>
      <div className="flex-1 max-w-[200px]">
        <div className="terminal-progress">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            className="terminal-progress-bar"
          />
        </div>
      </div>
      <span className="text-terminal-green text-xs font-mono w-10 text-right opacity-0 group-hover:opacity-100 transition-opacity">
        {skill.level}%
      </span>
    </div>
  </motion.div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-comment">Skills</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
            Technical <span className="glow-green">Proficiency</span>
          </h2>
          <p className="text-slate-300 text-sm font-mono">
            <span className="text-slate-400">{">"} </span>
            A toolkit built through academic rigor and real-world application.
          </p>
        </motion.div>

        <TerminalWindow title="skills.json">
          {/* Tabs — styled as terminal tabs */}
          <div className="flex flex-wrap gap-1 mb-6 border-b border-terminal-border pb-3">
            {Object.keys(skillsData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 rounded-md text-xs font-mono transition-all duration-300 ${
                  activeTab === tab
                    ? "text-terminal-green bg-terminal-green/10 border border-terminal-green/20"
                    : "text-slate-300 hover:text-terminal-text-primary hover:bg-white/[0.03]"
                }`}
              >
                {activeTab === tab && <span className="text-terminal-cyan mr-1">❯</span>}
                {tab}
              </button>
            ))}
          </div>

          {/* Skills list */}
          <div className="min-h-[300px]">
            <div className="text-slate-400 text-xs font-mono mb-3 px-3">
              {`// ${activeTab.toLowerCase()} dependencies`}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {skillsData[activeTab].map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default Skills;
