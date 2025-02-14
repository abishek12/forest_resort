import React, { useState } from 'react';
import ProjectV1Data from '../../jsonData/ProjectV1Data.json'
import SingleProjectV1 from './SingleProjectV1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import { useRef } from 'react';

const ProjectV1 = () => {

    const SlideRef = useRef()

    const handleNext = () => {
        SlideRef.current.swiper.slideNext()
    }

    const handlePrev = () => {
        SlideRef.current.swiper.slidePrev()
    }

    // eslint-disable-next-line no-unused-vars
    const [activeSlide, setActiveSlide] = useState(1);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    return (
        <>
            <div className="project-style-one-area overflow-hidden default-padding-top bg-gray">
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="content-left">
                                    <h5 className="sub-title">Popular Projects</h5>
                                    <h2 className="heading">Completed Projects</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-nav-box">
                        <div className="project-swiper-nav">
                            <div className="project-button-prev" onClick={handlePrev}></div>
                            <div className="project-button-next" onClick={handleNext}></div>
                        </div>
                    </div>
                </div>

                <div className="project-style-one-items">
                    <div className="container-fill">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="project-center-stage-carousel swiper">
                                    <div className="swiper-wrappers">
                                        <Swiper
                                            ref={SlideRef}
                                            initialSlide={1} onSlideChange={handleSlideChange}
                                            modules={[Keyboard]}
                                            speed={700}
                                            freeMode={true}
                                            grabCursor={true}
                                            centeredSlides={true}
                                            pagination={{
                                                el: ".swiper-pagination",
                                                clickable: true,
                                            }}
                                            loop={true}
                                            keyboard={{
                                                enabled: true,
                                            }}
                                            breakpoints={{
                                                991: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 30,
                                                    centeredSlides: false,
                                                },
                                                1200: {
                                                    slidesPerView: 2.5,
                                                    spaceBetween: 60,
                                                },
                                                1800: {
                                                    slidesPerView: 2.8,
                                                    spaceBetween: 80,
                                                },
                                            }}
                                        >
                                            {ProjectV1Data.map(project =>
                                                <SwiperSlide key={project.id}>
                                                    <SingleProjectV1 project={project} />
                                                </SwiperSlide>
                                            )}
                                        </Swiper>
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

export default ProjectV1;