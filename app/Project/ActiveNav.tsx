"use client";
import React from "react";
import { setopctionchoose } from "../../Redux-store/Redux-action";
import { useDispatch, useSelector } from "react-redux";
import { opctionchoose_data } from "../../Redux-store/Redux-action";
import Scale_Image from "../(Body_Section)/(ScaleImg)/Scale_Image";
import { Image_src_data } from "../../Redux-store/Redux-action";
interface Props {
  data: string;
  isMobile: boolean;
}
function ActiveNav() {
  const dispatch = useDispatch();
  const NavTag = useSelector(opctionchoose_data);
  const ImageSrc = useSelector(Image_src_data);
  return (
    <div className=" w-full h-[100px] 340:h-[70px] flex flex-row flex-wrap items-center text-gray-200  select-none justify-around">
      
    </div>
  );
}

export default ActiveNav;
