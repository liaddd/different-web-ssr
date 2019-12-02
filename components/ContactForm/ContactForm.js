import React, { Component, Fragment } from "react";
import "./ContactForm.scss";
import Api from "./../../utils/requestClient/requests";
import SuccessMessage from "../Modal/SuccessMessage";
import ModalLoader from "../Modal/ModalLoader";

const defaultstate = {
  name: "",
  email: "",
  comment: "",
  phone: "",
  errorMessage: "",
  showSuccess: false,
  isLoading: false
};

class ContactForm extends Component {
  state = defaultstate;
  onSubmitForm = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const { name, email, comment, phone } = this.state;
    if (/* name && email && comment &&  */ phone) {
      const newPhone = phone[0] === "0" ? phone.replace(/^0/, "+972") : phone;
      Api.contactEmail({ name, email, comment, phone: newPhone })
        .then(data => {
          this.setState({
            ...defaultstate,
            showSuccess: true,
            isLoading: false
          });
        })
        .catch(err => {
          this.setState({
            errorMessage: err.response.data.errorMessage,
            isLoading: false
          });
        });
    }
  };

  handleChange(e, input) {
    this.setState({ [input]: e.target.value });
  }

  render() {
    return (
      <Fragment>
        <SuccessMessage show={this.state.showSuccess} />
        <section className="section section-contact-form">
          <div className="container">
            <h2 className="section-small-heading">
              יש לך שאלה? בקשה?
              <br />
              תמיד תוכל לכתוב לנו -אנחנו פה בשבילך
            </h2>
            <div className="contact-block-form">
              <form
                className="contact-form"
                id="contact-form"
                onSubmit={e => this.onSubmitForm(e)}
                noValidate
              >
                <p className="input-block">
                  <input
                    className="input-text input-light-grey"
                    id="contact-name"
                    type="text"
                    value={this.state.name}
                    onChange={e => this.handleChange(e, "name")}
                    placeholder="*שמך המלא"
                    required
                  />
                </p>
                <p className="input-block">
                  <input
                    className="input-email input-light-grey"
                    id="contact-email"
                    type="email"
                    value={this.state.email}
                    onChange={e => this.handleChange(e, "email")}
                    placeholder="*אימייל"
                    required
                  />
                </p>
                <p className="input-block">
                  <input
                    className="input-number input-light-grey"
                    id="contact-tel"
                    type="tel"
                    value={this.state.phone}
                    onChange={e => this.handleChange(e, "phone")}
                    placeholder="*מספר טלפון"
                    required
                  />
                </p>
                <p className="input-block">
                  <textarea
                    className="textarea input-light-grey"
                    id="contact-textarea"
                    value={this.state.comment}
                    onChange={e => this.handleChange(e, "comment")}
                    placeholder="איך אנחנו יכולים לעזור?"
                    cols="30"
                    rows="5"
                  />
                </p>
                <p style={{ color: "#ff776f" }}>{this.state.errorMessage}</p>
                <div className="btn-block">
                  <input
                    className="input-submit btn-blue btn-large"
                    id="contact-submit"
                    type="submit"
                    value="DiffeRent , חיזרו אליי"
                  />
                </div>
                <div className="btn-block">
                  <input
                    style={{display : 'none'}}
                    className="input-submit btn-blue btn-large"
                    id="contact-submit"
                    type="submit"
                    value="{click_id}"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
        <ModalLoader show={this.state.isLoading} />
      </Fragment>
    );
  }
}

export default ContactForm;
