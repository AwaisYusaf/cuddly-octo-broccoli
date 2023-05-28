import Image from "next/image";
import React from "react";
import { MdFacebook } from "react-icons/md";
import { SiFacebook, SiTwitter, SiLinkedin } from "react-icons/si";
type Props = {};
import Link from "next/link";

import { Hepta_Slab } from "next/font/google";
const heptaSlab = Hepta_Slab({
  weight: ["300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export default function Footer({}: Props) {
  return (
    <footer className="flex flex-col space-y-10 py-20">
      <Image
        src="/assets/logo.png"
        width="300"
        height="300"
        alt=""
        className="self-center"
      />
      <div className="self-center flex space-x-5">
        <SiFacebook />
        <SiTwitter />
        <SiLinkedin />
      </div>
      <div className="w-[95%] lg:w-[80%] mx-auto grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div className="flex flex-col space-y-5">
          <h1 className={`${heptaSlab.className} font-semibold text-3xl`}>
            About Us
          </h1>
          <p className="leading-8 text-gray-500 w-[90%]">
            Lisa successfully built her business up from scratch to working full
            time, 7 days a week. She did this until one day in 2017, Lisa’s
            personal life took a very hard hit.
          </p>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className={`${heptaSlab.className} font-semibold text-3xl`}>
            Quick Links
          </h1>
          <Link href="/" className="text-gray-500">
            Home{" "}
          </Link>
          <Link href="/lisa-story" className="text-gray-500">
            About{" "}
          </Link>
          <Link href="/packages" className="text-gray-500">
            Packages
          </Link>
          <Link href="/contact" className="text-gray-500">
            Contact
          </Link>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className={`${heptaSlab.className} font-semibold text-3xl`}>
            Contact Us
          </h1>
          <Link href="/" className="text-gray-500">
            +(123)456-7891
          </Link>
          <Link href="/" className="text-gray-500">
            info@gmail.com
          </Link>
          <Link href="/" className="text-gray-500">
            Dummy Address Street 12
          </Link>
        </div>
      </div>
    </footer>
  );
}
