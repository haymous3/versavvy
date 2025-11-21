"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

const testimonials = [
  {
    quote:
      "Versavvy was the only team that could thread strategy, data engineering and AI design into one sprint. We shipped a new automation layer in 6 weeks.",
    name: "Adaeze M.",
    role: "Chief Digital Officer, Tier-1 Bank",
  },
  {
    quote:
      "They helped us reimagine our entire service experience. The mix of storytelling, prototypes and real-time insight dashboards won fast adoption.",
    name: "Samuel O.",
    role: "Head of Experience, Pan-African Telco",
  },
  {
    quote:
      "Our analytics went from fragmented to predictive. Their enablement sessions made our own teams confident to iterate without hand-holding.",
    name: "Lerato P.",
    role: "COO, Logistics Network",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-[#0b132b] py-20 text-white">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
          Voices from partners
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Momentum validated by the people we build with.
        </h2>

        <div className="relative mt-12 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -20}}
              transition={{duration: 0.5}}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white/90 backdrop-blur"
            >
              <p className="text-lg leading-relaxed">
                “{testimonials[active].quote}”
              </p>
              <div className="mt-6 text-sm uppercase tracking-wide text-cyan-200">
                {testimonials[active].name}
              </div>
              <p className="text-xs text-white/60">{testimonials[active].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4 text-white/70">
            <button
              onClick={prev}
              className="rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.3em] transition hover:border-white hover:text-white"
            >
              Prev
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-8 rounded-full transition ${
                    active === index ? "bg-cyan-300" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.3em] transition hover:border-white hover:text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

