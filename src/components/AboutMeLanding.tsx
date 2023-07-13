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
          Born into a tumultuous family, {"Lisa's"} early years were marked by a
          lack of love and harmony. From a young age, she felt unaccepted by
          society, leading to feelings of isolation and loneliness that
          persisted throughout her life. Growing up amidst constant conflict and
          divorce, her parents turbulent relationship hindered the development
          of healthy self-esteem patterns. Even her interactions with siblings
          were strained, devoid of communication and love, leaving a lasting
          impact on {"Lisa's"} sensitive nature.
          <br />
          <span className="h-3 block" />
          In her teenage years, Lisa found herself caught up with the wrong
          crowd, engaging in unhealthy habits such as smoking, drinking, and
          experimenting with drugs. Heartache and disappointment seemed to
          dominate her life. However, despite battling severe anxiety and
          depression during her transition into adulthood, Lisa persevered and
          managed to graduate from high school.
          <br />
          <span className="h-3 block" />
          Uncertain about her path after high school, Lisa lacked proper
          guidance and mentorship. Her unhealthy upbringing made her reluctant
          to pursue university education. With a lifelong dream of becoming a
          professional singer/performer, Lisa felt lost when it came to choosing
          a career. Disliking the traditional schooling system, she ended up
          working as a secretary for her {"father's"} advertising specialty
          company for three years.
          <br />
          <span className="h-3 block" />
          After this initial work experience, Lisa realized she needed to spread
          her wings and find more of a sustainable lasting career. Once again
          not having any mentorship help on what course to choose, Lisa would
          end up defaulting to her dream which was to be a professional
          Singer/Performer. She would end up enrolling in a local {
            "college's"
          }{" "}
          commercial music program. While pursuing her dream in various musical
          collaborations, performing live and being part of bands, Lisa also
          worked in office administration roles for a total of nine years to
          sustain herself.
          <br />
          <span className="h-3 block" />
          As time went on, {"Lisa's"} career journey took different paths. She
          ventured into the cosmetic industry, working as a cosmetician and
          eventually becoming a cosmetic manager for prestigious brands. Seeking
          new experiences, she briefly worked on cruise ships in the gift shops.
          However, she knew deep down that this {"wasn't"} her lifelong calling.
          <br />
        </p>
        {showMore && (
          <p className="text-lg leading-8 text-gray-500">
            Recognizing her affinity for the entertainment industry, Lisa
            decided to return to school and enrolled in the Arts and
            Entertainment Management program. Armed with her newfound knowledge,
            she successfully booked tours for a Beatles tribute band and
            eventually ventured into entrepreneurship, becoming a booking agent
            for entertainment acts. Alongside her part-time role as a booking
            agent, Lisa joined a self-development company called Peak
            Potentials, initially as a customer service representative and then
            advancing to the Event Planning department with the skills she had
            as a Booking agent for bands. During this time, Lisa took advantage
            of the many courses Peal Potentials offered also to staff which
            included the likes of Wizard Training, Enlightened Warrior Training,
            Life Directions and Spiritual Gifts. By taking these courses,{" "}
            {"Lisa's"} spiritual and personal growth expanded greatly. She
            particularly found the course Spiritual Gifts the most interesting
            and useful as it helped her to understand all the different gifts
            bestowed to you upon birth and help you utilize them in your life
            for the betterment of others.
            <br />
            While Lisa anticipated a long-term career with Peak Potentials, a
            significant layoff led to unemployment once again. Determined to
            adapt and use her own journey to help others, Lisa returned to
            school yet again, this time she decided to pursue a course called
            Career Development Practitioner as she had discovered that she had
            another passion besides music which was to help others decide on
            their careers and help them to find jobs. This being spurred on by
            her own experiences with struggling with same. After successfully
            completing the program and certificate in hand, Lisa secured an
            entry-level position in the field, providing support to individuals
            who were unemployed. She worked diligently in the industry for some
            years until another restructuring wave resulted in her contract not
            being renewed.
            <br />
            <span className="h-3 block" />
            Facing unemployment yet again, Lisa stumbled upon a new opportunity
            when she came across an advertisement seeking driving instructors.
            Combining her love for driving and teaching, she applied and got
            hired with the company hence obtaining her Driving {
              "Instructor's"
            }{" "}
            license. Over the years, Lisa worked for different driving schools,
            but at the age of 49, she realized the need to become self-employed
            and work for herself rather than depending on others for her
            paycheck. Drawing upon her newfound knowledge, she established her
            own driving school from scratch, overcoming numerous obstacles and
            mastering all aspects of running a business all on her own.
            <br />
            <span className="h-3 block" />
            It was during this time however, that Lisa’s personal life would
            take a significant hit. She found herself entangled in a toxic
            relationship with someone she believed to be the love of her life.
            It was during this painful experience that Lisa discovered the harsh
            truth—a malignant narcissist had infiltrated her life. Determined to
            understand and heal from the toxic patterns that had plagued her,
            Lisa embarked on an intensive research journey into narcissism.
            Through countless books, informative videos, and self-development
            topics, she gained a profound understanding of her own experiences.
            In support groups and counseling, Lisa sought guidance and actively
            worked on navigating her internal struggles.
            <br />
            <span className="h-3 block" />
            Though her journey felt precarious at times, {"Lisa's"} unwavering
            commitment to her business propelled her forward. Despite the grief
            and heartache, she knew she had to continue her entrepreneurial
            endeavors to sustain herself financially. It was during this
            transformative period that Lisa had come to the conclusion that this
            all happened for a reason and that was to help others going through
            same or similar circumstances as her. Motivated by her newfound
            purpose, she enrolled in a Life Coaching program and obtained her
            certification. Simultaneously, Lisa began writing a book on her
            personal story, aiming to inspire and assist others who had endured
            similar situations. (Book launch date to be announced soon – stay
            tuned!).
            <br />
            <span className="h-3 block" />
            Equipped with her extensive research on narcissism, coupled with her
            life coaching certification and other credentials, Lisa now feels
            well-prepared to help individuals struggling with loneliness,
            isolation, and a lack of direction. Her mission is to provide
            affordable coaching and tools she has learned along her own journey.
            This infused with her caring and encouraging attributes to help
            others who feel stuck or just need someone to support them through
            their trials in life.
            <br />
            <span className="h-3 block" />
            Through the many skills and life experiences Lisa has gained through
            her personal experience coupled with her Life Coach certification,
            Lisa aims to help as many people as possible navigate the challenges
            of life. This would include anyone suffering from loneliness,
            isolation, Narcissistic relationships or supporting people
            navigating how to get from stuck to achieving their true calling or
            potential. If you are looking for the most supportive person you can
            ask for Lisa is it. Not only that, Lisa believes that everyone
            deserves support and guidance. She has made You’ve Got a Friend Chat
            and Mentor Service accessible to those who are not able to afford
            traditional Life Coaching rates and services which inhibits them
            from being able to get the assistance they need.
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
