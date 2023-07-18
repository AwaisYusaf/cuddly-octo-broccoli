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
      <h2 className={`${heptaSlab.className} text-3xl font-semibold`}>
        {"Lisa's Story"}
      </h2>
      <Image
        src="/assets/about-me-landing.jpg"
        width={500}
        height={500}
        alt=""
        className="rounded-full object-cover w-[110px] h-[110px] lg:w-[200px] lg:h-[200px]"
      />
      <div className="flex flex-col space-y-6">
        <p className="text-lg leading-8 text-gray-500">
          {
            "Lisa's journey began in a family marked by dysfunction and a lack of love. Growing up amidst constant conflict and divorce, she felt isolated and unaccepted by those around her. This feeling of being an outcast extended to her social life, where she struggled to make friends or form romantic relationships. In amongst the turmoil Lisa got in with wrong crowds and got involved in unhealthy habits and substances."
          }
          <span className="h-3 block" />
          {
            "Lisa battled with anxiety and depression most of her life, since she struggled with feelings of not fitting in, she spent her entire adult life in self-development through reading books and taking courses in efforts to improve her circumstances.  Since graduating from high school, Lisa has worked in many different industries and jobs.  She has gone through a number of career changes by going back to College on 3 different occasions.  Lisa’s dream since a young girl was to be a singer/performer so her first selection for college was the Commercial Music program, later she got her certificate in Arts and Entertainment Management and then later in years, fuelled by another passion within her for helping others find work and choose careers, she obtained her Career Development Practitioner certificate which is designed to prepare people to work in the Employment field assisting those looking for work and choosing careers..  "
          }
          <span className="h-3 block" />
          {
            "Lisa has done many different roles in her work history, after completing Music College she went on to continue working with various musicians, playing in bands and performing live.  After Arts & Entertainment Mgmt, she went on to book a Beatles tribute band tour and later formed her own business as Booking Agent for entertainment acts, then after completing the Career Development Practitioner course, she went on to work in the Employment industry helping unemployed people find work and choose careers as well as assisting them with their resumes and cover letters in the resource centre."
          }
          <span className="h-3 block" />
          {
            "Besides this, Lisa worked 9 years in Office Administration roles in a variety of different sectors as well as 9 years in the Cosmetic Industry as a Cosmetician then working her way up to Counter Manager for prestigious cosmetic lines. After this, she went on to work on a Cruise Ship in the Gift Shops."
          }
          <span className="h-3 block" />
          {
            "Later in life, Lisa even worked for a Self-Development company for some time in the Call Centre then Event Planning department.  While there she took advantage of the many transformational courses they offered to staff as well such as Wizard training, Enlightened Warrior training and Life Directions as well as Spiritual Gifts (Discovering your God given talents and utilizing them for the benefit of others in the world). All of these learnings greatly contributing to Lisa’s Self-development knowledge. "
          }
        </p>

        {showMore && (
          <p className="text-lg leading-8 text-gray-500">
            {
              "In 2012, while a stint in-between jobs, Lisa came across an advertisement for Driving Instructors with Young Drivers of Canada.  Realizing her own love for driving plus an inner knowing that she possessed a good ability to teach people things in a one on one setting, Lisa applied and got hired, thus obtaining her Driving Instructing license.  Lisa ended up working for some other schools until in 2015, she decided to take the leap to go self-employed with her own Driving School.  Lisa did everything herself, from research to building a website, to advertising, marketing, customer service, networking, scheduling, office administration, finances, payroll as well as delivering the driving lessons. "
            }
            <span className="h-3 block" />
            {
              "Lisa was successfully running her business full time and while doing so, her life took a dramatic hit.  She found herself entangled in a relationship with someone who she discovered after the fact was a Narcissist.  The event was a huge turning point for her as she struggled to stay afloat emotionally in the aftermath.  This led Lisa to research extensively on the subject of Narcissism where she spent the next several years reading books and watching videos on the subject. It was through this extensive research that she discovered that not only was her former partner one but also her father and as well as others who had been in her life, all to varying degrees. "
            }
            <span className="h-3 block" />
            {
              "Not only did Lisa read books and watch many countless videos, she continued to take courses which involved inner healing work.  During this time, Lisa realized how much help she needed beyond her own self-help journey.  She sought out counsellors to help her and even reached out to close friends but found it hard to get the help she needed.  There were a few reasons for this, one was because she found it hard to find people who could really relate to what she went through as Narcissism is such that unless you truly experienced it as Lisa had, you cannot relate to the damage it inflicts to the extent it does.  Also Lisa found that she needed more assistance than the methods out there offered.  Lisa was hard pressed to find the sort of help she really needed to assist her properly through the pain and trauma she was experiencing.  The most she could find was the traditional once a week call with a coach or counsellor for one hour but Lisa was desperate to talk to someone more often than that.  "
            }
            <span className="h-3 block" />
            {
              "It was during this time of self-help and healing that Lisa started to think that this whole experience happened to her so she could do something with it to help others so she embarked on a journey to write her own story about her life journey (Release date to be announced soon).  She then went on to get her Life coaching certificate and embarked on the quest to create You’ve Got a Friend Chat and Mentorship with the intention on offering the service to people that Lisa felt she needed but couldn’t find. "
            }
            <span className="h-3 block" />
            {
              "You’ve Got a Friend Chat and Mentor Service was created to be able to help people who need someone to talk to more often than the traditional once a week and also more accessible in terms of affordability.  You can be rest assured that if you are going through Narcissistic abuse that Lisa your Mentor/Coach will be able to understand fully what you are going through. As well that someone has the empathy and care to assist you through your trying time."
            }
            <span className="h-3 block" />
            {
              "With Lisa’s expertise in narcissistic abuse recovery, career development, and entrepreneurship, along with her passion to help others who are struggling to find a way to improve their lives, Lisa is committed to help you in whatever capacity you need."
            }
            <span className="h-3 block" />
            {
              "You can count on us and remember, there is always a solution to every problem.  Sometimes you just need help finding it!"
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
