import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./style.css";

const Footer = ({ t }) => {
  const NewsletterHandler = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 order-lg-1 order-1">
              <div className="single-footer">
                <h3>{t("footer.about") }</h3>
                <p>
                  Precious ipsum dolor sit amet consectetur
                  <br /> adipisicing elit, sed dos mod tempor
                </p>
                <ul className="footer-contact">
                  <li>
                    <i className="fas fa-phone-square-alt" /> (444) 123 4567 89
                  </li>
                  <li>
                    <i className="fas fa-envelope" /> support@company.com
                  </li>
                  <li>
                    <i className="fas fa-map" /> 74 South Doult Street, Dubai.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fade_rule" />
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>&copy; Copyright 2021 by Themescare</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default withTranslation()(Footer);
