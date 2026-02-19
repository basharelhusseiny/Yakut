import {
  ContactForm,
  ContactHero,
  ContactInfoPanel,
} from "@/components/pages/contact";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/types/constants";

const ContactPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div
      className="min-h-screen bg-slate-950 text-white overflow-hidden"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* ── Ambient Background ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#cc0075]/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#511764]/30 rounded-full blur-[110px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#511764]/5 rounded-full blur-[150px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#cc0075 1px, transparent 1px), linear-gradient(90deg, #cc0075 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-5 pt-36 pb-24">
        {/* Hero — badge + headline + stats */}
        <ContactHero dict={dict} locale={locale as Locale} />

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/30 to-transparent mb-12" />

        {/* Main content grid — info (2) | form (3) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-start">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <ContactInfoPanel dict={dict} locale={locale as Locale} />
          </div>
          <div className="lg:col-span-3 order-1 lg:order-2">
            <ContactForm dict={dict} locale={locale as Locale} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
