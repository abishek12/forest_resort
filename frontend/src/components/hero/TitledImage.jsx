import React from 'react';

const TitledImage = () => {
    return (
        <div className='image-titled tw-absolute -tw-m-2 -tw-right-12 -tw-top-36 tw-rotate-[31deg] tw-w-[550px] tw-h-[700px] lg:!tw-w-[624px] lg:!tw-h-[700px] md:tw-w-[568px] max-sm:!tw-w-[220px] max-sm:!tw-h-[430px] max-sm:tw-top-[-30px] sm:!tw-w-[300px] sm:!tw-h-[600px] tw-rounded-[210px] tw-overflow-hidden'>
            <img 
                src="/img/fsa_image/swim-about.png" 
                alt="swimming" 
                className='tw-w-full tw-h-full tw-object-cover' 
            />
        </div>
    );
};

export default TitledImage;