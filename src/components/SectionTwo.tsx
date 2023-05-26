import Image from "next/image";
import React from "react";

type Props = {};

export default function SectionTwo({}: Props) {
  return (
    <div className="w-[85%] mx-auto flex flex-col space-y-6">
      <div className="flex lg:flex-row flex-col">
        <div className="flex items-center justify-center lg:justify-start basis-1/2">
          <Image
            src="/assets/section2-img1.jpg"
            alt=""
            className="rounded-md "
            width={500}
            height={400}
          />
        </div>
        <div className="basis-1/2 flex flex-col space-y-3">
          <h2 className=" text-3xl my-4 font-bold">
            Helping individuals with PTSD, Anxiety, Depression and Loneliness.
          </h2>
          <p className="text-lg leading-8 text-gray-400">
            {
              "Have you ever felt like you needed someone to talk to but didn’t have anyone to talk to or maybe you feel stuck because you feel like you really would like someone to talk to about what ails you but you don’t want to be a burden or a “Debbie Downer” to your friends or family?"
            }
          </p>
          <p className="text-lg leading-8 text-gray-400">
            {
              "Have you ever felt like you really needed a coach? Someone to help you sort out your problems, maybe brainstorm with you solutions, hold you accountable to goals or just be that other objective person to talk to but the traditional coaches are too expensive so the best you can do is maybe talk to a coach or therapist for an hour a week however, it just isn’t enough and as well your finances just can’t keep up with the monthly cost?"
            }
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="basis-1/2 flex flex-col space-y-3">
          <p className="text-lg leading-8 text-gray-400">
            {
              "If so, then this service is for you!  You have come to the right place.  You’ve Got a Friend Chatting and Mentoring service is the brainchild of Lisa Larson."
            }
          </p>
          <p className="text-lg leading-8 text-gray-400">
            {
              "We also changed that most people talk to their coach (or advisor) about once a week, so you may need to talk to someone more often. For a price well below $100/hour, he wants a month."
            }
          </p>

          <p className="text-lg leading-8 text-gray-400">
            {
              "Check out the countless prize packages here! (You can click this to go to the package)"
            }
          </p>
          <p className="text-lg leading-8 text-gray-400">
            {
              "Since we want to test the water, we recommend choosing the 1-hour option only. Its okay, you have that option. However, our prices are so low that if you need to talk to someone often, we offer up to 30 hours of speaking or coaching per month at a very reasonable price."
            }
          </p>
          <p className="text-lg leading-8 text-gray-400 pt-3">
            {
              "Please check the price below. If you have any questions, feel free to send us a message via email or chat. "
            }
          </p>
        </div>
        <div className="flex items-center justify-center lg:justify-end basis-1/2">
          <Image
            src="/assets/section2-img2.jpg"
            alt=""
            width={500}
            height={400}
            className="rounded-md flex-grow-0"
          />
        </div>
      </div>

      <div></div>
    </div>
  );
}
