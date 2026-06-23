import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import TerminalWindow from "./TerminalWindow";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-comment">Work Experience</div>
          <h2 className="text-4xl md:text-5xl font-bold font-sans">
            Professional <span className="glow-green">Experience</span>
          </h2>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TerminalWindow title="experience.log">
            <div className="space-y-6">
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-terminal-cyan/10 border border-terminal-cyan/20 flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-terminal-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-terminal-text-primary font-sans">
                      QuickIntell
                    </h3>
                    <p className="text-terminal-cyan text-sm font-mono font-semibold">
                      Full Stack Web Development Intern
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-terminal-amber" />
                    Dec 2025 – Mar 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-terminal-pink" />
                    Remote
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-terminal-border" />

              {/* Achievements */}
              <div className="space-y-4">
                <div className="text-slate-400 text-xs font-mono">
                  {"// key contributions"}
                </div>

                {[
                  {
                    highlight: "Medical Coding Platform",
                    desc: "Built a medical coding platform using React, TypeScript, Node.js, and Prisma ORM; integrated OpenAI APIs to automate ICD/CPT code suggestions, cutting manual coding time by 35%.",
                    metric: "35% faster",
                    metricColor: "text-terminal-green",
                  },
                  {
                    highlight: "AWS Cloud Infrastructure",
                    desc: "Designed and deployed asynchronous background processing pipelines using AWS SQS and secure document storage via AWS S3, reducing processing failures by 30%.",
                    metric: "30% fewer failures",
                    metricColor: "text-terminal-cyan",
                  },
                  {
                    highlight: "Reusable Component Library",
                    desc: "Built a reusable component library with Tailwind CSS and ShadCN UI, reducing frontend development time by 40%; maintained code quality through unit testing with Jest.",
                    metric: "40% faster dev",
                    metricColor: "text-terminal-amber",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-3 group"
                  >
                    <span className="text-terminal-green mt-1 flex-shrink-0">▸</span>
                    <div className="flex-1">
                      <p className="text-terminal-text-primary text-sm leading-relaxed">
                        <span className="text-terminal-green font-semibold">{item.highlight}: </span>
                        {item.desc}
                      </p>
                      <span className={`inline-block mt-1.5 text-xs font-mono font-bold ${item.metricColor} bg-current/10 px-2 py-0.5 rounded`}
                        style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                        ↑ {item.metric}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="pt-2">
                <div className="text-slate-400 text-xs font-mono mb-3">
                  {"// tech_stack"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "Prisma ORM", "AWS S3", "AWS SQS", "OpenAI API", "Tailwind CSS", "ShadCN UI", "Jest"].map((tech) => (
                    <span key={tech} className="terminal-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
