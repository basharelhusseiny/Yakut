import { Dictionary } from "@/dictionaries";

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  icon: React.ReactNode;
  href: string;
  label: string;
};

export type ContactInfo = {
  icon: React.ReactNode;
  text: string;
  href: string;
};

export type Locale = "ar" | "en";

export type SectionProps = {
  dict: Dictionary;
  locale?: string;
};
