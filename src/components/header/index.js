import React, { useState } from "react";
import Logo from "../../img/logo.png";
import MobileMenu from "../../components/MobileMenu";
import { Link } from "react-router-dom";

import "./style.css";
import { changeLanguage } from "i18next";
import { withTranslation } from "react-i18next";

const Header = (props) => {
  const [show, setShow] = useState(false);
  const [langshow, Setlangshow] = useState(false);
  const [langName, SetlangName] = useState("fr");
  const SubmitHandler = (e) => {
    e.preventDefault();
  };
 
  const ChooseLanguage = () => {
    if(langshow === true) {
      Setlangshow(false); 
    }
    else {
      Setlangshow(true);
    }
  }

  const ChangeLang = (lang) => {
    changeLanguage(lang);
    Setlangshow(false); 
    SetlangName(lang);
  }

  return (
    <header className="header">
      <div className="row">
        <div className="col-lg-12">
          <div className="header-inn">
            <div className="site-logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="header-navigation">
              <div className="mainmenu">
                <nav id="menu">
                  <ul className="dropdown">
                    <li>
                      <Link to="/">{props.t('Header.Home')}</Link>
                    </li>
                    <li>
                      <Link to="/about">{props.t('Header.About')}</Link>
                    </li>
                    <li>
                      <Link to="/projects">{props.t('Header.Project')}</Link>
                    </li> 
                    <li>
                      <Link to="/service">{props.t('Header.Services')}</Link>
                    </li> 
                    <li>
                      <Link to="/contact">{props.t('Header.Contact')}</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-action d-flex">
                <div className="dropdown">
                  <button type="button" className="btn btn-outline-light dropdown-toggle" data-toggle="dropdown" onClick={() => ChooseLanguage()}>
                    { langName }
                  </button>
                  <div className={ `dropdown-menu ${langshow ? "show" : ""}`} >
                    <a className="dropdown-item" href="#" onClick={() => ChangeLang('fr')}>Fr</a>
                    <a className="dropdown-item" href="#"onClick={() => ChangeLang('en')}>En</a> 
                  </div>
                </div>
                
                <Link to="/contact" className="header-btn">
                  <div className="icon-holder">
                    <i className="far fa-envelope"></i>
                  </div> 
                </Link>
              </div>
              <div
                id="search-overlay"
                className={`block ${show ? "show" : ""}`}
              >
                <div className="centered">
                  <div id="search-box">
                    <i
                      id="close-btn"
                      onClick={() => setShow(false)}
                      className="fa fa-times fa-2x"
                    ></i>
                    <form id="search-form" onSubmit={SubmitHandler}>
                      <input
                        id="search-text"
                        name="q"
                        placeholder="Type here..."
                        type="text"
                      />
                      <button id="search-button" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withTranslation()(Header);
