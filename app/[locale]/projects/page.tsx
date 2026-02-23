import ProjectsHero from "@/components/pages/projects/ProjectsHero";
import SpecializationSection from "@/components/pages/projects/SpecializationSection";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/types/constants";

const ProjectsPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return (
    <div className="pt-32 pb-18 bg-[#020617]">
      <div className="container mx-auto px-5">
        <ProjectsHero dict={dict} locale={locale as Locale} />
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          {dict.projects.specializations.map((spec) => (
            <SpecializationSection
              key={spec.title}
              {...spec}
              clients={dict.projects.clients}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
