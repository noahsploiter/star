"use client";
import React from "react";
import Projectcard_Web from "./(PojectCard)/Projectcard_Web";
import Projectcard_Mobile from "./(PojectCard)/Projectcard_Mobile";
import { useSelector } from "react-redux";
import {
  opctionchoose_data,
  SearchQuery_data,
} from "../../Redux-store/Redux-action";
import Server_card from "./Server_card";
import Image from "next/image";
import i1 from '../../public/2.jpg'
import i2 from '../../public/3.jpg'
import i3 from '../../public/4.jpg'
import i4 from '../../public/5.jpg'
import i5 from '../../public/6.jpg'
import i6 from '../../public/7.jpg'
import i7 from '../../public/8.jpg'



function Projectpagebody() {
  const NavTag = useSelector(opctionchoose_data);
  const Search_query = useSelector(SearchQuery_data);

  

  return (
    <div className="text-white">
      <h1>LETS HELP YOU CHANGE YOUR CHILDS LIFE</h1>
      <div>
      <div>
            <h1 className='text-4xl font-bold text-center mt-10 underline'>Start your future with us</h1>
            <div className='flex flex-wrap space-x-4 items-center space-y-5 mt-10 cursor-pointer'>
                <Image className='rounded-xl' src={i1} width={400} height={400} alt=''/>
                <Image className='rounded-xl' src={i2} width={400} height={400} alt=''/>
                <Image className='rounded-xl' src={i3} width={400} height={400} alt=''/>
                <Image className='rounded-xl' src={i4} width={400} height={400} alt=''/>
                <Image className='rounded-xl' src={i5} width={400} height={400} alt=''/>
                <Image className='rounded-xl' src={i6} width={400} height={400} alt=''/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Projectpagebody;
