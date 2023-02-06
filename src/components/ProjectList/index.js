import React from "react";
import { Link } from "react-router-dom";

import projectImg1 from "../../img/project-4.jpg";
import projectImg2 from "../../img/project-5.jpg";
import projectImg3 from "../../img/project-6.jpg";
import projectImg4 from "../../img/project-7.jpg";
import projectImg5 from "../../img/project-8.jpg";
import projectImg6 from "../../img/project-9.jpg";
import projectImg7 from "../../img/project-10.jpg";
import projectImg8 from "../../img/project-11.jpg";
import projectImg9 from "../../img/project-12.jpg";
import projectImg10 from "../../img/project-13.jpg";

import "./style.css";

const ProjectList = () => {
  return (
    <section className="projects-area projects-page-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <h3 className="sub-title">PROJECTS</h3>
                  <h2 className="section-title">Featured Work.</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-between">
              <div className="col-md-5  col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg1} alt="img" />
                    <h3>
                      CONCERT HALL
                      <br /> IN NEW WORK
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
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg2} alt="img" />
                    <h3>
                      MODERN INTERIOR
                      <br /> IN AUSTRALIA
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
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg3} alt="img" />
                    <h3>
                      DRAWING ROOM
                      <br /> IN LAS VEGAS
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
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg4} alt="img" />
                    <h3>
                      SWIMMING POOL
                      <br /> IN ROMANIA
                    </h3>
                    <p>HOUSE PLANNING</p>
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
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg5} alt="img" />
                    <h3>
                      MODERN OFFICE
                      <br /> IN LOS ANGELS
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
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg6} alt="img" />
                    <h3>
                      MASTER KITCHEN
                      <br /> IN DHAKA
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
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg7} alt="img" />
                    <h3>
                      MODERN RESTURENT
                      <br /> IN BAHRAIN
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
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg8} alt="img" />
                    <h3>
                      MODERN HALL ROOM
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
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg9} alt="img" />
                    <h3>
                      MODERN HOUSE
                      <br /> IN PARIS
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
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg10} alt="img" />
                    <h3>
                      MODERN HOTEL
                      <br /> IN BAHRAIN
                    </h3>
                    <p>FURNITURE DESIGN</p>
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
        </div>
      </div>
    </section>
  );
};
export default ProjectList;
