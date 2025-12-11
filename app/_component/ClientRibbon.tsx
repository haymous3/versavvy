"use client";

import {motion} from "framer-motion";

const logos = [
  {src: "/white_logo.png", alt: "White logo"},
  {src: "/dark_logo.png", alt: "Dark logo"},
  {src: "/globe.svg", alt: "Globe icon"},
  {src: "/window.svg", alt: "Window icon"},
  {src: "/file.svg", alt: "File icon"},
];

const ClientRibbon = () => {
  return (
    <section className="bg-[#060912] py-10 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm uppercase tracking-[0.4em] text-white/50">
            Trusted by teams shipping bold ideas
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        <div className="mt-8 overflow-hidden">
          <motion.div
            initial={{x: 0}}
            animate={{x: "-50%"}}
            transition={{duration: 20, repeat: Infinity, ease: "linear"}}
            className="flex min-w-full items-center gap-12"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex h-16 w-32 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >
                <img src={logo.src} alt={logo.alt} className="h-10 w-auto" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientRibbon;
