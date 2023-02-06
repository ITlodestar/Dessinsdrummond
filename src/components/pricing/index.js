import React from "react";
import { Link } from "react-router-dom";

import pricingBG from "../../img/service-cost-bg.jpg";

import "./style.css";

const Pricing = () => {
  return (
    <section
      className="pricing-area"
      style={{ backgroundImage: `url(${pricingBG})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="site-heading" data-aos="fade-up">
              <h3 className="sub-title">PRICING</h3>
              <h2 className="section-title">SERVICING COST</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="pricing-box" data-aos="fade-up">
              <div className="pricing-header">
                <h3>Starter</h3>
                <div className="price">
                  $40.00 <span>/ Monthly</span>
                </div>
              </div>
              <div className="pricing-content">
                <ul>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Lorem ipsum dolor sit amet
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Consectetuer adipiscing elit
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Sed diam nonummy
                    </p>
                  </li>
                  <li className="hidden-list">
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Nibh euismod tincidunt
                    </p>
                  </li>
                  <li className="hidden-list">
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Ut laoreet dolore
                    </p>
                  </li>
                  <li className="hidden-list">
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Magna aliquam erat volutpat
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pricing-action">
                <Link to="/">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-box" data-aos="fade-up">
              <div className="pricing-header">
                <h3>Regular</h3>
                <div className="price">
                  $65.85 <span>/ Monthly</span>
                </div>
              </div>
              <div className="pricing-content">
                <ul>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Lorem ipsum dolor sit amet
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Consectetuer adipiscing elit
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Sed diam nonummy
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Nibh euismod tincidunt
                    </p>
                  </li>
                  <li className="hidden-list">
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Ut laoreet dolore
                    </p>
                  </li>
                  <li className="hidden-list">
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Magna aliquam erat volutpat
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pricing-action">
                <Link to="/">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-box " data-aos="fade-up">
              <div className="pricing-header">
                <h3>Premium</h3>
                <div className="price">
                  $140.50 <span>/ Monthly</span>
                </div>
              </div>
              <div className="pricing-content">
                <ul>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Lorem ipsum dolor sit amet
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Consectetuer adipiscing elit
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Sed diam nonummy
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Nibh euismod tincidunt
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Ut laoreet dolore
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-arrow-circle-right" />
                      Magna aliquam erat volutpat
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pricing-action">
                <Link to="/">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
