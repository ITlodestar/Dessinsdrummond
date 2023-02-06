import React, { Component } from "react";
import { Accordion } from "react-bootstrap";

import Img1 from "../../img/faq-1.jpg";
import Img2 from "../../img/faq-2.jpg";
import Img3 from "../../img/support.png";
import Img4 from "../../img/social-care.png";
import Img5 from "../../img/newspaper.png";
import Icon from "../../img/customer-service.png";

import "./style.css";

class Faq extends Component {
  render() {
    return (
      <div>
        <section className="faq-page-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="site-heading" data-aos="fade-up">
                  <h3 className="sub-title">Faq</h3>
                  <h2 className="section-title">Get Answers From Here</h2>
                </div>
                <div className="faq-accordion" data-aos="fade-up">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        How to contact with your agent?
                      </Accordion.Header>
                      <Accordion.Body>
                        craft beer labore wes anderson cred nesciunt sapiente ea
                        proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic
                        synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How can i install this theme?
                      </Accordion.Header>
                      <Accordion.Body>
                        craft beer labore wes anderson cred nesciunt sapiente ea
                        proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic
                        synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        How can i make it copy interior?
                      </Accordion.Header>
                      <Accordion.Body>
                        craft beer labore wes anderson cred nesciunt sapiente ea
                        proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic
                        synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        How to despout on this product?
                      </Accordion.Header>
                      <Accordion.Body>
                        craft beer labore wes anderson cred nesciunt sapiente ea
                        proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic
                        synth nesciunt you probably haven't heard of them
                        accusamus labore sustainable VHS.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="col-md-6">
                <div className="faq-img" data-aos="fade-up">
                  <div className="faq-img-one">
                    <img src={Img1} alt="img" />
                  </div>
                  <div className="faq-img-two">
                    <img src={Img2} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-support-area pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="site-heading" data-aos="fade-up">
                  <h3 className="sub-title">Support</h3>
                  <h2 className="section-title">Still Need Help?</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="faq-support-box" data-aos="fade-up">
                  <img src={Img3} alt="icon" />
                  <h3>Outsalting Support</h3>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things … let’s say these things.
                  </p>
                  <div className="faq-support-text">
                    <img src={Icon} alt="icon" />
                    <p>
                      <span>Hot line:</span>123 4567 89
                    </p>
                    <p>
                      <span>Mail us:</span>123 4567 89
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="faq-support-box" data-aos="fade-up">
                  <img src={Img4} alt="icon" />
                  <h3>Community</h3>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things … let’s say these things.
                  </p>
                  <div className="faq-support-text">
                    <img src={Icon} alt="icon" />
                    <p>
                      <span>Hot line:</span>123 4567 89
                    </p>
                    <p>
                      <span>Mail us:</span>123 4567 89
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="faq-support-box" data-aos="fade-up">
                  <img src={Img5} alt="icon" />
                  <h3>News &amp; Updates</h3>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things … let’s say these things.
                  </p>
                  <div className="faq-support-text">
                    <img src={Icon} alt="icon" />
                    <p>
                      <span>Hot line:</span>123 4567 89
                    </p>
                    <p>
                      <span>Mail us:</span>123 4567 89
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Faq;
