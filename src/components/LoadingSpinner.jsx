import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-terminal-bg">
      <div className="text-center font-mono">
        <div className="text-terminal-green text-sm animate-pulse mb-2">Loading...</div>
        <div className="flex items-center gap-1 text-slate-400 text-xs">
          <span>[</span>
          <div className="w-32 h-1 bg-terminal-border rounded-full overflow-hidden">
            <div className="h-full bg-terminal-green/50 rounded-full animate-pulse" style={{ width: "60%" }} />
          </div>
          <span>]</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
