import Image from "next/image";
import {
  BeakerIcon,
  UsersIcon,
  ShieldCheckIcon,
  FireIcon,
  StarIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

import image2 from "@/public/image_2.png";
import image3 from "@/public/image_3.png";
import {CORE_VALUES} from "../content/company";

const iconStack = [
  BeakerIcon,
  StarIcon,
  ShieldCheckIcon,
  FireIcon,
  UsersIcon,
  AcademicCapIcon,
];
const imageStack = [image2, image3];

const Features = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            Core values
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-secondary sm:text-4xl">
            Principles that shape every engagement.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-[#4c4c4c]">
            These pillars anchor the way we collaborate, design, and build. They
            keep execution thoughtful, human, and future-proof.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {CORE_VALUES.map((value, index) => {
            const Icon = iconStack[index % iconStack.length];
            const image = imageStack[index % imageStack.length];
            return (
              <div
                key={value.title}
                className="rounded-[32px] border border-[#f0ecff] bg-[#faf8ff] p-6 shadow-[0_25px_60px_-45px_rgba(49,36,80,0.6)]"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="flex-1 space-y-4">
                    <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-primary">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[#4c4c4c]">{value.description}</p>
                  </div>
                  <div className="flex-1 overflow-hidden rounded-3xl">
                    <Image
                      src={image}
                      alt={value.title}
                      className="h-48 w-full rounded-3xl object-cover"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
