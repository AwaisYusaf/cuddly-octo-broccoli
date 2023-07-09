import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

type Props = {};

export default function Congragulations({}: Props) {
  const { width, height } = useWindowSize();
  return (
    <div className="w-full h-screen">
      <Confetti width={width} height={height} />
    </div>
  );
}
