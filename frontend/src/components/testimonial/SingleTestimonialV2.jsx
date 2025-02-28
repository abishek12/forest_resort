import React from "react";

const SingleTestimonialV2 = ({ testimonial }) => {
  const { text, thumb, name, designation } = testimonial;

  return (
    <>
      <div className="swiper-slide">
        <div className="testimonial-style-one">
          <div className="item">
            <div className="content">
              <p>{text}</p>
            </div>
            <div className="provider">
              <div className="thumb">
                <img loading="lazy" src={`/img/team/${thumb}`} alt="Thumb" />
              </div>
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

export default SingleTestimonialV2;
