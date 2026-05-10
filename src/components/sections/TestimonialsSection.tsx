"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          label="Kind Words"
          title="Testimonials"
          subtitle="What clients say about working with me"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              className="glass-card p-7 relative group overflow-hidden gradient-border-anim"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-10">
                <Quote size={40} className="text-neon-blue" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/60 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black font-space text-dark-900"
                  style={{ background: "linear-gradient(135deg, #00d4ff, #8b5cf6)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-space">{t.name}</div>
                  <div className="text-xs text-neon-blue">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
