import React, { Component, Fragment } from "react";
import ClassName from "classnames";

import PriceForm from "../PriceForm/PriceForm";
import { connect } from "react-redux";
import "./Modal.scss";

class ModalHome extends Component {
  render() {
    return (
      <Fragment>
        <div
          className={ClassName("modal-block modal-effect-slide", {
            "modal-show": this.props.show
          })}
        >
          {" "}
          {/*  add class  modal-show */}
          <div className="modal-overlay"></div>
          <div className="modal-content">
            <div className="modal-header">
              <span
                className="modal-close modal-close-icon"
                onClick={() => {
                  this.props.onShowPopup(false);
                }}
              ></span>
            </div>
            <div className="modal-inner-content">
              {/* <PriceForm
                                    PriceFormTitle={`
                                    לבדיקת עלות שירות בטחון בשכירות.<br/>
                                    שכר הדירה שאני מבקש:
                                    `}
                                /> */}
              <PriceForm PriceFormTitle={`שכר הדירה שאני מבקש:`} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.user.auth
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalHome);
