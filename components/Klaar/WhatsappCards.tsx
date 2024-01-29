import React from 'react'
import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import image from '@/public/visa-payment-white.png';
import icon from '@/public/wtsap.png';
export default function WhatsappCards() {
    return (
        <div className=' bg-[rgb(198,197,236)] py-5 md:py-16 w-full flex flex-col justify-center items-center'>
            <div className='md:mb-10 flex md:items-center items-start gap-x-5 flex-wrap gap-y-5 justify-start md:justify-around w-[90%] lg:w-[80%]'>
                <div className='flex items-center gap-x-3'>
                    <IoMdCheckmark className='bg-[#51b37e] h-[20px] w-[20px] md:h-[30px] md:w-[30px] rounded-full text-white p-1 ' />
                    <h6 className='md:text-[22px]'>Amsterdam</h6>
                </div>
                <div className='flex items-center gap-x-3'>
                    <IoMdCheckmark className='bg-[#51b37e] rounded-full h-[20px] w-[20px] md:h-[30px] md:w-[30px] text-white p-1 ' />
                    <h6 className='md:text-[22px]'>tot €3.000 /maand</h6>
                </div>
                <div className='flex items-center gap-x-3'>
                    <IoMdCheckmark className='bg-[#51b37e] h-[20px] w-[20px] md:h-[30px] md:w-[30px] rounded-full text-white p-1 ' />
                    <h6 className='md:text-[22px]'>min. 30m2</h6>
                </div>
                <div className='flex items-center gap-x-3'>
                    <IoMdCheckmark className='bg-[#51b37e] h-[20px] w-[20px] md:h-[30px] md:w-[30px] rounded-full text-white p-1 ' />
                    <h6 className='md:text-[22px]'>Min. 1 slaaplamer</h6>
                </div>
            </div>

            <div className="container py-16 px-5 sm:px-5 flex flex-col gap-y-4 lg:flex-row items-start lg:items-center lg:justify-around w-[100%] lg:w-[90%] xl:w-[86%] text-black">
                <h5 className="text-[32px] sm:text-[40px] md:text-[35px] lg:text-[48px] font-[900] md:w-[50%]  uppercase ">Teun! Mis geen woningmatches meer.</h5>
                <p className="w-full sm:w-[80%] lg:w-[40%] md:text-[18px]">Kies jouw abonnement en reageer direct op woningmatches</p>
            </div>

            <div className='cursor-pointer flex gap-x-2 sm:px-5 xl:px-2 xl:flex-row flex-col gap-y-9 items-center justify-center lg:justify-around w-full xl:w-[90%] py-5 pt-10'>

                <div className='bg-black shadow-xl   w-[92%] lg:w-[90%] xl:w-[430px] flex items-center overflow-hidden rounded-2xl'>
                    <div className=' w-[20%] flex justify-center items-center'>
                        <div className='h-[25px] w-[25px] rounded-full border-[2px] border-[#B8B6E7] '></div>
                    </div>
                    <div className='flex bg-white flex-col py-6 w-[80%]  items-start justify-center '>
                        <div className='flex flex-col gap-y-2 items-start justify-center px-4 w-full'>
                            <h1 className='font-extrabold text-[22px]'>3 maanden</h1>
                            <p className='md:text-[18px]'>€16.33 /mnd. <span className='text-[#51b37e]'>44% korting</span></p>
                        </div>
                        <div className='bg-[#f8f8fd] relative top-6 p-4 flex px-4 w-full'>
                            <div className='flex items-center justify-start gap-x-3 '>

                                <Image src={icon} alt='wtsap icon' width={30} />
                                <p className='text-[15px]'>Inclusief gratis Whatsapp-alerts</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='cursor-pointer bg-white shadow-xl w-[92%] lg:w-[90%] xl:w-[430px] flex items-center overflow-hidden rounded-2xl'>
                    <div className=' w-[20%] flex justify-center items-center '>
                        <div className='h-[25px] w-[25px] rounded-full border-[2px] border-[#B8B6E7] '></div>
                    </div>
                    <div className='flex bg-white  shadow-xl flex-col py-6 w-[80%]  items-start justify-center border-l border-[#B8B6E7]'>
                        <div className='flex flex-col gap-y-2 items-start justify-center px-4 w-full'>
                            <h1 className='font-extrabold text-[22px]'>3 maanden</h1>
                            <p className='md:text-[18px]'>€16.33 /mnd. <span className='text-[#51b37e]'>44% korting</span></p>
                        </div>
                        <div className='bg-[#f8f8fd] relative top-6 p-4 flex px-4 w-full'>
                            <div className='flex items-center justify-start gap-x-3 '>
                                {/* <FaWhatsapp size={20} className='bg-[#52c369] text-white rounded-sm' /> */}
                                <Image src={icon} alt='wtsap icon' width={30} />
                                <p className='text-[15px]'>Inclusief gratis Whatsapp-alerts</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='cursor-pointer bg-white shadow-xl  w-[92%] lg:w-[90%] xl:w-[430px] flex items-center overflow-hidden rounded-2xl'>
                    <div className=' w-[20%] flex justify-center items-center'>
                        <div className='h-[25px] w-[25px] rounded-full border-[2px] border-[#B8B6E7]'></div>
                    </div>
                    <div className='flex bg-white shadow-xl flex-col py-6 w-[80%]  items-start justify-center border-l border-[#B8B6E7]'>
                        <div className='flex flex-col gap-y-2 items-start justify-center px-4 w-full'>
                            <h1 className='font-extrabold text-[22px]'>3 maanden</h1>
                            <p className='md:text-[18px]'>€16.33 /mnd. <span className='text-[#51b37e]'>44% korting</span></p>
                        </div>
                        <div className='bg-[#f8f8fd] relative top-6 p-4 flex px-4 w-full'>
                            <div className='flex items-center justify-start gap-x-3 '>
                                {/* <FaWhatsapp size={20} className='bg-[#52c369] p-1 text-white rounded-sm' /> */}
                                <Image src={icon} alt='wtsap icon' width={30} />
                                <p className='text-[15px]'>Inclusief gratis Whatsapp-alerts</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

