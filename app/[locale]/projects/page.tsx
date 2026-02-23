import SpecializationSection from "@/components/pages/projects/Specializationsection";
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
    <div className="py-20 bg-[#020617]">
      <div className="container mx-auto px-5 flex flex-col gap-10">
        {dict.projects.specializations.map((spec) => (
          <SpecializationSection
            key={spec.title}
            {...spec}
            clients={dict.projects.clients}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
