import Link from "next/link";
import React from "react";
import Image from "next/image";

import img from '../../public/RAPPORT MAKEN.png'

export default function NewsLayer() {
  return (
    <div className="w-full py-4 bg-[#b8b6e7] z-30">
      <div className=" flex p-0  items-center overflow-hidden">
      <Image src={img} alt="" />
      <Image src={img} alt="" />
      <Image src={img} alt="" />
      <Image src={img} alt="" />
      <Image src={img} alt="" />
      <Image src={img} alt="" />
      <Image src={img} alt="" />
      </div>
    </div>
  );
}
