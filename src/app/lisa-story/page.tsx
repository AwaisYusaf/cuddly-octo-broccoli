"use client";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Hepta_Slab } from "next/font/google";
const heptaSlab = Hepta_Slab({
  weight: ["300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export default function Page() {
  return (
    <>
      <main>
        <Header selected="lisa-story" />
        <div className="relative overflow-x-hidden bg-[url('/assets/hero-img.png')] bg-cover bg-right bg-no-repeat">
          <div className="absolute w-full h-full bg-black/80 z-10" />
          <div className="w-[95%]  md:w-[85%] lg:w-[75%] mx-auto lg:text-start text-center flex flex-col space-y-14 py-20">
            <motion.p
              initial={{ x: -200, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-gray-100 text-lg z-30 leading-8 "
            >
              <span className="lg:text-2xl md:text-xl text-lg z-30 text-[#04ABD3] font-semibold">
                {
                  "Welcome to You've Got a Friend Chatting and Mentoring service, where you'll find the support and guidance you've been seeking."
                }
              </span>
              <br />
              <br />
              {
                "At times, we all yearn for someone to talk to, someone who understands and listens without judgment. But it's not always easy to find that person in our immediate circle without feeling like a “negative nanny” or “Debbie Downer”, that’s where we come in.  We provide that listening supportive ear for you.  It may be you are going through a personal crisis or you just need someone to talk to because you might be feeling lonely or isolated.  We are here to help."
              }
              <br />
              <br />
              {
                "It could also be that you need a qualified Coach or Mentor to help you untangle your problems, explore solutions, hold you accountable to your goals, or simply be a neutral sounding board?  We are also there to help you with this. Either way, you choose what you would like us to assist you with.  Rest assured, we will not be judgmental and will listen with empathy and understanding.  We want to help, that is the bottom line."
              }
              <br />
              <br />
              {
                "Have you ever felt like you wanted to talk to someone more than just once a week?  Traditional coaching services can often be expensive and the average time people talk to one is only about once a week.  With You’ve Got A Friend Chat and Mentor Service, our goal is to make us more accessible to you so you can talk to someone about your life problems more often than that.  That is why we have created monthly pricing packaging options.  You choose the one right for you.  You also choose whether you would like Coaching or Chatting in your sessions or maybe it’s a combination of both.  You are in charge"
              }
              !
              <br />
              <br />
              {
                "Whether you prefer to dip your toes in the water with our 1-hour option or dive in for our 30 hour package, our prices are affordable and flexible. "
              }
              <br />
              <br />
              {
                "Take a look at our pricing options and if you have any questions at all, remember, we are just a click away!"
              }
            </motion.p>
            <div className={`${heptaSlab.className} z-30`}>
              <motion.h1
                initial={{ x: 200, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="lg:text-4xl md:text-3xl text-2xl z-30 text-[#04ABD3] font-semibold"
              >
                {"HOW IT WORKS"}
              </motion.h1>
            </div>
            <motion.p
              initial={{ x: -200, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-gray-100 text-lg z-30 leading-8 "
            >
              Once you have selected the ideal Chatting/Coaching package for
              your needs, you will be directed to our Coaching policies. Please
              read this over and ensure you are in agreement with them before
              proceeding to the payment page. After you agree, you will be taken
              to an Intake form. This questionnaire is designed to give your
              coach a very good idea of yourself which in turn allows her to
              better understand you and determine the most effective approach in
              assisting you during your sessions. It is important to note that
              all information shared on this form is 100% confidential.
            </motion.p>

            <motion.p
              initial={{ x: 200, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="z-30 text-gray-100 text-lg leading-8"
            >
              After completing the payment, you will be guided to a scheduling
              page where you can book your calls. We recommend scheduling all
              your calls at the time of purchase to ensure availability in
              {"Lisa's"} calendar. Please note that if you have purchased, for
              example, 25 hours of talking/coaching calls, we recommend you
              using them within the month. When scheduling your calls, there
              will be a short form to fill out for you to let us know what you
              would like to focus on during that particular session. This will
              help give your coach a good idea how best to assist you during
              that particular session. In the form, you can state whether you
              wish to discuss your concerns or challenges, engage in healing
              exercises, or receive coaching and mentoring during the call.
            </motion.p>

            <motion.p
              initial={{ x: -200, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="z-30 text-gray-100 text-lg leading-8"
            >
              While this serves as a framework, it is important to note that it
              can be flexible and subject to change during the course of the
              conversation, based on your preferences.
            </motion.p>
          </div>
        </div>

        <div className="relative overflow-x-hidden bg-[url('/assets/landing-about.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute w-full h-full bg-black/80 z-10" />
          <div className="w-[95%]  md:w-[85%] lg:w-[75%] mx-auto lg:text-start text-center flex flex-col space-y-14 py-20">
            <div
              className={`${heptaSlab.className} z-30 lg:text-start text-center `}
            >
              <motion.h1
                initial={{ x: 200, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="lg:text-4xl md:text-3xl text-2xl z-30 text-[#04ABD3] font-semibold"
              >
                {/* LISA’S EXPERIENCE AND EDUCATION */}
                WHAT BENEFITS CAN YOU EXPECT TO GET FROM OUR SERVICES?
              </motion.h1>
            </div>
            <motion.p
              initial={{ x: -200, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-gray-100 text-lg z-30 leading-8 "
            >
              <ul className="flex flex-col space-y-4 list-inside list-disc">
                <li>
                  Relief and help from stressful situations by having a
                  listening ear to hear you and support you
                </li>
                <li>
                  Relief from loneliness by having a caring and listening ear on
                  the other end of the phone
                </li>
                <li>
                  Help on employment or career decisions, finding your purpose
                  or doing your passion
                </li>
                <li>
                  Help with any Narcissist related relationship problems even if
                  it means someone to talk to who understands what you are going
                  through. Lisa can also offer advice and guidance as well as
                  action plans to leave or get through ruts and depressions over
                  it
                </li>
                <li>
                  Help with keeping on track, having someone hold you
                  accountable to action plans to lead you towards your goals
                </li>
                <li>Having someone help you with making decisions</li>
                <li>
                  Brainstorming, helping with ideas of various different things
                  you can do to get out of ruts
                </li>
                <li>Goal setting ideas and exercises</li>
                <li>
                  Help with starting a business if that is what path you want to
                  take
                </li>
                <li>
                  Having the option of receiving different healing exercises
                  depending on your circumstance
                </li>
                <li>Making positive progress in your life</li>
                <li>
                  Feeling better after your calls (our goal is to ensure that
                  you will feel better at the end of your call than you did
                  before it)
                </li>
              </ul>
            </motion.p>

            <div className=" mx-auto lg:text-start text-center flex flex-col space-y-8 py-20">
              <div className={`${heptaSlab.className} z-30`}>
                <motion.h1
                  initial={{ x: 200, opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="lg:text-4xl md:text-3xl text-2xl z-30 text-[#04ABD3] font-semibold"
                >
                  {"WHAT OUR CHAT AND MENTORING SERVICE IS NOT"}
                </motion.h1>
              </div>

              <motion.p
                initial={{ x: -200, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="z-30 text-gray-100 text-lg leading-8"
              >
                {
                  "At You've Got a Friend Chatting and Coaching Service, it's important to clarify what we do not offer:"
                }
              </motion.p>

              <motion.p
                initial={{ x: -200, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="z-30 text-gray-100 text-lg leading-8"
              >
                <strong>1. Complex Psychiatric Problem Solving:</strong>
                <br /> While we are here to lend an empathetic ear and provide
                guidance, {"it's"} essential to note that we are not therapists
                or counselors. Consequently, we are unable to address serious
                mental health issues or offer diagnoses and medication
                recommendations. If you have been diagnosed with a significant
                mental health condition, we recommend seeking professional help
                from a qualified therapist or psychiatrist.
              </motion.p>
              <motion.p
                initial={{ x: -200, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="z-30 text-gray-100 text-lg leading-8"
              >
                <strong>2. Sex Hotline Services:</strong>
                <br /> We want to emphasize that our coaching service is not
                designed for explicit or adult content conversations. We
                maintain a respectful and supportive environment focused on
                personal growth, empowerment, and companionship.
              </motion.p>
              <motion.p
                initial={{ x: -200, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="z-30 text-gray-100 text-lg leading-8"
              >
                <strong>3. Traditional Coaching Approach:</strong>
                <br /> Unlike traditional coaching services, we bring something
                unique to the table with our services. At {"You've"} Got A
                Friend Chat and Mentor Service, we offer two options to our
                clients. One is if you just want to talk and not be coached or
                mentored or if you do desire someone to coach or mentor you, we
                can do that too. Our pricing structure also sets us apart, as we
                operate more as a membership site so instead of the traditional
                $100 and up for an hour of just Coaching, we offer much lower
                prices to accomodate more communication and assistance from us.
                We offer different pricing packages based on the amount of
                conversation or coaching you prefer within a month. You have the
                freedom to communicate your preference for either casual
                conversation or dedicated coaching during your sessions.
              </motion.p>
              <motion.p
                initial={{ x: -200, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="z-30 text-gray-100 text-lg leading-8"
              >
                Please feel free to reach out to us if you have any further
                questions or require clarification. We are committed to offering
                a service that meets your needs and provides the support you
                seek.
              </motion.p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
