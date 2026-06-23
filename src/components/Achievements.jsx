import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Target, Flame, GraduationCap } from "lucide-react";
import TerminalWindow from "./TerminalWindow";

const achievements = [
  {
    icon: Award,
    title: "Knight at LeetCode",
    detail: "Rating 1862 • 700+ Problems Solved",
    description: "Ranked in the top ~5% of global users with demonstrated strength in Graphs and Dynamic Programming.",
    color: "text-yellow-400",
    borderColor: "border-yellow-500/20 hover:border-yellow-500/40",
    bgColor: "bg-yellow-500/5",
    glowColor: "hover:shadow-[0_0_20px_rgba(234,179,8,0.15)]",
  },
  {
    icon: Trophy,
    title: "CodeChef 3-Star",
    detail: "Rating 1633 • Global Rank 406",
    description: "Secured Global Rank 406 in Starters 204 contest among 20,000+ participants.",
    color: "text-amber-500",
    borderColor: "border-amber-500/20 hover:border-amber-500/40",
    bgColor: "bg-amber-500/5",
    glowColor: "hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
  },
  {
    icon: Target,
    title: "Adobe Hackathon Qualifier",
    detail: "Top 10% Nationally",
    description: "Ranked in the top 10% nationally, advancing to Round 2 from a pool of 250,000+ participants.",
    color: "text-red-400",
    borderColor: "border-red-500/20 hover:border-red-500/40",
    bgColor: "bg-red-500/5",
    glowColor: "hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]",
  },
  {
    icon: Flame,
    title: "Codeforces Pupil",
    detail: "Max Rating 1201",
    description: "Active competitive programmer with consistent participation in Division 2 and 3 contests.",
    color: "text-blue-400",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
    bgColor: "bg-blue-500/5",
    glowColor: "hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  },
  {
    icon: GraduationCap,
    title: "NTSE Scholar 2021",
    detail: "Top 0.2% Nationally",
    description: "Recognized as a top 0.2% scholar nationally by NCERT for academic excellence.",
    color: "text-purple-400",
    borderColor: "border-purple-500/20 hover:border-purple-500/40",
    bgColor: "bg-purple-500/5",
    glowColor: "hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-comment">Recognition</div>
          <h2 className="text-4xl md:text-5xl font-bold font-sans">
            Notable <span className="glow-green">Achievements</span>
          </h2>
          <p className="text-slate-300 text-sm font-mono mt-3">
            <span className="text-slate-400">{">"} </span>
            Milestones from competitive programming, hackathons, and academics.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`relative p-5 rounded-lg border ${item.borderColor} ${item.bgColor} ${item.glowColor} transition-all duration-300 bg-terminal-surface`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-md bg-terminal-card border border-terminal-border ${item.color} flex-shrink-0`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-terminal-text-primary font-sans text-base mb-0.5">
                    {item.title}
                  </h3>
                  <p className={`text-xs font-mono font-semibold ${item.color} mb-2`}>
                    {item.detail}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
