import { SectionHeader } from "@/components/ui";
import { Sparkles } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-10 md:py-14 lg:py-18 relative overflow-hidden bg-slate-950">
      <div className="container mx-auto px-5">
        <SectionHeader
          title="خدماتنا"
          description="نقدم مجموعة واسعة من الخدمات لتلبية احتياجات عملائنا الكرام"
        >
          <Sparkles
            className="w-10 h-10 text-[#511764] animate-pulse"
            strokeWidth={2}
          />
        </SectionHeader>
      </div>
    </section>
  );
};

export default ServicesSection;
