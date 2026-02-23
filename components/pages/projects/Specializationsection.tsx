"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Logo {
  src: string;
  alt: string;
}

interface SpecializationSectionProps {
  title: string;
  description?: string;
  logos: Logo[];
  features: string[];
  features_title?: string;
  clients: string;
}

// ─── Animation Variants ──────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

const SpecializationSection = ({
  title,
  description,
  logos,
  features,
  features_title,
  clients,
}: SpecializationSectionProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="relative group/card rounded-3xl overflow-hidden
        bg-[#0a0f1e]/80 backdrop-blur-sm
        border border-white/8
        shadow-[0_8px_40px_rgba(0,0,0,0.4)]
        hover:border-[#cc0075]/30
        hover:shadow-[0_12px_60px_rgba(204,0,117,0.12)]
        transition-all duration-500 p-8 md:p-10"
    >
      {/* ── Background Glow ──────────────────────────────────────────────── */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#cc0075]/10 blur-[80px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#511764]/20 blur-[60px] pointer-events-none" />

      {/* ── Top Accent Line ──────────────────────────────────────────────── */}
      <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#cc0075]/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col gap-8">
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          {/* Title with left accent bar */}
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#cc0075] to-[#511764] shrink-0" />
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {title}
            </h2>
          </div>

          {/* Description */}
          {description && (
            <p className="text-base text-gray-400 leading-relaxed font-medium pl-5 border-l border-white/5">
              {description}
            </p>
          )}
        </motion.div>

        {/* ── Divider ─────────────────────────────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-gradient-to-r from-[#cc0075]/20 via-white/8 to-transparent"
        />

        {/* ── Logos Grid ──────────────────────────────────────────────────── */}
        {logos.length > 0 && (
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#cc0075]/80">
              {clients}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {logos.map((logo, index) => (
                <motion.div
                  key={`${logo.alt}-${index}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group/logo relative flex items-center justify-center
                    h-16 rounded-2xl
                    bg-white/4 border border-white/8
                    hover:bg-white/8 hover:border-[#cc0075]/30
                    hover:shadow-[0_4px_20px_rgba(204,0,117,0.15)]
                    transition-all duration-300 overflow-hidden cursor-pointer p-3"
                >
                  {/* Inner glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#cc0075]/5 to-transparent opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300" />

                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-3 filter grayscale opacity-60
                      group-hover/logo:grayscale-0 group-hover/logo:opacity-100
                      transition-all duration-400"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Features List ────────────────────────────────────────────────── */}
        {features.length > 0 && (
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#511764]/90">
              {features_title}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.li
                  key={`${feature}-${index}`}
                  variants={itemVariants}
                  className="group/feat flex items-start gap-3
                    p-3 rounded-xl
                    bg-white/3 border border-white/5
                    hover:bg-[#cc0075]/5 hover:border-[#cc0075]/20
                    transition-all duration-300"
                >
                  <CheckCircle2
                    size={17}
                    className="text-[#cc0075] shrink-0 mt-0.5 group-hover/feat:scale-110 transition-transform duration-200"
                  />
                  <span className="text-sm font-medium text-gray-300 group-hover/feat:text-white transition-colors duration-200 leading-snug">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SpecializationSection;
