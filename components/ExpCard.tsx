import { motion } from "framer-motion";
import React from "react";

export default function ExpCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="rounded-full h-32 w-32 object-cover object-center xl:w-[200px] xl:h-[200px]"
        src="/assets/demo.jpg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Intern at XYZ</h4>
        <p className="font-bold text-2xl mt-1">XYZ</p>
        <div className="flex space-x-2 my-2">
          <motion.img
            className="h-10 w-10 rounded-full"
            src="https://cdn.cdnlogo.com/logos/t/96/typescript.svg"
            alt=""
          />
          <motion.img
            className="h-10 w-10 rounded-full"
            src="https://cdn.cdnlogo.com/logos/t/96/typescript.svg"
            alt=""
          />
          <motion.img
            className="h-10 w-10 rounded-full"
            src="https://cdn.cdnlogo.com/logos/t/96/typescript.svg"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>

        <ul className="list-disc spac-y-4 ml-5 text-lg">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
    </article>
  );
}
