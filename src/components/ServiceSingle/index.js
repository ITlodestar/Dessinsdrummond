import React from "react";
import ServiceBg from "../../img/service-bg-1.png";
import Pricing from "../../components/pricing";
import Partners from "../../components/partners";

import "./style.css";

const ServiceSingle = () => {
  return (
    <div>
      <section className="service-video-box-area" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="site-heading">
                <h3 className="sub-title">SERVICE</h3>
                <h2 className="section-title">
                  OUR
                  <br /> SERVICE
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-video-box-text">
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of me. I enjoy with my whole heart. I am alone, and feel
                  the charm of existence in this spot.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="service-video-box">
                <img src={ServiceBg} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pricing />
      <section className="pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site-heading text-center" data-aos="fade-up">
                <h3 className="sub-title">CORPORATION</h3>
                <h2 className="section-title">OUR CLIENTS & PARTNERS</h2>
              </div>
            </div>
          </div>
        </div>
        <Partners />
      </section>
    </div>
  );
};
export default ServiceSingle;
