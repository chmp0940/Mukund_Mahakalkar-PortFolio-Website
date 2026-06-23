import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  { text: "BIOS v3.14.159 — Mukund Systems Inc.", color: "text-slate-400", delay: 0 },
  { text: "Performing memory check... 16384 MB OK", color: "text-slate-300", delay: 150 },
  { text: "", color: "", delay: 100 },
  { text: "[  OK  ] Initializing kernel modules...", color: "text-terminal-green", delay: 200 },
  { text: "[  OK  ] Loading developer profile...", color: "text-terminal-green", delay: 200 },
  { text: "[  OK  ] Mounting /skills — 22 packages found", color: "text-terminal-green", delay: 250 },
  { text: "[  OK  ] Mounting /projects — 5 repositories indexed", color: "text-terminal-green", delay: 200 },
  { text: "[  OK  ] Connecting to LeetCode... 700+ problems ✓", color: "text-terminal-amber", delay: 300 },
  { text: "[  OK  ] Knight badge verified 🏅", color: "text-terminal-amber", delay: 200 },
  { text: "[  OK  ] Loading portfolio interface...", color: "text-terminal-green", delay: 250 },
  { text: "", color: "", delay: 100 },
];

const ASCII_NAME = `
  __  __ _    _ _  ___    _ _   _ _____  
 |  \\/  | |  | | |/ / |  | | \\ | |  __ \\ 
 | \\  / | |  | | ' /| |  | |  \\| | |  | |
 | |\\/| | |  | |  < | |  | | . \` | |  | |
 | |  | | |__| | . \\| |__| | |\\  | |__| |
 |_|  |_|\\____/|_|\\_\\\\____/|_| \\_|_____/ 
`;

const TerminalBoot = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [showAscii, setShowAscii] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showEnter, setShowEnter] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let totalDelay = 300;
    const timeouts = [];

    BOOT_LINES.forEach((line, index) => {
      totalDelay += line.delay;
      timeouts.push(
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, line]);
        }, totalDelay)
      );
    });

    // Show ASCII art after boot lines
    timeouts.push(
      setTimeout(() => setShowAscii(true), totalDelay + 400)
    );

    // Show progress bar
    timeouts.push(
      setTimeout(() => setShowProgress(true), totalDelay + 1000)
    );

    // Animate progress
    timeouts.push(
      setTimeout(() => {
        let p = 0;
        const interval = setInterval(() => {
          p += 3;
          if (p >= 100) {
            p = 100;
            clearInterval(interval);
            setTimeout(() => setShowEnter(true), 400);
          }
          setProgress(p);
        }, 30);
        timeouts.push(interval);
      }, totalDelay + 1200)
    );

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, []);

  const handleEnter = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => onComplete(), 600);
  }, [onComplete]);

  // Allow pressing Enter or clicking to skip
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Enter" && showEnter) {
        handleEnter();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showEnter, handleEnter]);

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-terminal-bg flex items-center justify-center scanline-overlay overflow-hidden"
        >
          <div className="w-full max-w-3xl px-6 md:px-8">
            {/* Boot Lines */}
            <div className="font-mono text-sm space-y-1 mb-6">
              {visibleLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={line.color}
                >
                  {line.text || "\u00A0"}
                </motion.div>
              ))}
            </div>

            {/* ASCII Name */}
            <AnimatePresence>
              {showAscii && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6 overflow-x-auto"
                >
                  <pre className="ascii-art">{ASCII_NAME}</pre>
                  <div className="text-slate-300 text-xs font-mono mt-2 tracking-widest">
                    Full Stack Developer • Competitive Programmer • IIIT Bhopal
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress Bar */}
            <AnimatePresence>
              {showProgress && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-slate-400 text-xs font-mono">
                      Initializing portfolio
                    </span>
                    <span className="text-terminal-green text-xs font-mono">
                      {progress}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-terminal-border rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        width: `${progress}%`,
                        background: "linear-gradient(90deg, #00ff41, #00d4ff)",
                        boxShadow: "0 0 10px rgba(0, 255, 65, 0.4)",
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Enter Prompt */}
            <AnimatePresence>
              {showEnter && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <button
                    onClick={handleEnter}
                    className="font-mono text-sm text-terminal-green hover:text-white transition-colors group"
                  >
                    <span className="animate-blink text-terminal-cyan mr-2">❯</span>
                    Press <span className="border border-terminal-green/40 px-2 py-0.5 rounded text-xs mx-1 group-hover:bg-terminal-green/10 transition-colors">Enter</span> or click to continue
                    <span className="animate-blink ml-1">█</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Skip button */}
            {!showEnter && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1 }}
                whileHover={{ opacity: 1 }}
                onClick={() => {
                  setIsExiting(true);
                  setTimeout(onComplete, 300);
                }}
                className="fixed bottom-6 right-6 text-xs font-mono text-slate-400 hover:text-terminal-green transition-colors"
              >
                skip → 
              </motion.button>
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default TerminalBoot;
