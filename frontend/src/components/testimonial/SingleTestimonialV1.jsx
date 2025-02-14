import React from 'react';

const SingleTestimonialV1 = ({ testimonial }) => {
    const { text, name, designation } = testimonial

    return (
        <>
            <div className="swiper-slide">
                <div className="testimonial-style-two">
                    <div className="item">
                        <div className="content">
                            <p>{text}</p>
                        </div>
                        <div className="provider">
                            <div className="info">
                                <h4>{name}</h4>
                                <span>{designation}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV1;