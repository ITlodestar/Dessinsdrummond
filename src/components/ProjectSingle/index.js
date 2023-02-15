import React from "react";
import { Link } from "react-router-dom";

import Img1 from "../../img/project-details1.jpg";
import Img2 from "../../img/project-details2.jpg";

import { withTranslation } from 'react-i18next';
import Content from './tableContent.json';

import "./style.css";

const ProjectSingle = (props) => {
  let ProjectId = props.projectId;
  let index = 0;
  return (
    <section className="project-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-top">
              <div className="project-details-top-img">
                <img id="header_p" src={ProjectId == 1 ? Img1 : Img2} alt="img" />
              </div>
              <div className="project-details-top-box">
                <h3>Project Details</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Project</h5>
                      <p>Interior</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Location</h5>
                      <p>UAE</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Year</h5>
                      <p>2020</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Clients</h5>
                      <p>John Doe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-details-top-text">
              <h3>{props.t('Project.See_Content')}</h3>
              <h4>{props.t('Project.Basement')}</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">{props.t('Project.Pieces')} </th>
                    <th scope="col">{props.t('Project.Dimensions')}</th>
                    <th scope="col">{props.t('Project.Ceiling')}</th>
                  </tr>
                </thead>
                <tbody>
                 {
                  ProjectId == 1 ? 
                    Content.B_table1.map((item) => {
                      index += 1;
                      return (
                        <tr key={index}>
                          <td>{props.t(`Project.list.${item.Pieces}`)}</td>
                          <td>{item.Dimensions}</td>
                          <td>{item.Ceiling}</td>
                        </tr>
                      )
                    }) :
                    Content.B_table2.map((item) => {
                      index += 1;
                      return (
                        <tr key={index}>
                          <td>{props.t(`Project.list.${item.Pieces}`)}</td>
                          <td>{item.Dimensions}</td>
                          <td>{item.Ceiling}</td>
                        </tr>
                      )
                    }) 
                  }
                </tbody>
              </table>
              <h4>{props.t('Project.Ground_floor')}</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">{props.t('Project.Pieces')}</th>
                    <th scope="col">{props.t('Project.Dimensions')}</th>
                    <th scope="col">{props.t('Project.Ceiling')}</th>
                  </tr>
                </thead>
                <tbody>
                 {
                  ProjectId == 1 ? 
                    Content.G_table1.map((item) => {
                      index += 1;
                      return (
                        <tr key={index}>
                          <td>{props.t(`Project.list.${item.Pieces}`)}</td>
                          <td>{item.Dimensions}</td>
                          <td>{item.Ceiling}</td>
                        </tr>
                      )
                    }) :
                    Content.G_table2.map((item) => {
                      index += 1;
                      return (
                        <tr key={index}>
                          <td>{props.t(`Project.list.${item.Pieces}`)}</td>
                          <td>{item.Dimensions}</td>
                          <td>{item.Ceiling}</td>
                        </tr>
                      )
                    }) 
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default  withTranslation()(ProjectSingle);
