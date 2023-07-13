import React from "react";

type Props = {};

export default function Section1({}: Props) {
  return (
    <div className="relative bg-cover bg-top bg-fixed bg-no-repeat">
      {/* <div className="absolute w-full bg-[#444745]/80 h-full z-10"></div> */}
      <div className="w-[90%] md:w-[85%] lg:w-[76%] mx-auto flex flex-col items-center py-20">
        <h1 className="font-semibold text-5xl z-20 mb-8">HOW IT WORKS</h1>
        <ul
          className=" leading-8 text-base lg:text-lg z-20 list-outside list-disc 
    flex flex-col space-y-6"
        >
          <li className="">
            {
              "Once you have selected the ideal Chatting/Coaching package for your needs, you will be directed to our Coaching policies.  Please read this over and ensure you are in agreement with them before proceeding to the payment page.  After you agree, you will be taken to an Intake form.  This questionnaire is designed to give your coach a very good idea of yourself which in turn allows her to better understand you and determine the most effective approach in assisting you during your sessions. It is important to note that all information shared on this form is 100% confidential."
            }
          </li>
          <li>
            {
              "After completing the payment, you will be guided to a scheduling page where you can book your calls. We recommend scheduling all your calls at the time of purchase to ensure availability in Lisa's calendar. Please note that if you have purchased, for example, 25 hours of talking/coaching calls, we recommend you using them within the month.  When scheduling your calls, there will be a short form to fill out for you to let us know what you would like to focus on during that particular session.  This will help give your coach a good idea how best to assist you during that particular session. In the form, you can state whether you wish to discuss your concerns or challenges, engage in healing exercises, or receive coaching and mentoring during the call."
            }
          </li>
          <li>
            {
              "While this serves as a framework, it is important to note that it can be flexible and subject to change during the course of the conversation, based on your preferences."
            }
          </li>
        </ul>
      </div>
    </div>
  );
}
