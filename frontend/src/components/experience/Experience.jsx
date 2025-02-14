import React from 'react';
import FaqV1Data from '../../jsonData/FaqV1Data.json'
import SingleFaqV1 from './SingleFaqV1';
import ExperienceProgressData from '../../jsonData/ExperienceProgressData.json'
import SingleExperience from './SingleExperience';

const Experience = () => {
    return (
        <>
            <div className="experience-area overflow-hidden default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="experience-style-one">
                                <h4 className="sub-title">Our digital experience</h4>
                                <h2 className="title">Leading the best digital agency in town</h2>
                                <ul className="list-regular mt-30">
                                    <li>Professional staff</li>
                                    <li>100 Satisfaction guarantee</li>
                                    <li>Install idea & solution</li>
                                </ul>
                                <div className="circle-progress">
                                    {ExperienceProgressData.map(progress =>
                                        <SingleExperience progress={progress} key={progress.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1">
                            <div className="faq-style-one">
                                <div className="accordion" id="faqAccordion">
                                    {FaqV1Data.map(faq =>
                                        <SingleFaqV1 faq={faq} key={faq.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;