"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

type Props = {
  selected: string;
};

export default function Header({ selected }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b z-30">
      <header className="w-[95%] lg:w-[85%] mx-auto flex items-center justify-between h-full bg-white">
        <Link href="/" className="z-50">
          <Image
            src="/assets/logo.png"
            alt=""
            width="600"
            height="300"
            className="w-[180px] lg:w-[200px] z-50 bg-white"
          />
        </Link>
        <div className="flex lg:hidden">
          <div className="z-40">
            <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
          </div>
          <motion.div
            initial={{ y: -200 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", stiffness: 1000, damping: 150 }}
            className={`left-0 ${menuOpen ? "flex" : "hidden"
              } flex-col px-4 py-6 bg-white text-gray-500 top-24 z-40 absolute h-[400px]  w-full`}
          >
            <Link
              href="/"
              className="text-2xl  border-b border-gray-300 py-3 font-medium"
            >
              Home
            </Link>
            <Link
              href="/lisa-story"
              className="text-2xl  border-b border-gray-300 py-3 font-medium"
            >
              About Us
            </Link>
            <Link
              href="/all-packages"
              className="text-2xl border-b border-gray-300 py-3  font-medium"
            >
              Packages
            </Link>
            <Link
              href="/blog"
              className="text-2xl  border-b border-gray-300 py-3 font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-2xl  border-b border-gray-300 py-3 font-medium"
            >
              Contact
            </Link>
          </motion.div>
        </div>
        <nav className="pr-4 hidden lg:flex items-center h-full font-semibold ">
          <Link
            href="/"
            className="relative border-l h-[100px] flex items-center justify-center group px-5 text-center"
          >
            <div
              className={`absolute top-0  z-20 h-[120px] w-full 
            transition-transform duration-300 transform-translate 
            ${selected == "home"
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
              ${selected == "lisa-story"
                  ? "translate-y-0 bg-red-600"
                  : "-translate-y-48 group-hover:translate-y-0 bg-black"
                }
              
              z-20 h-[120px] w-full transition-transform duration-300 transform-translate`}
            ></div>
            <p className="z-50 text-center w-full group-hover:text-white">
              About Us
            </p>
          </Link>

          <Link
            href="/all-packages"
            className="relative border-l h-[100px]  flex items-center justify-center group px-5 text-center"
          >
            <div
              className={`absolute  ${selected == "packages"
                ? "translate-y-0 bg-red-600"
                : "-translate-y-48 group-hover:translate-y-0 bg-black"
                } top-0 z-20 h-[120px] w-full transition-transform duration-300 transform-translate`}
            ></div>
            <p className="z-50 text-center w-full group-hover:text-white">
              Packages
            </p>
          </Link>

          <Link
            href="/blog"
            className="relative border-x h-[100px] flex  items-center justify-center group px-5 text-center"
          >
            <div
              className={`absolute top-0  ${selected == "blog"
                ? "translate-y-0 bg-red-600"
                : "-translate-y-48 group-hover:translate-y-0 bg-black"
                }  z-20 h-[120px] w-full transition-transform duration-300 transform-translate`}
            ></div>
            <p className="z-50 text-center w-full group-hover:text-white">
              Blog
            </p>
          </Link>
          {/* <Link
            href="/terms-and-conditions"
            className="relative border-x h-[100px] flex  items-center justify-center group px-5 text-center"
          >
            <div
              className={`absolute top-0  ${selected == "terms-and-conditions"
                ? "translate-y-0 bg-red-600"
                : "-translate-y-48 group-hover:translate-y-0 bg-black"
                }  z-20 h-[120px] w-full transition-transform duration-300 transform-translate`}
            ></div>
            <p className="z-50 text-center w-full group-hover:text-white">
              Terms & Conditions
            </p>
          </Link> */}
          <Link
            href="/contact"
            className="relative border-x h-[100px] flex  items-center justify-center group px-5 text-center"
          >
            <div
              className={`absolute top-0  ${selected == "contact"
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
