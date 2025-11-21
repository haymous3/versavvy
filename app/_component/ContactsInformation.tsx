"use client";

import {motion} from "framer-motion";
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/solid";

import Button from "./Button";

const contactDetails = [
  {
    heading: "Studio",
    subheading: "Lagos HQ",
    icon: MapPinIcon,
    text: "26 Commercial Avenue, Yaba, Lagos, Nigeria",
    actionLabel: "View on Map",
    actionHref: "https://goo.gl/maps/Hqk6sUKdcs62",
  },
  {
    heading: "Talk to us",
    subheading: "Anytime, 9am – 7pm WAT",
    icon: PhoneIcon,
    text: "+234 813 738 6134",
    actionLabel: "Call / WhatsApp",
    actionHref: "tel:+2348137386134",
  },
  {
    heading: "Collaborate",
    subheading: "Partnerships & projects",
    icon: EnvelopeIcon,
    text: "contact@versavvy.com",
    actionLabel: "Send a Message",
    actionHref: "mailto:contact@versavvy.com",
  },
];

const ContactsInformation = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#07030d] via-[#120a1c] to-[#0b132b]" />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-32 top-16 h-64 w-64 rounded-full bg-fuchsia-500/40 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/30 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 text-white">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            Get in touch
          </p>
          <h2 className="mt-4 text-3xl font-semibold">
            Three ways to start the conversation today.
          </h2>
          <p className="mt-4 text-sm text-white/70">
            Prefer email, WhatsApp or a studio visit? We answer within a few
            hours and match you with the right strategist immediately.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {contactDetails.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.heading}
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.3}}
                transition={{duration: 0.6, delay: index * 0.1}}
                className="rounded-[28px] border border-white/10 bg-white/10 p-6 text-center backdrop-blur"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/60">
                  {contact.subheading}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{contact.heading}</h3>
                <p className="mt-3 text-sm text-white/70">{contact.text}</p>
                <Button
                  className="mt-6 px-4 py-2 text-sm"
                  variant="ghost"
                  href={contact.actionHref}
                >
                  {contact.actionLabel}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactsInformation;
