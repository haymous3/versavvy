"use client";

import {motion} from "framer-motion";
import Image from "next/image";

import team1 from "@/public/team_1.png";
import team2 from "@/public/team_2.png";

const teamDetail = [
  {
    img: team1,
    title: "Embedded delivery pods",
    copy:
      "Cross-functional squads of strategists, designers, and engineers plug directly into your team to keep momentum high.",
  },
  {
    img: team2,
    title: "Culture of learning & craft",
    copy:
      "We run weekly design crits, engineering guilds, and AI labs so every build benefits from collective intelligence.",
  },
];

const Team = () => (
  <section className="bg-white py-20">
    <div className="mx-auto max-w-6xl px-5">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          The Versavvy way
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-[#07030d] sm:text-4xl">
          Purpose-built teams obsessed with outcomes.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base text-[#4c4c4c]">
          From discovery through launch, you collaborate with a dedicated pod
          that ships fast, communicates clearly, and iterates with data.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {teamDetail.map((team, index) => (
          <motion.div
            key={team.title}
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.4}}
            transition={{duration: 0.7, delay: index * 0.1}}
            className="rounded-[34px] border border-[#f0ecff] bg-[#faf8ff] p-6 shadow-[0_25px_60px_-35px_rgba(49,36,80,0.45)]"
          >
            <div className="overflow-hidden rounded-[28px]">
              <Image
                src={team.img}
                placeholder="blur"
                quality={80}
                alt={team.title}
                className="h-64 w-full rounded-[28px] object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-primary">
              {team.title}
            </h3>
            <p className="mt-3 text-sm text-[#4c4c4c]">{team.copy}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
