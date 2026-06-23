import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import TerminalWindow from "./TerminalWindow";
import TerminalBackground from "./TerminalBackground";

const projectData = {
  1: {
    title: "ShopEasy",
    category: "Full Stack E-Commerce",
    image: "/src/assets/shopeasy.png",
    description: "A B2C e-commerce platform with role-based access control (RBAC) and Redux Toolkit for frontend state management, achieving a lag-free checkout flow.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Redux Toolkit", "PayPal API"],
    features: ["Role-Based Access Control (RBAC)", "PayPal Payment Integration", "Redux Toolkit State Management", "MongoDB Aggregation Pipelines", "99.9% Payment Success Rate"],
    githubLink: "https://github.com/chmp0940/ShopEasy",
    liveLink: "https://shopeasy-1-u9f1.onrender.com",
  },
  2: {
    title: "MicroMedia",
    category: "Backend Microservices",
    image: "/src/assets/micromedia.png",
    description: "A distributed social networking backend with Microservices architecture, containerized using Docker and structured for CI/CD deployment pipelines.",
    techStack: ["Node.js", "RabbitMQ", "Redis", "Docker"],
    features: ["Async Message Broker (RabbitMQ)", "Redis Caching (~40% latency reduction)", "Docker Containerization", "Durable Queues & Consumer Acks", "CI/CD Ready"],
    githubLink: "https://github.com/chmp0940/Social_Media_MicroServices",
    liveLink: "",
  },
  3: {
    title: "NextJsAuth",
    category: "Authentication System",
    image: "/src/assets/nextjsauth.png",
    description: "A production-ready authentication system using Next.js App Router with bcrypt password hashing and stateless JWT tokens, eliminating server-side session overhead.",
    techStack: ["Next.js 14", "TypeScript", "JWT", "Nodemailer", "bcrypt"],
    features: ["JWT Stateless Auth", "bcrypt Password Hashing", "Email Verification via Nodemailer", "Password Reset Flow", "60% Activation Rate Increase"],
    githubLink: "https://github.com/chmp0940/NextJsAuth",
    liveLink: "https://next-js-auth-c54u-hzst43akz-mukund-mahakalkars-projects.vercel.app/",
  },
  4: {
    title: "VidTube Backend",
    category: "Video Streaming Backend",
    image: "/src/assets/vidtube.png",
    description: "A robust and scalable backend infrastructure for a video hosting platform similar to YouTube. Handles video uploads, processing, and streaming.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary", "Multer"],
    features: ["Video Upload & Processing", "JWT Authentication", "Like/Dislike System", "Comment Threads", "View Counting"],
    githubLink: "https://github.com/chmp0940/VidTube---Backend-Project",
    liveLink: "",
  },
  5: {
    title: "Quick Comm (Zepto Clone)",
    category: "Q-Commerce Frontend",
    image: "/src/assets/zepto.png",
    description: "A high-performance, pixel-perfect clone of the Zepto quick-commerce application frontend.",
    techStack: ["React.js", "Redux Toolkit", "Tailwind CSS", "React Router"],
    features: ["Product Catalogue", "Real-time Search", "Cart Management", "Responsive UI", "Category Filtering"],
    githubLink: "https://github.com/chmp0940/Quick_comm_Zepto-React-",
    liveLink: "https://quick-comm-zepto-react-r9aj-32x97qxfe.vercel.app/",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-terminal-bg text-terminal-text-primary font-mono">
        <div className="text-center">
          <div className="text-terminal-red text-sm mb-2">Error 404</div>
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate("/")}
            className="terminal-btn-primary"
          >
            <span className="text-terminal-cyan mr-1">❯</span> cd /home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text-primary font-mono relative overflow-hidden">
      <TerminalBackground />

      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-terminal-green/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-terminal-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-terminal-green transition-colors mb-12 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> cd ../projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TerminalWindow title={`~/${project.title.toLowerCase().replace(/\s+/g, "-")}/preview`}>
              <div className="rounded-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover"
                />
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <TerminalWindow title="README.md">
              <div className="space-y-6">
                <div>
                  <div className="terminal-tag mb-3">{project.category}</div>
                  <h1 className="text-3xl md:text-4xl font-bold font-sans text-terminal-text-primary mb-3">
                    {project.title}
                  </h1>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <span className="text-slate-400">{">"} </span>
                    {project.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-terminal-cyan text-xs font-mono mb-3">
                    {"// tech_stack"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="terminal-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-terminal-cyan text-xs font-mono mb-3">
                    {"// features"}
                  </h3>
                  <ul className="space-y-1.5">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-slate-300 text-sm flex items-center gap-2">
                        <span className="text-terminal-green">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-btn-primary flex items-center gap-2 text-sm"
                    >
                      <Github className="w-4 h-4" /> View Code
                    </a>
                  )}
                  {project.liveLink && project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-btn flex items-center gap-2 text-sm border-terminal-cyan/30 text-terminal-cyan hover:bg-terminal-cyan/10"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
