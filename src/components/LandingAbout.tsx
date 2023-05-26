import React from "react";
import { Hepta_Slab } from "next/font/google";
const heptaSlab = Hepta_Slab({
  weight: ["300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

type Props = {};

export default function LandingAbout({}: Props) {
  return (
    <div className="relative z-20 bg-[url('/assets/landing-about.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute w-full h-full z-0 bg-white/70"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-20 w-[90%] lg:w-[85%] mx-auto space-y-4">
        <div className="z-50 flex flex-col space-y-5 ">
          <h2 className={`${heptaSlab.className} text-4xl font-semibold`}>
            {"LISA’S"} EXPERIENCE AND EDUCATION
          </h2>
          <p className="text-gray-500 text-lg flex-1">
            Lisa attended college and successfully completed the Career
            Development Practitioner program and earned her certification. It
            gives people the tools and skills to help them make career and
            career decisions. She is also good at writing resumes and cover
            letters. Lisa became completely self-employed in 2015. She took a
            self-employed course and learned everything she needed to start a
            legitimate business. After completing this course of hers, she
            founded her own driving school. She researched everything she needed
            to start this business and then started it all on her own.{" "}
          </p>
          <button className="px-8 self-start tracking-wider font-semibold py-3 uppercase bg-blue-600 rounded text-white">
            Read More
          </button>
        </div>

        <div className="z-50 flex flex-col space-y-5 ">
          <h2 className={`${heptaSlab.className} text-4xl font-semibold`}>
            {"LISA'S"} ATTRIBUTES
          </h2>
          <p className="text-gray-500 text-lg flex-1">
            Lisa is a very caring, supportive, patient, and empathetic person
            who really wants to help people. is encouraging and it goes a long
            way in helping you make positive progress. Rest assured that Lisa is
            not judgmental and you will never be judged for what you disclose in
            a session. , remember that Lisa remains neutral in all the
            entanglements and may offer another perspective to think about. She
            always looks at the situation from the outside and looks inside. She
            won’t criticize or condemn you, but giving an outside perspective
            can help bring about positive change. In this case, Lisa will always
            ask permission to share this insight.
          </p>
          <button className="px-8 self-start tracking-wider font-semibold py-3 uppercase bg-blue-600 rounded text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
