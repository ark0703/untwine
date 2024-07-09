"use client";
import React, { useState } from "react";
import classNames from "classnames";

interface AccordionProps {
  accordionData: {
    title: string;
    content: string;
  }[];
}

const MinusIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-5 text-white"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
  </svg>
);

const PlusIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-5 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

const Accordion: React.FC<AccordionProps> = ({ accordionData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section>
      {accordionData.map((accordion, index) => (
        <div
          key={index}
          className={classNames("collapse my-2 border-b", {
            "bg-[#26275F] bg-opacity-20 text-white": openIndex === index,
            "bg-transparent text-white": openIndex !== index,
          })}
        >
          <input
            type="radio"
            name="my-accordion-3"
            checked={openIndex === index}
            onChange={() => setOpenIndex(index)}
            className="hidden"
          />
          <div
            className="collapse-title footer-class subheading p-4 md:p font-medium flex justify-between items-center cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h2 className="leading-none">
              <b>{accordion.title}</b>
            </h2>
            <div
              className={classNames("p-2 rounded-[30px] content-center", {
                "bg-[#8A84E2]": openIndex === index,
                "bg-[#26275F]": openIndex !== index,
              })}
            >
              {openIndex === index ? <MinusIcon /> : <PlusIcon />}
            </div>
          </div>
          {openIndex === index && (
            <div className="collapse-content text-white">
              <p>{accordion.content}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Accordion;
