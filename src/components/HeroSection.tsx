"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function HeroSection({}: Props) {
  return (
    <>
      <div className="relative bg-[url('/assets/hero-img.png')] min-h-[90vh] bg-no-repeat bg-cover bg-top bg-fixed flex flex-col justify-center">
        <div className="absolute bg-transparent bg-hero-gradient w-full h-full z-10"></div>
        <div className="w-[85%] mx-auto flex flex-col space-y-6">
          <h2 className="z-20 text-[#04ABD3] text-6xl w-[55%]">
            {"You've"} Got A Friend{" "}
            <strong>
              Chat and <span className="text-[#B30E4A]">Mentoring</span> Service
            </strong>
          </h2>

          <motion.h3
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="z-20 font-extrabold uppercase text-white text-xl"
          >
            LIFE COACHING WITH A TWIST!
          </motion.h3>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="z-20 w-[50%] text-white text-lg"
          >
            We are here to lend that helping hand to anyone who is suffering
            from isolation or loneliness. You might need someone to talk to when
            you are having a rough day or you might need one of our expert
            coaches guidance to help you move out of that challenging time
            towards something better and more positive. Or you might need some
            healing exercises to help you feel more calm and centred during a
            highly stressful time in your life.
          </motion.p>
        </div>
      </div>
      {/* <HeroEnd /> */}
    </>
  );
}
