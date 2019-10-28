import React, { Component, Fragment } from "react";
import Link from "next/link";
import cn from "classnames";
import UserActions from "../../actions/users/users.actions";

import "./PriceForm.scss";
import { stepper } from "../../actions/forms/forms.actions";
import { connect } from "react-redux";

class PriceForm extends Component {
  state = {
    total: 0,
    count: false
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.total) {
      this.setState({ count: true });
    }
  };

  createMarkup() {
    return { __html: this.props.PriceFormTitle };
  }

  render() {
    if (this.props.PriceFormTitle === void 0)
      throw new Error("PriceFormTitle is required");
    return (
      <Fragment>
        <div className="price-block-form">
          <div className="price-block-title">
            {this.props.PriceFormTitle ? (
              <h3
                className="price-title"
                dangerouslySetInnerHTML={this.createMarkup()}
              />
            ) : null}
          </div>
          <form
            className="price-form"
            id="price-form"
            onSubmit={this.onSubmit}
            noValidate
          >
            <input
              className="input-text input-grey btn-bold"
              id="price-number"
              type="number"
              placeholder="הכנס סכום"
              onChange={e => {
                this.setState({ total: e.target.value });
              }}
            />
            <div className={`price-block-description`}></div>
            <input
              className={cn("input-submit  btn-small", {
                "btn-white": this.state.count,
                "btn-blue": !this.state.count
              })}
              id="price-submit"
              type="submit"
              value="חשב"
            />
          </form>
          {!!this.state.total && this.state.count && (
            <div className="price-inner-content">
              <div className="total-price">
                <span className="price-sum">
                  {parseFloat(this.state.total * 0.025).toFixed(0)}
                </span>
                <span className="price-frequency">ש״ח לחודש</span>
              </div>
              <div className={`price-block-description`}>
                2.5% משכר הדירה החודשי
              </div>
              <p className="total-info">
                *השירות ניתן לשכר דירה של עד 7,000 ש״ח בחודש
              </p>
              <div className="btn-block">
                <Link
                  href={{
                    pathname: this.props.auth ? "/personal-info" : "/signin"
                  }}
                  as={`/personal-info/1`}
                >
                  <a
                    onClick={() => {
                      this.props.onSetStepper({ activeStep: 1 });
                      this.props.onSetUserData({ showStepsAfterLogin: true });
                    }}
                    className="btn btn-blue btn-small"
                  >
                    רוצה להתקדם
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.user.auth
});

function mapDispatchToProps(dispatch) {
  return {
    onSetStepper: action => {
      dispatch(stepper(action));
    },
    onSetUserData: action => {
      dispatch(UserActions.setUserData(action));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceForm);
