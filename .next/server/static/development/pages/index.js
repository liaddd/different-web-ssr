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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-resize-detector */ "react-resize-detector");
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_resize_detector__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/cookie */ "./utils/cookie.js");
/* harmony import */ var _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/requestClient/requests */ "./utils/requestClient/requests.js");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Header.scss */ "./components/Header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Account_Account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../Account/Account.component */ "./components/Account/Account.component.js");
/* harmony import */ var _actions_common_common_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../actions/common/common.actions */ "./actions/common/common.actions.js");
/* harmony import */ var _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../actions/users/users.actions */ "./actions/users/users.actions.js");
/* harmony import */ var _actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../actions/forms/forms.actions */ "./actions/forms/forms.actions.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;













 // MAIN_HEADER_CLASS is main header class

const MAIN_HEADER_CLASS = "main-header"; // ADDITIONAL_HEADER_CLASS detected scroll page for show static header

const ADDITIONAL_HEADER_CLASS = "scroll"; // DETECT_BROWSER_WITH detect browser with distance to detect show or hide toggleMenu inside header

const DETECT_BROWSER_WITH = 1024; // Header

class Header extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "state", {
      width: 0,
      height: 0,
      toggleButton: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_unbindScroll", () => {
      window.removeEventListener("scroll", this._handleScroll);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_bindScroll", () => {
      // Use passive event listener if available
      let supportsPassive = false;

      try {
        const opts = _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1___default()({}, "passive", {
          get: () => {
            supportsPassive = true;
          }
        });

        window.addEventListener("test", null, opts);
      } catch (e) {
        console.log("ERROR:", e);

        if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(e, "response.data.errorCode") === "UNAUTHORIZED") {
          this.props.onLogout();
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/");
        }
      }

      window.addEventListener("scroll", this._handleScroll, supportsPassive ? {
        passive: true
      } : false);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_handleScroll", () => {
      const top = document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop; // Test < 1 since Safari's rebound effect scrolls past the top

      if (top < 1) {
        const className = `${MAIN_HEADER_CLASS}`;
        this._header.className = className;
      } else {
        const className = `${MAIN_HEADER_CLASS}  ${ADDITIONAL_HEADER_CLASS}`;
        this._header.className = className;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onResize", (width, height) => {
      this.setState(prevProps => {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevProps, {
          width,
          height
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onClickToggleButton", e => {
      this.setState(prevState => {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
          toggleButton: !prevState.toggleButton
        });
      });
    });

    this._header = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
  }

  componentWillUnmount() {
    this._unbindScroll();
  }

  componentDidMount() {
    this._bindScroll();

    this._handleScroll();

    const global_token = Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_9__["getCookie"])("global_token");

    if (!this.props.userAuth && global_token) {
      _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_10__["default"].authByToken(global_token).then(data => {
        this.props.onSetUserData(data.data);
      }).catch(err => {
        console.error("Error get User", err);
      });
    } // window.scrollTo(0, 0); //? scroll to top each time component is mounted.

  } // _unbindScroll is remove detection header block position


  render() {
    const activeLink = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(this.props, "router.pathname");
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, __jsx(react_resize_detector__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/"
    }, __jsx("a", {
      className: "logo"
    }))), this.state.toggleButton || this.state.width > DETECT_BROWSER_WITH ? __jsx("nav", {
      className: "main-menu container flex"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/about-us"
    }, __jsx("a", {
      className: activeLink === "/about-us" ? "menu-link active" : "menu-link"
    }, "\u05D0\u05D5\u05D3\u05D5\u05EA\u05D9\u05E0\u05D5")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/questions-and-answers"
    }, __jsx("a", {
      className: activeLink === "/questions-and-answers" ? "menu-link active" : "menu-link"
    }, " ", "\u05E9\u05D0\u05DC\u05D5\u05EA \u05D5\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/cabinet"
    }, __jsx("a", {
      className: activeLink === "/cabinet" ? "menu-link active" : "menu-link"
    }, "\u05D4\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D0\u05D9\u05E9\u05D9 \u05E9\u05DC\u05D9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/contact"
    }, __jsx("a", {
      className: activeLink === "/contact" ? "menu-link active" : "menu-link"
    }, "\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8")), __jsx("a", {
      href: "https://blog.diffe-rent.co.il",
      className: "menu-link"
    }, "\u05D4\u05D1\u05DC\u05D5\u05D2 \u05E9\u05DC\u05E0\u05D5")) : null, __jsx("div", {
      className: "block-link"
    }, this.props.userAuth ? __jsx(_Account_Account_component__WEBPACK_IMPORTED_MODULE_12__["default"], null) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
      dispatch(_actions_users_users_actions__WEBPACK_IMPORTED_MODULE_14__["default"].setUserData(action));
    },
    onSetStepper: action => {
      dispatch(Object(_actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_15__["stepper"])(action));
    },
    onLogout: action => {
      dispatch(Object(_actions_common_common_actions__WEBPACK_IMPORTED_MODULE_13__["logout"])(action));
    }
  };
};

const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Header));
/* harmony default export */ __webpack_exports__["default"] = (withConnect);

/***/ }),

/***/ "./components/Header/Header.scss":
/*!***************************************!*\
  !*** ./components/Header/Header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/LinkBlock/LinkBlock.js":
/*!*******************************************!*\
  !*** ./components/LinkBlock/LinkBlock.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LinkBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkBlock.scss */ "./components/LinkBlock/LinkBlock.scss");
/* harmony import */ var _LinkBlock_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LinkBlock_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_icons_md_lawfirm_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../public/icons/md-lawfirm.png */ "./public/icons/md-lawfirm.png");
/* harmony import */ var _public_icons_md_lawfirm_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_icons_md_lawfirm_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_icons_dun_bradstreet_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../public/icons/dun-bradstreet.svg */ "./public/icons/dun-bradstreet.svg");
/* harmony import */ var _public_icons_dun_bradstreet_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_icons_dun_bradstreet_svg__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class LinkBlock extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
      className: "section section-header-links"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "header-link-block"
    }, __jsx("div", {
      className: "header-link"
    }, __jsx("img", {
      src: _public_icons_md_lawfirm_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: ""
    })), __jsx("div", {
      className: "header-link"
    }, __jsx("img", {
      src: _public_icons_dun_bradstreet_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: ""
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LinkBlock);

/***/ }),

/***/ "./components/LinkBlock/LinkBlock.scss":
/*!*********************************************!*\
  !*** ./components/LinkBlock/LinkBlock.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/MainPage/index.js":
/*!**************************************!*\
  !*** ./components/MainPage/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageHeaderHome_PageHeaderHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../PageHeaderHome/PageHeaderHome */ "./components/PageHeaderHome/PageHeaderHome.js");
/* harmony import */ var _LinkBlock_LinkBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../LinkBlock/LinkBlock */ "./components/LinkBlock/LinkBlock.js");
/* harmony import */ var _WeDoBlock_WeDoBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../WeDoBlock/WeDoBlock */ "./components/WeDoBlock/WeDoBlock.js");
/* harmony import */ var _WhyBlock_WhyBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../WhyBlock/WhyBlock */ "./components/WhyBlock/WhyBlock.js");
/* harmony import */ var _PriceBlock_PriceBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../PriceBlock/PriceBlock */ "./components/PriceBlock/PriceBlock.js");
/* harmony import */ var _Modal_ModalHome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../Modal/ModalHome */ "./components/Modal/ModalHome.js");
/* harmony import */ var _Modal_ModalSubscribe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../Modal/ModalSubscribe */ "./components/Modal/ModalSubscribe.js");
/* harmony import */ var _Modal_StarModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../Modal/StarModal */ "./components/Modal/StarModal.js");
/* harmony import */ var _Modal_ModalVideo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../Modal/ModalVideo */ "./components/Modal/ModalVideo.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











class MainPage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      showModalHome: false,
      showModalSubscribe: false,
      showStarModal: false,
      showVideoModal: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onShowPopup", showModalHome => {
      this.setState({
        showModalHome
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSowSubscibe", showModalSubscribe => {
      this.setState({
        showModalSubscribe
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onShowStar", showStarModal => {
      this.setState({
        showStarModal
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onShowVideo", showVideoModal => {
      this.setState({
        showVideoModal
      });
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_PageHeaderHome_PageHeaderHome__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onShowPopup: this.onShowPopup,
      onSowSubscibe: this.onSowSubscibe,
      onShowVideo: this.onShowVideo
    }), __jsx(_Modal_ModalVideo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      show: this.state.showVideoModal,
      onShowVideo: this.onShowVideo
    }), __jsx(_LinkBlock_LinkBlock__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_WeDoBlock_WeDoBlock__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_PriceBlock_PriceBlock__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_WhyBlock_WhyBlock__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_Modal_ModalHome__WEBPACK_IMPORTED_MODULE_7__["default"], {
      show: this.state.showModalHome,
      onShowPopup: this.onShowPopup
    }), __jsx(_Modal_ModalSubscribe__WEBPACK_IMPORTED_MODULE_8__["default"], {
      show: this.state.showModalSubscribe,
      onShowPopup: this.onSowSubscibe
    }), __jsx(_Modal_StarModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      show: this.state.showStarModal,
      onShowPopup: this.onShowStar
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainPage);

/***/ }),

/***/ "./components/Modal/Modal.scss":
/*!*************************************!*\
  !*** ./components/Modal/Modal.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Modal/ModalHome.js":
/*!***************************************!*\
  !*** ./components/Modal/ModalHome.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PriceForm_PriceForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PriceForm/PriceForm */ "./components/PriceForm/PriceForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal.scss */ "./components/Modal/Modal.scss");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Modal_scss__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class ModalHome extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("modal-block modal-effect-slide", {
        "modal-show": this.props.show
      })
    }, " ", __jsx("div", {
      className: "modal-overlay"
    }), __jsx("div", {
      className: "modal-content"
    }, __jsx("div", {
      className: "modal-header"
    }, __jsx("span", {
      className: "modal-close modal-close-icon",
      onClick: () => {
        this.props.onShowPopup(false);
      }
    })), __jsx("div", {
      className: "modal-inner-content"
    }, __jsx(_PriceForm_PriceForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      PriceFormTitle: `שכר הדירה שאני מבקש:`
    })))));
  }

}

const mapStateToProps = state => ({
  auth: state.user.auth
});

function mapDispatchToProps(dispatch) {
  return {};
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(ModalHome));

/***/ }),

/***/ "./components/Modal/ModalLoader.js":
/*!*****************************************!*\
  !*** ./components/Modal/ModalLoader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.scss */ "./components/Modal/Modal.scss");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Modal_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class ModalLoader extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("modal-block modal-effect-slide", {
        "modal-show": this.props.show
      })
    }, " ", __jsx("div", {
      className: "modal-overlay"
    }), __jsx("div", {
      className: "modal-content-loader"
    }, __jsx("div", {
      className: "modal-header"
    }, __jsx("div", {
      className: "modal-user modal-user-icon-loader"
    }), __jsx("div", {
      className: "modal-user-text"
    }, "\u05D1\u05D1\u05D3\u05D9\u05E7\u05D4\u2026")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ModalLoader);

/***/ }),

/***/ "./components/Modal/ModalSubscribe.js":
/*!********************************************!*\
  !*** ./components/Modal/ModalSubscribe.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal.scss */ "./components/Modal/Modal.scss");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Modal_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/requestClient/requests */ "./utils/requestClient/requests.js");
/* harmony import */ var _Modal_SuccessMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Modal/SuccessMessage */ "./components/Modal/SuccessMessage.js");
/* harmony import */ var _Modal_ModalLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Modal/ModalLoader */ "./components/Modal/ModalLoader.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class ModalSubscribe extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      contactEmail: "",
      checkBox: false,
      errorMessage: "",
      showSuccess: false,
      showLoading: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmit", e => {
      e.preventDefault();
      const {
        contactEmail,
        checkBox
      } = this.state;

      if (!checkBox) {
        this.setState({
          errorMessage: "אנא סמן את תיבת הסימון אם ברצונך לקבל עדכון כשהשירות מוכן"
        });
        return;
      }

      if (contactEmail) {
        this.setState({
          showLoading: true
        });
        _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_5__["default"].customizedContract({
          email: contactEmail
        }).then(data => {
          this.props.onShowPopup(false);
          this.setState({
            showLoading: false
          });
          this.setState({
            showSuccess: true
          });
        }).catch(err => {
          console.log(err);
          this.setState({
            showLoading: false
          });
          this.setState({
            errorMessage:
            /* err.response.data.errorMessage */
            `כתובת מייל אינה תקינה`
          });
        });
      } else {
        this.setState({
          errorMessage: "אנא הכנס כתובת מייל"
        });
      }
    });
  }

  componentDidMount() {//amplitude.getInstance().logEvent('חוזה שכירות מותאם אישית');
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_Modal_SuccessMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      show: this.state.showSuccess
    }), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("modal-block modal-effect-slide", {
        "modal-show": this.props.show
      })
    }, " ", __jsx("div", {
      className: "modal-overlay"
    }), __jsx("div", {
      className: "modal-content"
    }, __jsx("div", {
      className: "modal-header"
    }, __jsx("span", {
      className: "modal-close modal-close-icon",
      onClick: () => {
        this.props.onShowPopup(false);
      }
    })), __jsx("div", {
      className: "modal-inner-content"
    }, __jsx("form", {
      className: "sub-wrapper",
      id: "subscribe-form",
      onSubmit: this.onSubmit,
      noValidate: true
    }, __jsx("div", {
      className: "sub-block-title size40"
    }, "\u05D1\u05E7\u05E8\u05D5\u05D1!!!"), __jsx("p", {
      className: "sub-block-title size22"
    }, "\u05D4\u05D3\u05E3 \u05E2\u05D5\u05D1\u05E8 \u05E9\u05D9\u05E4\u05D5\u05E8\u05D9\u05DD \u05EA\u05E8\u05E6\u05D4 \u05E9\u05E0\u05D5\u05D3\u05D9\u05E2 \u05DC\u05DA \u05DB\u05D0\u05E9\u05E8 \u05E0\u05E1\u05D9\u05D9\u05DD?", " "), __jsx("div", {
      className: "sub-flex"
    }, __jsx("div", null, __jsx("input", {
      className: "personal-info-input-checkbox input-checkbox ",
      id: "personal-info-checkbox",
      checked: this.state.checkBox,
      onChange: e => {
        this.setState({
          checkBox: !this.state.checkBox
        });
      },
      type: "checkbox"
    }), " ", this.state.checkBox ? "כן" : "לא"), __jsx("p", {
      className: "input-block input-width"
    }, __jsx("label", {
      htmlFor: "input-contact-email",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "input-label": true,
        "input-not-empty": this.state.contactEmail.length > 0
      })
    }, __jsx("input", {
      className: "input-email input-text-grey",
      type: "email",
      id: "input-contact-email",
      placeholder: "\xA0",
      required: true,
      onChange: e => {
        this.setState({
          contactEmail: e.target.value
        });
      }
    }), __jsx("span", {
      className: "input-label-span"
    }, "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC"), __jsx("span", {
      className: "input-border"
    }), __jsx("span", {
      className: "subscribe-input-error span-error"
    }, "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC")))), __jsx("p", {
      style: {
        color: "#e7736d"
      }
    }, this.state.errorMessage), __jsx("div", {
      className: "sub-flex"
    }, __jsx("input", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("input-submit  btn-small", {
        "btn-white": !this.state.checkBox,
        "btn-blue": this.state.checkBox
      }),
      id: "price-submit",
      type: "submit",
      value: "\u05D0\u05D9\u05E9\u05D5\u05E8"
    })))))), __jsx(_Modal_ModalLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      show: this.state.showLoading
    }));
  }

}

const mapStateToProps = state => ({
  auth: state.user.auth
});

function mapDispatchToProps(dispatch) {
  return {};
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(ModalSubscribe));

/***/ }),

/***/ "./components/Modal/ModalVideo.js":
/*!****************************************!*\
  !*** ./components/Modal/ModalVideo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.scss */ "./components/Modal/Modal.scss");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Modal_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_player_lib_players_YouTube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player/lib/players/YouTube */ "react-player/lib/players/YouTube");
/* harmony import */ var react_player_lib_players_YouTube__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player_lib_players_YouTube__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class ModalVideo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("modal-block modal-effect-slide", {
        "modal-show": this.props.show
      })
    }, __jsx("div", {
      className: "modal-overlay"
    }), __jsx("div", {
      className: "modal-video-content"
    }, __jsx("div", {
      className: "modal-header"
    }, __jsx("div", {
      className: "modal-close modal-close-icon",
      onClick: () => {
        this.props.onShowVideo(false);
      }
    })), __jsx("div", {
      className: "modal-video-inner-content"
    }, __jsx(react_player_lib_players_YouTube__WEBPACK_IMPORTED_MODULE_3___default.a, {
      url: "https://www.youtube.com/watch?v=zQboCTOgW_4&t=8s",
      controls: true,
      width: "100%",
      height: "450px",
      playing: this.props.show // Other ReactPlayer props will work here

    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ModalVideo);

/***/ }),

/***/ "./components/Modal/StarModal.js":
/*!***************************************!*\
  !*** ./components/Modal/StarModal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal.scss */ "./components/Modal/Modal.scss");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Modal_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class StartModal extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      comment: "",
      star: 0,
      errorMessage: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmit", e => {
      e.preventDefault();

      if (this.state.comment) {
        // TODO create action
        this.props.onShowPopup(false);
      } else {
        this.setState({
          errorMessage: "מייל לא נכון"
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetStar", star => {
      this.setState({
        star: star + 1
      });
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("modal-block modal-effect-slide", {
        "modal-show": this.props.show
      })
    }, " ", __jsx("div", {
      className: "modal-overlay"
    }), __jsx("div", {
      className: "modal-content"
    }, __jsx("div", {
      className: "modal-header"
    }, __jsx("span", {
      className: "modal-close modal-close-icon",
      onClick: () => {
        this.props.onShowPopup(false);
      }
    })), __jsx("div", {
      className: "modal-inner-content"
    }, __jsx("div", {
      className: "modal-user modal-user-icon-star"
    }), __jsx("hr", {
      className: "hr-style"
    }), __jsx("form", {
      className: "sub-wrapper",
      id: "subscribe-form",
      onSubmit: this.onSubmit,
      noValidate: true
    }, __jsx("div", {
      className: "sub-block-title size22"
    }, "\u05D3\u05E2\u05EA\u05DA \u05D7\u05E9\u05D5\u05D1\u05D4 \u05DC\u05E0\u05D5"), __jsx("p", {
      className: "sub-block-title size20"
    }, "\u05E0\u05D5\u05D3\u05D4 \u05DC\u05DA \u05D0\u05DD \u05EA\u05D5\u05DB\u05DC \u05DC\u05D4\u05D1\u05D9\u05E2 \u05D3\u05E2\u05EA\u05DA \u05E2\u05DC \u05D0\u05D9\u05DB\u05D5\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA"), __jsx("div", {
      className: "star-wrapper"
    }, [1, 2, 3, 4, 5].reverse().map(star => this.state.star > star ? __jsx("div", {
      key: star,
      onClick: () => this.onSetStar(star),
      className: "activeStar"
    }) : __jsx("div", {
      key: star,
      onClick: () => this.onSetStar(star),
      className: "starItem"
    }))), __jsx("div", {
      className: "sub-flex"
    }, __jsx("p", {
      className: "input-block input-width"
    }, __jsx("label", {
      htmlFor: "input-contact-email",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "input-label": true,
        "input-not-empty": this.state.comment.length > 0
      })
    }, __jsx("input", {
      className: "input-email input-text-grey",
      type: "text",
      id: "input-contact-email",
      placeholder: "\xA0",
      required: true,
      onChange: e => {
        this.setState({
          comment: e.target.value
        });
      }
    }), __jsx("span", {
      className: "input-label-span"
    }, "\u05E4\u05E8\u05D8"), __jsx("span", {
      className: "input-border"
    })))), __jsx("p", {
      style: {
        color: "#e7736d"
      }
    }, this.state.errorMessage), __jsx("div", {
      className: "sub-flex"
    }, __jsx("input", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("input-submit  btn-small btn-blue"),
      id: "price-submit",
      type: "submit",
      value: "\u05E9\u05DC\u05D7"
    })))))));
  }

}

const mapStateToProps = state => ({
  auth: state.user.auth
});

function mapDispatchToProps(dispatch) {
  return {};
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(StartModal));

/***/ }),

/***/ "./components/Modal/SuccessMessage.js":
/*!********************************************!*\
  !*** ./components/Modal/SuccessMessage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.scss */ "./components/Modal/Modal.scss");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Modal_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class SuccessMessage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("modal-block modal-effect-slide", {
        "modal-show": this.props.show
      })
    }, " ", __jsx("div", {
      className: "modal-overlay"
    }), __jsx("div", {
      className: "modal-content modal-with-bg"
    }, __jsx("div", {
      className: "modal-header"
    }, __jsx("div", {
      className: "modal-user modal-user-icon"
    })), __jsx("div", {
      className: "modal-inner-content"
    }, __jsx("h2", {
      className: "modal-title"
    }, "\u05EA\u05D5\u05D3\u05D4 \u05E9\u05E4\u05E0\u05D9\u05EA \u05D0\u05DC\u05D9\u05E0\u05D5"), __jsx("div", {
      className: "modal-text"
    }, "\u05D7\u05D5\u05D6\u05E8\u05D9\u05DD \u05D0\u05DC\u05D9\u05D9\u05DA \u05D1\u05D4\u05E7\u05D3\u05DD"), __jsx("div", {
      className: "btn-block"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/"
    }, __jsx("button", {
      className: "btn btn-blue btn-large"
    }, "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E8\u05D0\u05E9\u05D9")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SuccessMessage);

/***/ }),

/***/ "./components/PageHeaderHome/PageHeaderHome.js":
/*!*****************************************************!*\
  !*** ./components/PageHeaderHome/PageHeaderHome.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageHeaderHome_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageHeaderHome.scss */ "./components/PageHeaderHome/PageHeaderHome.scss");
/* harmony import */ var _PageHeaderHome_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PageHeaderHome_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class PageHeaderHome extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
      className: "section page-header-home-section page-header-home-img"
    }, __jsx("div", {
      className: "container margin-top-container"
    }, __jsx("div", {
      className: "page-header-home-block"
    }, __jsx("h1", {
      className: "page-header-home-title"
    }, "\u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4 \u05DC\u05D4\u05E9\u05DB\u05E8\u05D4?", __jsx("br", null), "\u05DE\u05D4\u05D9\u05D5\u05DD \u05EA\u05D5\u05DB\u05DC \u05DC\u05D9\u05E9\u05D5\u05DF \u05D1\u05E9\u05E7\u05D8"), __jsx("div", {
      className: "page-header-home-subtitle-block"
    }, __jsx("div", {
      className: "page-header-home-subtitle"
    }, "\u05D1\u05D3\u05D9\u05E7\u05EA \u05E8\u05E7\u05E2 \u05DC\u05D3\u05D9\u05D9\u05E8"), __jsx("div", {
      className: "page-header-home-subtitle"
    }, "\u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05DE\u05D5\u05D1\u05D8\u05D7"), __jsx("div", {
      className: "page-header-home-subtitle"
    }, "\u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D3\u05D9\u05D9\u05E8 \u05E1\u05E8\u05D1\u05DF")), __jsx("div", {
      className: "btn-flex-btn"
    }, this.props.userAuth ? __jsx(AccountComponent, null) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/signin"
    }, __jsx("a", {
      className: "btn btn-blue btn-medium menu-btn-link"
    }, " \u05D0\u05E0\u05D9 \u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4")), __jsx("button", {
      className: "btn btn-grey btn-grey-link",
      onClick: e => {
        console.log('clicked');
        this.props.onShowVideo(true);
      }
    }, "\u05DC\u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1\u05E1\u05E8\u05D8\u05D5\u05DF \u05D4\u05E1\u05D1\u05E8"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PageHeaderHome);

/***/ }),

/***/ "./components/PageHeaderHome/PageHeaderHome.scss":
/*!*******************************************************!*\
  !*** ./components/PageHeaderHome/PageHeaderHome.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/PriceBlock/PriceBlock.js":
/*!*********************************************!*\
  !*** ./components/PriceBlock/PriceBlock.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PriceBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PriceBlock.scss */ "./components/PriceBlock/PriceBlock.scss");
/* harmony import */ var _PriceBlock_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PriceBlock_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PriceForm_PriceForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../PriceForm/PriceForm */ "./components/PriceForm/PriceForm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class PriceBlock extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("section", {
      className: "section section-price"
    }, __jsx("div", {
      className: "container-full"
    }, __jsx("h2", {
      className: "section-heading section-heading-line"
    }, "\u05DB\u05DE\u05D4 \u05D6\u05D4 \u05E2\u05D5\u05DC\u05D4 \u05DC\u05D9?"), __jsx("div", {
      className: "price-container"
    }, __jsx("div", {
      className: "price-img-block"
    }, __jsx("div", {
      className: "price-img hot-air-balloon-team"
    })), __jsx("div", {
      className: "price-block"
    }, __jsx(_PriceForm_PriceForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      PriceFormTitle: `שכר הדירה שאני מבקש:`
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PriceBlock);

/***/ }),

/***/ "./components/PriceBlock/PriceBlock.scss":
/*!***********************************************!*\
  !*** ./components/PriceBlock/PriceBlock.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/PriceForm/PriceForm.js":
/*!*******************************************!*\
  !*** ./components/PriceForm/PriceForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/users/users.actions */ "./actions/users/users.actions.js");
/* harmony import */ var _PriceForm_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PriceForm.scss */ "./components/PriceForm/PriceForm.scss");
/* harmony import */ var _PriceForm_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_PriceForm_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/forms/forms.actions */ "./actions/forms/forms.actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








class PriceForm extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state", {
      total: 0,
      count: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onSubmit", e => {
      e.preventDefault();

      if (this.state.total) {
        this.setState({
          count: true
        });
      }
    });
  }

  createMarkup() {
    return {
      __html: this.props.PriceFormTitle
    };
  }

  render() {
    if (this.props.PriceFormTitle === void 0) throw new Error("PriceFormTitle is required");
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("div", {
      className: "price-block-form"
    }, __jsx("div", {
      className: "price-block-title"
    }, this.props.PriceFormTitle ? __jsx("h3", {
      className: "price-title",
      dangerouslySetInnerHTML: this.createMarkup()
    }) : null), __jsx("form", {
      className: "price-form",
      id: "price-form",
      onSubmit: this.onSubmit,
      noValidate: true
    }, __jsx("input", {
      className: "input-text input-grey btn-bold",
      id: "price-number",
      type: "number",
      placeholder: "\u05D4\u05DB\u05E0\u05E1 \u05E1\u05DB\u05D5\u05DD",
      onChange: e => {
        this.setState({
          total: e.target.value
        });
      }
    }), __jsx("div", {
      className: `price-block-description`
    }), __jsx("input", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("input-submit  btn-small", {
        "btn-white": this.state.count,
        "btn-blue": !this.state.count
      }),
      id: "price-submit",
      type: "submit",
      value: "\u05D7\u05E9\u05D1"
    })), !!this.state.total && this.state.count && __jsx("div", {
      className: "price-inner-content"
    }, __jsx("div", {
      className: "total-price"
    }, __jsx("span", {
      className: "price-sum"
    }, _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(this.state.total * 0.025).toFixed(0)), __jsx("span", {
      className: "price-frequency"
    }, "\u05E9\u05F4\u05D7 \u05DC\u05D7\u05D5\u05D3\u05E9")), __jsx("div", {
      className: `price-block-description`
    }, "2.5% \u05DE\u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9"), __jsx("p", {
      className: "total-info"
    }, "*\u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05E0\u05D9\u05EA\u05DF \u05DC\u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4 \u05E9\u05DC \u05E2\u05D3 7,000 \u05E9\u05F4\u05D7 \u05D1\u05D7\u05D5\u05D3\u05E9"), __jsx("div", {
      className: "btn-block"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: this.props.auth ? "/personal-info" : "/signin"
      },
      as: `/personal-info/1`
    }, __jsx("a", {
      onClick: () => {
        this.props.onSetStepper({
          activeStep: 1
        });
        this.props.onSetUserData({
          showStepsAfterLogin: true
        });
      },
      className: "btn btn-blue btn-small"
    }, "\u05E8\u05D5\u05E6\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D3\u05DD"))))));
  }

}

const mapStateToProps = state => ({
  auth: state.user.auth
});

function mapDispatchToProps(dispatch) {
  return {
    onSetStepper: action => {
      dispatch(Object(_actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_7__["stepper"])(action));
    },
    onSetUserData: action => {
      dispatch(_actions_users_users_actions__WEBPACK_IMPORTED_MODULE_5__["default"].setUserData(action));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(PriceForm));

/***/ }),

/***/ "./components/PriceForm/PriceForm.scss":
/*!*********************************************!*\
  !*** ./components/PriceForm/PriceForm.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/WeDoBlock/WeDoBlock.js":
/*!*******************************************!*\
  !*** ./components/WeDoBlock/WeDoBlock.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WeDoBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeDoBlock.scss */ "./components/WeDoBlock/WeDoBlock.scss");
/* harmony import */ var _WeDoBlock_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WeDoBlock_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_icons_wedo_icon_1_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../public/icons/wedo-icon-1.svg */ "./public/icons/wedo-icon-1.svg");
/* harmony import */ var _public_icons_wedo_icon_1_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_icons_wedo_icon_1_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_icons_wedo_icon_2_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../public/icons/wedo-icon-2.svg */ "./public/icons/wedo-icon-2.svg");
/* harmony import */ var _public_icons_wedo_icon_2_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_icons_wedo_icon_2_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_icons_wedo_icon_3_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../public/icons/wedo-icon-3.svg */ "./public/icons/wedo-icon-3.svg");
/* harmony import */ var _public_icons_wedo_icon_3_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_icons_wedo_icon_3_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_icons_wedo_icon_4_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../public/icons/wedo-icon-4.svg */ "./public/icons/wedo-icon-4.svg");
/* harmony import */ var _public_icons_wedo_icon_4_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_icons_wedo_icon_4_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_icons_hot_air_balloon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../public/icons/hot-air-balloon.svg */ "./public/icons/hot-air-balloon.svg");
/* harmony import */ var _public_icons_hot_air_balloon_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_icons_hot_air_balloon_svg__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class WeDoBlock extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("section", {
      className: "section section-wedo"
    }, __jsx("div", {
      className: "hot-air-balloon-building"
    }), __jsx("img", {
      className: "hot-air-balloon",
      src: _public_icons_hot_air_balloon_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: ""
    }), __jsx("div", {
      className: "container"
    }, __jsx("h2", {
      className: "section-heading section-heading-line"
    }, "\u05D1\u05D0\u05D9\u05DC\u05D5 \u05DE\u05E6\u05D1\u05D9\u05DD \u05D0\u05E0\u05D7\u05E0\u05D5 \u05E0\u05DB\u05E0\u05E1\u05D9\u05DD \u05DC\u05EA\u05DE\u05D5\u05E0\u05D4?"), __jsx("div", {
      className: "wedo-block"
    }, __jsx("div", {
      className: "wedo"
    }, __jsx("img", {
      src: _public_icons_wedo_icon_1_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: ""
    }), __jsx("h3", null, "\u05D1\u05D3\u05D9\u05E7\u05EA \u05E8\u05E7\u05E2 \u05DC\u05D3\u05D9\u05D9\u05E8"), __jsx("p", null, "DiffeRent \u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05DC\u05DA \u05DC\u05D1\u05D3\u05D5\u05E7 \u05E2\u05D3 5 \u05D3\u05D9\u05D9\u05E8\u05D9\u05DD \u05E4\u05D5\u05D8\u05E0\u05E6\u05D9\u05D0\u05DC\u05D9\u05DD \u05D1\u05D7\u05D9\u05E0\u05DD \u05D5\u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05D9\u05D9\u05D3\u05D9. \u05DB\u05DC \u05DE\u05D4 \u05E9\u05D0\u05EA\u05D4 \u05D6\u05E7\u05D5\u05E7 \u05DC\u05D5 \u05D4\u05D5\u05D0 \u05E9\u05DD,", __jsx("br", null), "\u05DE\u05E1\u05E4\u05E8 \u05EA.\u05D6 \u05D5\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF \u05E9\u05DC \u05D4\u05D3\u05D9\u05D9\u05E8", __jsx("br", null), "\u05D5\u05EA\u05D5\u05DA \u05E4\u05D7\u05D5\u05EA \u05DE-2 \u05E9\u05E0\u05D9\u05D5\u05EA, \u05E0\u05E2\u05D3\u05DB\u05DF \u05D0\u05D5\u05EA\u05DA \u05D4\u05D0\u05DD \u05D4\u05D3\u05D9\u05D9\u05D9\u05E8 \u05E2\u05D1\u05E8 \u05D0\u05EA \u05D4\u05D1\u05D3\u05D9\u05E7\u05D4.")), __jsx("div", {
      className: "wedo"
    }, __jsx("img", {
      src: _public_icons_wedo_icon_2_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: ""
    }), __jsx("h3", null, "\u05D4\u05D3\u05D9\u05D9\u05E8 \u05DC\u05D0 \u05DE\u05E9\u05DC\u05DD \u05D0\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4"), __jsx("p", null, "DiffeRent \u05DE\u05D1\u05D8\u05D9\u05D7\u05D4 \u05D0\u05EA \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DC\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E2\u05D3 \u05EA\u05D5\u05DD \u05D4\u05D7\u05D5\u05D6\u05D4 \u05D0\u05D5 \u05E2\u05D3 \u05DE\u05E6\u05D9\u05D0\u05EA \u05D3\u05D9\u05D9\u05E8 \u05D7\u05DC\u05D5\u05E4\u05D9.")), __jsx("div", {
      className: "wedo"
    }, __jsx("img", {
      src: _public_icons_wedo_icon_3_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: ""
    }), __jsx("h3", null, "\u05D9\u05E6\u05D9\u05D0\u05D4 \u05E4\u05EA\u05D0\u05D5\u05DE\u05D9\u05EA \u05DE\u05D4\u05E0\u05DB\u05E1"), __jsx("p", null, "\u05D1\u05DE\u05E7\u05E8\u05D9\u05DD \u05DB\u05D2\u05D5\u05DF \u05E4\u05E8\u05D9\u05D3\u05D4 \u05DE\u05D1\u05DF/\u05D1\u05EA \u05D4\u05D6\u05D5\u05D2, \u05E4\u05D9\u05D8\u05D5\u05E8\u05D9\u05DD, \u05DE\u05D7\u05DC\u05D4 (\u05DC\u05D0 \u05E2\u05DC\u05D9\u05E0\u05D5), \u05D3\u05D9\u05D9\u05E8\u05D9\u05DD \u05DE\u05E1\u05D5\u05D9\u05D9\u05DE\u05D9\u05DD \u05E0\u05D0\u05DC\u05E6\u05D9\u05DD \u05DC\u05E6\u05D0\u05EA \u05DE\u05D4\u05E0\u05DB\u05E1 \u05D1\u05E4\u05EA\u05D0\u05D5\u05DE\u05D9\u05D5\u05EA.", __jsx("br", null), "DiffeRent \u05EA\u05E9\u05DC\u05DD \u05D0\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DC\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E2\u05D3 \u05EA\u05D5\u05DD \u05D4\u05D7\u05D5\u05D6\u05D4 \u05D0\u05D5 \u05E2\u05D3 \u05DC\u05DE\u05E6\u05D9\u05D0\u05EA \u05D3\u05D9\u05D9\u05E8 \u05D7\u05DC\u05D5\u05E4\u05D9 \u05D5\u05EA\u05DE\u05E0\u05E2 \u05E4\u05D2\u05D9\u05E2\u05D4 \u05D1\u05D4\u05DB\u05E0\u05E1\u05EA\u05D5.")), __jsx("div", {
      className: "wedo"
    }, __jsx("img", {
      src: _public_icons_wedo_icon_4_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: ""
    }), __jsx("h3", null, "\u05E1\u05D9\u05E8\u05D5\u05D1 \u05DC\u05D4\u05EA\u05E4\u05E0\u05D5\u05EA (\u05D3\u05D9\u05D9\u05E8 \u05E1\u05E8\u05D1\u05DF)"), __jsx("p", null, "\u05D4\u05D3\u05D9\u05D9\u05E8 \u05DE\u05E1\u05E8\u05D1 \u05DC\u05D4\u05EA\u05E4\u05E0\u05D5\u05EA \u05DE\u05D4\u05D3\u05D9\u05E8\u05D4? DiffeRent \u05EA\u05D3\u05D0\u05D2 \u05DC\u05D9\u05D9\u05E6\u05D5\u05D2 \u05DE\u05E9\u05E4\u05D8\u05D9 \u05D5\u05DC\u05DB\u05D9\u05E1\u05D5\u05D9 \u05DB\u05DC\u05DC \u05D4\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05DE\u05E9\u05E4\u05D8\u05D9\u05D5\u05EA, \u05EA\u05DE\u05E9\u05D9\u05DA \u05DC\u05E9\u05DC\u05DD \u05DC\u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D0\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D5\u05EA\u05DE\u05E6\u05D0 \u05DC\u05D5 \u05D3\u05D9\u05D9\u05E8 \u05D7\u05DC\u05D5\u05E4\u05D9."))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WeDoBlock);

/***/ }),

/***/ "./components/WeDoBlock/WeDoBlock.scss":
/*!*********************************************!*\
  !*** ./components/WeDoBlock/WeDoBlock.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/WhyBlock/WhyBlock.js":
/*!*****************************************!*\
  !*** ./components/WhyBlock/WhyBlock.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WhyBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WhyBlock.scss */ "./components/WhyBlock/WhyBlock.scss");
/* harmony import */ var _WhyBlock_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WhyBlock_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class WhyBlock extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("section", {
      className: "section section-why"
    }, __jsx("div", {
      className: "container"
    }, __jsx("h2", {
      className: "section-heading section-heading-line"
    }, "\u05DC\u05DE\u05D4 DiffeRent?"), __jsx("div", {
      className: "why-block"
    }, __jsx("div", {
      className: "why"
    }, __jsx("div", {
      className: "why-icon"
    }), __jsx("h3", null, "\u05E9\u05D5\u05EA\u05E4\u05D9\u05DD \u05DC\u05D3\u05E8\u05DA"), __jsx("p", null, "DiffeRent \u05DE\u05DC\u05D5\u05D5\u05D4 \u05D0\u05EA\u05DB\u05DD \u05E2\u05D5\u05D3 \u05DE\u05E9\u05DC\u05D1 \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D4\u05D3\u05D9\u05D9\u05E8 \u05D5\u05D4\u05D7\u05EA\u05D9\u05DE\u05D4 \u05E2\u05DC \u05D4\u05D7\u05D5\u05D6\u05D4,", __jsx("br", null), "\u05D2\u05DD \u05D5\u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DB\u05E9\u05D9\u05E9 \u05D1\u05E2\u05D9\u05D5\u05EA \u05D5\u05E2\u05D3 \u05E9\u05D4\u05DF \u05E0\u05E4\u05EA\u05E8\u05D5\u05EA.")), __jsx("div", {
      className: "why"
    }, __jsx("div", {
      className: "why-icon"
    }), __jsx("h3", null, "\u05E4\u05E9\u05D5\u05D8 \u05D5\u05DE\u05D9\u05D9\u05D3\u05D9"), __jsx("p", null, "\u05EA\u05D4\u05DC\u05D9\u05DA \u05E4\u05E9\u05D5\u05D8, \u05D1\u05E8\u05D5\u05E8 \u05D5\u05D4\u05DB\u05D9 \u05D7\u05E9\u05D5\u05D1 \u05D1\u05D8\u05D5\u05D7. \u05D1\u05DC\u05D9 \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05E7\u05D8\u05E0\u05D5\u05EA.")), __jsx("div", {
      className: "why"
    }, __jsx("div", {
      className: "why-icon"
    }), __jsx("h3", null, "\u05E8\u05D5\u05D5\u05D7 \u05D2\u05D3\u05D5\u05DC \u05D1\u05DE\u05D7\u05D9\u05E8 \u05E7\u05D8\u05DF"), __jsx("p", null, "\u05D1\u05E2\u05D1\u05D5\u05E8 2.5% \u05D1\u05DC\u05D1\u05D3 \u05DE\u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9,", __jsx("br", null), "\u05EA\u05D1\u05D8\u05D9\u05D7\u05D5 \u05DC\u05DB\u05DD \u05D0\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E9\u05D9\u05E9\u05D5\u05DC\u05DD \u05D1\u05D6\u05DE\u05DF, \u05DB\u05DC \u05D4\u05D6\u05DE\u05DF."))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WhyBlock);

/***/ }),

/***/ "./components/WhyBlock/WhyBlock.scss":
/*!*******************************************!*\
  !*** ./components/WhyBlock/WhyBlock.scss ***!
  \*******************************************/
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
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

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
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
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

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

      const cb = listeners.get(entry.target);

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

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

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
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
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

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
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
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

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
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

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

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

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
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

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
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


const createRouter = function createRouter() {
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
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
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

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
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
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
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
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./head */ "./pages/head.js");
/* harmony import */ var _components_MainPage_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/MainPage/index */ "./components/MainPage/index.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/main.scss */ "./pages/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const IndexPage = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_head__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "DiffeRent"
  }, __jsx("div", {
    className: "app home"
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_MainPage_index__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

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

/***/ "./public/icons/dun-bradstreet.svg":
/*!*****************************************!*\
  !*** ./public/icons/dun-bradstreet.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dun-bradstreet-5c888d431cd89c5bdbdee971f986756f.svg";

/***/ }),

/***/ "./public/icons/facebook-icon.svg":
/*!****************************************!*\
  !*** ./public/icons/facebook-icon.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+NjM4MUZBN0ItMTUyRi00NDI2LUE5ODItRTBGNThGQzA0RTM2PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSJJY29ucy0vLWZhY2Vib29rX2ZpbGwtZ3JleS0yNCIgZmlsbD0iIzU2NTM1MCIgc3Ryb2tlPSIjNTY1MzUwIiBzdHJva2Utd2lkdGg9IjAuOCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMC40NzgyNjA5LDIyIEwxMC40NzgyNjA5LDEyLjQzNDc4MjYgTDcsMTIuNDM0NzgyNiBMNyw5LjgyNjA4Njk2IEwxMC40NzgyNjA5LDkuODI2MDg2OTYgTDEwLjQ3ODI2MDksNi4zNDc4MjYwOSBDMTAuNDc4MjYwOSwzLjk0Njk1NjUyIDEyLjQyNTIxNzQsMiAxNC44MjYwODcsMiBMMTcuNDM0NzgyNiwyIEwxNy40MzQ3ODI2LDQuNjA4Njk1NjUgTDE0LjgyNjA4Nyw0LjYwODY5NTY1IEMxMy44NjUyMTc0LDQuNjA4Njk1NjUgMTMuMDg2OTU2NSw1LjM4Njk1NjUyIDEzLjA4Njk1NjUsNi4zNDc4MjYwOSBMMTMuMDg2OTU2NSw5LjgyNjA4Njk2IEwxNy40MzQ3ODI2LDkuODI2MDg2OTYgTDE2LjU2NTIxNzQsMTIuNDM0NzgyNiBMMTMuMDg2OTU2NSwxMi40MzQ3ODI2IEwxMy4wODY5NTY1LDIyIEwxMC40NzgyNjA5LDIyIEwxMC40NzgyNjA5LDIyIFoiIGlkPSJTdHJva2UtOTIiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./public/icons/hot-air-balloon.svg":
/*!******************************************!*\
  !*** ./public/icons/hot-air-balloon.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjQ4cHgiIGhlaWdodD0iMTk2cHgiIHZpZXdCb3g9IjAgMCAyNDggMTk2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPjkzQUY3RkEyLTkzOEQtNDIyNy1BMDRBLUQzNkQ3NUQ2QTdBRjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9IjAuMTE1NDI4Nzc1IDAuMDI0NDEwODY3OSAyMDkuNTAzMjAzIDAuMDI0NDEwODY3OSAyMDkuNTAzMjAzIDc0LjcxMDU3MDkgMC4xMTU0Mjg3NzUgNzQuNzEwNTcwOSI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJJbGx1c3RyYXRpb25zLS8taG90X2Fpcl9iYWxsb29uIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNy4wMDAwMDAsIDk4LjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTI3LjAwMDAwMCwgLTk4LjAwMDAwMCkgdHJhbnNsYXRlKDYuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTg3LDEwMiBDOTcuNzA2NzQ0MSwxMjYuMjMxNzExIDEyNy4yNjM3MzgsMTM4LjAwMTcxMiAxNTIuMzI4ODg2LDEzMC40MjM0MzcgQzE3Mi44MTY4MjMsMTI0LjIyODU4NiAxOTAuMjY5NzU5LDEwNy44MzM3MjIgMjExLjU3MjA0NywxMDkuNjYwMTAxIEMyMzAuNTM3OTksMTExLjI4NzkxNCAyNDUuNTI4NzgsMTMyLjE0NjE2OSAyNDEuMjcxNjkyLDE1MC45ODQ5MzQgQzIzNy4wMTU3MjgsMTY5LjgyNTg4IDIxNC41Njk5OCwxODEuOTYwMjg0IDE5Ni44MDM2NTksMTc1LjAyNzg5NyIgaWQ9IlN0cm9rZS0xIiBzdHJva2U9IiNCRjNENEIiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIxMCw2NSBDMjEwLDEwMC44OTc2NjEgMTc5Ljc4MDM0MiwxMzAgMTQyLjQ5OTQzNiwxMzAgQzEwNS4yMjA3ODUsMTMwIDc1LDEwMC44OTc2NjEgNzUsNjUgQzc1LDI5LjEwMTI1NCAxMDUuMjIwNzg1LDAgMTQyLjQ5OTQzNiwwIEMxNzkuNzgwMzQyLDAgMjEwLDI5LjEwMTI1NCAyMTAsNjUiIGlkPSJGaWxsLTUiIGZpbGw9IiNDQzQxNDkiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDkzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMTAiPjwvZz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDcuMTcxNjI4NSw3NC43MTE2ODA1IEwyMDcuMzY5MzQ2LDc0LjcxMTY4MDUgQzIxMi4zOTE3MDcsNjIuMDA4MDQyOSAyMDguMjEwNTUyLDQ5LjQ3NDE3MTggMTk4LjM2OTM0Nyw0My45NDQwMDA2IEMxODguNTI3MDEyLDM4LjQxMzgyOTUgMTc0LjIxMTgxMyw0MC41Nzc1MiAxNjYuOTUwNzU4LDQ4LjY5NDEzMzYgQzE2Mi43MzY4MTQsMzIuODIyNjMxMSAxNTMuNzM3OTQ2LDE3LjM0OTQ2OTYgMTM4Ljc5MTg0Miw4LjAwMTIxNjc2IEMxMjMuODQ1NzM5LC0xLjM0NzAzNjA4IDEwMi4zMjk0MSwtMy4yMDIyNjIwNCA4Ny41MzAyOTE0LDYuMzMxMjkxNDggQzcyLjczMDA0MjIsMTUuODY0ODQ1IDY4LjczODgzNjcsMzcuNTY5NDM1MyA4MS43NTYwNDYsNDguOTk0ODMxMSBDNjMuMDc3NjU2NSw0Mi4wODg3NzQ3IDQuNzg2ODM1MTksNTMuNzk0ODk1NCAwLjExNDk3NjUxNCw3MS4zODI5MjU4IEw0Ny4xNzE2Mjg1LDc0LjcxMTY4MDUgWiIgaWQ9IkZpbGwtOSIgZmlsbD0iI0ZGQzhBQSIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0xMTAiIGZpbGw9IiNGRkExNkUiIHBvaW50cz0iNTggOTQgNTkuMjUwNzU0NyAxMDQuMTkxNzQ4IDY5IDEwNS41MDA1NzkgNTkuMjUwNzU0NyAxMDYuODA3MDk0IDU4IDExNyA1Ni43NDgxMzg1IDEwNi44MDcwOTQgNDcgMTA1LjUwMDU3OSA1Ni43NDgxMzg1IDEwNC4xOTE3NDgiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMzEuNTUzODI2LDEyMC43ODQ2OTYgQzIzMC4yMTI5MywxMzEuMzYyOTA5IDIxNy44MjgyOTEsMTQ1Ljg3MzgxIDIwOC4xMzUwMzgsMTU1LjQwNTE5MiBDMjAzLjQwOTkyNCwxNjAuMDYwNDMzIDE5MS42MDUxMzMsMTcyLjEyNzI3OCAxOTAuMzY0NDMsMTczIEwxNzEuMDA2NzA0LDE3MyBDMTY5Ljc2OTIsMTcyLjEyNzI3OCAxNTcuODU0NjIxLDE2MC4wNjA0MzMgMTUzLjI0NDYyNCwxNTUuNDA1MTkyIEMxNDMuNzkzMzI5LDE0NS44NzM4MSAxMzEuNzg2MDE4LDEzMS4zNjI5MDkgMTMwLjQ0NjE4NywxMjAuNzg0Njk2IEMxMjYuNTIyNjI2LDg5Ljg0MjI1MjUgMTQ4Ljg5NTc3LDYxIDE4MS4wMDQ4MDMsNjEgQzIxMy4xMDMxNzcsNjEgMjM1LjQ3NzM4Nyw4OS44NDIyNTI1IDIzMS41NTM4MjYsMTIwLjc4NDY5NiIgaWQ9IkZpbGwtMzA1IiBmaWxsPSIjRkZBMTZFIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTg2LjA4ODk4NCwxNzMgQzI0NS45MDU1NjQsNzcuMDA5MTcxNyAxODcuMzMxMDAxLDYxIDE4Ny4zMzEwMDEsNjEgTDE3My40NDkxNjEsNjEgQzE3My40NDkxNjEsNjEgMTE0Ljk2MzM5Nyw3Ny4wMDkxNzE3IDE3NS4zMTYyNzUsMTczIEwxODYuMDg4OTg0LDE3MyBaIiBpZD0iRmlsbC0zMDYiIGZpbGw9IiNFMzQwNTYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xODEuODU5NDI2LDE3MyBDMTkxLjA2MjYyOSw3Ny4wMDkxNzE3IDE4Mi4wNTA5ODcsNjEgMTgyLjA1MDk4Nyw2MSBMMTc5LjkxNTM5Nyw2MSBDMTc5LjkxNTM5Nyw2MSAxNzAuOTE3NTA0LDc3LjAwOTE3MTcgMTgwLjIwMjI4MSwxNzMgTDE4MS44NTk0MjYsMTczIFoiIGlkPSJGaWxsLTMwNyIgZmlsbD0iI0UzNDA1NiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMzA4IiBmaWxsPSIjRTM0MDU2IiBwb2ludHM9IjE4NS4xODE0NyAxOTYgMTc2LjgwNjk0OSAxOTYgMTc0IDE4NiAxODggMTg2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjA1LDE2NCBDMjAyLjQ2MTk1MywxNjYuMjA2ODM3IDIwMC4xMzQyODMsMTY4LjE1Mjk2NCAxOTguMTk2NjA4LDE2OS43MzQ1MzEgQzE5OC4xODc5OTYsMTY5Ljc0MTAyMSAxOTguMTc5Mzg0LDE2OS43NDc1MTIgMTk4LjE3OTM4NCwxNjkuNzQ3NTEyIEMxOTYuMjgyMzA4LDE3MS4xMjM1NCAxOTQuNjY4MTk0LDE3Mi40MTE5NDMgMTkzLjYzNzIyNywxNzMuMjExMzggQzE5My42MjAwMDQsMTczLjIyOTc3MSAxOTMuNjAyNzgsMTczLjI0OTI0MyAxOTMuNTc4MTc0LDE3My4yNjIyMjQgQzE5My40MzU0NjMsMTczLjM3NTgxMSAxOTMuMzAwMTMzLDE3My40Nzc0OTkgMTkzLjE4MjAyOCwxNzMuNTcxNjE0IEMxOTMuMTQwMTk4LDE3My42MDI5ODYgMTkzLjA4OTc1NywxNzMuNjQwODQ4IDE5My4wNDc5MjgsMTczLjY3MjIyIEMxOTIuOTcyODgyLDE3My43MzYwNDUgMTkyLjg5NjYwNSwxNzMuNzg1ODA3IDE5Mi44Mjg5NCwxNzMuODM2NjUxIEMxOTIuNzk1NzIzLDE3My44NjE1MzIgMTkyLjc2MjUwNiwxNzMuODgxMDA0IDE5Mi43MzY2NywxNzMuOTA1ODg1IEMxOTIuNzIwNjc2LDE3My45MTIzNzYgMTkyLjcwNDY4MywxNzMuOTE4ODY2IDE5Mi42OTYwNzEsMTczLjkzMTg0OCBDMTkyLjY4NzQ1OSwxNzMuOTM4MzM4IDE5Mi42NzE0NjYsMTczLjk0Mzc0NyAxOTIuNjYyODU0LDE3My45NDkxNTYgQzE5Mi42MzcwMTgsMTczLjk2ODYyOCAxOTIuNjEyNDEzLDE3My45ODcwMTkgMTkyLjU4NjU3NywxNzQgTDE3MC4yNDExODUsMTc0IEMxNzAuMjE2NTgsMTczLjk4NzAxOSAxNzAuMTgyMTMyLDE3My45Njg2MjggMTcwLjE0ODkxNSwxNzMuOTQzNzQ3IEwxNzAuMDcyNjM4LDE3My44ODc0OTUgQzE3MC4wMjM0MjcsMTczLjg1NTA0MSAxNjkuOTcyOTg2LDE3My44MTcxNzkgMTY5LjkxMzkzMywxNzMuNzc5MzE2IEMxNjkuODcyMTA0LDE3My43NDI1MzYgMTY5LjgyMTY2MywxNzMuNzA0NjczIDE2OS43Nzk4MzQsMTczLjY3MjIyIEwxNjkuNjQ1NzM1LDE3My41NzE2MTQgQzE2OC44MTg5OTMsMTcyLjk0NjM0NCAxNjcuMzQ4ODIxLDE3MS43NjI4NzMgMTY1LjU0MTU1NCwxNzAuNDE4MjE3IEwxNTgsMTY0IEwyMDUsMTY0IFoiIGlkPSJGaWxsLTMwOSIgZmlsbD0iIzZEMjMyQiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJTdHJva2UtMzEwIiBzdHJva2U9IiM2RDIzMkIiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSIxNzQuNjc1NTIyIDE4NiAxNzEgMTcyIDE4MSAxODYiPjwvcG9seWxpbmU+CiAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlN0cm9rZS0zMTEiIHN0cm9rZT0iIzZEMjMyQiIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludHM9IjE4Ny4zMzI3ODYgMTg2IDE5MSAxNzIgMTgxIDE4NiI+PC9wb2x5bGluZT4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTMxMiIgZmlsbD0iI0UzNDA1NiIgcG9pbnRzPSIxODcuOTU3MDEgMTkxIDE3NC4wNDEwMzYgMTkxIDE3NCAxODcgMTg4IDE4NyI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),

/***/ "./public/icons/linkedin-icon.svg":
/*!****************************************!*\
  !*** ./public/icons/linkedin-icon.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+OTczMDEyRDYtOEE1RS00MDVCLTlFNjYtQkE4MjM5N0FBM0NFPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSJJY29ucy0vLWxpbmtlZGluX2ZpbGwtZ3JleS0yNCIgZmlsbD0iIzU2NTM1MCIgc3Ryb2tlPSIjNTY1MzUwIiBzdHJva2Utd2lkdGg9IjAuOCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02LjM0NzkxMzA0LDQuMTczOTEzMDQgQzYuMzQ3OTEzMDQsNS4zNzQ3ODI2MSA1LjM3NDg2OTU3LDYuMzQ3ODI2MDkgNC4xNzQsNi4zNDc4MjYwOSBDMi45NzMxMzA0Myw2LjM0NzgyNjA5IDIuMDAwMDg2OTYsNS4zNzQ3ODI2MSAyLjAwMDA4Njk2LDQuMTczOTEzMDQgQzIuMDAwMDg2OTYsMi45NzMwNDM0OCAyLjk3MzEzMDQzLDIgNC4xNzQsMiBDNS4zNzQ4Njk1NywyIDYuMzQ3OTEzMDQsMi45NzMwNDM0OCA2LjM0NzkxMzA0LDQuMTczOTEzMDQgWiBNMiwyMiBMMiw4Ljk1NjUyMTc0IEw2LjM0NzgyNjA5LDguOTU2NTIxNzQgTDYuMzQ3ODI2MDksMjIgTDIsMjIgWiBNMTMuMzA0NDM0OCw5LjgyNjA4Njk2IEMxNC45NDE4MjYxLDcuNzc0NzgyNjEgMjEuOTAxODI2MSw2LjE3OTEzMDQzIDIyLjAwMDA4NywxMy4zMDQzNDc4IEwyMi4wMDAwODcsMTUuOTEzMDQzNSBMMjIuMDAwMDg3LDIyIEwxNy42NTIyNjA5LDIyIEwxNy42NTIyNjA5LDE2LjA5NDc4MjYgTDE3LjY1MjI2MDksMTUuOTEzMDQzNSBMMTcuNjUyMjYwOSwxNC4xNzM5MTMgQzE3LjY1MzEzMDQsMTEuNDQ5NTY1MiAxNC45NTQsMTAuODMyMTczOSAxMy4zMDQ0MzQ4LDEyLjQzNDc4MjYgTDEzLjMwNDQzNDgsMjIgTDguOTU2NjA4NywyMiBMOC45NTY2MDg3LDguOTU2NTIxNzQgTDEzLjMwNDQzNDgsOC45NTY1MjE3NCBMMTMuMzA0NDM0OCw5LjgyNjA4Njk2IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./public/icons/md-lawfirm.png":
/*!*************************************!*\
  !*** ./public/icons/md-lawfirm.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/md-lawfirm-54000db1e955f60ce2a17438f6fc8ebf.png";

/***/ }),

/***/ "./public/icons/wedo-icon-1.svg":
/*!**************************************!*\
  !*** ./public/icons/wedo-icon-1.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPjIzQTk5NkFDLTlDNkQtNEMyMi05RkExLUYxMjBDNjZFMTI1MzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8ZyBpZD0iSWNvbnMtLy1jaGVja193aXRoX3Blbl9vdXRsaW5lLWNvcmFsLTQwIiBzdHJva2U9IiNGRjc3NkYiIHN0cm9rZS13aWR0aD0iMS41Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTM2LjMwNDExNjMsNDguNDc4NjU3OCBMMjEuMDg2ODkwNCw0OC40Nzg2NTc4IEMxNy43MjM4ODM0LDQ4LjQ3ODY1NzggMTUsNTEuMjAyNTQxMyAxNSw1NC41NjU1NDgyIEwxNSw3OC45MTMxMDk2IEMxNSw4Mi4yNzYxMTY2IDE3LjcyMzg4MzQsODUgMjEuMDg2ODkwNCw4NSBMNzguOTEyMzQ4OCw4NSBDODIuMjc1MzU1Nyw4NSA4NC45OTkyMzkxLDgyLjI3NjExNjYgODQuOTk5MjM5MSw3OC45MTMxMDk2IEw4NC45OTkyMzkxLDU0LjU2NTU0ODIgQzg0Ljk5OTIzOTEsNTEuMjAyNTQxMyA4Mi4yNzUzNTU3LDQ4LjQ3ODY1NzggNzguOTEyMzQ4OCw0OC40Nzg2NTc4IEw2Ni43Mzg1NjgxLDQ4LjQ3ODY1NzggTTc3LjY1NTQwNTksMTYuMjU3NzAzNyBMMzAuMjE3MjI1OSw2My42OTU4ODM3IEwyNC4xMzAzMzU1LDc1Ljg2OTY2NDUgTDM2LjMwNDExNjMsNjkuNzgyNzc0MSBMODMuNzQyMjk2MywyMi4zNDQ1OTQxIEM4NS40MTkyMzQ2LDIwLjY2NzY1NTggODUuNDE5MjM0NiwxNy45NTI5MDI3IDgzLjc0MjI5NjMsMTYuMjc1OTY0NCBMODMuNzI0MDM1NiwxNi4yNTc3MDM3IEM4Mi4wNDcwOTczLDE0LjU4MDc2NTQgNzkuMzMyMzQ0MiwxNC41ODA3NjU0IDc3LjY1NTQwNTksMTYuMjU3NzAzNyBMNzcuNjU1NDA1OSwxNi4yNTc3MDM3IFogTTgxLjk1NTc5NCwzMC4yMTc5ODY4IEw2OS43ODIwMTMyLDE4LjA0NDIwNiBMNTQuNTY0Nzg3MywzMy4yNjE0MzE5IE0zMC4yMTcyMjU5LDYzLjY5NTg4MzcgTDM2LjMwNDExNjMsNjkuNzgyNzc0MSBNNTcuNjA4MjMyNSw1Ny42MDg5OTM0IEw3NS44Njg5MDM2LDU3LjYwODk5MzQgTTc1Ljg2ODkwMzYsNjYuNzM5MzI4OSBMNDguNDc3ODk3LDY2LjczOTMyODkgTTc1Ljg2ODkwMzYsNzUuODY5NjY0NSBMMzkuMzQ3NTYxNCw3NS44Njk2NjQ1IiBpZD0iY2hlY2siPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./public/icons/wedo-icon-2.svg":
/*!**************************************!*\
  !*** ./public/icons/wedo-icon-2.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPjdGMEEzNEQ4LUE0NjMtNEE3QS04MEZDLUFBRTJENUIyOTk0QzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8ZyBpZD0iSWNvbnMtLy10cmFuc2Zlcl9tb25leV9uaXNfb3V0bGluZS1jb3JhbC0xMDAiIHN0cm9rZT0iI0ZGNzc2RiIgc3Ryb2tlLXdpZHRoPSIxLjUiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTUsNTAgQzE1LDMwLjY2NzgyNjEgMzAuNjY3ODI2MSwxNSA1MCwxNSBDNjUuNTczNDc4MywxNSA3Ni4zNzc4MjYxLDI1LjI3MTczOTEgODMuMzEwODY5NiwzOS4yMzIxNzM5IE03Mi44MjYwODcsMzkuMzQ3ODI2MSBMODUsMzkuMzQ3ODI2MSBMODUsMjcuMzAxNzM5MSBNODUsNTAgQzg1LDY5LjMzMjE3MzkgNjkuMzMyMTczOSw4NSA1MCw4NSBDMzQuNDI2NTIxNyw4NSAyMy42MjIxNzM5LDc0LjcyODI2MDkgMTYuNjg5MTMwNCw2MC43Njc4MjYxIE0yNy4xNzM5MTMsNjAuNjUyMTczOSBMMTUsNjAuNjUyMTczOSBMMTUsNzIuNjk4MjYwOSBNNTYuNDQyNDc3OSw1NC4wODg0OTU2IEw1Ni40NDI0Nzc5LDM2LjI0Nzc4NzYgQzU2LjQ0MjQ3NzksMzYuMTExMDA4OCA1Ni4zMDM3MTY4LDM2IDU2LjEzMjc0MzQsMzYgTDQzLjc0MzM2MjgsMzYgQzM5LjQ2Njg1ODQsMzYgMzYsMzguNzczNDg2NyAzNiw0Mi4xOTQ2OTAzIEwzNiw2NCBNNDUuOTExNTA0NCw0NS45MTE1MDQ0IEw0NS45MTE1MDQ0LDYzLjc1MjIxMjQgQzQ1LjkxMTUwNDQsNjMuODg4OTkxMiA0Ni4wNTAyNjU1LDY0IDQ2LjIyMTIzODksNjQgTDU4LjYxMDYxOTUsNjQgQzYyLjg4NzEyMzksNjQgNjYuMzUzOTgyMyw2MS4yMjY1MTMzIDY2LjM1Mzk4MjMsNTcuODA1MzA5NyBMNjYuMzUzOTgyMywzNiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),

/***/ "./public/icons/wedo-icon-3.svg":
/*!**************************************!*\
  !*** ./public/icons/wedo-icon-3.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPjQ3QTYxNkNELTFCMkYtNDlGRC1COEM5LUM4MDVDRkU4QTI1MzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikljb25zLS8tc2hpZWxkX3Zfb3V0bGluZS1jb3JhbC0xMDAiIHN0cm9rZT0iI0ZGNzc2RiIgc3Ryb2tlLXdpZHRoPSIxLjUiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzQuNjUyMTczOSw0OC40NzgyNjA5IEw0Ny4xNzM5MTMsNjAuNjUyMTczOSBMNjkuMDg2OTU2NSwzOS4zNDc4MjYxIE04MS42MDg2OTU3LDU3LjYwODY5NTcgTDgxLjYwODY5NTcsMjQuMTMwNDM0OCBMNTAuMzA0MzQ3OCwxNSBMMTksMjQuMTMwNDM0OCBMMTksNTcuNjA4Njk1NyBDMTksNjkuNzgyNjA4NyAzOC41NjUyMTc0LDgxLjQ0ODI2MDkgNTAuMzA0MzQ3OCw4NSBDNjIuMDQzNDc4Myw4MS40NDgyNjA5IDgxLjYwODY5NTcsNjkuNzgyNjA4NyA4MS42MDg2OTU3LDU3LjYwODY5NTcgWiIgaWQ9InNoaWVsZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMC41LDEyLjQ1NDU0NTUgTDkwLjUsODUiIGlkPSJMaW5lLTkiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./public/icons/wedo-icon-4.svg":
/*!**************************************!*\
  !*** ./public/icons/wedo-icon-4.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPjQ1ODhFNDU5LUE1NDgtNDlDMy04Qzc2LUIwNUNDRjZGOURCMDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikljb25zLS8taG9tZV9vdXRsaW5lLWJsYWNrLTEwMCIgc3Ryb2tlPSIjRkY3NzZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuMDAwMDAwLCAxNi4wMDAwMDApIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTU4LjUyNjA4MzMsMzQgTDU4LjUyNjA4MzMsMzIuNTQxNjY2NyBMNjcuMjk2NSwzMi41NDE2NjY3IEw1OC41MjYwODMzLDIzLjc5MTY2NjcgTDU4LjUyNjA4MzMsMC40NTgzMzMzMzMgTDQ2LjgzMzE2NjcsMC40NTgzMzMzMzMgTDQ2LjgzMzE2NjcsMTIuMTI1IEwzNi4xNzI3NSwxLjQ4NzkxNjY3IEMzNS41MTM1ODMzLDAuODI4NzUgMzQuNjE4MTY2NywwLjQ1ODMzMzMzMyAzMy42ODE5MTY3LDAuNDU4MzMzMzMzIEwzMy42NzksMC40NTgzMzMzMzMgQzMyLjc0Mjc1LDAuNDU4MzMzMzMzIDMxLjg0NzMzMzMsMC44Mjg3NSAzMS4xODgxNjY3LDEuNDg3OTE2NjcgTDAuMDY3MzMzMzMzMywzMi41NDE2NjY3IEw4LjgzNDgzMzMzLDMyLjU0MTY2NjcgTDguODM0ODMzMzMsNjcuNTQxNjY2NyBMMzkuNTI2OTE2Nyw2Ny41NDE2NjY3IiBpZD0iU3Ryb2tlLTMxMyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJTdHJva2UtMzE1IiBwb2ludHM9IjMyLjIxOTIwODMgNTUuODc1IDIzLjQ0ODc5MTcgNTUuODc1IDIzLjQ0ODc5MTcgMzUuNDU4MzMzMyA0My45MTIxMjUgMzUuNDU4MzMzMyI+PC9wb2x5bGluZT4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01OC41MjYwODMzLDM0IEw1OC41MjYwODMzLDMyLjU0MTY2NjcgTDY3LjI5NjUsMzIuNTQxNjY2NyBMNTguNTI2MDgzMywyMy43OTE2NjY3IEw1OC41MjYwODMzLDAuNDU4MzMzMzMzIEw0Ni44MzMxNjY3LDAuNDU4MzMzMzMzIEw0Ni44MzMxNjY3LDEyLjEyNSBMMzYuMTcyNzUsMS40ODc5MTY2NyBDMzUuNTEzNTgzMywwLjgyODc1IDM0LjYxODE2NjcsMC40NTgzMzMzMzMgMzMuNjgxOTE2NywwLjQ1ODMzMzMzMyBMMzMuNjc5LDAuNDU4MzMzMzMzIEMzMi43NDI3NSwwLjQ1ODMzMzMzMyAzMS44NDczMzMzLDAuODI4NzUgMzEuMTg4MTY2NywxLjQ4NzkxNjY3IEwwLjA2NzMzMzMzMzMsMzIuNTQxNjY2NyBMOC44MzQ4MzMzMywzMi41NDE2NjY3IEw4LjgzNDgzMzMzLDY3LjU0MTY2NjcgTDM5LjUyNjkxNjcsNjcuNTQxNjY2NyIgaWQ9IlN0cm9rZS0zMTciPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOC4wNjk3NSw1Mi45NTgzMzMzIEMzOC4wNjk3NSw0NC45MDU0MTY3IDQ0LjYxMTgzMzMsMzguMzc1IDUyLjY4NTE2NjcsMzguMzc1IEM2MC43NTU1ODMzLDM4LjM3NSA2Ny4zMDA1ODMzLDQ0LjkwNTQxNjcgNjcuMzAwNTgzMyw1Mi45NTgzMzMzIEM2Ny4zMDA1ODMzLDYxLjAxMTI1IDYwLjc1NTU4MzMsNjcuNTQxNjY2NyA1Mi42ODUxNjY3LDY3LjU0MTY2NjcgQzQ0LjYxMTgzMzMsNjcuNTQxNjY2NyAzOC4wNjk3NSw2MS4wMTEyNSAzOC4wNjk3NSw1Mi45NTgzMzMzIEwzOC4wNjk3NSw1Mi45NTgzMzMzIFoiIGlkPSJTdHJva2UtMzE5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlN0cm9rZS0zMTIiIHBvaW50cz0iMzIuMjE5MjA4MyA1NS44NzUgMjMuNDQ4NzkxNyA1NS44NzUgMjMuNDQ4NzkxNyAzNS40NTgzMzMzIDQzLjkxMjEyNSAzNS40NTgzMzMzIj48L3BvbHlsaW5lPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik03OS45OTMyMDQ4LDc2LjU1Nzc3MDIgQzc5Ljk5NzczNDYsNzYuNTgxOTk3MiA4MC4wMDAwMzg2LDc2LjYwNzA4NDggNzkuOTk5OTk5NSw3Ni42MzI3MzE4IEM3OS45OTk5OTk1LDc2LjgzNTQ5ODQgNzkuODUwOTg1Myw3Ni45OTk5MjM1IDc5LjY2Njc4NzIsNzYuOTk5OTIzNSBDNzkuNjY1MTQ3MSw3Ny4wMDAwOTU2IDc5LjY2Mjg4MjMsNzYuOTk5OTIzNSA3OS42NjAyNjU5LDc2Ljk5OTkyMzUgTDYwLjMzMzIxMjMsNzYuOTk5OTIzNSBDNjAuMTQ5MDUzMiw3Ni45OTk5MjM1IDYwLDc2LjgzNTU0MTQgNjAsNzYuNjMyNzMxOCBDNjAsNzQuMTg0OTQ1MiA2MC44NjY1OTQsNzEuODc5ODUyNSA2Mi40Mzk5OTAxLDcwLjE0MTkyMDkgQzYzLjI5MDk2NDIsNjkuMjA3OTU1NCA2NC4zMjkwMjYsNjguNDc1MzM2NCA2NS40NDI5MjI3LDY4LjAyMjU5NzIgQzY1LjU1MDYyMjEsNjcuOTc5MjIxIDY1LjY3MDAzNjUsNjcuOTk5MjczOSA2NS43NjA1MTUsNjguMDc1MzExMyBDNjYuOTg3NjU2Miw2OS4xMDkzMjYyIDY4LjQ1MjMzNzUsNjkuNjU1ODMyIDY5Ljk5Njc1ODYsNjkuNjU1ODMyIEM3MS41NDExNzk3LDY5LjY1NTgzMiA3My4wMDU4NjExLDY5LjEwOTMyNjIgNzQuMjMzMDAyMiw2OC4wNzUyNjgzIEM3NC4zMjM3OTMxLDY3Ljk5OTIzMDggNzQuNDQ0MjIyOCw2Ny45NzkxNzggNzQuNTUwOTQ2LDY4LjAyMjU1NDIgQzc3Ljc4NDkzNjUsNjkuMzM5MTU5OCA3OS45NjQ4OTM3LDcyLjc2MjY5NjEgNzkuOTkzMjA0OCw3Ni41NTc3NzAyIFogTTcwLDY3IEM2Ny4yNDMwMDQyLDY3IDY1LDY0Ljc1NzAwMjcgNjUsNjIuMDAwMDE1NCBDNjUsNTkuMjQzMDI4MSA2Ny4yNDMwMDQyLDU3IDcwLDU3IEM3Mi43NTY5OTU4LDU3IDc1LDU5LjI0MzAyODEgNzUsNjIuMDAwMDE1NCBDNzUsNjQuNzU3MDAyNyA3Mi43NTY5OTU4LDY3IDcwLDY3IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgc3Ryb2tlLXdpZHRoPSIwLjgiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

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
  baseURL: `${process.env.REACT_APP_BASE_HOST}`,
  headers: {
    "Content-Type": "application/json",
    device_id: `${process.env.REACT_APP_DEVICE_MOCK_ID}`
  }
};
const cardCheckerConfig = {
  baseURL: `${process.env.REACT_APP_CARD_CHECKER_URL}`,
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



 // Api is axios wrapper class

class Api {
  // login is first step for authorization
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,
  static login(data) {
    return _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${process.env.REACT_APP_BASE_STAGE}/${_routes_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTE_LOGIN"]}`, data);
  } // auth is second step for authorization
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,
  // https://api.ballaba-it.com/{STAGE}/authenticate


  static auth(data) {
    return _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${process.env.REACT_APP_BASE_STAGE}${_routes_constants__WEBPACK_IMPORTED_MODULE_3__["ROUTE_AUTH"]}`, data);
  }

  static contactEmail(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${process.env.REACT_APP_BASE_HOST + process.env.REACT_APP_BASE_STAGE}${_routes_constants__WEBPACK_IMPORTED_MODULE_3__["CONTACT"]}`, data);
  }

  static customizedContract(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${process.env.REACT_APP_BASE_HOST + process.env.REACT_APP_BASE_STAGE}${_routes_constants__WEBPACK_IMPORTED_MODULE_3__["CUSTOMIZED_CONTRACT"]}`, data);
  }

  static authByToken(token) {
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers.global_token = token;
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${process.env.REACT_APP_BASE_STAGE}${_routes_constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_TOKEN"]}`, {}, _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"]);
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
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`${process.env.REACT_APP_BASE_STAGE}${_routes_constants__WEBPACK_IMPORTED_MODULE_3__["STEP1"]}`, data, _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"]);
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
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${process.env.REACT_APP_BASE_STAGE}${_routes_constants__WEBPACK_IMPORTED_MODULE_3__["STEP2"]}`, data, _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"]);
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
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${process.env.REACT_APP_BASE_STAGE}${_routes_constants__WEBPACK_IMPORTED_MODULE_3__["STEP3"]}`, data, _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"]);
  }

  static getContracts(token) {
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers.session_token = token;
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omit"])(_requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers, ["global_token"]);
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${process.env.REACT_APP_BASE_HOST}${process.env.REACT_APP_BASE_STAGE}${_routes_constants__WEBPACK_IMPORTED_MODULE_3__["CONTRACTS"]}`, _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"]);
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
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${process.env.REACT_APP_BASE_STAGE}${_routes_constants__WEBPACK_IMPORTED_MODULE_3__["STEP4"]}`, data, _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"]);
  } // cardChecker


  static cardChecker(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_routes_constants__WEBPACK_IMPORTED_MODULE_3__["CARD_CHECKER"]}`, data, _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["cardCheckerConfig"]);
  } // guaranteeAgreement


  static guaranteeAgreement(data, session_token) {
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers.session_token = session_token;
    _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omit"])(_requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"].headers, ["global_token"]);
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${process.env.REACT_APP_BASE_STAGE}${_routes_constants__WEBPACK_IMPORTED_MODULE_3__["GUARANTEE_AGREEMENT"]}`, data, _requestClient_axios__WEBPACK_IMPORTED_MODULE_0__["config"]);
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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/liadhorovitz/Desktop/SSR-different-web/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

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

/***/ "react-player/lib/players/YouTube":
/*!***************************************************!*\
  !*** external "react-player/lib/players/YouTube" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-player/lib/players/YouTube");

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
//# sourceMappingURL=index.js.map