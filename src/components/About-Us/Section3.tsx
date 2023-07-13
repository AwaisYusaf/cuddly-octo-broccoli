import React from "react";

type Props = {};

export default function Section3({}: Props) {
  return (
    <div className="relative bg-cover bg-top bg-fixed bg-no-repeat">
      {/* <div className="absolute w-full bg-[#444745]/80 h-full z-10"></div> */}
      <div className="w-[90%] md:w-[85%] lg:w-[76%] mx-auto flex flex-col items-center py-20">
        <h1 className="font-semibold text-5xl z-20 mb-8">DISCLAIMER</h1>
        <ul
          className=" leading-8 text-base lg:text-lg z-20 list-outside list-disc 
    flex flex-col space-y-6"
        >
          <li>
            Your Coach is certified as a Life Coach not a trained Therapist or
            Counsellor. Therefore, she does not possess the qualifications to
            assist with complex psychiatric problems. However, if you are
            seeking someone to talk to and require support, having a call with
            your coach could provide the necessary emotional guidance. It is
            important to consider that this call should not substitute
            professional help, especially if you are in a state of distress that
            may potentially harm yourself. If you find yourself in such a
            situation, we strongly advise contacting your local suicide hotline
            or consult your Doctor or Pyschologist.
          </li>
          <li>
            Please be aware that all scheduled calls are subject to {"Lisa's"}{" "}
            availability. We will do our best to accommodate your preferred
            times, but scheduling is contingent upon your {"Coach's"} schedule.
          </li>
          <li>
            We have a zero-tolerance policy against any form of abusive talk or
            talk of any sexual nature during your coaching sessions. Your Coach
            reserves the right to terminate the call and cancel any future
            sessions if this policy is violated. In such instances, your coach
            will assess the situation and follow up afterwards to determine the
            course of action and whether continued assistance is appropriate.
            Depending on the circumstances and the reason for cancellation, your
            coach has the right to decide to discontinue sessions and refund any
            remaining ones.
          </li>
          <li>
            These details are covered in the Coaching policies, which must be
            agreed to prior to commencing your sessions.
          </li>
          <li>
            Please remember that our coaching services aim to provide guidance,
            support, and personal development. If you have any further questions
            or concerns, we encourage you to reach out to us. Your well-being is
            of utmost importance to us, and we want to ensure you receive the
            appropriate assistance for your needs.
          </li>
        </ul>
      </div>
    </div>
  );
}
