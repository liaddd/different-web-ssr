import React, { Component, Fragment } from "react";
import ClassName from "classnames";
import "./Modal.scss";
import { connect } from "react-redux";

class StartModal extends Component {
  state = {
    comment: "",
    star: 0,
    errorMessage: ""
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.comment) {
      // TODO create action
      this.props.onShowPopup(false);
    } else {
      this.setState({
        errorMessage: "מייל לא נכון"
      });
    }
  };
  onSetStar = star => {
    this.setState({ star: star + 1 });
  };
  render() {
    return (
      <Fragment>
        <div
          className={ClassName("modal-block modal-effect-slide", {
            "modal-show": this.props.show
          })}
        >
          {" "}
          {/*  add class  modal-show */}
          <div className="modal-overlay"></div>
          <div className="modal-content">
            <div className="modal-header">
              <span
                className="modal-close modal-close-icon"
                onClick={() => {
                  this.props.onShowPopup(false);
                }}
              ></span>
            </div>
            <div className="modal-inner-content">
              <div className="modal-user modal-user-icon-star"></div>
              <hr className="hr-style" />
              <form
                className="sub-wrapper"
                id="subscribe-form"
                onSubmit={this.onSubmit}
                noValidate
              >
                <div className="sub-block-title size22">דעתך חשובה לנו</div>
                <p className="sub-block-title size20">
                  נודה לך אם תוכל להביע דעתך על איכות השירות
                </p>
                <div className="star-wrapper">
                  {[1, 2, 3, 4, 5]
                    .reverse()
                    .map(star =>
                      this.state.star > star ? (
                        <div
                          key={star}
                          onClick={() => this.onSetStar(star)}
                          className="activeStar"
                        />
                      ) : (
                        <div
                          key={star}
                          onClick={() => this.onSetStar(star)}
                          className="starItem"
                        />
                      )
                    )}
                </div>
                <div className="sub-flex">
                  <p className="input-block input-width">
                    <label
                      htmlFor="input-contact-email"
                      className={ClassName({
                        "input-label": true,
                        "input-not-empty": this.state.comment.length > 0
                      })}
                    >
                      <input
                        className="input-email input-text-grey"
                        type="text"
                        id="input-contact-email"
                        placeholder="&nbsp;"
                        required
                        onChange={e => {
                          this.setState({ comment: e.target.value });
                        }}
                      />
                      <span className="input-label-span">פרט</span>
                      <span className="input-border"></span>
                    </label>
                  </p>
                </div>
                <p style={{ color: "#e7736d" }}>{this.state.errorMessage}</p>
                <div className="sub-flex">
                  <input
                    className={ClassName("input-submit  btn-small btn-blue")}
                    id="price-submit"
                    type="submit"
                    value="שלח"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.user.auth
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartModal);
