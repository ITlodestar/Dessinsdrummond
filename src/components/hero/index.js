import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "../../img/slider-1.jpg";
import hero2 from "../../img/slider-2.png";

import "./style.css";
import { withTranslation } from "react-i18next";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: false,
      arrows: false,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    };

    return (
      <section className="hero-area">
         
        <div className="hero-slider">
          <div className="hero_arrows">
            <button className="button" onClick={this.previous}>
              <i className="fas fa-angle-left"></i>
            </button>
            <button className="button" onClick={this.next}>
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div className="slide">
              <div
                className="hero-slide-item"
                style={{ backgroundImage: `url(${hero1})` }}
              >
                <div className="container">
                  <div className="hero-text">
                    <h2>
                      { this.props.t("Home.Hero1")  }<br /> 
                      { this.props.t("Home.Hero2")  }
                    </h2>
                    <div className="hero-action">
                      <Link to="/projects" className="cta-btn btn-fill">
                      { this.props.t("Home.seeproject")  }
                      </Link>
                      <Link to="/contact" className="cta-btn btn-border">
                      { this.props.t("Home.getContact")  }
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="slide">
              <div
                className="hero-slide-item"
                style={{ backgroundImage: `url(${hero2})` }}
              >
                <div className="container">
                  <div className="hero-text">
                    <h2>
                      Unique Architecture <br />
                      Design Ideas
                    </h2>
                    <div className="hero-action">
                      <Link to="/projects" className="cta-btn btn-fill">
                        See Projects
                      </Link>
                      <Link to="/contact" className="cta-btn btn-border">
                        Get Contact
                      </Link>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default withTranslation()(Hero);
