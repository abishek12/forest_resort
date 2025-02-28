import React from 'react';
import SingleShowV1Data from '../../jsonData/SingleShowV1Data.json'
import SingleServiceV4 from './SingleShowCaseV1';
import ShowCaseProgress from './ShowCaseProgress';
import ShowCaseData from '../../jsonData/ShowCaseData.json'

const ShowCaseV1 = () => {
    return (
        <>
            <div className="service-range-area default-padding bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <h4 className="sub-title">What we offer</h4>
                            <h2 className="title mb-30">Full range of <br /> digital marketing services!</h2>
                            <p>
                                Greatly explain attempt perhaps in feeling he. House men taste bed not drawn joy. Through enquire however do equally herself at. Greatly way old may you present improve. Wishing the feeling village him musical.
                            </p>
                            <ul className="list-double mt-40">
                                {SingleShowV1Data.map(service =>
                                    <SingleServiceV4 service={service} key={service.id} />
                                )}
                            </ul>
                        </div>
                        <div className="col-lg-6 offset-lg-1 col-xl-5 offset-xl-1">
                            <div className="seo-progress text-center">
                                <div className="circle-progress">
                                    {ShowCaseData.map(progress =>
                                        <ShowCaseProgress progress={progress} key={progress.id} />
                                    )}
                                </div>
                                <div className="seo-progess-items">
                                    <div className="process-item">
                                        <h5>Global Rank</h5>
                                        <p>Internationally</p>
                                    </div>
                                    <div className="process-item">
                                        <h5>Business Growth</h5>
                                        <p>Upto 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowCaseV1;