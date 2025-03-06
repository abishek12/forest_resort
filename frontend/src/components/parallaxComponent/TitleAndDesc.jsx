import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const TitleAndDesc = () => {
    return (
        <div className="lg:tw-w-[450px] lg:tw-h-[fit] md:tw-w-[250px] md:tw-h-[250px] max-sm:tw-w-[250px] max-sm:tw-h-[120px] max-sm:tw-ml-2 tw-translate-x-[60px] ">
            <h1 className='tw-mb-12 tw-bg-gradient-to-br tw-from-[#1A7218] tw-to-[#B5DE4C] tw-text-transparent tw-bg-clip-text tw-font-bold tw-text-[55px] leaading-[80px] tracking-[0.05em] max-sm:tw-text-xl'>
                FOREST SPORTS ARENA
            </h1>
            <p className='tw-font-medium tw-text-lg tracking-[0.05em] text-black max-sm:tw-text-sm'>
                Create unforgettable memories at our Recreation Center and Swimming Pool.
                Enjoy the perfect blend of leisure and fun in a serene and welcoming environment.
            </p>
            <div>
                <Link to="/about-us#">
                    <button className="tw-mt-10 !tw-rounded-[5px] tw-font-bold text-[nodem15px] tw-leading-[22.5px] !tw-bg-[#41E3EB] !tw-w-[155px] !tw-h-[50px] flex tw-justify-center tw-items-center">
                        About Us
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TitleAndDesc;