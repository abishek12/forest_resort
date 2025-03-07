import React from "react";
import HeaderV1 from "../../components/header/HeaderV1";
import FooterV1 from "../../components/footer/FooterV1";
import { Breadcrumb } from "../../components/widgets/Breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import AppComingSoon from "../../components/appcomingsoon/AppComingSoon";

const StoryMD = () => {
  return (
    <>
      <HeaderV1 headerClass="dark" style={{ marginBottom: 30 }} />
      <div className="container tw-pt-20">
        <Breadcrumb page="MD's Story" />
      </div>

      {/* Hero Section */}
      <section className="bg-light text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">CEO's Message</h1>
          <p className="lead">Leading with Vision, Integrity, and Innovation</p>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* CEO Image */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src="/img/owner/rajendra.png"
                alt="CEO"
                className="img-fluid rounded-circle shadow"
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
            </div>

            {/* CEO Message */}
            <div className="col-md-8">
              <h2 className="fw-bold mb-4">A Message from Our CEO</h2>
              <p className="mb-4">
                My name is Rajendra Baral, and I am the owner of Forest Sports
                and Recreation Center, a dream I brought to life in 2020. But
                this story isn’t just about the joy and excitement that come
                with running a sports and recreation center. It's also a story
                of resilience, grit, and a constant fight against the odds.
              </p>
              <p className="mb-4">
                The idea of Forest Sports and Recreation Center began as a
                simple dream: a place where people could escape their everyday
                stresses, whether by kicking a ball on the futsal court, taking
                a refreshing dip in the pool, or simply unwinding at our bar and
                café. I envisioned it as a haven of activity and relaxation,
                nestled amidst the tranquility of nature. But what started as a
                dream quickly turned into a challenge that tested every ounce of
                my determination.
              </p>
              <p className="mb-4">
                We opened our doors in 2020, right when the world was in the
                grips of the COVID-19 pandemic. It was a time when everything
                was uncertain, when fear and isolation were the new normal.
                Establishing a sports and recreation center at such a time felt
                like swimming against a tidal wave. The lockdowns meant empty
                courts and an eerily silent pool. The café chairs remained
                stacked, and the bar counters gathered dust. I watched as months
                of planning, investment, and hard work were overshadowed by a
                global crisis.
              </p>
              <p className="mb-4 fst-italic">
                "The future belongs to those who believe in the beauty of their
                dreams." – Eleanor Roosevelt
              </p>
            </div>
          </div>

          {/* Slider Section */}
          <div className="row mt-5">
            <div className="col-md-7">
              <p className="mb-4">
                Financially, it was devastating. Like many others, I had put
                everything on the line for this venture. I had taken loans,
                dipped into my savings, and even asked for help from friends and
                family to turn this vision into a reality. As the pandemic
                stretched on, it was not just a matter of losing money; it was
                the fear of losing the dream itself. There were days when I sat
                alone in the empty facility, the silence amplifying my doubts
                and fears. Was this the right decision? Had I made a mistake by
                pushing forward amidst such uncertainty?
              </p>
              <p className="mb-4">
                But giving up was never an option. Despite the financial
                recession that hit the country and the continuous setbacks, I
                had to find ways to keep the dream alive. We adapted. The futsal
                courts, which were once filled with the laughter and energy of
                players, were repurposed to meet the safety guidelines. We
                introduced smaller, private training sessions, ensuring that
                people could still enjoy sports in a safe environment. We also
                pivoted the café to offer takeout services and made use of every
                opportunity to engage the community, even if it meant taking a
                financial hit.
              </p>
            </div>

            {/* Slider on the Right Side */}
            <div className="col-md-5">
              <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                style={{ height: "300px" }} 
              >
                <SwiperSlide>
                  <img
                    src="/img/banner/1.jpg"
                    alt="Slide 1"
                    className="img-fluid"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/img/banner/1.jpg"
                    alt="Slide 2"
                    className="img-fluid"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/img/banner/1.jpg"
                    alt="Slide 3"
                    className="img-fluid"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <p className="mb-4">
            The struggle wasn't just professional; it was deeply personal. I
            remember the sleepless nights, the endless calculations to stretch
            every rupee, and the countless times I questioned my own decisions.
            But I also remember the small victories. The first time a group of
            kids returned to play futsal, the laughter that once again echoed
            across the fields, and the first family that enjoyed a safe meal at
            our café post-lockdown. These moments, however small, were the fuel
            that kept me going.
          </p>
        </div>
      </section>
      
      {/* <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Join Us on Our Journey</h2>
          <p className="lead mb-4">
            Be part of a team that is redefining the future. Explore
            opportunities to collaborate, innovate, and grow with us.
          </p>
          <a href="/careers" className="btn btn-outline-dark btn-lg">
            View Careers
          </a>
        </div>
      </section> */}

      <AppComingSoon/>
      <FooterV1 />
    </>
  );
};

export default StoryMD;
