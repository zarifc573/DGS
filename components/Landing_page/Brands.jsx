"use client";
import React from "react";
import Image from "next/image";
import audience from "@/public/assets/Targeted audience.png";
import shadow from "@/public/assets/shadow 2.png";
import { motion } from "framer-motion";
const Brands = () => {
  const imgVariant = {
    hidden: {
      y: "-300px",
      // opacity: 0,
    },
    visible: {
      y: 0,
      // opacity: 1,
    },
  };
  return (
    <section>
      <div className="relative md:pb-[120px] pb-[60px]">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[#EFEFEF] md:w-[553px] w-auto md:text-[48px] text-[24px] font-bold md:leading-[62.4px] leading-[31px] ">
              We make <span className="text-secondary">content</span> for <br />
              <span className="text-secondary">Personal</span> and{" "}
              <span className="text-secondary">Business</span> Brands
            </h3>
            <motion.div
              variants={imgVariant}
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              transition={{ duration: "0.4" }}
              className="md:px-0 px-[10px]"
            >
              <Image src={audience} className="md:mt-[70px] mt-[45px]" />
            </motion.div>
          </div>
        </div>
        {/* <div className="bg-shadow bg-cover bg-center bg-no-repeat md:h-[169px] h-[100px] absolute bottom-[-65px] left-0 w-full z-[-1]"></div> */}
        <Image src={shadow} className="mx-auto w-full md:mt-[-110px]" />
      </div>
    </section>
  );
};

export default Brands;
