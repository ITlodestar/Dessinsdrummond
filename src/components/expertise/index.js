import React from "react";
import bg from "../../img/expertise.jpg";
import "./style.css";

const Expertise = () => {
  return (
    <section className="expertise-area">
      <div className="expertise-bg" style={{ backgroundImage: `url(${bg})` }} />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="expertise-inn">
              <div className="site-heading">
                <h3 className="sub-title">EXPERTISE</h3>
                <h2 className="section-title">See Our Expertise</h2>
              </div>
              <div className="skills-prog half">
                <div className="skillbar">
                  <h6>Illustration</h6>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>75%</span>
                    </div>
                  </div>
                </div>
                <div className="skillbar">
                  <h6>INTERIOR DESIGN</h6>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>95%</span>
                    </div>
                  </div>
                </div>
                <div className="skillbar">
                  <h6>ARCHITECTURE</h6>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>70%</span>
                    </div>
                  </div>
                </div>
                <div className="skillbar">
                  <h6>PLANNING</h6>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>80%</span>
                    </div>
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

export default Expertise;
