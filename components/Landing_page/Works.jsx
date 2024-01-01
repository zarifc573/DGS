"use client";
import React from "react";

import Image from "next/image";
import marketing from "@/public/assets/marketing.png";
import brands from "@/public/assets/brands.png";
import brief from "@/public/assets/brief.png";
import { motion } from "framer-motion";
const Works = () => {
  return (
    <section id="Process">
      <div className="bg-strategy h-full w-full bg-cover bg-center bg-no-repeat mix-blend-screen md:pb-[120px] pb-[60px]">
        <div className="max-w-container mx-auto ">
          <h3 className="md:text-[48px] text-[24px] leading-[30px] font-bold text-center md:leading-[62.4px] text-[#E2DFDF]">
            How it <span className="text-secondary">works</span>
          </h3>
        </div>
        <div className="max-w-container mx-auto md:mt-[70px] mt-[35px]">
          <div className="md:w-[1116px] w-full mx-auto md:px-0 px-[10px] ">
            <div className="flex justify-between items-start w-[100%]">
              <div className="flex flex-col items-center md:w-auto w-[45%]">
                <div className="md:w-auto w-[40%]">
                  <Image src={marketing} />
                </div>
                <p className="md:text-[32px] text-[16px] font-medium md:leading-[41.6px] leading-[20px] md:w-[369px] w-auto text-center mt-[28px]">
                  Book Now and meet your content team over a virtual call
                </p>
                <div className="md:w-[478px] md:h-[247px] md:rounded-tl-[50px] md:rounded-br-[50px] w-[100px] h-[80px] rounded-tl-[20px] rounded-br-[20px]  bg-gradient-to-b from-secondary to-[#83A70C] md:mt-[82px] mt-[40px] "></div>
                <div className="mx-auto flex flex-col items-center text-center md:mt-[145px] mt-[80px]">
                  <div className="md:w-auto w-[40%]">
                    <Image src={brands} />
                  </div>
                  <p className="md:text-[32px] text-[16px] font-medium md:leading-[41.6px] leading-[20px] md:w-[316px] w-auto text-center md:mt-[24px] mt-[12px]">
                    Watch as your brand's edutainment comes to life.
                  </p>
                </div>
              </div>
              <div className="md:h-[816px] h-[420px] md:w-[2px] w-[1px] bg-gradient-to-t from-[#0C0C0C] to-[#4F504F] relative after:absolute after:content-[''] after:top-0 after:left-0 after:h-[214px] after:w-full after:bg-gradient-to-t after:from-secondary after:to-[#0C0C0C] mt-[86px]">
                <motion.div className="md:w-[16px] md:h-[16px] w-[12px] h-[12px] rounded-[50%] absolute top-[214px] md:left-[-6.5px] left-[-5px] bg-[#0B0B0B] border-[1px] border-secondary z-[10]"></motion.div>
              </div>

              <div className="flex flex-col items-center md:w-auto w-[45%]">
                <div className="md:w-[478px] md:h-[247px] md:rounded-tl-[50px] md:rounded-br-[50px] w-[100px] h-[80px] rounded-tl-[20px] rounded-br-[20px]  bg-gradient-to-b from-secondary to-[#83A70C]"></div>
                <div className="mt-[89px] flex flex-col items-center">
                  <div className="md:w-auto w-[40%]">
                    <Image src={brief} />
                  </div>
                  <p className="md:text-[32px] text-[16px] font-medium md:leading-[41.6px] leading-[20px] md:w-[369px] w-auto text-center md:mt-[28px] mt-[14px]">
                    Get working by sharing your brief in the workspace
                  </p>
                </div>
                <div className="md:w-[478px] md:h-[247px] md:rounded-tl-[50px] md:rounded-br-[50px] w-[100px] h-[80px] rounded-tl-[20px] rounded-br-[20px]  bg-gradient-to-b from-secondary to-[#83A70C] md:mt-[130px] mt-[70px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
