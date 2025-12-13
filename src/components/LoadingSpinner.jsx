import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-aurora-bg flex items-center justify-center z-50">
      <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-white/10 border-t-purple-500 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-white/10 blur-xl animate-pulse "></div>
          </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
