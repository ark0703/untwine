import Image from "next/image";
import React from "react";

interface HeroCardProps {
  src: any;
  alt?: string;
  headContent: string;
  mainContent: string;
  reverse?: boolean;
}

const HeroCard: React.FC<HeroCardProps> = ({
  src,
  alt,
  reverse = false,
  headContent,
  mainContent,
}) => {
  return (
    <div className="">
      <div
        className={`flex items-center justify-between flex-wrap md:flex-nowrap ${
          reverse && "flex-row-reverse"
        }`}
      >
        <Image
          width={500}
          height={500}
          src={src}
          loading={"lazy"}
          className=" aspect-square w-full md:max-w-[50%]  "
          alt={`${alt}`}
        />
        <div className={`w-full md:w-1/2 ${!reverse && "ml-10"}`}>
          <h1
            className={`header-class pt-5 text-left heading text-[#2F8455] md:w-4/5 ${
              !reverse && "w-full"
            }`}
          >
            {headContent}
          </h1>
          <p>{mainContent}</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
