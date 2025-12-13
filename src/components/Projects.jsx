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
    description: "Next-gen shopping experience with AI recommendations.",
  },
  {
    id: 2,
    title: "MicroMedia",
    category: "Backend Microservices",
    image: micromediaImg,
    description: "Scalable backend architecture with Node.js and Docker.",
  },
  {
    id: 3,
    title: "NextJsAuth",
    category: "Secure Authentication",
    image: nextjsauthImg,
    description: "Robust auth system with OAuth and session management.",
  }
];

const moreProjects = [
  {
    id: 4,
    title: "VidTube Backend",
    category: "Video Streaming API",
    image: vidtubeImg,
    description: "Robust backend system for video hosting and streaming.",
  },
  {
    id: 5,
    title: "Quick Comm",
    category: "Q-Commerce Clone",
    image: zeptoImg,
    description: "High-performance Zepto clone with modern React patterns.",
  }
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
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  return (
    <Link to={`/project/${project.id}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative h-[400px] w-full rounded-3xl bg-white/5 border border-white/10 overflow-hidden group cursor-pointer shadow-xl backdrop-blur-sm"
      >
        <div 
           style={{
             transform: "translateZ(50px)",
             transformStyle: "preserve-3d",
           }}
           className="absolute inset-4 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
        </div>

        <div 
           style={{ transform: "translateZ(80px)" }}
           className="absolute bottom-10 left-10 z-20 pointer-events-none"
        >
           <div className="glass-card px-4 py-1 rounded-full text-xs font-bold text-white mb-2 w-fit">
              {project.category}
           </div>
           <h3 className="text-3xl font-bold text-white mb-1 drop-shadow-lg">{project.title}</h3>
           <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
               {project.description}
           </p>
        </div>

        <div 
          style={{ transform: "translateZ(100px)" }}
          className="absolute top-10 right-10 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        >
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
                <ArrowUpRight className="w-6 h-6" />
            </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
          <div>
            <h2 className="text-6xl font-bold mb-6">
              Featured <br/>
              <span className="text-gradient">Work</span>
            </h2>
             <p className="text-gray-400 max-w-lg">
                Explore a selection of my most ambitious projects, ranging from AI-powered applications to scalable backend systems.
             </p>
          </div>
          
          <div className="flex bg-white/5 p-1 rounded-full backdrop-blur-md border border-white/10">
              <button 
                  onClick={() => setActiveTab("featured")}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === "featured" ? "bg-purple-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
              >
                  <Layers className="w-4 h-4" /> Featured
              </button>
              <button 
                  onClick={() => setActiveTab("more")}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === "more" ? "bg-purple-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
              >
                  <LayoutGrid className="w-4 h-4" /> More Projects
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
            >
                {activeTab === "featured" ? (
                    featuredProjects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))
                ) : (
                    moreProjects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))
                )}
            </motion.div>
        </AnimatePresence>
        
        <div className="mt-20 text-center">
             <a href="https://github.com/chmp0940" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                 <Github className="w-5 h-5" /> View all repositories
             </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
