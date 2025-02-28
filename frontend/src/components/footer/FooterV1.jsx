import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import SocialShare from "../others/SocialShare";
import { toast } from "react-toastify";

const FooterV1 = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Thanks for your Email");
  };

  return (
    <>
      <footer className="backgroundimg tw-bottom-0">
        <div className="container featurestwo">
          <div className="f-items pt-70 pb-35 pt-xs-0">
            <div className="row">
              <div
                className="col-lg-5 col-md-8 footer-item mt-50 md:-tw-mt-5 tw-flex tw-flex-col tw-items-center tw-justify-center"
                // style={{ textAlign: "center" }}
              >
                {/* <div className="footer-animated-shape">
                                    <img loading="lazy"  src="/img/shape/6.png" alt="Image Not Found" />
                                </div>
                                <div className="f-item about pr-50 pr-xs-0 pr-md-0" style={{textAlign: "center"}}> */}
                <img
                  loading="lazy"
                  className="logo"
                  style={{
                    height: "200px",
                    border: "1px solid green",
                    borderRadius: "15px",
                    marginTop: "-50px",
                  }}
                  src="/img/logo/fsa_logo.png"
                  alt="Logo"
                />
                {/* <p>
                                        Are off under folly death writter transforming cold regular. Almost do am or limits of hearts.
                                    </p> */}
                <div className="footer-social mt-30 md:tw-mt-0">
                  <ul>
                    <SocialShare />
                  </ul>
                </div>
                {/* </div> */}
              </div>

              {/* <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                                <div className="f-item link">
                                    <h4 className="widget-title">Company</h4>
                                    <ul>
                                        <li>
                                            <Link to="/about-us#">Company Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us#">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/faq#">Help Center</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us#">Career</Link>
                                        </li>
                                        <li>
                                            <Link to="/pricing#">Plans & Pricing</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us#">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

              <div className="col-lg-4 col-md-7 footer-item mt-50 md:tw-mt-0">
                <div className="f-item contact">
                  <h4 className="widget-title">Contact Info</h4>
                  <ul>
                    <li className="content">
                      <div>
                        <strong>Address:</strong>
                        Bulaudi 7, Nwarthok, on the banks of river bulaudi,
                        Pokhara, Nepal
                      </div>
                    </li>
                    <li className="content">
                      <div className="content">
                        <strong>Email:</strong>
                        <a href="mailto:forestsports21@gmail.com">
                          forestsports21@gmail.com
                        </a>
                      </div>
                    </li>
                    <li className="content">
                      <div className="content">
                        <strong>Phone:</strong>
                        <a>9804185602,9856085602,9814176490, 061-581637</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-item mt-50 md:tw-mt-0">
                <div className="f-item newsletter">
                  <h4 className="widget-title">Page Links</h4>
                  <ul>
                    <li>
                      <strong>
                        <a href="/">Home</a>
                      </strong>
                    </li>
                    <li>
                      <strong>
                        <a href="/about-us">About Us</a>
                      </strong>
                    </li>
                    <li>
                      <strong>
                        <a href="/services">Services</a>
                      </strong>
                    </li>
                    <li>
                      <strong>
                        <a href="/blogs">Blogs</a>
                      </strong>
                    </li>
                    <li>
                      <strong>
                        <a href="/contact-us">Contact Us</a>
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="f-item newsletter">
                                    <h4 className="widget-title">Newsletter</h4>
                                    <p>
                                        Join our subscribers list to get the instant latest news and special offers.
                                    </p>
                                    <form onSubmit={handleSearch}>
                                        <input type="email" placeholder="Your Email" className="form-control" name="email" autoComplete='off' required />
                                        <button type="submit"><i className="fas fa-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>
                  Copyright &copy; {new Date().getFullYear()} Forest Sports
                  Arena. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterV1;
