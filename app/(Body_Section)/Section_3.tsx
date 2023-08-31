"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../(hoc)/index";
import photo from '../../public/2.jpg'

function Section_3() {
  return (
  <div className="text-white mt-[500px]">
    <div>
            <h1 className='text-4xl font-bold text-center pt-10 underline'>About</h1>
        </div>
        <div className='flex justify-around mt-[70px]'
        >
            <div className='space-y-3'>
                <Image className='rounded-xl' src={photo} width={400} height={400} alt=''/>
                <Image className='rounded-xl' src={photo} width={400} height={400} alt=''/>
            </div>
            <div className=''>
                <h1 className='mt-10 text-4xl font-bold underline'>VISION</h1>
                <p className='text-xl mt-5 font-semibold w-[400px]'>
                Our vision is to be a premier national educational institution which cultivates all round development of qualities in a student through excellence in education
                </p>
                <h2 className='text-2xl mt-10 font-semibold underline'>LETS HELP YOU CHANGE YOUR CHILDS LIFE</h2>
                <p className='w-[400px] mt-3 text-xl'>
                Star academic program challenges and inspires students to discover their passion and realize their potential.
                Our teachers are highly professional, caring,  collaborative, focused, and dedicated.
                </p>
            </div>
        </div>
  </div>
  );
}

export default SectionWrapper(Section_3, "Section_3");
