import React from "react";
import Image from "next/image";

type Props = {};

export default function SectionThree({}: Props) {
  return (
    <div className="flex flex-col items-center min-h-[90vh] py-20">
      <Image src="/assets/ss.png" width={600} height={800} alt="" />
      <button className="px-8 py-3 uppercase bg-blue-600 rounded text-white">
        Download
      </button>
    </div>
  );
}
