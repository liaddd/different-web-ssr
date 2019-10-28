import React, { Component, Fragment } from "react";
import Link from "next/link";

import "./Modal.scss";

class ModalContact extends Component {
  render() {
    return (
      <Fragment>
        <div className="modal-block modal-effect-slide">
          <div className="modal-overlay" />
          <div className="modal-content modal-with-bg modal-with-logo">
            <div className="modal-header">
              <div className="modal-user modal-user-icon" />
              <span className="modal-close modal-close-icon" />
            </div>
            <div className="modal-inner-content">
              <h2 className="modal-title">תודה שפנית אלינו</h2>
              <div className="modal-text">חוזרים אלייך בהקדם</div>
              <Link href="/">
                <a className="modal-logo-link"> DiffeRent</a>
              </Link>
              <div className="btn-block">
                <button className="btn btn-blue btn-large">
                  חזרה לעמוד הראשי
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ModalContact;
