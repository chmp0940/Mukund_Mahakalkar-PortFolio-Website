import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Award } from "lucide-react";
import { SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";
import TerminalWindow from "./TerminalWindow";

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "@chmpmk0904",
      stats: "700+ Problems • Knight 🏅 • Rating 1862",
      link: "https://leetcode.com/u/chmpmk0904/",
      icon: SiLeetcode,
      color: "text-yellow-400",
      borderColor: "border-yellow-500/20 hover:border-yellow-500/40",
      bgColor: "bg-yellow-500/5 hover:bg-yellow-500/10",
      isHighlighted: true,
    },
    {
      platform: "CodeChef",
      username: "@void_cloak_95",
      stats: "3 Star • Rating 1633 • GR 406 (Starters 204)",
      link: "https://www.codechef.com/users/void_cloak_95",
      icon: SiCodechef,
      color: "text-amber-600",
      borderColor: "border-amber-600/20 hover:border-amber-600/40",
      bgColor: "hover:bg-amber-600/5",
    },
    {
      platform: "Codeforces",
      username: "@mukund0904",
      stats: "Pupil • Max Rating 1201 • Div 2 & 3",
      link: "https://codeforces.com/profile/mukund0904",
      icon: SiCodeforces,
      color: "text-blue-400",
      borderColor: "border-blue-500/20 hover:border-blue-500/40",
      bgColor: "hover:bg-blue-500/5",
    },
    {
      platform: "GeeksforGeeks",
      username: "@mukundchmp0904",
      stats: "89 Problems • 3 Star",
      link: "https://www.geeksforgeeks.org/profile/mukundchmp0904",
      icon: SiGeeksforgeeks,
      color: "text-green-400",
      borderColor: "border-green-500/20 hover:border-green-500/40",
      bgColor: "hover:bg-green-500/5",
    },
    {
      platform: "Codolio",
      username: "@chmp0940",
      stats: "800+ Problems Solved",
      link: "https://codolio.com/profile/chmp0940",
      icon: TrendingUp,
      color: "text-purple-400",
      borderColor: "border-purple-500/20 hover:border-purple-500/40",
      bgColor: "hover:bg-purple-500/5",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-comment">Competitive Programming</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
            Coding <span className="glow-green">Profiles</span>
          </h2>
        </motion.div>

        {/* LeetCode Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <TerminalWindow title="leetcode-stats.sh">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                  <SiLeetcode className="w-8 h-8 text-yellow-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-terminal-text-primary font-sans">LeetCode</h3>
                    <span className="flex items-center gap-1 text-xs px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 rounded font-mono">
                      <Award className="w-3 h-3" /> Knight
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm font-mono">@chmpmk0904</p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-black glow-amber font-sans">700+</div>
                  <div className="text-slate-400 text-xs font-mono">Problems</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black glow-green font-sans">1862</div>
                  <div className="text-slate-400 text-xs font-mono">Rating</div>
                </div>
              </div>

              <a
                href="https://leetcode.com/u/chmpmk0904/"
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-btn text-xs flex items-center gap-2"
              >
                Visit Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Progress bar */}
            <div className="mt-5 pt-4 border-t border-terminal-border">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                <span>Progress</span>
                <span className="text-terminal-green">700/3500</span>
              </div>
              <div className="terminal-progress">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "20%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  className="terminal-progress-bar"
                />
              </div>
            </div>
          </TerminalWindow>
        </motion.div>

        {/* Other profiles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profiles.filter(p => !p.isHighlighted).map((p, i) => (
            <motion.a
              key={p.platform}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className={`flex items-center gap-4 p-4 rounded-lg border ${p.borderColor} ${p.bgColor} transition-all duration-300 group bg-terminal-surface`}
            >
              <div className={`p-3 rounded-md bg-terminal-card border border-terminal-border ${p.color}`}>
                <p.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm text-terminal-text-primary font-sans">{p.platform}</h3>
                <p className="text-xs text-slate-400 font-mono">{p.stats}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
