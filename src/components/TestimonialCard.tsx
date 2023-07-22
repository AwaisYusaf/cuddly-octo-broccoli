import React from "react";

type Props = {
  data: {
    name: string;
    message: string;
  };
};

export default function TestimonialCard({ data: { name, message } }: Props) {
  return (
    <div className="bg-white text-start py-4 px-6 rounded-md flex flex-col">
      <p className="flex-1">{message}</p>
      <p className="font-semibold mt-4">— {name}</p>
    </div>
  );
}
