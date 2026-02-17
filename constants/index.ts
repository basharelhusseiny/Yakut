import { NavLink } from "@/types/constants";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const NAV_LINKS: NavLink[] = [
  { label: "الرئيسية", href: "/" },
  { label: "أعمالنا", href: "/projects" },
  { label: "اتصل بنا", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const CONTACT_INFO = [
  { icon: Phone, text: "+90 (501) 260 26 66", href: "tel:+905012602666" },
  { icon: Mail, text: "Info@yakut-media.com", href: "mailto:Info@yakut-media.com" },
  { icon: MapPin, text: "Barbaros Hayrettin Paşa MAH, 1992. SK. Vetro City No: 16 İç Kapı No: 96 Esenyurt/ İst.", href: "#" },
];
