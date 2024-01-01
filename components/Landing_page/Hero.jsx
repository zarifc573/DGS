"use client";
import React from "react";
import ReactPlayer from "react-player/youtube";
const Hero = () => {
  return (
    <section id="#Hero">
      <div className="mx-auto flex justify-center items-center md:px-0 px-[10px] overflow-x-hidden md:overflow-x-visible">
        <h1 className="text-white text-center md:text-[78px] text-[32px] leading-[32px] font-bold md:leading-[78px] not-italic md:w-[1069px] w-auto md:mt-[61px] mt-[50px]">
          We make engaging videos that makes your{" "}
          <span className="bg-gradient-to-b from-secondary to-[#5E7A00] bg-clip-text text-transparent">
            brand
          </span>{" "}
          pop.
        </h1>
      </div>
      {/* <div className="md:hidden block w-[350px] md:mt-0 mt-[30px] h-[100px] mx-auto ">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ffJ38dBzrlY"
          width="100%"
          height="100%"
          style={{ borderTopRightRadius: "20px" }}
        />
      </div> */}
      <div className="mx-auto md:w-[1030px] md:h-[418px] md:px-0 px-[20px] md:rounded-tr-[50px]  md:rounded-bl-[50px] mt-[82px] justify-center items-center md:block hidden ">
        {/* <Image src={Play} /> */}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ffJ38dBzrlY"
          width="100%"
          height="100%"
          className="hero_youtube"
          style={{ overflow: "hidden" }}
        />
      </div>
      <p className="mx-auto text-center md:w-[550px] w-auto text-[#C4C4C4] font-work md:text-[28px] font-normal md:leading-[36.4px] md:mt-[45px] mt-[24px] text-[14px] leading-[17px] md:px-0 px-[10px] ">
        Powered by a <span className="text-white">dedicated content team</span>{" "}
        & an <span className="text-white">AI-driven workspace.</span>
      </p>
    </section>
  );
};

export default Hero;
