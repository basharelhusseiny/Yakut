import { Button, ShinyText } from "@/components/ui";
import { SectionProps } from "@/types/constants";
import Image from "next/image";

const HeroSection = async ({ dict }: SectionProps) => {
  return (
    <section className="w-full h-screen relative overflow-hidden bg-linear-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Background - FloatingLines */}
      <Image
        src="/logo/yakut-background.png"
        alt="Hero Background"
        fill
        className="object-cover"
      />

      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* Content Layer */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container mx-auto px-5 ">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Title */}
            <h1 className="pb-9 font-bold text-4xl sm:text-6xl md:text-8xl text-[#cc0075]">
              {dict.hero.title}
            </h1>

            {/* Description */}
            <div className="max-w-4xl mx-auto mb-10 space-y-4">
              <ShinyText
                text={dict.hero.description}
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
                className="text-lg md:text-3xl font-semibold md:font-bold text-white"
              />
              <p className="mt-4 text-sm sm:text-lg text-gray-200 leading-relaxed drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                {dict.hero.sub_description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="md"
                fullWidth
                className="sm:w-auto"
              >
                {dict.hero.cta.start}
              </Button>
              <Button
                variant="secondary"
                size="md"
                fullWidth
                className="sm:w-auto"
              >
                {dict.hero.cta.knowMore}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
