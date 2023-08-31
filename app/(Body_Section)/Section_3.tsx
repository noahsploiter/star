"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../(hoc)/index";
import photo from '../../public/2.jpg'

function Section_3() {
  return (
  <div className="text-white">
    <div>
            <h1 className='text-center text-4xl font-bold underline'>Contact Us</h1>
            <div className='flex justify-around mt-[50px]'>
                <div>
                <h3 className='w-[400px] text-xl'>If you have any questions Please leave us a message or contact us through the following address</h3>
                <h3 className='mt-5 font-bold'>PHONE</h3>
                <h3 className='mt-3'>+25109090909</h3>
                <h3 className='mt-5 font-bold'>EMAIL</h3>
                <h3 className='mt-3'>info@starschool.com</h3>
                <h3 className='mt-3'>contact@starschoolet.com</h3>
                </div>
                <div>
                    <form action="">
                        <h1 className='text-3xl'>Leave a message</h1>
                        <div className='flex text-black  flex-col space-y-5 mt-10'>
                        <input className='w-[300px] outline-none pl-5 h-[40px] rounded-xl' type="text" placeholder='Name'/>
                        <input className='w-[300px] outline-none h-[40px] rounded-xl pl-5' type="text" placeholder='Email'/>
                        <textarea className='pl-5 outline-none' placeholder='Message' name="" id="" ></textarea>
                        <button className='border border-white w-[150px] h-[40px] rounded-md text-white hover:bg-slate-500'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>   
  </div>
  );
}

export default SectionWrapper(Section_3, "Section_3");
