import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import TerminalWindow from "./TerminalWindow";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-comment">Contact</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
            Let's <span className="glow-green">Connect</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TerminalWindow title="contact-form.sh">
            <div className="text-slate-400 text-xs font-mono mb-6">
              {"// Have a project in mind? Let's create something extraordinary."}
            </div>

            <form
              action="mailto:mukundmahakalkar0904@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label className="text-terminal-cyan text-xs font-mono mb-1.5 block">
                  {">"} name:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-terminal-bg border border-terminal-border rounded-md 
                           focus:outline-none focus:border-terminal-green/50 focus:shadow-[0_0_10px_rgba(0,255,65,0.1)]
                           transition-all placeholder-terminal-text-muted text-terminal-text-primary font-mono text-sm"
                />
              </div>

              <div>
                <label className="text-terminal-cyan text-xs font-mono mb-1.5 block">
                  {">"} email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-terminal-bg border border-terminal-border rounded-md 
                           focus:outline-none focus:border-terminal-green/50 focus:shadow-[0_0_10px_rgba(0,255,65,0.1)]
                           transition-all placeholder-terminal-text-muted text-terminal-text-primary font-mono text-sm"
                />
              </div>

              <div>
                <label className="text-terminal-cyan text-xs font-mono mb-1.5 block">
                  {">"} message:
                </label>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-terminal-bg border border-terminal-border rounded-md 
                           focus:outline-none focus:border-terminal-green/50 focus:shadow-[0_0_10px_rgba(0,255,65,0.1)]
                           transition-all placeholder-terminal-text-muted text-terminal-text-primary font-mono text-sm resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full terminal-btn-primary py-3.5 flex items-center justify-center gap-2 text-sm"
              >
                <span className="text-terminal-cyan">❯</span>
                send_message --to mukund
                <Send className="w-3.5 h-3.5" />
              </motion.button>
            </form>

            <div className="mt-8 pt-6 border-t border-terminal-border flex flex-col sm:flex-row justify-center gap-6 text-xs font-mono text-slate-300">
              <a
                href="mailto:mukundmahakalkar0904@gmail.com"
                className="flex items-center gap-2 hover:text-terminal-green transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> mukundmahakalkar0904@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" /> Bhopal, India
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
