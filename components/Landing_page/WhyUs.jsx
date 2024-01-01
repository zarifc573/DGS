import React from "react";
import Image from "next/image";
import Content from "@/public/assets/bro2.png";
import Content2 from "@/public/assets/bro.svg";
import Content3 from "@/public/assets/loyalty.png";
const WhyUs = () => {
  return (
    <section className="md:py-[120px] py-[60px]">
      <div className="max-w-container mx-auto">
        <h4 className="text-secondary md:w-[416px] text-center mx-auto md:text-[48px] font-bold md:leading-[62.4px] w-auto text-[24px] leading-[31px] ">
          Your brand,
          <br />
          <span className="text-[#EFEFEF] ">taken to the next level.</span>
        </h4>
      </div>
      <div className="max-w-container mx-auto md:mt-[70px] mt-[35px]">
        <div className="md:flex md:justify-between md:items-center flex flex-wrap md:px-0 px-[10px]">
          <div className="md:w-[400px] md:h-[734px] rounded-[14px] border-[1px] border-solid border-[#707070] flex flex-col items-center md:px-[39px] px-[18px] w-full h-full md:pb-0 pb-[25px] ">
            <div className="md:w-auto w-[40%]">
              <Image src={Content} className="md:mt-[65px] mt-[32px]" />
            </div>
            <div className="mx-auto mt-[40px]">
              <h5 className="md:text-[30px] text-[16px] leading-[17px] font-bold text-white md:leading-[37.8px]">
                Your Brand's Content Team
              </h5>
              <p className="md:w-[321px] w-auto font-work md:text-[16px] text-[#C4C4C4] font-normal md:leading-[24px] md:mt-[57px] text-[10px] leading-[18px] mt-[28px]">
                We give you a dedicated content team with over 10 years of
                digital brand-building muscle. They've powered up their own
                brands and flexed their skills with the big players. <br />
                <br />
                From strategy to production, they've got it all up their
                sleeves. Just share your vision, set your goals, and watch them
                work their magic. Your brand, their wizardry. Ready to go?
              </p>
            </div>
          </div>
          <div className="md:w-[400px] md:h-[734px] rounded-[14px] border-[1px] border-solid border-[#707070] flex flex-col items-center md:px-[39px] px-[18px] w-full h-full  relative md:pb-0 pb-[25px] md:mt-0 mt-[20px] ">
            <button className="md:text-[24px] text-center md:leading-[26px] font-medium md:py-[8px] md:px-[16px] bg-[#616161] md:rounded-[10px] rounded-corner rounded-tl-[13px] text-white absolute top-0 left-0 text-[12px] leading-[13px] py-[6px] px-[10px] ">
              Coming Soon
            </button>
            <div className="md:w-auto w-[40%]">
              <Image src={Content2} className="mt-[30px]" />
            </div>
            <div className="mx-auto md:mt-[33px] mt-[20px]">
              <h5 className="md:text-[30px] md:w-[335px] font-bold text-white md:leading-[37.8px] text-[16px] w-full leading-[18px]">
                AI-driven workspace for productivity & collaboration
              </h5>
              <p className="md:w-[321px] w-auto font-work md:text-[16px] text-[#C4C4C4] font-normal md:leading-[24px] md:mt-[57px] text-[10px] leading-[18px] mt-[28px]">
                How about getting that on-brand content done easier, faster and
                better? That's what an AI-enabled workspace allows your team to
                do. <br />
                <br />
                We've optimised the entire content production process using
                creative-AI models where needed to ship faster. From overcoming
                writer's block to faster storyboarding, AI allows your team to
                do more in less time.
              </p>
            </div>
          </div>
          <div className="md:w-[400px] md:h-[734px] rounded-[14px] border-[1px] border-solid border-[#707070] flex flex-col items-center md:px-[39px] px-[18px] w-full h-full  relative md:pb-0 pb-[25px] md:mt-0 mt-[20px] ">
            <div className="md:w-auto w-[40%]">
              <Image src={Content3} className="mt-[30px]" />
            </div>
            <div className="mx-auto md:mt-[35px] mt-[20px]">
              <h5 className="text-white md:text-[30px] md:w-[335px] font-bold  md:leading-[37.8px] text-[16px] w-full leading-[18px]">
                Videos that convert audiences into loyal fans
              </h5>
              <p className="md:w-[321px] w-auto font-work md:text-[16px] text-[#C4C4C4] font-normal md:leading-[24px] md:mt-[20px] text-[10px] leading-[18px] mt-[28px]">
                Many do content. Few do it well. {"<1%"} do it with exceptional
                storytelling. <br />
                <br />
                <span className="font-semibold">
                  Edutainment (education + entertainment)
                </span>
                <br /> is our proprietary and proven story-telling model that
                takes your brand's content game to the next level.
                <br />
                <br />
                The team tailors this battle-tested recipe for results in your
                brand's unique tone, voice and style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
