import React from 'react';
import AchievementV1Data from '../../jsonData/AchievementV1Data.json'
import SingleAchievementV1 from './SingleAchievement';
import { TextGenerateEffect } from '../ui/aceternity_ui/text-generate-effect';
import BoxReveal from '../ui/magic_ui/box-reveal';

const text = "At Forest Sports and Recreation Center, safety and quality are at the forefront of our swimming pool experience. Here’s what sets us apart:"

const text2 = "Your safety is our priority. We maintain a secure environment with certified lifeguards on duty at all times. Each lifeguard is thoroughly trained and certified to ensure the highest level of safety for swimmers of all ages and skill levels."

const text3 = "We offer a wide range of swimming lessons to cater to different needs and preferences. Whether you're looking for private one-on-one sessions or group classes, our professional instructors are here to guide you every step of the way. From beginners taking their first plunge to seasoned swimmers looking to refine their techniques, there's something for everyone."

const text4 = "Our swimming programs are designed to accommodate all skill levels. Whether you’re a beginner aiming to learn the basics or an advanced swimmer working on competitive techniques, our comprehensive training programs ensure a progressive and enriching experience."

const text5 = "We uphold rigorous cleanliness standards to ensure a hygienic and pleasant environment for our visitors. Our pool and surrounding areas are cleaned and sanitized regularly, adhering to the highest health and safety guidelines."

const ServiceText = ({ chooseClass }) => {
    return (
        <>
            <div className={`choose-us-style-one-area default-padding overflow-hidden ${chooseClass}`}>
                <div className="container">
                    <div className="row align-center">
                        {/* <div className="col-xl-5">
                            <div className="achivement-counter tw-bg-gradient-to-r tw-from-[#299029] tw-to-[#96d397]"
                            // style={{ backgroundImage: 'url(img/shape/banner-4.png)' }}
                            >
                                <ul>
                                    {AchievementV1Data.map(achievement =>
                                        <SingleAchievementV1 achievement={achievement} key={achievement.id} />
                                    )}
                                </ul>
                            </div>
                        </div> */}
                        <div >
                            <div className="choose-us-card">
                                {/* <h4 className="sub-title">
                                    <BoxReveal>
                                        Why Choose Us
                                    </BoxReveal>
                                </h4>
                                <h2 className="title">
                                    <BoxReveal>
                                        Top destination for <br /> recreation and refreshment
                                    </BoxReveal>
                                </h2> */}
                                <h3>
                                    {/* <BoxReveal> */}
                                    <TextGenerateEffect words={text} />
                                    {/* </BoxReveal> */}
                                </h3>
                                <ul className="list-check">
                                    <li>
                                        {/* <BoxReveal> */}
                                        Safety Standards
                                        {/* </BoxReveal> */}
                                        <TextGenerateEffect words={text2} />
                                    </li>
                                    <li>
                                        {/* <BoxReveal> */}
                                        Variety of Lessons
                                        {/* </BoxReveal> */}
                                        <TextGenerateEffect words={text3} />
                                    </li>
                                    <li>
                                        {/* <BoxReveal> */}
                                        Comprehensive Training Programs
                                        {/* </BoxReveal> */}
                                        <TextGenerateEffect words={text4} />
                                    </li>
                                    <li>
                                        {/* <BoxReveal> */}
                                        Rigorous Cleanliness Protocols
                                        {/* </BoxReveal> */}
                                        <TextGenerateEffect words={text5} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceText;