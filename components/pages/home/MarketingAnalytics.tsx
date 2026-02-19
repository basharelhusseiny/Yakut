"use client";

import { SectionHeader } from "@/components/ui";
import { SectionProps } from "@/types/constants";
import { LineChart } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const MarketingAnalytics = ({ dict, locale }: SectionProps) => {
  return (
    <section
      className="py-10 md:py-14 lg:py-18 relative overflow-hidden bg-slate-950"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* Background Decor */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#cc0075]/20 rounded-full blur-[130px] animate-pulse" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-[#511764]/50 rounded-full blur-[110px] animate-pulse delay-1000" />

      <div className="container mx-auto px-5">
        <SectionHeader
          title={dict.marketingAnalytics.title}
          description={dict.marketingAnalytics.description}
        >
          <LineChart
            className="w-10 h-10 text-[#511764] animate-pulse"
            strokeWidth={2}
          />
        </SectionHeader>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* ── Left: Image ── */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative flex items-center justify-center order-2 lg:order-1"
          >
            {/* Decorative ring */}
            <div className="absolute w-[340px] h-[340px] rounded-full border border-[#cc0075]/10 animate-spin-slow" />
            <div className="absolute w-[420px] h-[420px] rounded-full border border-[#511764]/10 animate-spin-slow-reverse" />

            {/* Glow blob */}
            <div className="absolute w-64 h-64 rounded-full bg-[#cc0075]/10 blur-[60px]" />

            {/* Image container */}
            <div className="relative z-10 w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#cc0075]/10 to-[#511764]/10 border border-white/5" />
              <Image
                src="/marketing/marketing-img.png"
                alt="Marketing Analytics"
                fill
                className="object-contain p-6 drop-shadow-[0_0_40px_rgba(204,0,117,0.25)]"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute bottom-6 end-4 z-20 flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900/80 backdrop-blur border border-white/10 shadow-xl"
            >
              <div className="w-2 h-2 rounded-full bg-[#cc0075] animate-pulse" />
              <span className="font-semibold text-white/80">
                {locale === "ar" ? "تحليل مباشر" : "Live Analytics"}
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: Stacked Cards ── */}
          <div className="flex flex-col gap-4 order-2 lg:order-1">
            {dict.marketingAnalytics.items.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{
                  x: locale === "ar" ? -6 : 6,
                  transition: { duration: 0.2 },
                }}
                className="group relative flex items-start gap-4 p-5 rounded-2xl
                  bg-slate-900/40 backdrop-blur-sm
                  border border-white/5 hover:border-[#cc0075]/40
                  transition-colors duration-300
                  overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-linear-to-r from-[#cc0075]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Left accent bar */}
                <div className="absolute start-0 top-4 bottom-4 w-[3px] rounded-full bg-linear-to-b from-[#cc0075] to-[#511764] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="relative shrink-0 w-14 h-14">
                  <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#cc0075]/15 to-[#511764]/15 group-hover:from-[#cc0075]/25 group-hover:to-[#511764]/25 transition-all duration-500" />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-[#cc0075]/30 transition-all duration-500" />
                  <div className="relative z-10 w-full h-full p-2 flex items-center justify-center">
                    <Image
                      src={`/marketing/marketing-${item.id}.png`}
                      alt={item.title}
                      fill
                      className="object-contain p-2 group-hover:scale-110 transition-transform duration-500
                        group-hover:drop-shadow-[0_0_10px_rgba(204,0,117,0.5)]"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 relative z-10 min-w-0">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#cc0075] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-semibold leading-relaxed group-hover:text-slate-300 transition-colors duration-300 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Number watermark */}
                <span className="absolute end-4 top-1/2 -translate-y-1/2 text-5xl font-black text-white/5 group-hover:text-[#cc0075]/10 transition-colors duration-500 select-none tabular-nums">
                  {String(item.id).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingAnalytics;
