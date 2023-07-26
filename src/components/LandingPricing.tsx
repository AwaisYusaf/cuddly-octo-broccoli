import React from "react";
import PricingCards from "./PricingCards";

type Props = {};

export default function LandingPricing({}: Props) {
  return (
    <div className="pricingGradient">
      <div className="w-[85%] text-white mx-auto flex flex-col items-center py-12">
        <h1 className="text-5xl font-medium mb-8">Pricing</h1>
        <p className=" mb-12 leading-8">
          Welcome to {"You've"} Got a Friend Chat and Mentor Service, where we
          believe that everyone deserves access to help, regardless of their
          financial situation. We understand the importance of affordability and
          convenience in seeking support, which is why we offer a range of
          pricing options to cater to every budget and need. We purposefully
          made our pricing lower than traditional coaching prices. This is no
          reflection on the quality of service you will get. We price it low
          because our main agenda and mission is to help as many people out
          there as possible in an affordable way.
          <br />
          Check out our different pricing/packages below and decide on the best
          one for you. Remeber, you can always try the one-hour session first if
          you prefer to dip your toes in before choosing a larger sized package.
          Alternatively, the pricing may be low enough that you can just go
          ahead and jump in with both feet and go for the 30 hour package at a
          very low per session price. With each larger package, we offer an even
          better per session price.
          <br />
          If you have any questions before embarking on your journey towards a
          better and more fulfilling life, feel free to contact us today. We are
          always just a click away, ready to assist you with whatever it is you
          need help with. Until then, have yourself a wonderful day!
        </p>
        <h2 className="text-4xl font-medium mb-12">CHOOSE THE BEST PACKAGE</h2>
        <div>
          <PricingCards />
        </div>
      </div>
    </div>
  );
}
