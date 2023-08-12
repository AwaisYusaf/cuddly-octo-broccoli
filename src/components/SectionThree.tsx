"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};
export default function SectionThree({ }: Props) {
  return (
    <div className="flex flex-col space-y-5 items-center py-12 lg:py-20 px-6 overflow-x-hidden">
      <motion.div
        initial={{ scale: 0.1, opacity: 0.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image src="/assets/book-cover.png" className="rounded-md lg:h-[80vh] md:h-[70vh] h-[60vh] w-fit" width={800} height={1200} alt="" />
      </motion.div>
      <a href="/assets/ebook.pdf" download className="self-start bg-[#9794C9] rounded uppercase px-8 py-2 text-white font-semibold mx-auto">
        Get EBook
      </a>
    </div>
  );
}
