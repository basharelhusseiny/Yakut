"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const iconPath = `/services/service-${service.id}.png`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8, transition: { duration: 0.35, ease: "easeOut" } }}
      className="group relative overflow-hidden rounded-4xl border border-white/10 hover:border-[#cc0075]/40 bg-[#0a0a1a]/80 backdrop-blur-md transition-all duration-500 shadow-xl hover:shadow-[0_24px_64px_-12px_rgba(204,0,117,0.25)] cursor-pointer p-8 flex flex-col gap-6"
    >
      {/* ── Ambient background glow (idle) ── */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#511764]/20 blur-[80px] group-hover:bg-[#cc0075]/20 transition-colors duration-500 pointer-events-none" />

      {/* ── Branded glow on hover ── */}
      <div className="absolute inset-0 bg-linear-to-br from-[#cc0075]/10 via-transparent to-[#511764]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* ── Top shimmer line ── */}
      <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-[#cc0075]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* ── Icon Container ── */}
      <div className="relative w-20 h-20 shrink-0">
        {/* Glowing backdrop behind icon */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#cc0075]/10 to-[#511764]/10 group-hover:from-[#cc0075]/25 group-hover:to-[#511764]/25 transition-all duration-500" />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-[#cc0075]/40 transition-all duration-500" />

        {/* Soft outer glow */}
        <div className="absolute -inset-4 rounded-3xl bg-[#cc0075]/0 group-hover:bg-[#cc0075]/20 blur-xl transition-all duration-500" />

        {/* Image Icon */}
        <div className="relative z-10 w-full h-full p-4 flex items-center justify-center">
          <Image
            src={iconPath}
            alt={service.title}
            fill
            className="object-contain p-1 drop-shadow-sm group-hover:drop-shadow-[0_0_15px_rgba(204,0,117,0.5)] transition-all duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col gap-4 relative z-10">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-[#ff9cd6] transition-colors duration-300">
          {service.title}
        </h3>

        {/* Accent line — expands on hover */}
        <div className="w-12 h-[3px] rounded-full bg-linear-to-r from-[#cc0075] to-[#511764] group-hover:w-24 transition-all duration-500 ease-out" />

        {/* Description */}
        <p className="text-base font-semibold text-gray-400 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
          {service.description}
        </p>
      </div>

      {/* ── Watermark number ── */}
      <span className="absolute bottom-4 left-6 text-6xl font-black text-white/5 group-hover:text-[#cc0075]/10 transition-colors duration-500 select-none tabular-nums pointer-events-none tracking-tighter">
        {String(service.id).padStart(2, "0")}
      </span>

      {/* ── Corner accent ── */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-[#cc0075]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full pointer-events-none" />
    </motion.div>
  );
};

export default ServiceCard;
