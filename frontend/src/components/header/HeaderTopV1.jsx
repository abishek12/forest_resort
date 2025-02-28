import React from "react";

const HeaderTopV1 = () => {
  return (
    <>
      <div className="top-bar-area top-bar-style-two bg-dark text-light">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-8">
              <ul className="item-flex">
                <li>
                  <div className="icon">
                    <i className="fa-solid fa-map-marker-alt"></i>
                  </div>
                  <div className="info">
                    <strong>Address</strong>
                    70240 Avenue of the Moon, California
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <div className="info">
                    <strong>Phone</strong>
                    <a href="tel:4733378901">+4733378901</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 text-end">
              <div className="call-entry">
                <div className="icon">
                  <i className="fa-solid fa-comments-dollar"></i>
                </div>
                <div className="info">
                  <p>Have any Questions?</p>
                  <h5>
                    <a href="mailto:forestsports21@gmail.com">info@bestup.com</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTopV1;
