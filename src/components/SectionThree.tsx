"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};
export default function SectionThree({}: Props) {
  return (
    <div className="flex flex-col items-center py-12 lg:py-20 overflow-x-hidden">
      <motion.div
        initial={{ x: 200, scale: 0.8, opacity: 0.5 }}
        whileInView={{ x: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src="/assets/ss.png" width={600} height={800} alt="" />
      </motion.div>
      <button className="px-8 py-3 uppercase bg-blue-600 rounded text-white">
        Download
      </button>
    </div>
  );
}
