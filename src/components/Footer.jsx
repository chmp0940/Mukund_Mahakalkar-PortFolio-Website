import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-terminal-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-terminal-green">❯</span>
            <span>
              &copy; {new Date().getFullYear()} Mukund Mahakalkar — Built with{" "}
              <span className="text-red-400">&lt;3</span>
            </span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span className="text-terminal-green">[</span>
            <span>Process exited with code</span>
            <span className="text-terminal-green font-bold">0</span>
            <span className="text-terminal-green">]</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/chmp0940"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terminal-green transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mukund-mahakalkar-789aa6289/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terminal-cyan transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
