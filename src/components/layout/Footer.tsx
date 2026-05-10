"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Heart } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            className="text-2xl font-black font-space gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            MSA<span className="text-white">.</span>
          </motion.div>

          {/* Copyright */}
          <p className="text-white/40 text-sm flex items-center gap-2">
            © {currentYear} {PORTFOLIO_DATA.name}. Made with{" "}
            <Heart size={14} className="text-red-500 fill-red-500" /> in Bihar, India
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Github, href: PORTFOLIO_DATA.social.github, label: "GitHub" },
              { Icon: Linkedin, href: PORTFOLIO_DATA.social.linkedin, label: "LinkedIn" },
              { Icon: Instagram, href: PORTFOLIO_DATA.social.instagram, label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/50 hover:text-neon-blue hover:border-neon-blue/30 transition-all border border-white/10"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
