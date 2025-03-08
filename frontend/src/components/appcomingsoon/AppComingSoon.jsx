import React from "react";
// import { SingleBlog3d } from "./SingleBlog3d";
// import { motion } from "framer-motion";
import BoxReveal from "../ui/magic_ui/box-reveal";
// import { fadeInCards } from "../../utils/fadeInAnimation";
import { Highlight } from "../ui/aceternity_ui/text-highlight";

const AppComingSoon = () => {
  return (
    <>
      <div className="blog-area home-blog bottom-less">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className=" text-center">
                {/* <h5 className="sub-title">
                  <BoxReveal>Coming Soon</BoxReveal>
                </h5> */}
                <h3 class="tw-text-2xl md:tw-text-5xl">
                  <Highlight>Forest Arena App</Highlight>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-0">
          <div className="row">
            {/* <div className="picture4"></div> */}
            <img
              loading="lazy"
              src="/img/app_coming_soon/APP.webp"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                width: "100%",
                maxWidth: "500px",
                margin: "auto",
              }}
              alt="Image Not Found"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppComingSoon;
