import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, Layers, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import vidtubeImg from "../assets/vidtube.png";
import zeptoImg from "../assets/zepto.png";
import shopeasyImg from "../assets/shopeasy.png";
import micromediaImg from "../assets/micromedia.png";
import nextjsauthImg from "../assets/nextjsauth.png";

const featuredProjects = [
  {
    id: 1,
    title: "ShopEasy",
    category: "Full Stack E-Commerce",
    image: shopeasyImg,
    description: "B2C e-commerce platform with RBAC & PayPal payments.",
    tech: ["React", "Node.js", "MongoDB", "Redux Toolkit", "PayPal API"],
  },
  {
    id: 2,
    title: "MicroMedia",
    category: "Backend Microservices",
    image: micromediaImg,
    description: "Distributed social networking backend with Docker & CI/CD.",
    tech: ["Node.js", "RabbitMQ", "Redis", "Docker"],
  },
  {
    id: 3,
    title: "NextJsAuth",
    category: "Secure Authentication",
    image: nextjsauthImg,
    description: "Production-ready auth with JWT, bcrypt & Nodemailer.",
    tech: ["Next.js 14", "TypeScript", "JWT", "Nodemailer"],
  },
];

const moreProjects = [
  {
    id: 4,
    title: "VidTube Backend",
    category: "Video Streaming API",
    image: vidtubeImg,
    description: "Robust backend system for video hosting and streaming.",
    tech: ["Node.js", "Express", "Cloudinary"],
  },
  {
    id: 5,
    title: "Quick Comm",
    category: "Q-Commerce Clone",
    image: zeptoImg,
    description: "High-performance Zepto clone with modern React patterns.",
    tech: ["React", "Redux", "Tailwind"],
  },
];

const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  return (
    <Link to={`/project/${project.id}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
        className="relative h-[380px] w-full rounded-lg overflow-hidden group cursor-pointer terminal-window"
      >
        {/* Terminal Title Bar */}
        <div className="terminal-titlebar !py-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-[10px] text-slate-400 font-mono ml-2 truncate">
            ~/{project.title.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>

        {/* Image */}
        <div
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
          className="absolute inset-0 top-[36px] overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Info Overlay */}
        <div
          style={{ transform: "translateZ(60px)" }}
          className="absolute bottom-0 left-0 right-0 p-5 z-20"
        >
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tech.map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 bg-terminal-bg/80 backdrop-blur-sm border border-terminal-green/20 text-terminal-green rounded font-mono">
                {t}
              </span>
            ))}
          </div>
          <div className="text-slate-400 text-[10px] font-mono mb-1">{project.category}</div>
          <h3 className="text-xl font-bold text-terminal-text-primary font-sans mb-1 drop-shadow-lg">
            {project.title}
          </h3>
          <p className="text-slate-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono">
            {project.description}
          </p>
        </div>

        {/* Arrow icon */}
        <div
          style={{ transform: "translateZ(80px)" }}
          className="absolute top-14 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="w-9 h-9 rounded-md bg-terminal-green/20 border border-terminal-green/30 text-terminal-green flex items-center justify-center backdrop-blur-sm">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Green glow border on hover */}
        <div className="absolute inset-0 top-[36px] border border-transparent group-hover:border-terminal-green/20 transition-colors pointer-events-none z-30" />
      </motion.div>
    </Link>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
          <div>
            <div className="section-comment">Projects</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
              Featured <span className="glow-green">Work</span>
            </h2>
            <p className="text-slate-300 max-w-lg text-sm font-mono">
              <span className="text-slate-400">{">"} </span>
              A selection of my most ambitious projects.
            </p>
          </div>

          <div className="flex bg-terminal-surface p-1 rounded-md border border-terminal-border">
            <button
              onClick={() => setActiveTab("featured")}
              className={`px-4 py-2 rounded-md text-xs font-mono transition-all duration-300 flex items-center gap-2 ${
                activeTab === "featured"
                  ? "bg-terminal-green/10 text-terminal-green border border-terminal-green/20"
                  : "text-slate-300 hover:text-terminal-text-primary"
              }`}
            >
              <Layers className="w-3 h-3" /> Featured
            </button>
            <button
              onClick={() => setActiveTab("more")}
              className={`px-4 py-2 rounded-md text-xs font-mono transition-all duration-300 flex items-center gap-2 ${
                activeTab === "more"
                  ? "bg-terminal-green/10 text-terminal-green border border-terminal-green/20"
                  : "text-slate-300 hover:text-terminal-text-primary"
              }`}
            >
              <LayoutGrid className="w-3 h-3" /> More
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ perspective: "1000px" }}
          >
            {(activeTab === "featured" ? featuredProjects : moreProjects).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/chmp0940"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-terminal-green transition-colors font-mono text-sm"
          >
            <Github className="w-4 h-4" /> view all repositories →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
