"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Add from "./Icons/Add";
import Minus from "./Icons/Minus";
const FAQ = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <section id="FAQ">
      <div className="md:pb-[120px] pb-[60px] md:overflow-x-visible overflow-x-hidden">
        <div className="max-w-container mx-auto px-[20px] md:px-0">
          <h2 className="text-center mx-auto md:text-[48px] text-[24px] font-bold md:leading-[62.4px] leading-[31px] text-white">
            You <span className="text-secondary">got questions,</span>
            <br />
            let's answer a few.
          </h2>
          <div className="md:w-[697px] w-auto md:mt-[70px] mt-[36px] mx-auto">
            <Accordion defaultExpandedKeys={["theme"]}>
              <AccordionItem
                key="theme"
                aria-label="Theme"
                indicator={({ isOpen }) => (isOpen ? <Minus /> : <Add />)}
                title="Theme"
                subtitle={
                  <span
                    className={`font-work md:text-[22px] text-[12px] active:text-secondary text-white font-medium leading-[28px] `}
                  >
                    What type of brands do you work with?
                  </span>
                }
              >
                <p className="md:w-[576.052px] w-auto text-[#C4C4C4] font-work md:text-[18px] text-[10px] leading-[27px] font-normal ">
                  Our content creation package can be applied to any brand in
                  any industry. <br />
                  <br />
                  SaaS, personal brands, e-commerce, content creators, real
                  estate, retail, healthcare, manufacturing - regardless of what
                  you do, we'll ideate an innovative content strategy for your
                  brand that increases your organic reach and grows your
                  revenue.
                </p>
              </AccordionItem>
              <AccordionItem
                key="anchor"
                aria-label="Anchor"
                indicator={({ isOpen }) => (isOpen ? <Minus /> : <Add />)}
                title="Anchor"
                subtitle={
                  <span
                    className={`font-work md:text-[22px] text-[12px] active:text-secondary text-white font-medium leading-[28px]  `}
                  >
                    What is your favorite template from BRIX Templates?
                  </span>
                }
              >
                {
                  <p className="md:w-[576.052px] w-auto text-[#C4C4C4] font-work md:text-[18px] text-[10px] leading-[27px] font-normal">
                    {defaultContent}
                  </p>
                }
              </AccordionItem>
              <AccordionItem
                key="anchor2"
                aria-label="Anchor2"
                indicator={({ isOpen }) => (isOpen ? <Minus /> : <Add />)}
                title="Anchor2"
                subtitle={
                  <span
                    className={`font-work md:text-[22px] text-[12px] active:text-secondary text-white font-medium leading-[28px] `}
                  >
                    How do you clone a template from the Showcase?
                  </span>
                }
              >
                {
                  <p className="md:w-[576.052px] w-auto text-[#C4C4C4] font-work md:text-[18px] text-[10px] leading-[27px] font-normal">
                    {defaultContent}
                  </p>
                }
              </AccordionItem>
              <AccordionItem
                key="anchor3"
                aria-label="Anchor3"
                indicator={({ isOpen }) => (isOpen ? <Minus /> : <Add />)}
                title="Anchor3"
                subtitle={
                  <span
                    className={`font-work md:text-[22px] text-[12px] active:text-secondary text-white font-medium leading-[28px] `}
                  >
                    Why is BRIX Templates the best Webflow agency?
                  </span>
                }
              >
                {
                  <p className="md:w-[576.052px] w-auto text-[#C4C4C4] font-work md:text-[18px] text-[10px] leading-[27px] font-normal">
                    {defaultContent}
                  </p>
                }
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
