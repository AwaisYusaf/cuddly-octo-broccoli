import Image from "next/image";
import React from "react";
import { Hepta_Slab } from "next/font/google";
import Link from "next/link";
const heptaSlab = Hepta_Slab({
  weight: ["300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

type Props = {};

export default function SectionTwo({ }: Props) {
  return (
    <div className="w-[90%] lg:w-[85%] mx-auto flex flex-col space-y-6 py-8 lg:py-0">
      <div className="flex lg:flex-row flex-col">
        <div className="flex items-center pt-4 justify-center lg:justify-start basis-1/2">
          <Image
            src="/assets/section2-img1.jpg"
            alt=""
            className="rounded-md "
            width={500}
            height={400}
          />
        </div>

        <div className="basis-1/2 flex flex-col space-y-2 pt-2">
          <h2
            className={`${heptaSlab.className} text-3xl my-4 font-semibold text-[#04ABD3]`}
          >
            HELP IS JUST A CLICK AWAY!
          </h2>
          <p className="text-lg leading-8 text-gray-700">
            At You’ve Got a Friend Chat and Mentor Service, we offer a unique service. Our approach to support and guidance is anything but traditional. We recognized a gap in the market – the need for more frequent and flexible help than what's typically offered by traditional Life Coaching Services out there.

          </p>
          <p className="text-lg leading-8 text-gray-700">

            At You’ve Got a Friend, we acknowledge that some people need to talk to someone more frequently than just once a week which is the average time that people talk to a Coach or Counsellor. This is where You've Got a Friend Coaching and Mentoring was born!


          </p>
          <p className="text-lg leading-8 text-gray-700">

          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="basis-1/2 flex flex-col space-y-3">
          <p className="text-lg leading-8 text-gray-700">
            At You’ve Got a Friend Chat and Mentor service, we offer three options, talk therapy, coaching/mentoring or healing sessions designed to help with stress. Our talk therapy sessions are designed for those who just want to talk to someone about whatever ails you. Sometimes we just need someone to talk to but either don’t want to be a “Debbie Downer” to our friends or family or in some cases there are those who simply do not have someone to talk to in their social circle for whatever reason. Whatever the reason, we don't need to know, we are here to lend that supportive listening ear and be that friend on the other end of the phone who you can talk to without judegment or criticism.  We also offer you the option of Coaching or Mentoring in your sessions if that is what you so desire.  You have the option to choose what you want during your calls.  You are in charge.

          </p>
          <h2
            className={`${heptaSlab.className} text-3xl my-4 font-semibold text-[#04ABD3]`}
          >
            Pricing

          </h2>

          <p className="text-lg leading-8 text-gray-700">
            Check out our pricing/packages below.  At You've Got a Friend Chat and Mentor Service, we wanted to offer a more affordable service to those who need help but maybe cannot access it as the traditional $100 on average price per hour session is not within their budget.  That is why we came up with pricing/packaging options that give people an opportunity to talk more often to someone and not break the bank.
          </p>


          <p className="text-lg leading-8 text-gray-700">
            Please check out our affordable options below and remember, we are only a click away for help and assistance for whatever your needs may be.
          </p>






          <Link
            href="/all-packages"
            className="self-start bg-[#9794C9] rounded uppercase px-8 py-2 text-white font-semibold"
          >Book Now
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
