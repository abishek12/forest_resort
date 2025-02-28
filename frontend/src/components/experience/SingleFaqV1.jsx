import React from 'react';

const SingleFaqV1 = ({ faq }) => {
    const { accordionId, collapsedClass, dataTarget, ariaExpanded, ariaControls, title, collapseShow, text } = faq

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={accordionId}>
                    <button className={`accordion-button ${collapsedClass}`} type="button" data-bs-toggle="collapse" data-bs-target={dataTarget} aria-expanded={ariaExpanded} aria-controls={ariaControls}>
                        {title}
                    </button>
                </h2>
                <div id={ariaControls} className={`accordion-collapse collapse ${collapseShow}`} aria-labelledby={accordionId} data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFaqV1;