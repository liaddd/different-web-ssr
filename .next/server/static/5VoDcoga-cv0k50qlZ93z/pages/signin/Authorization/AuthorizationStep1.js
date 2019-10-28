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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+xkb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Authorization_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("V/xW");
/* harmony import */ var _Authorization_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Authorization_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ErnG");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Ha/8");
/* harmony import */ var _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("sFnd");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








class AuthorizationStep1 extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "state", {
      asyncError: {
        errorText: "undefined request error",
        errorState: false
      },
      phone: {
        // please it will translate to hebrew if it need
        errorText: _utils_validate__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].constants.PhoneErrorText,
        errorState: false
      },
      checker: {
        // please it will translate to hebrew if it need
        errorText: _utils_validate__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].constants.CheckboxErrorText,
        errorState: false
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onSubmitForm", e => {
      e.preventDefault();
      this.validatePhone();
      this.validateChecker();

      if (this.validatePhone() && this.validateChecker()) {
        let phoneFormat = this.authorizationInput.value;
        phoneFormat = phoneFormat[0] === "0" ? phoneFormat.replace(/^0/, "+972") : phoneFormat;
        const requestData = {
          phone: phoneFormat,
          device_type: "web",
          device_name: "web",
          os_version: "1",
          is_agent: false
        };
        this.props.onSetUserData({
          showModal: true
        });
        _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].login(requestData).then(data => {
          if (this.state.asyncError.errorState) {
            this.setState(prevState => {
              return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevState, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevState.asyncError, {
                asyncError: {
                  errorText: "",
                  errorState: false
                }
              }));
            });
          }

          data.data.phone = phoneFormat;
          data.data.showModal = false;
          this.props.onSetUserData(data.data);
        }).catch(err => {
          this.props.onSetUserData({
            showModal: false
          });

          if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(err, "response.data.errorCode") === "BLOCKED_USER") {
            this.props.hendleBlockUser();
          }

          this.setState(prevState => {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevState, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevState.asyncError, {
              asyncError: {
                errorText: "מספר הטלפון שהוזן אינו תקין",
                errorState: true
              }
            }));
          });
        });
      }
    });

    this.authorizationInput = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    this.authorizationChecker = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
  }

  // validatePhone is short validate callback function
  validatePhone() {
    const {
      authorizationInput
    } = this;
    const inputValidation = _utils_validate__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].validate.validate(_utils_validate__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].constants.IsraelPhoneNumberRegex, authorizationInput.value, _utils_validate__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].constants.PhoneErrorValidation);

    if (inputValidation.error) {
      this.setState((prevState, props) => {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevState, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevState.phone, {
          phone: {
            errorText: inputValidation.error,
            errorState: true
          }
        }));
      });
    } else {
      this.setState(prevState => {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevState, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevState.phone, {
          phone: {
            errorText: inputValidation.error,
            errorState: false
          }
        }));
      });
    }

    return inputValidation.valid;
  } // validateChecker is short validate callback function


  validateChecker() {
    const {
      authorizationChecker
    } = this;
    const inputValidation = _utils_validate__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].validate.validate(_utils_validate__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].constants.InputCheckerRegex, authorizationChecker.checked, _utils_validate__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].constants.CheckboxErrorText);

    if (inputValidation.error) {
      this.setState((prevState, props) => {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevState, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevState.checker, {
          checker: {
            errorText: inputValidation.error,
            errorState: true
          }
        }));
      });
    } else {
      this.setState(prevState => {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevState, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevState.checker, {
          checker: {
            errorText: inputValidation.error,
            errorState: false
          }
        }));
      });
    }

    return inputValidation.valid;
  } // onSubmitForm is action to submit form


  // render
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("div", {
      className: "authorization-block"
    }, __jsx("div", {
      className: "authorization-block-form"
    }, __jsx("div", {
      className: "authorization-block-title"
    }, __jsx("div", {
      className: "authorization-title"
    }, "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA")), __jsx("form", {
      className: "authorization-form",
      id: "authorization-form",
      onSubmit: e => this.onSubmitForm(e),
      noValidate: true
    }, __jsx("div", {
      className: "authorization-block-input"
    }, __jsx("input", {
      className: "authorization-input-tel input-tel authorization-input",
      type: "tel",
      autoFocus: true,
      ref: node => this.authorizationInput = node,
      dir: "ltr"
    }), this.state.phone.errorState ? __jsx("span", {
      className: "authorization-input-error"
    }, this.state.phone.errorText) : null, this.state.asyncError.errorState ? __jsx("span", {
      className: "authorization-input-error"
    }, this.state.asyncError.errorText) : null, this.state.checker.errorState ? __jsx("span", {
      className: "authorization-input-error"
    }, this.state.checker.errorText) : null), __jsx("div", {
      className: "authorization-block-description"
    }, "\u05D0\u05E0\u05D5 \u05E0\u05E9\u05DC\u05D7 \u05D0\u05DC\u05D9\u05D9\u05DA \u05E7\u05D5\u05D3 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF"), __jsx("div", {
      className: "authorization-block-checkbox"
    }, __jsx("input", {
      className: "authorization-input-checkbox input-checkbox",
      id: "authorization-checkbox",
      type: "checkbox",
      ref: node => this.authorizationChecker = node
    }), __jsx("label", {
      className: "authorization-label-checkbox",
      htmlFor: "authorization-checkbox"
    }, "\u05D0\u05D9\u05E9\u05E8\u05EA\u05D9 \u05D0\u05EA\xA0", __jsx("a", {
      href: "https://diffe-rent.s3-eu-west-1.amazonaws.com/%D7%AA%D7%A7%D7%A0%D7%95%D7%9F-+DiffeRent.pdf",
      target: "_blank"
    }, "\u05D4\u05EA\u05E7\u05E0\u05D5\u05DF"))), __jsx("div", {
      className: "authorization-block-submit"
    }, __jsx("input", {
      className: "authorization-submit input-submit btn-blue btn-large",
      id: "authorization-submit",
      type: "submit",
      value: "\u05E9\u05DC\u05D9\u05D7\u05D4"
    }))))));
  }

}

const mapStateToProps = state => {
  return {
    userPhone: state.user.phone
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetUserData: action => {
      dispatch(_actions_users_users_actions__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].setUserData(action));
    }
  };
};

const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(AuthorizationStep1);
/* harmony default export */ __webpack_exports__["default"] = (withConnect);

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+xkb");


/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

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

/***/ "Ha/8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./utils/validate/validate.constants.js
// IsraelPhoneNumberRegex is simple mobile phone regexp
const IsraelPhoneNumberRegex = /(^\+?[1-9]\d{8,14}$|^0[0-9]\d{8,11})/; // InputCheckerRegex is simple mobile phone regexp

const InputCheckerRegex = /true$/; //

const InputStringRegex = /[\S]+/; //

const InputNumberRegex = /[\d]+/;
const IdNumberRegex = /^[\d]{9}$/; //

const CreditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/; //

const EmailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; // PhoneErrorText

const PhoneErrorText = "קוד שגוי";
const PhoneErrorValidation = "מספר טלפון לא תקין"; // CheckboxErrorText

const CheckboxErrorText = "נא לאשר את התקנון";
/* harmony default export */ var validate_constants = ({
  IsraelPhoneNumberRegex,
  InputCheckerRegex,
  InputStringRegex,
  InputNumberRegex,
  IdNumberRegex,
  CreditCardRegex,
  EmailRegex,
  PhoneErrorText,
  CheckboxErrorText,
  PhoneErrorValidation
});
// CONCATENATED MODULE: ./utils/validate/validate.js
// validate
// @param string regexp - regular expresson text
// @param string data - text for validation
// @param string error - error text
const validate = (regexp, data, error) => {
  const boolValidate = !!data && regexp.test(data);
  let response = {
    valid: boolValidate
  };
  if (!boolValidate) response.error = error;
  return response;
};
/* harmony default export */ var validate_validate = ({
  validate
});
// CONCATENATED MODULE: ./utils/validate/index.js


/* harmony default export */ var utils_validate = __webpack_exports__["a"] = ({
  constants: validate_constants,
  validate: validate_validate
});

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

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

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });