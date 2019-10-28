import React, { Component, Fragment } from "react";

import ModalButtonsBlock from "./ModalButtonsBlock";
import "./Modal.scss";

class ModalPersonalInfoStep2 extends Component {
  render() {
    return (
      <Fragment>
        <div className="modal-header">
          <div
            className={
              this.props.showError
                ? "modal-user modal-user-icon-shield-x"
                : "modal-user modal-user-icon-shield-v"
            }
          ></div>
          <span
            className="modal-close modal-close-icon"
            onClick={() => this.props.sendData()}
          ></span>
        </div>
        <div className="modal-inner-content">
          <p className="modal-text">
            {this.props.showError ? (
              <strong>
                בדיקתנו הסתיימה,
                <br />
                DiffeRent לא תוכל להבטיח את תשלומי הדייר שלך.
              </strong>
            ) : (
              <strong>
                בדיקתנו הסתיימה,
                <br />
                DiffeRent תשמח להבטיח את תשלומי הדייר שלך
              </strong>
            )}
          </p>
          <div className="modal-btn-block">
            <button
              className="btn btn-white btn-small"
              onClick={() => this.props.sendData()}
            >
              לבדיקת דייר נוסף
            </button>
          </div>
          <p className="modal-text">
            <strong>ניתן לבדוק עד 5 דיירים</strong>
          </p>
          {!this.props.showError && (
            <ModalButtonsBlock
              users={this.props.users}
              sendData={this.props.sendData}
            />
          )}
        </div>
      </Fragment>
    );
  }
}
export default ModalPersonalInfoStep2;
