import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";

const Contact = () => {
    return (
      <section id="contact" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6">
            <div className="glass-panel p-10 md:p-16 text-center relative overflow-hidden">
                {/* Decorative Gradients */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
                    <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">
                        Have a project in mind? Let's create something extraordinary together.
                    </p>

                    <form 
                        action="mailto:mukundmahakalkar0904@gmail.com"
                        method="POST"
                        encType="text/plain"
                        className="max-w-md mx-auto space-y-4"
                    >
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Your Name" 
                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all placeholder-gray-500 text-white"
                        />
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Your Email" 
                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all placeholder-gray-500 text-white"
                        />
                        <textarea 
                            rows="4"
                            name="message"
                            placeholder="Your Message" 
                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all placeholder-gray-500 text-white resize-none"
                        ></textarea>
                        
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-shadow"
                        >
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                        </motion.button>
                    </form>
                    
                    <div className="mt-12 flex justify-center gap-8 text-sm text-gray-400">
                        <a href="mailto:mukundmahakalkar0904@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail className="w-4 h-4" /> mukundmahakalkar0904@gmail.com
                        </a>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> Bhopal, India
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>
    );
};

export default Contact;
