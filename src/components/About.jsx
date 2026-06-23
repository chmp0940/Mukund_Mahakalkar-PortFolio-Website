import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Globe, Zap, Coffee, Heart, Music, GraduationCap } from "lucide-react";
import TerminalWindow from "./TerminalWindow";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-comment">About Me</div>
          <h2 className="text-4xl md:text-5xl font-bold font-sans">
            About <span className="glow-green">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[180px]">
          {/* Main Bio — 2x2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2"
          >
            <TerminalWindow title="about.md" className="h-full">
              <div className="h-full flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-md bg-terminal-green/10 border border-terminal-green/20 flex items-center justify-center">
                    <Code className="w-5 h-5 text-terminal-green" />
                  </div>
                  <h3 className="text-2xl font-bold font-sans text-terminal-text-primary">
                    Pixels to Logic
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  <span className="text-slate-400">{">"} </span>
                  I'm a Full Stack Developer with internship experience at QuickIntell. 
                  I specialize in building scalable applications with React, Next.js, 
                  TypeScript, and deploying backend systems with AWS, Docker & PostgreSQL.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["React", "TypeScript", "Next.js", "Node.js", "AWS", "Docker", "PostgreSQL"].map((tag) => (
                    <span
                      key={tag}
                      className="terminal-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Projects Count — 1x2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:row-span-2"
          >
            <TerminalWindow title="stats.sh" className="h-full">
              <div className="flex flex-col items-center justify-center text-center h-full gap-3">
                <div className="w-14 h-14 rounded-md bg-terminal-amber/10 border border-terminal-amber/20 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-terminal-amber" />
                </div>
                <div>
                  <span className="text-5xl font-black glow-amber font-sans">8+</span>
                  <p className="text-sm font-bold mt-2 text-terminal-text-primary">Projects</p>
                </div>
                <p className="text-xs text-slate-300 max-w-[150px]">
                  From E-commerce to Microservices to Auth Systems
                </p>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Specialization — 1x2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:row-span-2"
          >
            <TerminalWindow title="stack.config" className="h-full">
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <div className="w-14 h-14 rounded-md bg-terminal-cyan/10 border border-terminal-cyan/20 flex items-center justify-center">
                  <Cpu className="w-7 h-7 text-terminal-cyan" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-widest text-terminal-cyan font-mono">
                    Specialization
                  </div>
                  <div className="font-bold text-xl text-terminal-text-primary font-sans leading-tight">
                    Microservices<br />& Backend
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {["RabbitMQ", "Redis", "Docker"].map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 bg-terminal-cyan/10 rounded border border-terminal-cyan/20 text-terminal-cyan">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Education — Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2"
          >
            <TerminalWindow title="education.txt" className="h-full">
              <div className="flex flex-col justify-center h-full space-y-3">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-terminal-pink" />
                  <h4 className="text-lg font-bold font-sans text-terminal-text-primary">Education</h4>
                </div>
                <div>
                  <p className="text-terminal-green text-sm font-semibold">
                    Indian Institute of Information Technology, Bhopal
                  </p>
                  <div className="flex justify-between items-end mt-2">
                    <div>
                      <p className="text-slate-300 text-sm">B.Tech in Computer Science (Final Year)</p>
                      <p className="text-slate-400 text-xs">2023 – 2027</p>
                    </div>
                    <div className="terminal-tag">
                      CGPA: 8.62
                    </div>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Hobbies — Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="md:col-span-2"
          >
            <TerminalWindow title="hobbies.json" className="h-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 h-full px-2">
                <div className="space-y-1 text-center md:text-left">
                  <h4 className="text-lg font-bold font-sans text-terminal-text-primary">
                    Beyond the Code
                  </h4>
                  <p className="text-slate-300 text-xs">
                    Exploration fuels my creativity.
                  </p>
                </div>
                <div className="flex gap-6">
                  {[
                    { icon: Music, label: "Music" },
                    { icon: Coffee, label: "Coffee" },
                    { icon: Heart, label: "Design" },
                    { icon: Globe, label: "Travel" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1 group">
                      <div className="p-2.5 bg-terminal-card border border-terminal-border rounded-md group-hover:border-terminal-green/30 group-hover:bg-terminal-green/5 transition-all">
                        <Icon className="w-4 h-4 text-slate-300 group-hover:text-terminal-green transition-colors" />
                      </div>
                      <span className="text-[10px] text-slate-300">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
