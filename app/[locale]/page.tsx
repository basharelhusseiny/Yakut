import {
  HeroSection,
  MissionVisionSection,
  ServicesSection,
} from "@/components/pages/home";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/types/constants";

const HomePage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div>
      <HeroSection dict={dict} />
      <MissionVisionSection dict={dict} />
      <ServicesSection dict={dict} />
    </div>
  );
};

export default HomePage;
