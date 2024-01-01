import React, { useEffect, useState } from "react";
import logo from "@/public/assets/navLogo.png";
import Arrow from "@/public/assets/Start-Glowing.svg";
import Image from "next/image";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
const Navbar = () => {
  let Links = [
    { name: "Process", path: "#Process" },
    { name: "Pricing", path: "#Pricing" },
    { name: "FAQ", path: "#FAQ" },
  ];
  const [show, setShow] = useState(false);
  const [header, setHeader] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div
    className={
      header
        ? "bg-primary blur-none md:block hidden fixed md:w-full  w-full z-[999] md:pb-[10px] md:mt-[-23px] md:pt-0 pt-[10px] pb-[10px]"
        : "bg-transparent "
    }
    >
      <div className="relative z-[999]">
        <div
          className={`max-w-container mx-auto bg-secondary md:h-[457px] md:w-[457px] h-[150px] w-[150px] absolute md:rounded-[457px] blur-[174.5px] rounded-[150px] z-[-1] md:absolute top-0 left-[50%] translate-x-[-50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] ${
            header &&
            "bg-primary blur-none md:hidden hidden md:h-0 md:w-0 h-0 w-0 "
          }`}
        ></div>
        <div className="max-w-container mx-auto md:pt-[40px]">
          <div
            className={`flex justify-between items-center ${
              show == true
                ? "overflow-x-visible"
                : "overflow-x-hidden overflow-y-hidden"
            } ${header && "flex justify-between items-center"}`}
          >
            <div className="md:w-2/5 ml-[20px] w-[40%] mt-[5px] md:mt-0">
              <Link href='#Hero'> <Image src={logo} alt="Logo" className=" mt-[20px] md:mt-0 " /> </Link>
            </div>
            <div
              className="md:hidden absolute top-[30px] right-[20px] md:right-0"
              onClick={handleClick}
            >
              {show == true ? (
                <AiOutlineClose className="text-secondary cursor-pointer select-none" />
              ) : (
                <AiOutlineBars className="text-white cursor-pointer select-none" />
              )}
            </div>
            <div className="md:w-3/5 flex justify-end items-center mx-auto ">
              <ul
                className={`md:flex justify-end md:static items-center md:gap-x-[50px] absolute top-0 right-0 ${
                  show == true
                    ? "right-0 top-[57px] w-full h-[200px] drop-shadow-lg bg-primary text-center"
                    : "right-[-160px] top-[30px] hidden"
                }`}
              >
                {Links.map((link) => (
                  <li
                    key={link.name}
                    className="md:border-0  md:mt-0 mt-[10px] font-semibold text-[18px] "
                  >
                    <a
                      href={link.path}
                      className="text-white text-[18px] font-darker font-semibold not-italic  cursor-pointer md:hover:border-b hover:border-b duration-200  "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <Link href='/bookcall'><button
                  className={`md:px-[28px] md:py-[14px] px-[12px] py-[5px] bg-secondary flex justify-center items-center mx-auto rounded-corner shadow-shade text-[18px] font-darker font-semibold not-italic text-black leading-[14px] text-center md:ml-[40px] border-[2px] border-secondary hover:border-white duration-300 md:mt-0 mt-[20px] `}
                >
                  Start Growing <Image src={Arrow} className="ml-[8px]" />
                </button></Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
