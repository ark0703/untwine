import React from "react";
interface CardProps {
  title: string;
  content: string;
}
const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className=" flex flex-col flex-grow w-full max-w-96 items-center animate-slideInLeft">
      <br />
      <div className="bg-[#489668] p-7 rounded-[30px] flex-grow flex flex-col">
        <p className="text-base text-white pb-2 font-semibold text-center">
          {title}
        </p>
        <p className="text-white text-center ">{content}</p>
      </div>
    </div>
  );
};

export default Card;
