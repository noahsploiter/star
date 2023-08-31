"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { SectionWrapper } from "../(hoc)/index";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { fadeIn, textVariant } from "../../utils/motion";
import noahsploit from '../../public/noahsploit.png' 
function Section_2() {
  return (
    <div className=" 1300 1300:w-[1250px] h-full  flex flex-row items-center justify-between z-[-10] mt-[80px] 500:mt-0  ">
      <div
        className=" w-full 800:w-[90%] 1000:w-[70%] 1140:w-[50%] h-full flex flex-col items-center  1140:items-start  justify-center m-auto
       text-center 1140:text-start"
      >
        {/* <motion.div
          variants={textVariant(2)}
          id="Wecom-box"
          className=" px-[15px] py-[6px]  border border-[#7042f88b]  opacity-[0.9] space-x-4"
        >
          <Image className="rounded-full" src={noahsploit} alt="noahsploit" width={50} height={50}/>
          <SparklesIcon className=" h-4 370:h-5 w-4 370:w-5  text-[#b49bff] mr-[10px]" />
          <div
            id="Wecom-text"
            className=" text-[12px] 310:text-[14px] 370:text-auto"
          >
            Full Stack Software Engineer
          </div>
        </motion.div> */}
        <div className="  w-auto h-auto  animate-slideleftT2 mt-[24px] text-white  ">
          <span className=" text-[40px] 400:text-[50px]  800:text-[57px] font-bold align-top ">
            Star{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Academy
            </span>{" "}
          </span>
          
        </div>
        <p className=" animate-slideleftT3 text-[16px] 400:text-[19px] text-slate-400 mb-[20px]  ">
        Hello. Star Acedamy has been established in ... EC. We started with a bright vision and great ambition to make a visible and tangible change by delivering quality education to those who get enrolled with us and set  a high standard to schools around our area in particular and to all over the country at large.  
        </p>
        {/* <a
          href="#Section_4"
          id="button-primary"
          className=" animate-slideleftT4 px-[20px] py-[7px] text-white  cursor-pointer hover:scale-105 active:scale-90  transition-all   duration-150 select-none rounded-[5px]"
        >
          Start learing Now!
        </a> */}
      </div>
      <div className=" w-[50%] h-full hidden 1140:flex flex-row items-center  select-none justify-between ml-10 rounded-2xl">
        <Image
          src="/3.jpg"
          width={708}
          height={740}
          alt=""
          className="   flex animate-slideright2  transition_"
        />
      </div>
    </div>
  );
}

export default SectionWrapper(Section_2, "Section_2");
