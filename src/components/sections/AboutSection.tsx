"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, GraduationCap, Code2 } from "lucide-react";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";
import { PORTFOLIO_DATA } from "@/lib/data";

const stats = [
  { label: "Projects Built", value: "3+", icon: "🚀" },
  { label: "Technologies", value: "10", icon: "⚡" },
  { label: "Months Experience", value: "1", icon: "📅" },
 {/* { label: "Happy Clients", value: "5+", icon: "⭐" },*/}
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          label="Who I Am"
          title="About Me"
          subtitle="A passionate developer building the future of the web"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Avatar card */}
            <div className="relative w-full max-w-sm mx-auto">
              {/* Glow backdrop */}
              <div
                className="absolute -inset-4 rounded-2xl blur-2xl"
                style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(139,92,246,0.12))" }}
              />
              
              {/* Main card */}
              <div className="glass-card p-8 relative">
                {/* Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div
                    className="absolute inset-0 rounded-full animate-spin-slow"
                    style={{ background: "conic-gradient(from 0deg, #00d4ff, #8b5cf6, #00ffff, #00d4ff)", padding: "2px" }}
                  >
                    <div className="w-full h-full rounded-full bg-dark-700" />
                  </div>
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                  <img
                     src="/my-photo.png"
                     alt="Md Salik Amir"
                     className="w-full h-full object-cover rounded-full"
                   />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-2xl font-bold text-white text-center mb-1 font-space">
                  {PORTFOLIO_DATA.name}
                </h3>
                <p className="text-neon-blue text-center text-sm mb-6 font-space tracking-wide">
                  DevOps Enthusiast
                </p>

                {/* Details */}
                <div className="space-y-3">
                  {[
                    { Icon: MapPin, text: PORTFOLIO_DATA.location },
                    { Icon: Mail, text: PORTFOLIO_DATA.email },
                    { Icon: GraduationCap, text: "BCA Student" },
                    { Icon: Code2, text: "Open to Opportunities" },
                  ].map(({ Icon, text }, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white/60">
                      <Icon size={14} className="text-neon-blue flex-shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                {/* Status badge */}
                <div className="mt-6 flex items-center justify-center gap-2 py-2 px-4 rounded-full"
                  style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-semibold font-space tracking-wide">Available for Work</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-space">
              I turn ideas into{" "}
              <span className="gradient-text">digital realities</span>
            </h3>
            <p className="text-white/60 leading-relaxed mb-6 text-base">
              {PORTFOLIO_DATA.about}
            </p>
            <p className="text-white/50 leading-relaxed mb-10 text-base">
              When I&apos;m not coding, I&apos;m exploring the latest in web technologies,
              contributing to open-source projects, and continuously leveling up my skills
              to stay ahead in the ever-evolving tech landscape.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-black gradient-text font-space">{stat.value}</div>
                  <div className="text-white/40 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 rounded-full font-bold text-dark-900 text-sm font-space tracking-wide"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                boxShadow: "0 0 25px rgba(0,212,255,0.3)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(0,212,255,0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              Let&apos;s Work Together
            </motion.button>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
