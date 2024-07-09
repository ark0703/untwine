"use client";
import React, { useState } from "react";

const AboutUntwine: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-neutral-content text-xl">
      <p>
        As founders, we understand the importance of mental wellness and the
        challenges that come with seeking help. That's why we created Untwine -
        to provide a safe, supportive, and flexible environment for your mental
        health journey.
      </p>
      {isExpanded && (
        <p>
          <br />
          With an optimistic outlook, we genuinely believe that helping people
          navigate life's ups and downs and being a part of their personal
          growth journey is the most fulfilling part of being a psychologist.
          <br />
          <br /> At Untwine, we're committed to helping you unwind, recharge,
          and unlock your full potential. Take the first step towards a
          healthier, happier you. Explore our services, and let's begin this
          journey together.
        </p>
      )}
      <div className="w-full text-end">
        <br />
        <button
          onClick={handleReadMore}
          className="btn btn-secondary text-end md:hover:opacity-80"
        >
          Read {isExpanded ? "Less" : "More"}
        </button>
      </div>
    </div>
  );
};

export default AboutUntwine;
