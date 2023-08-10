"use client";
import Header from "@/components/Header";
import { useState } from "react";

import { SiPhonepe, SiGooglemaps } from "react-icons/si";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { useForm } from "react-hook-form";
import Footer from "@/components/Footer";
type FormType = {
  name: string;
  email: string;
  number: string;
  message: string;
};

export default function Page() {
  const [isSubmitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm<FormType>();

  function handleForm(e: FormType) {
    setSubmitted(true);
  }

  return (
    <>
      <main>
        <Header selected="contact" />
        <div className="flex lg:flex-row flex-col">
          <div className="basis-1/2 flex flex-col items-center justify-center space-y-4 p-12">
            <p className="text-lg">
              Thank you for your interest in You’ve Got a Friend Chat and
              Mentoring Service where we like to say, <br />
              <br />
              <span className="font-bold text-purple-600 text-2xl">
                “Life Coaching with a Twist!”
              </span>
            </p>
            <p className="text-lg">
              If you have any questions or enquiries at all, please feel free to
              send us an email at{" "}
              <a
                href="mailto:info@ygafchatandmentor.com"
                className="text-blue-500"
              >
                info@ygafchatandmentor.com
              </a>{" "}
              or by filling out the contact form. We will return your message in
              24 hours or less.
            </p>

            <p className="text-lg">
              Have a Lovely day and remember there is always a solution to every
              problem, sometimes you just need help finding it!
            </p>
          </div>
          <div className="basis-1/2">
            <div className="mx-auto flex items-center justify-center gap-x-6 gap-y-4 py-8">
              <a
                href="mailto:info@ygafchatandmentor.com"
                className="py-4 px-8 flex justify-center rounded-md items-center
         bg-[#4E244D] text-white"
              >
                <HiMail size={70} color="white" />
                <div>
                  <h2 className="text-xl font-semibold">Email Us</h2>
                  <p>info@ygafchatandmentor.com</p>
                </div>
              </a>
            </div>
            <div className="flex lg:w-[85%] w-full mx-auto flex-col lg:flex-row">
              {isSubmitted ? (
                <div className=" bg-[#4E244D91] flex flex-col justify-center py-6 px-4 lg:space-y-0 space-y-4">
                  <p className="text-white text-lg text-center w-full py-3 border border-white">
                    Thanks for contacting us!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(handleForm)}
                  className="mx-auto lg:w-[68%] md:w-[80%] w-[90%] bg-[#4E244D91] flex gap-y-2 flex-col justify-between py-6 px-4 lg:space-y-0 space-y-4"
                >
                  <input
                    {...register("name")}
                    placeholder="Name"
                    type="text"
                    className="p-3 focus:outline-none text-sm"
                  />
                  <input
                    {...register("email")}
                    placeholder="Email"
                    type="text"
                    className="p-3 focus:outline-none text-sm"
                  />
                  <input
                    {...register("number")}
                    placeholder="Number"
                    type="text"
                    className="p-3 focus:outline-none text-sm"
                  />
                  <textarea
                    {...register("message")}
                    placeholder="Message"
                    className="p-3 focus:outline-none min-h-[150px] text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full uppercase bg-black text-white font-bold text-sm py-4"
                  >
                    Send
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
