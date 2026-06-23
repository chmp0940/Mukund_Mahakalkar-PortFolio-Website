import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

// ── Data ──
const RESUME_LINK = "https://drive.google.com/file/d/1v53wcrosbDih7Bmq_6Kx7pNnhQsmzD3I/view?usp=sharing";

const COMMANDS = {
  help: {
    description: "Show available commands",
    run: () => [
      { type: "header", text: "Available Commands" },
      { type: "table", rows: [
        ["about", "Learn about me"],
        ["skills", "View my technical skills"],
        ["projects", "Browse my projects"],
        ["experience", "View my work experience"],
        ["leetcode", "View competitive programming stats"],
        ["profiles", "All coding platform profiles"],
        ["achievements", "Notable achievements & awards"],
        ["education", "My academic background"],
        ["contact", "Get in touch with me"],
        ["resume", "Open my resume (Google Drive)"],
        ["socials", "GitHub, LinkedIn links"],
        ["gui", "Switch to full GUI mode"],
        ["clear", "Clear the terminal"],
        ["sudo hire mukund", "😏"],
      ]},
      { type: "hint", text: "Tip: Use ↑↓ arrows for history • Tab for autocomplete" },
    ],
  },

  about: {
    description: "About me",
    run: () => [
      { type: "ascii-small", text: "◤ ABOUT ME ◢" },
      { type: "line", text: "" },
      { type: "info", label: "Name", value: "Mukund Mahakalkar" },
      { type: "info", label: "Role", value: "Full Stack Developer & Competitive Programmer" },
      { type: "info", label: "College", value: "IIIT Bhopal (B.Tech CSE, 2023–2027)" },
      { type: "info", label: "Year", value: "Final Year" },
      { type: "info", label: "CGPA", value: "8.62" },
      { type: "line", text: "" },
      { type: "text", text: "Final year CSE student at IIIT Bhopal with hands-on experience building" },
      { type: "text", text: "full-stack web apps using React, Next.js, TypeScript, Node.js & REST APIs." },
      { type: "text", text: "Developed and deployed backend systems with AWS S3, SQS, Docker, MongoDB," },
      { type: "text", text: "and PostgreSQL in production environments." },
      { type: "line", text: "" },
      { type: "tags", items: ["React", "Node.js", "TypeScript", "Next.js", "MongoDB", "PostgreSQL", "AWS", "Docker"] },
    ],
  },

  skills: {
    description: "Technical skills",
    run: () => [
      { type: "ascii-small", text: "◤ SKILLS ◢" },
      { type: "line", text: "" },
      { type: "category", name: "Frontend", items: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Redux Toolkit", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "ShadCN UI", level: 80 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
      ]},
      { type: "category", name: "Backend", items: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Microservices", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "Redis", level: 75 },
        { name: "RabbitMQ", level: 70 },
        { name: "GraphQL", level: 70 },
        { name: "WebSockets", level: 70 },
        { name: "Prisma ORM", level: 75 },
      ]},
      { type: "category", name: "Cloud & DevOps", items: [
        { name: "AWS (S3, SQS)", level: 75 },
        { name: "Docker", level: 75 },
        { name: "Git/GitHub", level: 90 },
        { name: "Vercel", level: 80 },
        { name: "Render", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Postman", level: 85 },
        { name: "Linux", level: 75 },
        { name: "VS Code", level: 95 },
      ]},
      { type: "category", name: "Core CS", items: [
        { name: "C++", level: 90 },
        { name: "DSA", level: 85 },
        { name: "DBMS", level: 80 },
        { name: "OS", level: 75 },
      ]},
    ],
  },

  projects: {
    description: "My projects",
    run: () => [
      { type: "ascii-small", text: "◤ PROJECTS ◢" },
      { type: "line", text: "" },
      { type: "project", name: "ShopEasy", category: "Full Stack E-Commerce", tech: ["React", "Node.js", "MongoDB", "Redux Toolkit", "PayPal API"], desc: "B2C e-commerce with RBAC, PayPal payments & 99.9% payment success rate.", github: "https://github.com/chmp0940/ShopEasy", live: "https://shopeasy-1-u9f1.onrender.com" },
      { type: "project", name: "MicroMedia", category: "Backend Microservices", tech: ["Node.js", "RabbitMQ", "Redis", "Docker"], desc: "Distributed social backend with async messaging & ~40% latency reduction.", github: "https://github.com/chmp0940/Social_Media_MicroServices", live: "" },
      { type: "project", name: "NextJsAuth", category: "Auth System", tech: ["Next.js 14", "TypeScript", "JWT", "Nodemailer"], desc: "Production-ready auth with bcrypt hashing & email verification.", github: "https://github.com/chmp0940/NextJsAuth", live: "https://next-js-auth-c54u-hzst43akz-mukund-mahakalkars-projects.vercel.app/" },
      { type: "project", name: "VidTube Backend", category: "Video Streaming API", tech: ["Node.js", "Express", "MongoDB", "Cloudinary"], desc: "Robust backend for video hosting with JWT auth & comments.", github: "https://github.com/chmp0940/VidTube---Backend-Project", live: "" },
      { type: "project", name: "Quick Comm", category: "Q-Commerce Clone", tech: ["React", "Redux", "Tailwind CSS", "React Router"], desc: "High-performance Zepto clone with modern React patterns.", github: "https://github.com/chmp0940/Quick_comm_Zepto-React-", live: "https://quick-comm-zepto-react-r9aj-32x97qxfe.vercel.app/" },
      { type: "line", text: "" },
      { type: "hint", text: "Visit GUI mode for project screenshots & details: type 'gui'" },
    ],
  },

  leetcode: {
    description: "LeetCode stats",
    run: () => [
      { type: "ascii-small", text: "◤ LEETCODE ◢" },
      { type: "line", text: "" },
      { type: "info", label: "Username", value: "@chmpmk0904" },
      { type: "info", label: "Problems Solved", value: "700+" },
      { type: "info", label: "Badge", value: "🏅 Knight" },
      { type: "info", label: "Rating", value: "1862" },
      { type: "info", label: "Ranking", value: "Top ~5% globally" },
      { type: "info", label: "Profile", value: "https://leetcode.com/u/chmpmk0904/" },
      { type: "line", text: "" },
      { type: "progress-bar", label: "Problems", current: 700, max: 3500 },
      { type: "line", text: "" },
      { type: "text", text: "LeetCode Knight — Ranked in top ~5% of global users with demonstrated" },
      { type: "text", text: "strength in Graphs and Dynamic Programming." },
    ],
  },

  profiles: {
    description: "All coding profiles",
    run: () => [
      { type: "ascii-small", text: "◤ CODING PROFILES ◢" },
      { type: "line", text: "" },
      { type: "profile", platform: "LeetCode", stats: "700+ Problems • Knight 🏅 • Rating 1862", link: "https://leetcode.com/u/chmpmk0904/" },
      { type: "profile", platform: "CodeChef", stats: "3 Star • Rating 1633 • Global Rank 406 (Starters 204)", link: "https://www.codechef.com/users/void_cloak_95" },
      { type: "profile", platform: "Codeforces", stats: "Pupil • Max Rating 1201 • Div 2 & 3 Active", link: "https://codeforces.com/profile/mukund0904" },
      { type: "profile", platform: "GeeksforGeeks", stats: "89 Problems • 3 Star", link: "https://www.geeksforgeeks.org/profile/mukundchmp0904" },
      { type: "profile", platform: "Codolio", stats: "800+ Problems Solved", link: "https://codolio.com/profile/chmp0940" },
    ],
  },

  education: {
    description: "Education details",
    run: () => [
      { type: "ascii-small", text: "◤ EDUCATION ◢" },
      { type: "line", text: "" },
      { type: "info", label: "Institute", value: "Indian Institute of Information Technology, Bhopal" },
      { type: "info", label: "Degree", value: "B.Tech in Computer Science & Engineering" },
      { type: "info", label: "Duration", value: "2023 – 2027" },
      { type: "info", label: "CGPA", value: "8.62" },
      { type: "info", label: "Year", value: "Final Year" },
      { type: "line", text: "" },
      { type: "text", text: "Relevant Coursework: Data Structures, OOP, DBMS, Operating Systems" },
    ],
  },

  contact: {
    description: "Contact info",
    run: () => [
      { type: "ascii-small", text: "◤ CONTACT ◢" },
      { type: "line", text: "" },
      { type: "info", label: "Email", value: "mukundmahakalkar0904@gmail.com" },
      { type: "info", label: "Location", value: "Bhopal, India" },
      { type: "info", label: "LinkedIn", value: "https://www.linkedin.com/in/mukund-mahakalkar-789aa6289/" },
      { type: "info", label: "GitHub", value: "https://github.com/chmp0940" },
      { type: "line", text: "" },
      { type: "hint", text: "Feel free to reach out for collaborations or opportunities!" },
    ],
  },

  resume: {
    description: "Open resume",
    run: () => {
      window.open(RESUME_LINK, "_blank");
      return [
        { type: "success", text: "Opening resume in a new tab..." },
        { type: "info", label: "URL", value: RESUME_LINK },
      ];
    },
  },

  experience: {
    description: "Work experience",
    run: () => [
      { type: "ascii-small", text: "◤ EXPERIENCE ◢" },
      { type: "line", text: "" },
      { type: "info", label: "Company", value: "QuickIntell" },
      { type: "info", label: "Role", value: "Full Stack Web Development Intern" },
      { type: "info", label: "Duration", value: "December 2025 – March 2026" },
      { type: "info", label: "Mode", value: "Remote" },
      { type: "line", text: "" },
      { type: "text", text: "• Built a medical coding platform using React, TypeScript, Node.js, and" },
      { type: "text", text: "  Prisma ORM; integrated OpenAI APIs to automate ICD/CPT code suggestions," },
      { type: "text", text: "  cutting manual coding time by 35%." },
      { type: "line", text: "" },
      { type: "text", text: "• Designed async background processing pipelines using AWS SQS and" },
      { type: "text", text: "  secure document storage via AWS S3, reducing processing failures by 30%." },
      { type: "line", text: "" },
      { type: "text", text: "• Built a reusable component library with Tailwind CSS and ShadCN UI," },
      { type: "text", text: "  reducing frontend development time by 40%." },
      { type: "line", text: "" },
      { type: "tags", items: ["React", "TypeScript", "Node.js", "Prisma", "AWS S3", "AWS SQS", "OpenAI", "Jest"] },
    ],
  },

  achievements: {
    description: "Achievements & awards",
    run: () => [
      { type: "ascii-small", text: "◤ ACHIEVEMENTS ◢" },
      { type: "line", text: "" },
      { type: "text", text: "🏅 Knight at LeetCode (Rating 1862) — Top ~5% globally, 700+ problems" },
      { type: "text", text: "⭐ CodeChef 3-Star (Rating 1633) — Global Rank 406 in Starters 204" },
      { type: "text", text: "🟢 Codeforces Pupil (Max Rating 1201) — Active in Div 2 & 3 contests" },
      { type: "text", text: "🎨 Adobe Hackathon Qualifier — Top 10% nationally (250,000+ participants)" },
      { type: "text", text: "🏆 NTSE Scholar 2021 — Top 0.2% nationally by NCERT" },
    ],
  },

  socials: {
    description: "Social links",
    run: () => [
      { type: "ascii-small", text: "◤ SOCIALS ◢" },
      { type: "line", text: "" },
      { type: "link", label: "GitHub", url: "https://github.com/chmp0940" },
      { type: "link", label: "LinkedIn", url: "https://www.linkedin.com/in/mukund-mahakalkar-789aa6289/" },
      { type: "link", label: "LeetCode", url: "https://leetcode.com/u/chmpmk0904/" },
    ],
  },

  "sudo hire mukund": {
    description: "🤫",
    run: () => [
      { type: "line", text: "" },
      { type: "success", text: "✅ Permission granted!" },
      { type: "text", text: "🎉 Congratulations! You've made an excellent decision." },
      { type: "text", text: "Mukund is now ready to build amazing things for you." },
      { type: "line", text: "" },
      { type: "text", text: "📧 Reach out: mukundmahakalkar0904@gmail.com" },
      { type: "text", text: "📄 Resume: type 'resume' to view" },
      { type: "line", text: "" },
      { type: "hint", text: "Easter egg unlocked! 🥚 You have great taste." },
    ],
  },
};

// ── Output Renderers ──
const renderOutput = (item, idx) => {
  switch (item.type) {
    case "header":
      return (
        <div key={idx} className="text-terminal-cyan font-bold text-base mb-2 mt-1">
          ┌─ {item.text} ─────────────────────
        </div>
      );

    case "text":
      return <div key={idx} className="text-terminal-text-primary text-sm leading-relaxed pl-2">{item.text}</div>;

    case "line":
      return <div key={idx} className="h-2" />;

    case "ascii-small":
      return (
        <div key={idx} className="text-terminal-green font-bold text-sm tracking-wider mb-1">
          {item.text}
        </div>
      );

    case "info":
      return (
        <div key={idx} className="flex gap-2 text-sm pl-2 py-0.5">
          <span className="text-terminal-amber min-w-[140px]">{item.label}:</span>
          <span className="text-terminal-text-primary">{item.value}</span>
        </div>
      );

    case "tags":
      return (
        <div key={idx} className="flex flex-wrap gap-2 pl-2">
          {item.items.map((tag) => (
            <span key={tag} className="terminal-tag text-xs">{tag}</span>
          ))}
        </div>
      );

    case "table":
      return (
        <div key={idx} className="pl-2 space-y-1">
          {item.rows.map(([cmd, desc], i) => (
            <div key={i} className="flex gap-3 text-sm">
              <span className="text-terminal-green min-w-[180px] font-semibold">{cmd}</span>
              <span className="text-slate-300">— {desc}</span>
            </div>
          ))}
        </div>
      );

    case "hint":
      return (
        <div key={idx} className="text-slate-400 text-xs italic pl-2 mt-2">
          💡 {item.text}
        </div>
      );

    case "success":
      return (
        <div key={idx} className="text-terminal-green text-sm font-semibold pl-2">
          {item.text}
        </div>
      );

    case "error":
      return (
        <div key={idx} className="text-terminal-red text-sm pl-2">
          {item.text}
        </div>
      );

    case "category":
      return (
        <div key={idx} className="mb-4 pl-2">
          <div className="text-terminal-cyan text-sm font-bold mb-2">╠═ {item.name}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 pl-4">
            {item.items.map((skill) => (
              <div key={skill.name} className="flex items-center gap-2 text-sm">
                <span className="text-terminal-text-primary min-w-[120px]">{skill.name}</span>
                <div className="flex-1 h-1.5 bg-terminal-border rounded-full overflow-hidden max-w-[120px]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, #00ff41 ${skill.level > 80 ? '' : ', #ffb000'})`,
                      boxShadow: "0 0 6px rgba(0,255,65,0.3)",
                    }}
                  />
                </div>
                <span className="text-slate-400 text-xs w-8">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "project":
      return (
        <div key={idx} className="mb-4 pl-2 border-l-2 border-terminal-green/20 hover:border-terminal-green/60 transition-colors">
          <div className="pl-4 py-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-terminal-green font-bold">{item.name}</span>
              <span className="text-slate-400 text-xs">({item.category})</span>
            </div>
            <div className="text-slate-300 text-sm mb-2">{item.desc}</div>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {item.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 bg-terminal-cyan/10 text-terminal-cyan rounded border border-terminal-cyan/20">{t}</span>
              ))}
            </div>
            <div className="flex gap-4 text-xs">
              <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-terminal-green transition-colors">
                [GitHub ↗]
              </a>
              {item.live && (
                <a href={item.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-terminal-cyan transition-colors">
                  [Live Demo ↗]
                </a>
              )}
            </div>
          </div>
        </div>
      );

    case "profile":
      return (
        <div key={idx} className="flex items-center gap-3 text-sm pl-2 py-1.5 hover:bg-white/[0.02] transition-colors rounded">
          <span className="text-terminal-green font-semibold min-w-[120px]">{item.platform}</span>
          <span className="text-slate-300 flex-1">{item.stats}</span>
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-terminal-cyan text-xs hover:underline">
            [visit ↗]
          </a>
        </div>
      );

    case "link":
      return (
        <div key={idx} className="text-sm pl-2 py-1">
          <span className="text-terminal-amber min-w-[100px] inline-block">{item.label}:</span>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline ml-2">{item.url}</a>
        </div>
      );

    case "progress-bar":
      return (
        <div key={idx} className="pl-2">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <span>{item.label}</span>
            <span className="text-terminal-green">{item.current}/{item.max}</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-xs">
            <span className="text-terminal-green">[</span>
            <div className="flex-1 max-w-[300px] h-2 bg-terminal-border rounded-sm overflow-hidden">
              <div
                className="h-full rounded-sm"
                style={{
                  width: `${(item.current / item.max) * 100}%`,
                  background: "linear-gradient(90deg, #00ff41, #00d4ff)",
                  boxShadow: "0 0 8px rgba(0,255,65,0.3)",
                }}
              />
            </div>
            <span className="text-terminal-green">]</span>
            <span className="text-terminal-amber ml-1">{Math.round((item.current / item.max) * 100)}%</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};


// ── Main Terminal Component ──
const TerminalInterface = ({ onSwitchToGUI }) => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const allCommands = Object.keys(COMMANDS);

  // Welcome message
  useEffect(() => {
    setHistory([
      {
        command: null,
        output: [
          { type: "text", text: "Welcome to Mukund's portfolio terminal! 🚀" },
          { type: "text", text: 'Type "help" to see available commands.' },
          { type: "line", text: "" },
        ],
      },
    ]);
    inputRef.current?.focus();
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase();

    if (!trimmed) return;

    setCommandHistory((prev) => [trimmed, ...prev]);
    setHistoryIndex(-1);

    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    if (trimmed === "gui") {
      setHistory((prev) => [
        ...prev,
        { command: cmd, output: [{ type: "success", text: "Switching to GUI mode..." }] },
      ]);
      setTimeout(() => onSwitchToGUI(), 500);
      return;
    }

    const handler = COMMANDS[trimmed];
    if (handler) {
      const output = handler.run();
      setHistory((prev) => [...prev, { command: cmd, output }]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: [
            { type: "error", text: `Command not found: ${trimmed}` },
            { type: "hint", text: 'Type "help" to see available commands.' },
          ],
        },
      ]);
    }
  }, [onSwitchToGUI]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIdx = historyIndex + 1;
        setHistoryIndex(newIdx);
        setInput(commandHistory[newIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIdx = historyIndex - 1;
        setHistoryIndex(newIdx);
        setInput(commandHistory[newIdx]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = allCommands.filter((c) => c.startsWith(input.toLowerCase()));
      if (match.length === 1) {
        setInput(match[0]);
      } else if (match.length > 1) {
        setHistory((prev) => [
          ...prev,
          {
            command: null,
            output: [{ type: "text", text: match.join("  ") }],
          },
        ]);
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  return (
    <div
      className="min-h-screen bg-terminal-bg flex items-center justify-center p-4 md:p-8 relative"
      onClick={() => inputRef.current?.focus()}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <div className="terminal-window scanline-overlay">
          {/* Title Bar */}
          <div className="terminal-titlebar">
            <div className="flex items-center gap-2">
              <div className="terminal-dot terminal-dot-red" />
              <div className="terminal-dot terminal-dot-yellow" />
              <div className="terminal-dot terminal-dot-green" />
            </div>
            <span className="text-xs text-slate-400 font-mono ml-3">
              mukund@portfolio:~
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSwitchToGUI();
              }}
              className="ml-auto text-sm font-mono font-bold text-terminal-cyan px-4 py-1.5 rounded-md border-2 border-terminal-cyan/60 bg-terminal-cyan/10 hover:bg-terminal-cyan/20 hover:border-terminal-cyan hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300 animate-pulse hover:animate-none"
            >
              ⚡ GUI Mode
            </button>
          </div>

          {/* Terminal Output */}
          <div
            ref={scrollRef}
            className="p-4 md:p-6 h-[70vh] overflow-y-auto font-mono text-sm"
          >
            {history.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="mb-4"
              >
                {entry.command !== null && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-terminal-cyan">❯</span>
                    <span className="text-terminal-green">mukund@portfolio</span>
                    <span className="text-slate-400">:</span>
                    <span className="text-terminal-cyan">~</span>
                    <span className="text-slate-400">$</span>
                    <span className="text-terminal-text-primary ml-1">{entry.command}</span>
                  </div>
                )}
                <div className="space-y-0.5">
                  {entry.output.map((item, j) => renderOutput(item, `${i}-${j}`))}
                </div>
              </motion.div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-terminal-cyan">❯</span>
              <span className="text-terminal-green">mukund@portfolio</span>
              <span className="text-slate-400">:</span>
              <span className="text-terminal-cyan">~</span>
              <span className="text-slate-400">$</span>
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent outline-none text-terminal-text-primary font-mono text-sm caret-terminal-green ml-1"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                  autoCapitalize="off"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick command suggestions */}
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {["help", "about", "experience", "skills", "projects", "leetcode", "achievements"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                executeCommand(cmd);
                setInput("");
              }}
              className="text-xs font-mono text-slate-400 px-3 py-1.5 rounded border border-terminal-border 
                         hover:text-terminal-green hover:border-terminal-green/30 hover:bg-terminal-green/5 transition-all"
            >
              {cmd}
            </button>
          ))}
          {/* Highlighted GUI button in quick commands */}
          <button
            onClick={() => onSwitchToGUI()}
            className="text-xs font-mono font-bold text-terminal-cyan px-3 py-1.5 rounded border-2 border-terminal-cyan/40 
                       bg-terminal-cyan/5 hover:text-terminal-cyan hover:border-terminal-cyan/60 hover:bg-terminal-cyan/10 
                       hover:shadow-[0_0_12px_rgba(0,212,255,0.2)] transition-all"
          >
            ⚡ gui
          </button>
        </div>
      </motion.div>

      {/* Floating GUI Mode Button - Bottom Right */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={(e) => {
          e.stopPropagation();
          onSwitchToGUI();
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-lg font-mono font-bold text-sm
                   text-terminal-cyan bg-terminal-surface/95 backdrop-blur-sm border-2 border-terminal-cyan/50 
                   shadow-[0_0_25px_rgba(0,212,255,0.2)] hover:shadow-[0_0_35px_rgba(0,212,255,0.4)] 
                   hover:border-terminal-cyan hover:bg-terminal-cyan/15 transition-all duration-300
                   animate-bounce hover:animate-none"
        style={{ animationDuration: '2s', animationIterationCount: 3 }}
      >
        <span className="text-lg">🖥️</span> Switch to GUI Mode
      </motion.button>
    </div>
  );
};

export default TerminalInterface;
