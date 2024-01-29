import React from 'react';
import Image from 'next/image';
// import iconwhatsapp from '@/public/whatsapp.png';
// import iconmail from '@/public/gmail.png';
// import iconmap from '@/public/googlemap.png';
import iconwhatsapp from '@/public/wtsap.png';
import iconmail from '@/public/mail.png';
import iconmap from '@/public/locationicon2.png';

export default function ContactUs() {
  return (
    <div className="bg-[#EEDEC5] mt-[110px] md:mt-[120px] lg:flex justify-evenly items-center px-5 md:px-28 lg:px-10 py-16">
      {/* Left div */}
      <div>
        <h1 className="text-[38px] leading-[41.8px] md:text-[45px] lg:text-[50px] font-[600] uppercase">
          Vragen of suggesties?
        </h1>
        <h3 className="pl-1 mt-[30px] leading-[16.8px]  md:text-[18px] font-[700] text-[12px] font-bold">
          Kom maar op
        </h3>
        <p className="pl-1 text-[14px] mt-[10px] leading-[19.6px] font-[500] md:text-[18px] lg:w-[55%]">
          Kom maar door met je bericht. We reageren gewoonlijk binnen 24 uur.
        </p>
      </div>

      {/* Right div */}
      <div>
        {/* For Whatsapp */}
        <a
          href="//api.whatsapp.com/send?phone=91MOBILE_NUMBER&text=Interested%20in%20your%20offer!"
          title="On whatsapp"
        >
          <div className="bg-white flex py-5 rounded-lg px-4 lg:px-10 my-5 border-2 border-[#B8B6E7]">
            <Image
              src={iconwhatsapp}
              width={66}
              alt="WhatsApp Icon"
              className="p-2"
            />
            <div className="mx-2 my-2">
              <h4 className="font-bold font-[600] leading-[25.2px] text-[18px] md:text-[20px]">
                Via Whatsapp
              </h4>
              <p className="font-[500] leading-[19.6px] text-[14px] md:text-[18px]">
                +31625165304
              </p>
            </div>
          </div>
        </a>

        {/* For Email */}
        <a href="mailto:dummy@gmail.com?subject=Interested%20in%20your%20offer!">
          <div className="bg-white flex py-5 rounded-lg px-4 lg:px-10 my-5 border-2 border-[#B8B6E7]">
            <Image
              src={iconmail}
              width={67}
              alt="WhatsApp Icon"
              className="p-2"
            />
            <div className="mx-2 my-2">
              <h4 className="font-bold leading-[25.2px] font-[600] text-[18px] md:text-[20px]">
                Via Email
              </h4>
              <p className="font-[500] text-[14px] leading-[19.6px] md:text-[18px]">
                info@huurscout.nl
              </p>
            </div>
          </div>
        </a>

        {/* For Solostraat */}

        <div className="bg-white flex py-5 rounded-lg px-4 lg:px-10 my-5 border-2 border-[#B8B6E7]">
          <Image src={iconmap} width={60} alt="WhatsApp Icon" className="p-2" />
          <div className="mx-2 my-2">
            <h4 className="font-bold font-[600] text-[18px] leading-[25.2px] md:text-[20px]">
              Solostraat73
            </h4>
            <p className="font-[500] text-[14px] leading-[19.6px] md:text-[18px]">
              1059V UK
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
