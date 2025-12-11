"use client";

import {motion} from "framer-motion";
import Image from "next/image";

import Button from "@/app/_component/Button";

import aboutUs from "@/public/about_us.png";

const Hiring = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-[40px] border border-[#f0ecff] bg-gradient-to-br from-[#faf8ff] via-white to-[#eef7ff] p-10 shadow-[0_35px_120px_-45px_rgba(49,36,80,0.4)]">
          <div className="absolute -left-24 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.4}}
              transition={{duration: 0.6}}
              className="space-y-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                Join the studio
              </p>
              <h2 className="text-3xl font-semibold text-[#07030d] sm:text-4xl">
                We’re building a guild of technologists, storytellers and
                ambitious problem solvers.
              </h2>
              <p className="text-base text-[#4c4c4c]">
                Versavvy hires curious people who thrive in collaborative, fast
                iterations. Explore roles in strategy, design, engineering,
                product ops and AI research across Lagos, Nairobi, Kigali and
                remote.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-[#4c4c4c]">
                {["Hybrid rituals", "Education budget", "Global partners"].map(
                  (perk) => (
                    <span
                      key={perk}
                      className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary shadow"
                    >
                      {perk}
                    </span>
                  ),
                )}
              </div>
              <Button className="px-6 py-3 text-sm" href="/contact_us">
                View open positions
              </Button>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 40}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.4}}
              transition={{duration: 0.7, delay: 0.15}}
              className="relative"
            >
              <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-tr from-primary/20 to-cyan-400/20 blur-3xl" />
              <Image
                src={aboutUs}
                alt="Team working together"
                placeholder="blur"
                quality={80}
                className="w-full rounded-[32px] object-cover shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary shadow-lg">
                Now hiring
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hiring;
