"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionProps } from "@/types/constants";

const ContactHero = ({ dict }: SectionProps) => {
  return (
    <section className="text-center mb-16">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-6"
      >
        <span
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full
          text-sm font-bold tracking-widest uppercase
          bg-[#cc0075]/10 border border-[#cc0075]/30 text-[#cc0075]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          {dict.contact_us.badge}
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-5"
      >
        <span className="text-white">{dict.contact_us.headline} </span>
        <span className="bg-linear-to-r from-[#cc0075] to-[#511764] bg-clip-text text-transparent">
          {dict.contact_us.headlineAccent}
        </span>
      </motion.h1>

      {/* Sub */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12"
      >
        {dict.contact_us.description}
      </motion.p>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center justify-center gap-8 md:gap-16 flex-wrap"
      >
        {dict.contact_us.stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-3xl md:text-5xl font-black bg-linear-to-r from-[#cc0075] to-[#511764] bg-clip-text text-transparent">
              {stat.value}
            </span>
            <span className="text-sm text-slate-400 font-bold tracking-widest uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ContactHero;
