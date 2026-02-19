"use client";

import { NAV_LINKS } from "@/constants";
import { Dictionary } from "@/dictionaries";
import { Locale } from "@/types/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { dict: Dictionary; locale: Locale };

const NavLinks = ({ dict, locale }: Props) => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-lg hover:text-white font-semibold relative group transition-colors duration-300 ${
            (pathname === `/${locale}` && link.href === "/") ||
            pathname === `/${locale}${link.href}`
              ? "text-white"
              : "text-white/80"
          }`}
        >
          {dict.nav[link.key]}
          <span
            className={`absolute -bottom-1 left-0 w-0 h-1 bg-linear-to-r from-[#cc0075] to-[#511764] group-hover:w-full transition-all duration-300 ${
              (pathname === `/${locale}` && link.href === "/") ||
              pathname === `/${locale}${link.href}`
                ? "w-full"
                : ""
            }`}
          />
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
