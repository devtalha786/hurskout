"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import trust from '../../public/trustpilot.png'
import profile from '../../public/profile-pic.png'
import rating from '../../public/rating.png'
import { IoIosArrowBack, IoMdCheckmark } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

export default function Verifying() {
  return (
    <div className="w-full  py-3 md:pb-10   text-black  md:px-5  flex flex-col items-center justify-center gap-y-10">
        <div className="py-7 px-5 sm:px-5 flex flex-col gap-y-8 xl:flex-row items-center lg:items-start xl:justify-around w-[100%] lg:w-[90%] xl:w-[96%] text-black">
        <div className="flex flex-col gap-y-4">
        <Image src={trust} alt="" />
        <p className="w-full sm:w-[80%] lg:w-[51%] font-semibold text-[22px]">Ben jij ook op zoek naar een huurwoning? Ontvang het nieuwste woningaanbod van 2.300+ huizensites direct via WhatsApp of e-mail, zodat je als eerste kunt reageren en bezichtigen! </p>
        </div>

        <div className="flex gap-y-8 md:gap-y-3 flex-col bg-white rounded-2xl p-4 pb-10 items-start justify-center w-full md:w-[800px]">
        <div className='flex items-center gap-x-4 py-3 border-b'>
        <IoMdCheckmark className='bg-[#51b37e] h-[20px] w-[20px] md:h-[25px] md:w-[25px] rounded-full text-white p-1 '/>
        <h6 className='text-sm md:text-[16px] max-w-[70%]'>Bespaar zeeën van tijd terwijl onze zoekbot dag en nacht ruim 2.300 woningsites afspeurt.</h6>
        </div>

        <div className='flex items-center gap-x-4 py-3 border-b'>
        <IoMdCheckmark className='bg-[#51b37e] h-[20px] w-[20px] md:h-[25px] md:w-[25px] rounded-full text-white p-1 '/>
        <h6 className='text-sm  md:text-[16px] max-w-[70%]'>Bespaar zeeën van tijd terwijl onze zoekbot dag en nacht ruim 2.300 woningsites afspeurt.</h6>
        </div>

        <div className='flex items-center gap-x-4 py-3 '>
        <IoMdCheckmark className='bg-[#51b37e] h-[20px] w-[20px] md:h-[25px] md:w-[25px] rounded-full text-white p-1 '/>
        <h6 className='text-sm  md:text-[16px] max-w-[70%]'>Bespaar zeeën van tijd terwijl onze zoekbot dag en nacht ruim 2.300 woningsites afspeurt.</h6>
        </div>

        </div>
    </div>
    </div>
  )
}
