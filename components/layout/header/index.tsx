"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenuModal from "@/components/modals/MobileMenuModal";
import NavLinks from "./NavLinks";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed w-[90%] max-w-6xl top-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <nav className="px-6 sm:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/logo/yakut-logo-2.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-22 h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <NavLinks />

            {/* Right Side - CTA Button (Desktop) + Menu Button (Mobile/Tablet) */}
            <div className="flex items-center gap-3">
              {/* CTA Button - Hidden on mobile */}
              <Link
                href="/contact"
                className="hidden md:block px-5 py-2.5 bg-linear-to-r from-[#cc0075] to-[#511764] text-white rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300"
              >
                تواصل معنا
              </Link> 

              {/* Mobile Menu Button - Visible on mobile/tablet */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-white/90 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-300"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Modal */}
      <MobileMenuModal
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
