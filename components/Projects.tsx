import React from "react";
import Image from "next/image";
import netflix from "../public/assets/netflix.png";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [1, 2, 3, 4, 5];

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
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {/* projects */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                opacity: 0,
                y: -300,
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
              src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png"
              alt=""
              className=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  {" "}
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                Netflix Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate excepturi dolores quia ullam omnis iste aspernatur
                iusto, nisi nemo nam voluptatum aliquid aliquam, ipsam ab porro
                neque officia sapiente repellat!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
