import React, { Component, Fragment } from "react";
import cn from "classnames";
import "./Modal.scss";
import Link from "next/link";
class SuccessMessage extends Component {
  render() {
    return (
      <Fragment>
        <div
          className={cn("modal-block modal-effect-slide", {
            "modal-show": this.props.show
          })}
        >
          {" "}
          {/*  add class modal-show */}
          <div className="modal-overlay"></div>
          <div className="modal-content modal-with-bg">
            <div className="modal-header">
              <div className="modal-user modal-user-icon"></div>
            </div>
            <div className="modal-inner-content">
              <h2 className="modal-title">תודה שפנית אלינו</h2>
              <div className="modal-text">חוזרים אלייך בהקדם</div>
              <div className="btn-block">
                <Link href="/">
                  <button className="btn btn-blue btn-large">
                    חזרה לעמוד הראשי
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default SuccessMessage;
