import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Link from "next/link";

import ChevronDown from "./../../public/icons/chevron-down-icon.svg";
import HeaderActions from "../../actions/header/header.actions";
import UserActions from "../../actions/users/users.actions";
import { logout } from "../../actions/common/common.actions";

class Account extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * handleClickOutside detect if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onSetToggleMenu(false);
    }
  }

  render() {
    const { firsName, lastName } = this.props;
    return (
      <Fragment>
        <div className="drop-menu-block" ref={this.setWrapperRef}>
          <button
            className="btn btn-white btn-medium"
            onClick={() => {
              this.props.onSetToggleMenu(!this.props.toggleMenu);
            }}
          >
            {firsName} {lastName}
            <img src={ChevronDown} className="icon-chevron-down" alt="" />
          </button>
          {this.props.toggleMenu ? (
            <nav className="drop-menu">
              <Link href="/signin">
                <a
                  onClick={() => {
                    this.props.onLogout();
                    localStorage.clear();
                  }}
                  className="drop-menu-link"
                >
                  <span className="icon icon-avatar"></span>
                  משתמש חדש
                </a>
              </Link>

              <Link href="/">
                <a
                  onClick={() => {
                    this.props.onLogout();
                    localStorage.clear();
                  }}
                  className="drop-menu-link"
                >
                  <span className="icon icon-cog"></span>
                  התנתק
                </a>
              </Link>
            </nav>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggleMenu: state.header.toggleMenu,
    userAuth: state.user.auth,
    firsName: state.user.first_name,
    lastName: state.user.last_name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetToggleMenu: action => {
      dispatch(HeaderActions.accountMenuToggle(action));
    },
    setUserData: action => {
      dispatch(UserActions.setUserData(action));
    },
    onLogout: action => {
      dispatch(logout(action));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
