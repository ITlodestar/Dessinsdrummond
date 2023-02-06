import React from "react";
import { Link } from "react-router-dom";

import serviceImg1 from "../../img/service-bg-1.png";
import serviceImg2 from "../../img/service-bg-2.jpg";
import serviceImg3 from "../../img/service-bg-3.jpg";
import serviceIcon1 from "../../img/service-icon-1.png";
import serviceIcon2 from "../../img/service-icon-2.png";
import serviceIcon3 from "../../img/service-icon-3.png";

import "./style.css";

const ServiceList = () => {
  return (
    <section className="service-area service-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-icon">
                <img src={serviceIcon1} alt="img" />
              </div>
              <div className="service-text">
                <h3>Interior Design</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link to="/service-single" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg1} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="service-icon">
                <img src={serviceIcon2} alt="img" />
              </div>
              <div className="service-text">
                <h3>Architecture</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link to="/service-single" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg2} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-icon">
                <img src={serviceIcon3} alt="img" />
              </div>
              <div className="service-text">
                <h3>House Planning</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link to="/service-single" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg3} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-icon">
                <img src={serviceIcon1} alt="img" />
              </div>
              <div className="service-text">
                <h3>Space Planning</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link to="/service-single" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg1} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="service-icon">
                <img src={serviceIcon2} alt="img" />
              </div>
              <div className="service-text">
                <h3>Furniture Design</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link to="/service-single" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg2} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-icon">
                <img src={serviceIcon3} alt="img" />
              </div>
              <div className="service-text">
                <h3>Art Selections</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link to="/service-single" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg3} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceList;
