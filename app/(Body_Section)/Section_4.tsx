"use client";
import React from "react";
import Image from "next/image";
import Section1_text from "./Section1_text";
import { SectionWrapper } from "../(hoc)/index";
import Skill_data_provider from "./Skill_data_provider";

function Section_4() {
  return (
    <div className="text-white">
      Sec
    </div>
  );
}

export default SectionWrapper(Section_4, "Section_4");
