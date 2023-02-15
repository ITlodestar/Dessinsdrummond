import React from "react";
import { withTranslation } from "react-i18next";
import ContactForm from "../ContactFrom";
import "./style.css";

const Contactpage = ({ t }) => {
  return (
    <section className="contact-page-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="contact-form">
              <div className="site-heading" data-aos="fade-up">
              <h2 className="section-title text-left">{t("Header.Contact")}</h2>
                <h3 className="sub-title text-left">{t("Contact.content_1")}</h3>
                
              </div>
              <ContactForm />
            </div>
          </div>
          <div className="col-12  ">
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
                    <h5>{t("Contact.phone")}</h5>
                    <p>Simon B é dard, {t("Contact.partner")}</p>
                    <p>514-927-1549 </p>
                    <p>Dominic Massaro, {t("Contact.partner")}</p>
                    <p>514-927-1519 </p>  
                  </div>
                </div>
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fas fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <h5>{t("Contact.email")}</h5>
                    <p>info@company.com</p>
                    <p>support@company.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(Contactpage);
