module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/common/common.actions.constants.js":
/*!****************************************************!*\
  !*** ./actions/common/common.actions.constants.js ***!
  \****************************************************/
/*! exports provided: RESET_STORE, MOBILE_VIEW_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_STORE", function() { return RESET_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILE_VIEW_SIZE", function() { return MOBILE_VIEW_SIZE; });
// RESET_STORE is reset for logout
const RESET_STORE = "RESET_STORE"; //

const MOBILE_VIEW_SIZE = 767;

/***/ }),

/***/ "./actions/common/common.actions.js":
/*!******************************************!*\
  !*** ./actions/common/common.actions.js ***!
  \******************************************/
/*! exports provided: logout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _common_actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.actions.constants */ "./actions/common/common.actions.constants.js");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/cookie */ "./utils/cookie.js");


/*
 * action creators
 */
// user authentication action

function logout() {
  Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_1__["removeCookie"])("global_token");
  return {
    type: _common_actions_constants__WEBPACK_IMPORTED_MODULE_0__["RESET_STORE"]
  };
}
/* harmony default export */ __webpack_exports__["default"] = ({
  logout
});

/***/ }),

/***/ "./actions/forms/forms.actions.constants.js":
/*!**************************************************!*\
  !*** ./actions/forms/forms.actions.constants.js ***!
  \**************************************************/
/*! exports provided: FORM_STEPPER_STEP1, FORM_STEPPER_STEP2, FORM_STEPPER_STEP3, FORM_STEPPER_STEP4, MOBILE_TOGGLE_STEP_3, STEPPER_STEP1, STEPPER_STEP2, STEPPER_STEP3, STEPPER_STEP4, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_STEPPER_STEP1", function() { return FORM_STEPPER_STEP1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_STEPPER_STEP2", function() { return FORM_STEPPER_STEP2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_STEPPER_STEP3", function() { return FORM_STEPPER_STEP3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_STEPPER_STEP4", function() { return FORM_STEPPER_STEP4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILE_TOGGLE_STEP_3", function() { return MOBILE_TOGGLE_STEP_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPPER_STEP1", function() { return STEPPER_STEP1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPPER_STEP2", function() { return STEPPER_STEP2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPPER_STEP3", function() { return STEPPER_STEP3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPPER_STEP4", function() { return STEPPER_STEP4; });
const FORM_STEPPER_STEP1 = 'FORM_STEPPER_STEP1';
const FORM_STEPPER_STEP2 = 'FORM_STEPPER_STEP2';
const FORM_STEPPER_STEP3 = 'FORM_STEPPER_STEP3';
const FORM_STEPPER_STEP4 = 'FORM_STEPPER_STEP4';
const MOBILE_TOGGLE_STEP_3 = 'MOBILE_TOGGLE_STEP_3';
const STEPPER_STEP1 = 1;
const STEPPER_STEP2 = 2;
const STEPPER_STEP3 = 3;
const STEPPER_STEP4 = 4;
/* harmony default export */ __webpack_exports__["default"] = ({
  FORM_STEPPER_STEP1,
  FORM_STEPPER_STEP2,
  FORM_STEPPER_STEP3,
  FORM_STEPPER_STEP4,
  MOBILE_TOGGLE_STEP_3
});

/***/ }),

/***/ "./actions/forms/forms.actions.js":
/*!****************************************!*\
  !*** ./actions/forms/forms.actions.js ***!
  \****************************************/
/*! exports provided: stepper, stepper_toggle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepper", function() { return stepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepper_toggle", function() { return stepper_toggle; });
/* harmony import */ var _forms_actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.actions.constants */ "./actions/forms/forms.actions.constants.js");

/*
 * action creators
 */
// stepper action

function stepper(stepper) {
  return {
    type: _forms_actions_constants__WEBPACK_IMPORTED_MODULE_0__["FORM_STEPPER_STEP1"],
    payload: {
      stepper
    }
  };
} // MOBILE_TOGGLE_STEP_3 action

function stepper_toggle(stepper) {
  return {
    type: _forms_actions_constants__WEBPACK_IMPORTED_MODULE_0__["MOBILE_TOGGLE_STEP_3"],
    payload: {
      stepper
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = ({
  stepper,
  stepper_toggle
});

/***/ }),

/***/ "./actions/header/header.actions.constants.js":
/*!****************************************************!*\
  !*** ./actions/header/header.actions.constants.js ***!
  \****************************************************/
/*! exports provided: TOGGLE_ACCOUNT_MENU, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_ACCOUNT_MENU", function() { return TOGGLE_ACCOUNT_MENU; });
/*
 * action types
 */
const TOGGLE_ACCOUNT_MENU = 'TOGGLE_ACCOUNT_MENU';
/* harmony default export */ __webpack_exports__["default"] = ({
  TOGGLE_ACCOUNT_MENU
});

/***/ }),

/***/ "./actions/header/header.actions.js":
/*!******************************************!*\
  !*** ./actions/header/header.actions.js ***!
  \******************************************/
/*! exports provided: accountMenuToggle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountMenuToggle", function() { return accountMenuToggle; });
/* harmony import */ var _header_actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.actions.constants */ "./actions/header/header.actions.constants.js");

/*
 * action creators
 */
// user authentication action

function accountMenuToggle(toggleMenu) {
  return {
    type: _header_actions_constants__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_ACCOUNT_MENU"],
    payload: {
      toggleMenu
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = ({
  accountMenuToggle
});

/***/ }),

/***/ "./actions/users/users.actions.constants.js":
/*!**************************************************!*\
  !*** ./actions/users/users.actions.constants.js ***!
  \**************************************************/
/*! exports provided: SET_AUTHENTICATION, SET_USER_DATA, SET_USER_TOKEN, SET_CONTRACTS_DATA, SET_SUMMARY_BUTTONS_COUNT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTHENTICATION", function() { return SET_AUTHENTICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_DATA", function() { return SET_USER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_TOKEN", function() { return SET_USER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CONTRACTS_DATA", function() { return SET_CONTRACTS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SUMMARY_BUTTONS_COUNT", function() { return SET_SUMMARY_BUTTONS_COUNT; });
/*
 * action types
 */
const SET_AUTHENTICATION = "SET_AUTHENTICATION";
const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_TOKEN = "SET_USER_TOKEN";
const SET_CONTRACTS_DATA = "SET_CONTRACTS_DATA";
const SET_SUMMARY_BUTTONS_COUNT = "SET_SUMMARY_BUTTONS_COUNT";
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_AUTHENTICATION,
  SET_USER_DATA,
  SET_CONTRACTS_DATA,
  SET_SUMMARY_BUTTONS_COUNT,
  SET_USER_TOKEN
});

/***/ }),

/***/ "./actions/users/users.actions.js":
/*!****************************************!*\
  !*** ./actions/users/users.actions.js ***!
  \****************************************/
/*! exports provided: setAuthenticationToken, setUserData, setContractsData, setChangedUsersCount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthenticationToken", function() { return setAuthenticationToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserData", function() { return setUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContractsData", function() { return setContractsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChangedUsersCount", function() { return setChangedUsersCount; });
/* harmony import */ var _users_actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.actions.constants */ "./actions/users/users.actions.constants.js");

/*
 * action creators
 */
// user authentication action

function setAuthenticationToken(global_token) {
  return {
    type: _users_actions_constants__WEBPACK_IMPORTED_MODULE_0__["SET_USER_TOKEN"],
    payload: {
      global_token
    }
  };
} // user data action

function setUserData(data) {
  return {
    type: _users_actions_constants__WEBPACK_IMPORTED_MODULE_0__["SET_USER_DATA"],
    payload: {
      data
    }
  };
}
function setContractsData(data) {
  return {
    type: _users_actions_constants__WEBPACK_IMPORTED_MODULE_0__["SET_CONTRACTS_DATA"],
    payload: data
  };
}
function setChangedUsersCount(data) {
  return {
    type: _users_actions_constants__WEBPACK_IMPORTED_MODULE_0__["SET_SUMMARY_BUTTONS_COUNT"],
    payload: data
  };
}
/* harmony default export */ __webpack_exports__["default"] = ({
  setAuthenticationToken,
  setUserData,
  setContractsData,
  setChangedUsersCount
});

/***/ }),

/***/ "./components/Account/Account.component.js":
/*!*************************************************!*\
  !*** ./components/Account/Account.component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_icons_chevron_down_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../public/icons/chevron-down-icon.svg */ "./public/icons/chevron-down-icon.svg");
/* harmony import */ var _public_icons_chevron_down_icon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_icons_chevron_down_icon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_header_header_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/header/header.actions */ "./actions/header/header.actions.js");
/* harmony import */ var _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/users/users.actions */ "./actions/users/users.actions.js");
/* harmony import */ var _actions_common_common_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/common/common.actions */ "./actions/common/common.actions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class Account extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
    const {
      firsName,
      lastName
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
      className: "drop-menu-block",
      ref: this.setWrapperRef
    }, __jsx("button", {
      className: "btn btn-white btn-medium",
      onClick: () => {
        this.props.onSetToggleMenu(!this.props.toggleMenu);
      }
    }, firsName, " ", lastName, __jsx("img", {
      src: _public_icons_chevron_down_icon_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
      className: "icon-chevron-down",
      alt: ""
    })), this.props.toggleMenu ? __jsx("nav", {
      className: "drop-menu"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/signin"
    }, __jsx("a", {
      onClick: () => {
        this.props.onLogout();
        localStorage.clear();
      },
      className: "drop-menu-link"
    }, __jsx("span", {
      className: "icon icon-avatar"
    }), "\u05DE\u05E9\u05EA\u05DE\u05E9 \u05D7\u05D3\u05E9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/"
    }, __jsx("a", {
      onClick: () => {
        this.props.onLogout();
        localStorage.clear();
      },
      className: "drop-menu-link"
    }, __jsx("span", {
      className: "icon icon-cog"
    }), "\u05D4\u05EA\u05E0\u05EA\u05E7"))) : null));
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
      dispatch(_actions_header_header_actions__WEBPACK_IMPORTED_MODULE_4__["default"].accountMenuToggle(action));
    },
    setUserData: action => {
      dispatch(_actions_users_users_actions__WEBPACK_IMPORTED_MODULE_5__["default"].setUserData(action));
    },
    onLogout: action => {
      dispatch(Object(_actions_common_common_actions__WEBPACK_IMPORTED_MODULE_6__["logout"])(action));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Account));

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.scss */ "./components/Footer/Footer.scss");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_icons_different_logo_white_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../public/icons/different_logo_white.png */ "./public/icons/different_logo_white.png");
/* harmony import */ var _public_icons_different_logo_white_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_icons_different_logo_white_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_icons_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../public/icons/facebook-icon.svg */ "./public/icons/facebook-icon.svg");
/* harmony import */ var _public_icons_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_icons_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_icons_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../public/icons/linkedin-icon.svg */ "./public/icons/linkedin-icon.svg");
/* harmony import */ var _public_icons_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_icons_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const services = ['הבטחת שכר דירה', 'פינוי שוכר', 'תשלום שכר דירה בכרטיס אשראי', 'בדיקת רקע של שוכרים'];

const Footer = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("footer", {
    className: "footer"
  }, __jsx("div", {
    className: "section section-footer"
  }, __jsx("div", {
    className: "footer-block"
  }, __jsx("div", {
    className: "logo-block"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("div", {
    className: "logo-link"
  }, __jsx("img", {
    className: "logo logo-grey",
    src: _public_icons_different_logo_white_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "DiffeRent"
  })))), __jsx("div", {
    className: "follow-block"
  }, __jsx("button", {
    className: "icon-facebook icon-dims"
  }, __jsx("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: "https://www.facebook.com/DiffeRent-%D7%9E%D7%91%D7%98%D7%99%D7%97%D7%99%D7%9D-%D7%9C%D7%9A-%D7%90%D7%AA-%D7%A9%D7%9B%D7%A8-%D7%94%D7%93%D7%99%D7%A8%D7%94-482879752481635"
  }, __jsx("img", {
    src: _public_icons_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "icon facebook"
  }))), __jsx("button", {
    className: "icon-linkedin icon-dims"
  }, __jsx("img", {
    src: _public_icons_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "icon linkedin"
  }))), __jsx("div", {
    className: "help-block"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact"
  }, __jsx("div", {
    className: "btn btn-circle help-link"
  }, "\u05D0\u05E4\u05E9\u05E8", __jsx("br", null), "\u05DC\u05E2\u05D6\u05D5\u05E8?")))), __jsx("div", {
    className: "footer-container"
  }, __jsx("div", {
    className: "links-block"
  }, __jsx("nav", {
    className: "links-block-row"
  }, __jsx("span", {
    className: "links-block-title"
  }, __jsx("strong", null, "\u05D4\u05D7\u05D1\u05E8\u05D4")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about-us"
  }, __jsx("a", null, "\u05D0\u05D5\u05D3\u05D5\u05EA\u05D9\u05E0\u05D5")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact"
  }, __jsx("a", null, "\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/questions-and-answers"
  }, __jsx("a", null, "\u05E9\u05D0\u05DC\u05D5\u05EA \u05D5\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA"))), __jsx("nav", {
    className: "links-block-row"
  }, __jsx("span", {
    className: "links-block-title"
  }, __jsx("strong", null, "\u05EA\u05E0\u05D0\u05D9\u05DD ")), __jsx("a", {
    href: "https://diffe-rent.s3-eu-west-1.amazonaws.com/%D7%9E%D7%93%D7%99%D7%A0%D7%99%D7%95%D7%AA+%D7%94%D7%A4%D7%A8%D7%98%D7%99%D7%95%D7%AA-DiffeRent.pdf",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA"), __jsx("a", {
    href: "https://diffe-rent.s3-eu-west-1.amazonaws.com/%D7%AA%D7%A7%D7%A0%D7%95%D7%9F-+DiffeRent.pdf",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\u05EA\u05E7\u05E0\u05D5\u05DF \u05D4\u05D7\u05D1\u05E8\u05D4"), __jsx("a", {
    href: "https://diffe-rent.s3-eu-west-1.amazonaws.com/%D7%91%D7%98%D7%97%D7%95%D7%9F+%D7%91%D7%A9%D7%9B%D7%99%D7%A8%D7%95%D7%AA+-+DiffeRent.pdf",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\u05E9\u05D9\u05E8\u05D5\u05EA \u05D1\u05D8\u05D7\u05D5\u05DF \u05D1\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA")), __jsx("nav", {
    className: "links-block-row"
  }, __jsx("span", {
    className: "links-block-title"
  }, __jsx("strong", null, "\u05D4\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5")), services.map((service, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    key: index,
    href: {
      pathname: "/services"
    },
    as: `/services/${index + 1}`
  }, __jsx("a", null, service)))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Footer/Footer.scss":
/*!***************************************!*\
  !*** ./components/Footer/Footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-resize-detector */ "react-resize-detector");
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_resize_detector__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/cookie */ "./utils/cookie.js");
/* harmony import */ var _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/requestClient/requests */ "./utils/requestClient/requests.js");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Header.scss */ "./components/Header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Account_Account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../Account/Account.component */ "./components/Account/Account.component.js");
/* harmony import */ var _actions_common_common_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../actions/common/common.actions */ "./actions/common/common.actions.js");
/* harmony import */ var _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../actions/users/users.actions */ "./actions/users/users.actions.js");
/* harmony import */ var _actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../actions/forms/forms.actions */ "./actions/forms/forms.actions.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_1___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_1___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, key)); }); } } return target; }














 // MAIN_HEADER_CLASS is main header class

const MAIN_HEADER_CLASS = "main-header"; // ADDITIONAL_HEADER_CLASS detected scroll page for show static header

const ADDITIONAL_HEADER_CLASS = "scroll"; // DETECT_BROWSER_WITH detect browser with distance to detect show or hide toggleMenu inside header

const DETECT_BROWSER_WITH = 1024; // Header

class Header extends react__WEBPACK_IMPORTED_MODULE_7__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "state", {
      width: 0,
      height: 0,
      toggleButton: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "_unbindScroll", () => {
      window.removeEventListener("scroll", this._handleScroll);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "_bindScroll", () => {
      // Use passive event listener if available
      let supportsPassive = false;

      try {
        const opts = _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()({}, "passive", {
          get: () => {
            supportsPassive = true;
          }
        });

        window.addEventListener("test", null, opts);
      } catch (e) {
        console.log("ERROR:", e);

        if (Object(lodash__WEBPACK_IMPORTED_MODULE_12__["get"])(e, "response.data.errorCode") === "UNAUTHORIZED") {
          this.props.onLogout();
          next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/");
        }
      }

      window.addEventListener("scroll", this._handleScroll, supportsPassive ? {
        passive: true
      } : false);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "_handleScroll", () => {
      const top = document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop; // Test < 1 since Safari's rebound effect scrolls past the top

      if (top < 1) {
        const className = `${MAIN_HEADER_CLASS}`;
        this._header.className = className;
      } else {
        const className = `${MAIN_HEADER_CLASS}  ${ADDITIONAL_HEADER_CLASS}`;
        this._header.className = className;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "onResize", (width, height) => {
      this.setState(prevProps => {
        return _objectSpread({}, prevProps, {}, {
          width,
          height
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "onClickToggleButton", e => {
      this.setState(prevState => {
        return _objectSpread({}, prevState, {}, {
          toggleButton: !prevState.toggleButton
        });
      });
    });

    this._header = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
  }

  componentWillUnmount() {
    this._unbindScroll();
  }

  componentDidMount() {
    this._bindScroll();

    this._handleScroll();

    const global_token = Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_13__["getCookie"])("global_token");

    if (!this.props.userAuth && global_token) {
      _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_14__["default"].authByToken(global_token).then(data => {
        this.props.onSetUserData(data.data);
      }).catch(err => {
        console.error("Error get User", err);
      });
    } // window.scrollTo(0, 0); //? scroll to top each time component is mounted.

  } // _unbindScroll is remove detection header block position


  render() {
    const activeLink = Object(lodash__WEBPACK_IMPORTED_MODULE_12__["get"])(this.props, "router.pathname");
    return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, __jsx(react_resize_detector__WEBPACK_IMPORTED_MODULE_11___default.a, {
      handleWidth: true,
      handleHeight: true,
      onResize: this.onResize
    }, __jsx("header", {
      className: "main-header",
      ref: ref => {
        this._header = ref;
      }
    }, __jsx("div", {
      className: "top-block-container"
    }, __jsx("div", {
      className: "block-toggle-menu"
    }, __jsx("button", {
      className: "toggle-menu",
      type: "button",
      onClick: e => this.onClickToggleButton(e)
    }, __jsx("span", null))), __jsx("div", {
      className: "block-logo"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/"
    }, __jsx("a", {
      className: "logo"
    }))), this.state.toggleButton || this.state.width > DETECT_BROWSER_WITH ? __jsx("nav", {
      className: "main-menu container flex"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/about-us"
    }, __jsx("a", {
      className: activeLink === "/about-us" ? "menu-link active" : "menu-link"
    }, "\u05D0\u05D5\u05D3\u05D5\u05EA\u05D9\u05E0\u05D5")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/questions-and-answers"
    }, __jsx("a", {
      className: activeLink === "/questions-and-answers" ? "menu-link active" : "menu-link"
    }, " ", "\u05E9\u05D0\u05DC\u05D5\u05EA \u05D5\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/cabinet"
    }, __jsx("a", {
      className: activeLink === "/cabinet" ? "menu-link active" : "menu-link"
    }, "\u05D4\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D0\u05D9\u05E9\u05D9 \u05E9\u05DC\u05D9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/contact"
    }, __jsx("a", {
      className: activeLink === "/contact" ? "menu-link active" : "menu-link"
    }, "\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8")), __jsx("a", {
      href: "https://blog.diffe-rent.co.il",
      className: "menu-link"
    }, "\u05D4\u05D1\u05DC\u05D5\u05D2 \u05E9\u05DC\u05E0\u05D5")) : null, __jsx("div", {
      className: "block-link"
    }, this.props.userAuth ? __jsx(_Account_Account_component__WEBPACK_IMPORTED_MODULE_16__["default"], null) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/signin"
    }, __jsx("a", {
      className: "btn btn-white btn-medium"
    }, " \u05D0\u05E0\u05D9 \u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4")))))));
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
      dispatch(_actions_users_users_actions__WEBPACK_IMPORTED_MODULE_18__["default"].setUserData(action));
    },
    onSetStepper: action => {
      dispatch(Object(_actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_19__["stepper"])(action));
    },
    onLogout: action => {
      dispatch(Object(_actions_common_common_actions__WEBPACK_IMPORTED_MODULE_17__["logout"])(action));
    }
  };
};

const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Header));
/* harmony default export */ __webpack_exports__["default"] = (withConnect);

/***/ }),

/***/ "./components/Header/Header.scss":
/*!***************************************!*\
  !*** ./components/Header/Header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/PageHeader/PageHeader.js":
/*!*********************************************!*\
  !*** ./components/PageHeader/PageHeader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageHeader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHeader.scss */ "./components/PageHeader/PageHeader.scss");
/* harmony import */ var _PageHeader_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PageHeader_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class PageHeader extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    if (this.props.PageHeaderTitle === void 0) throw new Error("PageHeaderTitle is required");
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
      className: "section page-header-section page-header-img"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "page-header-block"
    }, this.props.PageHeaderTitle ? __jsx("h1", {
      className: "page-header-title"
    }, this.props.PageHeaderTitle) : null))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PageHeader);

/***/ }),

/***/ "./components/PageHeader/PageHeader.scss":
/*!***********************************************!*\
  !*** ./components/PageHeader/PageHeader.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

exports.RouterContext = _routerContext.RouterContext;

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextType = _router.RouterContext;
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/head.js":
/*!***********************!*\
  !*** ./pages/head.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const defaultDescription = "היא פלטפורמה דיגיטלית המבטיחה לכם בטחון ושקט נפשי בכל הנוגע לשכר הדירה שלכם. בעבור רק 2.5% מדמי השכירות החודשיים, מקבל בעל הדירה את הבטחת דמי השכירות עד תום החוזה, פינוי דייר סרבן ומציאת דייר חלופי במקרה הצורך DiffeRent";
const defaultTitle = "DiffeRent - מבטיחים לך את שכר הדירה";

const Head = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
  charset: "utf-8"
}), __jsx("link", {
  rel: "shortcut icon",
  href: "/img/home-banner-small.png"
}), __jsx("link", {
  rel: "canonical",
  href: "https://www.diffe-rent.co.il/"
}), __jsx("meta", {
  property: "og:url",
  content: "https://www.diffe-rent.co.il"
}), __jsx("meta", {
  property: "og:type",
  content: "website"
}), __jsx("meta", {
  property: "og:title",
  content: defaultTitle
}), __jsx("meta", {
  property: "og:description",
  content: defaultDescription
}), __jsx("meta", {
  property: "og:image",
  itemprop: "image",
  content: "https://www.diffe-rent.co.il/img/home-banner-small-test.png"
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), __jsx("meta", {
  name: "google-site-verification",
  content: "_kVAnQarUqnT7UKA321avgTWpBMJelwbfAfHfr69XrM"
}), __jsx("script", {
  id: "ze-snippet",
  src: "https://static.zdassets.com/ekr/snippet.js?key=01c76c6a-b643-4fa7-9a06-11d8c9ef03f5"
}), __jsx("title", null, props.title || defaultTitle), __jsx("meta", {
  name: "description",
  content: props.description || defaultDescription
})), props.children);

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./pages/services/OurServices.js":
/*!***************************************!*\
  !*** ./pages/services/OurServices.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PageHeader/PageHeader */ "./components/PageHeader/PageHeader.js");
/* harmony import */ var _OurServices_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OurServices.scss */ "./pages/services/OurServices.scss");
/* harmony import */ var _OurServices_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_OurServices_scss__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class Service extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    let output;

    let currentPath = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.props.router.asPath.split('/')[2]);

    console.log(currentPath);
    console.log(this.props);
    let pageHeader = '';

    switch (currentPath) {
      case 1:
        pageHeader = "הבטחת שכר דירה";
        output = __jsx("div", null, __jsx("p", null, __jsx("strong", null, "\u05D4\u05D1\u05D8\u05D7\u05EA \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 - \u05DE\u05D4\u05D9, \u05D5\u05DB\u05D9\u05E6\u05D3 \u05EA\u05D5\u05D5\u05D3\u05D0\u05D5 \u05DB\u05D9 \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DE\u05D2\u05D9\u05E2 \u05D0\u05DC\u05D9\u05DB\u05DD \u05DB\u05DE\u05D5 \u05E9\u05E6\u05E8\u05D9\u05DA?"), __jsx("br", null), __jsx("br", null), "\u05D1\u05E9\u05E2\u05D4 \u05D8\u05D5\u05D1\u05D4, \u05D0\u05EA\u05DD \u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4 - \u05D5\u05DB\u05E2\u05EA \u05D0\u05EA\u05DD \u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05E0\u05D9\u05DD \u05DC\u05D4\u05E9\u05DB\u05D9\u05E8 \u05D0\u05D5\u05EA\u05D4. \u05D0\u05EA\u05DD \u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05DC\u05E4\u05E8\u05E1\u05DD \u05DE\u05D5\u05D3\u05E2\u05D5\u05EA \u05D5\u05DE\u05D7\u05E4\u05E9\u05D9\u05DD \u05D0\u05E0\u05E9\u05D9\u05DD \u05D0\u05E9\u05E8 \u05D9\u05D9\u05DB\u05E0\u05E1\u05D5 \u05DB\u05D3\u05D9\u05D9\u05E8\u05D9\u05DD \u05D5\u05D1\u05E2\u05E6\u05DD \u05D9\u05D4\u05E4\u05DB\u05D5 \u05DC\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD. \u05D4\u05E9\u05DB\u05E8\u05EA \u05D3\u05D9\u05E8\u05D4 \u05DB\u05DE\u05D5\u05D1\u05DF \u05DE\u05D1\u05D8\u05D9\u05D7\u05D4 \u05D9\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05E8\u05D1\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E9\u05D1\u05D4\u05DD \u05D4\u05D5\u05D0 \u05D4\u05D4\u05DB\u05E0\u05E1\u05D4 \u05D4\u05E7\u05D1\u05D5\u05E2\u05D4 \u05D0\u05E9\u05E8 \u05EA\u05E7\u05D1\u05DC\u05D5 \u05DE\u05DB\u05DA. \u05D0\u05DA \u05DC\u05E6\u05D3 \u05D6\u05D0\u05EA, \u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4 \u05D0\u05EA\u05DD \u05E2\u05DC\u05D5\u05DC\u05D9\u05DD \u05DC\u05D4\u05D9\u05EA\u05E7\u05DC \u05D1\u05D1\u05E2\u05D9\u05D5\u05EA \u05D1\u05DB\u05DC \u05D4\u05E0\u05D5\u05D2\u05E2 \u05DC\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD, \u05D5\u05D1\u05E4\u05E8\u05D8 - \u05D4\u05D1\u05D8\u05D7\u05EA \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4. \u05E2\u05DC \u05E4\u05E0\u05D9\u05D5, \u05D6\u05D4 \u05E0\u05E8\u05D0\u05D4 \u05D0\u05D5\u05DC\u05D9 \u05E4\u05E9\u05D5\u05D8 - \u05DE\u05DB\u05D9\u05E0\u05D9\u05DD \u05D7\u05D5\u05D6\u05D4 \u05D8\u05D5\u05D1, \u05DE\u05D7\u05EA\u05D9\u05DE\u05D9\u05DD \u05D0\u05EA \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D5\u05D4\u05DB\u05DC \u05D1\u05E1\u05D3\u05E8. \u05D0\u05D1\u05DC \u05D7\u05E9\u05D5\u05D1 \u05DC\u05D6\u05DB\u05D5\u05E8 \u05E9\u05D2\u05DD \u05D7\u05EA\u05D9\u05DE\u05D4 \u05E2\u05DC \u05D7\u05D5\u05D6\u05D4, \u05DC\u05DE\u05E8\u05D1\u05D4 \u05D4\u05E6\u05E2\u05E8, \u05DC\u05D0 \u05EA\u05DE\u05D9\u05D3 \u05DE\u05D1\u05D8\u05D9\u05D7\u05D4 \u05E9\u05EA\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05DB\u05DC \u05D4\u05DE\u05D2\u05D9\u05E2 \u05DC\u05DB\u05DD. \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D0\u05EA\u05DD \u05E2\u05DC\u05D5\u05DC\u05D9\u05DD \u05DC\u05E4\u05D2\u05D5\u05E9 \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DC\u05D0 \u05D9\u05E9\u05DC\u05DE\u05D5 \u05DC\u05DB\u05DD \u05D1\u05D6\u05DE\u05DF, \u05D0\u05D5 \u05D9\u05E9\u05DC\u05DE\u05D5 \u05E1\u05DB\u05D5\u05DE\u05D9\u05DD \u05E0\u05DE\u05D5\u05DB\u05D9\u05DD \u05DE\u05DE\u05D4 \u05E9\u05E0\u05E7\u05D1\u05E2 \u05D1\u05D7\u05D5\u05D6\u05D4, \u05D0\u05D5 \u05D0\u05E4\u05D9\u05DC\u05D5 - \u05DC\u05D0 \u05D9\u05E9\u05DC\u05DE\u05D5 \u05DC\u05DB\u05DD \u05DB\u05DC\u05DC\u2026 \u05DC\u05DB\u05DF, \u05D4\u05D1\u05D8\u05D7\u05EA \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D4\u05D9\u05D0 \u05E7\u05E8\u05D9\u05D8\u05D9\u05EA \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD \u05D5\u05DB\u05D3\u05D0\u05D9 \u05DC\u05D3\u05D0\u05D5\u05D2 \u05DC\u05DB\u05DA \u05DE\u05E8\u05D0\u05E9.", __jsx("br", null), __jsx("br", null), "\u05D7\u05E9\u05D1\u05D5 \u05E2\u05DC \u05D6\u05D4: \u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC, \u05EA\u05DE\u05E6\u05D0\u05D5 \u05D0\u05EA \u05E2\u05E6\u05DE\u05DB\u05DD \u05DE\u05E9\u05DB\u05D9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DC\u05D3\u05D9\u05D9\u05E8 \u05E9\u05D0\u05EA\u05DD \u05D1\u05E2\u05E6\u05DD \u05DC\u05D0 \u05DE\u05DB\u05D9\u05E8\u05D9\u05DD; \u05D0\u05D9\u05DF \u05DC\u05DB\u05DD \u05DE\u05D5\u05E9\u05D2 \u05DE\u05D4 \u05D4\u05DE\u05E6\u05D1 \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9 \u05E9\u05DC\u05D5, \u05D4\u05D0\u05DD \u05D4\u05D5\u05D0 \u05D0\u05D3\u05DD \u05D0\u05DE\u05D9\u05DF \u05D5\u05D4\u05D0\u05DD \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05DE\u05D5\u05DA \u05E2\u05DC\u05D9\u05D5 \u05E9\u05D0\u05DB\u05DF \u05D9\u05E9\u05DC\u05DD \u05DC\u05DB\u05DD \u05D0\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DB\u05DE\u05D5 \u05E9\u05E6\u05E8\u05D9\u05DA - \u05D5\u05D1\u05D6\u05DE\u05DF. \u05D0\u05EA\u05DD \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DB\u05DE\u05D5\u05D1\u05DF \u05DC\u05D1\u05E8\u05E8 \u05DE\u05E2\u05D8, \u05DC\u05E0\u05E1\u05D5\u05EA \u05DC\u05D4\u05DB\u05D9\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05E7\u05E6\u05EA \u05D9\u05D5\u05EA\u05E8 - \u05D0\u05DA \u05DC\u05D0 \u05EA\u05DE\u05D9\u05D3 \u05EA\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05D4\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA \u05DC\u05DB\u05DC \u05D4\u05E9\u05D0\u05DC\u05D5\u05EA, \u05D5\u05DC\u05D0 \u05EA\u05DE\u05D9\u05D3 \u05EA\u05D3\u05E2\u05D5 \u05D1\u05DE\u05D0\u05D4 \u05D0\u05D7\u05D5\u05D6 \u05DC\u05DE\u05D9 \u05D1\u05E2\u05E6\u05DD \u05D0\u05EA \u05DE\u05E9\u05DB\u05D9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D3\u05D9\u05E8\u05EA\u05DB\u05DD. \u05DB\u05D0\u05E9\u05E8 \u05DE\u05D3\u05D1\u05E8\u05D9\u05DD \u05E2\u05DC \u05D4\u05D1\u05D8\u05D7\u05EA \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4, \u05D1\u05E2\u05E6\u05DD \u05DE\u05EA\u05DB\u05D5\u05D5\u05E0\u05D9\u05DD \u05DC\u05DB\u05DA \u05E9\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D4\u05D5\u05D0 \u05DE\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05D4\u05DE\u05D2\u05D9\u05E2 \u05DC\u05D5 \u05D1\u05DE\u05DC\u05D5\u05D0\u05D5 - \u05DB\u05E4\u05D9 \u05E9\u05E0\u05E7\u05D1\u05E2 \u05D1\u05D7\u05D5\u05D6\u05D4 \u05D1\u05D9\u05E0\u05D5 \u05D5\u05D1\u05D9\u05DF \u05D4\u05D3\u05D9\u05D9\u05E8 \u05D4\u05E9\u05D5\u05DB\u05E8.\u05D4\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05D4\u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05EA \u05E9\u05DC DiffeRent \u05DE\u05E6\u05D9\u05E2\u05D4 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05D6\u05D4 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05D1\u05E9\u05D1\u05D9\u05DC\u05DB\u05DD, \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05DC \u05D5\u05D1\u05D8\u05D5\u05D7; \u05D4\u05D1\u05D8\u05D7\u05EA \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4, \u05D5\u05E7\u05D1\u05DC\u05EA \u05D4\u05E1\u05DB\u05D5\u05DE\u05D9\u05DD \u05D4\u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05DC\u05DB\u05DD - \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DB\u05E4\u05D9 \u05E9\u05E0\u05E7\u05D1\u05E2 \u05D1\u05D7\u05D5\u05D6\u05D4 \u05D1\u05D9\u05E0\u05D9\u05DB\u05DD \u05DC\u05D1\u05D9\u05DF \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05DE\u05D4\u05DD \u05D9\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DC\u05E6\u05D5\u05E8\u05DA \u05D4\u05D1\u05D8\u05D7\u05EA \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4"), __jsx("br", null), __jsx("br", null), "\u25CF \u05D7\u05E1\u05DB\u05D5\u05DF \u05D1\u05D6\u05DE\u05DF \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 - \u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4, \u05D9\u05E9 \u05DC\u05DB\u05DD \u05D2\u05DD \u05DB\u05DA \u05D3\u05D1\u05E8\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DC\u05D3\u05D0\u05D5\u05D2 \u05DC\u05D4\u05DD. \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05E9\u05D9\u05E8\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9 \u05D0\u05E9\u05E8 \u05D9\u05D1\u05D8\u05D9\u05D7 \u05E9\u05EA\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E9\u05DC\u05DB\u05DD \u05D1\u05D6\u05DE\u05DF \u05D5\u05DB\u05DE\u05D5 \u05E9\u05E6\u05E8\u05D9\u05DA - \u05D9\u05D7\u05E1\u05D5\u05DA \u05DC\u05DB\u05DD \u05D6\u05DE\u05DF \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05D5\u05EA \u05E9\u05DC \u05D4\u05EA\u05E2\u05E1\u05E7\u05D5\u05EA \u05D1\u05E2\u05E0\u05D9\u05D9\u05DF, \u05D1\u05DE\u05E7\u05E8\u05D4 \u05E9\u05D4\u05D3\u05D9\u05D9\u05E8 \u05DC\u05D0 \u05DE\u05DE\u05DC\u05D0 \u05D0\u05EA \u05D7\u05D5\u05D1\u05D5\u05EA\u05D9\u05D5 \u05DB\u05E4\u05D9 \u05E9\u05E0\u05D7\u05EA\u05DD \u05D1\u05D7\u05D5\u05D6\u05D4.", __jsx("br", null), "\u25CF \u05E8\u05D0\u05E9 \u05E9\u05E7\u05D8 - \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D9\u05E9\u05D5\u05DF \u05D8\u05D5\u05D1 \u05D1\u05DC\u05D9\u05DC\u05D4, \u05D1\u05D9\u05D3\u05D9\u05E2\u05D4 \u05E9\u05D9\u05E9 \u05DE\u05D9 \u05E9\u05DE\u05D8\u05E4\u05DC \u05DC\u05DB\u05DD \u05D1\u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4, \u05D5\u05DE\u05D1\u05D8\u05D9\u05D7 \u05E9\u05EA\u05E7\u05D1\u05DC\u05D5 \u05D0\u05D5\u05EA\u05D5 \u05D1\u05D6\u05DE\u05DF. \u05DB\u05DA \u05DC\u05D0 \u05EA\u05E6\u05D8\u05E8\u05DB\u05D5 \u05DC\u05D3\u05D0\u05D5\u05D2 \u05D5\u05DC\u05D0 \u05EA\u05E6\u05D8\u05E8\u05DB\u05D5 \"\u05DC\u05E8\u05D3\u05D5\u05E3\" \u05D0\u05D7\u05E8\u05D9 \u05D4\u05E9\u05D5\u05DB\u05E8 \u05E2\u05DC \u05DE\u05E0\u05EA \u05E9\u05D9\u05E9\u05DC\u05DD \u05DC\u05DB\u05DD, \u05DC\u05D0 \u05EA\u05E6\u05D8\u05E8\u05DB\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05D0\u05D7\u05E8\u05D9\u05D5 \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05E0\u05E2\u05DC\u05DD, \u05DC\u05D0 \u05EA\u05E6\u05D8\u05E8\u05DB\u05D5 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05D5\u05D8\u05E8\u05D3\u05D9\u05DD \u05DE\u05D3\u05D9 \u05D7\u05D5\u05D3\u05E9 \u05D1\u05E9\u05D0\u05DC\u05D5\u05EA \u05DB\u05D2\u05D5\u05DF \u05D4\u05D0\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05D9\u05D2\u05D9\u05E2 \u05D1\u05D6\u05DE\u05DF? \u05D4\u05D0\u05DD \u05D4\u05D5\u05D0 \u05D9\u05D2\u05D9\u05E2 \u05D1\u05DE\u05DC\u05D5\u05D0\u05D5?", __jsx("br", null), "\u25CF \u05E7\u05DC\u05D5\u05EA \u05D5\u05E0\u05D5\u05D7\u05D5\u05EA - \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05E0\u05E2\u05E9\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9, \u05E0\u05D2\u05D9\u05E9, \u05E7\u05DC \u05D5\u05E0\u05D5\u05D7 \u05DC\u05EA\u05E4\u05E2\u05D5\u05DC. \u05DC\u05D0 \u05EA\u05E6\u05D8\u05E8\u05DB\u05D5 \"\u05DC\u05E8\u05D3\u05D5\u05E3\" \u05D0\u05D7\u05E8\u05D9 \u05D4\u05D3\u05D9\u05D9\u05E8, \u05DC\u05D4\u05D2\u05D9\u05E9 \u05D8\u05E4\u05E1\u05D9\u05DD \u05DC\u05D1\u05D9\u05EA \u05D4\u05DE\u05E9\u05E4\u05D8 \u05D0\u05D5 \u05DC\u05D4\u05D5\u05E6\u05D0\u05D4 \u05DC\u05E4\u05D5\u05E2\u05DC \u05D1\u05DE\u05E7\u05E8\u05D4 \u05E9\u05DC \u05D1\u05E2\u05D9\u05D4; DiffeRent \u05D9\u05E2\u05E9\u05D5 \u05D6\u05D0\u05EA \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD, \u05D5\u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05E2\u05D5\u05D3\u05DB\u05E0\u05D9\u05DD \u05DB\u05DC \u05D4\u05E2\u05EA \u05D3\u05E8\u05DA \u05D4\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D0\u05D9\u05E9\u05D9 \u05E9\u05DC\u05DB\u05DD \u05D1\u05D0\u05EA\u05E8.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05E2\u05E8\u05D1\u05D5\u05EA \u05DC\u05D7\u05D5\u05D6\u05D4 \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA - \u05DE\u05D4\u05D9, \u05D5\u05DB\u05D9\u05E6\u05D3 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D4?"), __jsx("br", null), __jsx("br", null), "\u05DB\u05D0\u05DE\u05D5\u05E8, \u05DC\u05E2\u05EA\u05D9\u05DD \u05E2\u05DC\u05D5\u05DC\u05D9\u05DD \u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D5\u05EA \u05DC\u05D4\u05D9\u05EA\u05E7\u05DC \u05D1\u05DE\u05E6\u05D1\u05D9\u05DD \u05D1\u05D4\u05DD \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D0\u05D9\u05E0\u05DD \u05DE\u05E9\u05DC\u05DE\u05D9\u05DD \u05D0\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4, \u05D0\u05EA \u05D4\u05DE\u05D9\u05E1\u05D9\u05DD \u05D4\u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9\u05D9\u05DD \u05D0\u05D5 \u05D4\u05D7\u05E9\u05D1\u05D5\u05E0\u05D5\u05EA \u05DC\u05E8\u05E9\u05D5\u05D9\u05D5\u05EA (\u05DB\u05D3\u05D5\u05D2\u05DE\u05EA \u05DE\u05D9\u05DD, \u05D7\u05E9\u05DE\u05DC, \u05D2\u05D6 \u05D5\u05D0\u05E8\u05E0\u05D5\u05E0\u05D4), \u05D0\u05D5 \u05D0\u05E4\u05D9\u05DC\u05D5 \u05D2\u05D5\u05E8\u05DE\u05D9\u05DD \u05E0\u05D6\u05E7\u05D9\u05DD \u05DC\u05D3\u05D9\u05E8\u05D4 - \u05DE\u05D1\u05DC\u05D9 \u05E9\u05EA\u05D4\u05D9\u05D4 \u05DC\u05DB\u05DD \u05D3\u05E8\u05DA \u05DC\u05E4\u05E2\u05D5\u05DC \u05D5\u05DC\u05DE\u05E0\u05D5\u05E2 \u05D6\u05D0\u05EA. \u05D1\u05E0\u05D5\u05E1\u05E3, \u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05D2\u05DD \u05DE\u05E7\u05E8\u05D9\u05DD \u05D1\u05D4\u05DD \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05E2\u05D5\u05D6\u05D1\u05D9\u05DD \u05D0\u05EA \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DE\u05D1\u05DC\u05D9 \u05E9\u05E1\u05D9\u05D9\u05DE\u05D5 \u05DC\u05E9\u05DC\u05DD \u05D0\u05EA \u05DB\u05DC \u05D7\u05D5\u05D1\u05D5\u05EA\u05D9\u05D4\u05DD - \u05D5\u05E7\u05E9\u05D4 \u05E2\u05D3 \u05D1\u05DC\u05EA\u05D9 \u05D0\u05E4\u05E9\u05E8\u05D9 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05D5\u05EA\u05DD \u05DC\u05D0\u05D7\u05E8 \u05DE\u05DB\u05DF, \u05D5\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \"\u05E0\u05EA\u05E7\u05E2\" \u05E2\u05DD \u05D7\u05D5\u05D1\u05D5\u05EA \u05D5\u05DC\u05DC\u05D0 \u05D4\u05DB\u05E0\u05E1\u05D4. \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D4\u05E7\u05D3\u05D9\u05DD \u05EA\u05E8\u05D5\u05E4\u05D4 \u05DC\u05DE\u05DB\u05D4, \u05DE\u05E7\u05D5\u05D1\u05DC \u05DC\u05E1\u05DB\u05DD \u05E2\u05DC \u05E2\u05E8\u05D1\u05D5\u05EA \u05DC\u05D7\u05D5\u05D6\u05D4 \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA - \u05D5\u05D1\u05DB\u05DA \u05DC\u05D4\u05D2\u05DF \u05E2\u05DC \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DE\u05E4\u05E0\u05D9 \u05E0\u05D6\u05E7\u05D9\u05DD \u05D0\u05E4\u05E9\u05E8\u05D9\u05D9\u05DD. \u05E2\u05E8\u05D1\u05D5\u05EA \u05DE\u05E1\u05E4\u05E7\u05EA, \u05D1\u05E2\u05E6\u05DD, \u05D4\u05D1\u05D8\u05D7\u05EA \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05DE\u05E7\u05E8\u05D9\u05DD \u05D1\u05D4\u05DD \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E2\u05DC\u05D5\u05DC \u05DC\u05D4\u05D9\u05E4\u05D2\u05E2 \u05DB\u05EA\u05D5\u05E6\u05D0\u05D4 \u05DE\u05D4\u05E4\u05E8\u05EA \u05D4\u05D7\u05D5\u05D6\u05D4. \u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05E1\u05D5\u05D2\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD \u05E9\u05DC \u05E2\u05E8\u05D1\u05D5\u05EA \u05DC\u05D7\u05D5\u05D6\u05D4 \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA, \u05D5\u05DB\u05DC \u05D0\u05D7\u05D3 \u05DE\u05D4\u05DD \u05DE\u05E1\u05E4\u05E7 \u05D4\u05D2\u05E0\u05D4 \u05D1\u05D3\u05E8\u05D2\u05D4 \u05D0\u05D7\u05E8\u05EA \u05DC\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4. \u05DB\u05D3\u05D0\u05D9 \u05DC\u05DB\u05DD, \u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4, \u05DC\u05D4\u05DB\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05E7\u05D9\u05D9\u05DE\u05D5\u05EA, \u05DC\u05E6\u05D5\u05E8\u05DA \u05D4\u05DB\u05E0\u05E1\u05EA \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05D0\u05D7\u05EA (\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8) \u05DC\u05DE\u05E1\u05D2\u05E8\u05EA \u05D4\u05D7\u05D5\u05D6\u05D4 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05EA\u05DD \u05D7\u05D5\u05EA\u05DE\u05D9\u05DD \u05D9\u05D7\u05D3 \u05E2\u05DD \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05DE\u05D4\u05DF \u05D4\u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05EA \u05E9\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05D1\u05D7\u05D5\u05D6\u05D4 \u05DC\u05E6\u05D5\u05E8\u05DA \u05E2\u05E8\u05D1\u05D5\u05EA \u05DC\u05D7\u05D5\u05D6\u05D4 \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA?"), __jsx("br", null), __jsx("br", null), "\u25CF \u05E6'\u05E7 \u05D1\u05D9\u05D8\u05D7\u05D5\u05DF - \u05D0\u05D5\u05EA\u05D5 \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E4\u05D3\u05D5\u05EA, \u05D1\u05DE\u05E7\u05E8\u05D4 \u05E9\u05DC \u05D0\u05D9-\u05EA\u05E9\u05DC\u05D5\u05DD \u05D0\u05D5 \u05E0\u05D6\u05E7\u05D9\u05DD \u05DE\u05E6\u05D3 \u05D4\u05DE\u05E9\u05DB\u05D9\u05E8. \u05D4\u05E6'\u05E7 \u05DB\u05EA\u05D5\u05D1 \u05D5\u05D7\u05EA\u05D5\u05DD \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD, \u05D5\u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4, \u05DC\u05E8\u05D5\u05D1, \u05D1\u05DE\u05E2\u05DE\u05D3 \u05D7\u05EA\u05D9\u05DE\u05EA \u05D4\u05D7\u05D5\u05D6\u05D4. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D9\u05D2\u05E8\u05DE\u05D5 \u05E0\u05D6\u05E7\u05D9\u05DD \u05D1\u05D3\u05D9\u05E8\u05D4, \u05D9\u05EA\u05E2\u05DB\u05D1\u05D5 \u05D1\u05EA\u05E9\u05DC\u05D5\u05DE\u05D9\u05DD \u05D0\u05D5 \u05D9\u05D1\u05E6\u05E2\u05D5 \u05D4\u05E4\u05E8\u05EA \u05D7\u05D5\u05D6\u05D4 \u05D0\u05D7\u05E8\u05EA \u05DB\u05DC\u05E9\u05D4\u05D9 - \u05D9\u05D5\u05DB\u05DC \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DC\u05E4\u05D3\u05D5\u05EA \u05D0\u05EA \u05D4\u05E6'\u05E7, \u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05D1\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D0\u05D5 \u05EA\u05D4\u05DC\u05D9\u05DA \u05E0\u05D5\u05E1\u05E3.", __jsx("br", null), "\u25CF \u05E9\u05D8\u05E8 \u05D7\u05D5\u05D1 - \u05DE\u05D3\u05D5\u05D1\u05E8 \u05D1\u05DE\u05E1\u05DE\u05DA \u05E2\u05DD \u05EA\u05D5\u05E7\u05E3 \u05DE\u05E9\u05E4\u05D8\u05D9, \u05D5\u05D1\u05D5 \u05DE\u05EA\u05D7\u05D9\u05D9\u05D1 \u05D4\u05E9\u05D5\u05DB\u05E8 \u05DC\u05E9\u05DC\u05DD \u05DC\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E1\u05DB\u05D5\u05DD \u05E9\u05E0\u05E7\u05D1\u05E2 \u05DE\u05E8\u05D0\u05E9 - \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D9\u05D5\u05E4\u05E8 \u05EA\u05E0\u05D0\u05D9 \u05DB\u05DC\u05E9\u05D4\u05D5 \u05DE\u05D1\u05D9\u05DF \u05DB\u05DC \u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05D6\u05D4. \u05E9\u05D8\u05E8 \u05D7\u05D5\u05D1 \u05DE\u05D0\u05E4\u05E9\u05E8 \u05D2\u05DD \u05D4\u05D5\u05D0 \u05E9\u05E7\u05D8 \u05E0\u05E4\u05E9\u05D9 \u05DC\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4, \u05E9\u05DB\u05DF \u05D4\u05D5\u05D0 \u05D9\u05D5\u05D3\u05E2 \u05E9\u05D1\u05DE\u05E7\u05E8\u05D4 \u05E9\u05EA\u05D9\u05D5\u05D5\u05E6\u05E8 \u05D1\u05E2\u05D9\u05D4 \u05DB\u05DC\u05E9\u05D4\u05D9 \u05D4\u05E7\u05E9\u05D5\u05E8\u05D4 \u05DC\u05D7\u05D5\u05D6\u05D4 - \u05D4\u05D5\u05D0 \u05D9\u05D5\u05DB\u05DC \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05D1\u05D9\u05EA \u05D4\u05DE\u05E9\u05E4\u05D8 \u05D0\u05D5 \u05DC\u05D4\u05D5\u05E6\u05D0\u05D4 \u05DC\u05E4\u05D5\u05E2\u05DC \u05DC\u05E6\u05D5\u05E8\u05DA \u05DE\u05D9\u05DE\u05D5\u05E9 \u05D4\u05E9\u05D8\u05E8, \u05D5\u05D1\u05DB\u05DA \u05DC\u05D4\u05D1\u05D8\u05D9\u05D7 \u05DC\u05E2\u05E6\u05DE\u05D5 \u05D0\u05EA \u05D4\u05E1\u05DB\u05D5\u05DD \u05D4\u05DE\u05D2\u05D9\u05E2 \u05DC\u05D5. \u05D7\u05E9\u05D5\u05D1 \u05DC\u05D6\u05DB\u05D5\u05E8 \u05DB\u05D9 \u05D4\u05D3\u05D1\u05E8 \u05D3\u05D5\u05E8\u05E9 \u05D1\u05D9\u05E8\u05D5\u05E7\u05E8\u05D8\u05D9\u05D4 (\u05D1\u05E0\u05D9\u05D2\u05D5\u05D3, \u05DC\u05DE\u05E9\u05DC, \u05DC\u05DE\u05D9\u05DE\u05D5\u05E9 \u05E9\u05DC \u05E6'\u05E7 \u05D1\u05D9\u05D8\u05D7\u05D5\u05DF \u05E9\u05E0\u05E2\u05E9\u05D4, \u05D9\u05D7\u05E1\u05D9\u05EA, \u05D9\u05D5\u05EA\u05E8 \u05D1\u05E7\u05DC\u05D5\u05EA) - \u05D0\u05D9\u05E1\u05D5\u05E3 \u05DE\u05E1\u05DE\u05DB\u05D9\u05DD \u05D5\u05D4\u05E6\u05D2\u05EA\u05DD, \u05D4\u05D5\u05DB\u05D7\u05EA \u05E8\u05D0\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D3 - \u05D3\u05D1\u05E8\u05D9\u05DD \u05D4\u05D3\u05D5\u05E8\u05E9\u05D9\u05DD \u05DC\u05E2\u05EA\u05D9\u05DD \u05D4\u05E9\u05E7\u05E2\u05EA \u05DB\u05E1\u05E3, \u05D5\u05D0\u05E9\u05E8 \u05E2\u05DC\u05D5\u05DC\u05D9\u05DD \u05DC\u05E7\u05D7\u05EA \u05D6\u05DE\u05DF \u05E8\u05D1.", __jsx("br", null), "\u25CF \u05E2\u05E8\u05D1\u05D9\u05DD \u05DC\u05D7\u05D5\u05D6\u05D4 \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA - \u05D6\u05D5\u05D4\u05D9 \u05D0\u05D5\u05E4\u05E6\u05D9\u05D4 \u05E0\u05D5\u05E1\u05E4\u05EA \u05E9\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05D1\u05D7\u05D5\u05D6\u05D4, \u05D5\u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D4 \u05D4\u05E4\u05E9\u05D5\u05D8\u05D4 - \u05D0\u05E0\u05E9\u05D9\u05DD (\u05E9\u05D0\u05D9\u05E0\u05DD, \u05DB\u05DE\u05D5\u05D1\u05DF, \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05E2\u05E6\u05DE\u05DD) \u05D4\u05DE\u05EA\u05D7\u05D9\u05D9\u05D1\u05D9\u05DD \u05DC\u05E9\u05DC\u05DD \u05D0\u05D5 \u05DC\u05E4\u05E6\u05D5\u05EA \u05D0\u05EA \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D1\u05DE\u05E7\u05E8\u05D4 \u05D5\u05D0\u05D7\u05D3 \u05D4\u05E1\u05E2\u05D9\u05E4\u05D9\u05DD \u05D1\u05D7\u05D5\u05D6\u05D4 \u05D4\u05D5\u05E4\u05E8. \u05DC\u05DE\u05E9\u05DC - \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05E9\u05D5\u05DB\u05E8 \u05DC\u05D0 \u05E9\u05D9\u05DC\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05DE\u05D6\u05D4 \u05DE\u05E1\u05E4\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD, \u05D0\u05D5 \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D2\u05E8\u05DD \u05E0\u05D6\u05E7 \u05DC\u05D3\u05D9\u05E8\u05D4 \u05D5\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E9\u05DC\u05DD \u05E2\u05DC \u05D4\u05EA\u05D9\u05E7\u05D5\u05DF - \u05D9\u05DB\u05D5\u05DC \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05E2\u05E8\u05D1\u05D9\u05DD \u05D4\u05D7\u05EA\u05D5\u05DE\u05D9\u05DD - \u05D5\u05D4\u05DD \u05D0\u05DC\u05D4 \u05E9\u05D9\u05E9\u05DC\u05DE\u05D5 \u05D1\u05DE\u05E7\u05D5\u05DD \u05D4\u05E9\u05D5\u05DB\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D1\u05E2\u05E6\u05DD \u05D9\u05DE\u05DE\u05E9\u05D5 \u05D0\u05EA \u05E2\u05E8\u05D1\u05D5\u05EA\u05DD. \u05E2\u05E8\u05D1\u05D9\u05DD \u05DC\u05D7\u05D5\u05D6\u05D4 \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05D6\u05D5\u05D4\u05D9 \u05D0\u05D5\u05E4\u05E6\u05D9\u05D4 \u05DE\u05E7\u05D5\u05D1\u05DC\u05EA, \u05D5\u05E8\u05D1\u05D9\u05DD \u05D1\u05E2\u05DC\u05D9 \u05D4\u05D3\u05D9\u05E8\u05D5\u05EA \u05D0\u05E9\u05E8", __jsx("br", null), "\u05DE\u05EA\u05E2\u05E7\u05E9\u05D9\u05DD \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05DC\u05D7\u05D5\u05D6\u05D4 \u05E1\u05E2\u05D9\u05E3 \u05E2\u05DC\u05D9\u05D5 \u05D7\u05EA\u05D5\u05DE\u05D9\u05DD \u05E2\u05E8\u05D1\u05D9\u05DD \u05D4\u05DE\u05DB\u05D9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D5\u05DE\u05EA\u05D7\u05D9\u05D9\u05D1\u05D9\u05DD \u05DC\u05E2\u05DE\u05D5\u05D3 \u05D1\u05EA\u05E0\u05D0\u05D9\u05DD \u05D1\u05DE\u05E7\u05D5\u05DE\u05D5, \u05D1\u05E2\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA. \u05E2\u05DD \u05D6\u05D0\u05EA, \u05D9\u05E9 \u05DC\u05D6\u05DB\u05D5\u05E8 \u05DB\u05D9 \u05DE\u05D9\u05DE\u05D5\u05E9 \u05D4\u05D4\u05EA\u05D7\u05D9\u05D9\u05D1\u05D5\u05EA \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05E2\u05E8\u05D1\u05D9\u05DD \u05D3\u05D5\u05E8\u05E9\u05EA \u05D2\u05DD \u05D4\u05D9\u05D0 \u05DE\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D0\u05E7\u05D8\u05D9\u05D1\u05D9\u05D5\u05EA - \u05D0\u05D9\u05EA\u05D5\u05E8 \u05D4\u05E2\u05E8\u05D1\u05D9\u05DD \u05D1\u05DE\u05E7\u05E8\u05D4 \u05D4\u05E6\u05D5\u05E8\u05DA, \u05E4\u05E0\u05D9\u05D9\u05D4 \u05D0\u05DC\u05D9\u05D4\u05DD \u05D5\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8 \u05D5\u05DB\u05DF \u05D4\u05DC\u05D0\u05D4. \u05D3\u05D1\u05E8\u05D9\u05DD \u05D0\u05DC\u05D4 \u05E2\u05E9\u05D5\u05D9\u05D9\u05DD \u05DC\u05E7\u05D7\u05EA \u05D6\u05DE\u05DF, \u05D5\u05DC\u05D0 \u05EA\u05DE\u05D9\u05D3 \u05D4\u05E2\u05E8\u05D1\u05D9\u05DD \u05D0\u05DB\u05DF \u05D9\u05DE\u05DE\u05E9\u05D5 \u05D0\u05EA \u05D4\u05EA\u05D7\u05D9\u05D9\u05D1\u05D5\u05EA\u05DD - \u05D5\u05D0\u05D6 \u05D7\u05D5\u05D6\u05E8 \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DC\u05E0\u05E7\u05D5\u05D3\u05EA \u05D4\u05D4\u05EA\u05D7\u05DC\u05D4.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05DE\u05D4\u05D5 \u05D4\u05D4\u05D1\u05D3\u05DC \u05D1\u05D9\u05DF \u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D8\u05D7\u05EA \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 (\u05DC\u05DE\u05E9\u05DC, \u05E9\u05DC \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05D3\u05D5\u05D2\u05DE\u05EA DiffeRent) \u05DC\u05D1\u05D9\u05DF \u05E9\u05D9\u05E8\u05D5\u05EA \u05E9\u05DC \u05D7\u05D1\u05E8\u05EA \u05D1\u05D9\u05D8\u05D5\u05D7?"), __jsx("br", null), __jsx("br", null), "\u05D7\u05DC\u05E7 \u05DE\u05D7\u05D1\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05D8\u05D5\u05D7 \u05DE\u05E6\u05D9\u05E2\u05D5\u05EA \u05E4\u05D5\u05DC\u05D9\u05E1\u05D5\u05EA, \u05D1\u05D4\u05DF \u05E7\u05D9\u05D9\u05DD \u05E8\u05DB\u05D9\u05D1 \u05D1\u05D9\u05D8\u05D5\u05D7 \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 - \u05D1\u05DE\u05E7\u05E8\u05D9\u05DD \u05D1\u05D4\u05DD \u05E7\u05D1\u05DC\u05EA \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05D4\u05E8\u05D2\u05D9\u05DC\u05D4 \u05E0\u05E4\u05D2\u05E2\u05EA. \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0:", __jsx("br", null), "\u25CF \u05DB\u05D0\u05E9\u05E8 \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D0\u05D9\u05E0\u05D5 \u05DE\u05E9\u05DC\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05D6\u05DE\u05DF, \u05D0\u05D5 \u05DE\u05E9\u05DC\u05DD \u05E1\u05DB\u05D5\u05DE\u05D9\u05DD \u05E0\u05DE\u05D5\u05DB\u05D9\u05DD \u05DE\u05DE\u05D4 \u05E9\u05E0\u05E7\u05D1\u05E2 \u05E2\u05DE\u05D5 \u05D1\u05D7\u05D5\u05D6\u05D4", __jsx("br", null), "\u25CF \u05DB\u05D0\u05E9\u05E8 \u05E0\u05D2\u05E8\u05DD \u05E0\u05D6\u05E7 \u05DC\u05D3\u05D9\u05E8\u05D4 - (\u05DC\u05DE\u05E9\u05DC- \u05D4\u05E6\u05E4\u05D4, \u05E9\u05E8\u05D9\u05E4\u05D4, \u05E0\u05D6\u05E7 \u05E9\u05E0\u05E2\u05E9\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D5\u05DB\u05D3\u05D5\u05DE\u05D4) \u05D5\u05D9\u05E9 \u05E6\u05D5\u05E8\u05DA \u05D1\u05E9\u05D9\u05E4\u05D5\u05E5, \u05D0\u05E9\u05E8 \u05D9\u05DE\u05E0\u05E2 \u05D4\u05E9\u05DB\u05E8\u05EA \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DC\u05D0\u05D5\u05E8\u05DA \u05D6\u05DE\u05DF - \u05D5\u05D1\u05DB\u05DA \u05D9\u05D9\u05D2\u05E8\u05DD \u05DC\u05DB\u05DD \u05D0\u05D5\u05D1\u05D3\u05DF \u05D4\u05DB\u05E0\u05E1\u05D4 \u05DE\u05D4\u05D3\u05D9\u05E8\u05D4", __jsx("br", null), __jsx("br", null), "\u05DB\u05DC\u05D5\u05DE\u05E8 - \u05D1\u05D9\u05D8\u05D5\u05D7 \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05DE\u05E1\u05D2\u05E8\u05EA \u05E4\u05D5\u05DC\u05D9\u05E1\u05D4 \u05D9\u05D4\u05D9\u05D4 \u05D9\u05E2\u05D9\u05DC \u05E8\u05E7 \u05D1\u05DE\u05E7\u05E8\u05D9\u05DD \u05D1\u05D4\u05DD \u05E0\u05D2\u05E8\u05DD \u05E0\u05D6\u05E7, \u05DE\u05D1\u05DC\u05D9 \u05E4\u05EA\u05E8\u05D5\u05DF \u05DE\u05DE\u05E9\u05D9 \u05DC\u05D1\u05E2\u05D9\u05D4 \u05E2\u05E6\u05DE\u05D4; \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D0\u05D5\u05DC\u05D9 \u05D9\u05E7\u05D1\u05DC \u05EA\u05E9\u05DC\u05D5\u05DD (\u05D6\u05D0\u05EA \u05D1\u05D4\u05E0\u05D7\u05D4 \u05D5\u05D4\u05E6\u05DC\u05D9\u05D7 \u05DC\u05D4\u05D5\u05DB\u05D9\u05D7 \u05D0\u05EA \u05D4\u05E0\u05D6\u05E7 \u05D5\u05DC\u05D4\u05E8\u05D0\u05D5\u05EA \u05E9\u05D4\u05D5\u05D0 \u05D0\u05DB\u05DF \u05E0\u05E4\u05D2\u05E2 \u05DB\u05EA\u05D5\u05E6\u05D0\u05D4 \u05DE\u05DB\u05DA), \u05D0\u05DA \u05D4\u05D1\u05E2\u05D9\u05D4 \u05EA\u05D9\u05E9\u05D0\u05E8 \u05E2\u05DC \u05DB\u05E0\u05D4 - \u05D4\u05D3\u05D9\u05D9\u05E8 \u05D9\u05DE\u05E9\u05D9\u05DA \u05DC\u05D0 \u05DC\u05E9\u05DC\u05DD, \u05D5\u05D1\u05D9\u05E0\u05EA\u05D9\u05D9\u05DD \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E0\u05E4\u05D2\u05E2 \u05D5\u05DE\u05E4\u05E1\u05D9\u05D3.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05D0\u05D6 \u05DE\u05D3\u05D5\u05E2 \u05D1\u05E2\u05E6\u05DD, \u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D8\u05D7\u05EA \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05E2\u05D3\u05D9\u05E3 \u05E2\u05DC \u05E4\u05E0\u05D9 \u05D1\u05D9\u05D8\u05D5\u05D7 \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05E8\u05D2\u05D9\u05DC?"), __jsx("br", null), __jsx("br", null), "\u05E4\u05EA\u05E8\u05D5\u05DF \u05D0\u05DE\u05D9\u05EA\u05D9 \u05DC\u05D1\u05E2\u05D9\u05D4 - \u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4, \u05D0\u05EA\u05DD \u05DE\u05E1\u05EA\u05DB\u05DC\u05D9\u05DD \u05DC\u05D8\u05D5\u05D5\u05D7 \u05D0\u05E8\u05D5\u05DA; \u05E4\u05EA\u05E8\u05D5\u05DF \u05E0\u05E7\u05D5\u05D3\u05EA\u05D9 \u05D6\u05D4 \u05E0\u05D7\u05DE\u05D3, \u05D0\u05D1\u05DC \u05D0\u05DD \u05D0\u05EA\u05DD \u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05E0\u05D9\u05DD \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA \u05D5\u05DC\u05D4\u05E9\u05DB\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E9\u05DC\u05DB\u05DD \u05D5\u05DC\u05E9\u05DE\u05D5\u05E8 \u05E2\u05DC\u05D9\u05D4 \u05D1\u05DE\u05E6\u05D1 \u05D8\u05D5\u05D1 \u05D5\u05D0\u05D8\u05E8\u05E7\u05D8\u05D9\u05D1\u05D9 - \u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05D7\u05E9\u05D5\u05D1 \u05E8\u05D7\u05D5\u05E7. \u05D1\u05E2\u05D5\u05D3 \u05D1\u05D9\u05D8\u05D5\u05D7 \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05E8\u05D2\u05D9\u05DC \u05D9\u05D9\u05EA\u05DF \u05DC\u05DB\u05DD, \u05D1\u05DE\u05E7\u05E8\u05D4 \u05D4\u05D8\u05D5\u05D1, \u05EA\u05E9\u05DC\u05D5\u05DD \u05E0\u05E7\u05D5\u05D3\u05EA\u05D9 \u05E2\u05D1\u05D5\u05E8 \u05D6\u05DE\u05DF \u05D1\u05D5 \u05D4\u05E4\u05E1\u05D3\u05EA\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05DE\u05E1\u05D9\u05D1\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA, \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05E9\u05DC DiffeRent \u05D9\u05E6\u05D9\u05E2 \u05DC\u05DB\u05DD \u05E8\u05D0\u05D9\u05D9\u05D4 \u05DB\u05D5\u05DC\u05DC\u05E0\u05D9\u05EA \u05D5\u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05D0\u05E9\u05E8 \u05D9\u05E1\u05D9\u05D9\u05E2\u05D5 \u05DC\u05DB\u05DD \u05DC\u05D8\u05D5\u05D5\u05D7 \u05D4\u05D0\u05E8\u05D5\u05DA. \u05DB\u05DC\u05D5\u05DE\u05E8: \u05DE\u05E2\u05D1\u05E8 \u05DC\u05DB\u05E1\u05E3 \u05D4\u05DE\u05D2\u05D9\u05E2 \u05DC\u05DB\u05DD, \u05EA\u05E7\u05D1\u05DC\u05D5 \u05D2\u05DD \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D1\u05E2\u05D9\u05D4 \u05D0\u05E9\u05E8 \u05D9\u05E4\u05EA\u05D5\u05E8 \u05D0\u05D5\u05EA\u05D4 \u05DC\u05D8\u05D5\u05D5\u05D7 \u05D0\u05E8\u05D5\u05DA, \u05D5\u05DB\u05EA\u05D5\u05E6\u05D0\u05D4 \u05DE\u05DB\u05DA - \u05DC\u05D0 \u05EA\u05E6\u05D8\u05E8\u05DB\u05D5 \u05DC\u05D4\u05EA\u05E2\u05E1\u05E7 \u05D1\u05DB\u05DA \u05D9\u05D5\u05EA\u05E8 \u05D1\u05E2\u05EA\u05D9\u05D3.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05D0\u05D9\u05DC\u05D5 \u05D1\u05E2\u05D9\u05D5\u05EA \u05D9\u05DB\u05D5\u05DC \u05DC\u05E4\u05EA\u05D5\u05E8 \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD \u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D8\u05D7\u05EA \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05E9\u05DC DiffeRent?"), __jsx("br", null), __jsx("br", null), "\u25CF \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05D0\u05E9\u05E8 \u05DE\u05E1\u05E8\u05D1 \u05DC\u05E9\u05DC\u05DD \u05D1\u05D6\u05DE\u05DF", __jsx("br", null), "\u25CF \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05D0\u05E9\u05E8 \u05DE\u05E9\u05DC\u05DD \u05E1\u05DB\u05D5\u05DE\u05D9\u05DD \u05D7\u05DC\u05E7\u05D9\u05D9\u05DD, \u05E0\u05DE\u05D5\u05DB\u05D9\u05DD \u05DE\u05D0\u05DC\u05D4 \u05E9\u05E0\u05E7\u05D1\u05E2\u05D5 \u05E2\u05DE\u05D5 \u05D1\u05D7\u05D5\u05D6\u05D4", __jsx("br", null), "\u25CF \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05E0\u05D6\u05E7\u05D9\u05DD \u05DC\u05D3\u05D9\u05E8\u05D4", __jsx("br", null), "\u25CF \u05DE\u05E6\u05D9\u05D0\u05D5\u05EA \u05E9\u05D5\u05DB\u05E8 \u05D7\u05D3\u05E9 - \u05D1\u05DE\u05E7\u05E8\u05D4 \u05D1\u05D5 \u05E9\u05D5\u05DB\u05E8 \u05E2\u05D5\u05D6\u05D1 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E4\u05EA\u05D0\u05D5\u05DE\u05D9 \u05DE\u05E1\u05D9\u05D1\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA", __jsx("br", null), "\u25CF \u05D4\u05DE\u05E9\u05DA \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05DC\u05DB\u05DD - \u05D1\u05E2\u05DC\u05D9 \u05D4\u05D3\u05D9\u05E8\u05D4, \u05E2\u05D3 \u05DC\u05DE\u05E6\u05D9\u05D0\u05EA \u05E9\u05D5\u05DB\u05E8 \u05D7\u05D3\u05E9", __jsx("br", null), "\u25CF \u05D7\u05D5\u05E4\u05E9 \u05E4\u05E2\u05D5\u05DC\u05D4 \u05E8\u05D1 \u05D9\u05D5\u05EA\u05E8 - DiffeRent \u05D0\u05D9\u05E0\u05D4 \u05D7\u05D1\u05E8\u05EA \u05D1\u05D9\u05D8\u05D5\u05D7, \u05D5\u05DE\u05E1\u05D9\u05D1\u05D4 \u05D6\u05D5 - \u05D4\u05D9\u05D0 \u05D2\u05DD \u05D0\u05D9\u05E0\u05D4 \u05DB\u05E4\u05D5\u05E4\u05D4 \u05DC\u05EA\u05E7\u05E0\u05D5\u05EA \u05D5\u05E0\u05D4\u05DC\u05D9\u05DD \u05D4\u05DE\u05D7\u05D9\u05D9\u05D1\u05D9\u05DD \u05D0\u05EA \u05D7\u05D1\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05D8\u05D5\u05D7. \u05DC\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05EA DiffeRent \u05D9\u05E9 \u05E1\u05D8\u05E0\u05D3\u05E8\u05D8 \u05E2\u05D1\u05D5\u05D3\u05D4 \u05D2\u05D1\u05D5\u05D4 \u05D5\u05D9\u05E2\u05D9\u05DC, \u05D0\u05E9\u05E8 \u05DE\u05D1\u05D8\u05D9\u05D7 \u05DE\u05E6\u05D3 \u05D0\u05D7\u05D3 \u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05D0\u05D9\u05DB\u05D5\u05EA\u05D9\u05D9\u05DD \u05DC\u05D1\u05E2\u05D9\u05D5\u05EA \u05D0\u05E9\u05E8 \u05D0\u05EA\u05DD, \u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4, \u05E0\u05EA\u05E7\u05DC\u05D9\u05DD \u05D1\u05D4\u05DD; \u05D5\u05DE\u05E6\u05D3 \u05E9\u05E0\u05D9 - \u05D7\u05D5\u05E4\u05E9\u05D9\u05D5\u05EA \u05D9\u05D7\u05E1\u05D9\u05EA, \u05D4\u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05D4\u05E1\u05EA\u05DB\u05DC\u05D5\u05EA \u05E8\u05D7\u05D1\u05D4 \u05E2\u05DC \u05D4\u05D1\u05E2\u05D9\u05D4 \u05D5\u05D9\u05DB\u05D5\u05DC\u05EA \u05DC\u05E4\u05EA\u05D5\u05E8 \u05D0\u05D5\u05EA\u05D4 \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD \u05DC\u05D8\u05D5\u05D5\u05D7 \u05D0\u05E8\u05D5\u05DA. \u05D0\u05EA\u05DD \u05DC\u05D0 \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD \u05DC\u05D4\u05E1\u05EA\u05E4\u05E7 \u05E8\u05E7 \u05D1\u05E4\u05EA\u05E8\u05D5\u05DF \u05E0\u05E7\u05D5\u05D3\u05EA\u05D9 \u05DC\u05D1\u05E2\u05D9\u05D4, \u05D0\u05DC\u05D0 \u05D1\u05E4\u05EA\u05E8\u05D5\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA\u05D9 \u05D0\u05E9\u05E8 \u05D9\u05E2\u05E0\u05D9\u05E7 \u05DC\u05DB\u05DD \u05E9\u05E7\u05D8 \u05DC\u05D0\u05D5\u05E8\u05DA \u05D6\u05DE\u05DF \u05E8\u05D1.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05DE\u05E8\u05D0\u05E9 - \u05D0\u05D9\u05DA \u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05E4\u05D5\u05E2\u05DC, \u05D5\u05DC\u05DE\u05D4 \u05DB\u05D3\u05D0\u05D9 \u05DC\u05DB\u05DD \u05DC\u05D7\u05E9\u05D5\u05D1 \u05E2\u05DC \u05DB\u05DA \u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4?"), __jsx("br", null), __jsx("br", null), "\u05E0\u05E1\u05D5 \u05DC\u05D3\u05DE\u05D9\u05D9\u05DF \u05D0\u05EA \u05D4\u05EA\u05E1\u05E8\u05D9\u05D8 \u05D4\u05D1\u05D0: \u05DE\u05E6\u05D0\u05EA\u05DD \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05DC\u05D3\u05D9\u05E8\u05D4 \u05E9\u05DC\u05DB\u05DD, \u05D0\u05EA\u05DD \u05D5\u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D7\u05EA\u05DE\u05EA\u05DD \u05E2\u05DC \u05D7\u05D5\u05D6\u05D4, \u05D5\u05DB\u05E2\u05EA \u05E0\u05D5\u05EA\u05E8 \u05DC\u05DB\u05DD \u05E8\u05E7 \u05DC\u05E7\u05D5\u05D5\u05EA \u05E9\u05D4\u05DB\u05DC \u05D9\u05EA\u05E0\u05D4\u05DC \u05DB\u05E9\u05D5\u05E8\u05D4 \u05D5\u05E9\u05D4\u05DD \u05D9\u05E9\u05DC\u05DE\u05D5 \u05DC\u05DB\u05DD \u05D1\u05D6\u05DE\u05DF \u05DB\u05E4\u05D9 \u05E9\u05E0\u05E7\u05D1\u05E2 \u05D1\u05D7\u05D5\u05D6\u05D4. \u05D1\u05DB\u05DC \u05D7\u05D5\u05D3\u05E9, \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05D5\u05E2\u05D3 \u05D1\u05D5 \u05D0\u05DE\u05D5\u05E8 \u05DC\u05D4\u05D9\u05DB\u05E0\u05E1 \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05E2\u05D1\u05D5\u05E8 \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 - \u05D0\u05EA\u05DD \u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05E2\u05D8 \u05D1\u05DC\u05D7\u05E5, \u05D5\u05E9\u05D0\u05DC\u05D5\u05EA \u05E8\u05D1\u05D5\u05EA \u05E2\u05D5\u05DC\u05D5\u05EA \u05D1\u05DE\u05D5\u05D7\u05DB\u05DD:", __jsx("br", null), __jsx("br", null), "\u25CF \u05D4\u05D0\u05DD \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D9\u05E9\u05DC\u05DD \u05D4\u05D7\u05D5\u05D3\u05E9 \u05D1\u05D6\u05DE\u05DF?", __jsx("br", null), "\u25CF \u05D5\u05D0\u05DD \u05D4\u05D5\u05D0 \u05D9\u05EA\u05E2\u05DB\u05D1 \u05D5\u05D9\u05E9\u05DC\u05DD \u05D1\u05D0\u05D9\u05D7\u05D5\u05E8?", __jsx("br", null), "\u25CF \u05D0\u05D5\u05DC\u05D9 \u05E4\u05EA\u05D0\u05D5\u05DD \u05D0\u05D9\u05DF \u05DC\u05D5 \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DB\u05E1\u05E3 \u05D4\u05D7\u05D5\u05D3\u05E9?", __jsx("br", null), "\u25CF \u05D5\u05DE\u05D4 \u05D0\u05E2\u05E9\u05D4 \u05D1\u05DE\u05E6\u05D1 \u05DB\u05D6\u05D4 - \u05D4\u05D0\u05DD \u05D0\u05E0\u05D9 \u05E6\u05E8\u05D9\u05DA \u05D9\u05E9\u05E8 \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05E2\u05D5\u05E8\u05DA \u05D3\u05D9\u05DF?", __jsx("br", null), "\u25CF \u05D4\u05D0\u05DD \u05D0\u05DE\u05E6\u05D0 \u05D0\u05EA \u05E2\u05E6\u05DE\u05D9 \u05E9\u05E7\u05D5\u05E2 \u05D1\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05E2\u05DC \u05DB\u05DA - \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05D4\u05DB\u05E0\u05E1\u05D4 \u05D4\u05DE\u05D2\u05D9\u05E2 \u05DC\u05D9 \u05DE\u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4?", __jsx("br", null), __jsx("br", null), "\u05E9\u05D0\u05DC\u05D5\u05EA \u05DE\u05D8\u05E8\u05D9\u05D3\u05D5\u05EA, \u05D5\u05D1\u05E6\u05D3\u05E7\u2026 \u05D4\u05EA\u05E1\u05E8\u05D9\u05D8 \u05D4\u05D6\u05D4 \u05DC\u05D0 \u05E0\u05E9\u05DE\u05E2 \u05D8\u05D5\u05D1, \u05D5\u05D0\u05D5\u05DC\u05D9 \u05D0\u05EA\u05DD \u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05DC\u05D4\u05EA\u05D7\u05E8\u05D8 \u05E2\u05DC \u05DB\u05DC \u05D4\u05E2\u05E1\u05E7.", __jsx("br", null), "\u05D0\u05D1\u05DC \u05D4\u05EA\u05E1\u05E8\u05D9\u05D8 \u05D4\u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05E8\u05D0\u05D5\u05EA \u05D0\u05D7\u05E8\u05EA. \u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4, \u05D0\u05EA\u05DD \u05DE\u05DE\u05E9 \u05DC\u05D0 \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05D5\u05D3\u05D0\u05D2\u05D9\u05DD \u05DB\u05DC \u05D4\u05D6\u05DE\u05DF, \u05D1\u05D8\u05D7 \u05DC\u05D0 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05D5\u05D8\u05E8\u05D3\u05D9\u05DD \u05D1\u05E9\u05D0\u05DC\u05D5\u05EA \u05E2\u05D3 \u05D4\u05E8\u05D2\u05E2 \u05D1\u05D5 \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05E2\u05DC \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E0\u05DB\u05E0\u05E1 \u05DC\u05D7\u05E9\u05D1\u05D5\u05DF \u05D4\u05D1\u05E0\u05E7 \u05E9\u05DC\u05DB\u05DD.", __jsx("br", null), __jsx("br", null), "\u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05D3\u05D0\u05D5\u05D2 \u05DE\u05D3\u05D9 \u05D7\u05D5\u05D3\u05E9, \u05D0\u05EA\u05DD \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05D4\u05D1\u05D8\u05D9\u05D7 \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05DE\u05E8\u05D0\u05E9. \u05DB\u05DC\u05D5\u05DE\u05E8 - \u05D0\u05EA\u05DD \u05D9\u05D5\u05D3\u05E2\u05D9\u05DD \u05D1\u05D5\u05D5\u05D3\u05D0\u05D5\u05EA \u05E9\u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D9\u05D9\u05DB\u05E0\u05E1 \u05DE\u05D3\u05D9 \u05D7\u05D5\u05D3\u05E9 \u05D1\u05D7\u05D5\u05D3\u05E9\u05D5, \u05D1\u05DE\u05DC\u05D5\u05D0\u05D5 \u05D5\u05DC\u05DC\u05D0 \u05D1\u05E2\u05D9\u05D5\u05EA. \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05EA DiffeRent \u05EA\u05D3\u05D0\u05D2 \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05D6\u05D4 \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD, \u05D5\u05D0\u05EA\u05DD \u05EA\u05D3\u05E2\u05D5 \u05DB\u05D9 \u05D4\u05D1\u05D8\u05D7\u05EA \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D0\u05D9\u05E0\u05D4 \u05D3\u05D1\u05E8 \u05DE\u05D5\u05E4\u05E8\u05DA. \u05D4\u05DE\u05D8\u05E8\u05D4 \u05D4\u05D9\u05D0, \u05D1\u05E2\u05E6\u05DD, \u05E9\u05D0\u05EA\u05DD - \u05DB\u05D1\u05E2\u05DC\u05D9 \u05D4\u05D3\u05D9\u05E8\u05D4 - \u05EA\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05DB\u05DC \u05D4\u05DE\u05D2\u05D9\u05E2 \u05DC\u05DB\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2, \u05DC\u05DC\u05D0 \u05EA\u05DC\u05D5\u05EA \u05D1\u05E9\u05D5\u05DB\u05E8 \u05E2\u05E6\u05DE\u05D5 \u05D0\u05D5 \u05D1\u05D1\u05E2\u05D9\u05D5\u05EA \u05D0\u05E9\u05E8 \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05EA\u05E2\u05D5\u05E8\u05E8.", __jsx("br", null), __jsx("br", null), "\u05E0\u05D9\u05EA\u05DF \u05DC\u05D5\u05DE\u05E8 \u05DC\u05E1\u05D9\u05DB\u05D5\u05DD, \u05DB\u05D9 \u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4 \u05E9\u05DE\u05E9\u05DB\u05D9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D3\u05D9\u05E8\u05EA\u05DD \u05E0\u05D4\u05E0\u05D9\u05DD \u05DE\u05E6\u05D3 \u05D0\u05D7\u05D3 \u05DE\u05D9\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05DB\u05D2\u05D5\u05DF \u05D4\u05DB\u05E0\u05E1\u05D4 \u05E7\u05D1\u05D5\u05E2\u05D4, \u05D5\u05DE\u05E6\u05D3 \u05E9\u05E0\u05D9 - \u05E0\u05D0\u05DC\u05E6\u05D9\u05DD \u05DC\u05D3\u05D0\u05D5\u05D2 \u05DC\u05DB\u05DA \u05E9\u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05D9\u05D9\u05DB\u05E0\u05E1 \u05D1\u05D6\u05DE\u05DF, \u05E9\u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D9\u05E9\u05DE\u05E8\u05D5 \u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D5\u05DB\u05DF \u05D4\u05DC\u05D0\u05D4. \u05D4\u05D1\u05D8\u05D7\u05EA \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D4\u05D5\u05D0 \u05DC\u05D0 \u05D3\u05D1\u05E8 \u05E9\u05DC \u05DE\u05D4 \u05D1\u05DB\u05DA, \u05D1\u05E2\u05D9\u05E7\u05E8 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05E8\u05D5\u05D1 \u05D4\u05DE\u05E7\u05E8\u05D9\u05DD \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D0\u05D9\u05E0\u05D5 \u05DE\u05DB\u05D9\u05E8 \u05D0\u05EA \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD, \u05D5\u05D2\u05DD \u05D0\u05DD \u05E0\u05D7\u05EA\u05DD \u05D7\u05D5\u05D6\u05D4 \u05DE\u05D7\u05D9\u05D9\u05D1 - \u05D4\u05D3\u05D1\u05E8 \u05DC\u05D0 \u05EA\u05DE\u05D9\u05D3 \u05DE\u05E1\u05E4\u05D9\u05E7. \u05D1\u05D9\u05D8\u05D5\u05D7 \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05E2\u05E9\u05D5\u05D9 \u05DC\u05D4\u05D1\u05D8\u05D9\u05D7 \u05EA\u05E9\u05DC\u05D5\u05DD \u05DC\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D1\u05DE\u05E7\u05E8\u05D9\u05DD \u05D1\u05D4\u05DD \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D0\u05D9\u05E0\u05DD", __jsx("br", null), "\u05DE\u05E9\u05DC\u05DE\u05D9\u05DD, \u05D0\u05DA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05D0\u05D5\u05EA\u05D5 DiffeRent \u05DE\u05E6\u05D9\u05E2\u05D4 \u05DE\u05E2\u05E0\u05D9\u05E7 \u05DC\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E9\u05E7\u05D8 \u05E0\u05E4\u05E9\u05D9 \u05D0\u05DE\u05D9\u05EA\u05D9, \u05E8\u05D0\u05E9 \u05E9\u05E7\u05D8 \u05D5\u05D1\u05E2\u05D9\u05E7\u05E8 - \u05E7\u05D1\u05DC\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D1\u05DE\u05DC\u05D5\u05D0\u05D5, \u05D1\u05D6\u05DE\u05DF, \u05D5\u05DC\u05DC\u05D0 \u05EA\u05E7\u05DC\u05D5\u05EA."));
        break;

      case 2:
        pageHeader = "פינוי שוכר";
        output = __jsx("div", null, __jsx("p", null, __jsx("strong", null, "\u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4, \u05DC\u05E6\u05D3 \u05D4\u05E8\u05D5\u05D5\u05D7 \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9 \u05D5\u05D4\u05E9\u05E7\u05D8 \u05D4\u05E0\u05E4\u05E9\u05D9 \u05E2\u05DC \u05DB\u05DA \u05E9\u05D9\u05E9 \u05E0\u05DB\u05E1 \u05E9\u05E9\u05D9\u05D9\u05DA \u05DC\u05DB\u05DD - \u05D0\u05EA\u05DD \u05D1\u05D5\u05D5\u05D3\u05D0\u05D9 \u05E0\u05EA\u05E7\u05DC\u05D9\u05DD \u05D1\u05E1\u05D5\u05D2\u05D9\u05D5\u05EA \u05D5\u05D1\u05E2\u05D9\u05D5\u05EA \u05D0\u05E9\u05E8 \u05DE\u05D8\u05E8\u05D9\u05D3\u05D5\u05EA \u05D0\u05EA \u05DE\u05E0\u05D5\u05D7\u05EA\u05DB\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2, \u05DB\u05DE\u05D5 \u05DC\u05DE\u05E9\u05DC:"), __jsx("br", null), __jsx("br", null), "\u25CF \u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05D5\u05D5\u05D3\u05D0 \u05E9\u05D4\u05D3\u05D9\u05E8\u05D4 \u05E0\u05E9\u05DE\u05E8\u05EA \u05D1\u05DE\u05E6\u05D1 \u05D8\u05D5\u05D1, \u05EA\u05E7\u05D9\u05DF \u05D5\u05E8\u05D0\u05D5\u05D9 \u05DC\u05DE\u05D2\u05D5\u05E8\u05D9\u05DD", __jsx("br", null), "\u25CF \u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05D7\u05EA \u05DC\u05EA\u05E7\u05D5\u05E4\u05D4 \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05DE\u05D9\u05DD", __jsx("br", null), "\u25CF \u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05D5\u05D5\u05D3\u05D0 \u05E7\u05D1\u05DC\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E9\u05DC\u05DB\u05DD \u05D1\u05D6\u05DE\u05DF \u05D5\u05D1\u05DE\u05DC\u05D5\u05D0\u05D5", __jsx("br", null), "\u25CF \u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05E7\u05D5\u05D5\u05EA \u05E9\u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05E2\u05DE\u05DD \u05D7\u05EA\u05DE\u05EA\u05DD \u05D7\u05D5\u05D6\u05D4 - \u05D4\u05DD \u05D0\u05DB\u05DF \u05D0\u05E0\u05E9\u05D9\u05DD \u05D0\u05DE\u05D9\u05E0\u05D9\u05DD, \u05DB\u05D0\u05DC\u05D4 \u05E9\u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D8\u05D5\u05D7 \u05D1\u05D4\u05DD \u05D5\u05DB\u05D0\u05DC\u05D4 \u05E9\u05DC\u05D0 \u05D9\u05D4\u05E8\u05E1\u05D5 \u05D0\u05EA \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D0\u05D5 \u05D9\u05D2\u05E8\u05DE\u05D5 \u05E0\u05D6\u05E7\u05D9\u05DD", __jsx("br", null), __jsx("br", null), "\u05D1\u05D5\u05D0\u05D5 \u05E0\u05D3\u05DE\u05D9\u05D9\u05DF \u05DC\u05E8\u05D2\u05E2 \u05EA\u05E1\u05E8\u05D9\u05D8 \u05E0\u05D7\u05DE\u05D3: \u05D9\u05D9\u05EA\u05DB\u05DF \u05E9\u05DE\u05E6\u05D0\u05EA\u05DD \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05E0\u05D4\u05D3\u05E8\u05D9\u05DD, \u05D0\u05E9\u05E8 \u05DE\u05E9\u05DC\u05DE\u05D9\u05DD \u05DC\u05DB\u05DD \u05DE\u05D3\u05D9 \u05D7\u05D5\u05D3\u05E9 \u05D1\u05D7\u05D5\u05D3\u05E9\u05D5 \u05D0\u05EA \u05DB\u05DC \u05D4\u05E1\u05DB\u05D5\u05DD \u05D4\u05DE\u05D2\u05D9\u05E2 \u05DC\u05DB\u05DD; \u05D9\u05D9\u05EA\u05DB\u05DF \u05D2\u05DD \u05D5\u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD \u05E9\u05D5\u05DE\u05E8\u05D9\u05DD \u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D1\u05DE\u05E6\u05D1 \u05DE\u05E2\u05D5\u05DC\u05D4, \u05D5\u05D0\u05EA\u05DD \u05D9\u05E9\u05E0\u05D9\u05DD \u05D8\u05D5\u05D1 \u05D1\u05DC\u05D9\u05DC\u05D4 \u05D1\u05D9\u05D3\u05D9\u05E2\u05D4 \u05DB\u05D9 \u05DE\u05E6\u05D0\u05EA\u05DD \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D5\u05D0\u05DE\u05D9\u05E0\u05D9\u05DD \u05D0\u05E9\u05E8 \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05DE\u05D5\u05DA \u05E2\u05DC\u05D9\u05D4\u05DD \u05E9\u05D9\u05E9\u05DC\u05DE\u05D5 \u05DC\u05DB\u05DD \u05D1\u05D6\u05DE\u05DF \u05D5\u05DB\u05DC \u05E2\u05D5\u05D3 \u05D4\u05DD \u05D2\u05E8\u05D9\u05DD \u05D1\u05D3\u05D9\u05E8\u05D4 - \u05D4\u05D9\u05D0 \u05EA\u05D9\u05E9\u05D0\u05E8 \u05E0\u05E7\u05D9\u05D4 \u05D5\u05E8\u05D0\u05D5\u05D9\u05D4 \u05DC\u05DE\u05D2\u05D5\u05E8\u05D9\u05DD. \u05DB\u05D0\u05E9\u05E8 \u05DE\u05D3\u05DE\u05D9\u05D9\u05E0\u05D9\u05DD \u05EA\u05E1\u05E8\u05D9\u05D8 \u05E9\u05DB\u05D6\u05D4 - \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05D4\u05D5\u05D0 \u05DC\u05D0 \u05D3\u05D1\u05E8 \u05E9\u05D7\u05D5\u05E9\u05D1\u05D9\u05DD \u05E2\u05DC\u05D9\u05D5; \u05D0\u05E3 \u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4 \u05DC\u05D0 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D7\u05E9\u05D5\u05D1 \u05E2\u05DC \u05DE\u05E6\u05D1 \u05D1\u05D5 \u05D4\u05D5\u05D0 \u05D9\u05E6\u05D8\u05E8\u05DA \u05DC\u05E4\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05D3\u05D9\u05D9\u05E8\u05D9\u05DD \u05E9\u05D2\u05E8\u05D9\u05DD \u05D1\u05D3\u05D9\u05E8\u05D4 \u05E9\u05DC\u05D5, \u05D5\u05D1\u05D8\u05D7 \u05E9\u05D0\u05E3 \u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4 \u05DC\u05D0 \u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05DF \u05D1\u05D1\u05E2\u05D9\u05D5\u05EA \u05D0\u05E9\u05E8 \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D2\u05E8\u05DD \u05DB\u05EA\u05D5\u05E6\u05D0\u05D4 \u05DE\u05D4\u05E4\u05E8\u05EA \u05D7\u05D5\u05D6\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05E9\u05DC\u05D5.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05D0\u05D1\u05DC \u05DE\u05D4 \u05E7\u05D5\u05E8\u05D4 \u05DB\u05D0\u05E9\u05E8 \u05D6\u05D4 \u05DC\u05D0 \u05D4\u05DE\u05E6\u05D1? \u05DE\u05D4 \u05D0\u05DD \"\u05E0\u05E4\u05DC\u05EA\u05DD\" \u05E2\u05DC \u05D3\u05D9\u05D9\u05E8 \u05E9\u05DE\u05E1\u05E8\u05D1 \u05DC\u05D4\u05EA\u05E4\u05E0\u05D5\u05EA?"), __jsx("br", null), __jsx("br", null), "\u05D1\u05DE\u05E7\u05E8\u05D4 \u05D6\u05D4, \u05DB\u05DE\u05D5\u05D1\u05DF, \u05D4\u05E2\u05E0\u05D9\u05D9\u05E0\u05D9\u05DD \u05DE\u05E1\u05EA\u05D1\u05DB\u05D9\u05DD - \u05D5\u05D4\u05D3\u05D0\u05D2\u05D5\u05EA \u05DE\u05EA\u05E8\u05D1\u05D5\u05EA. \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05D4\u05D5\u05D0 \u05DC\u05D0 \u05D3\u05D1\u05E8 \u05E9\u05DC \u05DE\u05D4 \u05D1\u05DB\u05DA! \u05D0\u05E4\u05D9\u05DC\u05D5 \u05D0\u05DD \u05DE\u05EA\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05DE\u05E6\u05D1\u05D9\u05DD \u05D0\u05E9\u05E8 \u05E2\u05DC \u05E4\u05D9 \u05D7\u05D5\u05E7 \u05E2\u05E9\u05D5\u05D9\u05D9\u05DD \u05DC\u05D4\u05D9\u05D5\u05EA \u05E2\u05D9\u05DC\u05D4 \u05DC\u05E4\u05D9\u05E0\u05D5\u05D9, \u05DC\u05DE\u05E9\u05DC:", __jsx("br", null), __jsx("br", null), "\u25CF \u05E9\u05D5\u05DB\u05E8 \u05E9\u05DC\u05D0 \u05DE\u05E9\u05DC\u05DD \u05D1\u05D6\u05DE\u05DF", __jsx("br", null), "\u25CF \u05E9\u05D5\u05DB\u05E8 \u05E9\u05DE\u05E1\u05E8\u05D1 \u05DC\u05D4\u05EA\u05E4\u05E0\u05D5\u05EA \u05DB\u05E9\u05EA\u05DE\u05D4 \u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05D7\u05D5\u05D6\u05D4", __jsx("br", null), "\u25CF \u05E9\u05D5\u05DB\u05E8 \u05D4\u05D2\u05D5\u05E8\u05DD \u05E0\u05D6\u05E7\u05D9\u05DD \u05DC\u05D3\u05D9\u05E8\u05D4", __jsx("br", null), __jsx("br", null), "\u05E2\u05D3\u05D9\u05D9\u05DF \u05DC\u05D0 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05E2\u05E9\u05D5\u05EA \u05D4\u05E8\u05D1\u05D4 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E4\u05E0\u05D5\u05EA \u05D0\u05D5\u05EA\u05D5. \u05D0\u05EA\u05DD \u05D1\u05D5\u05D5\u05D3\u05D0\u05D9 \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05D1\u05D3 \u05DC\u05D1\u05D9\u05EA \u05D4\u05DE\u05E9\u05E4\u05D8 \u05D0\u05D5 \u05DC\u05D4\u05D5\u05E6\u05D0\u05D4 \u05DC\u05E4\u05D5\u05E2\u05DC \u05D5\u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA \u05E8\u05E9\u05DE\u05D9 \u05E2\u05DC \u05E4\u05D9 \u05D7\u05D5\u05E7, \u05D0\u05DA \u05D9\u05D9\u05EA\u05DB\u05DF \u05D5\u05DB\u05D3\u05D0\u05D9 \u05D3\u05D5\u05D5\u05E7\u05D0 \u05DC\u05D4\u05D9\u05E2\u05D6\u05E8 \u05D1\u05D2\u05D5\u05E8\u05DD \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9, \u05D3\u05D5\u05D2\u05DE\u05EA \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05EA DiffeRent - \u05D0\u05E9\u05E8 \u05EA\u05E2\u05E9\u05D4 \u05D0\u05EA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05E9\u05D1\u05D9\u05DC\u05DB\u05DD, \u05D5\u05EA\u05E1\u05D9\u05E8 \u05DE\u05E2\u05DC\u05D9\u05DB\u05DD \u05DE\u05E9\u05D0 \u05DB\u05D1\u05D3 \u05E9\u05DC \u05D3\u05D0\u05D2\u05D5\u05EA \u05D5\u05D8\u05E8\u05D3\u05D5\u05EA \u05D4\u05E7\u05E9\u05D5\u05E8\u05D5\u05EA \u05DC\u05E0\u05DB\u05E1 \u05D5\u05DC\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D1\u05E2\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD.", __jsx("br", null), "\u05D0\u05D1\u05DC \u05E8\u05D2\u05E2, \u05D1\u05D5\u05D0\u05D5 \u05E0\u05D7\u05D6\u05D5\u05E8 \u05D0\u05D7\u05D5\u05E8\u05D4 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D4\u05D1\u05D9\u05DF \u05D1\u05DE\u05D4 \u05DE\u05D3\u05D5\u05D1\u05E8. \u05E2\u05DC \u05E4\u05E0\u05D9\u05D5 \u05D6\u05D4 \u05E0\u05E8\u05D0\u05D4 \u05D0\u05D5\u05DC\u05D9 \u05DE\u05D5\u05D6\u05E8 - \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05E9\u05D5\u05DB\u05E8 \u05DC\u05D0 \u05DE\u05EA\u05E0\u05D4\u05D2 \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05EA\u05D0\u05D9\u05DD, \u05D4\u05D3\u05D1\u05E8 \u05D4\u05DE\u05EA\u05D1\u05E7\u05E9 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05D4\u05D5\u05D0 \u05DC\u05D4\u05D5\u05E6\u05D9\u05D0\u05D5 \u05DE\u05D4\u05D3\u05D9\u05E8\u05D4 \u05D5\u05DC\u05DE\u05E6\u05D5\u05D0 \u05E9\u05D5\u05DB\u05E8 \u05D0\u05D7\u05E8 \u05D1\u05DE\u05E7\u05D5\u05DE\u05D5! \u05D0\u05D6 \u05DC\u05DE\u05D4 \u05D6\u05D4 \u05DB\u05DC \u05DB\u05DA \u05DE\u05E1\u05D5\u05D1\u05DA? \u05DC\u05DE\u05D4, \u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4, \u05D9\u05D3\u05D9\u05DB\u05DD \u05DB\u05DE\u05E2\u05D8 \u05DB\u05D1\u05D5\u05DC\u05D5\u05EA \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05EA\u05D7\u05E9\u05D1\u05D5 \u05E2\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05E9\u05E2\u05E9\u05D4 \u05D1\u05E2\u05D9\u05D5\u05EA \u05D5\u05DC\u05D0 \u05DE\u05D9\u05DE\u05E9 \u05D0\u05EA \u05D4\u05D4\u05EA\u05D7\u05D9\u05D9\u05D1\u05D5\u05D9\u05D5\u05EA \u05E9\u05DC\u05D5 \u05DB\u05DC\u05E4\u05D9\u05DB\u05DD, \u05DB\u05E4\u05D9 \u05E9\u05E0\u05E7\u05D1\u05E2 \u05D1\u05D7\u05D5\u05D6\u05D4 \u05E9\u05E0\u05D7\u05EA\u05DD \u05E2\u05DE\u05D5?", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05E8\u05D0\u05E9\u05D9\u05EA, \u05DB\u05D3\u05D0\u05D9 \u05DC\u05E2\u05E9\u05D5\u05EA \u05E1\u05D3\u05E8 \u05D5\u05DC\u05D4\u05D1\u05D9\u05DF \u05DE\u05D9\u05D4\u05D5 \u05D1\u05E2\u05E6\u05DD \u05D3\u05D9\u05D9\u05E8 \u05E1\u05E8\u05D1\u05DF:"), __jsx("br", null), __jsx("br", null), "\u05D3\u05D9\u05D9\u05E8 \u05D0\u05E9\u05E8 \u05E4\u05D5\u05D2\u05E2 \u05D1\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4, \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0 -", __jsx("br", null), "\u25CF \u05D0\u05D9\u05E0\u05D5 \u05DE\u05E9\u05DC\u05DD \u05D3\u05DE\u05D9 \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05D1\u05D6\u05DE\u05DF", __jsx("br", null), "\u25CF \u05DE\u05E9\u05DC\u05DD \u05D0\u05EA \u05D3\u05DE\u05D9 \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA, \u05D0\u05DA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D7\u05DC\u05E7\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3, \u05D5\u05DC\u05D0 \u05D0\u05EA \u05DE\u05DC\u05D5 \u05D4\u05E1\u05DB\u05D5\u05DD \u05DB\u05E4\u05D9 \u05E9\u05E0\u05E7\u05D1\u05E2 \u05D1\u05D7\u05D5\u05D6\u05D4", __jsx("br", null), "\u25CF \u05DE\u05E9\u05DC\u05DD \u05D0\u05EA \u05D3\u05DE\u05D9 \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA, \u05D0\u05DA \u05E2\u05D5\u05E9\u05D4 \u05D6\u05D0\u05EA \u05D1\u05D0\u05D9\u05D7\u05D5\u05E8 \u05D5\u05DE\u05E4\u05E8 \u05D0\u05EA \u05DE\u05D5\u05E2\u05D3 \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E2\u05E7\u05D1\u05D9", __jsx("br", null), "\u25CF \u05D3\u05D9\u05D9\u05E8 \u05E9\u05DE\u05E1\u05E8\u05D1 \u05DC\u05D4\u05EA\u05E4\u05E0\u05D5\u05EA \u05DE\u05D4\u05D3\u05D9\u05E8\u05D4 - \u05D2\u05DD \u05D0\u05DD \u05EA\u05DE\u05D4 \u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05D7\u05D5\u05D6\u05D4 \u05E2\u05DC\u05D9\u05D5 \u05D7\u05EA\u05DD \u05E2\u05DD \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4, \u05D5\u05D1\u05E4\u05D5\u05E2\u05DC \u05E4\u05E9\u05D5\u05D8 \u05E0\u05E9\u05D0\u05E8 \u05E2\u05DD \u05D7\u05E4\u05E6\u05D9\u05D5 \u05D1\u05D3\u05D9\u05E8\u05D4", __jsx("br", null), __jsx("br", null), "\u05D1\u05DB\u05DC \u05D4\u05DE\u05E7\u05E8\u05D9\u05DD \u05D4\u05DC\u05DC\u05D5, \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E0\u05E4\u05D2\u05E2 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05D4\u05DB\u05E0\u05E1\u05EA\u05D5 \u05E0\u05E4\u05D2\u05E2\u05EA (\u05D0\u05D5 \u05DC\u05D0 \u05E7\u05D9\u05D9\u05DE\u05EA \u05DB\u05DC\u05DC), \u05D5\u05D9\u05D9\u05EA\u05DB\u05DF \u05DB\u05D9 \u05D1\u05D9\u05E0\u05EA\u05D9\u05D9\u05DD \u05D0\u05E3 \u05E0\u05D2\u05E8\u05DE\u05D9\u05DD \u05E0\u05D6\u05E7\u05D9\u05DD \u05DC\u05D3\u05D9\u05E8\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05D3\u05D9\u05D9\u05E8. \u05D3\u05D9\u05D9\u05E8 \u05E1\u05E8\u05D1\u05DF, \u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC, \u05DC\u05D0 \u05D9\u05E0\u05D4\u05DC \u05E9\u05D9\u05D7 \u05E2\u05DD \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4; \u05D9\u05D9\u05EA\u05DB\u05DF \u05D0\u05E4\u05D9\u05DC\u05D5 \u05DB\u05D9 \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D9\u05E0\u05E1\u05D4 \u05DC\u05E4\u05E0\u05D5\u05EA \u05D0\u05DC\u05D9\u05D5 \u05D5\u05DC\u05D9\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u05D1\u05DE\u05D2\u05D5\u05D5\u05DF \u05D3\u05E8\u05DB\u05D9\u05DD, \u05D5\u05D0\u05E4\u05D9\u05DC\u05D5 \u05D9\u05D2\u05D9\u05E2 \u05DC\u05D3\u05D9\u05E8\u05D4 - \u05D0\u05DA \u05D4\u05D3\u05D9\u05D9\u05E8 \u05D9\u05E2\u05DC\u05DD \u05D0\u05D5 \u05D9\u05EA\u05E2\u05DC\u05DD \u05DE\u05E0\u05D9\u05E1\u05D9\u05D5\u05E0\u05D5\u05EA \u05D0\u05DC\u05D4.", __jsx("br", null), __jsx("br", null), "\u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05D4\u05DE\u05EA\u05E0\u05D4\u05D2 \u05DB\u05E4\u05D9 \u05E9\u05EA\u05D5\u05D0\u05E8 \u05D5\u05D0\u05D9\u05E0\u05D5 \u05DE\u05DE\u05DC\u05D0 \u05D0\u05EA \u05D4\u05EA\u05D7\u05D9\u05D9\u05D1\u05D5\u05D9\u05D5\u05EA\u05D9\u05D5 \u05D4\u05D5\u05D0 \u05D0\u05D5\u05DC\u05D9 \u05D4\u05D3\u05D1\u05E8 \u05D4\u05DE\u05EA\u05D1\u05E7\u05E9 \u05DC\u05E2\u05E9\u05D5\u05EA, \u05D5\u05D9\u05D9\u05EA\u05DB\u05DF \u05DB\u05D9 \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D9\u05D7\u05E9\u05D5\u05D1 \u05E2\u05DC \u05DB\u05DA \u05DE\u05D9\u05D3 \u05D5\u05D9\u05E0\u05E1\u05D4 \u05DC\u05E4\u05E2\u05D5\u05DC \u05D1\u05DB\u05D9\u05D5\u05D5\u05DF \u05D6\u05D4. \u05D0\u05D5\u05DC\u05DD \u05DC\u05DE\u05E8\u05D1\u05D4 \u05D4\u05E6\u05E2\u05E8, \u05D4\u05D7\u05D5\u05E7 \u05DE\u05D2\u05D1\u05D9\u05DC \u05D0\u05EA \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D1\u05E2\u05E0\u05D9\u05D9\u05DF. \u05DE\u05D0\u05D7\u05E8 \u05D5\u05E2\u05DC \u05E4\u05D9 \u05D4\u05D7\u05D5\u05E7, \u05D4\u05E9\u05D5\u05DB\u05E8 \u05DC\u05D0 \u05E0\u05D7\u05E9\u05D1 \u05DC\u05DE\u05E1\u05D9\u05D2 \u05D2\u05D1\u05D5\u05DC - \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D0\u05D9\u05E0\u05D5 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E4\u05E2\u05D5\u05DC \u05DC\u05E4\u05D9\u05E0\u05D5\u05D9\u05D5, \u05E2\u05DC \u05D0\u05E3 \u05E9\u05D4\u05D3\u05D9\u05E8\u05D4 \u05E9\u05D9\u05D9\u05DB\u05EA \u05DC\u05D5. \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DC\u05D0 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E4\u05E8\u05D5\u05E5 \u05DC\u05E0\u05DB\u05E1, \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0, \u05D5\u05D2\u05DD \u05DC\u05D0 \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05DB\u05D5\u05D7 \u05DC\u05E6\u05D5\u05E8\u05DA \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05E9\u05DC\u05D0 \u05DE\u05E9\u05DC\u05DD. \u05D4\u05D3\u05D1\u05E8 \u05DE\u05D5\u05D1\u05D9\u05DC \u05DB\u05DE\u05D5\u05D1\u05DF \u05DC\u05EA\u05E1\u05DB\u05D5\u05DC \u05E8\u05D1 - \u05E9\u05DB\u05DF \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DE\u05D5\u05E6\u05D0 \u05E2\u05E6\u05DE\u05D5 \u05D7\u05E1\u05E8 \u05D0\u05D5\u05E0\u05D9\u05DD, \u05D9\u05D3\u05D9\u05D5 \u05DB\u05D1\u05D5\u05DC\u05D5\u05EA \u05D5\u05E2\u05DC\u05D9\u05D5 \u05DC\u05D4\u05EA\u05E2\u05E1\u05E7 \u05D1\u05D4\u05DC\u05D9\u05DB\u05D9\u05DD \u05DE\u05E9\u05E4\u05D8\u05D9\u05D9\u05DD \u05D0\u05E9\u05E8 \u05D9\u05E2\u05DC\u05D5 \u05DC\u05D5 \u05DB\u05E1\u05E3 \u05E8\u05D1 \u05D5\u05D9\u05D2\u05D6\u05DC\u05D5 \u05DE\u05DE\u05E0\u05D5 \u05D6\u05DE\u05DF. \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D0\u05D9\u05E0\u05D5 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05E2\u05D1\u05D5\u05E8 \u05E2\u05DC \u05D4\u05D7\u05D5\u05E7, \u05D5\u05D9\u05D5\u05D3\u05E2 \u05DC\u05E6\u05D3 \u05D6\u05D0\u05EA \u05E9\u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05DE\u05E9\u05E4\u05D8\u05D9 \u05D9\u05D9\u05E7\u05D7 \u05E2\u05DB\u05E9\u05D9\u05D5 \u05D6\u05DE\u05DF \u05E8\u05D1 \u05D5\u05D9\u05D4\u05D9\u05D4 \u05DB\u05E8\u05D5\u05DA \u05D1\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05DB\u05DC\u05DB\u05DC\u05D9\u05D5\u05EA.", __jsx("br", null), __jsx("br", null), "\u05DC\u05DB\u05DF, \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4 \u05DE\u05D2\u05D9\u05E2 \u05DC\u05DE\u05E6\u05D1 \u05D1\u05D5 \u05D9\u05E9 \u05E6\u05D5\u05E8\u05DA \u05D1\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05DB\u05D2\u05D5\u05DF \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05E1\u05E8\u05D1\u05DF, \u05D7\u05E9\u05D5\u05D1 \u05E9\u05D9\u05D4\u05D9\u05D4 \u05DE\u05D5\u05D3\u05E2 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DC\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA\u05D9\u05D5, \u05D5\u05DB\u05D9\u05E6\u05D3 \u05D4\u05D5\u05D0 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E4\u05E2\u05D5\u05DC \u05D1\u05DE\u05E1\u05D2\u05E8\u05EA \u05D4\u05D7\u05D5\u05E7 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D4\u05D1\u05D9\u05D0 \u05D1\u05DB\u05DC \u05D6\u05D0\u05EA \u05DC\u05E4\u05D9\u05E0\u05D5\u05D9 \u05D4\u05D3\u05D9\u05D9\u05E8 \u05D4\u05D1\u05E2\u05D9\u05D9\u05EA\u05D9. \u05E4\u05E2\u05DE\u05D9\u05DD \u05E8\u05D1\u05D5\u05EA, \u05D1\u05E1\u05D9\u05D8\u05D5\u05D0\u05E6\u05D9\u05D5\u05EA \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4, \u05D1\u05E2\u05DC\u05D9 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05E0\u05D9\u05DD \u05DC\u05E4\u05E2\u05D5\u05DC \u05D1\u05E2\u05E6\u05DE\u05DD \u05D5\u05DE\u05E7\u05D5\u05D5\u05D9\u05DD \u05E9\u05D1\u05D3\u05E8\u05DB\u05D9 \u05D4\u05D9\u05D3\u05D1\u05E8\u05D5\u05EA \u05D4\u05DD \u05D9\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D2\u05E8\u05D5\u05DD \u05DC\u05D3\u05D9\u05D9\u05E8 \u05DC\u05E2\u05D6\u05D5\u05D1 \u05D5\u05D1\u05DB\u05DA \u05DC\u05E4\u05EA\u05D5\u05E8 \u05D0\u05EA \u05D4\u05D1\u05E2\u05D9\u05D4. \u05D0\u05DA \u05DC\u05DE\u05E8\u05D1\u05D4 \u05D4\u05E6\u05E2\u05E8, \u05DC\u05E2\u05EA\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D5\u05EA \u05D0\u05D9\u05DF \u05E9\u05D5\u05DD \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05E9\u05D9\u05D7 \u05E2\u05DD \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D4\u05E1\u05E8\u05D1\u05DF, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D9\u05D9\u05D1 \u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4 \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05D3\u05E8\u05DB\u05D9\u05DD \u05D0\u05D7\u05E8\u05D5\u05EA \u05DC\u05E6\u05D5\u05E8\u05DA \u05D4\u05EA\u05DE\u05D5\u05D3\u05D3\u05D5\u05EA \u05E2\u05DD \u05D4\u05E1\u05D9\u05D8\u05D5\u05D0\u05E6\u05D9\u05D4 \u05D5\u05E4\u05EA\u05E8\u05D5\u05DF", __jsx("br", null), "\u05D4\u05D1\u05E2\u05D9\u05D4. \u05D2\u05DD \u05DB\u05D0\u05E9\u05E8 \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DE\u05D2\u05D9\u05E2 \u05DC\u05D1\u05D9\u05E6\u05D5\u05E2 \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05DB\u05D2\u05D5\u05DF \u05E4\u05E0\u05D9\u05D9\u05D4 \u05DC\u05D1\u05D9\u05EA \u05DE\u05E9\u05E4\u05D8 \u05D0\u05D5 \u05D4\u05D5\u05E6\u05D0\u05D4 \u05DC\u05E4\u05D5\u05E2\u05DC \u05DC\u05E6\u05D5\u05E8\u05DA \u05D4\u05D5\u05E6\u05D0\u05EA \u05D3\u05D9\u05D9\u05E8 \u05E1\u05E8\u05D1\u05DF - \u05D4\u05D3\u05D1\u05E8 \u05DB\u05E8\u05D5\u05DA \u05DB\u05D0\u05DE\u05D5\u05E8 \u05D1\u05D6\u05DE\u05DF, \u05DB\u05E1\u05E3 \u05D5\u05D1\u05E2\u05D9\u05E7\u05E8 \u05D4\u05E8\u05D1\u05D4 \u05D3\u05D0\u05D2\u05D5\u05EA \u05D5\u05DB\u05D0\u05D1 \u05E8\u05D0\u05E9. DiffeRent \u05DE\u05E6\u05D9\u05E2\u05D4 \u05DC\u05D4\u05D5\u05E8\u05D9\u05D3 \u05DE\u05E2\u05DC\u05D9\u05DB\u05DD \u05D0\u05EA \u05DB\u05DC \u05D4\u05DE\u05E9\u05D0 \u05D4\u05D6\u05D4, \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DB\u05DA \u05E9\u05EA\u05D3\u05D0\u05D2 \u05DC\u05D9\u05D9\u05E6\u05D5\u05D2 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D5\u05D0\u05E4\u05D9\u05DC\u05D5 \u05DC\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DC\u05DB\u05DD - \u05D1\u05E2\u05DC\u05D9 \u05D4\u05E0\u05DB\u05E1 - \u05E2\u05D3 \u05E9\u05D4\u05E2\u05E0\u05D9\u05D9\u05DF \u05D9\u05D9\u05E4\u05EA\u05E8 \u05D5\u05D4\u05D3\u05D9\u05D9\u05E8 \u05D9\u05D9\u05E6\u05D0 \u05DE\u05D4\u05E0\u05DB\u05E1 \u05E9\u05DC\u05DB\u05DD.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05DC\u05E4\u05E0\u05D9 \u05EA\u05D5\u05DD \u05D4\u05D7\u05D5\u05D6\u05D4 - \u05D1\u05D0\u05D9\u05DC\u05D5 \u05DE\u05E6\u05D1\u05D9\u05DD \u05D6\u05D4 \u05D0\u05E4\u05E9\u05E8\u05D9, \u05D5\u05DB\u05D9\u05E6\u05D3 \u05E0\u05D9\u05EA\u05DF \u05DC\u05E2\u05E9\u05D5\u05EA \u05D6\u05D0\u05EA?"), __jsx("br", null), __jsx("br", null), "\u05D1\u05D0\u05D5\u05E4\u05DF \u05E2\u05E7\u05E8\u05D5\u05E0\u05D9, \u05DB\u05DE\u05D5\u05D1\u05DF \u05E9\u05D0\u05DD \u05D0\u05D9\u05DF \u05E1\u05D9\u05D1\u05D4 \u05DE\u05DE\u05E9\u05D9\u05EA \u05DC\u05E4\u05D9\u05E0\u05D5\u05D9 \u05D4\u05E9\u05D5\u05DB\u05E8 - \u05D0\u05D9\u05DF \u05D2\u05DD \u05E1\u05D9\u05D1\u05D4 \u05DC\u05E2\u05E9\u05D5\u05EA \u05D6\u05D0\u05EA; \u05DB\u05DC \u05E2\u05D5\u05D3 \u05E9\u05E0\u05D9 \u05D4\u05E6\u05D3\u05D3\u05D9\u05DD \u05D7\u05EA\u05DE\u05D5 \u05E2\u05DC \u05D7\u05D5\u05D6\u05D4 \u05D5\u05DB\u05DC \u05E2\u05D5\u05D3 \u05E9\u05E0\u05D9 \u05D4\u05E6\u05D3\u05D3\u05D9\u05DD \u05E2\u05D5\u05DE\u05D3\u05D9\u05DD \u05D1\u05EA\u05E0\u05D0\u05D9\u05DD \u05E2\u05DC\u05D9\u05D4\u05DD \u05D7\u05EA\u05DE\u05D5 - \u05D0\u05D9\u05DF \u05E6\u05D5\u05E8\u05DA \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05DE\u05E6\u05D1. \u05D0\u05DA \u05DB\u05D1\u05E8 \u05E8\u05D0\u05D9\u05E0\u05D5 \u05E9\u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4, \u05D1\u05D4\u05D7\u05DC\u05D8 \u05D9\u05D9\u05EA\u05DB\u05E0\u05D5 \u05DE\u05E6\u05D1\u05D9\u05DD \u05D1\u05D4\u05DD \u05EA\u05E8\u05E6\u05D5 \u05E9\u05D4\u05D3\u05D9\u05D9\u05E8 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 \u05D9\u05EA\u05E4\u05E0\u05D4 \u05DE\u05D4\u05E0\u05DB\u05E1.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05D1\u05D0\u05D9\u05DC\u05D5 \u05DE\u05E6\u05D1\u05D9\u05DD \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DC\u05D7\u05E9\u05D5\u05D1 \u05E2\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05D3\u05D9\u05D9\u05E8 \u05D1\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA?"), __jsx("br", null), __jsx("br", null), "\u25CF \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05D3\u05D9\u05D9\u05E8 \u05E1\u05E8\u05D1\u05DF - \u05DB\u05E4\u05D9 \u05E9\u05E8\u05D0\u05D9\u05E0\u05D5 \u05D1\u05DE\u05E7\u05E8\u05D9\u05DD \u05D4\u05DE\u05E4\u05D5\u05E8\u05D8\u05D9\u05DD \u05DC\u05DE\u05E2\u05DC\u05D4 (\u05DC\u05DE\u05E9\u05DC - \u05D0\u05D9\u05E0\u05D5 \u05DE\u05E9\u05DC\u05DD \u05D0\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D1\u05D6\u05DE\u05DF, \u05DE\u05E9\u05DC\u05DD \u05E8\u05E7 \u05D7\u05DC\u05E7 \u05DE\u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D0\u05D5 \u05E9\u05DE\u05E9\u05DC\u05DD \u05D0\u05D5\u05EA\u05D5 \u05D1\u05D0\u05D9\u05D7\u05D5\u05E8)", __jsx("br", null), "\u25CF \u05D4\u05D7\u05D5\u05D6\u05D4 \u05E2\u05D3\u05D9\u05D9\u05DF \u05DC\u05D0 \u05EA\u05DD, \u05D0\u05DA \u05DE\u05E1\u05D9\u05D1\u05D4 \u05DB\u05DC\u05E9\u05D4\u05D9, \u05D4\u05DE\u05E9\u05DA \u05D4\u05E9\u05D4\u05D5\u05EA \u05E9\u05DC \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D1\u05D3\u05D9\u05E8\u05D4 \u05EA\u05D2\u05E8\u05D5\u05DD \u05E0\u05D6\u05E7 \u05DC\u05D3\u05D9\u05E8\u05D4 \u05D5\u05DB\u05EA\u05D5\u05E6\u05D0\u05D4 \u05DE\u05DB\u05DA \u05D2\u05DD \u05DC\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 (\u05DC\u05DE\u05E9\u05DC - \u05D4\u05D3\u05D9\u05D9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05E0\u05D6\u05E7\u05D9\u05DD \u05D1\u05E2\u05D5\u05D3\u05D5 \u05E9\u05D5\u05D4\u05D4 \u05D1\u05D3\u05D9\u05E8\u05D4, \u05D5\u05D0\u05D9\u05E0\u05D5 \u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05DE\u05D4 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05E7\u05D5\u05E8\u05D4 \u05E9\u05DD)", __jsx("br", null), __jsx("br", null), "\u05D7\u05E9\u05D5\u05D1 \u05DC\u05D6\u05DB\u05D5\u05E8, \u05DB\u05D9 \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05DC\u05E4\u05E0\u05D9 \u05EA\u05D5\u05DD \u05D4\u05D7\u05D5\u05D6\u05D4 \u05D0\u05D9\u05E0\u05D5 \u05E0\u05E2\u05E9\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9, \u05D2\u05DD \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05E9\u05D5\u05DB\u05E8 \u05D4\u05E4\u05E8 \u05D0\u05EA \u05D4\u05EA\u05E0\u05D0\u05D9\u05DD (\u05DC\u05DE\u05E9\u05DC \u05D1\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05E9\u05E4\u05D5\u05E8\u05D8\u05D5 \u05DC\u05E2\u05D9\u05DC). \u05D4\u05D7\u05D5\u05E7 \u05DE\u05D0\u05E4\u05E9\u05E8, \u05D0\u05DE\u05E0\u05DD, \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05E9\u05DC\u05D0 \u05DE\u05E9\u05DC\u05DD - \u05D0\u05DA \u05E2\u05DC \u05DE\u05E0\u05EA \u05E9\u05D3\u05D1\u05E8 \u05DB\u05D6\u05D4 \u05D9\u05E7\u05E8\u05D4, \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E6\u05E8\u05D9\u05DA \u05DC\u05E2\u05D1\u05D5\u05E8 \u05D3\u05E8\u05DA - \u05D0\u05E8\u05D5\u05DB\u05D4 \u05D5\u05E1\u05D1\u05D5\u05DB\u05D4 \u05DC\u05E2\u05EA\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D5\u05EA - \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D1\u05D9\u05E8\u05D5\u05E7\u05E8\u05D8\u05D9\u05D4 \u05E8\u05D1\u05D4, \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9\u05DD \u05E9\u05E0\u05D9\u05D3\u05D5\u05E0\u05D9\u05DD \u05D1\u05D1\u05D9\u05EA \u05D4\u05DE\u05E9\u05E4\u05D8, \u05D4\u05E6\u05D2\u05EA \u05E8\u05D0\u05D9\u05D5\u05EA \u05D5\u05D4\u05D5\u05DB\u05D7\u05D5\u05EA \u05D5\u05E2\u05D5\u05D3. \u05E2\u05DC \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DC\u05D4\u05D1\u05D9\u05DF \u05D4\u05D0\u05DD \u05D0\u05DB\u05DF \u05D4\u05D5\u05D0 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DC\u05D7\u05E9\u05D5\u05D1 \u05D1\u05DB\u05DC\u05DC \u05E2\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05D4\u05D3\u05D9\u05D9\u05E8, \u05D5\u05D4\u05D0\u05DD \u05D4\u05DE\u05E2\u05E9\u05D9\u05DD \u05D0\u05D5\u05EA\u05DD \u05DE\u05D1\u05E6\u05E2 \u05D4\u05D3\u05D9\u05D9\u05E8 \u05D0\u05DB\u05DF \u05E0\u05DB\u05E0\u05E1\u05D9\u05DD \u05EA\u05D7\u05EA \u05D4\u05D2\u05D3\u05E8\u05D4 \u05E9\u05DC \"\u05D3\u05D9\u05D9\u05E8 \u05E1\u05E8\u05D1\u05DF\".", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05D1\u05D0\u05D9\u05DC\u05D5 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D4\u05D7\u05D5\u05E7 \u05DE\u05D0\u05E4\u05E9\u05E8 \u05E9\u05E7\u05D9\u05DC\u05EA \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05E9\u05DC\u05D0 \u05DE\u05E9\u05DC\u05DD?"), __jsx("br", null), __jsx("br", null), "\u25CF \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05E9\u05D5\u05DB\u05E8 \u05D0\u05D9\u05E0\u05D5 \u05DE\u05E9\u05DC\u05DD \u05D0\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4, \u05DB\u05E4\u05D9 \u05E9\u05E0\u05E7\u05D1\u05E2 \u05D1\u05D7\u05D5\u05D6\u05D4", __jsx("br", null), "\u25CF \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05E9\u05D5\u05DB\u05E8 \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D1\u05E0\u05DB\u05E1 \u05DC\u05E6\u05D5\u05E8\u05DA \u05D9\u05D9\u05E2\u05D5\u05D3 \u05D0\u05D7\u05E8 \u05DE\u05D4\u05DE\u05E7\u05D5\u05E8\u05D9 - \u05DC\u05DE\u05E9\u05DC, \u05E4\u05D5\u05EA\u05D7 \u05D7\u05E0\u05D5\u05EA \u05D1\u05D3\u05D9\u05E8\u05D4 \u05E9\u05D9\u05D5\u05E2\u05D3\u05D4 \u05DC\u05DE\u05D2\u05D5\u05E8\u05D9\u05DD (\u05D1\u05DE\u05E6\u05D1 \u05D6\u05D4 - \u05D4\u05D7\u05D5\u05D6\u05D4 \u05D7\u05D9\u05D9\u05D1 \u05DC\u05DB\u05DC\u05D5\u05DC \u05E1\u05E2\u05D9\u05E3 \u05D4\u05DE\u05E6\u05D9\u05D9\u05DF \u05D6\u05D0\u05EA, \u05D5\u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D0\u05D9\u05DF \u05E1\u05E2\u05D9\u05E3 \u05DB\u05D6\u05D4 - \u05D6\u05D5\u05D4\u05D9 \u05DC\u05D0 \u05E2\u05D9\u05DC\u05D4 \u05DC\u05E4\u05D9\u05E0\u05D5\u05D9 \u05D4\u05D3\u05D9\u05D9\u05E8)", __jsx("br", null), "\u25CF \u05E9\u05D5\u05DB\u05E8 \u05D4\u05DE\u05E9\u05DB\u05D9\u05E8, \u05DE\u05D9\u05D5\u05D6\u05DE\u05EA\u05D5 \u05D5\u05D1\u05D0\u05D5\u05E4\u05DF \u05E2\u05E6\u05DE\u05D0\u05D9, \u05D7\u05D3\u05E8 \u05D1\u05D3\u05D9\u05E8\u05D4 \u05DC\u05D3\u05D9\u05D9\u05E8-\u05DE\u05E9\u05E0\u05D4 \u05D0\u05D7\u05E8 - \u05D5\u05DE\u05E8\u05D5\u05D5\u05D9\u05D7 \u05DE\u05DB\u05DA", __jsx("br", null), "\u25CF \u05E9\u05D5\u05DB\u05E8 \u05D0\u05E9\u05E8 \u05D2\u05E8\u05DD \u05DC\u05D3\u05D9\u05E8\u05D4 \u05E0\u05D6\u05E7\u05D9\u05DD, \u05D5\u05E2\u05E9\u05D4 \u05D6\u05D0\u05EA \u05D1\u05DB\u05D5\u05D5\u05E0\u05D4 \u05D5\u05DE\u05EA\u05D5\u05DA \u05DE\u05D8\u05E8\u05D4 \u05DC\u05D4\u05D6\u05D9\u05E7 \u05D5\u05DC\u05E4\u05D2\u05D5\u05E2 \u05D1\u05D3\u05D9\u05E8\u05D4 (\u05D5\u05E2\u05DC \u05D9\u05D3\u05D9 \u05DB\u05DA - \u05D2\u05DD \u05D1\u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1)", __jsx("br", null), __jsx("br", null), "\u05DB\u05D0\u05DE\u05D5\u05E8, \u05E2\u05DC \u05D0\u05E3 \u05D4\u05DE\u05E7\u05E8\u05D9\u05DD \u05D4\u05E8\u05D1\u05D9\u05DD \u05D9\u05D7\u05E1\u05D9\u05EA \u05D1\u05D4\u05DD \u05E0\u05D9\u05EA\u05DF \u05DC\u05D7\u05E9\u05D5\u05D1 \u05E2\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05DC\u05E4\u05E0\u05D9 \u05EA\u05D5\u05DD \u05D4\u05D7\u05D5\u05D6\u05D4 - \u05D0\u05D9\u05DF \u05D6\u05D4 \u05D3\u05D1\u05E8 \u05E4\u05E9\u05D5\u05D8. \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D4\u05E7\u05DC \u05E2\u05DC\u05D9\u05DB\u05DD \u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4 \u05D0\u05EA \u05DB\u05DC \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05DC\u05D1\u05D9\u05EA \u05DE\u05E9\u05E4\u05D8, \u05D4\u05E6\u05D2\u05EA \u05D4\u05E8\u05D0\u05D9\u05D5\u05EA \u05D5\u05D4\u05D5\u05DB\u05D7\u05EA\u05DF \u05D5\u05D4\u05E9\u05E7\u05E2\u05EA \u05D6\u05DE\u05DF \u05D5\u05DB\u05E1\u05E3 \u05E8\u05D1\u05D9\u05DD \u05D1\u05DB\u05DA - DiffeRent \u05E2\u05D5\u05E9\u05D4 \u05D6\u05D0\u05EA \u05D1\u05DE\u05E7\u05D5\u05DE\u05DB\u05DD, \u05D5\u05D3\u05D5\u05D0\u05D2\u05EA \u05DC\u05DB\u05DD \u05DC\u05D9\u05D9\u05E6\u05D5\u05D2 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D5\u05DC\u05DB\u05DC \u05D4\u05E0\u05DC\u05D5\u05D5\u05D4 \u05DC\u05DB\u05DA. \u05D7\u05E9\u05D5\u05D1 \u05DC\u05D6\u05DB\u05D5\u05E8 \u05DB\u05D9 \u05EA\u05D4\u05DC\u05D9\u05DA \u05EA\u05D1\u05D9\u05E2\u05D4 \u05D4\u05DE\u05EA\u05E0\u05D4\u05DC \u05DC\u05E6\u05D5\u05E8\u05DA \u05E4\u05D9\u05E0\u05D5\u05D9 \u05D3\u05D9\u05D9\u05E8 \u05D1\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA, \u05D0\u05DE\u05D5\u05E8 \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05E2\u05DC \u05E4\u05D9 \u05D7\u05D5\u05E7 \u05D1\u05EA\u05D5\u05DA \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD \u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8 \u05DE\u05E8\u05D2\u05E2 \u05D4\u05D2\u05E9\u05EA \u05D4\u05EA\u05D1\u05D9\u05E2\u05D4; \u05D1\u05EA\u05E7\u05D5\u05E4\u05D4 \u05D4\u05D6\u05D5, \u05E0\u05D9\u05EA\u05DF \u05DC\u05E7\u05D1\u05DC \u05D1\u05DE\u05E1\u05D2\u05E8\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05D0\u05EA \u05DB\u05DC \u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05DE\u05E9\u05E4\u05D8, \u05D5\u05D0\u05E4\u05D9\u05DC\u05D5 \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05E2\u05D3 \u05DC\u05DE\u05E6\u05D9\u05D0\u05EA \u05D3\u05D9\u05D9\u05E8 \u05D7\u05DC\u05D5\u05E4\u05D9. \u05DC\u05DE\u05E8\u05D1\u05D4 \u05D4\u05E6\u05E2\u05E8, \u05D9\u05D9\u05EA\u05DB\u05DF \u05D5\u05D0\u05EA\u05DD \u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4 \u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05E0\u05D9\u05DD \u05DB\u05E8\u05D2\u05E2 \u05DC\u05E4\u05E0\u05D5\u05EA \u05D3\u05D9\u05D9\u05E8 \u05D1\u05E9\u05DC \u05D0\u05D7\u05EA \u05D4\u05E1\u05D9\u05D1\u05D5\u05EA \u05D4\u05DE\u05E4\u05D5\u05E8\u05D8\u05D5\u05EA. \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E2\u05E9\u05D5\u05EA \u05E1\u05D3\u05E8, \u05DE\u05D9\u05E7\u05D3\u05E0\u05D5 \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD \u05D0\u05EA \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D1\u05D5 \u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05D0\u05D9\u05DA \u05D1\u05E2\u05E6\u05DD \u05DE\u05EA\u05D1\u05E6\u05E2 \u05EA\u05D4\u05DC\u05D9\u05DA \u05DC\u05E6\u05D5\u05E8\u05DA \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05DE\u05E0\u05DB\u05E1?"), __jsx("br", null), __jsx("br", null), "\u05E8\u05D0\u05E9\u05D9\u05EA, \u05D9\u05E9 \u05DC\u05D4\u05D1\u05D9\u05DF \u05D4\u05D0\u05DD \u05D1\u05D0\u05DE\u05EA \u05D4\u05DE\u05E6\u05D1 \u05D4\u05E0\u05EA\u05D5\u05DF \u05D4\u05D5\u05D0 \u05E9\u05D4\u05D3\u05D9\u05D9\u05E8 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05EA\u05E4\u05E0\u05D5\u05EA. \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05E9\u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4 \u05E0\u05E8\u05D2\u05D9\u05E9 \u05E9\u05D0\u05E0\u05D5 \u05DB\u05D1\u05E8 \u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05D3\u05D9\u05D9\u05E8\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD \u05DC\u05D3\u05D9\u05E8\u05D4, \u05D0\u05D5 \u05E9-\"\u05E0\u05DE\u05D0\u05E1 \u05DC\u05E0\u05D5\" \u05DE\u05D4\u05EA\u05E0\u05D4\u05DC\u05D5\u05EA \u05DE\u05D5\u05DC \u05D4\u05D3\u05D9\u05D9\u05E8 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 - \u05D0\u05DA \u05D0\u05DC\u05D5 \u05DB\u05DE\u05D5\u05D1\u05DF \u05DC\u05D0 \u05E1\u05D9\u05D1\u05D5\u05EA \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9\u05D5\u05EA; \u05DB\u05DC \u05E2\u05D5\u05D3 \u05DE\u05EA\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05DB\u05DC \u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05D6\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05D3\u05D5 \u05E6\u05D3\u05D3\u05D9, \u05D0\u05D9\u05DF \u05E1\u05D9\u05D1\u05D4 \u05DE\u05DE\u05E9\u05D9\u05EA \u05DC\u05E6\u05D5\u05E8\u05DA \u05E4\u05D9\u05E0\u05D5\u05D9 \u05D3\u05D9\u05D9\u05E8 \u05DE\u05D3\u05D9\u05E8\u05D4 \u05E9\u05DB\u05D5\u05E8\u05D4.", __jsx("br", null), __jsx("br", null), "\u05DC\u05E2\u05D5\u05DE\u05EA \u05D6\u05D0\u05EA, \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D1\u05DB\u05DC \u05D6\u05D0\u05EA \u05D4\u05D1\u05E0\u05D5 \u05E9\u05D4\u05D3\u05D9\u05D9\u05E8 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 \u05E4\u05D5\u05E2\u05DC \u05D1\u05E6\u05D5\u05E8\u05D4 \u05DE\u05D6\u05D9\u05E7\u05D4 \u05D5\u05DE\u05E4\u05E8 \u05EA\u05E0\u05D0\u05D9 \u05D0\u05D7\u05D3 (\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8) \u05DE\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05D6\u05D4 - \u05DB\u05D1\u05E8 \u05D1\u05E8\u05D5\u05E8 \u05DC\u05E0\u05D5 \u05E9\u05D4\u05D5\u05D0 \u05E6\u05E8\u05D9\u05DA \u05DC\u05E6\u05D0\u05EA \u05DE\u05D4\u05D3\u05D9\u05E8\u05D4, \u05D5\u05DB\u05D0\u05DF \u05DE\u05EA\u05D7\u05D9\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D0\u05DE\u05D9\u05EA\u05D9:", __jsx("br", null), __jsx("br", null), "\u25CF \u05E8\u05D0\u05E9\u05D9\u05EA - \u05DE\u05D5\u05DE\u05DC\u05E5 \u05DC\u05D0\u05E1\u05D5\u05E3 \u05D0\u05EA \u05DB\u05DC \u05D4\u05D4\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05D9\u05E9 \u05DC\u05DB\u05DD \u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4, \u05E2\u05DC \u05D4\u05D4\u05EA\u05E0\u05D4\u05DC\u05D5\u05EA \u05D4\u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4 \u05E9\u05DC \u05D4\u05E9\u05D5\u05DB\u05E8. \u05DC\u05DE\u05E9\u05DC - \u05D4\u05D5\u05D3\u05E2\u05D5\u05EA \u05E2\u05DC \u05E6'\u05E7\u05D9\u05DD \u05E9\u05DC\u05D5 \u05E9\u05D7\u05D6\u05E8\u05D5, \u05D4\u05D5\u05DB\u05D7\u05D5\u05EA \u05E2\u05DC \u05DB\u05DA \u05E9\u05DC\u05D0 \u05E9\u05D9\u05DC\u05DD \u05DC\u05DB\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05D6\u05DE\u05DF, \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA (\u05D0\u05DD \u05D9\u05E9) \u05E9\u05DC \u05E0\u05D6\u05E7\u05D9\u05DD \u05E9\u05D2\u05E8\u05DD \u05D1\u05D3\u05D9\u05E8\u05D4, \u05DB\u05EA\u05D1 \u05D4\u05D7\u05D5\u05D6\u05D4 \u05D4\u05DE\u05E2\u05D9\u05D3 \u05E2\u05DC \u05DB\u05DA \u05E9\u05D4\u05E9\u05D5\u05DB\u05E8 \u05DB\u05D1\u05E8 \u05E6\u05E8\u05D9\u05DA \u05DC\u05E6\u05D0\u05EA \u05DE\u05D4\u05D3\u05D9\u05E8\u05D4 \u05D0\u05DA \u05D8\u05E8\u05DD \u05E2\u05E9\u05D4 \u05D6\u05D0\u05EA, \u05D5\u05DB\u05DF \u05D4\u05DC\u05D0\u05D4. \u05DB\u05DB\u05DC \u05E9\u05D9\u05E9 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05E1\u05DE\u05DB\u05D9\u05DD \u05D5\u05D4\u05D5\u05DB\u05D7\u05D5\u05EA - \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05DE\u05E0\u05DB\u05E1 \u05D9\u05D4\u05D9\u05D4 \u05E7\u05DC \u05D9\u05D5\u05EA\u05E8 \u05D1\u05D0\u05D5\u05E4\u05DF \u05D9\u05D7\u05E1\u05D9.", __jsx("br", null), "\u25CF \u05E9\u05DC\u05D9\u05D7\u05EA \u05DE\u05DB\u05EA\u05D1\u05D9 \u05D4\u05EA\u05E8\u05D0\u05D4 \u05DC\u05E9\u05D5\u05DB\u05E8 - \u05D1\u05D4\u05DD \u05D9\u05E4\u05D5\u05E8\u05D8 \u05D1\u05DE\u05D9\u05D3\u05EA \u05D4\u05D0\u05E4\u05E9\u05E8 \u05DE\u05D3\u05D5\u05E2 \u05D0\u05EA\u05DD \u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4 \u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05E0\u05D9\u05DD \u05E9\u05D4\u05D3\u05D9\u05D9\u05E8 \u05D9\u05EA\u05E4\u05E0\u05D4 (\u05D5\u05DB\u05D0\u05DF \u05E0\u05DB\u05E0\u05E1\u05EA \u05DB\u05DC \u05D4\u05E4\u05E8\u05EA \u05D7\u05D5\u05D6\u05D4 \u05E9\u05D4\u05D3\u05D9\u05D9\u05E8 \u05D1\u05D9\u05E6\u05E2)", __jsx("br", null), "\u25CF \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05E9\u05D5\u05DB\u05E8 \u05D0\u05D9\u05E0\u05D5 \u05DE\u05EA\u05E4\u05E0\u05D4 - \u05D0\u05EA\u05DD \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05D1\u05D9\u05EA \u05D4\u05DE\u05E9\u05E4\u05D8, \u05D5\u05DC\u05EA\u05D1\u05D5\u05E2 \u05D0\u05EA \u05D4\u05D5\u05E6\u05D0\u05EA \u05D4\u05E9\u05D5\u05DB\u05E8 \u05DE\u05D4\u05D3\u05D9\u05E8\u05D4. \u05D1\u05E9\u05DC\u05D1 \u05D6\u05D4, \u05DC\u05E9\u05D5\u05DB\u05E8 \u05D9\u05E9 \u05D6\u05DB\u05D5\u05EA \u05DC\u05D4\u05E6\u05D9\u05D2 \u05DB\u05EA\u05D1 \u05D4\u05D2\u05E0\u05D4, \u05D0\u05DA \u05D1\u05DB\u05DC \u05DE\u05E7\u05E8\u05D4 - \u05DC\u05D0\u05D7\u05E8 \u05D7\u05D5\u05D3\u05E9 \u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8 - \u05D9\u05EA\u05E7\u05D9\u05D9\u05DD \u05D3\u05D9\u05D5\u05DF \u05D1\u05E2\u05E0\u05D9\u05D9\u05DF.", __jsx("br", null), "\u25CF \u05D1\u05E9\u05DC\u05D1 \u05D4\u05D1\u05D0, \u05D5\u05D1\u05E4\u05E8\u05E7 \u05D6\u05DE\u05DF \u05E9\u05DC\u05D0 \u05D9\u05E2\u05DC\u05D4 \u05E2\u05DC \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD \u05DE\u05E8\u05D2\u05E2 \u05D4\u05D2\u05E9\u05EA \u05D4\u05EA\u05D1\u05D9\u05E2\u05D4, \u05D1\u05D9\u05EA \u05D4\u05DE\u05E9\u05E4\u05D8 \u05D9\u05E6\u05D9\u05D2 \u05E4\u05E1\u05E7 \u05D3\u05D9\u05DF.", __jsx("br", null), __jsx("br", null), "\u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D1\u05E2\u05D9\u05E7\u05E8\u05D5 \u05DC\u05D0 \u05DE\u05D0\u05D5\u05D3 \u05DE\u05E1\u05D5\u05D1\u05DA, \u05D0\u05DA \u05D9\u05E9 \u05DC\u05D6\u05DB\u05D5\u05E8 \u05DB\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05D4\u05D7\u05DC\u05D8 \u05D3\u05D5\u05E8\u05E9 \u05D4\u05E9\u05E7\u05E2\u05EA \u05E1\u05DB\u05D5\u05DE\u05D9 \u05DB\u05E1\u05E3 \u05D1\u05DC\u05EA\u05D9 \u05DE\u05D1\u05D5\u05D8\u05DC\u05D9\u05DD \u05D5\u05D4\u05EA\u05E2\u05E1\u05E7\u05D5\u05EA \u05D1\u05DE\u05E1\u05DE\u05DB\u05D9\u05DD \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9\u05D9\u05DD \u05D0\u05E9\u05E8 \u05D9\u05E9\u05DE\u05E9\u05D5 \u05DB\u05D4\u05D5\u05DB\u05D7\u05D5\u05EA \u05DE\u05D5\u05DC \u05D1\u05D9\u05EA \u05D4\u05DE\u05E9\u05E4\u05D8 - \u05DB\u05DC \u05D6\u05D4 \u05D1\u05EA\u05D5\u05DA \u05E4\u05E8\u05E7 \u05D6\u05DE\u05DF \u05E9\u05D1\u05D5 \u05D1\u05D9\u05E0\u05EA\u05D9\u05D9\u05DD \u05E2\u05DC\u05D5\u05DC\u05D9\u05DD \u05DC\u05D4\u05D9\u05D2\u05E8\u05DD \u05D4\u05E4\u05E1\u05D3\u05D9\u05DD \u05DC\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4. \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05DE\u05E0\u05DB\u05E1 - \u05D2\u05DD \u05D0\u05DD \u05DC\u05D5\u05E7\u05D7 \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD \u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8 - \u05D0\u05D9\u05E0\u05D5 \u05D3\u05D1\u05E8 \u05E4\u05E9\u05D5\u05D8, \u05D5\u05DB\u05D3\u05D0\u05D9 \u05DC\u05D4\u05D9\u05E2\u05D6\u05E8 \u05D1\u05E9\u05D9\u05E8\u05D5\u05EA \u05D0\u05E9\u05E8 \u05D1\u05DE\u05E9\u05DA \u05D4\u05D6\u05DE\u05DF \u05D4\u05D6\u05D4 \u05D9\u05D3\u05D0\u05D2 \u05D2\u05DD \u05DC\u05E6\u05D3 \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9 \u05E9\u05DC \u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05DE\u05E9\u05E4\u05D8 \u05D5\u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E9\u05DE\u05D2\u05D9\u05E2 \u05DC\u05DB\u05DD, \u05D5\u05D2\u05DD \u05DC\u05D9\u05D9\u05E6\u05D5\u05D2 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D4\u05D4\u05D5\u05DC\u05DD \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD (\u05DC\u05DE\u05E9\u05DC - \u05E2\u05D5\u05E8\u05DA \u05D3\u05D9\u05DF \u05D4\u05DE\u05EA\u05DE\u05D7\u05D4 \u05D1\u05D3\u05D9\u05E0\u05D9 \u05DE\u05E7\u05E8\u05E7\u05E2\u05D9\u05DF \u05D5\u05E0\u05D3\u05DC\"\u05DF).", __jsx("br", null), __jsx("br", null), "\u05DC\u05E1\u05D9\u05DB\u05D5\u05DD, \u05DB\u05D1\u05E8 \u05D1\u05E8\u05D5\u05E8 \u05E9\u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4 \u05D0\u05EA\u05DD \u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05E0\u05D9\u05DD - \u05D5\u05D1\u05E6\u05D3\u05E7 - \u05DC\u05D4\u05E9\u05E7\u05D9\u05E2 \u05DB\u05DE\u05D4 \u05E9\u05E4\u05D7\u05D5\u05EA \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05D5\u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E8\u05D0\u05E9 \u05E9\u05E7\u05D8. \u05D0\u05E3 \u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4 \u05DC\u05D0 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D4\u05EA\u05E2\u05E1\u05E7 \u05E2\u05DD \u05D3\u05D9\u05D9\u05E8 \u05E9\u05DE\u05E1\u05E8\u05D1 \u05DC\u05D4\u05EA\u05E4\u05E0\u05D5\u05EA, \u05DE\u05D0\u05D7\u05E8 \u05D5\u05D6\u05D5 \u05D4\u05EA\u05E2\u05E1\u05E7\u05D5\u05EA \u05D4\u05D2\u05D5\u05D6\u05DC\u05EA \u05DE\u05E9\u05D0\u05D1\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD - \u05D6\u05DE\u05DF, \u05DB\u05E1\u05E3, \u05D5\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D5\u05EA - \u05D2\u05DD \u05DB\u05D0\u05D1 \u05DC\u05D1 \u05E2\u05DC \u05DB\u05DA \u05E9\u05D4\u05D3\u05D1\u05E8\u05D9\u05DD \u05DC\u05D0 \u05DE\u05E1\u05EA\u05D3\u05E8\u05D9\u05DD \u05DB\u05DE\u05D5 \u05E9\u05E6\u05E8\u05D9\u05DA. \u05D0\u05D7\u05EA \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05E9\u05E2\u05E9\u05D5\u05D9\u05D5\u05EA \u05DC\u05D4\u05E7\u05DC \u05E2\u05DC\u05D9\u05DB\u05DD, \u05D4\u05D9\u05D0 \u05DC\u05D4\u05D9\u05E2\u05D6\u05E8 \u05D1\u05E9\u05D9\u05E8\u05D5\u05EA \u05D0\u05E9\u05E8 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05E2\u05E0\u05D9\u05E7 \u05DC\u05DB\u05DD \u05DE\u05E6\u05D3 \u05D0\u05D7\u05D3 \u05E8\u05D0\u05E9 \u05E9\u05E7\u05D8 \u05DC\u05D8\u05D5\u05D5\u05D7 \u05D0\u05E8\u05D5\u05DA, \u05D5\u05DE\u05E6\u05D3 \u05E9\u05E0\u05D9 - \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05D3\u05D1\u05E8\u05D9\u05DD \u05DE\u05E1\u05EA\u05D1\u05DB\u05D9\u05DD - \u05D9\u05D3\u05D0\u05D2 \u05DC\u05DB\u05DD \u05D2\u05DD \u05DC\u05D9\u05D9\u05E6\u05D5\u05D2 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D4\u05D5\u05DC\u05DD \u05D1\u05DB\u05DC \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05E7\u05E9\u05D5\u05E8 \u05DC\u05E4\u05D9\u05E0\u05D5\u05D9 \u05E9\u05D5\u05DB\u05E8 \u05DE\u05E0\u05DB\u05E1 \u05D0\u05E9\u05E8 \u05EA\u05E0\u05D4\u05DC\u05D5 \u05DE\u05D5\u05DC \u05D1\u05D9\u05EA \u05DE\u05E9\u05E4\u05D8 \u05D0\u05D5 \u05DE\u05D5\u05DC \u05D4\u05D4\u05D5\u05E6\u05D0\u05D4 \u05DC\u05E4\u05D5\u05E2\u05DC."));
        break;

      case 3:
        pageHeader = "תשלום שכר דירה בכרטיס אשראי";
        output = __jsx("div", null, __jsx("p", null, "\u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D5\u05EA \u05D0\u05E9\u05E8 \u05D1\u05E8\u05E9\u05D5\u05EA\u05DD \u05E0\u05DB\u05E1 \u05DC\u05D4\u05E9\u05DB\u05E8\u05D4, \u05D0\u05EA\u05DD \u05D1\u05D5\u05D5\u05D3\u05D0\u05D9 \u05DE\u05D5\u05E6\u05D0\u05D9\u05DD \u05E2\u05E6\u05DE\u05DB\u05DD \u05DE\u05E7\u05D3\u05D9\u05E9\u05D9\u05DD \u05DE\u05E9\u05D0\u05D1\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD (\u05D6\u05DE\u05DF, \u05DB\u05E1\u05E3, \u05E0\u05D9\u05D9\u05E8\u05EA, \u05E0\u05E1\u05D9\u05E2\u05D5\u05EA \u05DC\u05E4\u05D2\u05D9\u05E9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D3) \u05DC\u05E6\u05D5\u05E8\u05DA \u05D4\u05EA\u05E2\u05E1\u05E7\u05D5\u05EA \u05E2\u05DD \u05D4\u05E6\u05D3 \u05D4- \"\u05D8\u05DB\u05E0\u05D9\" \u05E9\u05DC \u05D4\u05E9\u05DB\u05E8\u05EA \u05D3\u05D9\u05E8\u05D4; \u05D1\u05EA\u05D7\u05D9\u05DC\u05D4 \u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05DE\u05E6\u05D5\u05D0 \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05DE\u05D9\u05DD \u05D5\u05DC\u05D1\u05E8\u05E8 \u05E4\u05E8\u05D8\u05D9\u05DD \u05E2\u05DC\u05D9\u05D4\u05DD \u05D1\u05DE\u05D9\u05D3\u05EA \u05D4\u05D0\u05E4\u05E9\u05E8, \u05DC\u05D0\u05D7\u05E8 \u05DE\u05DB\u05DF \u05D9\u05E9 \u05E6\u05D5\u05E8\u05DA \u05D1\u05D7\u05EA\u05D9\u05DE\u05D4 \u05E2\u05DC \u05D7\u05D5\u05D6\u05D4 \u05EA\u05E7\u05D9\u05DF \u05D5\u05EA\u05E7\u05E3 \u05DE\u05E9\u05E4\u05D8\u05D9\u05EA, \u05D5\u05D1\u05D9\u05DF \u05DC\u05D1\u05D9\u05DF - \u05D3\u05D0\u05D2\u05D4 \u05DC\u05EA\u05E7\u05D9\u05E0\u05D5\u05EA\u05D4 \u05E9\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4. \u05DC\u05D0\u05D7\u05E8 \u05DB\u05DC \u05D6\u05D0\u05EA, \u05DE\u05D2\u05D9\u05E2 \u05D4\u05D7\u05DC\u05E7 \u05D4\u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D9 \u05D1\u05D0\u05DE\u05EA: \u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05D3\u05D0\u05D5\u05D2 \u05DC\u05DB\u05DA \u05E9\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8-\u05D4\u05D3\u05D9\u05E8\u05D4 \u05D9\u05D2\u05D9\u05E2 \u05DC\u05D7\u05E9\u05D1\u05D5\u05DF \u05D4\u05D1\u05E0\u05E7 \u05E9\u05DC\u05DB\u05DD \u05DE\u05D3\u05D9 \u05D7\u05D5\u05D3\u05E9, \u05D1\u05E6\u05D5\u05E8\u05D4 \u05DE\u05E1\u05D5\u05D3\u05E8\u05EA \u05D5\u05D1\u05DE\u05DC\u05D5\u05D0\u05D5.", __jsx("br", null), __jsx("br", null), "\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05DE\u05EA\u05D1\u05E6\u05E2 \u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC \u05E4\u05E2\u05DD \u05D1\u05D7\u05D5\u05D3\u05E9, \u05D0\u05DD \u05DB\u05D9 \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D9\u05E2\u05D3\u05D9\u05E3 \u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1 \u05DC\u05D3\u05E8\u05D5\u05E9 \u05D0\u05EA \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05D0\u05D7\u05EA \u05DC\u05EA\u05E7\u05D5\u05E4\u05D4 (\u05DC\u05DE\u05E9\u05DC, \u05D0\u05D7\u05EA \u05DC\u05E8\u05D1\u05E2\u05D5\u05DF). \u05DB\u05D9\u05D5\u05DD, \u05D9\u05E9\u05E0\u05DF \u05D3\u05E8\u05DB\u05D9\u05DD \u05E8\u05D1\u05D5\u05EA \u05D5\u05DE\u05D2\u05D5\u05D5\u05E0\u05D5\u05EA \u05DC\u05E6\u05D5\u05E8\u05DA \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4, \u05D5\u05D7\u05E9\u05D5\u05D1 \u05DC\u05D4\u05DB\u05D9\u05E8 \u05D0\u05EA \u05DB\u05D5\u05DC\u05DF \u05DC\u05E4\u05E0\u05D9 \u05E9\u05D7\u05D5\u05EA\u05DE\u05D9\u05DD \u05E2\u05DC \u05D7\u05D5\u05D6\u05D4 \u05DE\u05D5\u05DC \u05D4\u05E9\u05D5\u05DB\u05E8. \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0, \u05E0\u05D9\u05EA\u05DF \u05DC\u05E9\u05DC\u05DD \u05E9\u05DB\u05E8-\u05D3\u05D9\u05E8\u05D4 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6'\u05E7\u05D9\u05DD \u05D0\u05D7\u05EA \u05DC\u05D7\u05D5\u05D3\u05E9 (\u05D0\u05D5 \u05D0\u05D7\u05EA \u05DC\u05EA\u05E7\u05D5\u05E4\u05D4 \u05D0\u05D7\u05E8\u05EA), \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D4\u05E2\u05D1\u05E8\u05D4 \u05D1\u05E0\u05E7\u05D0\u05D9\u05EA \u05D5\u05DC\u05E2\u05EA\u05D9\u05DD \u05D0\u05E3 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DB\u05E1\u05E3 \u05DE\u05D6\u05D5\u05DE\u05DF. \u05DC\u05DB\u05DC \u05D3\u05E8\u05DA \u05D4\u05D9\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05D5\u05D4\u05D7\u05E1\u05E8\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05D4, \u05D0\u05DD \u05DB\u05D9 \u05E8\u05D5\u05D1\u05DF \u05D3\u05D5\u05E8\u05E9\u05D5\u05EA \u05D4\u05E9\u05E7\u05E2\u05EA \u05D6\u05DE\u05DF, \u05DE\u05E9\u05D0\u05D1\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD \u05D5\u05E4\u05D2\u05D9\u05E9\u05D5\u05EA \u05D1\u05D9\u05DF \u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1 \u05DC\u05E9\u05D5\u05DB\u05E8.", __jsx("br", null), __jsx("br", null), "\u05DC\u05E2\u05EA\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D5\u05EA, \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05E2\u05E9\u05D5\u05D9 \u05DC\u05D4\u05EA\u05E2\u05DB\u05D1 \u05DE\u05E1\u05D9\u05D1\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA, \u05D5\u05DE\u05E4\u05DC\u05E1 \u05D4\u05D3\u05D0\u05D2\u05D4 \u05E9\u05DC\u05DB\u05DD \u05E2\u05D5\u05DC\u05D4 - \u05D5\u05D1\u05E6\u05D3\u05E7. \u05D0\u05EA\u05DD \u05D1\u05D5\u05D5\u05D3\u05D0\u05D9 \u05DE\u05DB\u05D9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05EA\u05D7 \u05E9\u05E6\u05E5 \u05D1\u05DB\u05DC \u05D7\u05D5\u05D3\u05E9 \u05DC\u05E7\u05E8\u05D0\u05EA \u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9 \u05DE\u05D0\u05EA \u05D4\u05E9\u05D5\u05DB\u05E8: \u05D4\u05D0\u05DD \u05D4\u05E4\u05E2\u05DD \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D9\u05E9\u05DC\u05DD \u05D1\u05D6\u05DE\u05DF? \u05D4\u05D0\u05DD \u05D4\u05E6'\u05E7 \u05E9\u05DC\u05D5 \u05D9\u05D7\u05D6\u05D5\u05E8? \u05D4\u05D0\u05DD \u05D9\u05D1\u05E6\u05E2 \u05D0\u05EA \u05D4\u05D4\u05E2\u05D1\u05E8\u05D4 \u05D4\u05D1\u05E0\u05E7\u05D0\u05D9\u05EA \u05D5\u05D4\u05E1\u05DB\u05D5\u05DD \u05D9\u05D2\u05D9\u05E2 \u05D1\u05DE\u05DC\u05D5\u05D0\u05D5, \u05D0\u05D5 \u05E8\u05E7 \u05D1\u05D7\u05DC\u05E7\u05D5? \u05D4\u05D0\u05DD \u05D2\u05DD \u05D4\u05E4\u05E2\u05DD \u05D0\u05E6\u05D8\u05E8\u05DA \"\u05DC\u05E8\u05D3\u05D5\u05E3\" \u05D0\u05D7\u05E8\u05D9 \u05D4\u05E9\u05D5\u05DB\u05E8, \u05D5\u05DC\u05D4\u05D6\u05DB\u05D9\u05E8 \u05DC\u05D5 \u05E9\u05D4\u05D2\u05D9\u05E2 \u05DE\u05D5\u05E2\u05D3 \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4?", __jsx("br", null), __jsx("br", null), "\u05D0\u05D7\u05EA \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05D8\u05D5\u05D1\u05D5\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8 \u05DB\u05D9\u05D5\u05DD \u05D4\u05E0\u05D4 \u05EA\u05E9\u05DC\u05D5\u05DD ", __jsx("strong", null, "\u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05DB\u05E8\u05D8\u05D9\u05E1 \u05D0\u05E9\u05E8\u05D0\u05D9"), ", \u05D5\u05DB\u05D3\u05D0\u05D9 \u05DE\u05D0\u05D5\u05D3 \u05DC\u05E9\u05E7\u05D5\u05DC \u05D0\u05D5\u05EA\u05D4 \u05DC\u05D0\u05D7\u05E8 \u05D7\u05EA\u05D9\u05DE\u05EA \u05D4\u05D7\u05D5\u05D6\u05D4 \u05DE\u05D5\u05DC \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD. \u05EA\u05E9\u05DC\u05D5\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05D1\u05E2\u05E6\u05DD \u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05DB\u05DD - \u05D1\u05E2\u05DC\u05D9 \u05D4\u05E0\u05DB\u05E1 - \u05DC\u05D4\u05D9\u05D5\u05EA \u05E9\u05E7\u05D8\u05D9\u05DD \u05D5\u05DC\u05D4\u05D9\u05DE\u05E0\u05E2 \u05DE\u05DE\u05EA\u05D7 \u05D5\u05D3\u05D0\u05D2\u05D5\u05EA \u05DC\u05E7\u05E8\u05D0\u05EA \u05D9\u05D5\u05DD \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9. \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05D1\u05D0\u05E9\u05E8\u05D0\u05D9 \u05D4\u05D5\u05D0 \u05E2\u05E0\u05D9\u05D9\u05DF \u05E4\u05E9\u05D5\u05D8 \u05D9\u05D7\u05E1\u05D9\u05EA \u05DB\u05D9\u05D5\u05DD, \u05D5\u05D4\u05D5\u05D0 \u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05E0\u05D9 \u05D4\u05E6\u05D3\u05D3\u05D9\u05DD \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05E8\u05D5\u05E6\u05D9\u05DD \u05D5\u05E8\u05D2\u05D5\u05E2\u05D9\u05DD, \u05EA\u05D5\u05DA \u05DE\u05D9\u05E0\u05D9\u05DE\u05D5\u05DD \u05D4\u05E9\u05E7\u05E2\u05EA \u05D6\u05DE\u05DF.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05D1\u05D0\u05E9\u05E8\u05D0\u05D9 - \u05DB\u05D9\u05E6\u05D3 \u05DE\u05EA\u05D1\u05E6\u05E2 ?"), __jsx("br", null), __jsx("br", null), "\u05D1\u05D9\u05DE\u05D9\u05E0\u05D5, \u05DB\u05DE\u05E2\u05D8 \u05DB\u05DC \u05E2\u05E1\u05E7\u05D4 - \u05E7\u05D8\u05E0\u05D4 \u05D0\u05D5 \u05D2\u05D3\u05D5\u05DC\u05D4 - \u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05EA\u05D5\u05DA \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05E9\u05E8\u05D0\u05D9; \u05DB\u05DE\u05E2\u05D8 \u05DB\u05D5\u05DC\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05D0\u05E9\u05E8\u05D0\u05D9 \u05D1\u05E2\u05EA \u05EA\u05E9\u05DC\u05D5\u05DD \u05D1\u05DE\u05DB\u05D5\u05DC\u05EA, \u05D5\u05D2\u05DD \u05D1\u05E2\u05EA \u05EA\u05E9\u05DC\u05D5\u05DD \u05E2\u05DC \u05E8\u05DB\u05D1 \u05D7\u05D3\u05E9 \u05D0\u05D5 \u05E8\u05D4\u05D9\u05D8\u05D9\u05DD. \u05D0\u05E0\u05E9\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D6\u05D9\u05E7\u05D9\u05DD \u05D1\u05D0\u05E8\u05E0\u05E7 \u05E9\u05E0\u05D9 \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9 \u05D0\u05E9\u05E8\u05D0\u05D9 \u05D0\u05D5 \u05D0\u05E4\u05D9\u05DC\u05D5 \u05D9\u05D5\u05EA\u05E8, \u05D5\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05EA\u05D3\u05D9\u05E8 \u05D5\u05D9\u05D5\u05DE\u05D9\u05D5\u05DE\u05D9. \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05E9\u05E8\u05D0\u05D9 \u05DE\u05E9\u05DE\u05E2\u05D5, \u05D1\u05E4\u05E9\u05D8\u05D5\u05EA - \u05E9\u05DB\u05D0\u05E9\u05E8 \u05D0\u05D3\u05DD \u05DE\u05E9\u05DC\u05DD \u05E2\u05DC \u05DE\u05D5\u05E6\u05E8 \u05D0\u05D5 \u05E9\u05D9\u05E8\u05D5\u05EA, \u05D4\u05D5\u05D0 \u05DE\u05D7\u05D5\u05D9\u05D1 \u05E2\u05DC \u05D4\u05E1\u05DB\u05D5\u05DD \u05D1\u05DE\u05D5\u05E2\u05D3 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8, \u05D5\u05DC\u05D0 \u05D1\u05E8\u05D2\u05E2 \u05D4\u05E7\u05E0\u05D9\u05D4. \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D0\u05E9\u05E8\u05D0\u05D9 \u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D0\u05D3\u05DD \u05DC\u05E8\u05DB\u05D5\u05E9 \u05DE\u05E9\u05D4\u05D5 \u05DB\u05E2\u05EA, \u05D5\u05DC\u05E9\u05DC\u05DD \u05E2\u05DC\u05D9\u05D5 \u05D1\u05E2\u05D5\u05D3 \u05E9\u05D1\u05D5\u05E2, \u05D7\u05D5\u05D3\u05E9, \u05D0\u05D5 \u05D0\u05E4\u05D9\u05DC\u05D5 \u05E9\u05E0\u05D9\u05D4 (\u05D1\u05E2\u05D9\u05E7\u05E8 \u05DB\u05D0\u05E9\u05E8 \u05DE\u05D3\u05D5\u05D1\u05E8 \u05D1\u05E2\u05E1\u05E7\u05EA \u05D0\u05E9\u05E8\u05D0\u05D9 \u05D1\u05EA\u05E9\u05DC\u05D5\u05DE\u05D9\u05DD). \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05D1\u05D0\u05E9\u05E8\u05D0\u05D9 \u05DC\u05D0 \u05E9\u05D5\u05E0\u05D4 \u05DE\u05DB\u05DA; \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D5\u05D4\u05DE\u05E9\u05DB\u05D9\u05E8 \u05D7\u05D5\u05EA\u05DE\u05D9\u05DD \u05DE\u05E8\u05D0\u05E9 \u05E2\u05DC \u05E9\u05D5\u05D1\u05E8 \u05EA\u05E9\u05DC\u05D5\u05DD \u05DE\u05D9\u05D5\u05D7\u05D3, \u05D5\u05D1\u05D5 \u05E9\u05E0\u05D9\u05D4\u05DD \u05DE\u05D0\u05E9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05E2\u05E1\u05E7\u05D4. \u05D4\u05E9\u05D5\u05DB\u05E8 \u05DE\u05D0\u05E9\u05E8 \u05DB\u05D9 \u05D1\u05DB\u05DC X \u05D6\u05DE\u05DF, \u05D1\u05EA\u05D0\u05E8\u05D9\u05DA \u05DE\u05E1\u05D5\u05D9\u05DD, \u05D9\u05D5\u05E2\u05D1\u05E8 \u05E1\u05DB\u05D5\u05DD \u05E9\u05DB\u05E8-\u05D4\u05D3\u05D9\u05E8\u05D4 \u05DE\u05D7\u05E9\u05D1\u05D5\u05DF \u05D4\u05D1\u05E0\u05E7 \u05E9\u05DC\u05D5 - \u05D4\u05D9\u05D9\u05E9\u05E8 \u05DC\u05D7\u05E9\u05D1\u05D5\u05DF \u05D4\u05D1\u05E0\u05E7 \u05E9\u05DC \u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1. \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05D4\u05EA\u05E2\u05E1\u05E7 \u05DE\u05D3\u05D9 \u05D7\u05D5\u05D3\u05E9 \u05D1\u05D4\u05E2\u05D1\u05E8\u05EA \u05E6'\u05E7\u05D9\u05DD \u05D0\u05D5 \u05DB\u05E1\u05E3 \u05DE\u05D6\u05D5\u05DE\u05DF, \u05E9\u05E0\u05D9 \u05D4\u05E6\u05D3\u05D3\u05D9\u05DD \u05DE\u05E1\u05DB\u05D9\u05DE\u05D9\u05DD \u05DE\u05E8\u05D0\u05E9 \u05E2\u05DC \u05EA\u05D0\u05E8\u05D9\u05DB\u05D9\u05DD \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9\u05D9\u05DD (\u05DE\u05D3\u05D9 \u05D7\u05D5\u05D3\u05E9 \u05D0\u05D5 \u05E8\u05D1\u05E2\u05D5\u05DF) - \u05D0\u05E9\u05E8 \u05D1\u05D4\u05DD \u05EA\u05D1\u05D5\u05E6\u05E2 \u05D4\u05E2\u05D1\u05E8\u05EA \u05D4\u05DB\u05E1\u05E3 \u05D1\u05D0\u05D5\u05E4\u05DF \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9 \u05D5\u05D1\u05DC\u05D9 \u05D4\u05EA\u05E2\u05E1\u05E7\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05EA.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05E9\u05DC\u05D1\u05D9 \u05D4\u05D1\u05D9\u05E6\u05D5\u05E2 \u05E9\u05DC \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05DB\u05E8\u05D8\u05D9\u05E1 \u05D0\u05E9\u05E8\u05D0\u05D9:"), __jsx("br", null), __jsx("br", null), "\u25CF \u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1 \u05D5\u05D4\u05E9\u05D5\u05DB\u05E8 \u05D7\u05D5\u05EA\u05DE\u05D9\u05DD \u05E9\u05E0\u05D9\u05D4\u05DD \u05E2\u05DC \u05D7\u05D5\u05D6\u05D4 \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05D4\u05E8\u05D2\u05D9\u05DC; \u05D7\u05D5\u05D6\u05D4 \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05DC\u05D0 \u05D7\u05D9\u05D9\u05D1 \u05DC\u05DB\u05DC\u05D5\u05DC \u05E1\u05E2\u05D9\u05E3 \u05D4\u05DE\u05EA\u05D9\u05D9\u05D7\u05E1 \u05DC\u05EA\u05E9\u05DC\u05D5\u05DD \u05D1\u05DB\u05E8\u05D8\u05D9\u05E1 \u05D0\u05E9\u05E8\u05D0\u05D9, \u05E9\u05DB\u05DF \u05E9\u05D5\u05D1\u05E8 \u05EA\u05E9\u05DC\u05D5\u05DD \u05DE\u05D9\u05D5\u05D7\u05D3 \u05D9\u05E6\u05D9\u05D9\u05DF \u05D6\u05D0\u05EA.", __jsx("br", null), "\u25CF \u05DC\u05D0\u05D7\u05E8 \u05D4\u05D7\u05EA\u05D9\u05DE\u05D4 \u05E2\u05DC \u05D4\u05D7\u05D5\u05D6\u05D4, \u05D7\u05D5\u05EA\u05DE\u05D9\u05DD \u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1 \u05D5\u05D4\u05E9\u05D5\u05DB\u05E8 \u05E2\u05DC \u05E9\u05D5\u05D1\u05E8 \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05D4\u05DE\u05D9\u05D5\u05D7\u05D3. \u05D1\u05E9\u05D5\u05D1\u05E8 \u05D6\u05D4 \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05E6\u05D5\u05D9\u05E0\u05D9\u05DD \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD:", __jsx("br", null), "\u25CF \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05D4\u05DE\u05D6\u05D4\u05D9\u05DD \u05E9\u05DC \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D5\u05E9\u05DC \u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1", __jsx("br", null), "\u25CF \u05E4\u05E8\u05D8\u05D9 \u05D7\u05E9\u05D1\u05D5\u05DF \u05D4\u05D1\u05E0\u05E7 \u05E9\u05DC \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D5\u05E9\u05DC \u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1", __jsx("br", null), "\u25CF \u05E1\u05DB\u05D5\u05DD \u05D4\u05DB\u05E1\u05E3 \u05D0\u05E9\u05E8 \u05D9\u05D5\u05E2\u05D1\u05E8 \u05D1\u05E7\u05D1\u05D9\u05E2\u05D5\u05EA \u05DE\u05D4\u05E9\u05D5\u05DB\u05E8 \u05DC\u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1, \u05DB\u05DC\u05D5\u05DE\u05E8 - \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DB\u05E4\u05D9 \u05E9\u05D4\u05D5\u05E1\u05DB\u05DD \u05DE\u05E8\u05D0\u05E9 \u05D1\u05D7\u05D5\u05D6\u05D4 \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA", __jsx("br", null), "\u25CF \u05DE\u05D5\u05E2\u05D3 \u05D4\u05E2\u05D1\u05E8\u05D4 - \u05D1\u05D0\u05D9\u05DC\u05D5 \u05EA\u05D0\u05E8\u05D9\u05DB\u05D9\u05DD \u05D1\u05D3\u05D9\u05D5\u05E7 \u05D9\u05D5\u05E2\u05D1\u05E8 \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 (\u05DC\u05DE\u05E9\u05DC - \u05D1-10 \u05DC\u05DB\u05DC \u05D7\u05D5\u05D3\u05E9, \u05DE\u05D3\u05D9 \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD \u05D5\u05DB\u05D3\u05D5\u05DE\u05D4)", __jsx("br", null), __jsx("br", null), "\u05DB\u05E4\u05D9 \u05E9\u05E0\u05D9\u05EA\u05DF \u05DC\u05E8\u05D0\u05D5\u05EA, ", __jsx("strong", null, "\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05D1\u05D0\u05E9\u05E8\u05D0\u05D9"), " \u05D3\u05D5\u05E8\u05E9 \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05E4\u05E9\u05D5\u05D8\u05D5\u05EA \u05D5\u05D1\u05E1\u05D9\u05E1\u05D9\u05D5\u05EA \u05DE\u05E6\u05D3 \u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1 \u05D5\u05D4\u05E9\u05D5\u05DB\u05E8, \u05D5\u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05E0\u05D9\u05D4\u05DD \u05DC\u05D1\u05E6\u05E2 \u05D0\u05EA \u05D4\u05E2\u05E1\u05E7\u05D4 \u05D1\u05E8\u05D0\u05E9 \u05E9\u05E7\u05D8 \u05D5\u05DE\u05D1\u05DC\u05D9 \u05D3\u05D0\u05D2\u05D4 \u05D7\u05D5\u05D3\u05E9\u05D9\u05EA \u05DC\u05D2\u05D1\u05D9 \u05D4\u05E2\u05D1\u05E8\u05EA \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD. \u05DB\u05DC \u05E2\u05D5\u05D3 \u05E0\u05DB\u05DC\u05DC\u05D9\u05DD \u05D1\u05E9\u05D5\u05D1\u05E8 \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DB\u05DC \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05D4\u05DC\u05DC\u05D5, \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05E8\u05D2\u05D5\u05E2 \u05D5\u05DC\u05D3\u05E2\u05EA \u05DB\u05D9 \u05D4\u05E1\u05DB\u05D5\u05DD \u05D9\u05D5\u05E2\u05D1\u05E8 \u05D0\u05DC\u05D9\u05D5 \u05D1\u05D6\u05DE\u05E0\u05D9\u05DD \u05E9\u05E0\u05E7\u05D1\u05E2\u05D5 \u05DE\u05E8\u05D0\u05E9, \u05D5\u05DB\u05D9 \u05DE\u05E2\u05EA\u05D4 \u05D5\u05E2\u05D3 \u05DC\u05E1\u05D5\u05E3 \u05D4\u05D7\u05D5\u05D6\u05D4 - \u05D4\u05E2\u05E0\u05D9\u05D9\u05DF \u05DE\u05E1\u05D5\u05D3\u05E8.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05D0\u05E9\u05E8\u05D0\u05D9 - \u05DE\u05D4\u05DD \u05D4\u05D9\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA?"), __jsx("br", null), __jsx("br", null), "\u05DC\u05E2\u05EA\u05D9\u05DD, \u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D5\u05EA \u05D5\u05D2\u05DD \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05DE\u05E2\u05D3\u05D9\u05E4\u05D9\u05DD \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D3\u05E8\u05DB\u05D9\u05DD \u05D4\u05D9\u05E9\u05E0\u05D5\u05EA \u05D5\u05D4\u05DE\u05D5\u05DB\u05E8\u05D5\u05EA \u05DC\u05E6\u05D5\u05E8\u05DA ", __jsx("strong", null, "\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4"), " - \u05DC\u05DE\u05E9\u05DC \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05E2\u05D1\u05E8\u05EA \u05E6'\u05E7\u05D9\u05DD \u05DE\u05D3\u05D9 \u05D7\u05D5\u05D3\u05E9, \u05D0\u05D5 \u05D0\u05E4\u05D9\u05DC\u05D5 \u05D4\u05E2\u05D1\u05E8\u05D4 \u05D1\u05E0\u05E7\u05D0\u05D9\u05EA. \u05D9\u05E9 \u05DC\u05D6\u05DB\u05D5\u05E8, \u05DB\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D3\u05E8\u05DB\u05D9\u05DD \u05D0\u05DC\u05D4 \u05E2\u05E9\u05D5\u05D9 \u05D0\u05DE\u05E0\u05DD \u05DC\u05D4\u05D9\u05D5\u05EA \u05E0\u05D5\u05D7, \u05D0\u05DA \u05D4\u05D5\u05D0 \u05D1\u05D5\u05D5\u05D3\u05D0\u05D9 \u05DE\u05E1\u05D5\u05E8\u05D1\u05DC \u05D4\u05E8\u05D1\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D0\u05E9\u05E8 \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05D0\u05E9\u05E8\u05D0\u05D9. \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0:", __jsx("br", null), __jsx("br", null), "\u25CF \u05DB\u05D0\u05E9\u05E8 \u05D4\u05E9\u05D5\u05DB\u05E8 \u05DE\u05E9\u05DC\u05DD \u05DE\u05D3\u05D9 \u05D7\u05D5\u05D3\u05E9 \u05D1\u05E6'\u05E7 - \u05E2\u05DC\u05D9\u05D5 \u05DC\u05D4\u05D6\u05DE\u05D9\u05DF \u05DE\u05E8\u05D0\u05E9 \u05E4\u05E0\u05E7\u05E1 \u05E6'\u05E7\u05D9\u05DD, \u05DC\u05DB\u05EA\u05D5\u05D1 \u05E4\u05E8\u05D8\u05D9\u05DD \u05D5\u05DC\u05D7\u05EA\u05D5\u05DD \u05E2\u05DC \u05DB\u05DC \u05E6'\u05E7, \u05D5\u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05E4\u05D9\u05D6\u05D9\u05EA \u05DC\u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1 \u05D1\u05D6\u05DE\u05DF \u05E7\u05D1\u05D5\u05E2. \u05DC\u05E6\u05D3 \u05D4\u05E1\u05E8\u05D1\u05D5\u05DC \u05D5\u05D4\u05E9\u05E7\u05E2\u05EA \u05D4\u05D6\u05DE\u05DF, \u05DE\u05D3\u05D5\u05D1\u05E8 \u05D1\u05DB\u05D0\u05D1 \u05E8\u05D0\u05E9 \u05DC\u05D0 \u05E7\u05D8\u05DF \u05E2\u05D1\u05D5\u05E8 \u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1 - \u05E9\u05DB\u05DF \u05DE\u05D3\u05D9 \u05D7\u05D5\u05D3\u05E9 \u05E2\u05DC\u05D9\u05D5 \u05DC\u05D3\u05D0\u05D5\u05D2 \u05DE\u05D7\u05D3\u05E9 \u05DC\u05E7\u05D1\u05DC\u05EA \u05D4\u05E6'\u05E7, \u05D5\u05DC\u05D3\u05D0\u05D5\u05D2 \u05DB\u05D0\u05E9\u05E8 \u05D4\u05E9\u05D5\u05DB\u05E8 \u05DE\u05D0\u05D7\u05E8 \u05D1\u05EA\u05E9\u05DC\u05D5\u05DD.", __jsx("br", null), "\u25CF \u05DB\u05D0\u05E9\u05E8 \u05D4\u05E9\u05D5\u05DB\u05E8 \u05DE\u05E9\u05DC\u05DD \u05DE\u05D3\u05D9 \u05D7\u05D5\u05D3\u05E9 \u05D1\u05D4\u05E2\u05D1\u05E8\u05D4 \u05D1\u05E0\u05E7\u05D0\u05D9\u05EA, \u05E2\u05DC\u05D9\u05D5 \u05DC\u05D3\u05D0\u05D5\u05D2 \u05DC\u05D1\u05E6\u05E2 \u05D0\u05EA \u05D4\u05E4\u05E2\u05D5\u05DC\u05D4; \u05D1\u05D9\u05DE\u05D9\u05E0\u05D5 \u05D0\u05DE\u05E0\u05DD \u05E0\u05D9\u05EA\u05DF \u05DC\u05E2\u05E9\u05D5\u05EA \u05D6\u05D0\u05EA \u05D1\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D3\u05E8\u05DA \u05D4\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D0\u05D5 \u05D1\u05D0\u05EA\u05E8 \u05D4\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8 \u05E9\u05DC \u05DB\u05DC \u05D1\u05E0\u05E7, \u05D0\u05DA \u05D1\u05DB\u05DC \u05D6\u05D0\u05EA \u05D9\u05E9 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DC\u05DB\u05DA \u05D0\u05EA \u05D4\u05D6\u05DE\u05DF, \u05D5\u05DC\u05E2\u05EA\u05D9\u05DD \u05D0\u05E3 \u05DC\u05D4\u05DE\u05EA\u05D9\u05DF \u05DE\u05E1\u05E4\u05E8 \u05D9\u05DE\u05D9 \u05E2\u05E1\u05E7\u05D9\u05DD \u05E2\u05D3 \u05E9\u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05D0\u05DB\u05DF \u05E2\u05D5\u05D1\u05E8 \u05DC\u05D7\u05E9\u05D1\u05D5\u05DF \u05D4\u05D1\u05E0\u05E7 \u05E9\u05DC \u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1. \u05DE\u05E2\u05D1\u05E8 \u05DC\u05DB\u05DA, \u05D0\u05E0\u05E9\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05E2\u05D3\u05D9\u05D9\u05DF \u05DE\u05EA\u05E7\u05E9\u05D9\u05DD \u05D1\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4, \u05D5\u05DE\u05E2\u05D3\u05D9\u05E4\u05D9\u05DD \u05DC\u05D4\u05D2\u05D9\u05E2 \u05E4\u05D9\u05D6\u05D9\u05EA \u05DC\u05D1\u05E0\u05E7 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D1\u05E6\u05E2 \u05D0\u05EA \u05D4\u05D4\u05E2\u05D1\u05E8\u05D4 - \u05E9\u05D5\u05D1, \u05D3\u05D1\u05E8 \u05D4\u05D3\u05D5\u05E8\u05E9 \u05D6\u05DE\u05DF \u05D5\u05DE\u05E9\u05D0\u05D1\u05D9\u05DD, \u05D5\u05D9\u05D5\u05E6\u05E8 \u05E1\u05E8\u05D1\u05D5\u05DC.", __jsx("br", null), __jsx("br", null), "\u05DC\u05E2\u05D5\u05DE\u05EA \u05D6\u05D0\u05EA, \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D0\u05E9\u05E8 \u05E0\u05E2\u05E9\u05D4 \u05EA\u05D5\u05DA \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05E9\u05E8\u05D0\u05D9 - \u05DB\u05DE\u05E2\u05D8 \u05D5\u05D0\u05D9\u05E0\u05D5 \u05D3\u05D5\u05E8\u05E9 \u05D4\u05E9\u05E7\u05E2\u05D4 \u05E9\u05DC \u05D6\u05DE\u05DF (\u05DC\u05DE\u05E9\u05DC - \u05D6\u05DE\u05DF \u05D0\u05E9\u05E8 \u05DE\u05EA\u05D1\u05D6\u05D1\u05D6 \u05D1\u05E4\u05D2\u05D9\u05E9\u05D5\u05EA \u05E2\u05DD \u05D4\u05E9\u05D5\u05DB\u05E8, \u05D0\u05D5 \u05D1\u05D4\u05D2\u05E2\u05D4 \u05DC\u05D1\u05E0\u05E7 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E4\u05D3\u05D5\u05EA \u05E6'\u05E7 \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA). \u05D1\u05E0\u05D5\u05E1\u05E3, \u05D2\u05DD \u05D4\u05E9\u05D5\u05DB\u05E8 \u05DC\u05D0 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D3\u05D0\u05D5\u05D2 \u05D1\u05DB\u05DC \u05D7\u05D5\u05D3\u05E9 \u05DE\u05D7\u05D3\u05E9 \u05DC\u05D1\u05E6\u05E2 \u05D4\u05E2\u05D1\u05E8\u05D4 \u05D0\u05D5 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05E6'\u05E7 \u05DC\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4, \u05E9\u05DB\u05DF \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DE\u05D5\u05E2\u05D1\u05E8 \u05D1\u05D0\u05D5\u05E4\u05DF \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9 \u05DB\u05E4\u05D9 \u05E9\u05E0\u05E7\u05D1\u05E2 \u05D1\u05E9\u05D5\u05D1\u05E8.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05DE\u05D3\u05D5\u05E2 \u05DB\u05D3\u05D0\u05D9 \u05DC\u05D1\u05E6\u05E2 \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05D0\u05E9\u05E8\u05D0\u05D9?"), __jsx("br", null), __jsx("br", null), "\u25CF \u05E4\u05E9\u05D8\u05D5\u05EA - \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D5\u05D4\u05E9\u05D5\u05DB\u05E8 \u05E0\u05D3\u05E8\u05E9\u05D9\u05DD \u05DC\u05D7\u05EA\u05D5\u05DD \u05E2\u05DC \u05E9\u05D5\u05D1\u05E8 \u05EA\u05E9\u05DC\u05D5\u05DD \u05DE\u05D9\u05D5\u05D7\u05D3 \u05D4\u05DE\u05DB\u05D9\u05DC \u05D0\u05EA \u05DB\u05DC \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD, \u05D5\u05D6\u05D4\u05D5 \u05D6\u05D4; \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D0\u05D9\u05DF \u05E6\u05D5\u05E8\u05DA \u05D1\u05D4\u05EA\u05E2\u05E1\u05E7\u05D5\u05EA \u05D7\u05D5\u05D3\u05E9\u05D9\u05EA \u05DC\u05E6\u05D5\u05E8\u05DA \u05D4\u05E2\u05D1\u05E8\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4, \u05D0\u05D9\u05DF \u05E6\u05D5\u05E8\u05DA \u05D1\u05DB\u05EA\u05D9\u05D1\u05D4 \u05D5\u05D7\u05EA\u05D9\u05DE\u05D4 \u05E2\u05DC \u05E6'\u05E7\u05D9\u05DD. \u05DC\u05E9\u05E0\u05D9 \u05D4\u05E6\u05D3\u05D3\u05D9\u05DD \u05E0\u05D7\u05E1\u05DB\u05EA \u05D4\u05EA\u05E2\u05E1\u05E7\u05D5\u05EA \u05D1\u05E0\u05D9\u05D9\u05E8\u05EA \u05D0\u05D9\u05E0\u05E1\u05D5\u05E4\u05D9\u05EA, \u05D1\u05DE\u05E1\u05DE\u05DB\u05D9\u05DD, \u05D1\u05DB\u05EA\u05D9\u05D1\u05D4 \u05D5\u05D7\u05EA\u05D9\u05DE\u05D4 \u05E2\u05DC \u05E6'\u05E7\u05D9\u05DD \u05D0\u05D5 \u05D1\u05E4\u05D2\u05D9\u05E9\u05D4 \u05D7\u05D5\u05D3\u05E9\u05D9\u05EA \u05DC\u05E6\u05D5\u05E8\u05DA \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD.", __jsx("br", null), "\u25CF \u05E8\u05D0\u05E9 \u05E9\u05E7\u05D8 - \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05E9\u05E7\u05D8 - \u05E9\u05DB\u05DF \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D9\u05D5\u05E2\u05D1\u05E8 \u05DC\u05D7\u05E9\u05D1\u05D5\u05DF \u05D4\u05D1\u05E0\u05E7 \u05E9\u05DC\u05D5 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05DE\u05E1\u05D5\u05D3\u05E8\u05EA, \u05D1\u05EA\u05D0\u05E8\u05D9\u05DB\u05D9\u05DD \u05E7\u05D1\u05D5\u05E2\u05D9\u05DD \u05DB\u05E4\u05D9 \u05E9\u05E0\u05E7\u05D1\u05E2\u05D5 \u05D1\u05DE\u05E2\u05DE\u05D3 \u05D4\u05D7\u05EA\u05D9\u05DE\u05D4. \u05D1\u05E0\u05D9\u05D2\u05D5\u05D3 \u05DC\u05D3\u05E8\u05DB\u05D9 \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8-\u05D3\u05D9\u05E8\u05D4 \u05D0\u05D7\u05E8\u05D5\u05EA, \u05D4\u05D3\u05D5\u05E8\u05E9\u05D5\u05EA \u05DE\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA \u05E2\u05DD \"\u05D9\u05D3 \u05E2\u05DC \u05D4\u05D3\u05D5\u05E4\u05E7\" \u05DC\u05DB\u05DC \u05D0\u05D5\u05E8\u05DA \u05D4\u05D7\u05D5\u05D3\u05E9 - \u05DB\u05D0\u05DF \u05D0\u05D9\u05DF \u05E6\u05D5\u05E8\u05DA \u05D1\u05DB\u05DA. \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D9\u05D5\u05D3\u05E2 \u05DB\u05D9 \u05D4\u05E9\u05D5\u05DB\u05E8 \u05DE\u05D7\u05D5\u05D9\u05D1 \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05D0\u05EA \u05E1\u05DB\u05D5\u05DD \u05E9\u05DB\u05E8-\u05D4\u05D3\u05D9\u05E8\u05D4 \u05D1\u05EA\u05D0\u05E8\u05D9\u05DA \u05E7\u05D1\u05D5\u05E2, \u05D5\u05D0\u05D9\u05DF \u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05EA\u05E7\u05E9\u05E8 \u05DC\u05E9\u05D5\u05DB\u05E8, \u05DC\u05E0\u05E1\u05D5\u05EA \u05DC\u05E7\u05D1\u05D5\u05E2 \u05D0\u05EA\u05D5 \u05E4\u05D2\u05D9\u05E9\u05D4 \u05D0\u05D5 \u05DC\u05D4\u05D6\u05DB\u05D9\u05E8 \u05DC\u05D5 \u05E9\u05D4\u05D2\u05D9\u05E2 \u05DE\u05D5\u05E2\u05D3 \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD.", __jsx("br", null), "\u25CF \u05D7\u05E1\u05DB\u05D5\u05DF \u05D1\u05D6\u05DE\u05DF \u05D5\u05D1\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 - \u05DE\u05E2\u05D1\u05E8 \u05DC\u05D7\u05EA\u05D9\u05DE\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D9\u05EA \u05E2\u05DC \u05E9\u05D5\u05D1\u05E8 \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD, \u05D0\u05D9\u05DF \u05E6\u05D5\u05E8\u05DA \u05D1\u05E4\u05D2\u05D9\u05E9\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05D1\u05D9\u05DF \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DC\u05E9\u05D5\u05DB\u05E8, \u05D5\u05D0\u05D9\u05DF \u05E6\u05D5\u05E8\u05DA \u05D1\u05D4\u05D2\u05E2\u05D4 \u05DC\u05D1\u05E0\u05E7 \u05DC\u05E6\u05D5\u05E8\u05DA \u05D4\u05E4\u05E7\u05D3\u05EA \u05E6'\u05E7 \u05D0\u05D5 \u05D4\u05E2\u05D1\u05E8\u05D4 \u05D1\u05E0\u05E7\u05D0\u05D9\u05EA.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05D0\u05E9\u05E8\u05D0\u05D9 \u05DE\u05D5\u05DC \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05D4\u05D5\u05E8\u05D0\u05EA \u05E7\u05D1\u05E2"), __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05D4\u05D5\u05E8\u05D0\u05EA \u05E7\u05D1\u05E2 - \u05DE\u05D4\u05DD \u05D4\u05D9\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05D5\u05D4\u05D7\u05E1\u05E8\u05D5\u05E0\u05D5\u05EA?"), __jsx("br", null), __jsx("br", null), "\u05DB\u05D0\u05DE\u05D5\u05E8, \u05D0\u05E0\u05D5 \u05D7\u05D9\u05D9\u05DD \u05D1\u05E2\u05D9\u05D3\u05DF \u05D1\u05D5 \u05D4\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4 \u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05DC\u05D1\u05E6\u05E2 \u05EA\u05E9\u05DC\u05D5\u05DE\u05D9\u05DD \u05D5\u05E2\u05E1\u05E7\u05D0\u05D5\u05EA \u05D1\u05D3\u05E8\u05DB\u05D9\u05DD \u05E9\u05D5\u05E0\u05D5\u05EA \u05D5\u05DE\u05D2\u05D5\u05D5\u05E0\u05D5\u05EA. \u05DE\u05E2\u05D1\u05E8 \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05E6'\u05E7\u05D9\u05DD \u05D0\u05D5 \u05D1\u05D4\u05E2\u05D1\u05E8\u05D4 \u05D1\u05E0\u05E7\u05D0\u05D9\u05EA \u05DC\u05E6\u05D5\u05E8\u05DA \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4, \u05E0\u05D9\u05EA\u05DF \u05D2\u05DD \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D4\u05D5\u05E8\u05D0\u05EA \u05E7\u05D1\u05E2. \u05DE\u05D3\u05D5\u05D1\u05E8 \u05D1\u05E2\u05E6\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05EA\u05E9\u05DC\u05D5\u05DD, \u05D1\u05D5 \u05D0\u05D3\u05DD \u05DE\u05D0\u05E9\u05E8 \u05DC\u05D1\u05E0\u05E7 \u05DC\u05D7\u05D9\u05D9\u05D1 \u05D0\u05EA \u05D7\u05E9\u05D1\u05D5\u05E0\u05D5 \u05DB\u05D0\u05E9\u05E8 \u05DE\u05D2\u05D9\u05E2\u05D4 \u05D3\u05E8\u05D9\u05E9\u05EA \u05EA\u05E9\u05DC\u05D5\u05DD \u05DE\u05D0\u05D3\u05DD \u05D0\u05D7\u05E8 \u05D0\u05D5 \u05DE\u05E2\u05E1\u05E7 \u05DB\u05DC\u05E9\u05D4\u05D5. \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0 - \u05D0\u05D3\u05DD \u05D0\u05E9\u05E8 \u05DE\u05E9\u05DC\u05DD \u05DE\u05D3\u05D9 \u05D7\u05D5\u05D3\u05E9 \u05D0\u05EA \u05D7\u05E9\u05D1\u05D5\u05DF \u05D4\u05D7\u05E9\u05DE\u05DC \u05D0\u05D5 \u05D4\u05DE\u05D9\u05DD \u05E9\u05DC\u05D5 \u05D1\u05D4\u05D5\u05E8\u05D0\u05EA \u05E7\u05D1\u05E2, \u05D9\u05D0\u05E9\u05E8 \u05DC\u05D1\u05E0\u05E7 \u05DE\u05E8\u05D0\u05E9 \u05DC\u05E9\u05DC\u05DD \u05D0\u05EA \u05D4\u05D7\u05E9\u05D1\u05D5\u05E0\u05D5\u05EA \u05D4\u05E0\"\u05DC \u05D1\u05D0\u05D5\u05E4\u05DF \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9 - \u05DB\u05D0\u05E9\u05E8 \u05D9\u05D2\u05D9\u05E2 \u05DE\u05D5\u05E2\u05D3 \u05D4\u05D7\u05D9\u05D5\u05D1. \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05D4\u05D5\u05E8\u05D0\u05EA \u05E7\u05D1\u05E2 \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9 \u05D2\u05DD \u05D4\u05D5\u05D0, \u05DB\u05DE\u05D5\u05D1\u05DF; \u05D1\u05DE\u05E7\u05E8\u05D4 \u05D6\u05D4, \u05D9\u05D0\u05E9\u05E8 \u05D4\u05E9\u05D5\u05DB\u05E8 \u05DE\u05E8\u05D0\u05E9 \u05D4\u05E2\u05D1\u05E8\u05EA \u05EA\u05E9\u05DC\u05D5\u05DD \u05DE\u05D7\u05E9\u05D1\u05D5\u05DF \u05D4\u05D1\u05E0\u05E7 \u05E9\u05DC\u05D5 \u05DC\u05D6\u05D4 \u05E9\u05DC \u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1, \u05D1\u05DE\u05D5\u05E2\u05D3\u05D9\u05DD \u05E9\u05D9\u05E7\u05D1\u05E2\u05D5 \u05DE\u05E8\u05D0\u05E9.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05D4\u05D5\u05E8\u05D0\u05EA \u05E7\u05D1\u05E2 - \u05D9\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA"), __jsx("br", null), __jsx("br", null), "\u25CF \u05E0\u05D5\u05D7\u05D5\u05EA - \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05E2\u05D5\u05D1\u05E8 \u05DE\u05D4\u05E9\u05D5\u05DB\u05E8 \u05DC\u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2, \u05D5\u05D0\u05D9\u05DF \u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05EA\u05E2\u05E1\u05E7 \u05D1\u05E6'\u05E7\u05D9\u05DD \u05D0\u05D5 \u05D4\u05E2\u05D1\u05E8\u05D5\u05EA \u05D1\u05E0\u05E7\u05D0\u05D9\u05D5\u05EA \u05DE\u05D3\u05D9 \u05D7\u05D5\u05D3\u05E9.", __jsx("br", null), "\u25CF \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DE\u05D5\u05E2\u05D1\u05E8 \u05D1\u05D0\u05D5\u05E4\u05DF \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9 \u05DE\u05D4\u05E9\u05D5\u05DB\u05E8 \u05DC\u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1; \u05D4\u05D1\u05E0\u05E7 \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D1\u05E7\u05E9 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05D4\u05E8\u05E9\u05D0\u05D4 \u05DE\u05D0\u05EA \u05D4\u05E9\u05D5\u05DB\u05E8, \u05D0\u05DC\u05D0 \u05E2\u05D5\u05E9\u05D4 \u05D6\u05D0\u05EA \u05E2\u05DC \u05E1\u05DE\u05DA \u05D4\u05D4\u05E8\u05E9\u05D0\u05D4 \u05E9\u05E0\u05D9\u05EA\u05E0\u05D4 \u05D1\u05EA\u05D7\u05D9\u05DC\u05D4 \u05DE\u05D0\u05EA \u05D4\u05E9\u05D5\u05DB\u05E8.", __jsx("br", null), __jsx("br", null), "\u05D9\u05E9 \u05DC\u05D6\u05DB\u05D5\u05E8 \u05DB\u05D9 \u05DC\u05E6\u05D3 \u05D4\u05D9\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA, \u05E7\u05D9\u05D9\u05DD \u05D7\u05E1\u05E8\u05D5\u05DF \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D9 \u05D1\u05DE\u05E7\u05E8\u05D4 \u05E9\u05DC \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05D4\u05D5\u05E8\u05D0\u05EA \u05E7\u05D1\u05E2. \u05D4\u05DB\u05D5\u05D5\u05E0\u05D4 \u05D4\u05D9\u05D0 \u05D1\u05E2\u05E6\u05DD \u05E9\u05DB\u05D0\u05E9\u05E8 \u05DE\u05E9\u05DC\u05DE\u05D9\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05D5\u05E8\u05D0\u05EA \u05E7\u05D1\u05E2, \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D8\u05DC \u05D0\u05EA \u05D4\u05D4\u05E8\u05E9\u05D0\u05D4 \u05DC\u05D7\u05D9\u05D5\u05D1 \u05D1\u05DB\u05DC \u05E8\u05D2\u05E2 \u05E0\u05EA\u05D5\u05DF. \u05D1\u05DE\u05DC\u05D9\u05DD \u05E4\u05E9\u05D5\u05D8\u05D5\u05EA - \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D9\u05DB\u05D5\u05DC \u05D1\u05DB\u05DC \u05E2\u05EA \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05D1\u05E0\u05E7 \u05D5\u05DC\u05D1\u05D8\u05DC \u05D0\u05EA \u05D4\u05E8\u05E9\u05D0\u05EA\u05D5 \u05DC\u05D7\u05D9\u05D5\u05D1 \u05D4\u05D7\u05E9\u05D1\u05D5\u05DF \u05E9\u05DC\u05D5, \u05DE\u05D4 \u05E9\u05D0\u05D5\u05DE\u05E8 \u05E9\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DE\u05E4\u05E1\u05D9\u05E7 \u05DC\u05D4\u05D2\u05D9\u05E2 \u05DC\u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1. \u05DE\u05E2\u05D1\u05E8 \u05DC\u05E2\u05D5\u05D2\u05DE\u05EA \u05D4\u05E0\u05E4\u05E9 \u05D4\u05D1\u05E8\u05D5\u05E8\u05D4, \u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1 \u05D2\u05DD \u05DC\u05D0 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D3\u05E2\u05EA \u05E2\u05DC \u05DB\u05DA \u05DE\u05E8\u05D0\u05E9 - \u05D5\u05E0\u05D5\u05E6\u05E8 \u05DE\u05E6\u05D1 \u05D1\u05D5 \u05D4\u05DB\u05E0\u05E1\u05EA\u05D5 \u05E0\u05E4\u05D2\u05E2\u05EA \u05D1\u05D0\u05D5\u05E4\u05DF \u05E4\u05EA\u05D0\u05D5\u05DE\u05D9. \u05D9\u05E9 \u05DC\u05E6\u05D9\u05D9\u05DF \u05DB\u05D9 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05D1\u05D9\u05D8\u05D5\u05DC \u05DE\u05D9\u05D3\u05D9 \u05E7\u05D9\u05D9\u05DE\u05EA \u05D2\u05DD \u05DB\u05D0\u05E9\u05E8 \u05DE\u05E9\u05DC\u05DE\u05D9\u05DD \u05E2\u05DD \u05DB\u05E8\u05D8\u05D9\u05E1 \u05D0\u05E9\u05E8\u05D0\u05D9, \u05D0\u05DA \u05D6\u05D5 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DE\u05E1\u05D5\u05D1\u05DB\u05EA \u05D4\u05E8\u05D1\u05D4 \u05D9\u05D5\u05EA\u05E8, \u05D3\u05D5\u05E8\u05E9\u05EA \u05DE\u05D4\u05D0\u05D3\u05DD (\u05D1\u05DE\u05E7\u05E8\u05D4 \u05E9\u05DC\u05E0\u05D5 - \u05D4\u05E9\u05D5\u05DB\u05E8) \u05DE\u05D9\u05DC\u05D5\u05D9 \u05D8\u05E4\u05E1\u05D9\u05DD, \u05D1\u05D9\u05E8\u05D5\u05E7\u05E8\u05D8\u05D9\u05D4 \u05D5\u05DB\u05D3\u05D5\u05DE\u05D4 - \u05D3\u05D1\u05E8 \u05D4\u05DC\u05D5\u05E7\u05D7 \u05D6\u05DE\u05DF, \u05D5\u05D0\u05D9\u05E0\u05D5 \u05E0\u05E2\u05E9\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05D9\u05D3\u05D9. \u05E2\u05DC \u05DB\u05DF \u05D1\u05E8\u05D5\u05E8 \u05DB\u05D9 \u05E2\u05D1\u05D5\u05E8 \u05D1\u05E2\u05DC \u05D4\u05E0\u05DB\u05E1, \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05E9\u05DC \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05D4\u05D5\u05E8\u05D0\u05EA \u05E7\u05D1\u05E2 \u05D8\u05D5\u05DE\u05E0\u05EA \u05D1\u05D7\u05D5\u05D1\u05D4 \u05D7\u05E1\u05E8\u05D5\u05DF \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D9 \u05D0\u05E9\u05E8 \u05D9\u05E9 \u05DC\u05E7\u05D7\u05EA \u05D0\u05D5\u05EA\u05D5 \u05D1\u05D7\u05E9\u05D1\u05D5\u05DF.", __jsx("br", null), __jsx("br", null), "\u05DC\u05E2\u05D5\u05DE\u05EA \u05D6\u05D0\u05EA, ", __jsx("strong", null, "\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05D1\u05D0\u05E9\u05E8\u05D0\u05D9"), " \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D5\u05D5\u05EA \u05D0\u05DC\u05D8\u05E8\u05E0\u05D8\u05D9\u05D1\u05D4 \u05DE\u05E6\u05D5\u05D9\u05E0\u05EA \u05DC\u05E6\u05D5\u05E8\u05DA \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4. \u05DB\u05D0\u05DE\u05D5\u05E8, \u05D9\u05E9 \u05DC\u05DB\u05DA \u05D9\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05E8\u05D1\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05E2\u05E0\u05D9\u05E7\u05D9\u05DD \u05E8\u05D0\u05E9 \u05E9\u05E7\u05D8 \u05D5\u05DE\u05D9\u05E0\u05D9\u05DE\u05D5\u05DD \u05D1\u05D9\u05E8\u05D5\u05E7\u05E8\u05D8\u05D9\u05D4 - \u05D4\u05DF \u05DC\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D5\u05D4\u05DF \u05DC\u05E9\u05D5\u05DB\u05E8.", __jsx("br", null), __jsx("br", null), "\u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4, \u05EA\u05E2\u05D3\u05D9\u05E4\u05D5 \u05D1\u05D5\u05D5\u05D3\u05D0\u05D9 \u05DC\u05D4\u05EA\u05E0\u05D4\u05DC \u05D1\u05E8\u05D5\u05D2\u05E2 \u05DB\u05DE\u05D4 \u05E9\u05D0\u05E4\u05E9\u05E8, \u05EA\u05D5\u05DA \u05DE\u05D9\u05E0\u05D9\u05DE\u05D5\u05DD \u05D4\u05EA\u05E2\u05E1\u05E7\u05D5\u05EA \u05D1\u05D8\u05E4\u05E1\u05D9\u05DD \u05D5\u05D1\u05D9\u05E8\u05D5\u05E7\u05E8\u05D8\u05D9\u05D4. \u05DE\u05DE\u05D9\u05DC\u05D0, \u05D4\u05E9\u05DB\u05E8\u05EA \u05D3\u05D9\u05E8\u05D4 \u05D3\u05D5\u05E8\u05E9\u05EA \u05E7\u05D9\u05D5\u05DD \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05D5\u05DE\u05D8\u05DC\u05D5\u05EA \u05E8\u05D1\u05D5\u05EA - \u05D4\u05D7\u05DC \u05DE\u05D3\u05D0\u05D2\u05D4 \u05DC\u05E0\u05E8\u05D0\u05D5\u05EA\u05D4 \u05D5\u05EA\u05E7\u05D9\u05E0\u05D5\u05EA\u05D4 \u05E9\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4, \u05D3\u05E8\u05DA \u05DE\u05E6\u05D9\u05D0\u05EA \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05DE\u05D9\u05DD \u05D5\u05D7\u05EA\u05D9\u05DE\u05D4 \u05E2\u05DC \u05D7\u05D5\u05D6\u05D4 \u05E2\u05DE\u05DD, \u05D5\u05E2\u05D3 \u05DC\u05D1\u05D3\u05D9\u05E7\u05D4 \u05D7\u05D5\u05D3\u05E9\u05D9\u05EA \u05DC\u05D2\u05D1\u05D9 \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4. \u05DC\u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4 \u05D3\u05D0\u05D2\u05D5\u05EA \u05E8\u05D1\u05D5\u05EA \u05D2\u05DD \u05DB\u05DA, \u05D5\u05DB\u05DB\u05DC \u05E9\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05E4\u05D7\u05D9\u05EA \u05D0\u05EA \u05E8\u05DE\u05EA \u05D4\u05D3\u05D0\u05D2\u05D4 \u05D5\u05DC\u05D7\u05E1\u05D5\u05DA \u05D0\u05EA \"\u05DB\u05D0\u05D1 \u05D4\u05E8\u05D0\u05E9\" - \u05DE\u05D3\u05D5\u05E2 \u05DC\u05D0 \u05DC\u05E2\u05E9\u05D5\u05EA \u05D6\u05D0\u05EA? \u05DB\u05D0\u05DE\u05D5\u05E8, ", __jsx("strong", null, "\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4"), " \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05E2\u05E9\u05D5\u05EA \u05D1\u05D3\u05E8\u05DB\u05D9\u05DD \u05DE\u05D2\u05D5\u05D5\u05E0\u05D5\u05EA, \u05D5\u05DC\u05DB\u05DC \u05D0\u05D7\u05EA \u05D4\u05D9\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05D5\u05D4\u05D7\u05E1\u05E8\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05D4.", __jsx("br", null), __jsx("br", null), "\u05DB\u05D0\u05E9\u05E8 \u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4 \u05DE\u05EA\u05DC\u05D1\u05D8 \u05DC\u05D2\u05D1\u05D9 \u05D0\u05D5\u05E4\u05DF ", __jsx("strong", null, "\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4"), ", \u05D5\u05EA\u05D5\u05D4\u05D4 \u05DE\u05D4\u05D9 \u05D4\u05D3\u05E8\u05DA \u05D4\u05D8\u05D5\u05D1\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E2\u05D1\u05D5\u05E8\u05D5 - \u05DB\u05D3\u05D0\u05D9 \u05DC\u05D7\u05E9\u05D5\u05D1 \u05D1\u05E8\u05E6\u05D9\u05E0\u05D5\u05EA \u05E2\u05DC \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05E9\u05DC ", __jsx("strong", null, "\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05D1\u05D0\u05E9\u05E8\u05D0\u05D9"), ". \u05DB\u05D0\u05DE\u05D5\u05E8, \u05D6\u05D5\u05D4\u05D9 \u05D3\u05E8\u05DA \u05DE\u05E6\u05D5\u05D9\u05E0\u05EA \u05D4\u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05DE\u05D9\u05E0\u05D9\u05DE\u05D5\u05DD \u05D3\u05D0\u05D2\u05D4 \u05D5\u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD \u05E8\u05D5\u05D2\u05E2. \u05DB\u05D0\u05E9\u05E8 \u05D1\u05D5\u05D7\u05E8\u05D9\u05DD \u05D1\u05D3\u05E8\u05DA \u05D6\u05D5, \u05D2\u05DD \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D5\u05D2\u05DD \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D9\u05D5\u05D3\u05E2\u05D9\u05DD \u05DB\u05D9 ", __jsx("strong", null, "\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05D1\u05D0\u05E9\u05E8\u05D0\u05D9"), " \u05D9\u05D2\u05E8\u05D5\u05DD \u05DC\u05D4\u05E2\u05D1\u05E8\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DE\u05D3\u05D9 \u05D6\u05DE\u05DF \u05E7\u05D1\u05D5\u05E2, \u05D1\u05E6\u05D5\u05E8\u05D4 \u05DE\u05E1\u05D5\u05D3\u05E8\u05EA, \u05D5\u05D0\u05E3 \u05D0\u05D7\u05D3 \u05DE\u05D4\u05DD \u05D0\u05D9\u05E0\u05D5 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D3\u05D0\u05D5\u05D2 \u05D0\u05D5 \u05DC\u05D4\u05E9\u05E7\u05D9\u05E2 \u05D1\u05DB\u05DA \u05D6\u05DE\u05DF. \u05DE\u05E2\u05D1\u05E8 \u05DC\u05D4\u05E9\u05E7\u05E2\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D9\u05EA \u05E9\u05DC \u05D7\u05EA\u05D9\u05DE\u05D5\u05EA \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D5\u05D4\u05D5\u05E9\u05DB\u05E8 \u05E2\u05DC \u05E9\u05D5\u05D1\u05E8 \u05EA\u05E9\u05DC\u05D5\u05DD \u05DE\u05D9\u05D5\u05D7\u05D3 - \u05DC\u05D0 \u05E0\u05D3\u05E8\u05E9\u05EA \u05E2\u05D5\u05D3 \u05D4\u05E9\u05E7\u05E2\u05EA \u05D6\u05DE\u05DF \u05D0\u05D5 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D5\u05EA, \u05D5\u05E9\u05E0\u05D9 \u05D4\u05E6\u05D3\u05D3\u05D9\u05DD \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05D7\u05EA\u05D5\u05DD \u05D5\u05DC\u05D1\u05E6\u05E2 \u05D0\u05EA \u05D4\u05E2\u05E1\u05E7\u05D4 \u05D1\u05E8\u05D0\u05E9 \u05E9\u05E7\u05D8."));
        break;

      case 4:
        pageHeader = "בדיקת רקע של שוכרים";
        output = __jsx("div", null, __jsx("p", null, __jsx("strong", null, "\u05D1\u05D3\u05D9\u05E7\u05EA \u05E8\u05E7\u05E2 \u05E2\u05DC \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD - \u05DE\u05D3\u05D5\u05E2 \u05D4\u05D9\u05D0 \u05DB\u05DC \u05DB\u05DA \u05D7\u05D9\u05D5\u05E0\u05D9\u05EA?"), __jsx("br", null), __jsx("br", null), "\u05D0\u05EA\u05DD \u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4, \u05D5\u05D0\u05EA\u05DD \u05DE\u05DB\u05D9\u05E0\u05D9\u05DD \u05D0\u05D5\u05EA\u05D4 \u05DC\u05DE\u05D2\u05D5\u05E8\u05D9\u05DD \u05E9\u05DC \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05E2\u05EA\u05D9\u05D3\u05D9\u05D9\u05DD. \u05D4\u05E9\u05E7\u05E2\u05EA\u05DD \u05DB\u05E1\u05E3, \u05D6\u05DE\u05DF \u05D5\u05DE\u05E9\u05D0\u05D1\u05D9\u05DD - \u05D5\u05DB\u05E2\u05EA \u05D0\u05EA\u05DD \u05E2\u05E1\u05D5\u05E7\u05D9\u05DD \u05D1\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D0\u05D7\u05E8 \u05D4\u05D0\u05E0\u05E9\u05D9\u05DD \u05E9\u05D9\u05D2\u05D5\u05E8\u05D5 \u05D1\u05D4. \u05D1\u05D5\u05D5\u05D3\u05D0\u05D9 \u05EA\u05E8\u05E6\u05D5 \u05E9\u05DE\u05D9 \u05E9\u05D9\u05D2\u05D5\u05E8 \u05D1\u05D3\u05D9\u05E8\u05D4 \u05E9\u05DC\u05DB\u05DD \u05D9\u05D4\u05D9\u05D4 \u05D0\u05D3\u05DD \u05D0\u05DE\u05D9\u05DF \u05D5\u05D8\u05D5\u05D1. \u05DC\u05E4\u05E0\u05D9 \u05E9\u05D0\u05EA\u05DD \u05DE\u05EA\u05D9\u05D9\u05E9\u05D1\u05D9\u05DD \u05E2\u05DD \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D4\u05E2\u05EA\u05D9\u05D3\u05D9\u05D9\u05DD \u05DC\u05D9\u05D3 \u05D4\u05E9\u05D5\u05DC\u05D7\u05DF \u05D5\u05D7\u05D5\u05EA\u05DE\u05D9\u05DD \u05E2\u05DC \u05D7\u05D5\u05D6\u05D4 \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA, \u05D9\u05E9\u05E0\u05D5 \u05E6\u05E2\u05D3 \u05D7\u05E9\u05D5\u05D1 \u05D0\u05E9\u05E8 \u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05D1\u05E6\u05E2 - \u05D5\u05D4\u05D5\u05D0 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D4\u05E2\u05EA\u05D9\u05D3\u05D9\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD. \u05DE\u05E2\u05D1\u05E8 \u05DC\u05D4\u05DB\u05E8\u05D5\u05EA \u05D1\u05E1\u05D9\u05E1\u05D9\u05EA \u05E2\u05DD \u05D4\u05D0\u05E0\u05E9\u05D9\u05DD \u05E9\u05D1\u05E2\u05E6\u05DD \u05D4\u05D5\u05DC\u05DB\u05D9\u05DD \u05DC\u05D2\u05D5\u05E8 \u05D1\u05E0\u05DB\u05E1 \u05E9\u05DC\u05DB\u05DD, ", __jsx("strong", null, "\u05D1\u05D3\u05D9\u05E7\u05EA \u05E8\u05E7\u05E2 \u05E2\u05DC \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD"), " \u05D2\u05DD \u05DE\u05E2\u05E0\u05D9\u05E7\u05D4 \u05DC\u05DB\u05DD \u05DE\u05D9\u05D3\u05E2 \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9 \u05D4\u05E2\u05E9\u05D5\u05D9 \u05DC\u05D4\u05E9\u05E4\u05D9\u05E2 \u05E2\u05DC \u05DB\u05DC \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA, \u05E7\u05D1\u05DC\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D5\u05D1\u05E2\u05D9\u05D5\u05EA \u05E2\u05EA\u05D9\u05D3\u05D9\u05D5\u05EA \u05E9\u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05E6\u05D5\u05E5. \u05EA\u05D4\u05DC\u05D9\u05DA \u05DE\u05E6\u05D9\u05D0\u05EA \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D4\u05D5\u05D0 \u05DC\u05D0 \u05E4\u05E9\u05D5\u05D8, \u05D5\u05D3\u05D5\u05D5\u05E7\u05D0 \u05D1\u05E9\u05DC \u05DB\u05DA - \u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05D8\u05D5\u05D7\u05D9\u05DD \u05E9\u05D0\u05EA\u05DD \u05DE\u05E9\u05DB\u05D9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D3\u05D9\u05E8\u05EA\u05DB\u05DD \u05DC\u05D0\u05E0\u05E9\u05D9\u05DD \u05D0\u05E9\u05E8 \u05D9\u05E9\u05DE\u05E8\u05D5 \u05E2\u05DC\u05D9\u05D4, \u05D9\u05E9\u05DC\u05DE\u05D5 \u05D1\u05D6\u05DE\u05DF \u05D5\u05DB\u05DE\u05D5\u05D1\u05DF - \u05DC\u05D0 \u05D9\u05D2\u05E8\u05DE\u05D5 \u05E0\u05D6\u05E7\u05D9\u05DD.", __jsx("strong", null, "\u05D1\u05D3\u05D9\u05E7\u05EA \u05E8\u05E7\u05E2 \u05E2\u05DC \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD"), " \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05E7\u05D9\u05E4\u05D4 \u05D5\u05D9\u05E1\u05D5\u05D3\u05D9\u05EA, \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D5\u05D5\u05D3\u05D0 \u05E9\u05DB\u05DC \u05D4\u05E0\u05D5\u05E9\u05D0\u05D9\u05DD \u05D4\u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9\u05D9\u05DD \u05E0\u05D1\u05D3\u05E7\u05D5 - \u05D9\u05DB\u05D5\u05DC\u05EA \u05DB\u05DC\u05DB\u05DC\u05D9\u05EA, \u05D0\u05DE\u05D9\u05E0\u05D5\u05EA, \u05E4\u05E8\u05D8\u05D9 \u05D6\u05D9\u05D4\u05D5\u05D9, \u05D7\u05D5\u05D1\u05D5\u05EA \u05D5\u05E2\u05D5\u05D3. \u05DC\u05D0 \u05EA\u05E8\u05E6\u05D5 \u05DC\u05D2\u05DC\u05D5\u05EA \u05E4\u05EA\u05D0\u05D5\u05DD, \u05DC\u05D0\u05D7\u05E8 \u05E9\u05D4\u05E9\u05D5\u05DB\u05E8 \u05DB\u05D1\u05E8 \u05E0\u05DB\u05E0\u05E1 \u05DC\u05D2\u05D5\u05E8 \u05D1\u05D3\u05D9\u05E8\u05EA\u05DB\u05DD, \u05DB\u05D9 \u05E9\u05DB\u05D7\u05EA\u05DD \u05E4\u05E8\u05D8 \u05DE\u05D9\u05D3\u05E2 \u05D7\u05D9\u05D5\u05E0\u05D9 \u05D0\u05E9\u05E8 \u05D9\u05E9\u05E4\u05D9\u05E2 \u05E2\u05DC \u05DB\u05DC \u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA. DiffeRent \u05DE\u05E6\u05D9\u05E2\u05D4 \u05DC\u05DB\u05DD \u05D1\u05D3\u05D9\u05D5\u05E7 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05D6\u05D4, \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05D9\u05D3\u05D9 \u05D5\u05D1\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05D1\u05D3\u05D9\u05E7\u05EA \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05DC\u05E4\u05E0\u05D9 \u05D4\u05E9\u05DB\u05E8\u05EA \u05D3\u05D9\u05E8\u05D4 - \u05DE\u05D4 \u05DE\u05D5\u05DE\u05DC\u05E5 \u05D5\u05DB\u05D3\u05D0\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7?"), __jsx("br", null), __jsx("br", null), "\u05E8\u05D0\u05E9\u05D9\u05EA, \u05E2\u05E9\u05D9\u05E0\u05D5 \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD \u05E1\u05D3\u05E8 \u05D5\u05E8\u05D9\u05DB\u05D6\u05E0\u05D5 \u05D0\u05EA \u05E8\u05E9\u05D9\u05DE\u05EA \u05D4\u05E0\u05D5\u05E9\u05D0\u05D9\u05DD \u05D1\u05D4\u05DD \u05DB\u05D3\u05D0\u05D9 \u05DC\u05D4\u05EA\u05DE\u05E7\u05D3 \u05DB\u05D0\u05E9\u05E8 \u05DE\u05D1\u05E6\u05E2\u05D9\u05DD ", __jsx("strong", null, "\u05D1\u05D3\u05D9\u05E7\u05EA \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD"), ". \u05DC\u05E4\u05E0\u05D9 \u05E9\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D1\u05D3\u05D9\u05E7\u05D4, \u05D7\u05E9\u05D5\u05D1 \u05DC\u05D6\u05DB\u05D5\u05E8 \u05DB\u05D9 \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05D6\u05D5\u05E8\u05DD \u05D4\u05D9\u05D5\u05DD \u05D1\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D5\u05EA \u05D4\u05E9\u05D5\u05E0\u05D5\u05EA (\u05D5\u05D1\u05E2\u05D9\u05E7\u05E8 \u05D1\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8) \u05D4\u05D5\u05D0 \u05E0\u05D2\u05D9\u05E9 \u05D5\u05DB\u05DE\u05E2\u05D8 \u05D0\u05D9\u05E0\u05E1\u05D5\u05E4\u05D9 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D7\u05D9\u05E4\u05D5\u05E9 \u05E4\u05E9\u05D5\u05D8 \u05D1\u05D2\u05D5\u05D2\u05DC \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DE\u05D9\u05D3\u05E2 \u05DB\u05DE\u05E2\u05D8 \u05E2\u05DC \u05DB\u05DC \u05D0\u05D7\u05D3. \u05D0\u05DA \u05D9\u05E9 \u05DC\u05D6\u05DB\u05D5\u05E8 \u05DB\u05D9 \u05D2\u05DD \u05D7\u05D9\u05E4\u05D5\u05E9 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA \u05D0\u05DE\u05D9\u05DF, \u05D5\u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05D8\u05D5\u05D7\u05D9\u05DD \u05E9\u05D4\u05DE\u05D9\u05D3\u05E2 \u05E9\u05DE\u05E6\u05D0\u05EA\u05DD \u05DE\u05EA\u05D9\u05D9\u05D7\u05E1 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DC\u05E9\u05D5\u05DB\u05E8 \u05D4\u05E4\u05D5\u05D8\u05E0\u05E6\u05D9\u05D0\u05DC\u05D9 \u05E9\u05DC\u05DB\u05DD (\u05D5\u05DC\u05D0 \u05DC\u05D0\u05D3\u05DD \u05D0\u05D7\u05E8 \u05E2\u05DD \u05D0\u05D5\u05EA\u05D5 \u05E9\u05DD, \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0). \u05D1\u05E0\u05D5\u05E1\u05E3, \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05E9\u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4 \u05EA\u05E8\u05E6\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D1\u05D4\u05E7\u05D3\u05DD \u05D5-\"\u05DC\u05E1\u05D9\u05D9\u05DD \u05E2\u05DD \u05D6\u05D4\", \u05DB\u05DC\u05D5\u05DE\u05E8 \u05DC\u05D7\u05EA\u05D5\u05DD \u05E2\u05DC \u05D7\u05D5\u05D6\u05D4 \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05D5\u05DC\u05D3\u05E2\u05EA \u05E9\u05D6\u05D4 \u05DE\u05D0\u05D7\u05D5\u05E8\u05D9\u05DB\u05DD. \u05E2\u05DD \u05D6\u05D0\u05EA, \u05D4\u05D3\u05D1\u05E8 \u05D4\u05E0\u05DB\u05D5\u05DF \u05DC\u05E2\u05E9\u05D5\u05EA \u05D4\u05D5\u05D0 \u05DC\u05D1\u05E8\u05E8 \u05DC\u05E2\u05D5\u05DE\u05E7 \u05DE\u05D9 \u05D4\u05D0\u05E0\u05E9\u05D9\u05DD \u05E9\u05D9\u05D2\u05D5\u05E8\u05D5 \u05D1\u05D3\u05D9\u05E8\u05D4 \u05E9\u05DC\u05DB\u05DD \u05D5\u05DB\u05DE\u05D4 \u05D0\u05EA\u05DD \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05E1\u05DE\u05D5\u05DA \u05E2\u05DC\u05D9\u05D4\u05DD - \u05D8\u05E8\u05DD \u05D7\u05EA\u05D9\u05DE\u05EA \u05D4\u05D7\u05D5\u05D6\u05D4. \u05E2\u05D3\u05D9\u05E3 \u05DC\u05D7\u05EA\u05D5\u05DD \u05D7\u05D5\u05D6\u05D4 \u05E9\u05D1\u05D5\u05E2 \u05D0\u05D5 \u05E9\u05D1\u05D5\u05E2\u05D9\u05D9\u05DD \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05DE\u05D4 \u05E9\u05EA\u05DB\u05E0\u05E0\u05EA\u05DD, \u05DE\u05D0\u05E9\u05E8 \u05DC\u05DE\u05D4\u05E8 \u05DC\u05D7\u05EA\u05D5\u05DD \u05D5\u05D0\u05D6 \u05DC\u05D4\u05D1\u05D9\u05DF \u05E9\"\u05E0\u05EA\u05E7\u05E2\u05EA\u05DD\" \u05E2\u05DD \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05E9\u05D0\u05D9\u05E0\u05DD \u05D0\u05DE\u05D9\u05E0\u05D9\u05DD\u2026 \u05D0\u05DD \u05D1\u05E8\u05E6\u05D5\u05E0\u05DB\u05DD \u05DC\u05E1\u05D9\u05D9\u05DD \u05E2\u05DD \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D1\u05D3\u05D9\u05E7\u05D4 \u05D1\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA, \u05D5\u05DC\u05D3\u05E2\u05EA \u05E9\u05D9\u05E9 \u05D1\u05D9\u05D3\u05D9\u05DB\u05DD \u05DE\u05D9\u05D3\u05E2 \u05D0\u05DE\u05D9\u05DF \u05E2\u05DC \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D4\u05E4\u05D5\u05D8\u05E0\u05E6\u05D9\u05D0\u05DC\u05D9 - \u05D9\u05D9\u05EA\u05DB\u05DF \u05D5\u05EA\u05E8\u05E6\u05D5 \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05D7\u05D1\u05E8\u05D4 \u05D0\u05E9\u05E8 \u05EA\u05D5\u05DB\u05DC \u05DC\u05D1\u05E6\u05E2 \u05D6\u05D0\u05EA \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD, \u05D5\u05D1\u05DB\u05DA \u05DC\u05D4\u05E1\u05D9\u05E8 \u05DE\u05E2\u05DC\u05D9\u05DB\u05DD \u05E2\u05D5\u05D3 \u05DE\u05E9\u05D9\u05DE\u05D4 \u05DC\u05E7\u05E8\u05D0\u05EA \u05D7\u05EA\u05D9\u05DE\u05EA \u05D4\u05D7\u05D5\u05D6\u05D4 \u05D4\u05DE\u05D9\u05D5\u05D7\u05DC\u05EA.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05D0\u05D6 \u05DE\u05D0\u05D9\u05E4\u05D4 \u05D1\u05DB\u05DC\u05DC \u05DB\u05D3\u05D0\u05D9 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DB\u05D0\u05E9\u05E8 \u05E2\u05D5\u05E8\u05DB\u05D9\u05DD \u05D1\u05D3\u05D9\u05E7\u05EA \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD?"), __jsx("br", null), __jsx("br", null), "\u25CF \u05E4\u05E8\u05D8\u05D9 \u05D6\u05D9\u05D4\u05D5\u05D9 \u05E9\u05DC \u05D4\u05E9\u05D5\u05DB\u05E8 - \u05D4\u05E0\u05D5\u05E9\u05D0 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05D5\u05D4\u05D1\u05E1\u05D9\u05E1\u05D9. \u05DE\u05DF \u05D4\u05E1\u05EA\u05DD, \u05EA\u05E8\u05E6\u05D5 \u05DC\u05D3\u05E2\u05EA \u05DE\u05D9 \u05D4\u05D0\u05E0\u05E9\u05D9\u05DD \u05E9\u05D9\u05D2\u05D5\u05E8\u05D5 \u05D1\u05D3\u05D9\u05E8\u05EA\u05DB\u05DD \u05D1\u05EA\u05E7\u05D5\u05E4\u05D4 \u05D4\u05E7\u05E8\u05D5\u05D1\u05D4 (\u05D0\u05D5 \u05D4\u05E8\u05D7\u05D5\u05E7\u05D4\u2026). \u05D6\u05D4 \u05D0\u05D5\u05DC\u05D9 \u05E0\u05E9\u05DE\u05E2 \u05DE\u05D5\u05D1\u05DF \u05DE\u05D0\u05DC\u05D9\u05D5, \u05D0\u05DA \u05EA\u05EA\u05E4\u05DC\u05D0\u05D5 \u05DC\u05D3\u05E2\u05EA \u05E9\u05DE\u05E7\u05E8\u05D9\u05DD \u05DB\u05DE\u05D5 \u05D4\u05E6\u05D2\u05EA \u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA \u05DE\u05D6\u05D5\u05D9\u05E4\u05EA \u05D0\u05D5 \u05DE\u05E1\u05D9\u05E8\u05EA \u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD \u05E9\u05E7\u05E8\u05D9\u05D9\u05DD - \u05D0\u05D9\u05E0\u05DD \u05DB\u05D4 \u05E0\u05D3\u05D9\u05E8\u05D9\u05DD \u05DB\u05E4\u05D9 \u05E9\u05E0\u05D3\u05DE\u05D4. \u05DE\u05D0\u05D7\u05E8 \u05D5\u05E4\u05E8\u05D8\u05D9 \u05D4\u05D6\u05D9\u05D4\u05D5\u05D9 \u05D2\u05DD \u05D9\u05D5\u05E4\u05D9\u05E2\u05D5 \u05D1\u05D7\u05D5\u05D6\u05D4 \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA, \u05D6\u05D4\u05D5 \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D9 \u05D5\u05D4\u05D7\u05D9\u05D5\u05E0\u05D9 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05D1\u05D3\u05D5\u05E7 - \u05DE\u05D9\u05D3 \u05E2\u05DD \u05D9\u05E6\u05D9\u05E8\u05EA \u05D4\u05E7\u05E9\u05E8 \u05DE\u05D5\u05DC \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D4\u05E2\u05EA\u05D9\u05D3\u05D9\u05D9\u05DD.", __jsx("br", null), "\u25CF \u05D1\u05D3\u05D9\u05E7\u05EA \u05D9\u05DB\u05D5\u05DC\u05EA \u05DB\u05DC\u05DB\u05DC\u05D9\u05EA \u05E9\u05DC \u05E9\u05D5\u05DB\u05E8 - \u05D1\u05E1\u05D5\u05E4\u05D5 \u05E9\u05DC \u05D3\u05D1\u05E8, \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D0\u05DE\u05D5\u05E8 \u05DC\u05E9\u05DC\u05DD \u05DC\u05DB\u05DD \u05E9\u05DB\u05E8-\u05D3\u05D9\u05E8\u05D4 \u05DE\u05D3\u05D9 \u05D7\u05D5\u05D3\u05E9 \u05D1\u05D7\u05D5\u05D3\u05E9\u05D5. \u05DC\u05D0 \u05EA\u05E8\u05E6\u05D5, \u05DB\u05DE\u05D5\u05D1\u05DF, \u05E9\u05D4\u05D5\u05D0 \u05D9\u05E4\u05E1\u05D9\u05E7 \u05DC\u05E9\u05DC\u05DD, \u05D9\u05E9\u05DC\u05DD \u05E1\u05DB\u05D5\u05DE\u05D9\u05DD \u05D7\u05DC\u05E7\u05D9\u05D9\u05DD \u05D0\u05D5 \u05D9\u05E6\u05D1\u05D5\u05E8 \u05DE\u05D5\u05DC\u05DB\u05DD \u05D7\u05D5\u05D1 \u05D2\u05D3\u05D5\u05DC\u2026 \u05DC\u05DB\u05DF, \u05D1\u05D3\u05D9\u05E7\u05EA \u05D4\u05D9\u05DB\u05D5\u05DC\u05EA \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9\u05EA \u05D4\u05D9\u05D0 \u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05D0\u05E9\u05E8 \u05DE\u05D1\u05E6\u05E2\u05D9\u05DD \u05D1\u05D3\u05D9\u05E7\u05EA \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD. \u05D1\u05EA\u05D7\u05D5\u05DD \u05D6\u05D4 \u05D9\u05E9\u05E0\u05DD \u05E0\u05D5\u05E9\u05D0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05E9\u05DB\u05D3\u05D0\u05D9 \u05D5\u05DE\u05D5\u05DE\u05DC\u05E5 \u05DC\u05D1\u05D3\u05D5\u05E7, \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0:", __jsx("br", null), __jsx("br", null), __jsx("strong", null, " \xB7 \u05D7\u05D5\u05D1\u05D5\u05EA \u05E2\u05D1\u05E8"), " - \u05E2\u05D5\u05D3 \u05D3\u05D1\u05E8 \u05E9\u05DC\u05D0 \u05EA\u05E8\u05E6\u05D5 \u05DC\u05D2\u05DC\u05D5\u05EA \u05DB\u05D0\u05E9\u05E8 \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05DB\u05D1\u05E8 \u05D2\u05E8\u05D9\u05DD \u05D1\u05E0\u05DB\u05E1 \u05E9\u05DC\u05DB\u05DD, \u05D4\u05D5\u05D0 \u05D4\u05E2\u05D5\u05D1\u05D3\u05D4 \u05E9\u05D4\u05DD \u05D7\u05D9\u05D9\u05D1\u05D9\u05DD \u05DB\u05E1\u05E4\u05D9\u05DD - \u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4 \u05E7\u05D5\u05D3\u05DD, \u05D0\u05D5 \u05D0\u05E4\u05D9\u05DC\u05D5 \u05DC\u05D2\u05D5\u05E8\u05DE\u05D9\u05DD \u05D0\u05D7\u05E8\u05D9\u05DD. \u05D7\u05D5\u05D1\u05D5\u05EA \u05E9\u05DC \u05D4\u05D3\u05D9\u05D9\u05E8\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD \u05E2\u05DC\u05D5\u05DC\u05D9\u05DD \u05DC\u05DE\u05E0\u05D5\u05E2 \u05DE\u05D4\u05DD \u05DC\u05E9\u05DC\u05DD \u05DC\u05DB\u05DD \u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4, \u05E4\u05E9\u05D5\u05D8 \u05DB\u05D9 \u05D0\u05D9\u05DF \u05DC\u05D4\u05DD \u05DB\u05E1\u05E3 - \u05D0\u05D5 \u05DB\u05D9 \u05D4\u05DD \u05DB\u05D1\u05E8 \u05D7\u05D9\u05D9\u05D1\u05D9\u05DD \u05D0\u05D5\u05EA\u05D5 \u05DC\u05DE\u05D9\u05E9\u05D4\u05D5 \u05D0\u05D7\u05E8. ", __jsx("strong", null, "\u05D1\u05D3\u05D9\u05E7\u05EA \u05D9\u05DB\u05D5\u05DC\u05EA \u05DB\u05DC\u05DB\u05DC\u05D9\u05EA \u05E9\u05DC \u05E9\u05D5\u05DB\u05E8"), " \u05EA\u05E1\u05D9\u05D9\u05E2 \u05D1\u05D4\u05D1\u05E0\u05EA \u05D7\u05D5\u05D1\u05D5\u05EA-\u05D4\u05E2\u05D1\u05E8 \u05E9\u05DC\u05D5 (\u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E9 \u05DB\u05D0\u05DC\u05D4, \u05DB\u05DE\u05D5\u05D1\u05DF), \u05D5\u05EA\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA\u05DB\u05DD \u05DC\u05D4\u05DB\u05D9\u05E8 \u05D0\u05EA \u05DE\u05E6\u05D1\u05D5 \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9 \u05E7\u05E6\u05EA \u05D9\u05D5\u05EA\u05E8. \u05D1\u05D4\u05DE\u05E9\u05DA \u05DE\u05D0\u05DE\u05E8 \u05D6\u05D4, \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05E7\u05E8\u05D5\u05D0 \u05DB\u05D9\u05E6\u05D3 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D6\u05D0\u05EA \u05D1\u05E7\u05DC\u05D5\u05EA \u05D5\u05D1\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA.", __jsx("br", null), __jsx("strong", null, " \xB7 \u05D7\u05E9\u05D1\u05D5\u05DF \u05DE\u05D5\u05D2\u05D1\u05DC"), " - \u05DB\u05D0\u05E9\u05E8 \u05DE\u05D3\u05D1\u05E8\u05D9\u05DD \u05E2\u05DC \u05D7\u05E9\u05D1\u05D5\u05DF \u05DE\u05D5\u05D2\u05D1\u05DC, \u05DE\u05EA\u05DB\u05D5\u05D5\u05E0\u05D9\u05DD \u05D1\u05E2\u05E6\u05DD \u05DC\u05D7\u05E9\u05D1\u05D5\u05DF \u05D1\u05E0\u05E7 \u05D0\u05E9\u05E8 \u05E6'\u05E7\u05D9\u05DD \u05E9\u05E0\u05DE\u05E9\u05DB\u05D5 \u05DE\u05DE\u05E0\u05D5 \u05D7\u05D6\u05E8\u05D5, \u05DB\u05DC\u05D5\u05DE\u05E8 - \u05D4\u05DD \u05D1\u05E2\u05E6\u05DD \u05D7\u05E1\u05E8\u05D9 \u05DB\u05D9\u05E1\u05D5\u05D9. \u05DE\u05D3\u05D5\u05E2 \u05D6\u05D4 \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9 \u05DC\u05DB\u05DD \u05DB\u05D1\u05E2\u05DC\u05D9 \u05D4\u05E0\u05DB\u05E1? \u05DE\u05D0\u05D7\u05E8 \u05D5\u05D0\u05DD \u05DC\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D4\u05E2\u05EA\u05D9\u05D3\u05D9\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD \u05D9\u05E9 \u05D7\u05E9\u05D1\u05D5\u05DF \u05D1\u05E0\u05E7 \u05DE\u05D5\u05D2\u05D1\u05DC, \u05D4\u05DD \u05DC\u05D0 \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D7\u05E9\u05D1\u05D5\u05DF \u05D1\u05E0\u05E7 \u05E0\u05D5\u05E1\u05E3 \u05D0\u05D5 \u05DC\u05DE\u05E9\u05D5\u05DA \u05E6'\u05E7\u05D9\u05DD \u05DE\u05D4\u05D7\u05E9\u05D1\u05D5\u05DF \u05D4\u05DE\u05D5\u05D2\u05D1\u05DC. \u05D1\u05DE\u05D9\u05DC\u05D9\u05DD \u05E4\u05E9\u05D5\u05D8\u05D5\u05EA, \u05D6\u05D4 \u05D1\u05E2\u05E6\u05DD \u05D0\u05D5\u05DE\u05E8 \u05E9\u05D9\u05E9 \u05E1\u05D9\u05DB\u05D5\u05D9 \u05D2\u05D1\u05D5\u05D4 \u05E9\u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05DC\u05D0 \u05D9\u05D5\u05DB\u05DC\u05D5 \u05DC\u05E9\u05DC\u05DD \u05DC\u05DB\u05DD \u05D0\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05DE\u05E1\u05D5\u05D3\u05E8\u05EA. \u05D6\u05D4 \u05D1\u05D5\u05D5\u05D3\u05D0\u05D9 \u05DC\u05D0 \u05DE\u05E9\u05D4\u05D5 \u05E9\u05EA\u05E8\u05E6\u05D5 \u05DC\u05D4\u05EA\u05E2\u05E1\u05E7 \u05D0\u05D9\u05EA\u05D5, \u05D5\u05DC\u05DB\u05DF \u05D2\u05DD \u05D6\u05D4 \u05D3\u05D1\u05E8 \u05D7\u05D9\u05D5\u05E0\u05D9 \u05E9\u05DB\u05D3\u05D0\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D8\u05E8\u05DD \u05D7\u05EA\u05D9\u05DE\u05EA \u05D7\u05D5\u05D6\u05D4 \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA.", __jsx("br", null), __jsx("br", null), "\u25CF \u05E4\u05E8\u05D8\u05D9 \u05DE\u05E7\u05D5\u05DD \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD \u05E7\u05D5\u05D3\u05DD - \u05DC\u05DE\u05E9\u05DC, \u05D4\u05D9\u05DB\u05DF \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D4\u05E2\u05EA\u05D9\u05D3\u05D9\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD \u05D2\u05E8\u05D5 \u05E7\u05D5\u05D3\u05DD. \u05D4\u05DB\u05D5\u05D5\u05E0\u05D4 \u05D4\u05D9\u05D0 \u05D1\u05E2\u05E6\u05DD \u05E9\u05EA\u05D4\u05D9\u05D4 \u05DC\u05DB\u05DD \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA, \u05D1\u05D9\u05D3\u05D9\u05E2\u05EA\u05DD, \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u05E2\u05DD \u05D1\u05E2\u05DC\u05D9 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D4\u05E7\u05D5\u05D3\u05DE\u05D9\u05DD \u05E9\u05DC\u05D4\u05DD. \u05D1\u05DE\u05E6\u05D1 \u05DB\u05D6\u05D4, \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05E9\u05D0\u05D5\u05DC \u05D0\u05EA \u05D1\u05E2\u05DC\u05D9 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D4\u05E7\u05D5\u05D3\u05DE\u05EA \u05D4\u05D0\u05DD \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D4\u05D9\u05D5 \u05D0\u05DE\u05D9\u05E0\u05D9\u05DD, \u05D4\u05D0\u05DD \u05E9\u05D9\u05DC\u05DE\u05D5 \u05D1\u05D6\u05DE\u05DF, \u05D4\u05D0\u05DD \u05D2\u05E8\u05DE\u05D5 \u05E0\u05D6\u05E7\u05D9\u05DD \u05DC\u05D3\u05D9\u05E8\u05D4 \u05D1\u05DB\u05D5\u05D5\u05E0\u05D4, \u05D4\u05D0\u05DD \u05D9\u05E6\u05D0\u05D5 \u05DE\u05D4\u05D3\u05D9\u05E8\u05D4 \u05DC\u05E4\u05E0\u05D9 \u05EA\u05D5\u05DD \u05D7\u05D5\u05D6\u05D4 \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA (\u05D5\u05DE\u05D0\u05D9\u05D6\u05D5 \u05E1\u05D9\u05D1\u05D4 \u05D6\u05D4 \u05E7\u05E8\u05D4), \u05D5\u05E2\u05D5\u05D3. \u05E9\u05D5\u05DB\u05E8 \u05D0\u05E9\u05E8 \u05D2\u05E8 \u05D1\u05E2\u05D1\u05E8 \u05D1\u05D3\u05D9\u05E8\u05D5\u05EA \u05E9\u05DB\u05D5\u05E8\u05D5\u05EA, \u05E9\u05D9\u05DC\u05DD \u05D1\u05D6\u05DE\u05DF \u05D5\u05E9\u05DE\u05E8 \u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DB\u05DE\u05E6\u05D5\u05E4\u05D4 \u05DE\u05DE\u05E0\u05D5 - \u05D9\u05E9\u05DE\u05D7 \u05DC\u05E9\u05EA\u05E3 \u05D0\u05EA\u05DB\u05DD \u05D1\u05E4\u05E8\u05D8\u05D9 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D5\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D4\u05E7\u05D5\u05D3\u05DD \u05E9\u05DC\u05D5. \u05D2\u05DD \u05DB\u05D0\u05DF, \u05D4\u05D9\u05D5 \u05E2\u05E8\u05E0\u05D9\u05D9\u05DD \u05DC\u05E1\u05D9\u05E8\u05D5\u05D1 \u05D0\u05D5 \u05E0\u05D9\u05E1\u05D9\u05D5\u05E0\u05D5\u05EA \u05D4\u05EA\u05D7\u05DE\u05E7\u05D5\u05EA \u05E9\u05DC \u05D4\u05E9\u05D5\u05DB\u05E8 \u05DE\u05DC\u05EA\u05EA \u05DC\u05DB\u05DD \u05D0\u05EA \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05D6\u05D4.", __jsx("br", null), "\u25CF \u05DE\u05D9\u05D3\u05E2 \u05D7\u05D9\u05D5\u05E0\u05D9 \u05E0\u05D5\u05E1\u05E3 - \u05DE\u05D3\u05D5\u05D1\u05E8 \u05D1\u05DE\u05D9\u05D3\u05E2 \u05E9\u05E2\u05DC \u05E4\u05E0\u05D9\u05D5 \u05D0\u05D5\u05DC\u05D9 \u05E0\u05E8\u05D0\u05D4 \u05DC\u05E0\u05D5 \u05DE\u05D9\u05D5\u05EA\u05E8, \u05D0\u05DA \u05D4\u05D5\u05D0 \u05D3\u05D5\u05D5\u05E7\u05D0 \u05E2\u05E9\u05D5\u05D9 \u05DC\u05E1\u05D9\u05D9\u05E2 \u05DC\u05E0\u05D5 \u05D1\u05D4\u05E9\u05DC\u05DE\u05EA \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05DE\u05DC\u05D0\u05D4 \u05DC\u05D2\u05D1\u05D9 \u05D4\u05D0\u05D3\u05DD \u05E9\u05E8\u05D5\u05E6\u05D4 \u05DC\u05E9\u05DB\u05D5\u05E8 \u05DE\u05D0\u05EA\u05E0\u05D5 \u05D0\u05EA \u05D4\u05D3\u05D9\u05E8\u05D4. \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0:", __jsx("br", null), __jsx("br", null), "\xB7 \u05D4\u05D0\u05DD \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D4\u05E2\u05EA\u05D9\u05D3\u05D9 \u05E2\u05D5\u05D1\u05D3 \u05DB\u05E8\u05D2\u05E2 \u05D1\u05E2\u05D1\u05D5\u05D3\u05D4 \u05DE\u05E1\u05D5\u05D3\u05E8\u05EA?", __jsx("br", null), "\xB7 \u05D4\u05D0\u05DD \u05D9\u05E9 \u05DC\u05E9\u05D5\u05DB\u05E8 \u05D4\u05E2\u05EA\u05D9\u05D3\u05D9 \u05D4\u05DB\u05E0\u05E1\u05D4 \u05E7\u05D1\u05D5\u05E2\u05D4?", __jsx("br", null), "\xB7 \u05D4\u05D0\u05DD \u05D9\u05E9 \u05DC\u05D5 \u05D9\u05DB\u05D5\u05DC\u05EA \u05DB\u05DC\u05DB\u05DC\u05D9\u05EA \u05DC\u05E9\u05DC\u05DD \u05D0\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D1\u05D6\u05DE\u05DF \u05D5\u05D1\u05DE\u05DC\u05D5\u05D0\u05D5?", __jsx("br", null), "\xB7 \u05D4\u05D0\u05DD \u05DE\u05D3\u05D5\u05D1\u05E8 \u05D1\u05D0\u05D3\u05DD \u05D0\u05E9\u05E8 \u05D2\u05E8 \u05D1\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05D1\u05DE\u05E1\u05E4\u05E8 \u05E8\u05D1 \u05E9\u05DC \u05D3\u05D9\u05E8\u05D5\u05EA \u05D1\u05EA\u05E7\u05D5\u05E4\u05D4 \u05E7\u05E8\u05D4?", __jsx("br", null), "\xB7 \u05D4\u05D0\u05DD \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D4\u05E2\u05EA\u05D9\u05D3\u05D9 \u05D4\u05D5\u05D0 \u05D0\u05D3\u05DD \u05D9\u05D7\u05D9\u05D3, \u05D0\u05D5 \u05E9\u05DE\u05D0 \u05DE\u05D3\u05D5\u05D1\u05E8 \u05D1\u05DE\u05E9\u05E4\u05D7\u05D4 \\ \u05E9\u05D5\u05EA\u05E4\u05D9\u05DD?", __jsx("br", null), __jsx("br", null), "\u05DB\u05D0\u05E9\u05E8 \u05D1\u05D5\u05D3\u05E7\u05D9\u05DD \u05DE\u05D9\u05D3\u05E2 \u05D7\u05D9\u05D5\u05E0\u05D9 \u05E0\u05D5\u05E1\u05E3, \u05D7\u05E9\u05D5\u05D1 \u05DC\u05D6\u05DB\u05D5\u05E8 \u05DB\u05D9 \u05D1\u05E1\u05D5\u05E4\u05D5 \u05E9\u05DC \u05D3\u05D1\u05E8 \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05DE\u05DC\u05D0\u05D4 \u05D4\u05D9\u05D0 \u05D4\u05D7\u05E9\u05D5\u05D1\u05D4, \u05D5\u05DB\u05D9 \u05DC\u05D0 \u05DB\u05D3\u05D0\u05D9 \u05DC\u05D4\u05EA\u05D9\u05D9\u05D7\u05E1 \u05DC\u05E4\u05E8\u05D9\u05D8 \u05DE\u05D9\u05D3\u05E2 \u05D0\u05D7\u05D3 \u05DB\u05DE\u05D9\u05D9\u05E6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D3\u05DD \u05DC\u05D2\u05DE\u05E8\u05D9. \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0: \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D4\u05E2\u05EA\u05D9\u05D3\u05D9 \u05E9\u05DC\u05DB\u05DD \u05D1\u05D3\u05D9\u05D5\u05E7 \u05E2\u05D6\u05D1 \u05DE\u05E7\u05D5\u05DD \u05E2\u05D1\u05D5\u05D3\u05D4, \u05D5\u05D0\u05EA\u05DD \u05D7\u05D5\u05E9\u05E9\u05D9\u05DD \u05DB\u05D9 \u05D4\u05D5\u05D0 \u05DC\u05D0 \u05D9\u05DE\u05E6\u05D0 \u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05E7\u05E8\u05D5\u05D1 \u05D5\u05DC\u05D0 \u05D9\u05E9\u05DC\u05DD \u05DC\u05DB\u05DD \u05D1\u05D6\u05DE\u05DF. \u05D0\u05D5\u05DC\u05DD \u05D1\u05D3\u05D9\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E7 \u05EA\u05D2\u05DC\u05D4 \u05DC\u05DB\u05DD, \u05DB\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05E2\u05E6\u05DD \u05DB\u05DF \u05DE\u05EA\u05D7\u05D9\u05DC \u05DC\u05E2\u05D1\u05D5\u05D3 \u05E9\u05D5\u05D1 \u05D1\u05E7\u05E8\u05D5\u05D1, \u05D5\u05DB\u05D9 \u05DB\u05DC \u05D1\u05E2\u05DC\u05D9 \u05D4\u05D3\u05D9\u05E8\u05D5\u05EA \u05D4\u05E7\u05D5\u05D3\u05DE\u05D9\u05DD \u05E9\u05DC\u05D5 \u05D4\u05D9\u05D5 \u05DE\u05E8\u05D5\u05E6\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05DB\u05D9 \u05E9\u05D9\u05DC\u05DD \u05D1\u05D6\u05DE\u05DF. \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D1\u05D9\u05E8\u05D5\u05E8 \u05DC\u05E2\u05D5\u05DE\u05E7 \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D9 \u05D5\u05DE\u05E9\u05E0\u05D4 \u05D0\u05EA \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4. Diffe-Rent \u05DE\u05E6\u05D9\u05E2\u05D4 \u05DC\u05DB\u05DD \u05D1\u05D3\u05D9\u05D5\u05E7 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05D6\u05D4 \u2013 \u05D0\u05D9\u05E1\u05D5\u05E3 \u05DB\u05DC \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05DE\u05DE\u05D5\u05E7\u05D3\u05EA, \u05D5\u05D0\u05D9\u05E1\u05D5\u05E4\u05D5 \u05DC\u05DB\u05D3\u05D9 \u05EA\u05DE\u05D5\u05E0\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D0\u05E9\u05E8 \u05EA\u05E1\u05D9\u05D9\u05E2 \u05DC\u05DB\u05DD \u05DC\u05D4\u05DB\u05D9\u05E8 \u05D0\u05EA \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D1\u05D0\u05DE\u05EA.", __jsx("br", null), __jsx("br", null), "\u05DB\u05E4\u05D9 \u05E9\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05D1\u05D9\u05DF, \u05D1\u05D3\u05D9\u05E7\u05EA \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05DC\u05E4\u05E0\u05D9 \u05D4\u05E9\u05DB\u05E8\u05EA \u05D3\u05D9\u05E8\u05D4 \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA \u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D5\u05DE\u05DE\u05D5\u05E7\u05D3\u05EA. \u05D9\u05D9\u05EA\u05DB\u05DF \u05E9\u05DE\u05DE\u05D1\u05D8 \u05E8\u05D0\u05E9\u05D5\u05DF, \u05D1\u05D3\u05D9\u05E7\u05D4 \u05DB\u05D6\u05D5 \u05E2\u05E9\u05D5\u05D9\u05D4 \u05DC\u05D4\u05D1\u05D4\u05D9\u05DC \u05D0\u05EA\u05DB\u05DD \u05D5\u05D0\u05EA\u05DD \u05EA\u05D5\u05D4\u05D9\u05DD \u05DC\u05E2\u05E6\u05DE\u05DB\u05DD \u05DB\u05D9\u05E6\u05D3 \u05D1\u05E2\u05E6\u05DD \u05D0\u05EA\u05DD \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05E2\u05E9\u05D5\u05EA \u05D6\u05D0\u05EA - \u05DE\u05D1\u05DC\u05D9 \u05DC\u05E4\u05E1\u05E4\u05E1 \u05D0\u05E3 \u05E4\u05E8\u05D8, \u05D5\u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05E9\u05D0\u05EA\u05DD \u05DE\u05E9\u05E7\u05D9\u05E2\u05D9\u05DD \u05DE\u05D0\u05DE\u05E6\u05D9\u05DD \u05D1\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05E0\u05DB\u05D5\u05DF. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05D9\u05E2\u05D6\u05E8 \u05D1\u05D0\u05D3\u05DD \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E2\u05E9\u05D4 \u05D6\u05D0\u05EA \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD (\u05E2\u05D5\u05E8\u05DA \u05D3\u05D9\u05DF \u05DC\u05DE\u05E9\u05DC), \u05D0\u05DA \u05E7\u05D7\u05D5 \u05D1\u05D7\u05E9\u05D1\u05D5\u05DF \u05DB\u05D9 \u05E9\u05D9\u05E8\u05D5\u05EA \u05DB\u05D6\u05D4 \u05E2\u05E9\u05D5\u05D9 \u05DC\u05E2\u05DC\u05D5\u05EA \u05E1\u05DB\u05D5\u05DD \u05D1\u05DC\u05EA\u05D9 \u05DE\u05D1\u05D5\u05D8\u05DC \u05D5\u05E2\u05E9\u05D5\u05D9 \u05DC\u05E7\u05D7\u05EA \u05D6\u05DE\u05DF \u05E8\u05D1. \u05D1\u05DE\u05E7\u05E8\u05D4 \u05DB\u05D6\u05D4, \u05D9\u05D9\u05EA\u05DB\u05DF \u05D5\u05EA\u05E8\u05E6\u05D5 \u05DC\u05D7\u05E9\u05D5\u05D1 \u05E2\u05DC \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05E9\u05D9\u05E8\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9, \u05DB\u05DE\u05D5 \u05D6\u05D4 \u05D4\u05DE\u05D5\u05E6\u05E2 \u05E2\u05DC \u05D9\u05D3\u05D9 Rent-Diffe, \u05D5\u05D0\u05E9\u05E8 \u05D9\u05E1\u05D9\u05D9\u05E2 \u05DC\u05DB\u05DD \u05D1\u05D0\u05D9\u05EA\u05D5\u05E8 \u05D4\u05DE\u05D9\u05D3\u05E2, \u05D5\u05D9\u05D7\u05E1\u05D5\u05DA \u05DC\u05DB\u05DD \u05D6\u05DE\u05DF \u05D9\u05E7\u05E8. Rent-Diffe \u05EA\u05D1\u05D3\u05D5\u05E7 \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD \u05D0\u05EA \u05E4\u05E8\u05D8\u05D9 \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9\u05D9\u05DD \u05E2\u05DC \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD, \u05D5\u05EA\u05E2\u05E9\u05D4 \u05D6\u05D0\u05EA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D5\u05D0\u05DE\u05D9\u05E0\u05D4. \u05DB\u05DA \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D4\u05D9\u05D5\u05EA \u05E8\u05D2\u05D5\u05E2\u05D9\u05DD \u05D5\u05DC\u05D3\u05E2\u05EA \u05E9\u05D0\u05EA\u05DD \u05DE\u05DB\u05D9\u05E8\u05D9\u05DD \u05DB\u05DE\u05D5 \u05E9\u05E6\u05E8\u05D9\u05DA \u05D0\u05EA \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D4\u05E2\u05EA\u05D9\u05D3\u05D9\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD.", __jsx("br", null), __jsx("strong", null, "\u05D0\u05DC \u05EA\u05E9\u05DB\u05D7\u05D5"), ": \u05D1\u05D3\u05D9\u05E7\u05EA \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D4\u05D9\u05D0 \u05D4\u05DB\u05E8\u05D7\u05D9\u05EA \u05DE\u05DE\u05E9. \u05D1\u05D9\u05DE\u05D9\u05DD \u05D1\u05D4\u05DD \u05E0\u05DB\u05E1 \u05DC\u05DE\u05D2\u05D5\u05E8\u05D9\u05DD \u05D4\u05D5\u05D0 \u05DC\u05D0 \u05D3\u05D1\u05E8 \u05DE\u05D5\u05D1\u05DF \u05DE\u05D0\u05DC\u05D9\u05D5, \u05D5\u05D1\u05D4\u05E0\u05D7\u05D4 \u05D5\u05D0\u05EA\u05DD \u05E8\u05D5\u05E6\u05D9\u05DD \u05D2\u05DD \u05DC\u05D4\u05E8\u05D5\u05D5\u05D9\u05D7 \u05DB\u05E1\u05E3 \u05D0\u05DA \u05D2\u05DD \u05DC\u05D3\u05E2\u05EA \u05E9\u05D4\u05D3\u05D9\u05E8\u05D4 \u05E9\u05DC\u05DB\u05DD \u05E0\u05DE\u05E6\u05D0\u05EA \u05D1\u05D9\u05D3\u05D9\u05D9\u05DD \u05D8\u05D5\u05D1\u05D5\u05EA - \u05DC\u05D0 \u05DB\u05D3\u05D0\u05D9 \u05DC\u05D5\u05D5\u05EA\u05E8 \u05E2\u05DC \u05D1\u05D3\u05D9\u05E7\u05D4 \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05D1\u05D3\u05D9\u05E7\u05EA \u05E8\u05E7\u05E2 \u05E2\u05DC \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD - \u05DB\u05D9\u05E6\u05D3 \u05E0\u05D9\u05EA\u05DF \u05DC\u05E2\u05E9\u05D5\u05EA \u05D6\u05D0\u05EA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D5\u05E4\u05E9\u05D5\u05D8\u05D4?"), __jsx("br", null), __jsx("br", null), "\u05DC\u05D0\u05D7\u05E8 \u05E9\u05D4\u05D1\u05E0\u05EA\u05DD \u05E9\u05DB\u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D4 \u05DB\u05D3\u05D0\u05D9 \u05DE\u05D0\u05D3 \u05DC\u05D1\u05E8\u05E8 \u05DE\u05D9 \u05D9\u05D2\u05D5\u05E8 \u05D1\u05D3\u05D9\u05E8\u05D4 \u05E9\u05DC\u05DB\u05DD, \u05D5\u05E7\u05E8\u05D0\u05EA\u05DD \u05DE\u05D4 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DE\u05D5\u05DE\u05DC\u05E5 \u05DC\u05D1\u05D3\u05D5\u05E7 - \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E2\u05D1\u05D5\u05E8 \u05DC\u05E9\u05DC\u05D1 \u05D4\u05D1\u05D0. \u05DB\u05D0\u05DE\u05D5\u05E8, \u05D1\u05D3\u05D9\u05E7\u05EA \u05E9\u05D5\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05E2\u05E9\u05D5\u05D9\u05D4 \u05DC\u05E7\u05D7\u05EA \u05D6\u05DE\u05DF \u05D5\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA \u05D9\u05E1\u05D5\u05D3\u05D9\u05EA \u05D5\u05DE\u05D3\u05D5\u05D9\u05E7\u05EA. \u05DE\u05E1\u05D9\u05D1\u05D4 \u05D6\u05D5, \u05E9\u05D5\u05D5\u05D4 \u05DC\u05E9\u05E7\u05D5\u05DC \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05E9\u05D9\u05E8\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9 (\u05D3\u05D5\u05D2\u05DE\u05EA \u05D6\u05D4 \u05E9\u05DE\u05E6\u05D9\u05E2\u05D4 Rent-Diffe, \u05DC\u05DE\u05E9\u05DC) - \u05D0\u05E9\u05E8 \u05D1\u05E2\u05D6\u05E8\u05EA\u05D5 \u05EA\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05DB\u05D9 \u05D0\u05DE\u05D9\u05DF, \u05D1\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA \u05D5\u05EA\u05D5\u05DA \u05D6\u05DE\u05DF \u05E7\u05E6\u05E8 \u05DE\u05D0\u05D5\u05D3, \u05D5\u05EA\u05D3\u05E2\u05D5 \u05E9\u05D0\u05EA\u05DD \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05E2\u05D1\u05D5\u05E8 \u05DC\u05E9\u05DC\u05D1 \u05D4\u05D1\u05D0 \u05D5\u05DC\u05D4\u05EA\u05E7\u05D3\u05DD \u05DC\u05E7\u05E8\u05D0\u05EA \u05D7\u05EA\u05D9\u05DE\u05EA \u05D4\u05D7\u05D5\u05D6\u05D4.", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "\u05D0\u05D9\u05DA \u05DE\u05D1\u05E6\u05E2\u05D9\u05DD \u05D1\u05E4\u05D5\u05E2\u05DC \u05D1\u05D3\u05D9\u05E7\u05EA \u05E9\u05D5\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4?"), __jsx("br", null), __jsx("br", null), "\u25CF \u05D1\u05D9\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 \u05DE\u05D5\u05DC \u05D4\u05E9\u05D5\u05DB\u05E8 - \u05D4\u05DB\u05D9 \u05E4\u05E9\u05D5\u05D8 \u05D5\u05D4\u05DB\u05D9 \u05DE\u05EA\u05D1\u05E7\u05E9. \u05D0\u05DC \u05EA\u05D7\u05E9\u05E9\u05D5 \u05DC\u05D1\u05E7\u05E9 \u05DE\u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D4\u05E2\u05EA\u05D9\u05D3\u05D9\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD \u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA, \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E0\u05D4\u05D9\u05D2\u05D4 \u05D0\u05D5 \u05DE\u05E1\u05DE\u05DB\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD \u05D0\u05E9\u05E8 \u05D9\u05D6\u05D4\u05D5 \u05D0\u05D5\u05EA\u05DD; \u05E8\u05E6\u05D5\u05D9 \u05DC\u05D1\u05E7\u05E9 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05DE\u05E1\u05DE\u05DA \u05D0\u05D7\u05D3, \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05DE\u05E0\u05D5\u05E2 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05D6\u05D9\u05D5\u05E3. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05E9\u05D5\u05DB\u05E8 \u05D4\u05E2\u05EA\u05D9\u05D3\u05D9 \u05E9\u05DC\u05DB\u05DD \u05D4\u05D5\u05D0 \u05D0\u05D3\u05DD \u05D0\u05DE\u05D9\u05DF, \u05D0\u05D9\u05DF \u05DC\u05D5 \u05E9\u05D5\u05DD \u05E1\u05D9\u05D1\u05D4 \u05DC\u05E1\u05E8\u05D1 \u05D0\u05D5 \u05DC\u05D7\u05E9\u05D5\u05E9 \u05DE\u05DC\u05EA\u05EA \u05DC\u05DB\u05DD \u05DE\u05E1\u05DE\u05DB\u05D9 \u05D6\u05D9\u05D4\u05D5\u05D9, \u05E4\u05E8\u05D8\u05D9 \u05E7\u05E9\u05E8 \u05E9\u05DC \u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4 \u05E7\u05D5\u05D3\u05DD \u05D5\u05DB\u05D3\u05D5\u05DE\u05D4. \u05D0\u05DD \u05E0\u05E8\u05D0\u05D4 \u05DC\u05DB\u05DD \u05DB\u05D9 \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D7\u05D5\u05E9\u05E9 \u05DC\u05DE\u05E1\u05D5\u05E8 \u05DC\u05DB\u05DD \u05E4\u05E8\u05D8\u05D9 \u05D6\u05D9\u05D4\u05D5\u05D9 \u05DE\u05E2\u05D1\u05E8 \u05DC\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA, \u05D0\u05D5 \u05DE\u05D4\u05E1\u05E1 - \u05D9\u05D9\u05EA\u05DB\u05DF \u05D5\u05D6\u05D5 \u05E0\u05D5\u05E8\u05EA \u05D0\u05D6\u05D4\u05E8\u05D4, \u05D4\u05DE\u05E1\u05DE\u05E0\u05EA \u05DC\u05E0\u05D5 \u05E9\u05DE\u05E9\u05D4\u05D5 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D4\u05EA\u05E0\u05D4\u05DC\u05D5\u05EA.", __jsx("br", null), "\u25CF \u05D1\u05D3\u05D9\u05E7\u05EA \u05D9\u05DB\u05D5\u05DC\u05EA \u05DB\u05DC\u05DB\u05DC\u05D9\u05EA \u05E9\u05DC \u05E9\u05D5\u05DB\u05E8 - \u05D3\u05D5\u05E8\u05E9\u05EA \u05D1\u05D9\u05E8\u05D5\u05E8\u05D9\u05DD \u05DE\u05D9\u05D5\u05D7\u05D3\u05D9\u05DD \u05D1\u05E4\u05E0\u05D9\u05DD \u05E2\u05E6\u05DE\u05DD, \u05D5\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05DE\u05D0\u05D2\u05E8\u05D9\u05DD \u05D7\u05D5\u05E7\u05D9\u05D9\u05DD \u05DC\u05E6\u05D5\u05E8\u05DA \u05DB\u05DA. \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0:", __jsx("br", null), "\xB7 \u05D1\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05DC \u05D1\u05E0\u05E7 \u05D9\u05E9\u05E8\u05D0\u05DC - \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D5\u05D7\u05D3\u05EA \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D4\u05D0\u05DD \u05D7\u05E9\u05D1\u05D5\u05DF \u05D4\u05D1\u05E0\u05E7 \u05E9\u05DC \u05D4\u05E9\u05D5\u05DB\u05E8 \u05DE\u05D5\u05D2\u05D1\u05DC, \u05D3\u05D1\u05E8 \u05D0\u05E9\u05E8 \u05D9\u05E9\u05E4\u05D9\u05E2 \u05E2\u05DC \u05D9\u05DB\u05D5\u05DC\u05EA \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E9\u05DC\u05D5.", __jsx("br", null), "\xB7 \u05D1\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05DC \u05E8\u05E9\u05D5\u05EA \u05D4\u05D0\u05DB\u05D9\u05E4\u05D4 \u05D5\u05D4\u05D2\u05D1\u05D9\u05D9\u05D4 - \u05EA\u05E7\u05E0\u05D4 \u05DE\u05D9\u05D5\u05D7\u05D3\u05EA \u05DE\u05EA\u05D9\u05E8\u05D4 \u05DC\u05DB\u05DC \u05D0\u05D3\u05DD \u05DC\u05D4\u05D2\u05D9\u05E9 \u05E9\u05D0\u05D9\u05DC\u05EA\u05D4 \u05DC\u05E8\u05E9\u05D5\u05EA \u05D4\u05D0\u05DB\u05D9\u05E4\u05D4 \u05D5\u05D4\u05D2\u05D1\u05D9\u05D9\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D1\u05E8\u05E8 \u05D4\u05D0\u05DD \u05D0\u05D3\u05DD \u05DE\u05E1\u05D5\u05D9\u05DD \u05D4\u05D5\u05DB\u05E8\u05D6 \u05DB-\"\u05D7\u05D9\u05D9\u05D1 \u05DE\u05D5\u05D2\u05D1\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D9\u05DD\". \u05D1\u05DE\u05DC\u05D9\u05DD \u05E4\u05E9\u05D5\u05D8\u05D5\u05EA, \u05DE\u05D3\u05D5\u05D1\u05E8 \u05D1\u05D0\u05D3\u05DD \u05D0\u05E9\u05E8 \u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC \u05D7\u05D9\u05D9\u05D1 \u05E1\u05DB\u05D5\u05DE\u05D9 \u05DB\u05E1\u05E3 \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05E1\u05D9\u05D1\u05D4 \u05DB\u05DC\u05E9\u05D4\u05D9, \u05D5\u05D0\u05E9\u05E8 \u05DE\u05D5\u05D8\u05DC\u05D5\u05EA \u05E2\u05DC\u05D9\u05D5 \u05DE\u05D2\u05D1\u05DC\u05D5\u05EA \u05DB\u05D2\u05D5\u05DF \u05D0\u05D9 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05DB\u05E8\u05D8\u05D9\u05E1 \u05D0\u05E9\u05E8\u05D0\u05D9. \u05E9\u05D9\u05DE\u05D5 \u05DC\u05D1 \u05DB\u05D9 \u05DC\u05E6\u05D5\u05E8\u05DA \u05D4\u05D2\u05E9\u05EA \u05D4\u05E9\u05D0\u05D9\u05DC\u05EA\u05D4, \u05EA\u05E6\u05D8\u05E8\u05DB\u05D5 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05D0\u05EA \u05E4\u05E8\u05D8\u05D9\u05DB\u05DD \u05D5\u05DB\u05DF \u05D0\u05EA \u05DE\u05E1\u05E4\u05E8 \u05EA\u05E2\u05D5\u05D3\u05EA \u05D4\u05D6\u05D4\u05D5\u05EA \u05E9\u05DC \u05D4\u05D0\u05D3\u05DD \u05D4\u05E0\u05D1\u05D3\u05E7.", __jsx("br", null), __jsx("br", null), "\u05D1\u05E9\u05DC\u05D1 \u05D6\u05D4, \u05DB\u05D1\u05E8 \u05D1\u05E8\u05D5\u05E8 \u05DB\u05D9 \u05D1\u05D3\u05D9\u05E7\u05EA \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05DC\u05E4\u05E0\u05D9 \u05D7\u05EA\u05D9\u05DE\u05D4 \u05E2\u05DC \u05D7\u05D5\u05D6\u05D4 \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA - \u05D4\u05D9\u05D0 \u05DC\u05D0 \u05D3\u05D1\u05E8 \u05E9\u05E0\u05D9\u05EA\u05DF \u05DC\u05D5\u05D5\u05EA\u05E8 \u05E2\u05DC\u05D9\u05D5. \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D1\u05D3\u05D9\u05E7\u05D4 \u05E2\u05E9\u05D5\u05D9 \u05DC\u05D4\u05EA\u05D2\u05DC\u05D5\u05EA \u05DE\u05D9\u05D3\u05E2 \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9, \u05D0\u05E9\u05E8 \u05D9\u05E9\u05E4\u05D9\u05E2 \u05E2\u05DC \u05D4\u05D7\u05DC\u05D8\u05EA\u05DB\u05DD \u05D4\u05D0\u05DD \u05DC\u05D7\u05EA\u05D5\u05DD \u05D7\u05D5\u05D6\u05D4 \u05E2\u05DD \u05D4\u05D0\u05E0\u05E9\u05D9\u05DD \u05D0\u05D5\u05EA\u05DD \u05D1\u05D3\u05E7\u05EA\u05DD \u05D0\u05D5 \u05DC\u05D0. \u05D6\u05DB\u05E8\u05D5 - \u05D1\u05D3\u05D9\u05E7\u05EA \u05E8\u05E7\u05E2 \u05E2\u05DC \u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05E2\u05E9\u05D5\u05D9\u05D4 \u05DC\u05E7\u05D7\u05EA \u05D6\u05DE\u05DF \u05D5\u05D3\u05D5\u05E8\u05E9\u05EA \u05DE\u05DB\u05DD \u05DE\u05E9\u05D0\u05D1\u05D9\u05DD, \u05D5\u05D1\u05E0\u05D5\u05E1\u05E3 \u2013 \u05D9\u05E9 \u05E6\u05D5\u05E8\u05DA \u05DC\u05D1\u05E8\u05D5\u05E8 \u05D0\u05EA \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05DE\u05D3\u05D5\u05D9\u05E7 \u05D5\u05D4\u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9 \u05D1\u05D9\u05D5\u05EA\u05E8. \u05DC\u05DB\u05DF, \u05D9\u05D9\u05EA\u05DB\u05DF \u05D5\u05EA\u05E8\u05E6\u05D5 \u05DC\u05D4\u05D9\u05E2\u05D6\u05E8 \u05D1\u05E9\u05D9\u05E8\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9 \u05DB\u05D2\u05D5\u05DF \u05D6\u05D4 \u05E9\u05DE\u05E6\u05D9\u05E2\u05D4 Rent-Diffe. \u05DB\u05D7\u05DC\u05E7 \u05DE\u05DE\u05E2\u05D8\u05E4\u05EA \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD \u05E8\u05D7\u05D1\u05D4 \u05D9\u05D5\u05EA\u05E8, \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D3\u05E2\u05EA \u05E9\u05DE\u05D9\u05E9\u05D4\u05D5 \u05D1\u05D5\u05D3\u05E7 \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D0\u05DE\u05D9\u05E0\u05D4 \u05D5\u05D9\u05E2\u05D9\u05DC\u05D4 \u05D0\u05EA \u05DB\u05DC \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9 \u05E2\u05DC \u05D4\u05E9\u05D5\u05DB\u05E8\u05D9\u05DD \u05D4\u05E2\u05EA\u05D9\u05D3\u05D9\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD. \u05DB\u05DA \u05EA\u05D2\u05D9\u05E2\u05D5 \u05DC\u05DE\u05E2\u05DE\u05D3 \u05D7\u05EA\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D5\u05D6\u05D4 \u05D1\u05E8\u05D0\u05E9 \u05E9\u05E7\u05D8, \u05D5\u05DE\u05EA\u05D5\u05DA \u05D9\u05D3\u05D9\u05E2\u05D4 \u05DB\u05D9 \u05DE\u05D9 \u05E9\u05D4\u05D5\u05DC\u05DA \u05DC\u05D2\u05D5\u05E8 \u05D1\u05D1\u05D9\u05EA\u05DB\u05DD - \u05D4\u05D5\u05D0 \u05D0\u05D3\u05DD \u05D0\u05DE\u05D9\u05DF, \u05D0\u05E9\u05E8 \u05D9\u05E9\u05DE\u05D5\u05E8 \u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D5\u05D9\u05E9\u05DC\u05DD \u05DC\u05DB\u05DD \u05D1\u05D6\u05DE\u05DF. \u05DB\u05D1\u05E2\u05DC\u05D9 \u05D4\u05E0\u05DB\u05E1, \u05D0\u05DC \u05EA\u05D5\u05D5\u05EA\u05E8\u05D5 \u05E2\u05DC \u05D1\u05D3\u05D9\u05E7\u05EA \u05E9\u05D5\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4. \u05E9\u05D5\u05D5\u05D4 \"\u05DC\u05D4\u05E4\u05E1\u05D9\u05D3\" \u05EA\u05E7\u05D5\u05E4\u05EA \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05E7\u05E6\u05E8\u05D4, \u05D0\u05DA \u05DC\u05D4\u05E8\u05D5\u05D5\u05D9\u05D7 \u05D3\u05D9\u05D9\u05E8\u05D9\u05DD \u05D8\u05D5\u05D1\u05D9\u05DD \u05D5\u05D0\u05DE\u05D9\u05E0\u05D9\u05DD."));
        break;

      default:
        pageHeader = "עמוד לא קיים";
        output = __jsx("div", null, __jsx("h2", null, "\u05D4\u05E2\u05DE\u05D5\u05D3 \u05E9\u05D1\u05D9\u05E7\u05E9\u05EA \u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0.", __jsx("br", null), "\u05D9\u05EA\u05DB\u05DF \u05E9\u05E9\u05DE\u05D5 \u05D4\u05E9\u05EA\u05E0\u05D4, \u05DE\u05D9\u05E7\u05D5\u05DE\u05D5 \u05D4\u05D5\u05D6\u05D6 \u05D0\u05D5 \u05E9\u05D0\u05D9\u05E0\u05D5 \u05E7\u05D9\u05D9\u05DD."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/"
        }, __jsx("button", {
          className: "btn btn-blue btn-large"
        }, "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E8\u05D0\u05E9\u05D9")));
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_components_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      PageHeaderTitle: pageHeader
    }), __jsx("div", {
      className: "section section-page-content"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "content"
    }, __jsx("div", {
      className: "column"
    }, output)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Service));

/***/ }),

/***/ "./pages/services/OurServices.scss":
/*!*****************************************!*\
  !*** ./pages/services/OurServices.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/services/index.js":
/*!*********************************!*\
  !*** ./pages/services/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../head */ "./pages/head.js");
/* harmony import */ var _OurServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OurServices */ "./pages/services/OurServices.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/main.scss */ "./pages/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import initialize from "../../utils/initialize";

const ServicesPage = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_head__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "DiffeRent"
  }, __jsx("div", {
    lang: "he",
    dir: "rtl",
    className: "app services"
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_OurServices__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (ServicesPage);

/***/ }),

/***/ "./pages/styles/main.scss":
/*!********************************!*\
  !*** ./pages/styles/main.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/icons/chevron-down-icon.svg":
/*!********************************************!*\
  !*** ./public/icons/chevron-down-icon.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+NUQ2MzE3NUMtNDNFMi00QzI3LUFCNzAtQjRBRTlGMzAyMDI5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSJJY29ucy0vLWNoZXZyb25fZG93bl9vdXRsaW5lIiBzdHJva2U9IiMwMDdBRkYiIHN0cm9rZS13aWR0aD0iMC44Ij4KICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJTdHJva2UtNTAiIHBvaW50cz0iMiA2IDkgMTMgMTYgNiI+PC9wb2x5bGluZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./public/icons/different_logo_white.png":
/*!***********************************************!*\
  !*** ./public/icons/different_logo_white.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/different_logo_white-3b1b14dc308bb987c8621ff49e12138b.png";

/***/ }),

/***/ "./public/icons/facebook-icon.svg":
/*!****************************************!*\
  !*** ./public/icons/facebook-icon.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+NjM4MUZBN0ItMTUyRi00NDI2LUE5ODItRTBGNThGQzA0RTM2PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSJJY29ucy0vLWZhY2Vib29rX2ZpbGwtZ3JleS0yNCIgZmlsbD0iIzU2NTM1MCIgc3Ryb2tlPSIjNTY1MzUwIiBzdHJva2Utd2lkdGg9IjAuOCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMC40NzgyNjA5LDIyIEwxMC40NzgyNjA5LDEyLjQzNDc4MjYgTDcsMTIuNDM0NzgyNiBMNyw5LjgyNjA4Njk2IEwxMC40NzgyNjA5LDkuODI2MDg2OTYgTDEwLjQ3ODI2MDksNi4zNDc4MjYwOSBDMTAuNDc4MjYwOSwzLjk0Njk1NjUyIDEyLjQyNTIxNzQsMiAxNC44MjYwODcsMiBMMTcuNDM0NzgyNiwyIEwxNy40MzQ3ODI2LDQuNjA4Njk1NjUgTDE0LjgyNjA4Nyw0LjYwODY5NTY1IEMxMy44NjUyMTc0LDQuNjA4Njk1NjUgMTMuMDg2OTU2NSw1LjM4Njk1NjUyIDEzLjA4Njk1NjUsNi4zNDc4MjYwOSBMMTMuMDg2OTU2NSw5LjgyNjA4Njk2IEwxNy40MzQ3ODI2LDkuODI2MDg2OTYgTDE2LjU2NTIxNzQsMTIuNDM0NzgyNiBMMTMuMDg2OTU2NSwxMi40MzQ3ODI2IEwxMy4wODY5NTY1LDIyIEwxMC40NzgyNjA5LDIyIEwxMC40NzgyNjA5LDIyIFoiIGlkPSJTdHJva2UtOTIiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./public/icons/linkedin-icon.svg":
/*!****************************************!*\
  !*** ./public/icons/linkedin-icon.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+OTczMDEyRDYtOEE1RS00MDVCLTlFNjYtQkE4MjM5N0FBM0NFPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSJJY29ucy0vLWxpbmtlZGluX2ZpbGwtZ3JleS0yNCIgZmlsbD0iIzU2NTM1MCIgc3Ryb2tlPSIjNTY1MzUwIiBzdHJva2Utd2lkdGg9IjAuOCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02LjM0NzkxMzA0LDQuMTczOTEzMDQgQzYuMzQ3OTEzMDQsNS4zNzQ3ODI2MSA1LjM3NDg2OTU3LDYuMzQ3ODI2MDkgNC4xNzQsNi4zNDc4MjYwOSBDMi45NzMxMzA0Myw2LjM0NzgyNjA5IDIuMDAwMDg2OTYsNS4zNzQ3ODI2MSAyLjAwMDA4Njk2LDQuMTczOTEzMDQgQzIuMDAwMDg2OTYsMi45NzMwNDM0OCAyLjk3MzEzMDQzLDIgNC4xNzQsMiBDNS4zNzQ4Njk1NywyIDYuMzQ3OTEzMDQsMi45NzMwNDM0OCA2LjM0NzkxMzA0LDQuMTczOTEzMDQgWiBNMiwyMiBMMiw4Ljk1NjUyMTc0IEw2LjM0NzgyNjA5LDguOTU2NTIxNzQgTDYuMzQ3ODI2MDksMjIgTDIsMjIgWiBNMTMuMzA0NDM0OCw5LjgyNjA4Njk2IEMxNC45NDE4MjYxLDcuNzc0NzgyNjEgMjEuOTAxODI2MSw2LjE3OTEzMDQzIDIyLjAwMDA4NywxMy4zMDQzNDc4IEwyMi4wMDAwODcsMTUuOTEzMDQzNSBMMjIuMDAwMDg3LDIyIEwxNy42NTIyNjA5LDIyIEwxNy42NTIyNjA5LDE2LjA5NDc4MjYgTDE3LjY1MjI2MDksMTUuOTEzMDQzNSBMMTcuNjUyMjYwOSwxNC4xNzM5MTMgQzE3LjY1MzEzMDQsMTEuNDQ5NTY1MiAxNC45NTQsMTAuODMyMTczOSAxMy4zMDQ0MzQ4LDEyLjQzNDc4MjYgTDEzLjMwNDQzNDgsMjIgTDguOTU2NjA4NywyMiBMOC45NTY2MDg3LDguOTU2NTIxNzQgTDEzLjMwNDQzNDgsOC45NTY1MjE3NCBMMTMuMzA0NDM0OCw5LjgyNjA4Njk2IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./utils/cookie.js":
/*!*************************!*\
  !*** ./utils/cookie.js ***!
  \*************************/
/*! exports provided: setCookie, removeCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

const setCookie = (key, value) => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(key, value, {
    expires: 1,
    path: "/"
  });
};
const removeCookie = key => {
  if (false) {}
};
const getCookie = (key, req) => {
  return  false ? undefined : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }

  const rawCookie = req.headers.cookie;

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie;
};

/***/ }),

/***/ "./utils/requestClient/requestClient.axios.js":
/*!****************************************************!*\
  !*** ./utils/requestClient/requestClient.axios.js ***!
  \****************************************************/
/*! exports provided: config, cardCheckerConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardCheckerConfig", function() { return cardCheckerConfig; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const config = {
  baseURL: "https://api.ballabaapis.com/",
  headers: {
    "Content-Type": "application/json",
    device_id: 123123123
  }
};
const cardCheckerConfig = {
  baseURL: "https://www.myofficeguy.com/",
  headers: {
    "Content-Type": "application/json"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(config));

/***/ }),

/***/ "./utils/requestClient/requests.js":
/*!*****************************************!*\
  !*** ./utils/requestClient/requests.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Api; });
/* harmony import */ var _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestClient.axios */ "./utils/requestClient/requestClient.axios.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes.constants */ "./utils/requestClient/routes.constants.js");




const REACT_APP_BASE_HOST = "https://api.ballabaapis.com/";
const REACT_APP_BASE_STAGE = "Dev"; // Api is axios wrapper class

class Api {
  // login is first step for authorization
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,
  static login(data) {
    return _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(REACT_APP_BASE_STAGE + "/" + _routes_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTE_LOGIN"], data);
  } // auth is second step for authorization
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,
  // https://api.ballaba-it.com/{STAGE}/authenticate


  static auth(data) {
    return _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(REACT_APP_BASE_STAGE + _routes_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTE_AUTH"], data);
  }

  static contactEmail(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(REACT_APP_BASE_HOST + REACT_APP_BASE_STAGE + _routes_constants__WEBPACK_IMPORTED_MODULE_3__["CONTACT"], data);
  }

  static customizedContract(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(REACT_APP_BASE_HOST + REACT_APP_BASE_STAGE + _routes_constants__WEBPACK_IMPORTED_MODULE_3__["CUSTOMIZED_CONTRACT"], data);
  }

  static authByToken(token) {
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers.global_token = token;
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(REACT_APP_BASE_STAGE + _routes_constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_TOKEN"], {}, _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"]);
  } // step1 is firts step for stepper
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,


  static step1(data, session_token) {
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers.session_token = session_token;
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omit"])(_requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers, ["global_token"]);
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(REACT_APP_BASE_STAGE + _routes_constants__WEBPACK_IMPORTED_MODULE_3__["STEP1"], data, _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"]);
  } // step2 is second step for stepper
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,


  static step2(data, session_token) {
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers.session_token = session_token;
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omit"])(_requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers, ["global_token"]);
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(REACT_APP_BASE_STAGE + _routes_constants__WEBPACK_IMPORTED_MODULE_3__["STEP2"], data, _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"]);
  } // step3 is third step for stepper
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,


  static step3(data, session_token) {
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers.session_token = session_token;
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omit"])(_requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers, ["global_token"]);
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(REACT_APP_BASE_STAGE + _routes_constants__WEBPACK_IMPORTED_MODULE_3__["STEP3"], data, _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"]);
  }

  static getContracts(token) {
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers.session_token = token;
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omit"])(_requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers, ["global_token"]);
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(REACT_APP_BASE_HOST + REACT_APP_BASE_STAGE + _routes_constants__WEBPACK_IMPORTED_MODULE_3__["CONTRACTS"], _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"]);
  } // step4 is fourth step for stepper
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,2% משכר הדירה החודשי
  // https://api.ballaba-it.com/{STAGE}/properties


  static step4(data, session_token) {
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers.session_token = session_token;
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omit"])(_requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers, ["global_token"]);
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(REACT_APP_BASE_STAGE + _routes_constants__WEBPACK_IMPORTED_MODULE_3__["STEP4"], data, _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"]);
  } // cardChecker


  static cardChecker(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_routes_constants__WEBPACK_IMPORTED_MODULE_3__["CARD_CHECKER"]}`, data, _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["cardCheckerConfig"]);
  } // guaranteeAgreement


  static guaranteeAgreement(data, session_token) {
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers.session_token = session_token;
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omit"])(_requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers, ["global_token"]);
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(REACT_APP_BASE_STAGE + _routes_constants__WEBPACK_IMPORTED_MODULE_3__["GUARANTEE_AGREEMENT"], data, _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"]);
  }

}

/***/ }),

/***/ "./utils/requestClient/routes.constants.js":
/*!*************************************************!*\
  !*** ./utils/requestClient/routes.constants.js ***!
  \*************************************************/
/*! exports provided: ROUTE_LOGIN, ROUTE_AUTH, AUTH_TOKEN, STEP1, STEP2, STEP3, STEP4, CARD_CHECKER, GUARANTEE_AGREEMENT, CONTACT, CUSTOMIZED_CONTRACT, CONTRACTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_LOGIN", function() { return ROUTE_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_AUTH", function() { return ROUTE_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_TOKEN", function() { return AUTH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP1", function() { return STEP1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP2", function() { return STEP2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP3", function() { return STEP3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP4", function() { return STEP4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_CHECKER", function() { return CARD_CHECKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUARANTEE_AGREEMENT", function() { return GUARANTEE_AGREEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACT", function() { return CONTACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMIZED_CONTRACT", function() { return CUSTOMIZED_CONTRACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTRACTS", function() { return CONTRACTS; });
// base route structure
// 1. REACT_APP_BASE_HOST is integrated by initialization
// 2. REACT_APP_BASE_STAGE can be Dev or v1
// 3. ROUTE NAME
// Login with phone (getting SMS with code)
const ROUTE_LOGIN = "/login"; // Login with code

const ROUTE_AUTH = "/authenticate"; // Login with token

const AUTH_TOKEN = "/loginbytoken"; // stepper step 1

const STEP1 = "/user/me"; // stepper step 2

const STEP2 = "/properties"; // stepper step 3

const STEP3 = "/contracts/exist"; // stepper step 4

const STEP4 = "/properties"; // card checker

const CARD_CHECKER = "api/creditguy/vault/tokenizesingleusejson"; // card checker

const GUARANTEE_AGREEMENT = "/products/guarantee-agreement/exist";
const CONTACT = "/contact";
const CUSTOMIZED_CONTRACT = "/contact/customized-contract ";
const CONTRACTS = "/user/me/properties/landlord";

/***/ }),

/***/ 5:
/*!***************************************!*\
  !*** multi ./pages/services/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nick/software/react/test/different-web-ssr/pages/services/index.js */"./pages/services/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-resize-detector":
/*!****************************************!*\
  !*** external "react-resize-detector" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-resize-detector");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=services.js.map