import React from 'react';
import thread from '../../assets/icons/thread.svg';

const OwnerImage = () => {
    return (
        <>
            {/* Owner Image */}
            <div className="owner-image tw-w-[100px] tw-h-[100px] tw-rounded-full tw-absolute tw-bottom-14 tw-overflow-hidden tw-left-1/3 tw-z-10 max-sm:tw-w-[80px] max-sm:tw-h-[80px] max-sm:tw-top-[450px]"
                style={{
                    border: '3px solid white'
                }}
            >
                <img 
                    src="/img/owner/rajendra.png" 
                    alt="rajendra" 
                    className="tw-w-full tw-h-full tw-object-cover" 
                />
            </div>

            {/* Thread Line */}
            <img 
                src={thread} 
                alt="line" 
                className='tw-absolute tw-bottom-20 tw-left-[22%] tw-z-0 max-sm:tw-w-[600px] max-sm:tw-left-[100px] max-sm:tw-top-[420px]' 
            />
        </>
    );
};

export default OwnerImage;