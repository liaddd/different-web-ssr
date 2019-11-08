import React, { Component, Fragment } from "react";
import Link from "next/link";
import Router from "next/router";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import ReactResizeDetector from "react-resize-detector";
import { get } from "lodash";
import { getCookie } from "../../utils/cookie";
import Api from "../../utils/requestClient/requests";
import "./Header.scss";
import AccountComponent from "./../Account/Account.component";
import { logout } from "../../actions/common/common.actions";
import UserActions from "../../actions/users/users.actions";
import { stepper } from "../../actions/forms/forms.actions";
// MAIN_HEADER_CLASS is main header class
const MAIN_HEADER_CLASS = "main-header";
// ADDITIONAL_HEADER_CLASS detected scroll page for show static header
const ADDITIONAL_HEADER_CLASS = "scroll";
// DETECT_BROWSER_WITH detect browser with distance to detect show or hide toggleMenu inside header
const DETECT_BROWSER_WITH = 1024;

// Header
class Header extends Component {
  state = {
    width: 0,
    height: 0,
    toggleButton: false
  };

  constructor(props) {
    super(props);
    this._header = React.createRef();
  }

  componentWillUnmount() {
    this._unbindScroll();
  }
  componentDidMount() {
    this._bindScroll();
    this._handleScroll();
    const global_token = getCookie("global_token");
    if (!this.props.userAuth && global_token) {
      Api.authByToken(global_token)
        .then(data => {
          this.props.onSetUserData(data.data);
        })
        .catch(err => {
          console.error("Error get User", err);
        });
    }
    // window.scrollTo(0, 0); //? scroll to top each time component is mounted.
  }

  // _unbindScroll is remove detection header block position
  _unbindScroll = () => {
    window.removeEventListener("scroll", this._handleScroll);
  };

  // _bindScroll is bind detection header block position
  _bindScroll = () => {
    // Use passive event listener if available
    let supportsPassive = false;
    try {
      const opts = Object.defineProperty({}, "passive", {
        get: () => {
          supportsPassive = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e) {
      console.log("ERROR:", e);
      if (get(e, "response.data.errorCode") === "UNAUTHORIZED") {
        this.props.onLogout();
        Router.push("/");
      }
    }
    window.addEventListener(
      "scroll",
      this._handleScroll,
      supportsPassive ? { passive: true } : false
    );
  };

  // _handleScroll is detect header block position
  _handleScroll = () => {
    const top =
      document.documentElement.scrollTop ||
      document.body.parentNode.scrollTop ||
      document.body.scrollTop;

    // Test < 1 since Safari's rebound effect scrolls past the top
    if (top < 1) {
      const className = `${MAIN_HEADER_CLASS}`;
      this._header.className = className;
    } else {
      const className = `${MAIN_HEADER_CLASS}  ${ADDITIONAL_HEADER_CLASS}`;
      this._header.className = className;
    }
  };
  // onResize
  onResize = (width, height) => {
    this.setState(prevProps => {
      return { ...prevProps, ...{ width, height } };
    });
  };

  onClickToggleButton = e => {
    this.setState(prevState => {
      return { ...prevState, ...{ toggleButton: !prevState.toggleButton } };
    });
  };

  render() {
    const activeLink = get(this.props, "router.pathname");
    return (
      <Fragment>
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize}>
          <header
            className="main-header"
            ref={ref => {
              this._header = ref;
            }}
          >
            <div className="top-block-container">
              <div className="block-toggle-menu">
                <button
                  className="toggle-menu"
                  type="button"
                  onClick={e => this.onClickToggleButton(e)}
                >
                  <span></span>
                </button>
              </div>
              <div className="block-logo">
                <Link href="/">
                  <a className="logo" />
                </Link>
              </div>
              {this.state.toggleButton ||
              this.state.width > DETECT_BROWSER_WITH ? (
                <nav className="main-menu container flex">
                  <Link href="/about-us">
                    <a
                      className={
                        activeLink === "/about-us"
                          ? "menu-link active"
                          : "menu-link"
                      }
                    >
                      אודותינו
                    </a>
                  </Link>
                  <Link href="/questions-and-answers">
                    <a
                      className={
                        activeLink === "/questions-and-answers"
                          ? "menu-link active"
                          : "menu-link"
                      }
                    >
                      {" "}
                      שאלות ותשובות
                    </a>
                  </Link>
                  <Link href="/cabinet">
                    <a
                      className={
                        activeLink === "/cabinet"
                          ? "menu-link active"
                          : "menu-link"
                      }
                    >
                      האזור האישי שלי
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a
                      className={
                        activeLink === "/contact"
                          ? "menu-link active"
                          : "menu-link"
                      }
                    >
                      יצירת קשר
                    </a>
                  </Link>

                  <Link href="/blog">
                    <a
                      className={
                        activeLink === "/blog"
                          ? "menu-link active"
                          : "menu-link"
                      }
                    >
                      הבלוג שלנו
                    </a>
                  </Link>
                  {/* <a href="https://blog.diffe-rent.co.il" className="menu-link">
                    הבלוג שלנו
                  </a> */}

                  {/* activeLink !== "/personal-info" && (
                    <Link
                      href={{
                        pathname: this.props.userAuth
                          ? "/personal-info"
                          : "/signin"
                      }}
                      as={{
                        pathname: this.props.userAuth
                          ? `/personal-info/${this.props.step}`
                          : "/signin"
                      }}
                    >
                      <a
                        className="btn btn-blue btn-medium menu-btn-link"
                        onClick={() => {
                          this.props.onSetUserData({
                            showStepsAfterLogin: true
                          });
                          this.props.onSetStepper({
                            activeStep: this.props.step
                          });
                        }}
                      >
                        רוצה בטחון בשכירות
                      </a>
                    </Link>
                  ) */}
                </nav>
              ) : null}
              <div className="block-link">
                {this.props.userAuth ? (
                  <AccountComponent />
                ) : (
                  <Link href="/signin">
                    <a className="btn btn-white btn-medium"> אני בעל דירה</a>
                  </Link>
                )}
              </div>
            </div>
          </header>
        </ReactResizeDetector>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
    userAuth: state.user.auth,
    step: state.forms.stepper.activeStep
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetUserData: action => {
      dispatch(UserActions.setUserData(action));
    },
    onSetStepper: action => {
      dispatch(stepper(action));
    },
    onLogout: action => {
      dispatch(logout(action));
    }
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));

export default withConnect;
