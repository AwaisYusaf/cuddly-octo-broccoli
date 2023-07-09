import React, { useState } from "react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
type FormType = {
  firstName: string;
  lastName: string;
  email: string;
  maritalStatus: string;
  dob: string;
  phone: string;
  nationality: string;
  country: string;
  gender: string;
  religion: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  q10: string;
  q11: string;
  packageId: string | number;
};
type Props = {};

export default function IntakeForm({ id }: { id: any }) {
  const { register, handleSubmit } = useForm<FormType>();
  const [submitted, setSubmitted] = useState(false);

  async function buyPackage(e: FormType) {
    const res = await fetch("/api/submit-customer", {
      method: "POST",
      body: JSON.stringify(e),
    });
    const data = await res.json();
    window.location = data.url;
  }

  function handleForm(e: FormType) {
    console.log(e);
    // setSelectedTab(selectedTab + 1);
    //Do all form submitting process here..
    setSubmitted(true);
    buyPackage({ ...e, packageId: id });

    //Then->
  }
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-16 flex flex-col space-y-12">
      <div>
        <p className="text-base font-semibold text-center text-indigo-600">
          CUSTOMER INFORMATION
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
          Intake Form
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(handleForm)}
        className="grid grid-cols-4 gap-x-8 gap-y-6"
      >
        <div className="col-span-4 md:col-span-2 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            First Name
          </label>
          <input
            {...register("firstName", { required: true })}
            placeholder="First Name"
            type="text"
            className="border p-2 border-gray-300 focus:outline-none  focus:border-blue-300"
          />
        </div>
        <div className="col-span-4 md:col-span-2 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Last Name
          </label>
          <input
            {...register("lastName", { required: true })}
            placeholder="Last Name"
            type="text"
            className="border p-2 border-gray-300 focus:outline-none  focus:border-blue-300"
          />
        </div>
        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Date of birth
          </label>
          <input
            {...register("dob", { required: true })}
            className="border p-2  border-gray-300 focus:outline-none  focus:border-blue-300"
            type="date"
          />
        </div>
        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Gender
          </label>
          <div>
            <input
              {...register("gender", { required: true })}
              value="male"
              className="border p-2  border-gray-300 focus:outline-none  focus:border-blue-300"
              type="radio"
              id="male-radio"
            />
            <label className="px-2" htmlFor="male-radio">
              Male
            </label>
          </div>
          <div>
            <input
              {...register("gender", { required: true })}
              value="female"
              className="border p-2  border-gray-300 focus:outline-none  focus:border-blue-300"
              type="radio"
              id="female-radio"
            />
            <label className="px-2" htmlFor="female-radio">
              Female
            </label>
          </div>
        </div>

        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="border p-2  border-gray-300 focus:outline-none  focus:border-blue-300"
            type="text"
          />
        </div>

        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            What is your nationality?
          </label>
          <input
            {...register("nationality", { required: true })}
            className="border p-2  border-gray-300 focus:outline-none  focus:border-blue-300"
            type="text"
          />
        </div>

        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            What country do you presently reside in?
          </label>
          <input
            {...register("country", { required: true })}
            className="border p-2  border-gray-300 focus:outline-none  focus:border-blue-300"
            type="text"
          />
        </div>
        {/* Set it */}
        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Marital Status
          </label>
          <select
            {...register("maritalStatus", { required: true })}
            className="border p-2 border-gray-300 focus:outline-none  focus:border-blue-300"
          >
            <option value="">- Select -</option>
            <option value={"unmarried"}>Unmarried</option>
            <option value={"married"}>Married</option>
            <option value={"divorced"}>Divorced</option>
            <option value={"widowed"}>Widowed</option>
          </select>
        </div>

        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Do you consider yourself an Empath highly sensitive or more of a
            Type A personality type? (Type A is considered less empathetic and
            sensitive and more of a go getter, competitive type)
          </label>
          <textarea
            {...register("q1", { required: true })}
            className="border p-2 min-h-[100px] border-gray-300 focus:outline-none  focus:border-blue-300"
          />
        </div>

        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Are you unemployed, self employed or employed? Please answer below.
            If employed or self employed, please describe below what you do for
            work?
          </label>
          <textarea
            {...register("q2", { required: true })}
            className="border p-2 min-h-[100px] border-gray-300 focus:outline-none  focus:border-blue-300"
          />
        </div>

        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Describe your fitness and activity level. What types of things do
            you do to keep active and exercise
          </label>
          <textarea
            {...register("q3", { required: true })}
            className="border p-2 min-h-[100px] border-gray-300 focus:outline-none  focus:border-blue-300"
          />
        </div>

        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Have you been diagnosed with any mental health conditions that we
            should be aware of? If so, please indicate below what it is and what
            treatment and/or medication protocols you are currently on if any
          </label>
          <textarea
            {...register("q4", { required: true })}
            className="border p-2 min-h-[100px] border-gray-300 focus:outline-none  focus:border-blue-300"
          />
        </div>

        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Describe your dietary lifestyle. What is your typical day to day
            diet is like
          </label>
          <textarea
            {...register("q5", { required: true })}
            className="border p-2 min-h-[100px] border-gray-300 focus:outline-none  focus:border-blue-300"
          />
        </div>

        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Do you have any addictions? Please describe below and whether you
            would like your mentor/coach to help you with that
          </label>
          <textarea
            {...register("q6", { required: true })}
            className="border p-2 min-h-[100px] border-gray-300 focus:outline-none  focus:border-blue-300"
          />
        </div>

        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Do you have any physical health conditions? Please share below what
            you have and how that impacts your life
          </label>
          <textarea
            {...register("q7", { required: true })}
            className="border p-2 min-h-[100px] border-gray-300 focus:outline-none  focus:border-blue-300"
          />
        </div>

        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Have you had coaching or therapy before? If so, please indicate what
            you have taken and what you liked about it/how it helped you.
          </label>
          <textarea
            {...register("q8", { required: true })}
            className="border p-2 min-h-[100px] border-gray-300 focus:outline-none  focus:border-blue-300"
          />
        </div>

        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Describe your worklife and what you would like to see different (If
            you go to school, you can specify and describe below as well)
          </label>
          <textarea
            {...register("q9", { required: true })}
            className="border p-2 min-h-[100px] border-gray-300 focus:outline-none  focus:border-blue-300"
          />
        </div>

        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Do you have any hobbies or passions? If so, describe below what
            really brings you the greatest joys in life. For instance, is it
            art, music, sciences, leadership, helping animals, volunteering
          </label>
          <textarea
            {...register("q10", { required: true })}
            className="border p-2 min-h-[100px] border-gray-300 focus:outline-none  focus:border-blue-300"
          />
        </div>

        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Please specify whether you would prefer chatting or
            coaching/mentoring or a combination of both in your sessions. If
            coaching/mentoring, is there anything holding you back from
            following the action steps and goals that will be given to help you
            move forward?
          </label>
          <textarea
            {...register("q11", { required: true })}
            className="border p-2 min-h-[100px] border-gray-300 focus:outline-none  focus:border-blue-300"
          />
        </div>

        <div className="col-span-4 flex flex-col">
          <label className="font-medium text-gray-600 text-sm mb-2">
            Although we do not believe in enforcing any particular religious
            ideologies on anyone, to help us in knowing what our clients are
            comfortable discussing, we would like to know if you are comfortable
            if we bring into your session any spiritual or religious references.
            With that being said, we would like to know your spiritual beliefs.
            Please indicate below what faith you associate with. Also, please
            elaborate in the box below if you are okay or not with discussing
            religious topics in your sessions even if that means it may be of a
            different faith. Please try to be as detailed as possible so we know
            your comfort levels and preferences.
          </label>
          <select
            {...register("religion", { required: true })}
            className="border p-2 border-gray-300 focus:outline-none  focus:border-blue-300"
          >
            <option value="">- Select -</option>
            <option value="Islam">Islam</option>
            <option value="Christian">Christian</option>
            <option value="Mormon">Mormon</option>
            <option value="Catholic">Catholic</option>
            <option value="Atheist">Atheist</option>
            <option value="Jehovah Witness">Jehovah Witness</option>
            <option value="7 Day Adventist">7 Day Adventist</option>
            <option value="Sikhism">Sikhism</option>
            <option value="Judaism">Judaism</option>
            <option value="Hinduism">Hinduism</option>
            <option value="Spiritual (New Age)">Spiritual (New Age)</option>
            <option value="Atheist">Atheist</option>
            <option value="Agnostic">Agnostic</option>
          </select>
        </div>

        <div className="col-span-4">
          <button
            disabled={submitted}
            type="submit"
            className={`px-8 py-3 text-sm bg-blue-600 rounded text-white ${
              submitted ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {submitted ? "Checking Out..." : "Continue"}
          </button>
        </div>
      </form>
    </div>
  );
}
