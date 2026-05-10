"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Instagram, Download, ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";
import { PORTFOLIO_DATA } from "@/lib/data";

const HeroModel = dynamic(() => import("@/components/3d/HeroModel"), { ssr: false });
const Scene3D = dynamic(() => import("@/components/3d/Scene3D"), { ssr: false });

export default function HeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null);

  // CSS particle effect
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    for (let i = 0; i < 40; i++) {
      const p = document.createElement("div");
      p.className = "absolute rounded-full pointer-events-none";
      const size = Math.random() * 4 + 1;
      const isBlue = Math.random() > 0.5;
      p.style.cssText = `
        width: ${size}px; height: ${size}px;
        background: ${isBlue ? "#00d4ff" : "#8b5cf6"};
        left: ${Math.random() * 100}%;
        animation: particle-float ${Math.random() * 15 + 10}s linear ${Math.random() * 10}s infinite;
        opacity: 0;
        box-shadow: 0 0 ${size * 3}px ${isBlue ? "#00d4ff" : "#8b5cf6"};
      `;
      container.appendChild(p);
    }
    return () => { if (container) container.innerHTML = ""; };
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 3D Star Background */}
      <Scene3D />

      {/* Particle field */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold tracking-widest text-neon-blue uppercase mb-8 font-space"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ border: "1px solid rgba(0,212,255,0.2)" }}
            >
              <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
              Available for Work
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl md:text-6xl xl:text-7xl font-black font-space leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-white">Hi, I&apos;m</span>
              <br />
              <span className="gradient-text">Md Salik</span>
              <br />
              <span className="text-white">Amir</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              className="text-xl md:text-2xl font-semibold text-white/70 mb-6 font-space h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer", 2000,
                  "Frontend Developer", 2000,
                  "MERN Stack Developer", 2000,
                  "UI/UX Designer", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ color: "#00d4ff" }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {PORTFOLIO_DATA.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 rounded-full font-bold text-dark-900 font-space text-sm tracking-wide"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                  boxShadow: "0 0 30px rgba(0,212,255,0.35)",
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,212,255,0.55)" }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.button>

              <motion.a
                href="/resume.pdf" 
                download
                className="px-8 py-3.5 rounded-full font-bold text-neon-blue text-sm font-space tracking-wide flex items-center gap-2 glass"
                style={{ border: "1px solid rgba(0,212,255,0.3)" }}
                whileHover={{ scale: 1.05, borderColor: "#00d4ff" }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-white/30 text-xs tracking-widest font-space">FOLLOW ME</span>
              <div className="w-12 h-0.5 bg-white/10" />
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
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-neon-blue transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Model */}
          <motion.div
            className="relative h-[420px] lg:h-[560px] hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)" }}
            />
            <HeroModel />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-neon-blue transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest font-space">SCROLL</span>
          <ArrowDown size={16} />
        </motion.button>
      </div>
    </section>
  );
}
