import React from "react";
import Image from "next/image";
import Link from "next/link";
function Nav_Left() {
  return (
    <Link href={"/"} className="w-auto h-auto flex flex-row items-center">
      <Image
        src={"/logo.png"}
        width={40}
        height={40}
        alt="Noahsploit"
        className="  cursor-pointer  hover:animate-slowspin  "
      />
      <h1
        id=""
        className=" font-bold  text-gray-300  ml-[10px] hidden 310:flex "
      >
        Star Academy
      </h1>
    </Link>
  );
}

export default Nav_Left;
