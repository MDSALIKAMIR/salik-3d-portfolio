"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";
import { EXPERIENCE } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle
          label="Journey"
          title="My Experience"
          subtitle="The path that shaped my expertise"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                className={`flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                {/* Content (desktop: half width) */}
                <div className="flex-1 pl-16 md:pl-0">
                  <div
                    className="glass-card p-6 relative group overflow-hidden"
                    style={{
                      marginLeft: "2rem",
                    }}
                  >
                    {/* Top border glow on hover */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: "linear-gradient(90deg, transparent, #00d4ff, transparent)" }} />

                    {/* Year badge */}
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold font-mono mb-3"
                      style={{
                        background: "rgba(0,212,255,0.08)",
                        border: "1px solid rgba(0,212,255,0.2)",
                        color: "#00d4ff",
                      }}
                    >
                      {exp.year}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 font-space">
                      {exp.title}
                    </h3>
                    <p className="text-neon-blue text-sm mb-3 font-space">{exp.company}</p>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-full text-xs font-semibold font-mono"
                          style={{
                            background: "rgba(139,92,246,0.08)",
                            border: "1px solid rgba(139,92,246,0.2)",
                            color: "#8b5cf6",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-6">
                  <motion.div
                    className="w-4 h-4 rounded-full border-2 border-neon-blue bg-dark-900"
                    style={{ boxShadow: "0 0 12px #00d4ff, 0 0 24px rgba(0,212,255,0.4)" }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
