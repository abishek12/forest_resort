import React, { useState, useEffect } from "react";
import ServiceListWidget from "../widgets/ServiceListWidget";
import SupportWidget from "../widgets/SupportWidget";
import BoucherWidget from "../widgets/BoucherWidget";
import FeatureListData from "../../jsonData/FeatureListData.json";
import PopularServiceData from "../../jsonData/PopularServiceData.json";
import SinglePopularService from "./SinglePopularService";
import ServiceFaqV1 from "../faq/ServiceFaqV1";
import ServiceFaqV2 from "../faq/ServiceFaqV2.jsx";
import axios from "axios";

const ServicesDetailsContent = ({ serviceInfo }) => {
  const { thumb, text, title, FAQ, services, provide, id } = serviceInfo;
  const [serviceStatus, setServiceStatus] = useState({});

  useEffect(() => {
    const fetchServiceStatus = () => {
      axios
        .get("http://localhost:5000/api/service")
        .then((response) => {
          const servicesData = response.data;
          const status = {};

          servicesData.forEach((service) => {
            status[service.name] = service.isOpen;
          });

          setServiceStatus(status);
        })
        .catch((error) => console.error("Error fetching services:", error));
    };

    // Initial fetch
    fetchServiceStatus();

    // Set up polling
    const intervalId = setInterval(fetchServiceStatus, 5000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const getStatusLabel = (serviceName) => {
    console.log("serviceStatus", serviceStatus);
    console.log("Checking service:", serviceName);
    if (serviceStatus.hasOwnProperty(serviceName)) {
      return serviceStatus[serviceName] ? (
        <span className="status-label open">Open</span>
      ) : (
        <span className="status-label closed">Closed</span>
      );
    } else {
      console.error("Service name not found in status:", serviceName);
      return <span className="status-label closed">Closed</span>;
    }
  };

  return (
    <>
      <div className="services-details-area default-padding">
        <div className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-8 col-lg-7 pr-45 pr-md-15 pr-xs-15 services-single-content">
                <div className="service-single-thumb">
                  <img
                    loading="lazy"
                    src={`/img/fsa_image/${thumb}`}
                    alt="Thumb"
                  />
                </div>
                {/* <div style={{ display: 'flex', marginLeft: 5, marginTop: -5 }}> */}
                <h2>{title}</h2>
                <div className="status-container">
                  {title === "Swimming Pool" && getStatusLabel("Swimming Pool")}
                  {title === "Futsal" && getStatusLabel("Futsal")}
                </div>
                {/* </div> */}
                <p>{text}</p>
                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                  {/* <div className="row"> */}
                  {/* <div className="col-lg-5 col-md-6"> */}
                  <div className="content">
                    <h3>Included Services</h3>
                    <ul className="feature-list-item">
                      {/* {FeatureListData.map(list =>
                                                        <li key={list.id}>{list.featureList}</li>
                                                    )} */}
                      {services.map((item, i) => {
                        return <li>{Object.values(item)[0]} </li>;
                      })}
                    </ul>
                  </div>
                  {/* </div> */}
                  {/* <div className="col-lg-7 col-md-6 mt-xs-30">
                                            <div className="content">
                                                <h3>The Challange</h3>
                                                <p>
                                                Operating the largest swimming pool with training facilities involves maintaining high safety and cleanliness standards, balancing the needs of diverse swimmers, and ensuring continuous professional development for our instructors to provide a high-quality, safe, and enjoyable experience.
                                                </p>
                                            </div>
                                        </div> */}
                  {/* </div> */}
                </div>
                <h3>What we provide?</h3>
                <p>{provide}</p>

                <div className="faq-style-one service-faq mt-40">
                  <h2 className="mb-30">Questions about service</h2>
                  {title === "Swimming Pool" ? (
                    <ServiceFaqV1 />
                  ) : (
                    <ServiceFaqV2 />
                  )}
                </div>
                {/* <div className="services-more mt-40">
                                    <h2>Popular Services</h2>
                                    <div className="row">
                                        {PopularServiceData.map(popular =>
                                            <SinglePopularService popular={popular} key={popular.id} />
                                        )}
                                    </div>
                                </div> */}
              </div>
              <div className="col-xl-4 col-lg-5 mt-md-50 mt-xs-50 pl-30 pl-md-15 pl-xs-15 services-sidebar">
                <ServiceListWidget />
                <SupportWidget />
                {/* <BoucherWidget /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetailsContent;
