module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hDUg");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "ErnG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setAuthenticationToken */
/* unused harmony export setUserData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setContractsData; });
/* unused harmony export setChangedUsersCount */
/* harmony import */ var _users_actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f7dn");

/*
 * action creators
 */
// user authentication action

function setAuthenticationToken(global_token) {
  return {
    type: _users_actions_constants__WEBPACK_IMPORTED_MODULE_0__[/* SET_USER_TOKEN */ "d"],
    payload: {
      global_token
    }
  };
} // user data action

function setUserData(data) {
  return {
    type: _users_actions_constants__WEBPACK_IMPORTED_MODULE_0__[/* SET_USER_DATA */ "c"],
    payload: {
      data
    }
  };
}
function setContractsData(data) {
  return {
    type: _users_actions_constants__WEBPACK_IMPORTED_MODULE_0__[/* SET_CONTRACTS_DATA */ "a"],
    payload: data
  };
}
function setChangedUsersCount(data) {
  return {
    type: _users_actions_constants__WEBPACK_IMPORTED_MODULE_0__[/* SET_SUMMARY_BUTTONS_COUNT */ "b"],
    payload: data
  };
}
/* harmony default export */ __webpack_exports__["a"] = ({
  setAuthenticationToken,
  setUserData,
  setContractsData,
  setChangedUsersCount
});

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "V/xW":
/***/ (function(module, exports) {



/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cph9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vmXh");
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

/***/ "f7dn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SET_AUTHENTICATION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_USER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_USER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_CONTRACTS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_SUMMARY_BUTTONS_COUNT; });
/*
 * action types
 */
const SET_AUTHENTICATION = "SET_AUTHENTICATION";
const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_TOKEN = "SET_USER_TOKEN";
const SET_CONTRACTS_DATA = "SET_CONTRACTS_DATA";
const SET_SUMMARY_BUTTONS_COUNT = "SET_SUMMARY_BUTTONS_COUNT";
/* harmony default export */ __webpack_exports__["e"] = ({
  SET_AUTHENTICATION,
  SET_USER_DATA,
  SET_CONTRACTS_DATA,
  SET_SUMMARY_BUTTONS_COUNT,
  SET_USER_TOKEN
});

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hDUg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Authorization_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("V/xW");
/* harmony import */ var _Authorization_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Authorization_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("sFnd");
/* harmony import */ var _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ErnG");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cph9");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










class AuthorizationStep2 extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "state", {
      seconds: 59,
      error: void 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onSubmitForm", e => {
      e.preventDefault();

      if (this.state.seconds === 0) {
        return;
      }

      const {
        code1,
        code2,
        code3,
        code4
      } = this;
      const code = `${code1.value}${code2.value}${code3.value}${code4.value}`;
      const requestData = {
        phone: this.props.user.phone,
        code,
        fcm_token: "someKey"
      };
      this.stopTimer();
      this.props.onSetUserData({
        showModal: true
      });
      _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].auth(requestData).then(data => {
        data.data.showModal = false;
        Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_9__[/* setCookie */ "c"])("global_token", data.data.auth.global_token);
        this.props.onSetUserData(data.data);

        if (this.props.user.showStepsAfterLogin) {
          next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/personal-info");
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/");
        }
      }).catch(err => {
        this.code1 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
        this.code2 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
        this.code3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
        this.code4 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();

        if (Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(err, "response.data.errorCode") === "BLOCKED_USER") {
          this.props.hendleBlockUser();
        }

        this.props.onSetUserData({
          showModal: false
        });
        this.setState({
          error: err.toString()
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onChange", e => {
      if (e.target.value) {
        this.onSubmitForm(e);
        this.code4.focus();
      }
    });

    this.code1 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.code2 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.code3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.code4 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  } // startTimer


  startTimer() {
    this.timer = setInterval(this.countDown, 1000);
  } // stopTimer


  stopTimer() {
    if (this.timer) clearInterval(this.timer);
  } // countDown


  countDown() {
    const {
      onSetUserData
    } = this.props; // if (this.state.seconds === 0) {
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
        return {
          seconds: 0
        };
      });
      onSetUserData({
        successMessage: null
      });
    }
  } // componentWillUnmount


  componentWillUnmount() {
    this.stopTimer();
  }

  get checkCode() {
    const {
      code1,
      code2,
      code3,
      code4
    } = this;
    return code1.value && code2.value && code3.value && code4.value;
  } // onSubmitForm is action to submit form


  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
      className: "authorization-block"
    }, __jsx("div", {
      className: "authorization-block-form"
    }, __jsx("div", {
      className: "authorization-block-title"
    }, __jsx("div", {
      className: "authorization-title"
    }, "\u05D4\u05D6\u05DF \u05D0\u05EA \u05D4\u05E7\u05D5\u05D3 \u05E9\u05E7\u05D9\u05D1\u05DC\u05EA"), __jsx("div", {
      className: "authorization-subtitle"
    }, "\u05D1SMS \u05DC\u05DE\u05E1\u05E4\u05E8 ", __jsx("span", {
      dir: "ltr"
    }, this.props.user.phone))), __jsx("form", {
      className: "authorization-form",
      id: "authorization-form",
      onSubmit: e => this.onSubmitForm(e),
      noValidate: true
    }, __jsx("div", {
      className: "authorization-block-input",
      dir: "ltr"
    }, __jsx("input", {
      className: "authorization-input-number input-number authorization-input",
      type: "number",
      autoFocus: true,
      ref: node => this.code1 = node,
      onChange: () => {
        this.code2.focus();
      }
    }), __jsx("input", {
      className: "authorization-input-number input-number authorization-input",
      type: "number",
      ref: node => this.code2 = node,
      onChange: () => {
        this.code3.focus();
      }
    }), __jsx("input", {
      className: "authorization-input-number input-number authorization-input",
      type: "number",
      ref: node => this.code3 = node,
      onChange: () => {
        this.code4.focus();
      }
    }), __jsx("input", {
      className: "authorization-input-number input-number authorization-input",
      type: "number",
      ref: node => this.code4 = node,
      onChange: e => this.onChange(e)
    }), this.state.error ? __jsx("span", {
      className: "authorization-input-error"
    }, "\u05E7\u05D5\u05D3 \u05E9\u05D2\u05D5\u05D9") : null), __jsx("div", {
      className: "authorization-block-description"
    }, "\u05DC\u05D0 \u05D4\u05D2\u05D9\u05E2? \u05EA\u05D5\u05DB\u05DC \u05DC\u05E9\u05DC\u05D5\u05D7 \u05E9\u05D5\u05D1 \u05D1\u05D7\u05DC\u05D5\u05E3 \u05D3\u05E7\u05D4"), __jsx("div", {
      className: "authorization-block-submit"
    }, __jsx("input", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        "authorization-timer-submit": true,
        "input-submit": true,
        "btn-grey": this.state.seconds === 0,
        "btn-blue": this.state.seconds !== 0,
        "btn-normal": true,
        "btn-bold": true
      }),
      id: "authorization-timer-submit",
      type: "submit",
      value: this.checkCode ? "שליחה" : `00:${this.state.seconds > 9 ? this.state.seconds : `0${this.state.seconds}`}`
    }))))));
  }

}

const mapStateToProps = state => ({
  user: state.user
});

function mapDispatchToProps(dispatch) {
  return {
    onSetUserData: action => {
      dispatch(_actions_users_users_actions__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].setUserData(action));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(AuthorizationStep2));

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "sFnd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./utils/requestClient/requestClient.axios.js

const config = {
  baseURL: `${"https://api.ballabaapis.com/"}`,
  headers: {
    "Content-Type": "application/json",
    device_id: `${"123123123"}`
  }
};
const cardCheckerConfig = {
  baseURL: `${"https://www.myofficeguy.com/"}`,
  headers: {
    "Content-Type": "application/json"
  }
};
/* harmony default export */ var requestClient_axios = (external_axios_default.a.create(config));
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// CONCATENATED MODULE: ./utils/requestClient/routes.constants.js
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
// CONCATENATED MODULE: ./utils/requestClient/requests.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return requests_Api; });



 // Api is axios wrapper class

class requests_Api {
  // login is first step for authorization
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,
  static login(data) {
    return requestClient_axios.post(`${"Dev"}/${ROUTE_LOGIN}`, data);
  } // auth is second step for authorization
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,
  // https://api.ballaba-it.com/{STAGE}/authenticate


  static auth(data) {
    return requestClient_axios.post(`${"Dev"}${ROUTE_AUTH}`, data);
  }

  static contactEmail(data) {
    return external_axios_default.a.post(`${"https://api.ballabaapis.com/" + "Dev"}${CONTACT}`, data);
  }

  static customizedContract(data) {
    return external_axios_default.a.post(`${"https://api.ballabaapis.com/" + "Dev"}${CUSTOMIZED_CONTRACT}`, data);
  }

  static authByToken(token) {
    config.headers.global_token = token;
    return external_axios_default.a.post(`${"Dev"}${AUTH_TOKEN}`, {}, config);
  } // step1 is firts step for stepper
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,


  static step1(data, session_token) {
    config.headers.session_token = session_token;
    config.headers = Object(external_lodash_["omit"])(config.headers, ["global_token"]);
    return external_axios_default.a.put(`${"Dev"}${STEP1}`, data, config);
  } // step2 is second step for stepper
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,


  static step2(data, session_token) {
    config.headers.session_token = session_token;
    config.headers = Object(external_lodash_["omit"])(config.headers, ["global_token"]);
    return external_axios_default.a.post(`${"Dev"}${STEP2}`, data, config);
  } // step3 is third step for stepper
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,


  static step3(data, session_token) {
    config.headers.session_token = session_token;
    config.headers = Object(external_lodash_["omit"])(config.headers, ["global_token"]);
    return external_axios_default.a.post(`${"Dev"}${STEP3}`, data, config);
  }

  static getContracts(token) {
    config.headers.session_token = token;
    config.headers = Object(external_lodash_["omit"])(config.headers, ["global_token"]);
    return external_axios_default.a.get(`${"https://api.ballabaapis.com/"}${"Dev"}${CONTRACTS}`, config);
  } // step4 is fourth step for stepper
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,2% משכר הדירה החודשי
  // https://api.ballaba-it.com/{STAGE}/properties


  static step4(data, session_token) {
    config.headers.session_token = session_token;
    config.headers = Object(external_lodash_["omit"])(config.headers, ["global_token"]);
    return external_axios_default.a.post(`${"Dev"}${STEP4}`, data, config);
  } // cardChecker


  static cardChecker(data) {
    return external_axios_default.a.post(`${CARD_CHECKER}`, data, cardCheckerConfig);
  } // guaranteeAgreement


  static guaranteeAgreement(data, session_token) {
    config.headers.session_token = session_token;
    config.headers = Object(external_lodash_["omit"])(config.headers, ["global_token"]);
    return external_axios_default.a.post(`${"Dev"}${GUARANTEE_AGREEMENT}`, data, config);
  }

}

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });