import React from "react";

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-[#030014] overflow-hidden pointer-events-none">
      {/* Top Left Blob */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob"></div>
      
      {/* Top Right Blob */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animate-delay-200"></div>
      
      {/* Bottom Left Blob */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-600/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animate-delay-300"></div>
      
      {/* Bottom Right Blob */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob animate-delay-100"></div>
      
      {/* Noise Overlay Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};

export default AuroraBackground;
