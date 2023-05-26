import Image from "next/image";
import React from "react";
import { Hepta_Slab } from "next/font/google";
import Link from "next/link";
const heptaSlab = Hepta_Slab({
  weight: ["300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

type Props = {};

export default function AboutMeLanding({}: Props) {
  return (
    <div className="flex flex-col space-y-8 lg:space-y-12 w-[90%] lg:w-[85%] mx-auto">
      <h1 className={`${heptaSlab.className} text-3xl font-semibold`}>
        — About Me
      </h1>
      <Image
        src="/assets/about-me-landing.jpg"
        width={500}
        height={500}
        alt=""
        className="rounded-full object-cover w-[110px] h-[110px] lg:w-[200px] lg:h-[200px]"
      />
      <div className="flex flex-col space-y-6">
        <h2 className={`${heptaSlab.className} text-3xl font-semibold`}>
          Hello, nice to meet you!
        </h2>
        <p className="text-lg leading-8 text-gray-500">
          Lisa herself came from a organized upbringing where she nurtured up in
          a family that was not close, did not show or express love. Mother and
          Father were at odds and divorced while Lisa was a teen. It was a
          dysfunctional family where no one spoke to each other much and mostly
          just clashed. It was like no one in the family got along. Lisa always
          felt unaccompanied and isolated. She grew up feeling like an outcast
          in culture. She never felt like she fit in, had little friends or even
          boyfriends growing up. At a very early age, Lisa got into smouldering
          cigarettes, drinking, smoking pot and even experimenting with
          hallucinogenic drugs. Her teen years was filled with sadness and let
          downs.
        </p>
        <p className="text-lg leading-8 text-gray-500">
          Lisa went into her adult years fighting severe anxiety and depression
          but nonetheless through it all, succeeded to press on. She graduated
          high school in 1983, went on to work for her father in his office as a
          secretary and then later went back to college to pursue Higher
          education. After working for her father in his advertising forte
          company for a number of years, Lisa went back to college a few times.
          The first time was in 1990 where she contracted up for the Commercial
          Music program through the local college as Lisa always had a vision to
          be a professional singer/performer. Lisa is a massive music fan and
          over the years has been in bands and even sang live at multiple music
          venues in front of audiences.
        </p>
        <Link
          href="/lisa-story"
          className="self-start bg-[#9794C9] rounded uppercase px-8 py-2 text-white font-semibold"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
