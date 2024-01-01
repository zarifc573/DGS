import React from "react";
import Arrow from "@/public/assets/Start-Glowing.svg";
import Image from "next/image";
import Link from "next/link";
const StartGrowing = () => {
  return (
    <section className="md:pb-[120px] pb-[60px]">
      <div className="max-w-container mx-auto text-center">
        <span className="text-center font-bold md:text-[48px] text-[28px] md:leading-[62.4px] leading-[31px]">
          Ready to <span className="text-secondary">start growing?</span>
        </span>
        <div className="md:flex flex flex-wrap justify-center items-center md:mt-[71px] mt-[30px] md:px-0 px-[20px]">
          <input
            type="email"
            className="border-[1px] border-[#D9DBE9] md:rounded-[50px] rounded-md md:w-[502px] w-full md:py-[24px] py-[13px] bg-[#1B1C1E] outline-none md:text-[14px] text-[11px] font-normal md:leading-[18.2px] leading-[13px] font-work md:pl-[50px] pl-[20px]"
            placeholder="Enter your email"
          />
          <Link href='/bookcall'><button className="md:px-[34px] md:py-[20px] px-[12px] py-[7px] bg-secondary flex justify-center items-center rounded-corner shadow-shade md:text-[24px] text-[12px] font-darker font-semibold not-italic text-black md:w-auto w-full leading-[24px] text-center md:ml-[40px] border-[2px] border-secondary hover:border-[2px] hover:border-white duration-300 md:mt-0 mt-[25px]">
            Start Growing <Image src={Arrow} className="ml-[8px]" />
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default StartGrowing;
