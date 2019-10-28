import React, { Component, Fragment } from "react";
import UserActions from "../../actions/users/users.actions";
import { connect } from "react-redux";
import { stepper_toggle } from "../../actions/forms/forms.actions";
import Router from "next/router";

class PersonalInfoStepMenu extends Component {
  render() {
    return (
      <Fragment>
        <div className="personal-info-step-menu-block">
          <nav className="personal-info-step-menu">
            <input
              type="radio"
              className="personal-info-step-input"
              id="personal-info-step-input-1"
              checked={this.props.stepper.activeStep === 1}
              onChange={e => {
                e.preventDefault();
              }}
            />
            <label
              className="personal-info-step-label"
              onClick={() => {
                if (this.props.stepper.step1.edit) {
                  this.props.onSetStepper({ activeStep: 1 });
                  Router.push("/personal-info", "/personal-info/1", {
                    shallow: true
                  });
                }
              }}
            ></label>
            <input
              type="radio"
              className="personal-info-step-input"
              id="personal-info-step-input-2"
              checked={this.props.stepper.activeStep === 2}
              onChange={e => {
                e.preventDefault();
              }}
            />
            <label
              className="personal-info-step-label"
              onClick={() => {
                if (this.props.stepper.step2.edit) {
                  this.props.onSetStepper({ activeStep: 2 });
                  Router.push("/personal-info", "/personal-info/2", {
                    shallow: true
                  });
                }
              }}
            ></label>
            <input
              type="radio"
              className="personal-info-step-input"
              id="personal-info-step-input-3"
              checked={this.props.stepper.activeStep === 3}
              onChange={e => {
                e.preventDefault();
              }}
            />
            <label
              className="personal-info-step-label"
              onClick={() => {
                if (this.props.stepper.step3.edit) {
                  this.props.onSetStepper({ activeStep: 3 });
                  Router.push("/personal-info", "/personal-info/3", {
                    shallow: true
                  });
                }
              }}
            ></label>

            <input
              type="radio"
              className="personal-info-step-input"
              id="personal-info-step-input-4"
              checked={this.props.stepper.activeStep === 4}
              onChange={e => {
                e.preventDefault();
              }}
            />
            <label
              className="personal-info-step-label"
              onClick={() => {
                if (this.props.stepper.step4.edit) {
                  this.props.onSetStepper({ activeStep: 4 });
                  Router.push("/personal-info", "/personal-info/4", {
                    shallow: true
                  });
                }
              }}
            ></label>
          </nav>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    stepper: state.forms.stepper
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetStepper: action => {
      dispatch(stepper_toggle(action));
    },
    onSetUserData: action => {
      dispatch(UserActions.setUserData(action));
    }
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfoStepMenu);

export default withConnect;
