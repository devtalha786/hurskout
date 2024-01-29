import React from 'react'
import Image from 'next/image';
import image from "@/public/boy-image.png";
import { AiOutlineExclamation } from "react-icons/ai";
export default function Redenin() {
    return (
        // This is the outer div

        <div className='lg:flex justify-between lg:mx-20 bg-white relative bottom-[130px] md:static pt-10 rounded-t-2xl'>
            {/* THis is the first div */}
            <div className=''>
                <h1 className='mx-auto md:w-[70%] uppercase px-6 mt-20 text-[26px] md:text-[33px] lg:text-[36px] font-extrabold '> <span className='bg-[#FF8049] text-white p-2'>Drie redenen</span> waarom het met huurscout wel lukt!</h1>
            </div>

            {/* This is the second div */}

            <div>

                <div className='lg:flex mt-10'>
                    <div className='mx-5 md:mx-44 lg:mx-2'>
                        <h1 className='flex lg:mr-7 mt-4 text-[22px] font-bold '>
                            <span>
                                <AiOutlineExclamation size={30} className="rounded-full p-1 mb-1 text-white bg-green-600 mr-5" />
                            </span>
                            Bespaar uren per dag aan zoeken en scrollen
                        </h1>
                        <p className='pl-12 lg:px-12 py-3 text-[14px] md:text-[20px]'>Onze zoekbot scant iedere minuut ruim 1.400 verhuurwebsites op nieuw aanbod, terwijl jij achterover leunt.</p>
                    </div>
                    <div className='flex justify-center px-9 md:px-1 lg:block'>
                        <Image src={image} alt="" width={600} />
                    </div>
                </div>

                <div className='lg:flex mt-10'>
                    <div className='mx-5 md:mx-44 lg:mx-2'>
                        <h1 className='flex lg:mr-7 mt-4 text-[22px] font-bold '>
                            <span>
                                <AiOutlineExclamation size={30} className="rounded-full p-1 mb-1 text-white bg-green-600 mr-5" />
                            </span>
                            Bespaar uren per dag aan zoeken en scrollen
                        </h1>
                        <p className='pl-12 lg:px-12 py-3 text-[14px] md:text-[20px]'>Onze zoekbot scant iedere minuut ruim 1.400 verhuurwebsites op nieuw aanbod, terwijl jij achterover leunt.</p>
                    </div>
                    <div className='flex justify-center px-9 lg:block'>
                        <Image src={image} alt="" width={600} />
                    </div>
                </div>

                <div className='lg:flex justify-between items-center mt-10 mb-20'>
                    <div className='mx-5 md:mx-44 lg:mx-2'>
                        <h1 className='flex lg:mr-7 mt-4 text-[22px] font-bold '>
                            <span>
                                <AiOutlineExclamation size={30} className="rounded-full p-1 mb-1 text-white bg-green-600 mr-5" />
                            </span>
                            Bespaar uren per dag aan zoeken en scrollen
                        </h1>
                        <p className='pl-12 lg:px-12 py-3 text-[14px] md:text-[20px]'>Onze zoekbot scant iedere minuut ruim 1.400 verhuurwebsites op nieuw aanbod, terwijl jij achterover leunt.</p>
                    </div>
                    <div className='flex justify-center px-9 lg:block'>
                        <Image src={image} alt="" width={600} />
                    </div>
                </div>
            </div>

        </div>


    )
}
