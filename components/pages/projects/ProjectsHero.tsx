"use client";

import { SectionProps } from "@/types/constants";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
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
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

const ProjectsHero = ({ dict, locale = "ar" }: SectionProps) => {
  const isRtl = locale === "ar";

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="relative group/card rounded-3xl overflow-hidden
        border border-white/8
        shadow-[0_8px_40px_rgba(0,0,0,0.5)]
        hover:border-[#cc0075]/30
        hover:shadow-[0_16px_70px_rgba(204,0,117,0.15)]
        transition-all mb-10 duration-500"
    >
      {/* ── Background ───────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0f1e] via-[#13193b] to-[#0a0f1e]" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#cc0075 1px, transparent 1px), linear-gradient(90deg, #cc0075 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hover gradient tint */}
      <div className="absolute inset-0 bg-linear-to-br from-[#cc0075]/5 via-transparent to-[#511764]/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

      {/* Ambient glows */}
      <div className="absolute -top-24 -end-24 w-72 h-72 rounded-full bg-[#cc0075]/10 blur-[90px] pointer-events-none" />
      <div className="absolute -bottom-20 -start-20 w-64 h-64 rounded-full bg-[#511764]/15 blur-[80px] pointer-events-none" />
      <div className="absolute -top-32 -end-32 w-80 h-80 rounded-full bg-[#cc0075]/8 blur-[100px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 start-0 end-0 h-[2px] bg-linear-to-r from-transparent via-[#cc0075]/70 to-transparent opacity-100 transition-opacity duration-500" />

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 p-8 md:p-10 lg:p-12">
        {/* ── Badge ───────────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="mb-3">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            text-sm font-bold tracking-[0.16em] uppercase
            bg-[#cc0075]/10 border border-[#cc0075]/30 text-[#cc0075]"
          >
            <Sparkles size={12} />
            {dict.projects.badge}
          </span>
        </motion.div>

        {/* ── Two-column layout ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* ── Col 1 — Title + Description ──────────────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 flex flex-col gap-5"
          >
            {/* Title with accent bar */}
            <div className="flex items-start gap-4">
              <div className="w-1.5 min-h-12 rounded-full bg-linear-to-b from-[#cc0075] to-[#511764] shrink-0 mt-1" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                <span className="bg-linear-to-l from-[#cc0075] via-[#e040a0] to-[#bf34ed] bg-clip-text text-transparent">
                  {dict.projects.title}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-medium">
              {dict.projects.description}
            </p>

            {/* Sub-note */}
            <p className="text-base text-gray-400 border-s-2 border-[#cc0075]/40 ps-4 leading-relaxed">
              {dict.projects.sub_note}
            </p>
          </motion.div>

          {/* ── Col 2 — Pillars ──────────────────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {dict.projects.pillars.map((pillar, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: isRtl ? -4 : 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group/pillar flex items-center gap-4
                  p-4 rounded-2xl
                  bg-white/3 border border-white/6
                  hover:bg-[#cc0075]/8 hover:border-[#cc0075]/25
                  hover:shadow-[0_4px_24px_rgba(204,0,117,0.12)]
                  transition-all duration-300 cursor-default"
              >
                {/* Icon box */}
                <div
                  className="shrink-0 w-10 h-10 rounded-xl
                  bg-linear-to-br from-[#cc0075]/15 to-[#511764]/15
                  border border-white/8
                  group-hover/pillar:border-[#cc0075]/35
                  group-hover/pillar:from-[#cc0075]/25 group-hover/pillar:to-[#511764]/25
                  flex items-center justify-center
                  transition-all duration-300"
                >
                  <Sparkles
                    size={18}
                    className="text-[#cc0075] group-hover/pillar:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Label */}
                <span className="text-sm md:text-lg font-semibold text-gray-300 group-hover/pillar:text-white transition-colors duration-200">
                  {pillar.label}
                </span>

                {/* Indicator bar */}
                <div className="ms-auto w-1 h-6 rounded-full bg-linear-to-b from-[#cc0075] to-[#511764] opacity-0 group-hover/pillar:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 start-0 w-32 h-32 bg-linear-to-tr from-[#cc0075]/8 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.section>
  );
};

export default ProjectsHero;
