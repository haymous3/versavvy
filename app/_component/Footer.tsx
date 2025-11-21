"use client";

import {motion} from "framer-motion";
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

import Button from "./Button";
import {COMPANY_DESCRIPTION, COMPANY_APPROACH} from "../content/company";

const links = [
  {label: "Home", href: "/"},
  {label: "About", href: "/about_us"},
  {label: "Services", href: "/services"},
  {label: "Contact", href: "/contact_us"},
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050610] text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-cyan-400/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20">
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.4}}
          transition={{duration: 0.8}}
          className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur"
        >
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm space-y-4">
              <img src="/white_logo.png" alt="logo" className="h-16 w-16" />
              <p className="text-sm text-white/70">{COMPANY_DESCRIPTION}</p>
              <p className="mt-4 text-sm text-white/60">{COMPANY_APPROACH}</p>
              <div className="flex gap-4 text-white/70">
                {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      aria-label="social-link"
                      className="rounded-full border border-white/20 p-3 transition hover:border-white hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ),
                )}
              </div>
            </div>

            <div className="grid flex-1 gap-8 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
                  Navigation
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
                  Contact
                </h4>
                <div className="mt-4 space-y-4 text-sm text-white/80">
                  <div className="flex gap-3">
                    <PhoneIcon className="h-5 w-5 text-cyan-300" />
                    <span>+234 813 738 6134</span>
                  </div>
                  <div className="flex gap-3">
                    <EnvelopeIcon className="h-5 w-5 text-cyan-300" />
                    <span>contact@versavvy.com</span>
                  </div>
                  <div className="flex gap-3">
                    <MapPinIcon className="h-5 w-5 text-cyan-300" />
                    <span>26 Commercial Avenue, Yaba, Lagos, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm">
              <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
                Stay in the loop
              </h4>
              <p className="mt-4 text-sm text-white/70">
                Get monthly insights on AI, design systems and digital
                transformation across Africa.
              </p>
              <form className="mt-6 flex gap-3">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-full border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none"
                />
                <Button
                  variant="primary"
                  className="px-5 py-3 text-sm"
                  icon={<span className="text-xl">→</span>}
                  type="submit"
                >
                  Join
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs uppercase tracking-[0.3em] text-white/50">
            © {new Date().getFullYear()} Versavvy Limited. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
