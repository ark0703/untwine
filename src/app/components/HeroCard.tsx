import React from "react";

interface HeroCardProps {
  src: string;
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
    <div className="hero my-10 mx-0">
      <div
        className={`hero-content flex-col lg:flex-row${
          reverse ? "-reverse" : ""
        }`}
      >
        <img
          src={src}
          className="max-w-sm rounded-lg shadow-2xl shadow-green-200 "
          alt={alt}
        />
        <div className={`w-1/2 }`}>
          <h1
            className={`header-class pt-5 text-left heading text-[#2F8455] w-4/5 ${
              reverse ? "" : "w-full ml-10"
            } `}
          >
            {headContent}
          </h1>
          <p className={` ${reverse ? "py-6 w-2/3" : " w-3/4 ml-10"}`}>
            {mainContent}
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
