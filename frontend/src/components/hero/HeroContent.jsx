import React from "react";
import GetActive from "./GetActive";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="back-part tw-px-[73px] tw-py-16">
      {/* Get Active Section */}
      <GetActive />

      {/* Main Heading */}
      <h1 className="experience tw-flex tw-font-bold tw-text-[3.75rem] tw-leading-[90px] text-black lg:tw-w-[458px] md:tw-w-[460px] max-sm:tw-w-[150px] max-sm:tw-text-2xl max-sm:tw-translate-x-[-40px] tw-mt-8">
        Experience Sports Like Never Before
      </h1>

      {/* Subheading */}
      <h2 className="join-us tw-text-[14px] tw-leading-[21px] tw-font-semibold lg:tw-w-[417px] md:tw-w-[300px] max-sm:tw-w-[200px] max-sm:tw-translate-x-[-40px] tw-mt-8">
        Join us for thrilling futsal matches and invigorating swimming sessions
        in Pokhara.
      </h2>

      {/* Join Button */}
      <Link to="http://localhost:5173/services-details/1/#Reserve">
        <button className="btn-join-futsal tw-text-[16px] tw-leading-[20px] tw-font-bold tw-bg-[#41E3EBE5] tw-mt-7 max-sm:tw-w-[100px] max-sm:tw-h-[50px] max-sm:tw-text-sm max-sm:tw-pt-1.5 max-sm:tw-right-10 max-sm:tw-px-1">
          Join a Futsal Match
        </button>
      </Link>
    </div>
  );
};

export default HeroContent;
