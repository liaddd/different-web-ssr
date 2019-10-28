import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { animateScroll as scroll } from "react-scroll";
import Router from "next/router";
import DatePicker, { registerLocale } from "react-datepicker";
import he from "date-fns/locale/he";
import "./ReactDatePicker.scss";

import { stepper } from "../../actions/forms/forms.actions";
import { STEPPER_STEP4 } from "../../actions/forms/forms.actions.constants";
import validator from "../../utils/validate";
import requestClient from "../../utils/requestClient/requests";
import UserActions from "../../actions/users/users.actions";
import { get } from "lodash";
import { logout } from "../../actions/common/common.actions";
import "./PersonalInfo.scss";
const DEFAULT_ERROR = "value isn't valid ";
const DEFAULT_DATE_FORMAT = "y M d";
const NOT_EMPTY_DATE_FORMAT = "y/M/d";
const MAX_PRICE = 7000;
const MIN_PRICE = 1000;
registerLocale("he", he);

class PersonalInfoStep4 extends Component {
  state = {
    price: this.props.user.price || void 0,
    enterDate: get(this.props, "user.entry_date")
      ? new Date(this.props.user.entry_date)
      : null,
    leaveDate: get(this.props, "user.exit_date")
      ? new Date(this.props.user.exit_date)
      : null,
    priceValidate: {
      error: void 0
    },
    leaveDateValidate: {
      error: void 0
    },
    enterDateValidate: {
      error: void 0
    }
  };

  componentDidMount() {
    this.props.height &&
      scroll.scrollTo(this.props.height - this.props.height / 2);
  }

  onChangeLeaveDate = date => {
    this.setState({ leaveDate: date });
  };

  onChangeEnterDate = date => {
    this.setState({ enterDate: date });
  };

  onSubmit = e => {
    e.preventDefault();
    let price = validator.validate.validate(
      validator.constants.InputStringRegex,
      this.state.price,
      DEFAULT_ERROR
    );

    if (parseInt(this.state.price) >= MAX_PRICE) {
      price.error = "שכר דירה חודשי מקסימלי: 7,000";
    }
    if (parseInt(this.state.price) <= MIN_PRICE) {
      price.error = "שכר דירה חודשי מינימלי: 1,000";
    }

    if (price && price.error) {
      this.setState({ priceValidate: { error: price.error } });
    } else {
      this.setState({ priceValidate: { error: void 0 } });
    }

    let enterDate = validator.validate.validate(
      validator.constants.InputStringRegex,
      this.state.enterDate,
      DEFAULT_ERROR
    );
    if (enterDate && enterDate.error) {
      this.setState({ enterDateValidate: { error: enterDate.error } });
    } else {
      this.setState({ enterDateValidate: { error: void 0 } });
    }

    let leaveDate = validator.validate.validate(
      validator.constants.InputStringRegex,
      this.state.leaveDate,
      DEFAULT_ERROR
    );
    if (leaveDate && leaveDate.error) {
      this.setState({ leaveDateValidate: { error: leaveDate.error } });
    } else {
      this.setState({ leaveDateValidate: { error: void 0 } });
    }
    if (price.valid && enterDate.valid && leaveDate.valid && !price.error) {
      this.props.onSetUserData({ showModal: true });

      requestClient
        .step4(
          {
            property_id: this.props.user.id,
            price: parseInt(this.state.price),
            property_type: 1,
            exit_date: this.state.leaveDate,
            entry_date: this.state.enterDate
          },
          this.props.user.auth.session_token
        )
        .then(data => {
          data.data.showModal = false;

          this.props.onSetUserData(data.data);

          this.props.onSetStepper({
            activeStep: 4,
            step4: {
              edit: true
            }
          });
          // TODO: move route name to constant
          Router.push("/card");
        })
        .catch(error => {
          console.error(error);
          this.props.onSetUserData({ showModal: false });
          if (get(error, "response.data.errorCode") === "UNAUTHORIZED") {
            this.props.onLogout();
            Router.push("/");
          }
        });
    }
  };

  render() {
    const { activeStep } = this.props.stepper;
    return (
      <Fragment>
        <div
          className={cn({
            "personal-info-section": true,
            "personal-info-section-4": true,
            "personal-info-section-active": activeStep === STEPPER_STEP4
          })}
        >
          <form
            className="personal-info-form"
            id="personal-info-form"
            noValidate
            onSubmit={e => this.onSubmit(e)}
          >
            <div className="personal-info-form-container form-container">
              <div className="input-block-row width-max">
                <label
                  htmlFor="input-personal-info-city"
                  className={cn({
                    "input-label": true,
                    "input-not-empty": this.state.price,
                    "input-error": this.state.priceValidate.error !== void 0
                  })}
                >
                  <input
                    className="input-text input-text-grey"
                    type="number"
                    id="input-personal-info-city"
                    placeholder="&nbsp;"
                    value={this.state.price}
                    onChange={e => {
                      this.setState({ price: e.target.value });
                    }}
                  />
                  <span className="input-label-span">
                    שכר הדירה בהסכם השכירות
                  </span>
                  <span className="input-border"></span>
                  {this.state.priceValidate.error !== void 0 && (
                    <span className="personal-info-input-error span-error">
                      {this.state.priceValidate.error}
                    </span>
                  )}
                </label>
              </div>
              <div className="input-block-row">
                <label
                  htmlFor="input-personal-info-house-number"
                  className={cn({
                    "input-label": true,
                    "input-not-empty": !!this.state.enterDate,
                    "input-error": this.state.enterDateValidate.error !== void 0
                  })}
                >
                  <DatePicker
                    selected={
                      this.state.enterDate ? this.state.enterDate : null
                    }
                    onChange={date => this.onChangeEnterDate(date)}
                    className="input-text input-text-grey input-date-picker"
                    minDate={new Date()}
                    locale="he"
                    dateFormat={
                      this.state.enterDate
                        ? NOT_EMPTY_DATE_FORMAT
                        : DEFAULT_DATE_FORMAT
                    }
                  />
                  {/* <DatePicker
                    dir="ltr"
                    className="input-text input-text-grey input-date-picker"
                    onChange={this.onChangeEnterDate}
                    value={this.state.enterDate ? this.state.enterDate : ""}
                    clearIcon={null}
                    calendarIcon={null}
                    format={
                      this.state.enterDate
                        ? NOT_EMPTY_DATE_FORMAT
                        : DEFAULT_DATE_FORMAT
                    }
                    locale={"he-He"}
                    minDate={new Date()}
                  /> */}

                  <span className="input-label-span-date">
                    תאריך כניסה לדירה
                  </span>
                  <span className="input-border"></span>
                  {this.state.enterDateValidate.error !== void 0 && (
                    <span className="personal-info-input-error span-error">
                      require
                    </span>
                  )}
                </label>
              </div>
              <div className="input-block-row">
                <label
                  htmlFor="input-personal-info-street"
                  className={cn({
                    "input-label": true,
                    "input-not-empty": !!this.state.leaveDate,
                    "input-error": this.state.leaveDateValidate.error !== void 0
                  })}
                >
                  <DatePicker
                    selected={
                      this.state.leaveDate ? this.state.leaveDate : null
                    }
                    onChange={this.onChangeLeaveDate}
                    className="input-text input-text-grey input-date-picker"
                    minDate={
                      this.state.enterDate ? this.state.enterDate : new Date()
                    }
                    locale="he"
                    dateFormat={
                      this.state.leaveDate
                        ? NOT_EMPTY_DATE_FORMAT
                        : DEFAULT_DATE_FORMAT
                    }
                  />
                  {/* <DatePicker
                    dir="ltr"
                    className="input-text input-text-grey input-date-picker"
                    onChange={this.onChangeLeaveDate}
                    value={this.state.leaveDate ? this.state.leaveDate : null}
                    clearIcon={null}
                    calendarIcon={null}
                    format={
                      this.state.leaveDate
                        ? NOT_EMPTY_DATE_FORMAT
                        : DEFAULT_DATE_FORMAT
                    }
                    locale={"he-He"}
                    placeholderText={false}
                    minDate={
                      this.state.enterDate ? this.state.enterDate : new Date()
                    }
                  /> */}

                  <span className="input-label-span-date">
                    תאריך יציאה מהדירה
                  </span>
                  <span className="input-border"></span>
                  {this.state.leaveDateValidate.error !== void 0 && (
                    <span className="personal-info-input-error span-error">
                      require
                    </span>
                  )}
                </label>
              </div>
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
)(PersonalInfoStep4);

export default withConnect;
