"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";
import { PROJECTS } from "@/lib/data";

function ProjectCard({
  project,
  i,
  onOpen,
}: {
  project: typeof PROJECTS[0];
  i: number;
  onOpen: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="glass-card overflow-hidden cursor-pointer group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.7 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease", transformStyle: "preserve-3d" }}
      onClick={onOpen}
    >
      {/* Gradient header */}
      <div
        className="relative h-48 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}22, rgba(139,92,246,0.15))` }}
      >
        {/* Pattern */}
        <div className="absolute inset-0 cyber-grid opacity-40" />

        {/* Floating project icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-20 h-20 rounded-2xl glass flex items-center justify-center"
            style={{ border: `1px solid ${project.color}40` }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-3xl">
              {i === 0 ? "🛒" : i === 1 ? "🎯" : "🔢"}
            </span>
          </motion.div>
        </div>

        {/* Category badge */}
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold font-space"
          style={{
            background: `${project.color}22`,
            border: `1px solid ${project.color}40`,
            color: project.color,
          }}
        >
          {project.category}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-dark-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-white/70 text-sm font-semibold font-space">Click to Preview</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 font-space group-hover:text-neon-blue transition-colors">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-xs font-semibold font-mono"
              style={{
                background: "rgba(0,212,255,0.06)",
                border: "1px solid rgba(0,212,255,0.15)",
                color: "#00d4ff",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white/60 hover:text-white transition-all font-space glass"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Github size={13} />
            Code
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold font-space text-dark-900"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: `linear-gradient(135deg, ${project.color}, #8b5cf6)`,
              boxShadow: `0 0 15px ${project.color}40`,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <ExternalLink size={13} />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          label="Portfolio"
          title="My Projects"
          subtitle="Showcasing my best work and creative solutions"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              i={i}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-dark-900/90 backdrop-blur-xl"
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal card */}
              <motion.div
                className="relative glass-card w-full max-w-lg"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                transition={{ type: "spring", damping: 20 }}
              >
                {/* Close */}
                <button
                  className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-white/50 hover:text-white z-10"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={16} />
                </button>

                {/* Header */}
                <div
                  className="h-40 rounded-t-2xl relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${selectedProject.color}30, rgba(139,92,246,0.2))` }}
                >
                  <div className="absolute inset-0 cyber-grid opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-3xl"
                      style={{ border: `1px solid ${selectedProject.color}40` }}
                    >
                      {selectedProject.id === 1 ? "🛒" : selectedProject.id === 2 ? "🎯" : "🔢"}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-space">
                    {selectedProject.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-full text-xs font-bold font-mono"
                        style={{
                          background: "rgba(0,212,255,0.08)",
                          border: "1px solid rgba(0,212,255,0.2)",
                          color: "#00d4ff",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold glass text-white/70 hover:text-white transition-all font-space"
                      style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      <Github size={15} /> View Code
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold text-dark-900 font-space"
                      style={{
                        background: `linear-gradient(135deg, ${selectedProject.color}, #8b5cf6)`,
                        boxShadow: `0 0 20px ${selectedProject.color}50`,
                      }}
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
