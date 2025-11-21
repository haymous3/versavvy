import Image from "next/image";
import {CheckCircleIcon} from "@heroicons/react/24/solid";

import Button from "./Button";

import aboutHero from "@/public/about_us.png";
import {
  COMPANY_DESCRIPTION,
  COMPANY_APPROACH,
  COMPANY_MISSION,
  COMPANY_VISION,
} from "../content/company";

const highlights = [COMPANY_APPROACH];

const AboutUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-linear-to-tr from-primary/20 to-cyan-400/20 blur-3xl" />
          <div className="relative rounded-[2.5rem] border border-[#f0ecff] bg-[#faf8ff] p-6 shadow-[0_25px_60px_-35px_rgba(49,36,80,0.45)]">
            <Image
              src={aboutHero}
              alt="Team collaborating"
              className="w-full rounded-4xl object-cover"
              placeholder="blur"
            />
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            About us
          </p>
          <h2 className="text-3xl font-semibold text-secondary sm:text-4xl">
            About Versavvy
          </h2>
          <p className="text-base leading-relaxed text-[#4c4c4c]">
            {COMPANY_DESCRIPTION}
          </p>

          <ul className="space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#4c4c4c]">
                <CheckCircleIcon className="mt-1 h-5 w-5 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="grid gap-6 rounded-3xl border border-[#f0ecff] bg-[#faf8ff] p-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                Our Mission
              </p>
              <p className="mt-2 text-sm text-[#4c4c4c]">{COMPANY_MISSION}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                Our Vision
              </p>
              <p className="mt-2 text-sm text-[#4c4c4c]">{COMPANY_VISION}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="px-6 py-3" variant="primary" href="/about_us">
              Meet the team
            </Button>
            <Button className="px-6 py-3" variant="secondary" href="/services">
              Explore services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
