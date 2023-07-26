import React from "react";
import Image from "next/image";
type Props = {
  data: {
    name: string;
    message: string;
  };
};

export default function TestimonialCard({ data: { name, message } }: Props) {
  return (
    <div className="bg-white text-start py-4 px-6 rounded-md flex flex-col space-y-4">
      <div className="flex justify-between">
        <Image
          src="/assets/t1.jpeg"
          width={100}
          height={100}
          alt=""
          className="w-[60px] h-[60px] object-cover rounded-full"
        />
        <p className="font-semibold mt-4">— {name}</p>
      </div>
      <p className="flex-1">{message}</p>
    </div>
  );
}
