"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";
import { SKILLS } from "@/lib/data";

const CATEGORIES = ["all", "frontend", "backend", "Automation", "tools"];

function SkillBar({ skill, inView }: { skill: typeof SKILLS[0]; inView: boolean }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-bold text-neon-blue font-mono">
          {skill.level}%
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: "0%" }}
          animate={inView ? { width: `${skill.level}%` } : { width: "0%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </div>
    </div>
  );
}

function SkillCard({ skill, i }: { skill: typeof SKILLS[0]; i: number }) {
  return (
    <motion.div
      className="glass-card p-5 text-center group hoverable relative overflow-hidden gradient-border-anim"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.06 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{ background: "radial-gradient(circle at center, rgba(0,212,255,0.06), transparent 70%)" }}
      />

      <div className="relative z-10">
        <div className="text-3xl mb-3">{skill.icon}</div>
        <div className="text-sm font-bold text-white/80 group-hover:text-white transition-colors mb-2">
          {skill.name}
        </div>

        {/* Mini progress ring */}
        <svg className="w-10 h-10 mx-auto" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="2.5"
          />
          <motion.path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#00d4ff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={`${skill.level}, 100`}
            initial={{ strokeDasharray: "0, 100" }}
            whileInView={{ strokeDasharray: `${skill.level}, 100` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: i * 0.05 }}
            style={{ filter: "drop-shadow(0 0 4px #00d4ff)" }}
          />
          <text x="18" y="21" textAnchor="middle" fontSize="8" fill="#00d4ff" fontWeight="700">
            {skill.level}
          </text>
        </svg>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const filtered = activeCategory === "all"
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <SectionWrapper id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          label="Expertise"
          title="My Skills"
          subtitle="Technologies I work with to build exceptional experiences"
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold font-space capitalize transition-all"
              style={
                activeCategory === cat
                  ? {
                      background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                      color: "#030008",
                      boxShadow: "0 0 20px rgba(0,212,255,0.3)",
                    }
                  : {
                      background: "rgba(255,255,255,0.04)",
                      color: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Progress bars */}
          <div ref={ref} className="space-y-6">
            <motion.h3
              className="text-lg font-bold text-white/70 mb-6 font-space"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Proficiency Levels
            </motion.h3>
            {filtered.map((skill) => (
              <SkillBar key={skill.name} skill={skill} inView={inView} />
            ))}
          </div>

          {/* Skill cards grid */}
          <div>
            <motion.h3
              className="text-lg font-bold text-white/70 mb-6 font-space"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Technology Cards
            </motion.h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {filtered.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
