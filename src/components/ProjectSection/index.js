import React from "react";
import { Link } from "react-router-dom";

import projectImg1 from "../../img/project-1.png";
import projectImg2 from "../../img/project-2.png";
import projectImg3 from "../../img/project-3.png";

import "./style.css";

const ProjectSection = () => {
  return (
    <section className="projects-area pt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="site-heading">
              <h3 className="sub-title">PROJECTS</h3>
              <h2 className="section-title">Featured Work.</h2>
            </div>
            <div className="project-box" data-aos="fade-up">
              <Link to="/projects-single">
                <img src={projectImg1} alt="img" />
                <h3>
                  CONCERT HALL
                  <br /> IN NEW WORK
                </h3>
                <p>INTERIOR</p>
                <div className="project-zoom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye"
                  >
                    <path
                      stroke="#ffffff"
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    />
                    <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="text-center mt-5 d-lg-block d-none">
              <Link to="/projects" className="cta-btn btn-fill">
                See Projects
              </Link>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="project-box" data-aos="fade-up">
              <Link to="/projects-single">
                <img src={projectImg3} alt="img" />
                <h3>
                  MODERN LIVING
                  <br /> ROOM
                </h3>
                <p>INTERIOR</p>
                <div className="project-zoom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye"
                  >
                    <path
                      stroke="#ffffff"
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    />
                    <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="project-box" data-aos="fade-up">
              <Link to="/projects-single">
                <img src={projectImg2} alt="img" />
                <h3>
                  MODERN HOTEL
                  <br /> IN AUSTRALIA
                </h3>
                <p>ARCHITECTURE</p>
                <div className="project-zoom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye"
                  >
                    <path
                      stroke="#ffffff"
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    />
                    <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
