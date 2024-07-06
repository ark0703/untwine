import React from "react";
interface CardProps {
  title: string;
  content: string;
}
const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className=" flex flex-col flex-grow w-full max-w-96 items-center">
      <div className="bg-[#30e95e] rounded-full p-4 relative -bottom-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
      </div>
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
