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
            {
              "At You’ve Got a Friend Chat and Mentor Service, we offer a unique service.  Our approach to support and guidance is anything but traditional. We recognized a gap in the market – the need for more frequent and flexible assistance than what's typically offered by the traditional Life Coaching Services out there."
            }
          </p>
          <p className="text-lg leading-8 text-gray-700">
            At You’ve Got a Friend, we acknowledge that some people need more
            support than just once a week which is the average frequency people
            talk to a Coach or Counsellor. This realization led to the creation
            of the You’ve Got a Friend Chat and Mentor Service, designed to
            cater to those needs.
          </p>
          <p className="text-lg leading-8 text-gray-700"></p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="basis-1/2 flex flex-col space-y-3">
          <p className="text-lg leading-8 text-gray-700">
            At You’ve Got a Friend Chat and Mentor service, we offer two types
            of service. We offer talk therapy for those who just need someone to
            talk to. Someone to talk to who will listen and support you without
            judgement or criticism. Sometimes we just need someone to talk to
            but either don’t want to be a “Debbie Downer” to our friends or
            family or in some cases there are those who simply do not have
            someone to talk to in their social circle for whatever reason.
            <br />
            The reasons to us do not matter, nor is it our business to know your
            reason. We just see the need out there for a service to offer people
            who need this kind of support in their lives for whatever their
            personal reasons are.
          </p>

          <Link
            href="/about-us"
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
