import Image from "next/image";
import React from "react";
import { Hepta_Slab } from "next/font/google";
import Link from "next/link";
const heptaSlab = Hepta_Slab({
  weight: ["300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

type Props = {};

export default function SectionTwo({}: Props) {
  return (
    <div className="w-[90%] lg:w-[85%] mx-auto flex flex-col space-y-6 py-8 lg:py-0">
      <div className="flex lg:flex-row flex-col">
        <div className="flex items-start pt-4 justify-center lg:justify-start basis-1/2">
          <Image
            src="/assets/section2-img1.jpg"
            alt=""
            className="rounded-md "
            width={500}
            height={400}
          />
        </div>

        <div className="basis-1/2 flex flex-col space-y-3">
          <h2 className={`${heptaSlab.className} text-3xl my-4 font-semibold`}>
            Helping individuals with PTSD, Anxiety, Depression and Loneliness
          </h2>
          <p className="text-lg leading-8 text-gray-700">
            {
              "Welcome to You've Got a Friend Chatting and Mentoring service, where you'll find the support and guidance you've been seeking."
            }
          </p>
          <p className="text-lg leading-8 text-gray-700">
            {
              "At times, we all yearn for someone to talk to, someone who understands and listens without judgment. But it's not always easy to find that person in our immediate circle without feeling like a burden or dampening the mood. That's where we come in."
            }
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="basis-1/2 flex flex-col space-y-3">
          <p className="text-lg leading-8 text-gray-700">
            {
              "Have you ever felt the need for a coach or mentor? Someone who can help you untangle your problems, explore potential solutions, hold you accountable to your goals, or simply be a neutral sounding board? Traditional coaching services can often be expensive, limiting your access to just one hour a week. We understand the frustration when you crave more frequent support, but your finances can't keep up with the monthly costs."
            }
          </p>
          <p className="text-lg leading-8 text-gray-700">
            {
              "Introducing You've Got a Friend Chatting and Mentoring service, founded by Lisa Larson. We understand that sometimes you need more than a weekly conversation, so we offer various pricing plans tailored to your needs. Whether you prefer to dip your toes in the water with our 1-hour option or require up to 30 hours of speaking or coaching per month, our prices are affordable and designed to accommodate your requirements."
            }
          </p>

          <p className="text-lg leading-8 text-gray-700">
            {
              "Take a look at our pricing options below. If you have any inquiries, please don't hesitate to reach out to us via email or chat. We're here to provide the support and companionship you've been searching for."
            }
          </p>
          <Link
            href="/all-packages"
            className="self-start bg-[#9794C9] rounded uppercase px-8 py-2 text-white font-semibold"
          >
            Learn More
          </Link>
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
