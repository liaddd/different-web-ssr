import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import "./../Authorization.scss";
import UserActions from "../../../actions/users/users.actions";
import Validator from "./../../../utils/validate";
import Api from "./../../../utils/requestClient/requests";
import { get } from "lodash";

class AuthorizationStep1 extends Component {
  constructor(props) {
    super(props);
    this.authorizationInput = React.createRef();
    this.authorizationChecker = React.createRef();
  }

  state = {
    asyncError: {
      errorText: "undefined request error",
      errorState: false
    },

    phone: {
      // please it will translate to hebrew if it need
      errorText: Validator.constants.PhoneErrorText,
      errorState: false
    },
    checker: {
      // please it will translate to hebrew if it need
      errorText: Validator.constants.CheckboxErrorText,
      errorState: false
    }
  };

  // validatePhone is short validate callback function
  validatePhone() {
    const { authorizationInput } = this;
    const inputValidation = Validator.validate.validate(
      Validator.constants.IsraelPhoneNumberRegex,
      authorizationInput.value,
      Validator.constants.PhoneErrorValidation
    );
    if (inputValidation.error) {
      this.setState((prevState, props) => {
        return {
          ...prevState,
          ...{
            ...prevState.phone,
            ...{
              phone: {
                errorText: inputValidation.error,
                errorState: true
              }
            }
          }
        };
      });
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          ...{
            ...prevState.phone,
            ...{
              phone: {
                errorText: inputValidation.error,
                errorState: false
              }
            }
          }
        };
      });
    }

    return inputValidation.valid;
  }

  // validateChecker is short validate callback function
  validateChecker() {
    const { authorizationChecker } = this;
    const inputValidation = Validator.validate.validate(
      Validator.constants.InputCheckerRegex,
      authorizationChecker.checked,
      Validator.constants.CheckboxErrorText
    );

    if (inputValidation.error) {
      this.setState((prevState, props) => {
        return {
          ...prevState,
          ...{
            ...prevState.checker,
            ...{
              checker: {
                errorText: inputValidation.error,
                errorState: true
              }
            }
          }
        };
      });
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          ...{
            ...prevState.checker,
            ...{
              checker: {
                errorText: inputValidation.error,
                errorState: false
              }
            }
          }
        };
      });
    }

    return inputValidation.valid;
  }

  // onSubmitForm is action to submit form
  onSubmitForm = e => {
    e.preventDefault();

    this.validatePhone();
    this.validateChecker();

    if (this.validatePhone() && this.validateChecker()) {
      let phoneFormat = this.authorizationInput.value;
      phoneFormat =
        phoneFormat[0] === "0"
          ? phoneFormat.replace(/^0/, "+972")
          : phoneFormat;
      const requestData = {
        phone: phoneFormat,
        device_type: "web",
        device_name: "web",
        os_version: "1",
        is_agent: false
      };
      this.props.onSetUserData({ showModal: true });
      Api.login(requestData)
        .then(data => {
          if (this.state.asyncError.errorState) {
            this.setState(prevState => {
              return {
                ...prevState,
                ...{
                  ...prevState.asyncError,
                  ...{
                    asyncError: {
                      errorText: "",
                      errorState: false
                    }
                  }
                }
              };
            });
          }
          data.data.phone = phoneFormat;
          data.data.showModal = false;
          this.props.onSetUserData(data.data);
        })
        .catch(err => {
          this.props.onSetUserData({ showModal: false });
          if (get(err, "response.data.errorCode") === "BLOCKED_USER") {
            this.props.hendleBlockUser();
          }
          this.setState(prevState => {
            return {
              ...prevState,
              ...{
                ...prevState.asyncError,
                ...{
                  asyncError: {
                    errorText: "מספר הטלפון שהוזן אינו תקין",
                    errorState: true
                  }
                }
              }
            };
          });
        });
    }
  };

  // render
  render() {
    return (
      <Fragment>
        <div className="authorization-block">
          <div className="authorization-block-form">
            <div className="authorization-block-title">
              <div className="authorization-title">מספר טלפון להתחברות</div>
            </div>
            <form
              className="authorization-form"
              id="authorization-form"
              onSubmit={e => this.onSubmitForm(e)}
              noValidate
            >
              <div className="authorization-block-input">
                <input
                  className="authorization-input-tel input-tel authorization-input"
                  type="tel"
                  autoFocus
                  ref={node => (this.authorizationInput = node)}
                  dir="ltr"
                />
                {this.state.phone.errorState ? (
                  <span className="authorization-input-error">
                    {this.state.phone.errorText}
                  </span>
                ) : null}
                {this.state.asyncError.errorState ? (
                  <span className="authorization-input-error">
                    {this.state.asyncError.errorText}
                  </span>
                ) : null}
                {this.state.checker.errorState ? (
                  <span className="authorization-input-error">
                    {this.state.checker.errorText}
                  </span>
                ) : null}
              </div>
              <div className="authorization-block-description">
                אנו נשלח אלייך קוד לאישור מספר הטלפון
              </div>
              <div className="authorization-block-checkbox">
                <input
                  className="authorization-input-checkbox input-checkbox"
                  id="authorization-checkbox"
                  type="checkbox"
                  ref={node => (this.authorizationChecker = node)}
                />
                <label
                  className="authorization-label-checkbox"
                  htmlFor="authorization-checkbox"
                >
                  אישרתי את&nbsp;
                  <a
                    href="https://diffe-rent.s3-eu-west-1.amazonaws.com/%D7%AA%D7%A7%D7%A0%D7%95%D7%9F-+DiffeRent.pdf"
                    target="_blank"
                  >
                    התקנון
                  </a>
                </label>
              </div>
              <div className="authorization-block-submit">
                <input
                  className="authorization-submit input-submit btn-blue btn-large"
                  id="authorization-submit"
                  type="submit"
                  value="שליחה"
                />
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userPhone: state.user.phone
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetUserData: action => {
      dispatch(UserActions.setUserData(action));
    }
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizationStep1);

export default withConnect;
