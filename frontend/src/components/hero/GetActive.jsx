import React from 'react';

const GetActive = () => {
    return (
        <div className="tw-w-full lg:tw-w-[350px] md:tw-w-[350px] max-sm:tw-w-[200px] max-sm:tw-h-[50px] tw-h-[70px] tw-rounded-[40px] tw-flex tw-gap-3 tw-items-center tw-justify-between tw-p-3 -tw-translate-x-10"
            style={{
                backgroundColor: 'rgba(65, 227, 235, 0.9)'
            }}
        >
            {/* Get Active Button */}
            <div className="get-active tw-rounded-[40px] tw-bg-[#3D3D3D] tw-w-[150px] md:tw-w-[120px] lg:tw-w-[200px] max-sm:tw-w-[200px] max-sm:tw-text-sm  tw-h-auto tw-p-3 tw-flex tw-items-center tw-justify-center tw-text-white">
                Get Active
            </div>

            {/* Text */}
            <span className="evaluate-game tw-text-[12px] max-sm:tw-text-[10px] tw-leading-[18px] max-sm:tw-leading-[15px] tw-font-semibold">
                Elevate your game at Forest Sports Arena
            </span>
        </div>
    );
};

export default GetActive;