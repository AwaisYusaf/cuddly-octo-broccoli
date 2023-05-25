import React from "react";

type Props = {};

export default function LandingPricing({}: Props) {
  return (
    <div className="pricingGradient">
      <div className="w-[85%] text-white mx-auto flex flex-col items-center py-20">
        <h1 className="text-7xl font-medium mb-8">Pricing</h1>
        <p className="text-lg mb-12 text-center leading-8">
          At You’ve Got a Friend Coaching and Mentoring, we believe that
          everyone deserves access to high-quality coaching and mentoring
          services, regardless of their financial situation. That’s why we offer
          a range of pricing options to suit every budget. Our rates are
          competitive and affordable, with flexible payment plans available to
          ensure that our services are accessible to everyone who needs them. We
          also offer a free initial consultation to help you determine if our
          coaching and mentoring services are right for you. Contact us today to
          learn more about our pricing options and start your journey towards a
          better future.
        </p>
        <h2 className="text-5xl font-medium mb-12">CHOOSE THE BEST PACKAGE</h2>
      </div>
    </div>
  );
}
