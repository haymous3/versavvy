"use client";

import {
  SparklesIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  RectangleStackIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import {motion} from "framer-motion";

import {SERVICE_PORTFOLIO} from "../content/company";

const iconStack = [
  SparklesIcon,
  CpuChipIcon,
  RectangleStackIcon,
  CloudArrowUpIcon,
  BoltIcon,
];

const Service = () => {
  return (
    <section className="bg-linear-to-br from-[#f7f9fe] via-[#f3f0ff] to-[#eef7ff] py-20">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          What we build
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-secondary sm:text-4xl">
          Interdisciplinary squads crafting end-to-end experiences.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base text-[#4c4c4c]">
          We operate as an embedded product and engineering partner—bringing
          strategy, design, and automation to every brief.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_PORTFOLIO.map((service, index) => {
            const Icon = iconStack[index % iconStack.length];
            return (
              <motion.div
                key={service.heading}
                whileHover={{y: -6}}
                transition={{type: "spring", stiffness: 200, damping: 20}}
                className="group rounded-[30px] border border-transparent bg-white/80 p-6 text-left shadow-[0_25px_60px_-35px_rgba(49,36,80,0.4)] transition hover:border-primary/40 hover:bg-white"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-[#4c4c4c]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
