import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { get } from "lodash";
import CurrentTenantBlock from "./CurrentTenantBlock";
import { stepper } from "../../actions/forms/forms.actions";
import { STEPPER_STEP3 } from "../../actions/forms/forms.actions.constants";
import { animateScroll as scroll } from "react-scroll";

class PersonalInfoStep3 extends Component {
  state = {
    activeRadioButton: 2
  };

  onRadioButtonChanged = activeRadioButton => {
    this.setState({ activeRadioButton });
  };
  componentDidMount() {
    this.props.height &&
      scroll.scrollTo(this.props.height - this.props.height / 2);
  }
  render() {
    const { activeStep } = this.props.stepper;
    return (
      <Fragment>
        <div
          className={cn({
            "personal-info-section": true,
            "personal-info-section-3": true,
            "personal-info-section-show":
              get(this.props, "stepper.activeStep") === 3
                ? this.props.stepper.mobileToggleStep3
                : false,
            "personal-info-section-active": activeStep === STEPPER_STEP3
          })}
        >
          <div className="personal-info-toggle-block">
            <div className="personal-info-toggle">
              <input
                type="radio"
                id="personal-info-tenant"
                checked={this.state.activeRadioButton === 2}
                onChange={e => e.preventDefault()}
              />

              <label onClick={e => this.onRadioButtonChanged(2)}>
                דייר פוטנציאלי{" "}
              </label>

              <input
                type="radio"
                id="personal-info-new-tenant"
                checked={this.state.activeRadioButton === 1}
                onChange={e => e.preventDefault()}
              />
              <label onClick={e => this.onRadioButtonChanged(1)}>
                דייר שגר בדירה כרגע
              </label>
            </div>
          </div>
          <CurrentTenantBlock
            width={this.props.width}
            activeRadioButton={this.state.activeRadioButton}
            height={this.props.height}
          />
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
    }
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfoStep3);

export default withConnect;
