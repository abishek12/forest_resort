import React from 'react';
import CountUp from 'react-countup';

const SingleAchievementV1 = ({ achievement }) => {
    const { icon, end, info1, info2 } = achievement

    return (
        <>
            <li>
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <div className="fun-fact">
                    <div className="counter">
                        <div className="timer">
                            <CountUp duration={4} end={end} enableScrollSpy />
                        </div>
                        <div className="operator">+</div>
                    </div>
                    <span className="medium">{info1} <br /> {info2}</span>
                </div>
            </li>
        </>
    );
};

export default SingleAchievementV1;