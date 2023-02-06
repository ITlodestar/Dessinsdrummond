import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Error = () => {
  return (
    <section className="error-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-page-inn text-center">
              <h2>
                4
                <span>
                  <i className="far fa-frown" />
                </span>
                4
              </h2>
              <h3>Sorry, We can’t find anything.</h3>
              <p>But don’t be afraid. Just click on go home btn.</p>
              <Link to="/" className="cta-btn btn-fill">
                Go To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
