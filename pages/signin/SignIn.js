import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Link from "next/link";

import "./Authorization.scss";
import AuthorizationStep1 from "./Authorization/AuthorizationStep1";
import AuthorizationStep2 from "./Authorization/AuthorizationStep2";
import ModalAuthorization from "../../components/Modal/ModalAuthorization";
import ModalLoader from "../../components/Modal/ModalLoader";

class SignIn extends Component {
  state = { showBlockUser: false };
  hendleBlockUser = () => {
    this.setState({ showBlockUser: true });
  };
  render() {
    return (
      <Fragment>
        <div className="authorization-page">
          <header className="authorization-header">
            <div className="block-logo">
              <Link href="/">
                <div className="logo"></div>
              </Link>
            </div>
          </header>
          <div className="authorization-container">
            <div className="authorization-block-img authorization-img" />
            {this.props.user.successMessage ? (
              <AuthorizationStep2 hendleBlockUser={this.hendleBlockUser} />
            ) : (
              <AuthorizationStep1 hendleBlockUser={this.hendleBlockUser} />
            )}
          </div>
          <ModalAuthorization show={this.state.showBlockUser} />
          <ModalLoader show={this.props.user.showModal} />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
