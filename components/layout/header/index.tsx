"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenuModal from "@/components/modals/MobileMenuModal";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { SectionProps } from "@/types/constants";
import LanguageToggle from "./Languagetoggle";

export default function Header({ dict, locale = "ar" }: SectionProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed w-[90%] max-w-6xl top-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <nav className="px-6 sm:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link href={`/${locale}`}>
              <Image
                src="/logo/yakut-logo-2.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-22 h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <NavLinks dict={dict} locale={locale} />

            {/* Right Side */}
            <div className="flex items-center sm:gap-3 gap-1">
              {/* Language Toggle — always visible */}
              <LanguageToggle locale={locale} />

              <Link
                href={`/${locale}/contact`}
                className="hidden md:block px-5 py-2.5 bg-linear-to-r from-[#cc0075] to-[#511764] text-white rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300"
              >
                {dict.nav.contactCta}
              </Link>

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

      <MobileMenuModal
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        dict={dict}
      />
    </>
  );
}
