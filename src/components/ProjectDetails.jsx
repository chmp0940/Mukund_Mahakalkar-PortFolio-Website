import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

const projectData = {
  1: {
    title: "ShopEasy",
    category: "Full Stack E-Commerce",
    image: "/src/assets/shopeasy.png",
    description: "A comprehensive e-commerce platform with improved user experience.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    features: ["User Authentication", "Product Search", "Cart Management", "Order Processing"],
    githubLink: "https://github.com/chmp0940/ShopEasy",
    liveLink: "https://shopeasy-1-u9f1.onrender.com"
  },
  2: {
    title: "MicroMedia",
    category: "Backend Microservices",
    image: "/src/assets/micromedia.png",
    description: "A scalable backend architecture using microservices.",
    techStack: ["Go", "gRPC", "Docker", "Kubernetes"],
    features: ["Service Discovery", "Load Balancing", "Inter-service Communication", "Distributed Tracing"],
    githubLink: "https://github.com/chmp0940/Social_Media_MicroServices",
    liveLink: "https://github.com/chmp0940/Social_Media_MicroServices"
  },
  3: {
    title: "NextJsAuth",
    category: "Authentication System",
    image: "/src/assets/nextjsauth.png", 
    description: "Secure and robust authentication system built with Next.js.",
    techStack: ["Next.js", "NextAuth.js", "TypeScript", "Prisma"],
    features: ["OAuth Providers", "Email/Password Login", "Session Management", "Protected Routes"],
    githubLink: "https://github.com/chmp0940/NextJsAuth",
    liveLink: "https://next-js-auth-c54u-hzst43akz-mukund-mahakalkars-projects.vercel.app/"
  },
  4: {
    title: "VidTube Backend",
    category: "Video Streaming Backend",
    image: "/src/assets/vidtube.png",
    description: "A robust and scalable backend infrastructure for a video hosting platform similar to YouTube. Handles video uploads, processing, and streaming.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary", "Multer"],
    features: ["Video Upload & Processing", "JWT Authentication", "Like/Dislike System", "Comment Threads", "View Counting"],
    githubLink: "https://github.com/chmp0940/VidTube---Backend-Project",
    liveLink: "" 
  },
  5: {
    title: "Quick Comm (Zepto Clone)",
    category: "Q-Commerce Frontend",
    image: "/src/assets/zepto.png",
    description: "A high-performance, pixel-perfect clone of the Zepto quick-commerce application frontend.",
    techStack: ["React.js", "Redux Toolkit", "Tailwind CSS", "React Router"],
    features: ["Product Catalogue", "Real-time Search", "Cart Management", "Responsive UI", "Category Filtering"],
    githubLink: "https://github.com/chmp0940/Quick_comm_Zepto-React-",
    liveLink: "https://quick-comm-zepto-react-r9aj-32x97qxfe.vercel.app/"
  }
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
      <div className="min-h-screen flex items-center justify-center bg-[#030014] text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button 
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-5 h-5" /> Back to Projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img src={project.image} alt={project.title} className="w-full object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card px-4 py-1 rounded-full text-xs font-bold text-purple-400 mb-4 w-fit border border-purple-500/20">
              {project.category}
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {project.title}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="mb-8">
               <h3 className="text-xl font-semibold mb-4 text-white">Tech Stack</h3>
               <div className="flex flex-wrap gap-3">
                 {project.techStack.map((tech) => (
                   <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
                     {tech}
                   </span>
                 ))}
               </div>
            </div>

            <div className="mb-10">
               <h3 className="text-xl font-semibold mb-4 text-white">Key Features</h3>
               <ul className="list-disc list-inside space-y-2 text-gray-300">
                 {project.features.map((feature) => (
                   <li key={feature}>{feature}</li>
                 ))}
               </ul>
            </div>

            <div className="flex gap-6">
              {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                    <Github className="w-5 h-5" /> View Code
                  </a>
              )}
              {project.liveLink && project.liveLink !== "#" && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10">
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
