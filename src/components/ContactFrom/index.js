import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    events: "",
    notes: "",
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

    const { name, email, subject, events, notes, error } = this.state;

    if (name === "") {
      error.name = "Please enter your name";
    }
    if (email === "") {
      error.email = "Please enter your email";
    }
    if (subject === "") {
      error.subject = "Please enter your subject";
    }
    if (events === "") {
      error.events = "Select your event list";
    }
    if (notes === "") {
      error.notes = "Please enter your note";
    }

    if (error) {
      this.setState({
        error,
      });
    }
    if (
      error.name === "" &&
      error.email === "" &&
      error.email === "" &&
      error.subject === "" &&
      error.events === "" &&
      error.notes === ""
    ) {
      this.setState({
        name: "",
        email: "",
        subject: "",
        events: "",
        notes: "",
        error: {},
      });
    }
  };

  render() {
    const { name, email, subject, error } = this.state;

    return (
      <form onSubmit={this.subimtHandler} className="form">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <input
                value={name}
                onChange={this.changeHandler}
                type="text"
                name="name"
                placeholder={this.props.t("Contact.name")}
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
              />
              <p>{error.subject ? error.subject : ""}</p>
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="form-field">
              <textarea
                name="message"
                placeholder={this.props.t("Contact.message")}>
              </textarea>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="contact-form-action">
              <button className="form-button" type="submit">
                {this.props.t("Contact.send")}
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default withTranslation()(ContactForm);
