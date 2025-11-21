import AboutUs from "../_component/About_Us";
import Button from "../_component/Button";
import FadeInSection from "../_component/FadeInSection";
import Footer from "../_component/Footer";
import Header from "../_component/Header";
import Hero from "../_component/Hero";
import Hiring from "../_component/Hiring";
import ProcessTimeline from "../_component/ProcessTimeline";
import Team from "../_component/Team";
import Testimonials from "../_component/Testimonials";

import hero4 from "@/public/hero_4.png";
import {
  COMPANY_APPROACH,
  COMPANY_DESCRIPTION,
  COMPANY_MISSION,
  COMPANY_VISION,
} from "../content/company";

export const metadata = {
  title: "About",
};

const heroHighlights = [
  COMPANY_APPROACH,
  `Mission: ${COMPANY_MISSION}`,
  `Vision: ${COMPANY_VISION}`,
];

const stats = [
  {label: "Studios & remotes", value: "3 cities + distributed"},
  {label: "Partners coached", value: "150+ teams"},
  {label: "Average engagement", value: "8-week sprints"},
];

const cultureCards = [
  {
    title: "Client-focused delivery",
    copy:
      "Vendor neutral solutions, measurable success metrics and tailored rituals keep every engagement aligned to real outcomes.",
  },
  {
    title: "Transparent craft",
    copy:
      "Weekly value reviews, open dashboards and embedded pods make collaboration seamless across time zones.",
  },
  {
    title: "Enablement as default",
    copy:
      "We co-create with your team and leave behind playbooks, design systems and automation to keep the wins compounding.",
  },
];

const Page = () => {
  return (
    <>
      <Header />
      <main className="bg-[#f8f8fb]">
        <Hero background="background_5.jpg" image={hero4}>
          <div className="space-y-6 text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              Inside Versavvy
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Boutique teams building intelligent products with measurable soul.
            </h1>
            <p className="text-base text-white/80">{COMPANY_DESCRIPTION}</p>

            <div className="space-y-3 text-sm text-white/80">
              {heroHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px] shadow-cyan-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="px-6 py-3 text-sm" href="/contact_us">
                Partner with us
              </Button>
              <Button
                className="px-6 py-3 text-sm"
                variant="ghost"
                href="/services"
                icon={<span className="text-sm font-bold">↗</span>}
              >
                See capabilities
              </Button>
            </div>

            <div className="grid gap-4 pt-4 text-sm sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white/80"
                >
                  <p className="text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Hero>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-6 md:grid-cols-3">
              {cultureCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[28px] border border-[#f0ecff] bg-[#faf8ff] p-6 shadow-[0_25px_60px_-35px_rgba(49,36,80,0.45)]"
                >
                  <h3 className="text-xl font-semibold text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#4c4c4c]">{card.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FadeInSection>
          <AboutUs />
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
          <Hiring />
        </FadeInSection>

        <FadeInSection>
          <Footer />
        </FadeInSection>
      </main>
    </>
  );
};

export default Page;
