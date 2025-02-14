import React from 'react';
import CounterV1Data from '../../jsonData/CounterV1Data.json'
import SingleCounterV1 from '../counter/SingleCounterV1';
import FeatureV1Data from '../../jsonData/FeatureV1Data.json'
import SingleFeature from './SingleFeature';

const FeatureV1 = () => {
    return (
        <>
            <div className="feature-style-one-area default-padding-top bottom-less">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-4 mb-30">
                            <ul className="feature-fun-fact">
                                {CounterV1Data.map(counter =>
                                    <SingleCounterV1 counter={counter} key={counter.id} />
                                )}
                            </ul>
                        </div>
                        {FeatureV1Data.map(feature =>
                            <div className="col-lg-4 col-md-6 mb-30" key={feature.id} >
                                <SingleFeature feature={feature} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV1;