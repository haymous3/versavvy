"use client";
import {motion} from "framer-motion";

import Image, {StaticImageData} from "next/image";

type HeroProps = {
  background: string;
  image: StaticImageData | string;
  children: React.ReactNode;
};

const Hero = ({children, image, background}: HeroProps) => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-28 text-white"
      style={{backgroundImage: `url(/${background})`}}
    >
      <motion.div
        className="absolute inset-0 bg-[#04020a]/80"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.8}}
      />
      <motion.div
        className="absolute inset-0 opacity-40"
        initial={{opacity: 0}}
        animate={{opacity: 0.4}}
        transition={{duration: 1.2}}
      >
        <div className="absolute -top-10 left-10 h-64 w-64 rounded-full bg-fuchsia-600/40 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/40 blur-[200px]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 lg:flex-row lg:items-center">
        <motion.div
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.15}}
          className="w-full max-w-2xl space-y-6 text-center lg:text-left"
        >
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_35px_120px_-45px_rgba(2,0,20,0.9)] backdrop-blur">
            {children}
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 60}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.9, delay: 0.3}}
          className="flex w-full justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 -z-10 rounded-[34px] bg-gradient-to-l from-cyan-400/30 to-primary/30 blur-3xl" />
            <div className="rounded-[34px] border border-white/15 bg-white/5 p-4 backdrop-blur">
              <Image
                src={image}
                placeholder="blur"
                quality={80}
                className="h-[420px] w-full rounded-[28px] object-cover"
                alt="Hero visual"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// "use client";
// import {motion} from "framer-motion";
// import Image, {StaticImageData} from "next/image";

// type HeroProps = {
//   background: string;
//   image: StaticImageData | string;
//   children: React.ReactNode;
// };

// const Hero = ({children, image, background}: HeroProps) => {
//   return (
//     <section
//       className="relative bg-cover bg-center min-h-[80vh] flex items-center justify-center"
//       style={{backgroundImage: `url(/${background})`}}
//     >
//       {/* Overlay */}
//       <motion.div
//         className="absolute inset-0 bg-black/65"
//         initial={{opacity: 0}}
//         animate={{opacity: 1}}
//         transition={{duration: 1.2, ease: "easeOut"}}
//       />

//       {/* Content */}
//       <motion.div
//         className="relative z-10 text-center w-full text-white px-4 sm:px-6 md:px-10"
//         initial={{opacity: 0, y: 40}}
//         animate={{opacity: 1, y: 0}}
//         transition={{duration: 1.2, ease: "easeOut", delay: 0.3}}
//       >
//         <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12">
//           {/* Children (text/buttons) */}
//           <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md sm:max-w-lg md:max-w-xl">
//             {children}
//           </div>

//           {/* Image */}
//           <div className="flex justify-center">
//             <Image
//               src={image}
//               placeholder="blur"
//               quality={70}
//               className="w-[250px] sm:w-[350px] md:w-[500px] lg:w-[600px] h-auto rounded-2xl object-cover"
//               alt="Hero Image"
//             />
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
