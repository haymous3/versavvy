"use client";

import {motion} from "framer-motion";
import Image from "next/image";

import choose1 from "@/public/choose_us_1.jpg";
import choose2 from "@/public/choose_us_2.jpg";
import service1 from "@/public/service_1.jpg";

const studies = [
  {
    title: "Immersive CX assistant for pan-African bank",
    description:
      "Deployed multilingual AI concierge across three channels, driving 68% faster resolution.",
    image: choose1,
    stack: ["Voice AI", "Azure OpenAI", "Realtime dashboards"],
  },
  {
    title: "Predictive maintenance for logistics giant",
    description:
      "Unified disparate sensors into a live data mesh and reduced downtime by 32%.",
    image: choose2,
    stack: ["Edge AI", "Data mesh", "Field apps"],
  },
  {
    title: "Embedded analytics suite for telco",
    description:
      "Launched a modular analytics toolkit powering 1.2M self-serve insights per day.",
    image: service1,
    stack: ["Next.js", "Snowflake", "Storybook"],
  },
];

const CaseStudyShowcase = () => {
  return (
    <section className="bg-[#f5f7fb] py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Selected launches
          </p>
          <h2 className="text-3xl font-semibold text-[#07030d] sm:text-4xl">
            Impact-first sprints, engineered for rapid validation.
          </h2>
          <p className="text-base text-[#555] lg:w-2/3">
            Every build pairs strategy, design systems, and automation so your
            team sees tangible results in weeks—not quarters.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {studies.map((study) => (
            <motion.div
              key={study.title}
              whileHover={{y: -10}}
              className="group rounded-3xl border border-transparent bg-white p-6 shadow-[0_25px_60px_-25px_rgba(49,36,80,0.25)] transition-all hover:border-primary/30"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={study.image}
                  alt={study.title}
                  className="h-48 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105"
                  placeholder="blur"
                />
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">
                  {study.title}
                </h3>
                <p className="text-sm text-[#4c4c4c]">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f0ecff] px-3 py-1 text-xs font-medium text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase;

