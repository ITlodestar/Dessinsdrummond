import React from "react";
import ContactForm from "../ContactFrom";
import "./style.css";

const Contactpage = () => {
  return (
    <section className="contact-page-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="contact-form">
              <div className="site-heading" data-aos="fade-up">
                <h3 className="sub-title">Get Quote</h3>
                <h2 className="section-title">Free Consultancy</h2>
              </div>
              <ContactForm />
            </div>
          </div>
          <div className="col-lg-5 col-sm-6">
            <div className="contact-page-left">
              <h3>Contact info</h3>
              <div className="contact-info">
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="contact-info-text">
                    <h5>Head office</h5>
                    <p>
                      74 South Doult Street,
                      <br />
                      Dubai.
                    </p>
                  </div>
                </div>
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fas fa-phone-alt" />
                  </div>
                  <div className="contact-info-text">
                    <h5>Phone</h5>
                    <p>(444) 123 4567 89</p>
                    <p>(+09) 123 4567 89</p>
                  </div>
                </div>
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fas fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <h5>Email</h5>
                    <p>info@company.com</p>
                    <p>support@company.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-6">
            <div className="contact-page-right">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d555482.3711026354!2d55.086876101283096!3d24.842777577980748!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1629183603415!5m2!1sen!2sbd"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
