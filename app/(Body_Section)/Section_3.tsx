"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../(hoc)/index";

function Section_3() {
  return (
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et illo quis expedita, enim voluptatibus voluptatum perspiciatis deleniti similique modi vel, rem repudiandae. Minima perspiciatis doloremque sequi at obcaecati tempora?
  </div>
  );
}

export default SectionWrapper(Section_3, "Section_3");
