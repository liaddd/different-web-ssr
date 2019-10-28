import React, { Component, Fragment } from "react";
import ClassName from "classnames";
import { connect } from "react-redux";
import "./Modal.scss";
import Api from "./../../utils/requestClient/requests";
import SuccessMessage from "../Modal/SuccessMessage";
import ModalLoading from "../Modal/ModalLoader";

class ModalSubscribe extends Component {
  state = {
    contactEmail: "",
    checkBox: false,
    errorMessage: "",
    showSuccess: false,
    showLoading: false
  };
  onSubmit = e => {
    e.preventDefault();
    const { contactEmail, checkBox } = this.state;

    if (!checkBox) {
      this.setState({
        errorMessage:
          "אנא סמן את תיבת הסימון אם ברצונך לקבל עדכון כשהשירות מוכן"
      });
      return;
    }
    if (contactEmail) {
      this.setState({ showLoading: true });
      Api.customizedContract({ email: contactEmail })
        .then(data => {
          this.props.onShowPopup(false);
          this.setState({ showLoading: false });
          this.setState({ showSuccess: true });
        })
        .catch(err => {
          console.log(err);
          this.setState({ showLoading: false });
          this.setState({
            errorMessage: /* err.response.data.errorMessage */ `כתובת מייל אינה תקינה`
          });
        });
    } else {
      this.setState({
        errorMessage: "אנא הכנס כתובת מייל"
      });
    }
  };

  componentDidMount() {
    //amplitude.getInstance().logEvent('חוזה שכירות מותאם אישית');
  }
  render() {
    return (
      <Fragment>
        <SuccessMessage show={this.state.showSuccess} />
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
              <form
                className="sub-wrapper"
                id="subscribe-form"
                onSubmit={this.onSubmit}
                noValidate
              >
                <div className="sub-block-title size40">בקרוב!!!</div>
                <p className="sub-block-title size22">
                  הדף עובר שיפורים תרצה שנודיע לך כאשר נסיים?{" "}
                </p>
                <div className="sub-flex">
                  <div>
                    <input
                      className="personal-info-input-checkbox input-checkbox "
                      id="personal-info-checkbox"
                      checked={this.state.checkBox}
                      onChange={e => {
                        this.setState({ checkBox: !this.state.checkBox });
                      }}
                      type="checkbox"
                    />{" "}
                    {this.state.checkBox ? "כן" : "לא"}
                  </div>

                  <p className="input-block input-width">
                    <label
                      htmlFor="input-contact-email"
                      className={ClassName({
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
                <p style={{ color: "#e7736d" }}>{this.state.errorMessage}</p>
                <div className="sub-flex">
                  <input
                    className={ClassName("input-submit  btn-small", {
                      "btn-white": !this.state.checkBox,
                      "btn-blue": this.state.checkBox
                    })}
                    id="price-submit"
                    type="submit"
                    value="אישור"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <ModalLoading show={this.state.showLoading} />
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
)(ModalSubscribe);
