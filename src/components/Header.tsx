import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  selected: string;
};

export default function Header({ selected }: Props) {
  return (
    <div className="border-b z-30">
      <header className="w-[85%] mx-auto flex items-center justify-between h-full">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt=""
            width="600"
            height="300"
            className="w-[200px]"
          />
        </Link>
        <nav className="pr-4 hidden lg:flex items-center h-full font-semibold ">
          <Link
            href="/"
            className="relative border-l h-[100px] flex items-center justify-center group px-5 text-center"
          >
            <div
              className={`absolute top-0  z-20 h-[120px] w-full 
            transition-transform duration-300 transform-translate 
            ${
              selected == "home"
                ? "translate-y-0 bg-red-600"
                : "-translate-y-48 group-hover:translate-y-0 bg-black"
            } `}
            ></div>
            <p className="z-50 text-center w-full group-hover:text-white">
              Home
            </p>
          </Link>
          <Link
            href="/lisa-story"
            className="relative border-l h-[100px]  flex items-center justify-center group px-5 text-center"
          >
            <div
              className={`absolute top-0
              ${
                selected == "lisa-story"
                  ? "translate-y-0 bg-red-600"
                  : "-translate-y-48 group-hover:translate-y-0 bg-black"
              }
              
              z-20 h-[120px] w-full transition-transform duration-300 transform-translate`}
            ></div>
            <p className="z-50 text-center w-full group-hover:text-white">
              Lisa Story
            </p>
          </Link>

          <Link
            href="/packages"
            className="relative border-l h-[100px]  flex items-center justify-center group px-5 text-center"
          >
            <div
              className={`absolute  ${
                selected == "packages"
                  ? "translate-y-0 bg-red-600"
                  : "-translate-y-48 group-hover:translate-y-0 bg-black"
              } top-0 z-20 h-[120px] w-full transition-transform duration-300 transform-translate`}
            ></div>
            <p className="z-50 text-center w-full group-hover:text-white">
              Packages
            </p>
          </Link>
          <Link
            href="/contact"
            className="relative border-x h-[100px] flex  items-center justify-center group px-5 text-center"
          >
            <div
              className={`absolute top-0  ${
                selected == "contact"
                  ? "translate-y-0 bg-red-600"
                  : "-translate-y-48 group-hover:translate-y-0 bg-black"
              }  z-20 h-[120px] w-full transition-transform duration-300 transform-translate`}
            ></div>
            <p className="z-50 text-center w-full group-hover:text-white">
              Contact
            </p>
          </Link>
        </nav>
      </header>
    </div>
  );
}
