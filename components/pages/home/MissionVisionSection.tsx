"use client";

import { SectionHeader } from "@/components/ui";
import { MISSION_VISION_DATA } from "@/data";
import { Sparkles, Gem, Target } from "lucide-react";
import { motion } from "framer-motion";

const MissionVisionSection = () => {
  return (
    <section className="py-10 md:py-14 lg:py-18 relative overflow-hidden bg-slate-950">
      {/* Background Decor - Subtle Gradients */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#cc0075]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-[#511764]/50 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="container mx-auto px-5">
        <SectionHeader
          title="رؤيتنا ورسالتنا"
          description="نسعى للتميز والريادة في كل ما نقدمه لعملائنا الكرام"
        >
          <Sparkles
            className="w-10 h-10 text-[#511764] animate-pulse"
            strokeWidth={2}
          />
        </SectionHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {MISSION_VISION_DATA.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/5 hover:border-[#cc0075]/50 transition-all duration-500 shadow-2xl"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-[#cc0075]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Background Logo Icon (Gem) */}
              <div className="absolute -bottom-12 -left-12 text-white/5 group-hover:text-[#cc0075]/10 transition-all duration-700 -rotate-12 transform group-hover:scale-130 group-hover:-rotate-6 pointer-events-none">
                <Gem strokeWidth={0.5} size={300} />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#cc0075]/20 to-[#511764]/20 flex items-center justify-center text-[#cc0075] group-hover:scale-110 group-hover:from-[#cc0075] group-hover:to-[#511764] group-hover:text-white transition-all duration-500 shadow-lg">
                  {item.key === "mission" ? (
                    <Target size={32} strokeWidth={1.5} />
                  ) : (
                    <Gem size={32} strokeWidth={1.5} />
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold bg-linear-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:from-[#511764] group-hover:to-[#cc0075] transition-all duration-500">
                    {item.title}
                  </h3>

                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="w-16 h-1 bg-linear-to-br from-[#cc0075] to-[#511764] rounded-full group-hover:w-32 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
