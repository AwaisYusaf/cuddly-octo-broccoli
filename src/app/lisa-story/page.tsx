"use client";
import Header from "@/components/Header";
import { Great_Vibes } from "next/font/google";
import { motion } from "framer-motion";

const greatVibes = Great_Vibes({ weight: ["400"], subsets: ["latin"] });

export default function Page() {
  return (
    <main>
      <Header selected="lisa-story" />
      <div className="relative overflow-x-hidden bg-[url('/assets/hero-img.png')] bg-cover bg-right bg-no-repeat">
        <div className="absolute w-full h-full bg-black/80 z-10" />
        <div className="w-[85%]  md:w-[80%] lg:w-[75%] mx-auto lg:text-start text-center flex flex-col space-y-14 py-20">
          <div className={`${greatVibes.className} z-30 lg:ml-10 ml-0`}>
            <motion.h1
              initial={{ x: 200, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="lg:text-8xl md:text-7xl text-6xl z-30 text-white"
            >
              {"Lisa's Story"}
            </motion.h1>
          </div>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-100 text-lg z-30 leading-8 "
          >
            Lisa herself came from a organized upbringing where she nurtured up
            in a family that was not close, did not show or express love. Mother
            and Father were at odds and divorced while Lisa was a teen. It was a
            dysfunctional family where no one spoke to each other much and
            mostly just clashed. It was like no one in the family got along.
            Lisa always felt unaccompanied and isolated. She grew up feeling
            like an outcast in culture. She never felt like she fit in, had
            little friends or even boyfriends growing up. At a very early age,
            Lisa got into smouldering cigarettes, drinking, smoking pot and even
            experimenting with hallucinogenic drugs. Her teen years was filled
            with sadness and let downs.{" "}
          </motion.p>

          <motion.p
            initial={{ x: 200, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-30 text-gray-100 text-lg leading-8"
          >
            Lisa went into her adult years fighting severe anxiety and
            depression but nonetheless through it all, succeeded to press on.
            She graduated high school in 1983, went on to work for her father in
            his office as a secretary and then later went back to college to
            pursue Higher education. After working for her father in his
            advertising forte company for a number of years, Lisa went back to
            college a few times. The first time was in 1990 where she contracted
            up for the Commercial Music program through the local college as
            Lisa always had a vision to be a professional singer/performer. Lisa
            is a massive music fan and over the years has been in bands and even
            sang live at multiple music venues in front of audiences.
          </motion.p>

          <motion.p
            initial={{ x: -200, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-30 text-gray-100 text-lg leading-8"
          >
            As years went by, Lisa did various different jobs. She spent 9 years
            working in various different workplaces and industries doing
            Workplace Admin roles. She then altered professions to work in the
            Cosmetic industry as a Cosmetician/Makeup Artist in numerous
            different department stores, she even worked on a Cruise ship in the
            Gift Shop until in 2008, Lisa decided to once again go back to
            college to pursue additional certificate to help her advancement her
            career. After thinking around what to take long and hard, she
            decided again to proceed with her desire for music and the
            entertainment industry and this time contracted for the Arts and
            Entertainment Management program at the resident college. After Lisa
            fruitfully completed this program and gained her certificate, she
            landed her first job which was the person responsible to book a tour
            for a Beatles tribute band which she did all on her own with the
            information she grew from her school studies. After the successful
            completion of this tour, Lisa then went on to start her own
            corporate as a Booking Agent for entertainment acts.
          </motion.p>

          <motion.p
            initial={{ x: 200, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-30 text-gray-100 text-lg leading-8"
          >
            As the years passed Lisa worked part time performing her Booking
            Agent business on a part-time base, it wasn’t plenty to pay the
            bills so she also got a occupation this time in the Events
            Management field. She landed a job employed for a firm called Peak
            Potentials Training which is the Self Development Industry. She
            started out as a Customer Service Delegate but then because of her
            knowledge booking Entertainment acts at different venues, she
            applied in house in the Event planning department. Through this
            period, Lisa acquired full benefit of all of the courses they
            presented as they offered concessions to staff. So, she ended up
            taking various courses such as Enlightened Warrior Training, Wizard
            Training, Life Directions (which is a course on how to determine
            your life’s (or Darma) and bring it to the world as well she took a
            course called Spiritual Gift’s which helps you to discover your God
            certain gifts and help others in the world by using these gifts.
            Lisa grabbed a great awareness in these courses and educated a lot
            from them. She predominantly loved the Spiritual Gifts course.
          </motion.p>

          <motion.p
            initial={{ x: -200, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-30 text-gray-100 text-lg leading-8"
          >
            Lisa worked for this company for some time until they also went
            through a huge layoff and Lisa once again found herself unemployed.
            It was during this time that Lisa decided to once again go back to
            school for a career change. This time, she decided that since she
            herself had been through so many career and job changes in her life
            coupled with the fact that Lisa had a passion for helping others
            choose careers or jobs best suited for them, she decided to enroll
            in the Career Development Practitioner program at the local college.
            This certificate would give you the qualifications to help people in
            the Employment Industry as an Employment Counsellor. Lisa worked in
            this industry for a few years until the industry was hit with a
            massive restructuring and many people got laid off in the process.
          </motion.p>

          <motion.p
            initial={{ x: 200, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-30 text-gray-100 text-lg leading-8"
          >
            Lisa was again faced with needing to find employment. It was at this
            time that she came across an advertisement in the local paper from
            Young Drivers of Canada looking to hire Driving Instructors. Lisa
            has always loved to drive and thought as well she would be good as a
            one on one teacher so she enrolled in the program and successfully
            obtained her Driving Instructing license. Lisa spent the next few
            years working for other driving schools until at the age of 49, she
            decided that she needed to do something more with her life than work
            for other people so made the decision to enrol in a self-employment
            program offered through the government. That was in 2015 and Lisa’s
            business of choice was to start her own driving school. After Lisa
            successfully completed this program, she worked very hard and had to
            learn everything there is to know about what it takes to start and
            grow your own business. So this meant everything from building your
            own website, to getting a domain name, advertising on different
            platforms, having to do SEO, networking and all of the
            administration and sales that goes along with it. Lisa
            singlehandedly did it all herself in the sense that she managed and
            performed all roles.
          </motion.p>

          <motion.p
            initial={{ x: -200, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-30 text-gray-100 text-lg leading-8"
          >
            Lisa successfully built her business up from scratch to working full
            time, 7 days a week. She did this until one day in 2017, Lisa’s
            personal life took a very hard hit. It was during this time that
            Lisa found herself embroiled in a significant relationship that
            nearly destroyed her. After the ending of this relationship with
            what Lisa felt was the love of her life, she discovered that this
            person was a Malignant Narcissist. Lisa then went on to do years of
            intensive research on the subject of narcissism. It was after this
            intensive research on narcissists that she was lead to come to
            realize that her own father who mentally and emotionally abused her
            for ­most of her life was also one as well as other family members
            and even people who were friends through the years. Before this, she
            had endured a lot of anguish over broken relationships but just
            thought she was the victim of mean people who took advantage of
            Lisa’s good nature.
          </motion.p>

          <motion.p
            initial={{ x: 200, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-30 text-gray-100 text-lg leading-8"
          >
            After the breakup of this significant relationship, Lisa spent the
            next number of years feverishly researching everything there is to
            know about the subject of Narcissism. Not only did she watch
            hundreds of videos, read many books plus other topics of
            self-development but she joined support groups and took counselling.
            It was during this time that Lisa felt like her life was hanging
            from a thread. T­­he main thing that kept her going and getting out
            of bed each day was her business. Even though, Lisa was grief
            stricken and broken hearted, Lisa had no choice but to continue
            doing her business if she was going to pay the bills. In the
            meantime, she went on a huge self-growth and self-discovery journey
            where she had to claw her life back from shattered and broken to
            feeling whole and healed again.
          </motion.p>

          <motion.p
            initial={{ x: -200, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-30 text-gray-100 text-lg leading-8"
          >
            Throughout the time that Lisa was going through this journey, Lisa
            had this strong inner knowing that she was meant to take the
            obstacles and challenges in her life to helping others so it was
            that in 2022, Lisa enrolled in the Life Coaching program and
            obtained her certification. On top of this Lisa decided to write a
            book on her experience which she is in the process of doing.
            (Completion date to be announced soon).
          </motion.p>
        </div>
      </div>

      <div className="relative overflow-x-hidden bg-[url('/assets/landing-about.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute w-full h-full bg-black/80 z-10" />
        <div className="w-[85%]  md:w-[80%] lg:w-[75%] mx-auto lg:text-start text-center flex flex-col space-y-14 py-20">
          <div
            className={`${greatVibes.className} z-30 lg:text-start text-center lg:ml-10 ml-0`}
          >
            <motion.h1
              initial={{ x: 200, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="lg:text-7xl md:text-6xl text-5xl z-30 text-white"
            >
              {/* LISA’S EXPERIENCE AND EDUCATION */}
              Lisa’s Experience and Education
            </motion.h1>
          </div>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-100 text-lg z-30 leading-8 "
          >
            Lisa attended college and successfully completed the Career
            Development Practitioner program and earned her certification. It
            gives people the tools and skills to help them make career and
            career decisions. She is also good at writing resumes and cover
            letters. Lisa became completely self-employed in 2015. She took a
            self-employed course and learned everything she needed to start a
            legitimate business. After completing this course of hers, she
            founded her own driving school. She researched everything she needed
            to start this business and then started it all on her own. She built
            her own website from scratch, learned all about her necessary
            advertising tools, and hired her SEO person. After that, she managed
            all calls and sales, developed unique pricing and packages, and
            marketing for the company, and even handled all administration and
            bookkeeping. I planned all my clients, billing, and even payroll
            while hiring. She takes care of all of her clients and made sure
            that excellent customer service is paramount to the success of any
            business. She managed and ran this business until 2022 when she
            again decided a change was needed and became certified in life
            coaching. She has also attended and taken numerous self-development
            courses, including Spiritual Gifts (knowing your God-given gifts and
            using them in the world to help others).
          </motion.p>

          <motion.p
            initial={{ x: -200, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-30 text-gray-100 text-lg leading-8"
          >
            She has delved deep into everything related to narcissistic abuse.
            She has read numerous books, attended classes, and watched hundreds
            of videos. She is very knowledgeable on this topic so she can help
            you in this area too. Lisa’s current course is called her
            Neuro-Wellness. A course on how to tame an overstimulated and
            stressed brain. She has a grab bag of different things to draw from
            the courses she took to help you during your sessions with her.
          </motion.p>

          <div className={`${greatVibes.className} z-30 lg:ml-10 ml-0`}>
            <motion.h1
              initial={{ x: 200, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="lg:text-7xl md:text-6xl text-5xl z-30 text-white"
            >
              {"Lisa’s Attributes"}
            </motion.h1>
          </div>

          <motion.p
            initial={{ x: -200, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-30 text-gray-100 text-lg leading-8"
          >
            She has delved deep into everything related to narcissistic abuse.
            She has read numerous books, attended classes, and watched hundreds
            of videos. She is very knowledgeable on this topic so she can help
            you in this area too.
          </motion.p>

          <motion.p
            initial={{ x: 200, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-30 text-gray-100 text-lg leading-8"
          >
            Lisa’s current course is called her Neuro-Wellness. A course on how
            to tame an overstimulated and stressed brain. She has a grab bag of
            different things to draw from the courses she took to help you
            during your sessions with her.
          </motion.p>
        </div>
      </div>
    </main>
  );
}
