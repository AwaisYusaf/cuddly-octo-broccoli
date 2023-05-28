"use client";
import { useState } from "react";
import Header from "@/components/Header";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
type FormType = {
  firstName: string;
  lastName: string;
  email: string;
  plan: string;
};
export default function Page() {
  const [isSubmitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm<FormType>();
  function handleForm(e: FormType) {
    console.log(e);

    //Do all form submitting process here..

    //Then->
    setSubmitted(true);
  }
  if (isSubmitted) {
    return (
      <main>
        <Header selected="packages" />
        <motion.div
          initial={{ opacity: 0, scaleY: 0.5 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-16 flex flex-col space-y-12"
        >
          <p className="border border-gray-500 w-full py-4 text-center text-base lg:text-lg">
            Thanks for placing your order!
          </p>
        </motion.div>
      </main>
    );
  }
  return (
    <main>
      <Header selected="packages" />
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-16 flex flex-col space-y-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
          Packages
        </h1>
        <form
          onSubmit={handleSubmit(handleForm)}
          className="grid grid-cols-4 gap-x-8 gap-y-6"
        >
          <div className="col-span-4 md:col-span-2 flex flex-col">
            <label className="text-xs font-semibold text-gray-600 uppercase mb-2">
              First Name
            </label>
            <input
              {...register("firstName")}
              placeholder="First Name"
              type="text"
              className="border p-2 border-gray-300 focus:outline-none  focus:border-blue-300"
            />
          </div>
          <div className="col-span-4 md:col-span-2 flex flex-col">
            <label className="text-xs font-semibold text-gray-600 uppercase mb-2">
              Last Name
            </label>
            <input
              {...register("lastName")}
              placeholder="Last Name"
              type="text"
              className="border p-2 border-gray-300 focus:outline-none  focus:border-blue-300"
            />
          </div>
          <div className="col-span-4 flex flex-col">
            <label className="text-xs font-semibold text-gray-600 uppercase mb-2">
              Email
            </label>
            <input
              {...register("email")}
              placeholder="Email"
              className="border p-2  border-gray-300 focus:outline-none  focus:border-blue-300"
              type="text"
            />
          </div>
          <div className="col-span-4 md:col-span-2 flex flex-col">
            <label className="text-xs font-semibold text-gray-600 uppercase mb-2">
              Plan
            </label>
            <select
              {...register("plan")}
              className="border p-2  border-gray-300 focus:outline-none  focus:border-blue-300"
            >
              <option value="">- Select -</option>
              <option value={"plan-1"}>
                1 hour of individual chatting or coaching
              </option>
              <option value={"plan-2"}>25 hours of chatting or coaching</option>
              <option value={"plan-3"}>20 hours of chatting or coaching</option>
              <option value={"plan-4"}>15 hours of chatting or coaching</option>
              <option value={"plan-5"}>10 hours of chatting or coaching</option>
              <option value={"plan-6"}>5 hours of chatting or coaching</option>
            </select>
          </div>
          <div className="col-span-4">
            <button
              type="submit"
              className="px-8 py-3 uppercase bg-blue-600 rounded text-white"
            >
              Purchase
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
