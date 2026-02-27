"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CONTACT_INFO, NAV_LINKS, SOCIAL_LINKS } from "@/constants";
import { ChevronLeft } from "lucide-react";
import { SectionProps } from "@/types/constants";

const Footer = ({ dict }: SectionProps) => {
  return (
    <footer className="relative overflow-hidden bg-[#020617] border-t border-white/5">
      {/* ── Background Effects ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#cc0075]/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#511764]/40 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#cc0075 1px, transparent 1px), linear-gradient(90deg, #cc0075 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#cc0075]/70 to-transparent shadow-[0_0_10px_rgba(204,0,117,0.2)]" />

      <div className="container mx-auto px-5 pt-12 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* ── Col 1: Brand (Span 5) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Logo */}
            <Link href="/" className="inline-block w-fit">
              <Image
                src="/logo/yakut-main-logo.png"
                alt="YAKUT"
                width={140}
                height={70}
                className="h-22 w-auto object-contain brightness-110 drop-shadow-[0_0_15px_rgba(204,0,117,0.3)]"
              />
            </Link>

            {/* Description */}
            <p className="text-gray-300 max-w-md">{dict.footer.description}</p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 flex-wrap">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="group relative w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 hover:border-[#cc0075]/50 hover:shadow-[0_0_20px_rgba(204,0,117,0.4)]"
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

          {/* ── Col 2: Navigation (Span 3) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-start-7 lg:col-span-3 flex flex-col gap-6"
          >
            <h4 className="text-xl font-bold text-white relative pb-4 w-fit">
              {dict.footer.quickLinks}
              <span className="absolute bottom-0 right-0 w-1/2 h-1 bg-linear-to-r from-[#cc0075] to-[#511764] rounded-full" />
            </h4>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-lg text-gray-400 hover:text-[#cc0075] transition-all duration-300 w-fit"
                  >
                    <ChevronLeft
                      size={16}
                      className="text-[#cc0075] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                    <span className="group-hover:-translate-x-1 transition-transform duration-300">
                      {dict.nav[link.key]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 3: Contact (Span 3) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            <h4 className="text-xl font-bold text-white relative pb-4 w-fit">
              {dict.footer.contactUs}
              <span className="absolute bottom-0 right-0 w-1/2 h-1 bg-linear-to-r from-[#cc0075] to-[#511764] rounded-full" />
            </h4>
            <ul className="flex flex-col gap-5">
              {CONTACT_INFO.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="group flex items-center gap-4 text-base text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#cc0075] group-hover:border-[#cc0075] group-hover:shadow-[0_6px_20px_rgba(204,0,117,0.3)] transition-all duration-300">
                      <Icon
                        size={20}
                        className="text-[#cc0075] group-hover:text-white transition-colors duration-300"
                      />
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="group-hover:translate-x-[-4px] transition-transform duration-300">
                        {text}
                      </span>
                      {text === "Info@yakutmedia.com" && (
                        <span className="group-hover:translate-x-[-4px] transition-transform duration-300">
                          yakutdigital@gmail.com
                        </span>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/15 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6 font-semibold">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            {/* Copyright */}
            <p className="text-lg order-2 md:order-1 hover:text-gray-300 transition-colors">
              {dict.footer.allRightsReserved}
            </p>

            {/* Dev credit */}
            <p className="order-1 md:order-2 flex items-center gap-2 group cursor-default text-lg">
              {dict.footer.devBy}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
