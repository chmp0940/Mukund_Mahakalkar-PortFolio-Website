import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 relative">
        <div className="flex flex-col items-center gap-2">
            <p>&copy; {new Date().getFullYear()} Designed & Built with <Heart className="w-3 h-3 inline text-pink-500 fill-current" /> by Mukund</p>
            <div className="flex gap-4 opacity-50">
                <a href="https://github.com/chmp0940" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/mukund-mahakalkar-789aa6289/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
