"use client";

import Image from "next/image";

import Service_1 from "@/public/service_1.jpg";
import Service_2 from "@/public/service_2.jpg";
import Service_3 from "@/public/service_3.jpg";
import Service_4 from "@/public/service_4.jpg";
import Service_5 from "@/public/service_5.jpg";
import Service_6 from "@/public/service_6.jpg";
import {SERVICE_PORTFOLIO} from "../content/company";

const OurServices = () => {
  const serviceImages = [
    Service_1,
    Service_2,
    Service_3,
    Service_4,
    Service_5,
    Service_6,
  ];
  const OurServiceDetails = SERVICE_PORTFOLIO.map((service, index) => ({
    img: serviceImages[index % serviceImages.length],
    heading: service.title,
    text: service.description,
  }));

  return (
    <>
      <h2 className="text-4xl text-center font-bold mt-30">
        Our <span className="text-primary">Services</span>
      </h2>
      {OurServiceDetails.map((service, i) => (
        <div
          key={i}
          className={`block 2xl:flex justify-between items-center px-10 2xl:px-100 mt-10 2xl:mt-25 ${
            i % 2 === 0 ? "flex-row-reverse" : ""
          }`}
        >
          <Image
            src={service.img}
            placeholder="blur"
            quality={70}
            className="w-full 2xl:w-[45%] relative top:0 2xl:-top-10 2xl:left-6 left-0"
            alt="Service image"
          />
          <div className="mt-10 2xl:mt-0 max-w-md leading-7">
            <h1 className="bg-primary rounded-4xl text-white font-bold w-fit px-4 py-4 mb-6">
              {i + 1}
            </h1>
            <h2 className="text-3xl font-bold text-gray-800">
              {service.heading}
            </h2>
            {service.text.split("\n").map((line, index) => (
              <p
                key={index}
                className=" text-justify text-md text-gray-700 mt-2"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default OurServices;
