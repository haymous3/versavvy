"use client";

import {motion} from "framer-motion";
import Image, {StaticImageData} from "next/image";
import React from "react";

import Button from "./Button";

type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: React.ReactNode;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  image: StaticImageData;
  stats?: Array<{label: string; value: string}>;
  ctas?: CTA[];
  background?: string;
};

const PageHero = ({
  eyebrow,
  title,
  highlight,
  description,
  image,
  stats = [],
  ctas = [],
  background = "from-[#07030d] via-[#120a1c] to-[#0b132b]",
}: PageHeroProps) => {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br ${background} pt-28 pb-16 text-white`}
    >
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-fuchsia-500/40 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-400/30 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-5 lg:flex-row lg:items-center lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            {title}{" "}
            {highlight && <span className="text-cyan-300">{highlight}</span>}
          </h1>
          <p className="mt-6 text-lg text-white/80">{description}</p>

          {!!ctas.length && (
            <div className="mt-8 flex flex-wrap gap-4">
              {ctas.map((cta) => (
                <Button
                  key={cta.label}
                  href={cta.href}
                  variant={cta.variant}
                  icon={cta.icon}
                  className="px-6 py-3 text-sm"
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          )}

          {!!stats.length && (
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
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
          )}
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 60}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.9, delay: 0.15}}
          className="relative w-full max-w-lg"
        >
          <div className="absolute inset-0 -z-10 rounded-[34px] bg-gradient-to-tr from-cyan-400/20 to-fuchsia-500/20 blur-3xl" />
          <div className="relative rounded-[34px] border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
            <Image
              src={image}
              alt="Page hero"
              className="h-[360px] w-full rounded-[26px] object-cover"
              placeholder="blur"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;

