"use client";

import {motion} from "framer-motion";

const metrics = [
  {label: "Products launched", value: "60+", detail: "AI, apps & data hubs"},
  {label: "Enterprise teams enabled", value: "45", detail: "Across 7 markets"},
  {label: "Average deployment speed", value: "8 wks", detail: "From brief to go-live"},
  {label: "Customer satisfaction", value: "4.9/5", detail: "Across engagements"},
];

const Archievement = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#1c0f33] to-secondary py-20 text-white">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-cyan-400/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">
          Outcomes that compound
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Best-in-class delivery for bold teams in Africa & beyond.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base text-white/70">
          Our solutions layer intelligence into every touchpoint—connecting
          strategy, design, and automation so your organisation scales with
          confidence.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              whileHover={{scale: 1.02}}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 text-left backdrop-blur"
            >
              <p className="text-3xl font-semibold">{metric.value}</p>
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                {metric.label}
              </p>
              <p className="mt-3 text-sm text-white/70">{metric.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Archievement;
