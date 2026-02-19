import {
  HeroSection,
  MarketingAnalytics,
  MissionVisionSection,
  ServicesSection,
} from "@/components/pages/home";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/types/constants";

const HomePage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div>
      <HeroSection dict={dict} />
      <MissionVisionSection dict={dict} locale={locale as Locale} />
      <ServicesSection dict={dict} locale={locale as Locale} />
      <MarketingAnalytics dict={dict} locale={locale as Locale} />
    </div>
  );
};

export default HomePage;
