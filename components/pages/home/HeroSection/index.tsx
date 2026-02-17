import { Button, ShinyText } from "@/components/ui";
import FloatingLines from "./HeroFloatingLines";

const HeroSection = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden bg-linear-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Background - FloatingLines */}
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={8}
        lineDistance={20}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
      />

      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* Content Layer */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container mx-auto px-5 ">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              مرحباً بك في{" "}
              <span className="font-bold text-4xl sm:text-6xl md:text-8xl bg-linear-to-r from-[#cc0075] to-[#511764] bg-clip-text text-transparent">
                YAKUT
              </span>
            </h1>

            {/* Description */}
            <div className="max-w-4xl mx-auto mb-10 space-y-4">
              <ShinyText
                text=" وكالة YAKUT للتسويق هي إحدى وسائل التواصل الاجتماعي المديرين
                التنفيذيين منظمة. نحن نقدم إدارة وسائل التواصل الاجتماعي والويب
                و تطوير محركات البحث."
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
                نصنع ونراقب أفضل وسائل التواصل الاجتماعي. منظمتنا تشرف أنظمة
                الوسائط الاجتماعية، على سبيل المثال Google، Facebook، Twitter،
                Instagram وPlus لصالحك. نحن نستخدم وسائل التسويق ذات الصلة عبر
                وسائل التواصل الاجتماعي والإدارات لتمكين المنظمات من تطوير
                وتحقيق أهدافهم.
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
                ابدأ الآن
              </Button>
              <Button
                variant="secondary"
                size="md"
                fullWidth
                className="sm:w-auto"
              >
                اعرف المزيد
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
