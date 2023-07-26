import React from "react";
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/api/database/firebase";

type Props = { params: { id: string } };

async function getCustomerById(id: string) {
  "use server";
  const docRef = doc(db, "customers", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
}

export default async function Page({ params: { id } }: Props) {
  const customer = await getCustomerById(id);
  if (!customer) {
    return <div>No customer found</div>;
  }
  console.log(customer);
  return (
    <div className="lg:w-[80%] mx-auto">
      <Image
        src="/assets/logo.png"
        alt=""
        width="600"
        height="300"
        className="w-[180px] lg:w-[200px] z-50 bg-white mx-auto mt-4 mb-8"
      />
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Customer Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.firstName} {customer.lastName}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Date of birth
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.dob}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Gender
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.gender}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Nationality
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.nationality}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Country
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.country}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Religion
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.religion}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Package
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.packageId}
            </dd>
          </div>
        </dl>
      </div>
      <div className="px-4 sm:px-0 pt-6">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Intake Form Answers
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Questions asked on checkout
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="py-6 flex flex-col space-y-2">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Do you consider yourself an Empath highly sensitive or more of a
              Type A personality type? (Type A is considered less empathetic and
              sensitive and more of a go getter, competitive type)
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
              {customer.q1}
            </dd>
          </div>

          <div className="py-6 flex flex-col space-y-2">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Are you unemployed, self employed or employed? Please answer
              below. If employed or self employed, please describe below what
              you do for work?
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
              {customer.q2}
            </dd>
          </div>

          <div className="py-6 flex flex-col space-y-2">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Describe your fitness and activity level. What types of things do
              you do to keep active and exercise
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
              {customer.q3}
            </dd>
          </div>

          <div className="py-6 flex flex-col space-y-2">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Have you been diagnosed with any mental health conditions that we
              should be aware of? If so, please indicate below what it is and
              what treatment and/or medication protocols you are currently on if
              any
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
              {customer.q4}
            </dd>
          </div>

          <div className="py-6 flex flex-col space-y-2">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Describe your dietary lifestyle. What is your typical day to day
              diet is like
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
              {customer.q5}
            </dd>
          </div>

          <div className="py-6 flex flex-col space-y-2">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Do you have any addictions? Please describe below and whether you
              would like your mentor/coach to help you with that
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
              {customer.q6}
            </dd>
          </div>

          <div className="py-6 flex flex-col space-y-2">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Do you have any physical health conditions? Please share below
              what you have and how that impacts your life
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
              {customer.q7}
            </dd>
          </div>

          <div className="py-6 flex flex-col space-y-2">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Have you had coaching or therapy before? If so, please indicate
              what you have taken and what you liked about it/how it helped you.
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
              {customer.q8}
            </dd>
          </div>

          <div className="py-6 flex flex-col space-y-2">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Describe your worklife and what you would like to see different
              (If you go to school, you can specify and describe below as well)
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
              {customer.q9}
            </dd>
          </div>

          <div className="py-6 flex flex-col space-y-2">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Do you have any hobbies or passions? If so, describe below what
              really brings you the greatest joys in life. For instance, is it
              art, music, sciences, leadership, helping animals, volunteering
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
              {customer.q10}
            </dd>
          </div>

          <div className="py-6 flex flex-col space-y-2">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Please specify whether you would prefer chatting or
              coaching/mentoring or a combination of both in your sessions. If
              coaching/mentoring, is there anything holding you back from
              following the action steps and goals that will be given to help
              you move forward?
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
              {customer.q11}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
