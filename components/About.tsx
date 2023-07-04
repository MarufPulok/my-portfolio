import { motion } from "framer-motion";
import React from "react";
import demo from "../public/assets/demo.jpg";

export default function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src="/assets/demo.jpg"
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here Is a{" "}
          <span className="underline decoration-[#f7ab0a]">little</span>{" "}
          backgrounds
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet placeat
          optio labore, nisi, repellat blanditiis laborum culpa aut aliquid illo
          earum libero expedita! Ullam distinctio ipsa ipsam molestias nihil?
          Saepe ex laudantium distinctio aliquid iure libero quae eveniet eos,
          earum aut non odio nihil molestiae quam velit! Iure officiis,
          molestiae similique eaque eos accusamus aperiam error assumenda
          dolorem totam consectetur, nemo cupiditate? Corrupti officiis
          provident fugit nostrum dicta magnam, debitis, quam modi sunt
          laudantium ex unde quas nisi suscipit omnis.
        </p>
      </div>
    </motion.div>
  );
}
