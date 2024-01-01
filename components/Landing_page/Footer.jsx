import React from "react";
import Image from "next/image";
import Arrow from "@/public/assets/footerLogo.png";
import youtube from "@/public/assets/youtube.svg";
import twitter from "@/public/assets/twitter.svg";
import sent from "@/public/assets/sent.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="md:pb-[120px] pb-[50px] md:overflow-x-visible overflow-x-hidden">
      <div className="md:py-[81px] py-[40px]">
        <div className="max-w-container mx-auto">
          <div className="flex items-start justify-between md:w-auto w-full md:px-0 px-[20px]">
            <div className="flex flex-col text-left md:w-auto w-[30%]">
              <Image src={Arrow} />
              <span className="md:text-[16px] text-[10px] font-normal font-work md:leading-[27.3px] leading-[14px] text-white mt-[8px]">
                Managed by Artificial Intelligence
              </span>
              <div className="flex gap-x-[10px] md:mt-[14px] mt-[10px] md:w-auto w-[20%] ">
                <Image src={youtube} />
                <Image src={twitter} />
                <Image src={sent} />
              </div>
            </div>
            <div className="flex md:gap-x-[55px] gap-x-[25px]">
              <ul>
                <li className="uppercase md:text-[16px] text-[12px] font-bold md:leading-[19px] leading-[12px] ">
                  EDUTAINMENT
                </li>
                <Link href="#Process">
                  <li className="text-[#848895] md:text-[15px] text-[11px] font-work leading-[14px] md:leading-[27.3px] font-normal cursor-pointer mt-[8px] md:mt-[13px] hover:underline hover:text-white duration-300">
                    Process
                  </li>
                </Link>
                <Link href="#Pricing">
                  <li className="text-[#848895] md:text-[15px] text-[11px] font-work leading-[14px] md:leading-[27.3px] font-normal cursor-pointer mt-[8px] md:mt-[13px] hover:underline hover:text-white duration-300">
                    Pricing
                  </li>
                </Link>
                <Link href="#FAQ">
                  <li className="text-[#848895] md:text-[15px] text-[11px] font-work leading-[14px] md:leading-[27.3px] font-normal cursor-pointer mt-[8px] md:mt-[13px] hover:underline hover:text-white duration-300">
                    FAQ
                  </li>
                </Link>
              </ul>
              <ul>
                <li className="uppercase md:text-[16px] text-[12px] font-bold md:leading-[19px] leading-[12px] ">
                  Get Connected
                </li>
                <Link href="">
                  {" "}
                  <li className="text-[#848895] md:text-[15px] text-[11px] font-work leading-[14px] md:leading-[27.3px] font-normal cursor-pointer mt-[8px] md:mt-[13px] hover:underline hover:text-white duration-300">
                    Services
                  </li>
                </Link>
                <Link href="">
                  <li className="text-[#848895] md:text-[15px] text-[11px] font-work leading-[14px] md:leading-[27.3px] font-normal cursor-pointer mt-[8px] md:mt-[13px] hover:underline hover:text-white duration-300">
                    Blog
                  </li>
                </Link>
                <Link href="">
                  <li className="text-[#848895] md:text-[15px] text-[11px] font-work leading-[14px] md:leading-[27.3px] font-normal cursor-pointer mt-[8px] md:mt-[13px] hover:underline hover:text-white duration-300">
                    Newsletter
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
