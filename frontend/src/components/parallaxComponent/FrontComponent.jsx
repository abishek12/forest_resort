import React, { memo } from "react";
import { HashLink as Link } from "react-router-hash-link";
import img1 from '/img/new/swimnew.webp';
import img2 from '/img/fsa_image/swim1.webp';

const FrontComponent = () => {
    return (
        <section className="tw-w-full tw-h-[786px] tw-p-[81px] tw-relative z-10">
            <div className='tw-w-[1153px] tw-h-[280px] tw-bg-cyan-500 tw-rounded-[30px] tw-opacity-30 tw-left-[150px] tw-absolute tw-top-[100px] tw-z-10'></div>
            <div className="tw-flex tw-gap-[85px] tw-h[410px] tw-justify-center tw-items-center tw-absolute tw-z-20 tw-top-1/2 -tw-translate-y-1/2">
                <div className="tw-flex tw-gap-8 tw-relative tw-z-0">
                    <div className='tw-shadow-lg tw-w-[300px] tw-h-[400px] tw-rounded-[20px] tw-border-4 tw-border-white tw-overflow-hidden tw-z-30'>
                        <img
                            src={img1}
                            alt='swimming pool'
                            className='tw-w-full tw-h-full tw-object-cover'></img>
                    </div>
                    <div className='tw-shadow-lg tw-w-[300px] tw-h-[400px] tw-rounded-[20px] tw-border-4 tw-border-white tw-overflow-hidden'>
                        <img
                            src={img2}
                            alt='swimming pool'
                            className='tw-w-full tw-h-full tw-object-cover'></img>
                    </div>
                    <div className="tw-w-[280px] tw-h-[280px] tw-rounded-full tw-bg-white tw-absolute tw-z-20 tw-left-[180px] -tw-bottom-[130px]"
                        style={{
                            border: '30px solid #41E3EB',
                            background: 'transparent'

                        }}
                    >
                    </div>
                </div>
                <div>
                    <h1 className=' tw-mb-10 tw-bg-gradient-to-br tw-from-[#1A7218] tw-to-[#B5DE4C] tw-text-transparent tw-bg-clip-text tw-font-bold tw-text-[55px] leaading-[80px] tracking-[0.05em] '>
                        FOREST SPORTS ARENA
                    </h1>
                    <p className='tw-font-medium tw-text-lg leading-[40px] tracking-[0.05em] text-black'>Create unforgettable memories at our Recreation Center and Swimming Pool.
                        Enjoy the perfect blend of leisure and fun in a serene and welcoming environment.
                    </p>
                    <div>
                        <Link
                            to="/about-us#"
                        >
                            <button className="tw-mt-10 !tw-rounded-[5px] tw-font-bold text-[15px] tw-leading-[22.5px] !tw-bg-[#41E3EB] !tw-w-[155px] !tw-h-[50px] flex tw-justify-center tw-items-center">
                                About Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(FrontComponent); // Prevent unnecessary re-renders
