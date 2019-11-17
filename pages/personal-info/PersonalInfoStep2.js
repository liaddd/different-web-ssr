import React, { Component, Fragment } from "react";
import cn from "classnames";
import { connect } from "react-redux";
import Router from "next/router";
import { getCookie } from "../../utils/cookie";
import { stepper } from "../../actions/forms/forms.actions";
import UserActions from "../../actions/users/users.actions";
import { animateScroll as scroll } from "react-scroll";

import { STEPPER_STEP2 } from "../../actions/forms/forms.actions.constants";
import validator from "../../utils/validate";
import requestClient from "../../utils/requestClient/requests";
import { get } from "lodash";
import { logout } from "../../actions/common/common.actions";
const DEFAULT_ERROR = "value isn't valid ";

class PersonalInfoStep2 extends Component {
  state = {
    city: get(this.props , "user.properties") && this.props.user.properties.length > 0 ? this.props.user.properties[this.props.user.properties.length - 1].property.city : null,
    street: get(this.props , "user.properties") && this.props.user.properties.length > 0 ? this.props.user.properties[this.props.user.properties.length - 1].property.street : null,
    street_no: get(this.props , "user.properties") && this.props.user.properties.length > 0 ? this.props.user.properties[this.props.user.properties.length - 1].property.street_number : null,
    apt_no: get(this.props , "user.properties") && this.props.user.properties.length > 0 ? this.props.user.properties[this.props.user.properties.length - 1].property.apartment_number : null,

    cityValidate: {
      error: void 0
    },
    streetValidate: {
      error: void 0
    },
    street_noValidate: {
      error: void 0
    },
    apt_noValidate: {
      error: void 0
    }
  };
  componentDidMount() {
    const global_token = getCookie("global_token");
    if (!global_token) {
      Router.push("/");
    }
    this.nameInput.focus();
    this.props.height && scroll.scrollTo(this.props.height / 4);
  }
  handleChangeState = (e, value, type) => {
    e.preventDefault();
    this.setState({
      [type]: value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    let city = validator.validate.validate(
      validator.constants.InputStringRegex,
      this.state.city,
      DEFAULT_ERROR
    );
    if (city && city.error) {
      this.setState({ cityValidate: { error: city.error } });
    } else {
      this.setState({ cityValidate: { error: void 0 } });
    }

    let street = validator.validate.validate(
      validator.constants.InputStringRegex,
      this.state.street,
      DEFAULT_ERROR
    );
    if (street && street.error) {
      this.setState({ streetValidate: { error: street.error } });
    } else {
      this.setState({ streetValidate: { error: void 0 } });
    }

    let street_no = validator.validate.validate(
      validator.constants.InputNumberRegex,
      this.state.street_no,
      DEFAULT_ERROR
    );
    if (street_no && street_no.error) {
      this.setState({ street_noValidate: { error: street_no.error } });
    } else {
      this.setState({ street_noValidate: { error: void 0 } });
    }

    let apt_no = validator.validate.validate(
      validator.constants.InputNumberRegex,
      this.state.apt_no,
      DEFAULT_ERROR
    );
    /* if (apt_no && apt_no.error) {
      this.setState({ apt_noValidate: { error: apt_no.error } });
    } else {
      this.setState({ apt_noValidate: { error: void 0 } });
    } */

    if (city.valid && street.valid && street_no.valid /* && apt_no.valid */) {
      this.props.onSetUserData({ showModal: true });

      requestClient
        .step2(
          {
            flow_type: "EXIST_TENANT",
            city: this.state.city,
            street: this.state.street,
            street_no: this.state.street_no,
            apartment_number: this.state.apt_no
          },
          this.props.user.auth.session_token
        )
        .then(data => {
          data.data.showModal = false;
          data.data.errorMessageStep2 = "";
          this.props.onSetUserData(data.data);

          this.props.onSetStepper({
            activeStep: 3,
            step2: {
              edit: true
            }
          });
          Router.push("/personal-info/step3");
        })
        .catch(error => {
          console.error(error);
          this.props.onSetUserData({
            showModal: false,
            errorMessageStep2: "כתובת לא תקינה"
          });
          if (get(error, "response.data.errorCode") === "UNAUTHORIZED") {
            this.props.onLogout();
            Router.push("/");
          }
        });
    }
  };

  render() {
    const { activeStep } = this.props.stepper;
    const errorMessageStep2 = get(this.props, "user.errorMessageStep2", "");
    return (
      <Fragment>
        <div
          className={cn({
            "personal-info-section": true,
            "personal-info-section-2": true,
            "personal-info-section-active": activeStep === STEPPER_STEP2
          })}
        >
          <form
            className="personal-info-form"
            id="personal-info-form"
            onSubmit={this.onSubmit}
          >
            <div className="personal-info-form-container form-container">
              <p className="input-block-row">
                <label
                  htmlFor="input-personal-info-city"
                  className={cn({
                    "input-label": true,
                    "input-not-empty":
                      this.state.city && this.state.city.length > 0,
                    "input-error": this.state.cityValidate.error !== void 0
                  })}
                >
                  <input
                    className="input-text input-text-grey"
                    type="text"
                    id="input-personal-city"
                    ref={input => {
                      this.nameInput = input;
                    }}
                    placeholder="&nbsp;"
                    onChange={e =>
                      this.handleChangeState(e, e.target.value, "city")
                    }
                    value={this.state.city ? this.state.city : ""}
                  />
                  <span className="input-label-span">*עיר</span>
                  <span className="input-border"></span>
                  {this.state.cityValidate.error !== void 0 && (
                    <span className="personal-info-input-error span-error">
                      required
                    </span>
                  )}
                </label>
              </p>
              <p className="input-block-row">
                <label
                  htmlFor="input-personal-info-street"
                  className={cn({
                    "input-label": true,
                    "input-not-empty":
                      this.state.street && this.state.street.length > 0,
                    "input-error": this.state.streetValidate.error !== void 0
                  })}
                >
                  <input
                    className="input-text input-text-grey"
                    type="text"
                    id="input-personal-info-street"
                    ref={input => {
                      this.nameInput = input;
                    }}
                    placeholder="&nbsp;"
                    onChange={e =>
                      this.handleChangeState(e, e.target.value, "street")
                    }
                    value={this.state.street ? this.state.street : ""}
                  />
                  <span className="input-label-span">*רחוב</span>
                  <span className="input-border"></span>
                  {this.state.streetValidate.error !== void 0 && (
                    <span className="personal-info-input-error span-error">
                      required
                    </span>
                  )}
                </label>
              </p>
              <p className="input-block-row">
                <label
                  htmlFor="input-personal-info-house-number"
                  className={cn({
                    "input-label": true,
                    "input-not-empty":
                      this.state.street_no && this.state.street_no.length > 0,
                    "input-error": this.state.street_noValidate.error !== void 0
                  })}
                >
                  <input
                    className="input-text input-text-grey"
                    type="text"
                    id="input-personal-info-house-number"
                    ref={input => {
                      this.nameInput = input;
                    }}
                    placeholder="&nbsp;"
                    onChange={e =>
                      this.handleChangeState(e, e.target.value, "street_no")
                    }
                    value={this.state.street_no ? this.state.street_no : ""}
                  />
                  <span className="input-label-span">*מספר בית</span>
                  <span className="input-border"></span>
                  {this.state.street_noValidate.error !== void 0 && (
                    <span className="personal-info-input-error span-error">
                      required
                    </span>
                  )}
                </label>
              </p>
              <p className="input-block-row">
                <label
                  htmlFor="input-personal-info-apartment-number"
                  className={cn({
                    "input-label": true,
                    "input-not-empty":
                      this.state.apt_no && this.state.apt_no.length > 0,
                    "input-error": this.state.apt_noValidate.error !== void 0
                  })}
                >
                  <input
                    className="input-text input-text-grey"
                    type="text"
                    id="input-personal-info-apartment-number"
                    ref={input => {
                      this.nameInput = input;
                    }}
                    placeholder="&nbsp;"
                    onChange={e =>
                      this.handleChangeState(e, e.target.value, "apt_no")
                    }
                    value={this.state.apt_no ? this.state.apt_no : ""}
                  />
                  <span className="input-label-span">מספר דירה</span>
                  <span className="input-border"></span>
                  {this.state.apt_noValidate.error !== void 0 && (
                    <span className="personal-info-input-error span-error">
                      required
                    </span>
                  )}
                </label>
              </p>
            </div>
            <p style={{ color: "#e7736d", paddingRight: "20px" }}>
              {errorMessageStep2}
            </p>
            <div className="btn-block">
              <input
                className="input-submit btn-blue btn-small btn-bold"
                id="personal-info-submit"
                type="submit"
                value="המשך"
              />
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    stepper: state.forms.stepper
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetStepper: action => {
      dispatch(stepper(action));
    },
    onSetUserData: action => {
      dispatch(UserActions.setUserData(action));
    },
    onLogout: action => {
      dispatch(logout(action));
    }
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfoStep2);

export default withConnect;
