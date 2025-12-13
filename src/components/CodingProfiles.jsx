import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";
import { SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "@chmpmk0904",
      stats: "500+ Problems • Rating 1730+",
      link: "https://leetcode.com/u/chmpmk0904/",
      icon: SiLeetcode,
      color: "text-yellow-500"
    },
    {
      platform: "CodeChef",
      username: "@void_cloak_95",
      stats: "3 Star",
      link: "https://www.codechef.com/users/void_cloak_95",
      icon: SiCodechef,
      color: "text-amber-700"
    },
    {
      platform: "Codeforces",
      username: "@mukund0904",
      stats: "Max Rating 1078 • Newbie",
      link: "https://codeforces.com/profile/mukund0904",
      icon: SiCodeforces,
      color: "text-blue-500"
    },
    {
      platform: "GeeksforGeeks",
      username: "@mukundchmp0904",
      stats: "89 Problems • 3 Star",
      link: "https://www.geeksforgeeks.org/profile/mukundchmp0904",
      icon: SiGeeksforgeeks,
      color: "text-green-500"
    },
    {
      platform: "Codolio",
      username: "@chmp0940",
      stats: "800+ Problems Solved",
      link: "https://codolio.com/profile/chmp0940",
      icon: TrendingUp,
      color: "text-purple-500"
    }
  ];
  
    return (
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-6">
                {profiles.map((p, i) => (
                    <motion.a
                        key={p.platform}
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="glass-card px-8 py-6 rounded-2xl flex items-center gap-6 min-w-[300px] hover:bg-white/5 transition-colors group"
                    >
                         <div className={`p-4 rounded-full bg-white/5 group-hover:bg-white/10 ${p.color}`}>
                             <p.icon className="w-6 h-6" />
                         </div>
                         <div>
                             <h3 className="font-bold text-lg">{p.platform}</h3>
                             <p className="text-sm text-gray-400">{p.stats}</p>
                         </div>
                         <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-50 transition-opacity" />
                    </motion.a>
                ))}
            </div>
        </div>
      </section>
    );
  };
  
  export default CodingProfiles;
