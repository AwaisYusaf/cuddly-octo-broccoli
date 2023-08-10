import React from "react";
import PricingCards from "./PricingCards";

type Props = {};

export default function LandingPricing({}: Props) {
  return (
    <div className="pricingGradient">
      <div className="w-[85%] text-white mx-auto flex flex-col items-center py-12">
        <h1 className="text-5xl font-medium mb-8">Pricing</h1>
        <p className=" mb-12 leading-8">
          Affordability is a cornerstone of You’ve Got a Friend. While
          conventional rates for Life Coaches or Counselors are typically
          $100/hr or more, we offer a much more affordable approach. We
          understand that financial constraints should not hinder your access to
          support. Our Talking/Coaching packages start at just $30/hr when you
          go for just one hour at a time, however it drops down significantly in
          price per session as you go with the larger packages.
          <br />
          Whether you want to dip your toes in the water with the1-hour option
          first or jump right in and sign up for our 25 hour package, we offer
          you the flexibility to choose the package that suits your needs best.
          <br />
          Take a look at our pricing options below and if you have any
          inquiries, please do not hesitate to send us a message
        </p>
        <h2 className="text-4xl font-medium mb-12">CHOOSE THE BEST PACKAGE</h2>
        <div>
          <PricingCards />
        </div>
      </div>
    </div>
  );
}
