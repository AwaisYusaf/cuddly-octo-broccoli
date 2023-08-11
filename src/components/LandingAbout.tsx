import React from "react";
import { Hepta_Slab } from "next/font/google";
import Link from "next/link";
const heptaSlab = Hepta_Slab({
  weight: ["300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

type Props = {};

export default function LandingAbout({ }: Props) {
  return (
    <div className="relative z-20 bg-[url('/assets/landing-about.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute w-full h-full z-0 bg-white/70"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-20 w-[90%] lg:w-[85%] mx-auto space-y-4">
        <div className="z-50 flex flex-col space-y-5 ">
          <h2 className={`${heptaSlab.className} text-4xl font-semibold`}>
            {"LISA’S"} EXPERIENCE AND EDUCATION
          </h2>
          <p className="text-gray-600 text-lg flex-1">
            {
              "Lisa brings a wealth of diverse experience and education to her role as a life coach. She completed a Career Development Practitioner program, equipping her with the tools and skills to assist individuals in navigating career transitions and job changes. With expertise in crafting resumes and cover letters, she can help you present your best self professionally."
            }
            <br />
            <br />
            {
              "In 2015, Lisa embarked on a journey of self-employment. She undertook a comprehensive Self-Employment course, acquiring the knowledge necessary to establish a successful business. With determination and resourcefulness, she founded her own driving school, managing all aspects independently. Lisa built a website from scratch, honed her advertising strategies, and hired SEO experts. She excelled in customer service, overseeing scheduling, invoicing, and even payroll. Her ability to handle administration and develop effective pricing, packages, and marketing strategies contributed to the success of her business."
            }
            <br />
            <br />
            {
              "In 2022, Lisa embraced a new chapter in her life by obtaining her Life Coaching certificate. She consistently seeks personal and professional growth through various courses and self-development programs. Her broad knowledge includes understanding narcissistic abuse, where she has immersed herself in extensive reading, course-taking, and video-watching. Lisa's commitment to continuous learning enables her to offer well-rounded support in this area as well."
            }
            <br />
            <br />
            {
              "Currently, Lisa is expanding her expertise through a course on Neuro-wellness. This program focuses on managing an overstimulated and stressed brain, providing her with additional tools to help clients effectively address these challenges. With a diverse range of skills and knowledge acquired from her educational and professional background, Lisa possesses a vast toolkit to draw from to help serve you the best."
            }
          </p>
          <Link href="/contact"

            className="self-start bg-[#9794C9] rounded uppercase px-8 py-2 text-white font-semibold">
            Read More
          </Link>
        </div>

        <div className="z-50 flex flex-col space-y-5 ">
          <h2 className={`${heptaSlab.className} text-4xl font-semibold`}>
            {"LISA'S"} ATTRIBUTES
          </h2>
          <p className="text-gray-600 text-lg flex-1">
            {
              "Lisa is a compassionate, supportive, patient, and empathetic coach dedicated to helping individuals.  Her greatest attribute is her gift of encouragement.  What this means is she has an inner passion to encourage you, never growing tired or giving up on you, she is driven with a want and desire to encourage you towards whatever goal you are trying to achieve.  Rest assured, Lisa is a non-judgmental listener, creating a safe space for you to share in a safe and supportive atmosphere. While remaining neutral, she may provide a fresh perspective for you to consider."
            }
            <br />
            <br />
            {
              "Viewing situations from an outside standpoint, Lisa offers insightful guidance without blame or criticism, empowering you to make positive changes. As a respectful coach, she will always seek your permission before offering her points of view."
            }
          </p>
          <Link href="/all-packages"

            className="self-start bg-[#9794C9] rounded uppercase px-8 py-2 text-white font-semibold">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
