import React from "react";

const ImageCard = ({ src, alt }) => {
    return (
        <div className=' tw-shadow-lg lg:tw-w-[300px] lg:tw-h-[400px] md:tw-w-[200px] md:tw-h-[220px] max-sm:tw-w-[110px] max-sm:tw-h-[130px] tw-w-[300px]  tw-h-[400px] tw-rounded-[20px] tw-border-4 tw-border-white tw-overflow-hidden'>
            <img
                src={src}
                alt={alt}
                className='tw-w-full tw-h-full tw-object-cover'
            />
        </div>
    );
};

export default ImageCard;