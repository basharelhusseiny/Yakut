"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-lg hover:text-white font-semibold relative group transition-colors duration-300 ${pathname === link.href ? "text-white" : "text-white/80"}`}
        >
          {link.label}
          <span
            className={`absolute -bottom-1 left-0 w-0 h-1 bg-linear-to-r from-[#cc0075] to-[#511764] group-hover:w-full transition-all duration-300 ${pathname === link.href ? "w-full" : ""}`}
          />
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
