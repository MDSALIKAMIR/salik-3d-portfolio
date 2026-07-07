"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";
import { CERTIFICATES } from "@/lib/data";
import CertificateModal from "@/components/ui/CertificateModal";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function CertificateSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const navigateTo = (index: number) => setSelectedIndex(index);

  return (
    <section
      id="certificate"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-cyan-300 bg-white/5 border border-white/10 backdrop-blur-md">
            <Award size={14} />
            CREDENTIALS
          </span>
          <h2 className="mt-5 text-3xl sm:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-sm sm:text-base">
            Verified achievements from my continuous learning journey across
            cloud, security, and modern development.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {CERTIFICATES.map((cert, index) => (
            <motion.button
              key={cert.id}
              variants={cardVariants}
              onClick={() => openModal(index)}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="
                group relative text-left rounded-2xl overflow-hidden
                border border-white/10 bg-white/[0.03] backdrop-blur-xl
                p-4 sm:p-5 transition-all duration-300
                hover:border-cyan-400/40
                hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60
              "
            >
              {/* Glow ring on hover */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-2xl opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                  bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10
                "
              />

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-black/30">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="relative mt-4 space-y-1.5">
                <h3 className="font-semibold text-white text-base sm:text-lg leading-snug line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-white/50">{cert.issuer}</p>
                <p className="text-xs text-cyan-300/70">{cert.date}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <CertificateModal
        certificates={CERTIFICATES}
        selectedIndex={selectedIndex}
        onClose={closeModal}
        onNavigate={navigateTo}
      />
    </section>
  );
}