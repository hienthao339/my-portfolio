"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "category 1",
    title: "project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [{ name: "tech 1" }, { name: "tech 2" }],
    image: "/assets/a.png",
    link: "/",
  },
  {
    num: "02",
    category: "category 2",
    title: "project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [{ name: "tech 1" }, { name: "tech 2" }],
    image: "/assets/b.png",
    link: "/",
  },
  {
    num: "03",
    category: "category 3",
    title: "project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [{ name: "tech 1" }, { name: "tech 2" }],
    image: "/assets/c.png",
    link: "/",
  },
  {
    num: "04",
    category: "category 4",
    title: "project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [{ name: "tech 1" }, { name: "tech 2" }],
    image: "/assets/d.png",
    link: "/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-16 items-center">
          {/* Info */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-4">
              {/* num */}
              <div className="text-8xl leading-none font-extrabold text-transparent outlined">
                {project.num}
              </div>

              {/* category */}
              <h2 className="text-4xl leading-[1.6] font-bold group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* description */}
              <p className="text-white/80">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4 mt-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-lg text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* link button */}
              <div className="my-4 w-fit">
                <Link href={project.link}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[56px] h-[56px] flex justify-center items-center group bg-white/5 rounded-full hover:bg-accent/5">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>

          </div>

          {/* Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper slidesPerView={1} spaceBetween={30} className="mb-12 xl:h-[520px]" onSlideChange={handleSlideChange}>
              {projects.map((item, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-white/5">
                    {/* overlay effect*/}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/15 z-10"></div>

                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image alt="" src={project.image} fill className="object-cover" />
                    </div>
                  </div>
                </SwiperSlide>
              })}
              {/* slider buttons */}
              <WorkSliderBtn containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:justify-none xl:w-max" btnStyles="rounded-none text-lg" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
