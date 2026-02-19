"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { Dictionary } from "@/dictionaries";

interface MobileMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  dict: Dictionary;
}

const MobileMenuModal = ({ dict, isOpen, onClose }: MobileMenuModalProps) => {
  useLockBodyScroll(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-70 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between py-4 px-6 border-b border-white/10">
              <h2 className="text-2xl font-bold bg-linear-to-r from-[#cc0075]  to-[#511764] bg-clip-text text-transparent">
                {dict.nav.menuTitle}
              </h2>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-300"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-6 space-y-2">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block text-white/90 hover:text-white hover:bg-white/5 font-medium text-lg px-4 py-3 rounded-xl transition-all duration-300 group"
                  >
                    <span className="relative">
                      {dict.nav[link.key]}
                      <span className="absolute -bottom-1 left-0 w-0 h-1 bg-linear-to-r from-[#cc0075] to-[#511764] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="p-6 pt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1, duration: 0.3 }}
              >
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block text-center px-6 py-4 bg-linear-to-r from-[#cc0075] to-[#511764] text-white rounded-xl font-semibold hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-[1.02] transition-all duration-300"
                >
                  تواصل معنا
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuModal;
