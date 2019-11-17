import React, { Component, Fragment } from "react";
import Router from "next/router";

import "./MyProfile.scss";
import MyProfileEmpty from "./MyProfileEmpty";
import MyProfileWithOrders from "./MyProfileWithOrders";
import { connect } from "react-redux";
import { get } from "lodash";
import { setContractsData } from "../../actions/users/users.actions";
import API from "../../utils/requestClient/requests";
import { logout } from "../../actions/common/common.actions";

class MyProfile extends Component {
  componentDidMount() {
    const token = get(this.props, "userAuth.session_token");
    if (token) {
      API.getContracts(token)
        .then(res => {
          this.props.onSetContracts(res.data);
        })
        .catch(e => {
          console.log("error", e);
          if (get(e, "response.data.errorCode") === "UNAUTHORIZED") {
            this.props.onLogout();
            Router.push("/");
          }
        });
    }
  }

  render() {
    const { contracts, userAuth, fName, lName, step } = this.props;
    return (
      <Fragment>
        <div className="bg-image myprofile-page">
          <div className="container">
            <div className="myprofile-header">
              <span className="myprofile-header-title">הדירות שלי </span>
              <span className="myprofile-sum">
                {contracts ? contracts.length : 0}
              </span>
            </div>
            {contracts && contracts.length > 0 ? (
              <MyProfileWithOrders
                contracts={contracts}
                lName={lName}
                fName={fName}
              />
            ) : (
              <MyProfileEmpty userAuth={userAuth} step={step} />
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    contracts: state.user.contracts,
    userAuth: state.user.auth,
    fName: state.user.first_name,
    lName: state.user.last_name,
    step: get(state.forms, "stepper.activeStep", 1)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetContracts: action => {
      dispatch(setContractsData(action));
    },
    onLogout: action => {
      dispatch(logout(action));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
