import React from 'react';

export default function Privacy() {
  return (
    // This is the outer div for privacy policy
    <div className="my-10 mt-[150px] md:mt-[140px]">
      <h1 className="text-[26px] font-[600] mx-8 lg:mx-0 md:text-[30px] lg:text-[40px] md:text-center font-extrabold my-7 md:pt-12">
        Privacy policy
      </h1>

      {/* this is the outer div for all three privacy headins */}

      <div className="lg:flex mx-5 md:mx-10 lg:mx-20">
        {/* First Headin */}
        <div className="px-4 py-5">
          <h2 className="font-semibold text-[18px] font-[500] py-2 md:text-[28px] lg:text-[33px]">
            Opotional headline
          </h2>
          <p className=" md:text-lg text-[12px] font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* second Headin */}
        <div className="px-4 py-5">
          <h2 className="font-semibold text-[18px] font-[500]  py-2 md:text-[28px] lg:text-[33px]">
            Opotional headline
          </h2>
          <p className=" md:text-lg  text-[12px] font-[400] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* third Heading */}
        <div className="px-4 py-5">
          <h2 className="font-semibold  text-[18px] font-[500]   py-2 md:text-[28px] lg:text-[33px]">
            Opotional headline
          </h2>
          <p className="text-[12px] font-[400]  md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="text-[12px] font-[400]  md:text-lg py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
