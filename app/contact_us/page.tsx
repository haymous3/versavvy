import Button from "../_component/Button";
import ContactUsForm from "../_component/ContactUsForm";
import ContactsInformation from "../_component/ContactsInformation";
import FadeInSection from "../_component/FadeInSection";
import Footer from "../_component/Footer";
import Header from "../_component/Header";
import Hero from "../_component/Hero";

import contact from "@/public/contact_3.jpg";
import {COMPANY_DESCRIPTION} from "../content/company";

export const metadata = {
  title: "Contact",
};

const contactHeroBullets = [
  "Response within 4 working hours, often sooner.",
  "Flexible formats: in-person labs, async collab or embedded pods.",
  "We scope quickly with transparent pricing and clear milestones.",
];

const Page = () => {
  return (
    <>
      <Header />
      <main className="bg-[#f8f8fb]">
        <Hero background="background_6.jpg" image={contact}>
          <div className="space-y-6 text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              Let’s collaborate
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Tell us about your next sprint. We’ll co-create the path.
            </h1>
            <p className="text-base text-white/80">
              Share your goals, challenges or inspiration and a lead strategist
              will reply with next steps, potential squads and a clear timeline.
            </p>
            <p className="text-sm text-white/70">{COMPANY_DESCRIPTION}</p>
            <div className="space-y-3 text-sm text-white/80">
              {contactHeroBullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px] shadow-cyan-400" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="px-6 py-3 text-sm" href="mailto:contact@versavvy.com">
                Email the team
              </Button>
              <Button
                className="px-6 py-3 text-sm"
                variant="ghost"
                href="tel:+2348137386134"
                icon={<span className="text-sm font-bold">↗</span>}
              >
                Call / WhatsApp
              </Button>
            </div>
          </div>
        </Hero>

        <FadeInSection>
          <ContactsInformation />
        </FadeInSection>

        <FadeInSection>
          <ContactUsForm />
        </FadeInSection>

        <FadeInSection>
          <Footer />
        </FadeInSection>
      </main>
    </>
  );
};

export default Page;
