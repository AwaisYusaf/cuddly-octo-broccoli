import React from "react";

type Props = {};

export default function LandingDisclaimar({}: Props) {
  return (
    <div className="relative bg-[url('/assets/disclaimar.jpg')] bg-cover bg-top bg-fixed bg-no-repeat">
      <div className="absolute w-full bg-[#444745]/80 h-full z-10"></div>
      <div className="w-[90%] md:w-[85%] lg:w-[76%] mx-auto flex flex-col items-center py-20">
        <h1 className="text-white font-semibold text-5xl z-20 mb-8">
          DISCLAIMER
        </h1>
        <ul
          className="text-gray-300 leading-8 text-base lg:text-lg z-20 list-outside list-disc 
        flex flex-col space-y-6"
        >
          <li className="">
            Lisa is not a trained therapist or counselor. She is just a life
            coach and cannot help you with complex psychiatric issues, but if
            you need to talk to someone urgently, call Lisa and she will be able
            to contact you. , can be prevented. {"Don’t"} do anything that could
            put you in danger. In this case, you can arrange a phone call with
            Lisa.
          </li>
          <li>
            We are not a suicide hotline if you are ready to end your life at
            this time. If you are looking to end your life, I recommend calling
            your local suicide hotline. They are trained to help in this case.
          </li>
          <li>
            Remember that all scheduled calls must be made during an open time
            in {"Lisa’s"}
          </li>
          <li>
            We also do not tolerate Lisa reserves the right to end calls and
            cancel all future calls of any type of abusive conversation or of a
            sexual nature. In this case, Lisa will contact her customer to see
            how the upcoming call will go. Lisa reserves the right to decide
            whether to continue to assist the person. Depending on the
            circumstances and reasons for cancellation, Lisa reserves the right
            to determine refunds for her future calls. Lisa will be in contact
            with you to see what is best for your situation. This is all
            included in a questionnaire that each person completes at the
            beginning, which must be agreed upon prior to the session with Lisa.
          </li>
        </ul>
      </div>
    </div>
  );
}
