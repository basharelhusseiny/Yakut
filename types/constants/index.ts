import { Dictionary } from "@/dictionaries";

export type NavLink = {
  key: keyof Dictionary["nav"];
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
  locale?: Locale;
};
