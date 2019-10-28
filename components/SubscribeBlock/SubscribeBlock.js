import React, { Component, Fragment } from "react";
import cn from "classnames";
import "../../pages/styles/main.scss";

import "./SubscribeBlock.scss";
class SubscribeBlock extends Component {
  state = {
    contactName: "",
    contactEmail: ""
  };

  render() {
    return (
      <>
        <section className="section section-subscribe-form">
          <div className="container">
            <h2 className="section-small-heading section-heading-line">
              רוצה לקבל עדכונים והטבות לפני כולם?
            </h2>
            <div className="subscribe-block-form">
              <form className="subscribe-form" id="subscribe-form" noValidate>
                <div className="subscribe-form-container form-container">
                  <p className="input-block">
                    <label
                      htmlFor="input-contact-name"
                      className={cn({
                        "input-label": true,
                        "input-not-empty": this.state.contactName.length > 0
                      })}
                    >
                      <input
                        className="input-text input-text-grey"
                        type="text"
                        id="input-contact-name"
                        placeholder="&nbsp;"
                        required
                        onChange={e => {
                          this.setState({ contactName: e.target.value });
                        }}
                      />
                      <span className="input-label-span">שמך המלא</span>
                      <span className="input-border"></span>
                    </label>
                  </p>
                  <p className="input-block">
                    <label
                      htmlFor="input-contact-email"
                      className={cn({
                        "input-label": true,
                        "input-not-empty": this.state.contactEmail.length > 0
                      })}
                    >
                      <input
                        className="input-email input-text-grey"
                        type="email"
                        id="input-contact-email"
                        placeholder="&nbsp;"
                        required
                        onChange={e => {
                          this.setState({ contactEmail: e.target.value });
                        }}
                      />
                      <span className="input-label-span">אימייל</span>
                      <span className="input-border"></span>
                      <span className="subscribe-input-error span-error">
                        אימייל
                      </span>
                    </label>
                  </p>
                </div>
                <div className="subscribe-block-checkbox">
                  <label
                    className="subscribe-label-checkbox"
                    htmlFor="subscribe-checkbox"
                  >
                    <input
                      className="subscribe-input-checkbox input-checkbox"
                      id="subscribe-checkbox"
                      type="checkbox"
                    />
                    מסכים לקבל חומר פרסומי
                  </label>
                </div>
                <div className="btn-block">
                  <input
                    className="input-submit btn-blue btn-large"
                    id="subscribe-submit"
                    type="submit"
                    value="שליחה"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SubscribeBlock;
