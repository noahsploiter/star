"use client";
import React from "react";
import Image from "next/image";
import Section1_text from "./Section1_text";
import { SectionWrapper } from "../(hoc)/index";
import Skill_data_provider from "./Skill_data_provider";
import i1 from '../../public/2.jpg'
import i2 from '../../public/3.jpg'
import i3 from '../../public/4.jpg'
import i4 from '../../public/5.jpg'
import i5 from '../../public/6.jpg'
import i6 from '../../public/7.jpg'
import i7 from '../../public/8.jpg'


function Section_4() {
  return (
    <div className="text-white mt-[-100]">
      <div>
            <h1 className='text-4xl font-bold text-center mt-10 underline'>Start your future with us</h1>
            <div className='flex justify-center flex-wrap space-x-4 space-y-5 mt-10 cursor-pointer'>
                <Image className='rounded-xl' src={i1} width={400} height={400} alt=''/>
                <Image className='rounded-xl' src={i2} width={400} height={400} alt=''/>
                <Image className='rounded-xl' src={i3} width={400} height={400} alt=''/>
            </div>
        </div>
    </div>
  );
}

export default SectionWrapper(Section_4, "Section_4");
