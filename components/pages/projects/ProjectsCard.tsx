"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

interface Logo {
  src: string;
  alt: string;
}

interface ProjectsCardProps {
  title: string;
  description?: string;
  logos: Logo[];
  features: string[];
  features_title?: string;
  clients: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectsCard = ({
  title,
  description,
  logos,
  features,
  features_title,
  clients,
}: ProjectsCardProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="relative group/card rounded-3xl overflow-hidden
        border border-white/8
        shadow-[0_8px_40px_rgba(0,0,0,0.5)]
        hover:border-[#cc0075]/30
        hover:shadow-[0_16px_70px_rgba(204,0,117,0.15)]
        transition-all duration-500"
    >
      {/* ── Background ──────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0f1e] via-[#0d1128] to-[#0a0f1e]" />
      <div className="absolute inset-0 bg-linear-to-br from-[#cc0075]/5 via-transparent to-[#511764]/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

      {/* Ambient glows */}
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#cc0075]/8 blur-[100px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#511764]/15 blur-[80px] pointer-events-none" />

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-[#cc0075]/70 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 p-8 md:p-10 lg:p-12">
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="mb-8">
          {/* Badge + Title Row */}
          <div className="flex items-start gap-4 mb-4">
            {/* Accent bar */}
            <div className="w-1.5 h-full min-h-12 rounded-full bg-linear-to-b from-[#cc0075] to-[#511764] shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                {title}
              </h2>
              {description && (
                <p className="mt-3 text-base md:text-lg text-gray-400 leading-relaxed font-medium max-w-3xl">
                  {description}
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* ── Divider ─────────────────────────────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="h-px mb-8 bg-linear-to-r from-[#cc0075]/30 via-white/10 to-transparent"
        />

        {/* ── Main Content: Two-Column on large screens ─────────────────── */}
        <div className={`grid gap-8 grid-cols-1`}>
          {/* ── Logos Section ─────────────────────────────────────────────── */}
          {logos.length > 0 && (
            <motion.div
              variants={itemVariants}
              className={features.length > 0 ? "lg:col-span-3" : "col-span-1"}
            >
              {/* Section label */}
              <div className="flex items-center gap-2 mb-5">
                <Sparkles size={14} className="text-[#cc0075]" />
                <span className="text-xl font-bold uppercase tracking-[0.18em] text-[#cc0075]">
                  {clients}
                </span>
              </div>

              {/* Logo Grid — bigger cards */}
              <div
                className={`grid gap-4 ${
                  logos.length <= 2
                    ? "grid-cols-2"
                    : logos.length === 3
                      ? "grid-cols-3"
                      : logos.length === 4
                        ? "grid-cols-2 sm:grid-cols-4"
                        : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4"
                }`}
              >
                {logos.map((logo, index) => (
                  <motion.div
                    key={`${logo.alt}-${index}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.04, y: -3 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="group/logo relative flex items-center justify-center
                      h-24 sm:h-28 md:h-32
                      rounded-2xl overflow-hidden cursor-pointer
                      bg-white/5 border border-white/10
                      hover:bg-white/10 hover:border-[#cc0075]/40
                      hover:shadow-[0_8px_30px_rgba(204,0,117,0.2)]
                      transition-all duration-300"
                  >
                    {/* Hover glow overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-[#cc0075]/8 to-[#511764]/8 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300" />

                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain px-1 sm:p-2
                        transition-all duration-400 scale-90 group-hover/logo:scale-100"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Features Section ──────────────────────────────────────────── */}
          {features.length > 0 && (
            <motion.div
              variants={itemVariants}
              className={logos.length > 0 ? "lg:col-span-2" : "col-span-1"}
            >
              {/* Section label */}
              {features_title && (
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-4 h-[2px] rounded-full bg-linear-to-r from-[#511764] to-[#cc0075]" />
                  <span className="text-base font-bold uppercase tracking-[0.18em] text-[#cc0075]">
                    {features_title}
                  </span>
                </div>
              )}

              {/* Features list */}
              <ul className="flex flex-col gap-3">
                {features.map((feature, index) => (
                  <motion.li
                    key={`${feature}-${index}`}
                    variants={itemVariants}
                    className="group/feat flex items-start gap-3
                      p-3.5 rounded-xl
                      bg-white/3 border border-white/6
                      hover:bg-[#cc0075]/8 hover:border-[#cc0075]/25
                      transition-all duration-300"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#cc0075] shrink-0 mt-0.5 group-hover/feat:scale-110 transition-transform duration-200"
                    />
                    <span className="text-sm sm:text-lg font-medium text-gray-300 group-hover/feat:text-white transition-colors duration-200 leading-snug">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-[#cc0075]/8 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectsCard;
