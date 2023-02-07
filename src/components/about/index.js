import React from "react";
import CountUp from "react-countup";

import bg from "../../img/about-bg.png";
import img1 from "../../img/about-1.png";
import img2 from "../../img/about-2.png";
import signature from "../../img/signature.png";
import { withTranslation } from 'react-i18next';

import "./style.css";

const About = ({ t }) => {
  return (
    <section className="about-area" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="about-left" data-aos="fade-right">
              <div className="site-heading">
                <h3 className="sub-title">ABOUT US</h3> 
              </div>
              <p>{t('Home.about_1')}</p>
              <p>{t('Home.about_2')}</p>
              <p>{t('Home.about_3')}</p>
              <div className="about-signature">
                <div className="signature-left">
                  <img src={signature} alt="signature" />
                </div>
                {/* <div className="signature-right">
                  <h3>Robertho Garcia</h3>
                  <p>President</p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-6">
            <div className="about-counter">
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={105} duration={5} />
                  </span>
                </h2>
                <p>
                  Years of <br />
                  experience
                </p>
              </div>
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={436} duration={8} />
                  </span>
                  +
                </h2>
                <p>
                  Projects <br />
                  Completed
                </p>
              </div>
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={180} duration={5} />
                  </span>
                  +
                </h2>
                <p>
                  Awards <br />
                  Winning
                </p>
              </div>
            </div>
            <div className="about-right" data-aos="fade-left">
              <img className="about_img_1" src={img2} alt="img" />
              <img className="about_img_2" src={img1} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(About);
