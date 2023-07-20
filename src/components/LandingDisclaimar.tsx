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
          className="text-gray-300 leading-8 text-base z-20 list-outside list-disc 
        flex flex-col space-y-4"
        >
          <li>
            Your Coach is a trained Life Coach and not a licensed Therapist or
            Counsellor. She cannot provide assistance for complex psychiatric
            problems or recommend medications. If you require help in these
            areas, it is recommended to seek guidance from a medical
            professional, psychologist, or psychiatrist.
          </li>
          <li>
            We are not a suicide hotline. If you are experiencing thoughts of
            ending your life, please contact emergency services or a designated
            suicide hotline in your area. They are equipped with the proper
            training to assist individuals in crisis. However, if you are in
            need of someone to talk to during a crisis situation, we are here to
            provide support and help you find resources to keep you safe.
          </li>
          <li>
            Please note that scheduled calls are subject to {"Lisa's"}{" "}
            availability. We will do our best to accommodate your preferred
            time, but scheduling is based on the {"coach's"} existing
            commitments.
          </li>
          <li>
            Abusive or sexually explicit language will not be tolerated during
            coaching sessions. If such behavior occurs, your Coach reserves the
            right to end the call and cancel any future sessions. Following such
            an incident, your Coach will reach out to discuss the situation and
            determine the appropriate course of action. Depending on the outcome
            of the conversation, your Coach may decide to continue or terminate
            the coaching relationship. If termination is necessary, our refund
            policy, outlined in the Coaching policies, will apply. We kindly ask
            that you review and agree to these policies before starting your
            Chat and Mentor sessions.
          </li>
          <li>
            Please remember that the services provided by {"You've"} Got a
            Friend Chat and Mentor Service are intended to offer support,
            guidance, and a listening ear. While we strive to provide a safe and
            helpful environment, it is important to seek professional help for
            severe psychiatric issues or emergency situations.
          </li>
        </ul>
      </div>
    </div>
  );
}
