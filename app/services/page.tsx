import Button from "../_component/Button";
import CaseStudyShowcase from "../_component/CaseStudyShowcase";
import ChooseUs from "../_component/Choose_Us";
import FadeInSection from "../_component/FadeInSection";
import Footer from "../_component/Footer";
import Header from "../_component/Header";
import Hero from "../_component/Hero";
import ProcessTimeline from "../_component/ProcessTimeline";
import Service from "../_component/Service";
import Team from "../_component/Team";
import Testimonials from "../_component/Testimonials";

import hero3 from "@/public/hero-3.png";
import {COMPANY_DESCRIPTION, COMPANY_APPROACH} from "../content/company";

export const metadata = {
  title: "Service",
};

const capabilityHighlights = [
  {
    title: "Discovery to scale",
    copy:
      "We pair product strategists with senior engineers so you can validate, build and scale without handoffs.",
  },
  {
    title: "AI-native accelerators",
    copy:
      "Reusable copilots, data layers and automation blueprints tailored to African markets mean faster launches.",
  },
  {
    title: "Enablement built-in",
    copy:
      "Playbooks, office hours and embedded squads keep your team confident long after we ship V1.",
  },
];

const serviceHeroBullets = [
  "AI experience studio for conversational CX, copilots and intelligent ops.",
  "Modern platforms: design systems, frontends, APIs and cloud-native backends.",
  "Data, analytics and automation to keep leaders informed in real time.",
];

const Page = () => {
  return (
    <>
      <Header />
      <main className="bg-[#f8f8fb]">
        <Hero background="background_6.jpg" image={hero3}>
          <div className="space-y-6 text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              Capabilities
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              End-to-end delivery pods for ambitious digital programmes.
            </h1>
            <p className="text-base text-white/80">{COMPANY_DESCRIPTION}</p>
            <p className="text-base text-white/70">{COMPANY_APPROACH}</p>
            <div className="space-y-3 text-sm text-white/80">
              {serviceHeroBullets.map((bullet) => (
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
              <Button className="px-6 py-3 text-sm" href="/contact_us">
                Start a brief
              </Button>
              <Button
                className="px-6 py-3 text-sm"
                variant="ghost"
                href="/about_us"
                icon={<span className="text-sm font-bold">↗</span>}
              >
                Our story
              </Button>
            </div>
          </div>
        </Hero>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-6 md:grid-cols-3">
              {capabilityHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-[28px] border border-[#f0ecff] bg-[#faf8ff] p-6 shadow-[0_25px_60px_-35px_rgba(49,36,80,0.45)]"
                >
                  <h3 className="text-xl font-semibold text-primary">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#4c4c4c]">
                    {highlight.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FadeInSection>
          <Service />
        </FadeInSection>

        <FadeInSection>
          <ChooseUs />
        </FadeInSection>

        <FadeInSection>
          <CaseStudyShowcase />
        </FadeInSection>

        <FadeInSection>
          <Team />
        </FadeInSection>

        <FadeInSection>
          <ProcessTimeline />
        </FadeInSection>

        <FadeInSection>
          <Testimonials />
        </FadeInSection>

        <FadeInSection>
          <Footer />
        </FadeInSection>
      </main>
    </>
  );
};

export default Page;
