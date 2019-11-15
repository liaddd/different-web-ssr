import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { get } from "lodash";
import Router from "next/router";
import cn from "classnames";
import { STEPPER_STEP1 } from "./../../actions/forms/forms.actions.constants";
import { stepper } from "./../../actions/forms/forms.actions";
import validator from "./../../utils/validate/index";
import requestClient from "./../../utils/requestClient/requests";
import UserActions from "../../actions/users/users.actions";
import { logout } from "../../actions/common/common.actions";
import { getCookie } from "../../utils/cookie";
const DEFAULT_ERROR = "value isn't valid ";

class PersonalInfoStep1 extends Component {
  state = {
    first_name: get(this.props , "user.first_name") ? this.props.user.first_name : null,
    last_name: get(this.props , "user.last_name") ? this.props.user.last_name : null,
    id_number: get(this.props , "user.id_number") ? this.props.user.id_number : null,
    phone: get(this.props , "user.phone") ? this.props.user.phone : null,

    first_nameValidate: {
      error: void 0
    },

    last_nameValidate: {
      error: void 0
    },

    id_numberValidate: {
      error: void 0
    },

    phoneValidate: {
      error: void 0
    }
  };

  onSubmit = e => {
    e.preventDefault();

    let first_name = validator.validate.validate(
      validator.constants.InputStringRegex,
      this.state.first_name,
      DEFAULT_ERROR
    );
    if (first_name && first_name.error) {
      this.setState({ first_nameValidate: { error: first_name.error } });
    } else {
      this.setState({ first_nameValidate: { error: void 0 } });
    }

    let last_name = validator.validate.validate(
      validator.constants.InputStringRegex,
      this.state.last_name,
      DEFAULT_ERROR
    );
    if (last_name && last_name.error) {
      this.setState({ last_nameValidate: { error: last_name.error } });
    } else {
      this.setState({ last_nameValidate: { error: void 0 } });
    }

    let id_number = validator.validate.validate(
      validator.constants.IdNumberRegex,
      this.state.id_number,
      DEFAULT_ERROR
    );
    if (id_number && id_number.error) {
      this.setState({ id_numberValidate: { error: id_number.error } });
    } else {
      this.setState({ id_numberValidate: { error: void 0 } });
    }

    let phone = validator.validate.validate(
      validator.constants.IsraelPhoneNumberRegex,
      this.state.phone,
      DEFAULT_ERROR
    );
    if (phone && phone.error) {
      this.setState({ phoneValidate: { error: phone.error } });
    } else {
      this.setState({ phoneValidate: { error: void 0 } });
    }

    if (first_name.valid && last_name.valid && id_number.valid && phone.valid) {
      this.props.onSetUserData({ showModal: true });

      requestClient
        .step1(
          {
            flow_type: "EXIST_TENANT",
            id_number: this.state.id_number,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            birth_date:
              "19/01/1980" /* ,
                    "landlord_phone": this.props.user.phone,
                    "email": "template@template.com" */
          },
          this.props.user.auth.session_token
        )
        .then(data => {
          data.data.showModal = false;
          this.props.onSetUserData(data.data);
          this.props.onSetStepper({
            activeStep: 2,
            step1: {
              edit: true
            }
          });
          Router.push("/personal-info/step2");
        })
        .catch(error => {
          if (get(error, "response.data.errorCode") === "INVALID_ID") {
            this.setState({
              id_numberValidate: { error: "*ת.ז לא תקינה" }
            });
          }
          this.props.onSetUserData({ showModal: false });
          if (get(error, "response.data.errorCode") === "UNAUTHORIZED") {
            this.props.onLogout();
            Router.push("/");
          }
        });
    }
  };

  componentDidMount() {
    const global_token = getCookie("global_token");
    if (!global_token) {
      Router.push("/");
    }
    this.nameInput.focus();
  }
  handleChangeState = (e, value, type) => {
    e.preventDefault();
    this.setState({
      [type]: value
    });
  };
  render() {
    const { activeStep } = this.props.stepper;
    return (
      <Fragment>
        <div
          className={cn({
            "personal-info-section": true,
            "personal-info-section-1": true,
            "personal-info-section-active": activeStep === STEPPER_STEP1
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
                  htmlFor="input-personal-info-first-name"
                  className={cn({
                    "input-label": true,
                    "input-not-empty":
                      this.state.first_name && this.state.first_name.length > 0,
                    "input-error":
                      this.state.first_nameValidate.error !== void 0
                  })}
                >
                  <input
                    className="input-text input-text-grey"
                    type="text"
                    id="input-personal-first-name"
                    ref={input => {
                      this.nameInput = input;
                    }}
                    placeholder="&nbsp;"
                    onChange={e =>
                      this.handleChangeState(e, e.target.value, "first_name")
                    }
                    value={this.state.first_name ? this.state.first_name : ""}
                  />

                  <span className="input-label-span">*שם פרטי</span>
                  <span className="input-border"></span>
                  {this.state.first_nameValidate.error !== void 0 && (
                    <span className="personal-info-input-error span-error">
                      *שם לא נכון
                    </span>
                  )}
                </label>
              </p>
              <p className="input-block-row">
                <label
                  htmlFor="input-personal-info-last-name"
                  className={cn({
                    "input-label": true,
                    "input-not-empty":
                      this.state.last_name && this.state.last_name.length > 0,
                    "input-error": this.state.last_nameValidate.error !== void 0
                  })}
                >
                  <input
                    className="input-text input-text-grey"
                    type="text"
                    id="input-personal-info-last-name"
                    ref={input => {
                      this.nameInput = input;
                    }}
                    placeholder="&nbsp;"
                    onChange={e =>
                      this.handleChangeState(e, e.target.value, "last_name")
                    }
                    value={this.state.last_name ? this.state.last_name : ""}
                  />
                  <span className="input-label-span">*שם משפחה</span>
                  <span className="input-border"></span>
                  {this.state.last_nameValidate.error !== void 0 && (
                    <span className="personal-info-input-error span-error">
                      שם לא נכון
                    </span>
                  )}
                </label>
              </p>
              <p className="input-block-row">
                <label
                  htmlFor="input-personal-info-id-number"
                  className={cn({
                    "input-label": true,
                    "input-not-empty":
                      this.state.id_number && this.state.id_number.length > 0,
                    "input-error": this.state.id_numberValidate.error !== void 0
                  })}
                >
                  <input
                    className="input-text input-text-grey"
                    type="number"
                    id="input-personal-info-id-number"
                    ref={input => {
                      this.nameInput = input;
                    }}
                    placeholder="&nbsp;"
                    onChange={e =>
                      this.handleChangeState(e, e.target.value, "id_number")
                    }
                    value={this.state.id_number ? this.state.id_number : ""}
                  />
                  <span className="input-label-span">*מספר ת.ז</span>
                  <span className="input-border"></span>
                  {this.state.id_numberValidate.error !== void 0 && (
                    <span className="personal-info-input-error span-error">
                      *ת.ז לא תקינה
                    </span>
                  )}
                </label>
              </p>
              <p className="input-block-row">
                <label
                  htmlFor="input-personal-info-phone-number"
                  className={cn({
                    "input-label": true,
                    "input-not-empty":
                      this.state.phone && this.state.phone.length > 0,
                    "input-error": this.state.phoneValidate.error !== void 0
                  })}
                >
                  <input
                    className="input-text input-text-grey"
                    type="tel"
                    dir="auto"
                    style={{ textAlign: "end" }}
                    id="input-personal-info-phone-number"
                    ref={input => {
                      this.nameInput = input;
                    }}
                    placeholder="&nbsp;"
                    onChange={e =>
                      this.handleChangeState(e, e.target.value, "phone")
                    }
                    value={this.state.phone ? this.state.phone : ""}
                  />
                  <span className="input-label-span">*מספר טלפון</span>
                  <span className="input-border"></span>
                  {this.state.phoneValidate.error !== void 0 && (
                    <span className="personal-info-input-error span-error">
                      *מספר טלפון
                    </span>
                  )}
                </label>
              </p>
            </div>
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
)(PersonalInfoStep1);

export default withConnect;
