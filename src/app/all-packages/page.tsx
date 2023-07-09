"use client";
import Header from "@/components/Header";
import { useState } from "react";

import { SiPhonepe, SiGooglemaps } from "react-icons/si";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { useForm } from "react-hook-form";
import Footer from "@/components/Footer";
import PricingCards from "@/components/PricingCards";
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
    console.log(e);
    setSubmitted(true);
  }

  return (
    <>
      <main>
        <Header selected="packages" />
        <div className="pricingGradient">
          <div className="w-[85%] text-white mx-auto flex flex-col items-center py-20">
            <h2 className="text-5xl font-medium mb-12">
              CHOOSE THE BEST PACKAGE
            </h2>
            <div>
              <PricingCards />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
