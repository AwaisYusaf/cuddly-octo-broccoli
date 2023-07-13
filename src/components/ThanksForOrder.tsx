"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Header from "./Header";

import { InlineWidget } from "react-calendly";

export default function ThanksForOrder() {
  // const { width, height } = useWindowSize();

  const [pieces, setPieces] = useState(150);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPieces(0);
    }, 3500);
  }, []);
  if (window == undefined) {
    return <div></div>;
  }

  return (
    <>
      <div className="relative">
        <Header selected="packages" />
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={pieces}
        />
        <motion.div
          initial={{ opacity: 0, scaleY: 0.5 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-16 flex flex-col space-y-12"
        >
          <p className="border border-gray-500 w-full py-4 text-center text-base lg:text-lg">
            Thanks for placing your order!
          </p>
        </motion.div>
        <div className="">
          <p className="text-center">
            Click{" "}
            <button
              className="text-purple-600"
              onClick={() => setShowModal(true)}
            >
              here
            </button>{" "}
            to schedule meeting with Lisa.
          </p>
          <div
            className={`${showModal ? "" : "hidden"} absolute top-[10%] w-full`}
          >
            <InlineWidget url="https://calendly.com/awaisyusaf" />
          </div>
        </div>
      </div>
    </>
  );
}
