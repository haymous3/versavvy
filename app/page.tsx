import AboutUs from "./_component/About_Us";
import Archievement from "./_component/Achievement";
import CaseStudyShowcase from "./_component/CaseStudyShowcase";
import ClientRibbon from "./_component/ClientRibbon";
import FadeInSection from "./_component/FadeInSection";
import Features from "./_component/Features";
import Footer from "./_component/Footer";
import Header from "./_component/Header";
import HeroShowcase from "./_component/HeroShowcase";
import ProcessTimeline from "./_component/ProcessTimeline";
import Service from "./_component/Service";
import Testimonials from "./_component/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f8fb]">
        <HeroShowcase />
        <ClientRibbon />

        <FadeInSection>
          <Archievement />
        </FadeInSection>

        <FadeInSection>
          <AboutUs />
        </FadeInSection>

        <FadeInSection>
          <CaseStudyShowcase />
        </FadeInSection>

        <FadeInSection>
          <Service />
        </FadeInSection>

        <FadeInSection>
          <Features />
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
}
