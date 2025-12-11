"use client";

import {motion} from "framer-motion";
import ChooseUs1 from "@/public/choose_us_1.jpg";
import ChooseUs2 from "@/public/choose_us_2.jpg";
import {CheckIcon} from "@heroicons/react/24/solid";
import Image from "next/image";

const ChooseUs = () => {
  const chooseUsDetails = [
    {
      img: <CheckIcon className="text-primary mx-auto w-10 h-10" />,
      heading: "Expertise",
      text: "Our team of experienced professionals has a deep understanding of the latest technologies and how to apply them to your business. We can help you make informed decisions about your IT infrastructure and systems to ensure that they are reliable, scalable, and cost-effective.",
    },
    {
      img: <CheckIcon className="text-primary mx-auto w-10 h-10" />,
      heading: "Customized solutions",
      text: "No two businesses are exactly alike, and we understand that one-size-fits-all solutions don’t work. We’ll work with you to understand your specific needs and goals, and then develop a customized plan to help you achieve them.",
    },
    {
      img: <CheckIcon className="text-primary mx-auto w-10 h-10" />,
      heading: "Comprehensive services",
      text: "We offer a range of IT and business consulting services, including strategy and planning, implementation, and ongoing support, so you can rely on us for all your needs.",
    },
  ];

  return (
    <div className="block 2xl:flex flex-wrap mt-20 2xl:mt-40 justify-between px:10 2xl:px-24 items-center gap-12">
      <div className="px-10 2xl:px-0 flex-1 2xl:min-w-[300px]">
        <div className="leading-10 mb-8">
          <h2 className="text-3xl font-bold">
            Why <span className="text-primary">Choose Us?</span>
          </h2>
          <p className="text-[#666666]">
            Choosing Versavvy for your business’s needs affords you the
            following benefits to mention a few:
          </p>
        </div>

        <div>
          {chooseUsDetails.map((chooseUs, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.6, delay: i * 0.2, ease: "easeOut"}}
              whileHover={{scale: 1.02}}
              className="flex gap-6 mt-8 items-start"
            >
              <div className="shrink-0 bg-gray-100 p-3 rounded-full shadow-md hover:shadow-xl transition-shadow duration-300">
                {chooseUs.img}
              </div>
              <div>
                <h2 className="font-semibold text-xl mb-1">
                  {chooseUs.heading}
                </h2>
                <p className="text-justify text-[#666666] max-w-[550px] leading-7">
                  {chooseUs.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative mt-15 2xl:mt-0 flex-1 min-w-[300px] flex justify-center items-center">
        <motion.div
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.8, ease: "easeOut"}}
          whileHover={{scale: 1.03, y: -5}}
          className="relative z-10 w-[70%] shadow-lg shadow-gray-300 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <Image
            src={ChooseUs1}
            placeholder="blur"
            quality={70}
            alt="Team image"
            className="w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{y: 80, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 1, ease: "easeOut", delay: 0.3}}
          whileHover={{scale: 1.03, y: -5}}
          className="absolute top-10 right-20 w-[60%] shadow-lg shadow-gray-300 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 opacity-90"
        >
          <Image
            src={ChooseUs2}
            placeholder="blur"
            quality={70}
            alt="Team image"
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ChooseUs;
