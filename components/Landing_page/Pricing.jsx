import React, { useState } from "react";
import Image from "next/image";
import color from "@/public/assets/color.svg";
import check from "@/public/assets/check.svg";
import check2 from "@/public/assets/check2.svg";
import buffet from "@/public/assets/buffet.svg";
import Arrow from "@/public/assets/Start-Glowing2.svg";
import Arrow1 from "@/public/assets/Start-Glowing.svg";
import Link from "next/link";
const Pricing = () => {
  const [active, setActive] = useState(true); //Hover
  const [plan, setPlan] = useState(true); //Plan-portion
  const [active2, setActive2] = useState(false); //Hover
  const [custom, setCustom] = useState(false); //Custom-portion
  const [userInput, setUserInput] = useState(""); //User-data
  const [request, setRequest] = useState(true); //Request-data1
  const [request1, setRequest1] = useState(false); //Request-data2
  // const [userInputCustom, setUserInputCustom] = useState('')
  const [userInputNegative, setUserInputNegative] = useState(""); //Placeholder-alert
  const handleClick = () => {
    setActive(!active);
    setActive2(false);
  };
  const handleClick2 = () => {
    setActive2(!active2);
    setActive(false);
  };
  const handleCancel = () => {
    setCustom(false);
    setPlan(true);
    setUserInputNegative("");
  };
  const handleEnter = () => {
    if (userInput > 0) {
      setCustom(false);
      setPlan(true);
      console.log(userInput);
    }
    if (userInput < 0) {
      setCustom(true);
      setPlan(false);
      setUserInputNegative("Negative numbers are not acceptable !");
      // setUserInput("");
    }
    if (userInput.charAt(0) == "0") {
      setCustom(true);
      setPlan(false);
    }
    if (userInput.charAt(0) == "0") {
      setCustom(true);
      setPlan(false);
    }
  };

  const handleCustom = () => {
    setCustom(true);
    setActive2(false);
    setActive(false);
    setPlan(false);
  };
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
    setUserInputNegative("");
  };
  const handleRequest1 = () => {
    setRequest(true);
    setRequest1(false);
  };
  const handleRequest2 = () => {
    setRequest1(true);
    setRequest(false);
  };
  return (
    <section id="Pricing">
      <div className="md:pb-[120px] pb-[60px] md:overflow-x-visible overflow-x-hidden">
        <div className="max-w-container mx-auto ">
          <div className="text-center flex flex-col">
            <h2 className="text-white md:w-[553px] w-auto mx-auto md:text-[48px] text-[26px] font-bold md:leading-[62.4px] leading-[31px] text-center md:px-0 px-[10px]">
              Guaranteed ROI in{" "}
              <span className="text-secondary">12 months</span> or{" "}
              <span className="text-secondary">Free</span> till you're there.
            </h2>
            <div className="md:mt-[70px] mt-[35px] md:flex justify-between flex flex-wrap items-center md:px-0 px-[10px] md:pb-0 pb-[20px]">
              {/* Left-side */}
              <div className="bg-secondary md:w-[600px] rounded-[24px] shadow-general md:pl-[43px] md:pr-[39px] md:pt-[54px] md:h-[964px] relative w-[400px] mx-auto h-auto pl-[20px] pr-[18px] pt-[26px] pb-[20px] md:pb-0 ">
                <div className="md:p-[28px] p-[14px] border-1 border-secondary rounded-tr-[24px] inline-block rounded-bl-[24px] bg-[#4867F5] md:text-[25px] text-[13px] font-bold leading-[14px] absolute top-0 right-0">
                  Best Selling
                </div>
                <div className="">
                  {/* Logo & Description */}
                  <div className="flex items-center">
                    <Image src={color} />
                    <span className="text-[#1B1C1E] md:text-[30px] text-[15px] font-semibold md:leading-[35px] leading-[17px] font-work md:ml-[21px] ml-[10px]">
                      A la carte
                    </span>
                  </div>
                  <p className="font-work md:text-[22px] text-[14px] md:auto font-normal md:leading-[30px] leading-[15px] text-[#616161] text-left md:mt-[25px] mt-[13px] ">
                    Perfect for{" "}
                    <span className="text-[#616161] font-bold">
                      content creators
                    </span>{" "}
                    looking to{" "}
                    <span className="text-[#616161] font-bold">edit</span>{" "}
                    specific number of{" "}
                    <span className="text-[#616161] font-semibold">videos</span>{" "}
                    per month.{" "}
                    <span className="text-[#686868] font-normal">Provide</span>{" "}
                    raw footage, your team does the rest!
                  </p>

                  {/* Custom */}
                  {custom && (
                    <div className="md:flex items-center md:mt-[60px] mt-[35px] md:gap-x-[10px] relative md:w-auto w-full  ">
                      <input
                        value={userInput}
                        onChange={handleUserInput}
                        type="number"
                        className={`md:w-[450px] w-[255px] outline-none md:py-[12px] py-[7px] md:text-[13px] text-[10px] rounded-corner text-[#1B1C1E] placeholder:text-opacity-[0.2] ${
                          userInputNegative && "border-1 border-[#1B1C1E]"
                        } md:pl-[20px] pl-[14px] font-work font-medium`}
                        placeholder="Enter the number as per your requirement?"
                      />
                      {userInputNegative && (
                        <p className="text-[#1B1C1E] w-auto font-medium md:font-semibold absolute md:top-[45px] top-[35px] left-0 ">
                          {userInputNegative}
                        </p>
                      )}
                      <div className="flex md:hidden gap-x-[20px] justify-center items-center mt-[20px]  ">
                      <button
                        onClick={handleEnter}
                        className=" md:py-[16px] md:px-[16px] py-[11px] px-[12px] shadow-shade rounded-tl-[18px] rounded-br-[5px] bg-black text-white md:text-[18px] font-semibold text-[11px] md:leading-[14px] leading-[9px] select-none"
                      >
                        Enter
                      </button>
                      <button
                        onClick={handleCancel}
                        className="md:px-[14px] md:py-[14px] px-[8px] py-[8px] bg-secondary rounded-corner shadow-shade md:text-[18px] text-[11px] leading-[9px] font-darker font-semibold text-black md:leading-[14px] text-center border-[2px] border-secondary hover:border-white duration-300 select-none"
                      >
                        Cancell
                      </button>
                      </div>
                    </div>
                  )}

                  {/* Plan */}
                  {plan && (
                    <div className="w-full h-[2px] bg-black flex justify-between items-center md:mt-[84px] mt-[46px]">
                      <div
                        onClick={handleClick}
                        className={`md:w-[50px] md:h-[50px] rounded-[50%] w-[40px] h-[40px] text-[13px] flex justify-center items-center font-work md:text-[16px] font-semibold leading-[20px] cursor-pointer ${
                          active
                            ? "bg-[#1B1C1E] select-none border-[1.5px] border-white text-white"
                            : " select-none bg-white text-[#1B1C1E] hover:border-[1.5px] hover:border-black duration-500"
                        }`}
                      >
                        8
                      </div>
                      <div
                        className={`md:w-[50px] md:h-[50px] rounded-[50%] flex justify-center items-center font-work md:text-[16px] w-[40px] h-[40px] text-[13px] font-semibold leading-[20px] text-[#1B1C1E] cursor-pointer border-[1.5px] border-white hover:border-[1.5px] hover:border-black duration-500 ${
                          active2
                            ? "active bg-[#1B1C1E] text-white select-none border-[1.5px] border-white"
                            : "bg-white select-none"
                        } `}
                        onClick={handleClick2}
                      >
                        15
                      </div>
                      <div
                        onClick={handleCustom}
                        className="md:w-[50px] md:h-[50px] rounded-[50%] bg-white flex justify-center items-center font-work md:text-[16px] w-[40px] h-[40px] text-[13px] font-semibold leading-[20px] text-[#1B1C1E] cursor-pointer border-[1.5px] border-secondary hover:border-[1.5px] hover:border-black duration-500 focus:bg-black"
                      >
                        <span className="md:text-[9px] text-[8px] font-bold">
                          Custom
                        </span>
                      </div>
                    </div>
                  )}

                  {/* What is included */}
                  <h5 className="font-work md:text-[18px] text-[14px] leading-[20px] font-semibold text-left text-black md:mt-[75px] mt-[40px] pb-[12px]">
                    What’s included
                  </h5>
                  <div className="">
                    <div className="flex items-center mt-[12px]">
                      <Image src={check} />
                      <span className="font-work md:text-[18px] text-[11px] leading-[20px] font-normal text-black ml-[14px]">
                        1 Editor & 1 Project Manager
                      </span>
                    </div>
                    <div className="flex items-center mt-[12px]">
                      <Image src={check} />
                      <span className="font-work md:text-[18px] text-[11px] leading-[20px] font-normal text-[#0B0B0B] ml-[14px]">
                        AI-Driven Workspace (Coming Soon)
                      </span>
                    </div>
                    <div className="flex items-center mt-[12px]">
                      <Image src={check} />
                      <span className="font-work md:text-[18px] text-[11px] leading-[20px] font-normal text-[#0B0B0B] ml-[14px]">
                        Brand Identity Design (Content)
                      </span>
                    </div>
                    <div className="flex items-center mt-[12px]">
                      <Image src={check} />
                      <span className="font-work text-start md:text-[18px] text-[11px] leading-[20px] font-normal text-black ml-[14px]">
                        Custom Thumbnails, Titles and Descriptions
                      </span>
                    </div>
                    <div className="flex items-center mt-[12px]">
                      <Image src={check} />
                      <span className="font-work md:text-[18px] text-[11px] leading-[20px] font-normal text-black ml-[14px]">
                        Unlimited Revisions & Script Support
                      </span>
                    </div>
                    <div className="flex items-center mt-[12px]">
                      <Image src={check} />
                      <span className="font-work md:text-[18px] text-[11px] leading-[20px] font-normal text-black ml-[14px]">
                        Average 48h delivery
                      </span>
                    </div>
                    <div className="flex items-center mt-[12px]">
                      <Image src={check} />
                      <span className="font-work md:text-[18px] text-[11px] leading-[20px] font-normal text-black ml-[14px]">
                        Easy credit card payments
                      </span>
                    </div>
                    <div className="flex items-center mt-[12px]">
                      <Image src={check} />
                      <span className="font-work md:text-[18px] text-[11px] leading-[20px] font-normal text-black ml-[14px]">
                        Pause or cancel anytime
                      </span>
                    </div>
                  </div>
                  {/* Dollar Portion */}
                  <div className="flex justify-between items-center md:mt-[38px] mt-[20px]">
                    <h3 className="font-work md:text-[36px] text-[24px] text-black text-left md:leading-[46.8px] leading-[22px] font-medium">
                      $100
                      <span className="md:text-[20px] text-[12px] text-[#616161]">
                        /video
                      </span>
                    </h3>
                    <p className="md:text-[20px] text-[14px] text-[#616161] font-work font-medium md:leading-[26px] leading-[13px]">
                      $
                      {(active && 8 * 100) ||
                        (active2 && 15 * 100) ||
                        (userInput > 0 ? userInput * 100 : "0")}{" "}
                      Per Month{" "}
                    </p>
                  </div>
                  {/* Button */}
                  <Link href='/bookcall'><button className="flex items-center md:py-[20px] md:px-[180px] py-[8px] px-[80px] shadow-shade rounded-tl-[18px] rounded-br-[5px] bg-black text-white md:text-[24px] font-semibold text-[13px] leading-[24px] md:mt-[64px] mt-[40px] mx-auto border-[2px] border-black hover:border-[2px] hover:border-white duration-400">
                    Start Growing <Image src={Arrow} className="ml-[8px]" />
                  </button></Link>
                </div>
              </div>
              {/* Right-side */}
              <div
                className="bg-primary border-[1px] border-secondary md:w-[600px] rounded-[24px] shadow-general md:pl-[43px] md:pr-[39px] md:pt-[54px] md:h-[964px] md:pb-[48px]
                   relative w-[400px] mx-auto h-auto pl-[20px] pr-[18px] pt-[26px] pb-[20px] md:mt-0 mt-[20px] "
              >
                <div className="">
                  {/* Logo and Description */}
                  <div className="flex items-center">
                    <Image src={buffet} />
                    <span className="text-white text-[15px] font-semibold leading-[35px] font-work ml-[21px] md:text-[30px]  md:leading-[35px] md:ml-[21px]">
                      Buffet
                    </span>
                  </div>
                  <p
                    className="font-work  font-normal text-[#D9DBE9] text-left mt-[25px]
                   md:text-[22px] text-[12px]  md:leading-[30px] leading-[15px]   md:mt-[25px]  "
                  >
                    Perfect for{" "}
                    <span className="md:font-bold font-medium">
                      startups and businesses
                    </span>{" "}
                    looking to{" "}
                    <span className="md:font-bold font-medium">grow</span> fast
                    with full scale{" "}
                    <span className="md:font-bold font-medium">
                      content production
                    </span>
                  </p>
                  {/* Request as a time */}
                  <div className="flex md:justify-between md:gap-x-0 gap-x-[8px] items-center md:mt-[78px] mt-[36px]">
                    <button
                      onClick={handleRequest1}
                      className={`md:py-[8px] md:px-[16px] py-[4px] px-[10px] rounded-[20px] border-1 border-secondary font-work md:text-[16px] text-[9px] leading-[20.8px]  font-medium text-[#1B1C1E] shadow-general ${
                        request
                          ? "bg-secondary"
                          : "bg-[#303030] text-white border-1 border-white hover:border-1 hover:border-secondary duration-200"
                      }`}
                    >
                      One Request at a time
                    </button>
                    <button
                      onClick={handleRequest2}
                      className={`md:py-[8px] md:px-[16px] py-[4px] px-[10px] rounded-[20px] bg-[#303030]  font-work md:text-[16px] text-[9px] leading-[20.8px] font-medium shadow-general ${
                        request1
                          ? "bg-secondary border-1 border-secondary text-[#1B1C1E]"
                          : "bg-[#303030] text-white border-1 border-white hover:border-1 hover:border-secondary duration-200"
                      }`}
                    >
                      Two Request at a time
                    </button>
                  </div>
                  {/* What is included */}
                  <h5 className="font-work md:text-[18px] text-[14px] leading-[20px] font-semibold text-left text-white mt-[40px] pb-[12px]">
                    What’s included
                  </h5>
                  <div className="">
                    <div className="flex items-center mt-[12px]">
                      <Image src={check2} />
                      <span className="font-work md:text-[18px] text-[10px] text-start leading-[20px] font-normal text-[#D9DBE9] ml-[14px]">
                        1 Director, 1 Writer, 2 Editors, 1 Designer, 1 Project
                        Manager, Models and Locations (as needed)
                      </span>
                    </div>
                    <div className="flex items-center mt-[12px]">
                      <Image src={check2} />
                      <span className="font-work md:text-[18px] text-[10px] text-start leading-[20px] font-normal text-[#D9DBE9] ml-[14px]">
                        AI-Driven Workspace (Beta Access Available)
                      </span>
                    </div>
                    <div className="flex items-center mt-[12px]">
                      <Image src={check2} />
                      <span className="font-work md:text-[18px] text-[10px]  leading-[20px] font-normal text-[#D9DBE9] ml-[14px] text-start">
                        Market Research, Content Strategy, Brand Identity Design
                        (Content), Scriptwriting & Storyboarding
                      </span>
                    </div>
                    <div className="flex items-center mt-[12px]">
                      <Image src={check2} />
                      <span className="font-work md:text-[18px] text-[10px] text-start leading-[20px] font-normal text-[#D9DBE9] ml-[14px]">
                        Video production and Editing
                      </span>
                    </div>
                    <div className="flex items-center mt-[12px]">
                      <Image src={check2} />
                      <span className="font-work md:text-[18px] text-[10px] text-start leading-[20px] font-normal text-[#D9DBE9] ml-[14px]">
                        Average 15d delivery with unlimited editing revisions
                      </span>
                    </div>
                    <div className="flex items-center mt-[12px]">
                      <Image src={check2} />
                      <span className="font-work md:text-[18px] text-[10px] text-start leading-[20px] font-normal text-[#D9DBE9] ml-[14px]">
                        Average 48h delivery
                      </span>
                    </div>
                    <div className="flex items-center mt-[12px]">
                      <Image src={check2} />
                      <span className="font-work md:text-[18px] text-[10px] text-start leading-[20px] font-normal text-[#D9DBE9] ml-[14px]">
                        Easy credit card payments
                      </span>
                    </div>
                    <div className="flex items-center mt-[12px]">
                      <Image src={check2} />
                      <span className="font-work md:text-[18px] text-[10px] text-start leading-[20px] font-normal text-[#D9DBE9] ml-[14px]">
                        Pause or cancel anytime
                      </span>
                    </div>
                  </div>
                  {/* Dollar Portion */}
                  <div className="flex justify-between items-center md:mt-[36px] mt-[18px]">
                    <h3 className="font-work md:text-[36px] text-[24px] text-white text-left leading-[46.8px] font-medium">
                      {(request && "5000") || (request1 && 5000 * 2)}
                      <span className="text-[#E2DFDF] md:text-[20px] text-[14px]">
                        /month
                      </span>
                    </h3>
                  </div>
                  {/* Button */}
                  <Link href='/bookcall'><button
                    className="flex items-center bg-secondary text-black mt-[34px]
                   md:py-[20px] md:px-[180px] py-[8px] px-[80px] shadow-shade rounded-tl-[18px] rounded-br-[5px]   md:text-[24px] font-semibold text-[13px] leading-[24px] md:mt-[60px] mx-auto border-[2px] border-secondary duration-400 hover:border-[2px] hover:border-white"
                  >
                    Start Growing <Image src={Arrow1} className="ml-[8px]" />
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
