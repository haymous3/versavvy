"use client";

import {motion} from "framer-motion";

const steps = [
  {
    title: "01. Discovery Lab",
    description:
      "Stakeholder interviews, data landscape review, and quick wins mapped within 7 days.",
    result: "Strategic clarity & ROI hypotheses",
  },
  {
    title: "02. Design & Experiment",
    description:
      "Concept models, clickable prototypes, and AI experiments validated with real users.",
    result: "Experience blueprint + technical spikes",
  },
  {
    title: "03. Launch & Scale",
    description:
      "Production-grade engineering, enablement for your teams, and post-launch optimization.",
    result: "Live AI workflows with measurable lift",
  },
];

const ProcessTimeline = () => (
  <section className="bg-white py-20">
    <div className="mx-auto max-w-5xl px-5 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
        Proven delivery path
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-[#07030d] sm:text-4xl">
        A three-part framework that keeps momentum high.
      </h2>
      <p className="mt-4 text-base text-[#555]">
        Each phase links directly into measurable outcomes. We keep loops tight
        with async updates, immersive demos, and embedded squads.
      </p>

      <div className="mt-12 space-y-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.4}}
            transition={{duration: 0.6, delay: index * 0.1}}
            className="rounded-3xl border border-[#ece8ff] bg-[#faf8ff] p-8 text-left shadow-[0_25px_50px_-35px_rgba(49,36,80,0.45)]"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[#444]">{step.description}</p>
              </div>
              <div className="rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium text-[#07030d] shadow-inner">
                {step.result}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessTimeline;

