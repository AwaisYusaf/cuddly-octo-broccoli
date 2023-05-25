import React from "react";

type Props = {};

export default function TestimonialCard({}: Props) {
  return (
    <div className="bg-white text-start py-4 px-6 rounded-md">
      <p>
        {
          "I gained so much confidence in my ability to connect and deepen my relationships with people. It’s amazing how much easier it has been to meet new people and create instant connections. I have the exact same personality, the only thing that has changed is my mindset and a few behaviors."
        }
      </p>
      <p className="font-semibold mt-4">— Tom Allen</p>
    </div>
  );
}
