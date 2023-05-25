import React from "react";
import Accordion from "./Accordion";

type Props = {};

export default function SectionFour({}: Props) {
  return (
    <div className="flex mb-36">
      <div className="basis-1/2">
        <h1>{"You've"} Got A Friend Mentoring Service</h1>
        <Accordion />
      </div>
      <div className="basis-1/2"></div>
    </div>
  );
}
