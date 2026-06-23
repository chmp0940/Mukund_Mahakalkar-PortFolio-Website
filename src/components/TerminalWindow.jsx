import React from "react";

const TerminalWindow = ({ title = "terminal", children, className = "", noPadding = false }) => {
  return (
    <div className={`terminal-window group transition-all duration-500 ${className}`}>
      {/* Title Bar */}
      <div className="terminal-titlebar">
        <div className="flex items-center gap-2">
          <div className="terminal-dot terminal-dot-red opacity-70 group-hover:opacity-100 transition-opacity" />
          <div className="terminal-dot terminal-dot-yellow opacity-70 group-hover:opacity-100 transition-opacity" />
          <div className="terminal-dot terminal-dot-green opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="text-xs text-slate-300 font-mono ml-3 tracking-wider">
          {title}
        </span>
        <div className="ml-auto flex items-center gap-3 text-slate-400 text-xs font-mono">
          <span className="hidden sm:inline">bash</span>
        </div>
      </div>
      {/* Content */}
      <div className={noPadding ? "" : "p-5 md:p-6"}>
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
