"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Developpeur web/Mobile
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Offrir
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              la meilleur{" "}
            </span>
            experience de projet
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Je suis BOUBALA NDIAYE Karl Evans developpeur d&apos;application web et mobile
          formé à l&apos;institut Nationnal de la Poste de Technologie de l&apos;Information et de la Communication 
          diplomé en licence 3 en Genie logiciel née à Port gentil ayant eu un Baccalaureat Technologique en electronique 
          je me rend disponible pour realiser tous vos projets et meme pour integrer un equipe dynamique pour realiser des projets,
.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Lire la suite!
        </motion.a>
      </div>

      <motion.div
  variants={slideInFromRight(0.8)}
  className="relative w-full h-full flex justify-center items-center"
>
  <Image
    src="/pp5.png"
    alt="work icons"
    height={450}
    width={400}
    className="absolute top-0 left-0"
  />
  <Image
    src="/mainIconsdark.svg"
    alt="logo"
    width={650}
    height={500}
    className="cursor-pointer hover:animate-slowspin relative z-10"
  />
</motion.div>

    </motion.div>
  );
};

export default HeroContent;
