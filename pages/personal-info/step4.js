import React, { Component } from "react";
import { connect } from "react-redux";
import PersonalInfoStep4 from "./PersonalInfoStep4";
import Header from "../../components/Header/Header";
import ReactResizeDetector from "react-resize-detector";
import ModalLoader from "./../../components/Modal/ModalLoader";
import PersonalInfoStepMenu from "./PersonalInfoStepMenu";
import PersonalInfoSummary from "./PersonalInfoSummary";
import Head from "./../head";
import "./PersonalInfo.scss";
class Step4 extends Component {
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
  render() {
    return (
      <>
        <Head title="DiffeRent" ogTitle="הצטרפות לשירות">
          <div lang="he" dir="rtl" className="app personal-info">
            <Header />
            <ReactResizeDetector
              handleWidth
              handleHeight
              onResize={this.onResize}
            >
              <div className="personal-info-page bg-image">
                <div className="container">
                  <div className="personal-info-page-block">
                    <PersonalInfoStepMenu />
                    <PersonalInfoSummary
                      width={this.state.width}
                      height={this.state.height}
                    />
                    <section className="personal-info-block">
                      <PersonalInfoStep4
                        width={this.state.width}
                        height={this.state.height}
                      />
                    </section>
                  </div>
                </div>
                <ModalLoader show={this.props.user.showModal} />
              </div>
            </ReactResizeDetector>
          </div>
        </Head>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(Step4);
