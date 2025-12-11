"use client";

import {motion} from "framer-motion";

import Button from "./Button";

const ContactUsForm = () => {
  const inputClasses =
    "w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40";

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#07030d] via-[#120a1c] to-[#0b132b]" />
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-fuchsia-500/40 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/30 blur-[200px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.3}}
          transition={{duration: 0.8}}
          className="grid gap-10 rounded-[40px] border border-white/15 bg-white/5 p-8 text-white backdrop-blur lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              Let’s build together
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              Drop us a message and we’ll respond within one business day.
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Tell us about your products, teams or challenge. A lead strategist
              will reply with next steps, timelines and recommended talent pods.
            </p>

            <form className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
                  Full name
                  <input type="text" placeholder="Adaeze Okonkwo" className={inputClasses} />
                </label>
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
                  Work email
                  <input type="email" placeholder="you@company.com" className={inputClasses} />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
                  Phone / WhatsApp
                  <input type="tel" placeholder="+234 810 000 0000" className={inputClasses} />
                </label>
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
                  Company / Team
                  <input type="text" placeholder="Versavvy Labs" className={inputClasses} />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
                What do you want to build?
                <textarea
                  rows={5}
                  placeholder="Tell us about your goals, timelines and any context we should know…"
                  className={`${inputClasses} resize-none`}
                />
              </label>

              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" className="px-6 py-3 text-sm">
                  Send message
                </Button>
                <p className="text-xs text-white/60">
                  Average response time: <span className="font-semibold text-white">4 hours</span>
                </p>
              </div>
            </form>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-black/20 p-6">
            <h3 className="text-lg font-semibold">What happens next?</h3>
            <ul className="mt-6 space-y-4 text-sm text-white/80">
              {[
                "We reply with a discovery call invite tailored to your inputs.",
                "A mini playbook outlining squads, runway and success metrics.",
                "Optional NDA and shared workspace to move fast together.",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Office hours</p>
              <p className="mt-2 text-2xl font-semibold text-white">Mon - Fri / 9am - 7pm WAT</p>
              <p className="mt-2 text-sm text-white/70">
                Need something urgent? Ping us on WhatsApp or call +234 813 738 6134.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsForm;
