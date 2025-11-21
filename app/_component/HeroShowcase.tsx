"use client";

import {motion} from "framer-motion";
import Image from "next/image";

import heroPrimary from "@/public/hero.png";
import heroAlt from "@/public/hero-3.png";
import heroAltTwo from "@/public/hero_4.png";

import Button from "./Button";
import {COMPANY_DESCRIPTION, COMPANY_APPROACH} from "../content/company";

const stats = [
  {label: "AI-focused products launched", value: "28+"},
  {label: "Enterprise transformations", value: "120+"},
  {label: "Average ROI unlocked", value: "3.4x"},
];

const benefits = [
  COMPANY_APPROACH,
  "Modular AI accelerators tailored to African markets",
  "Transparent delivery with weekly value reviews",
  "Design + engineering teams embedded with you",
];

const HeroShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-secondary via-[#120a1c] to-[#0b132b] pt-32 pb-20 text-white">
      <div className="absolute inset-0 opacity-60 mix-blend-lighten">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-fuchsia-600 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500 blur-[180px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 lg:flex-row lg:items-center lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="max-w-2xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200">
            Future-ready consulting
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Create intelligent solutions with a team built for {" "}
            <span className="text-cyan-300">clarity, speed, & impact.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80">{COMPANY_DESCRIPTION}</p>

          <ul className="mt-8 space-y-3 text-sm text-white/80">
            {benefits.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px] shadow-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              className="px-6 py-3 text-sm"
              variant="primary"
              href="/contact_us"
            >
              Launch a project
            </Button>
            <Button
              className="px-6 py-3 text-sm"
              variant="ghost"
              icon={<span className="text-sm font-bold">↗</span>}
              href="/about_us"
            >
              See our approach
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur"
              >
                <p className="text-2xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-wide text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 60}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.9, delay: 0.15}}
          className="relative w-full max-w-lg"
        >
          <div className="absolute inset-0 -z-10 rounded-[34px] bg-linear-to-tr from-cyan-400/40 to-fuchsia-500/40 blur-3xl" />
          <div className="relative rounded-[34px] border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid gap-4">
              <motion.div
                whileHover={{y: -6}}
                className="rounded-3xl border border-white/15 bg-white/10 p-4"
              >
                <Image
                  src={heroPrimary}
                  alt="Versavvy team at work"
                  className="h-60 w-full rounded-2xl object-cover"
                  placeholder="blur"
                  priority
                />
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">
                    Strategy sprint
                  </p>
                  <span className="text-xs text-white/60">2 weeks</span>
                </div>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  whileHover={{y: -6}}
                  className="rounded-3xl border border-white/20 bg-white/10 p-4"
                >
                  <Image
                    src={heroAlt}
                    alt="Data storytelling"
                    className="h-40 w-full rounded-2xl object-cover"
                    placeholder="blur"
                  />
                  <p className="mt-3 text-sm font-semibold text-white">
                    AI-powered CX
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{y: -6}}
                  className="rounded-3xl border border-white/20 bg-white/10 p-4"
                >
                  <Image
                    src={heroAltTwo}
                    alt="Data integration"
                    className="h-40 w-full rounded-2xl object-cover"
                    placeholder="blur"
                  />
                  <p className="mt-3 text-sm font-semibold text-white">
                    Intelligent ops
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{opacity: 0, x: 40}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 0.3}}
              className="absolute -right-6 top-10 hidden w-48 rounded-3xl border border-white/20 bg-secondary p-4 text-left shadow-2xl shadow-cyan-900/60 sm:block"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                Live metric
              </p>
              <p className="mt-2 text-3xl font-semibold text-cyan-200">99.7%</p>
              <p className="text-xs text-white/60">Automation accuracy</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroShowcase;

