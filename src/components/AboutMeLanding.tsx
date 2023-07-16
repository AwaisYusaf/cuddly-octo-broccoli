"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Hepta_Slab } from "next/font/google";
const heptaSlab = Hepta_Slab({
  weight: ["300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

type Props = {};

export default function AboutMeLanding({}: Props) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex flex-col space-y-8 lg:space-y-12 w-[90%] lg:w-[85%] mx-auto">
      <h1 className={`${heptaSlab.className} text-3xl font-semibold`}>
        — About Me
      </h1>
      <Image
        src="/assets/about-me-landing.jpg"
        width={500}
        height={500}
        alt=""
        className="rounded-full object-cover w-[110px] h-[110px] lg:w-[200px] lg:h-[200px]"
      />
      <div className="flex flex-col space-y-6">
        <h2 className={`${heptaSlab.className} text-3xl font-semibold`}>
          Hello, nice to meet you!
        </h2>

        <p className="text-lg leading-8 text-gray-500">
          {
            "Born into a tumultuous family, Lisa's early years were marked by a lack of love and harmony. From a young age, she felt unaccepted by society, leading to feelings of isolation and loneliness that persisted throughout her life. Growing up amidst constant conflict and divorce, the dynamics in the home, hindered the development of healthy self-esteem patterns. Even her interactions with siblings were strained, devoid of communication and love, leaving a lasting impact on Lisa's sensitive nature."
          }
          <span className="h-3 block" />
          {
            "In Lisa’s teenage years, she found herself caught up with the wrong crowd, engaging in unhealthy habits such as smoking, drinking, and experimenting with drugs. Heartache and disappointment seemed to dominate her life. However, despite battling severe anxiety and depression during her transition into adulthood, Lisa persevered and graduated from high school"
          }
          <span className="h-3 block" />
          {
            "Uncertain about her path after high school, Lisa lacked proper guidance and mentorship. Lisa’s dream was to be a professional singer/performer so after working at her Father’s Advertising Specialty company as a Secretary for close to 5 years, she enrolled in Music College to pursue her singing passion."
          }
          <span className="h-3 block" />
          {
            "After completing her college, Lisa went on to pursue various different musical aspirations in her spare time while working during the day in various different Office Administration roles.  She would end up doing this in many different industries for a total of 9 years."
          }
          <span className="h-3 block" />
          {
            "During Lisa’s work career, at one point, she ventured into the cosmetic industry, working as a cosmetician and then graduating to higher roles as Cosmetic Manager and even Makeup Specialist for prestigious brands. She successfully worked in the industry for 9 years until she decided to venture out and seek new experiences.  Her 1st job after leaving the retail cosmetic field was a stint working on the cruise ships in the gift shops, however Lisa knew deep down that this wasn't her lifelong calling so after she finished working on the cruise ship she decided to once again return to college.  This time enrolling in the Arts and Entertainment Management program."
          }
          <span className="h-3 block" />
          {
            "After successfully graduating from the program and armed with her newfound knowledge, Lisa went on to successfully book tours for a Beatles tribute band.  Once she completed that endeavour she went into starting her own business part-time as a Booking Agent for different entertainment acts. "
          }
          <span className="h-3 block" />
        </p>
        {showMore && (
          <p className="text-lg leading-8 text-gray-500">
            {
              "Alongside her part-time role as a booking agent, Lisa went on to work for a self-development company akin to that of Tony Robbins initially as a Customer Service Agent and then advancing to the Event Planning department with the skills she had acquired as a Booking agent for bands. During this time, Lisa took advantage of the many courses the company offered to staff which included the likes of Wizard Training, Enlightened Warrior Training, Life Directions and Spiritual Gifts. By taking these courses, Lisa's spiritual and personal growth expanded greatly. Lisa particularly found the course Spiritual Gifts the most interesting and useful as it helped her to discover all the different gifts bestowed to you upon birth and then utilizing them in your life for the betterment of others."
            }
            <span className="h-3 block" />
            {
              "While Lisa anticipated a long-term career with Peak Potentials, a significant layoff occurred which led to unemployment once again. Determined to adapt to her situation, Lisa decided to return to school again. After researching a variety of different directions she could go, she decided to choose a program called Career Development Practitioner.  She decided that on that one as she now realized that because of her many different career and job changes, that she had a passion to help others going through same.  Lisa also has an enthusiasm and passion for helping people decide on what career path or job to choose as well as helping people with any other life changing decision for that matter."
            }
            <span className="h-3 block" />
            {
              "After successfully completing the program and certificate in hand, Lisa secured an entry-level position in the employment field supporting the Employment Counsellors and helping people with their resumes and cover letters or just navigating the internet.  She worked diligently in the industry for some years until a restructuring wave in that industry occurred as well.  "
            }
            <span className="h-3 block" />
            {
              "This time while facing unemployment, Lisa would stumbled upon a new career opportunity when she came across an advertisement seeking Driving Instructors with Young Drivers of Canada. Recognizing that she had a combined love for driving as well as one on one coaching, she applied for the job and was hired then obtaining her Driving Instructor's license. "
            }
            <span className="h-3 block" />
            {
              "For the next few years, Lisa worked for different driving schools, until at the age of 48, she came to the profound realization that she would be better off being Self-Employed rather than working for others, hence being in control of her own financial destiny so she enrolled in the Government sponsored Self Employed program and learned everything she needed to know to start up and run a successful business.  "
            }
            <span className="h-3 block" />
            {
              "After completing the program, Lisa started her own Driving School which she did everything herself that was required to build and run the business.  This included research, marketing, advertising, creating and building a website, choosing logos and designs, networking, doing all of the required administration work, scheduling and providing the actual lessons itself. Lisa had been running the business full time since 2015 successfully.  "
            }
            <span className="h-3 block" />
            {
              "Meanwhile, while running her business something in Lisa’s personal life made a substantial impact on her life.  She found herself entangled in a toxic relationship with someone who she loved very much but discovered later that he was in fact a Malignant Narcissist. After this experience, determined to understand the ordeal that plague her, Lisa embarked on an intensive research journey into narcissism.  Since that experience which happened in 2017, Lisa has research everything there is to know about what a Narcissist does and what you can do to help yourself through the experience.  She also herself took counselling and was in Support groups.  She did this all while she was still running her business."
            }
            <span className="h-3 block" />
            {
              "It was this significant event that propelled Lisa to realize that this experience was meant for her to help others going through traumatic events like she has so she went on to take more courses and obtain her Life Coaching certification.  Since Lisa’s life journey has consisted of reading countless self-help books as well as taking courses, Lisa feels armed and ready to help others going through struggles.  "
            }
            <span className="h-3 block" />
            {
              "Lisa’s latest course is in Neuro Wellness where she can provide healing exercises for people experiencing anxiety.  She would also like to further assist her clients who need some calming or meditation practices to assist them with anxiety or depression.  She is also in the process of writing a memoir on her story which she hopes will help others going through a Narcissistic experience such as hers – Stay tuned for release date"
            }
            <span className="h-3 block" />
            {
              "Lisa’s life experience enables her to be extremely empathetic with others.  She has a strong desire to assist others going through trials in life.  Lisa feels it is time to take all of her learnings and experiences she has cultivated over her lifetime to assist people in her new endeavour which is You've Got’ a Friend Chat and Mentoring Service.  She developed this to give people a way to talk to someone more often than your typical once a week at a much more affordable rate. Something she felt she needed when she was going through her own trials."
            }
            <span className="h-3 block" />
            {
              "Through the many skills and life experiences Lisa has gained through her personal experience coupled with her Life Coach certification, Lisa aims to help as many people as possible navigate the challenges of life. This would include anyone suffering from loneliness, isolation, Narcissistic relationships or supporting people navigating how to get from stuck to achieving their true calling or potential. "
            }
            <span className="h-3 block" />
            {
              "If you are looking for the most supportive, empathetic and caring person you can ask for, Lisa is it. Please reach out see our pricing packages below and start your chatting or mentoring call today!  "
            }
            <span className="h-3 block" />
            {
              "We look forward to talking to you soon.  In the meantime, remember, there is always a solution to every problem.  Sometimes we just need help finding it!"
            }
          </p>
        )}
        <button
          onClick={() => setShowMore(!showMore)}
          className="self-start bg-[#9794C9] rounded uppercase px-8 py-2 text-white font-semibold"
        >
          Read {showMore ? "Less" : "More"}
        </button>
      </div>
    </div>
  );
}
