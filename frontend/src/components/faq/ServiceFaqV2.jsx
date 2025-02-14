import React from 'react';
import ServiceFaqData from '../../jsonData/ServiceFaqData2.json'
import SingleFaqV1 from '../experience/SingleFaqV1';

const ServiceFaqV2 = () => {
    return (
        <>
            <div className="accordion mt--20" id="faqAccordion">
                {ServiceFaqData.map(faq =>
                    <SingleFaqV1 faq={faq} key={faq.id} />
                )}
            </div>
        </>
    );
};

export default ServiceFaqV2;