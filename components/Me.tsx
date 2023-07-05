import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import demo from "../public/assets/demo.jpg";
import BackgroundCircles from "./BackgroundCircles";

export default function Me() {
  const [text, count] = useTypewriter({
    words: [
      "Hello, I'm Maruf",
      "Man-I-love-Coffee.tsx",
      "<CanCode />",
      "Design. Develop. Deliver.",
      "Building the future, one line of code at a time",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={demo}
        alt=""
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="meBtn">About</button>
          </Link>
          <Link href="#experience">
            <button className="meBtn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="meBtn">Skils</button>
          </Link>
          <Link href="#projects">
            <button className="meBtn">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="meBtn">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
