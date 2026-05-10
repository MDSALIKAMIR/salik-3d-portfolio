"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";
import { SERVICES } from "@/lib/data";

export default function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          label="What I Do"
          title="My Services"
          subtitle="Comprehensive solutions to bring your vision to life"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              className="glass-card p-6 group relative overflow-hidden gradient-border-anim hoverable"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Top glow on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, #00d4ff, transparent)` }}
              />

              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at top left, rgba(0,212,255,0.05), transparent 60%)` }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4">{service.icon}</div>

                {/* Number */}
                <div className="text-5xl font-black text-white/03 font-space absolute top-4 right-4 select-none">
                  0{service.id}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 font-space group-hover:text-neon-blue transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/60">
                      <Check size={13} className="text-neon-blue flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
