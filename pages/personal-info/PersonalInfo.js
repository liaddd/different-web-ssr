import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ReactResizeDetector from "react-resize-detector";
import { withRouter } from "next/router";
import { get } from "lodash";
import "./PersonalInfo.scss";
import PersonalInfoStepMenu from "./PersonalInfoStepMenu";
import PersonalInfoSummary from "./PersonalInfoSummary";
import PersonalInfoStep1 from "./PersonalInfoStep1";
import PersonalInfoStep2 from "./PersonalInfoStep2";
import PersonalInfoStep3 from "./PersonalInfoStep3";
import PersonalInfoStep4 from "./PersonalInfoStep4";
import ModalLoader from "./../../components/Modal/ModalLoader";

class PersonalInfo extends Component {
  state = {
    width: 0,
    height: 0
  };

  // onResize
  onResize = (width, height) => {
    this.setState(prevProps => {
      return { ...prevProps, ...{ width, height } };
    });
  };

  handleRenderPersonalPage = page => {
    switch (page) {
      case 1:
        return (
          <PersonalInfoStep1
            width={this.state.width}
            height={this.state.height}
          />
        );
      case 2:
        return (
          <PersonalInfoStep2
            width={this.state.width}
            height={this.state.height}
          />
        );
      case 3:
        return (
          <PersonalInfoStep3
            width={this.state.width}
            height={this.state.height}
          />
        );
      case 4:
        return (
          <PersonalInfoStep4
            width={this.state.width}
            height={this.state.height}
          />
        );
      default:
        return (
          <PersonalInfoStep1
            width={this.state.width}
            height={this.state.height}
          />
        );
    }
  };
  render() {
    let currentPath = get(this.props, "stepper.activeStep", 1);
    return (
      <Fragment>
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize}>
          <div className="personal-info-page bg-image">
            <div className="container">
              <div className="personal-info-page-block">
                <PersonalInfoStepMenu />
                <PersonalInfoSummary
                  width={this.state.width}
                  height={this.state.height}
                />
                <section className="personal-info-block">
                  {this.handleRenderPersonalPage(currentPath)}
                </section>
              </div>
            </div>
            <ModalLoader show={this.props.user.showModal} />
          </div>
        </ReactResizeDetector>
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
  return {};
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PersonalInfo));

export default withConnect;
