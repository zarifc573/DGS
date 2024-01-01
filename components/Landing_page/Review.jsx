import React, { useState } from "react";
import Image from "next/image";
import Girl from "@/public/assets/Girl.svg";
import star from "@/public/assets/star.svg";
import eztoned from "@/public/assets/eztoned.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/global.css";
import ReactPlayer from "react-player/youtube";

const MySlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [Girl, Girl, Girl];
  const settings = {
    dots: true,
    autoplay: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: "linear",
    swipeToSlide: true,
    beforeChange: (current, next) => setSlideIndex(next),
    className: "",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            className={`${
              index == slideIndex ? "slide-active" : "slide"
            } bg-white border-1 border-opacity-[0.3] border-white md:px-[27px] px-[13px] md:py-[52px] py-[25px] md:rounded-[20px] rounded-[10px]  mx-auto `}
            key={index}
          >
            <div className="md:flex md:flex-row flex-col md:items-center">
              <div className="md:w-[223px] md:h-[373px] w-[200px] h-[150px] md:rounded-[20px] rounded-[10px] md:mb-0 mb-[15px] bg-primary">
                {/* Youtube */}
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=lwe5KTdzSHg"
                  width="100%"
                  height="100%"
                  className="youtube"
                  style={{ overflow: "hidden" }}
                />
              </div>
              {/* Details */}
              <div className="flex flex-col items-start justify-start md:ml-[40px] ml-[18px]">
                <div className="flex items-center ">
                  <Image src={eztoned} className="md:w-auto w-[30%]" />
                  <div className="flex flex-col md:items-start items-center md:ml-[5px] ml-[2px]">
                    <h5 className="md:text-[32px] text-[12px] font-semibold md:font-extrabold leading-normal text-[#303030] name">
                      Joyraj Datt
                    </h5>
                    <h6 className="md:text-[14px] head md:ml-0 ml-[5px] text-[6px] font-normal leading-normal text-[#2D2D2D]">
                      CEO & Co-founder
                    </h6>
                  </div>
                </div>
                <div className="">
                  <p className="font-work md:text-[18px] md:leading-[27px] leading-[12px] text-[8px] md:w-[376px] w-auto md:mt-[25px] mt-[12px]">
                    Bootstrapped from 0 to 70k+ customers worldwide in 20 months
                    with an average ROAS of 4x across marketing channels.
                  </p>
                  <span className="flex md:mt-[25px] mt-[12px] md:w-auto w-[6%]">
                    <Image src={star} />
                    <Image src={star} />
                    <Image src={star} />
                    <Image src={star} />
                    <Image src={star} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
const Review = () => {
  return (
    <div>
      <section className="md:py-[120px] pt-[30px] overflow-x-hidden">
        <div className="max-w-container mx-auto text-center relative">
          <h2 className="md:text-[48px] text-[24px] mx-auto font-bold md:w-[322px] w-auto text-secondary">
            Here’s what your <span className="text-white">team can do.</span>
          </h2>
        </div>
        <div className="">
          <MySlider></MySlider>
        </div>
      </section>
    </div>
  );
};

export default Review;
