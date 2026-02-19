"use client";

import { SectionHeader } from "@/components/ui";
import { Briefcase } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { SectionProps } from "@/types/constants";

const ServicesSection = ({ dict, locale = "ar" }: SectionProps) => {
  return (
    <section
      className="py-10 md:py-14 lg:py-18 relative overflow-hidden bg-slate-950"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#cc0075]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-20 w-[500px] h-[500px] bg-[#511764]/50 rounded-full blur-[120px] pointer-events-none" />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#cc0075 1px, transparent 1px), linear-gradient(90deg, #cc0075 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-5 relative z-10">
        <SectionHeader
          title={dict.services.title}
          description={dict.services.description}
        >
          <Briefcase
            className="w-10 h-10 text-[#511764] animate-pulse"
            strokeWidth={2}
          />
        </SectionHeader>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {dict.services.items.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
