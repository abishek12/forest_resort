import React from 'react';
import CountUp from 'react-countup';

const SingleCounterV1 = ({ counter }) => {
    const { end, duration, operator, text } = counter

    return (
        <>
            <li>
                <div className="fun-fact">
                    <div className="counter">
                        <div className="timer">
                            <CountUp end={end} duration={duration} />
                        </div>
                        <div className="operator">{operator}</div>
                    </div>
                    <span className="medium">{text}</span>
                </div>
            </li>
        </>
    );
};

export default SingleCounterV1;