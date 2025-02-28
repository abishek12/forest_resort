import React from 'react';

const SingleProcessV1 = ({ process }) => {
    const { icon, number, title } = process;

    return (
        <>
            <div className="item">
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <h2 className="text-path tw-text-black">
                    {number}
                </h2>
                <h4>{title}</h4>
            </div>
        </>
    );
};

export default SingleProcessV1;