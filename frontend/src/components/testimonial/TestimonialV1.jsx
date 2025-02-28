import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import TestimonialV1Data from '../../jsonData/TestimonialV1Data.json';
// import SingleTestimonialV1 from './SingleTestimonialV1';

const TestimonialV1 = () => {
  const SlideRef = useRef();

  // const handleNext = () => {
  //     SlideRef.current.swiper.slideNext();
  // };

  // const handlePrev = () => {
  //     SlideRef.current.swiper.slidePrev();
  // };

  return (
    <>
      <div className="testimonial-style-two-area overflow-hidden bg-gradient text-light">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="testimonial-style-two-box default-padding">
                <div className="star-shape">
                  <img
                    loading="lazy"
                    src="/img/shape/21.png"
                    alt="Image Not Found"
                  />
                </div>
                <img
                  loading="lazy"
                  src="/img/shape/quote-big.png"
                  alt="Image Not Found"
                />
                <div className="site-heading">
                  <h2 className="title">What people say</h2>
                </div>
                <div className="testimonial-style-two-carousel swiper">
                  <div className="testimonial-v1-wrappers">
                    <Swiper
                      ref={SlideRef}
                      modules={[Keyboard, Autoplay, Pagination]}
                      slidesPerView={1}
                      spaceBetween={25}
                      autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      pagination={{
                        el: ".testimonial-two-pagination",
                        type: "fraction",
                        clickable: true,
                      }}
                      keyboard={{
                        enabled: true,
                      }}
                    >
                      {/* {TestimonialV1Data.map(testimonial => (
                                                <SwiperSlide key={testimonial.id}>
                                                    <SingleTestimonialV1 testimonial={testimonial} />
                                                </SwiperSlide>
                                            ))} */}
                    </Swiper>
                  </div>
                  {/* <div className="testimonial-two-swiper-nav">
                                        <div className="testimonial-two-pagination"></div>
                                        <div className="testimonial-two-button-prev custom-nav" onClick={handlePrev}></div>
                                        <div className="testimonial-two-button-next custom-nav" onClick={handleNext}></div>
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialV1;
