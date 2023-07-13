import React from "react";

type Props = {};

export default function Section2({}: Props) {
  return (
    <div className="relative bg-[url('/assets/disclaimar.jpg')]  bg-cover bg-top bg-fixed bg-no-repeat">
      <div className="absolute w-full bg-[#444745]/80 h-full z-10"></div>
      <div className="w-[90%] md:w-[85%] lg:w-[76%] mx-auto flex py-12 flex-col items-center">
        <h1 className="font-semibold text-5xl z-20 mb-8 text-center text-white">
          WHAT BENEFITS CAN YOU EXPECT TO GET FROM OUR SERVICES?
        </h1>
        <ul className="text-gray-200 leading-8 text-base lg:text-lg z-20 list-outside list-disc flex flex-col space-y-6">
          <li className="">
            {
              "Relief and help from stressful situations by having a listening ear to hear you and support you"
            }
          </li>
          <li>
            {
              "Relief from loneliness by having a caring and listening ear on the other end of the phone"
            }
          </li>
          <li>
            Help on employment or career decisions, finding your purpose or
            doing your passion
          </li>
          <li>
            Help with any Narcissist related relationship problems even if it
            means someone to talk to who understands what you are going through.
            Lisa can also offer advice and guidance as well as action plans to
            leave or get through ruts and depressions over it
          </li>
          <li>
            Help with keeping on track, having someone hold you accountable to
            action plans to lead you towards your goals
          </li>
          <li>Having someone help you with making decisions</li>
          <li>
            Brainstorming, helping with ideas of various different things you
            can do to get out of ruts
          </li>
          <li>Goal setting ideas and exercises</li>
          <li>
            Help with starting a business if that is what path you want to take
          </li>
          <li>
            Having the option of receiving different healing exercises depending
            on your circumstance
          </li>
          <li>Making positive progress in your life</li>
          <li>
            Feeling better after your calls (our goal is to ensure that you will
            feel better at the end of your call than you did before it)
          </li>
        </ul>
      </div>
    </div>
  );
}
