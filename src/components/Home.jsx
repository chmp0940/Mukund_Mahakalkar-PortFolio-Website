import React, { useState, Suspense } from "react";
import TerminalBoot from "./TerminalBoot";
import TerminalInterface from "./TerminalInterface";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievements from "./Achievements";
import CodingProfiles from "./CodingProfiles";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [phase, setPhase] = useState("boot"); // "boot" | "terminal" | "gui"

  return (
    <div className="relative min-h-screen bg-terminal-bg text-terminal-text-primary font-mono selection:bg-terminal-green/20 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {/* Phase 1: Boot Sequence */}
        {phase === "boot" && (
          <TerminalBoot
            key="boot"
            onComplete={() => setPhase("terminal")}
          />
        )}

        {/* Phase 2: Interactive Terminal */}
        {phase === "terminal" && (
          <motion.div
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TerminalInterface
              onSwitchToGUI={() => setPhase("gui")}
            />
          </motion.div>
        )}

        {/* Phase 3: Full GUI Mode */}
        {phase === "gui" && (
          <motion.div
            key="gui"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar onSwitchToTerminal={() => setPhase("terminal")} />
            <main className="relative z-10 w-full">
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Achievements />
              <CodingProfiles />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
