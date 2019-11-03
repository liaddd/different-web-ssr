import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { get } from "lodash";
import "./../Authorization.scss";
import Api from "../../../utils/requestClient/requests";
import UserActions from "../../../actions/users/users.actions";
import Router from "next/router";
import { setCookie } from "../../../utils/cookie";
class AuthorizationStep2 extends Component {
  state = {
    seconds: 59,
    error: void 0
  };

  constructor(props) {
    super(props);

    this.code1 = React.createRef();
    this.code2 = React.createRef();
    this.code3 = React.createRef();
    this.code4 = React.createRef();

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);

    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  // startTimer
  startTimer() {
    this.timer = setInterval(this.countDown, 1000);
  }

  // stopTimer
  stopTimer() {
    if (this.timer) clearInterval(this.timer);
  }

  // countDown
  countDown() {
    const { onSetUserData } = this.props;
    // if (this.state.seconds === 0) {
    //     onSetUserData({successMessage: null})
    // }
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;

    if (seconds !== 0) {
      this.setState({
        seconds: seconds
      });
    } else {
      this.stopTimer();

      this.setState(prevState => {
        return { seconds: 0 };
      });

      onSetUserData({ successMessage: null });
    }
  }

  // componentWillUnmount
  componentWillUnmount() {
    this.stopTimer();
  }
  get checkCode() {
    const { code1, code2, code3, code4 } = this;
    return code1.value && code2.value && code3.value && code4.value;
  }
  // onSubmitForm is action to submit form
  onSubmitForm = e => {
    e.preventDefault();
    if (this.state.seconds === 0) {
      return;
    }
    const { code1, code2, code3, code4 } = this;
    const code = `${code1.value}${code2.value}${code3.value}${code4.value}`;

    const requestData = {
      phone: this.props.user.phone,
      code,
      fcm_token: "someKey"
    };

    this.stopTimer();
    this.props.onSetUserData({ showModal: true });

    Api.auth(requestData)
      .then(data => {
        data.data.showModal = false;
        setCookie("global_token", data.data.auth.global_token);
        this.props.onSetUserData(data.data);
        Router.push("/personal-info");
        /* if (this.props.user.showStepsAfterLogin) {
          Router.push("/personal-info");
        } else {
          Router.push("/");
        } */
      })
      .catch(err => {
        this.code1 = React.createRef();
        this.code2 = React.createRef();
        this.code3 = React.createRef();
        this.code4 = React.createRef();
        if (get(err, "response.data.errorCode") === "BLOCKED_USER") {
          this.props.hendleBlockUser();
        }
        this.props.onSetUserData({ showModal: false });
        this.setState({ error: err.toString() });
      });
  };

  onChange = e => {
    if (e.target.value) {
      this.onSubmitForm(e);
      this.code4.focus();
    }
  };

  render() {
    return (
      <Fragment>
        <div className="authorization-block">
          <div className="authorization-block-form">
            <div className="authorization-block-title">
              <div className="authorization-title">הזן את הקוד שקיבלת</div>
              <div className="authorization-subtitle">
                בSMS למספר <span dir="ltr">{this.props.user.phone}</span>
              </div>
            </div>
            <form
              className="authorization-form"
              id="authorization-form"
              onSubmit={e => this.onSubmitForm(e)}
              noValidate
            >
              <div className="authorization-block-input" dir="ltr">
                <input
                  className="authorization-input-number input-number authorization-input"
                  type="number"
                  autoFocus
                  ref={node => (this.code1 = node)}
                  onChange={() => {
                    this.code2.focus();
                  }}
                />
                <input
                  className="authorization-input-number input-number authorization-input"
                  type="number"
                  ref={node => (this.code2 = node)}
                  onChange={() => {
                    this.code3.focus();
                  }}
                />
                <input
                  className="authorization-input-number input-number authorization-input"
                  type="number"
                  ref={node => (this.code3 = node)}
                  onChange={() => {
                    this.code4.focus();
                  }}
                />
                <input
                  className="authorization-input-number input-number authorization-input"
                  type="number"
                  ref={node => (this.code4 = node)}
                  onChange={e => this.onChange(e)}
                />
                {this.state.error ? (
                  <span className="authorization-input-error">קוד שגוי</span>
                ) : null}
              </div>
              <div className="authorization-block-description">
                לא הגיע? תוכל לשלוח שוב בחלוף דקה
              </div>
              <div className="authorization-block-submit">
                <input
                  className={cn({
                    "authorization-timer-submit": true,
                    "input-submit": true,
                    "btn-grey": this.state.seconds === 0,
                    "btn-blue": this.state.seconds !== 0,
                    "btn-normal": true,
                    "btn-bold": true
                  })}
                  id="authorization-timer-submit"
                  type="submit"
                  value={
                    this.checkCode
                      ? "שליחה"
                      : `00:${
                          this.state.seconds > 9
                            ? this.state.seconds
                            : `0${this.state.seconds}`
                        }`
                  }
                />
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

function mapDispatchToProps(dispatch) {
  return {
    onSetUserData: action => {
      dispatch(UserActions.setUserData(action));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizationStep2);
