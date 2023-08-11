"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function HeroSection({ }: Props) {
  return (
    <>
      <div className="relative bg-[url('/assets/hero-img.png')] min-h-fit py-10 lg:py-0 lg:min-h-[90vh] bg-no-repeat bg-cover bg-top bg-fixed flex flex-col justify-center">
        <div className="absolute bg-transparent bg-hero-gradient w-full h-full z-10"></div>
        <div className="w-[90%] lg:w-[85%] mx-auto flex flex-col space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-14">
          <h2 className="z-20 text-[#04ABD3] text-5xl lg:text-6xl w-[90%] md:w-[70%] lg:w-[55%]">
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
            className="z-20 font-extrabold uppercase text-base lg:text-xl italic text-white"
          >
            LIFE COACHING WITH A TWIST!
          </motion.h3>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="z-20 w-full mx-auto lg:mx-0 lg:w-[50%] text-white text-base lg:text-lg"
          >
            At {"You've"} Got a Friend, our mission is to extend a supportive
            hand to those experiencing isolation or loneliness. Whether you
            require a compassionate listener to turn to on difficult days or
            seek the expert guidance of our Mentor to navigate challenging times
            and embrace a brighter future. Or maybe possibly during your
            session, you would prefer a healing exercises to cultivate inner
            calm and balance during periods of high stress, whatever it is, we
            are there to provide the assistance that you need.
            <br />
            Check out our very affordable rates below and if you have any
            questions, do not hesitate to contact us. We are always ready to
            assist you in whatever ways and means you need. Just reach out, we
            are only a click of the button away!
            {/* 
            We are here to lend that helping hand to anyone experiencing
            isolation, lonliness or depression. You might need someone to talk
            to if you are having a rough day. Maybe you need mentoring or
            coaching to help you move out of a difficult situation, obtain
            needed goals, have someone to support you, encourage you and even
            mentor you. Or it could be that you want our Mentor to guide you
            through some healing exercises. Whatever it is that ails you, we are
            here to support you through your situation. */}
          </motion.p>
        </div>
      </div>
      {/* <HeroEnd /> */}
    </>
  );
}
