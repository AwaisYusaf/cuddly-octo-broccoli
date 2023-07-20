"use client";
import React from "react";
import PricingCard from "./PricingCard";
import Link from "next/link";

type Props = {};

export default function PricingCards({}: Props) {
  //Package IDs:
  //1. Basic
  //2. Standard
  //3. Premium

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {"You've"} Got A Friend Chat
            <br /> and Mentoring Service
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Check out our very affordable rates below and if you have any
            questions, do not hesitate to{" "}
            <Link href="/contact" className="text-blue-600">
              contact us
            </Link>
            .
          </p>
        </div>
        <div className="space-y-8 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <PricingCard
            data={{
              title: "One",
              price: "30",
              tagLine: "1 hour of individual chatting or coaching",
              target: "/packages?id=1",
            }}
          />
          <PricingCard
            data={{
              title: "Two",
              price: "140",
              tagLine: "5 hour of individual chatting or coaching",
              target: "/packages?id=2",
            }}
          />
          <PricingCard
            data={{
              title: "Three",
              price: "270",
              tagLine: "10 hour of individual chatting or coaching",
              target: "/packages?id=3",
            }}
          />
          <PricingCard
            data={{
              title: "Four",
              price: "400",
              tagLine: "15 hour of individual chatting or coaching",
              target: "/packages?id=4",
            }}
          />
          <PricingCard
            data={{
              title: "Five",
              price: "510",
              tagLine: "20 hour of individual chatting or coaching",
              target: "/packages?id=5",
            }}
          />
          <PricingCard
            data={{
              title: "Sixth",
              price: "640",
              tagLine: "25 hour of individual chatting or coaching",
              target: "/packages?id=6",
            }}
          />
        </div>
      </div>
    </div>
  );
}
