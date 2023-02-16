import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";


class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    error: {},
  };

  changeHandler = (e) => {
    const error = this.state.error;
    error[e.target.name] = "";

    this.setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  subimtHandler = (e) => {
    e.preventDefault();
    const { name, email, subject, message, error } = this.state;

    if (name === "") {
      error.name = "Please enter your name";

    }
    if (email === "") {
      error.email = "Please enter your email";
    }
    if (subject === "") {
      error.subject = "Please enter your subject";
    }
    if (message === "") {
      error.message = "Select your event list";
    }
    console.log(error);
    if (error) {
      this.setState({
        error,
      });
    }

    // window.location.href = '/successcontact';
  };

  render() {
    const { name, email, subject, error, message } = this.state;
    console.log(error);
    return (
      <form onSubmit={this.subimtHandler} className="form" >
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <input
                value={name}
                onChange={this.changeHandler}
                type="text"
                name="name"
                placeholder={this.props.t("Contact.name")}
                required
              />
              <p>{error.name ? error.name : ""}</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <input
                onChange={this.changeHandler}
                value={email}
                type="email"
                name="email"
                placeholder={this.props.t("Contact.email")}
                required
              />
              <p>{error.email ? error.email : ""}</p>
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="form-field">
              <input
                onChange={this.changeHandler}
                value={subject}
                type="text"
                name="subject"
                placeholder={this.props.t("Contact.subject")}
                required
              />
              <p>{error.subject ? error.subject : ""}</p>
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="form-field">
              <textarea
                name="message"
                value={message}
                onChange={this.changeHandler}
                placeholder={this.props.t("Contact.message")}
                required>
              </textarea>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="contact-form-action">
              {error.name !== "" || error.subject !== "" || error.email !== "" || error.message !== "" ?
                <button className="form-button" type="submit">{this.props.t("Contact.send")} </button> :
                <Link to={"/successcontact"}>
                  <button className="form-button" type="submit">{this.props.t("Contact.send")}
                  </button>
                </Link>}
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default withTranslation()(ContactForm);
