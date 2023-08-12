import React from "react";
import testimonials from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";

type Props = {};

export default function Testimonials({ }: Props) {
  return (
    <div className="tm-bg2">
      {/* <div className="py-8 border-y border-gray-400 bg-white">
        <p className="mx-auto lg:text-2xl font-semibold lg:font-medium text-center w-[95%] md:w-[90%] lg:w-[80%]">
          <span className="text-blue-500">Lisa</span> looks forward to speaking
          with you about any trials you wish to share.
        </p>
      </div> */}
      <div className="flex flex-col items-center text-center py-8 lg:py-12">
        <div className="text-center w-[90%] lg:w-[85%] mx-auto space-y-2">
          <h1 className="text-3xl uppercase text-white font-semibold">Testimonials</h1>
          {/* <h2 className="text-lg md:text-3xl lg:text-4xl mb-2 text-white">
            Results I have helped create
          </h2> */}
          <p className="text-sm uppercase text-gray-200">
            Hear out what my clients say about me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-[85%] mx-auto pt-4 lg:pt-12 gap-4">
          <div></div>
          {testimonials.map((t: any, i: number) => {
            return <TestimonialCard key={i} data={t} />;
          })}
          <div></div>
        </div>
      </div>
    </div>
  );
}

("I gained so much confidence in my ability to connect and deepen my relationships with people. It’s amazing how much easier it has been to meet new people and create instant connections. I have the exact same personality, the only thing that has changed is my mindset and a few behaviors.");
