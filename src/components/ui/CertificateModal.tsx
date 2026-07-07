"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import type { Certificate } from "@/lib/data";

interface CertificateModalProps {
  certificates: Certificate[];
  selectedIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function CertificateModal({
  certificates,
  selectedIndex,
  onClose,
  onNavigate,
}: CertificateModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const isOpen = selectedIndex !== null;
  const certificate =
    selectedIndex !== null ? certificates[selectedIndex] : null;

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    const newIndex =
      (selectedIndex - 1 + certificates.length) % certificates.length;
    onNavigate(newIndex);
  }, [selectedIndex, certificates.length, onNavigate]);

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    const newIndex = (selectedIndex + 1) % certificates.length;
    onNavigate(newIndex);
  }, [selectedIndex, certificates.length, onNavigate]);

  // ESC key + arrow key navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goPrev, goNext]);

  // Outside click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && certificate && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={handleBackdropClick}
        >
          {/* Blurred backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

          {/* Modal box */}
          <motion.div
            ref={modalRef}
            className="
              relative w-[90%] lg:w-[70%] max-h-[88vh] overflow-y-auto
              rounded-2xl border border-white/10
              bg-white/5 backdrop-blur-2xl
              shadow-[0_0_60px_rgba(34,211,238,0.15)]
              ring-1 ring-cyan-400/10
            "
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="
                absolute top-4 right-4 z-10 p-2 rounded-full
                bg-white/10 border border-white/10 backdrop-blur-md
                text-white/80 hover:text-white hover:bg-white/20
                hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]
                transition-all duration-200
              "
            >
              <X size={20} />
            </button>

            {/* Prev button */}
            {certificates.length > 1 && (
              <button
                onClick={goPrev}
                aria-label="Previous certificate"
                className="
                  absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full
                  bg-white/10 border border-white/10 backdrop-blur-md
                  text-white/80 hover:text-white hover:bg-white/20
                  hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]
                  transition-all duration-200
                "
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Next button */}
            {certificates.length > 1 && (
              <button
                onClick={goNext}
                aria-label="Next certificate"
                className="
                  absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full
                  bg-white/10 border border-white/10 backdrop-blur-md
                  text-white/80 hover:text-white hover:bg-white/20
                  hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]
                  transition-all duration-200
                "
              >
                <ChevronRight size={22} />
              </button>
            )}

            {/* Content */}
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-10"
            >
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black/30">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 70vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-6 space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  {certificate.title}
                </h2>

                <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                  <span>{certificate.issuer}</span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span>{certificate.date}</span>
                </div>

                {certificate.description && (
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                    {certificate.description}
                  </p>
                )}

                {certificate.skills && certificate.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1 rounded-full text-xs font-medium
                          bg-white/5 border border-white/10 text-cyan-300
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-lg
                      bg-gradient-to-r from-cyan-500/20 to-purple-500/20
                      border border-cyan-400/30 text-cyan-200 text-sm font-medium
                      hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
                      hover:border-cyan-400/60 transition-all duration-200
                    "
                  >
                    View Credential <ExternalLink size={16} />
                  </a>
                )}

                {certificates.length > 1 && (
                  <p className="text-xs text-white/40 pt-4">
                    {selectedIndex! + 1} / {certificates.length}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}