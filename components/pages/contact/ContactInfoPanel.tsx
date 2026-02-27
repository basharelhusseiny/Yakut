"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionProps } from "@/types/constants";
import { SOCIAL_LINKS } from "@/constants";

const ICONS = [Phone, Mail, MapPin];

const ContactInfoPanel = ({ dict, locale }: SectionProps) => {
  const isRtl = locale === "ar";

  return (
    <section className="flex flex-col gap-5">
      {/* Panel header */}
      <motion.div
        initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-2"
      >
        <h3 className="text-white font-bold text-xl mb-1">
          {dict.contact_us.info.title}
        </h3>
        <p className="text-slate-400 text-sm">
          {dict.contact_us.info.subtitle}
        </p>
      </motion.div>

      {/* Info cards */}
      {dict.contact_us.info.items.map(({ label, value, href, hint }, i) => {
        const Icon = ICONS[i];
        console.log(label);
        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.1 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 p-5 rounded-2xl
                bg-slate-900/50 backdrop-blur border border-white/5
                hover:border-[#cc0075]/40 hover:bg-slate-900/80
                transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-linear-to-r from-[#cc0075]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Start accent */}
              <div className="absolute start-0 top-4 bottom-4 w-[3px] rounded-full bg-linear-to-b from-[#cc0075] to-[#511764] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div
                className="relative shrink-0 w-12 h-12 rounded-xl
                bg-linear-to-br from-[#cc0075]/20 to-[#511764]/20
                border border-white/5
                group-hover:border-[#cc0075]/30
                group-hover:shadow-[0_0_20px_rgba(204,0,117,0.2)]
                flex items-center justify-center
                transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-[#cc0075]" />
              </div>

              {/* Text */}
              <div className="relative z-10 min-w-0 flex-1">
                <p className="text-lg text-slate-400 font-bold uppercase tracking-widest mb-1">
                  {label}
                </p>
                <p className="text-white font-semibold truncate group-hover:text-[#ff9cd6] transition-colors duration-300">
                  {value}
                </p>

                {value === "Info@yakutmedia.com" && (
                  <p className="text-white font-semibold truncate group-hover:text-[#ff9cd6] transition-colors duration-300">
                    {dict.contact_us.info.email}
                  </p>
                )}

                <p className="text-slate-500 text-sm mt-0.5">{hint}</p>
              </div>

              <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-[#cc0075] shrink-0 transition-colors duration-300" />
            </Link>
          </motion.div>
        );
      })}

      {/* Working Hours */}
      <motion.div
        initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="p-5 rounded-2xl bg-slate-900/50 backdrop-blur border border-white/5"
      >
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-[#cc0075]" />
          <span className="text-xl font-bold text-slate-300 uppercase tracking-widest">
            {dict.contact_us.workingHours.title}
          </span>
        </div>
        <div className="space-y-2.5">
          {dict.contact_us.workingHours.items.map(({ day, time }) => (
            <div key={day} className="flex items-center justify-between gap-4">
              <span className="text-slate-400">{day}</span>
              <span
                className={`font-semibold ${time === "مغلق" || time === "Closed" ? "text-red-400/70" : "text-white"}`}
              >
                {time}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden p-6 rounded-2xl
          bg-linear-to-br from-[#cc0075]/10 via-[#511764]/10 to-slate-900/50
          border border-[#cc0075]/15"
      >
        <div className="absolute top-0 end-0 w-32 h-32 bg-[#cc0075]/10 rounded-full blur-2xl pointer-events-none" />

        <p className="text-lg font-bold text-[#cc0075] uppercase tracking-widest mb-4">
          {dict.contact_us.social.title}
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              className="group relative w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 hover:border-[#cc0075]/50 hover:shadow-[0_0_20px_rgba(204,0,117,0.4)]"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#cc0075]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Icon
                size={20}
                className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300"
              />
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactInfoPanel;
