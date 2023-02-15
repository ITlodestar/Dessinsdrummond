import React from "react";
import "./style.css";
import { withTranslation } from "react-i18next";

const Feature = ({ t }) => {
  return (
    <section className="about-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="site-heading text-center">
              <h1 className="sub-title">{t("Header.About")}</h1>
              <h3 className="section-title">
                {t("Home.about_1")}
              </h3>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
           <h4 className="mb-5">{t("Home.about_2")}</h4>
           <h6>{t("Home.about_3")}</h6>
        </div>
      </div>
    </section>
  );
};
export default withTranslation()(Feature);
