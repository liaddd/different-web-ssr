module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0tj1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return stepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return stepper_toggle; });
/* harmony import */ var _forms_actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("NNaO");

/*
 * action creators
 */
// stepper action

function stepper(stepper) {
  return {
    type: _forms_actions_constants__WEBPACK_IMPORTED_MODULE_0__[/* FORM_STEPPER_STEP1 */ "a"],
    payload: {
      stepper
    }
  };
} // MOBILE_TOGGLE_STEP_3 action

function stepper_toggle(stepper) {
  return {
    type: _forms_actions_constants__WEBPACK_IMPORTED_MODULE_0__[/* MOBILE_TOGGLE_STEP_3 */ "b"],
    payload: {
      stepper
    }
  };
}
/* harmony default export */ __webpack_exports__["a"] = ({
  stepper,
  stepper_toggle
});

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sIpn");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "CMMb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logout; });
/* harmony import */ var _common_actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XOLt");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cph9");


/*
 * action creators
 */
// user authentication action

function logout() {
  Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_1__[/* removeCookie */ "b"])("global_token");
  return {
    type: _common_actions_constants__WEBPACK_IMPORTED_MODULE_0__[/* RESET_STORE */ "b"]
  };
}
/* unused harmony default export */ var _unused_webpack_default_export = ({
  logout
});

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

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "NNaO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FORM_STEPPER_STEP1; });
/* unused harmony export FORM_STEPPER_STEP2 */
/* unused harmony export FORM_STEPPER_STEP3 */
/* unused harmony export FORM_STEPPER_STEP4 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MOBILE_TOGGLE_STEP_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return STEPPER_STEP1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STEPPER_STEP2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return STEPPER_STEP3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return STEPPER_STEP4; });
const FORM_STEPPER_STEP1 = 'FORM_STEPPER_STEP1';
const FORM_STEPPER_STEP2 = 'FORM_STEPPER_STEP2';
const FORM_STEPPER_STEP3 = 'FORM_STEPPER_STEP3';
const FORM_STEPPER_STEP4 = 'FORM_STEPPER_STEP4';
const MOBILE_TOGGLE_STEP_3 = 'MOBILE_TOGGLE_STEP_3';
const STEPPER_STEP1 = 1;
const STEPPER_STEP2 = 2;
const STEPPER_STEP3 = 3;
const STEPPER_STEP4 = 4;
/* harmony default export */ __webpack_exports__["g"] = ({
  FORM_STEPPER_STEP1,
  FORM_STEPPER_STEP2,
  FORM_STEPPER_STEP3,
  FORM_STEPPER_STEP4,
  MOBILE_TOGGLE_STEP_3
});

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "XOLt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RESET_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOBILE_VIEW_SIZE; });
// RESET_STORE is reset for logout
const RESET_STORE = "RESET_STORE"; //

const MOBILE_VIEW_SIZE = 767;

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

/***/ "sIpn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0tj1");
/* harmony import */ var _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ErnG");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("I/1N");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("NNaO");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Ha/8");
/* harmony import */ var _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("sFnd");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _actions_common_common_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("CMMb");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const DEFAULT_ERROR = "value isn't valid ";

class PersonalInfoStep2 extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "state", {
      city: "",
      street: "",
      street_no: "",
      apt_no: "",
      cityValidate: {
        error: void 0
      },
      streetValidate: {
        error: void 0
      },
      street_noValidate: {
        error: void 0
      },
      apt_noValidate: {
        error: void 0
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleChangeState", (e, value, type) => {
      e.preventDefault();
      this.setState({
        [type]: value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onSubmit", e => {
      e.preventDefault();
      let city = _utils_validate__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].validate.validate(_utils_validate__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].constants.InputStringRegex, this.state.city, DEFAULT_ERROR);

      if (city && city.error) {
        this.setState({
          cityValidate: {
            error: city.error
          }
        });
      } else {
        this.setState({
          cityValidate: {
            error: void 0
          }
        });
      }

      let street = _utils_validate__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].validate.validate(_utils_validate__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].constants.InputStringRegex, this.state.street, DEFAULT_ERROR);

      if (street && street.error) {
        this.setState({
          streetValidate: {
            error: street.error
          }
        });
      } else {
        this.setState({
          streetValidate: {
            error: void 0
          }
        });
      }

      let street_no = _utils_validate__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].validate.validate(_utils_validate__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].constants.InputNumberRegex, this.state.street_no, DEFAULT_ERROR);

      if (street_no && street_no.error) {
        this.setState({
          street_noValidate: {
            error: street_no.error
          }
        });
      } else {
        this.setState({
          street_noValidate: {
            error: void 0
          }
        });
      }

      let apt_no = _utils_validate__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].validate.validate(_utils_validate__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].constants.InputNumberRegex, this.state.apt_no, DEFAULT_ERROR);

      if (apt_no && apt_no.error) {
        this.setState({
          apt_noValidate: {
            error: apt_no.error
          }
        });
      } else {
        this.setState({
          apt_noValidate: {
            error: void 0
          }
        });
      }

      if (city.valid && street.valid && street_no.valid && apt_no.valid) {
        this.props.onSetUserData({
          showModal: true
        });
        _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].step2({
          flow_type: "EXIST_TENANT",
          city: this.state.city,
          street: this.state.street,
          street_no: this.state.street_no,
          apartment_number: this.state.apt_no
        }, this.props.user.auth.session_token).then(data => {
          data.data.showModal = false;
          data.data.errorMessageStep2 = "";
          this.props.onSetUserData(data.data);
          this.props.onSetStepper({
            activeStep: 3,
            step2: {
              edit: true
            }
          });
          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/personal-info", "/personal-info/3", {
            shallow: true
          });
        }).catch(error => {
          console.error(error);
          this.props.onSetUserData({
            showModal: false,
            errorMessageStep2: "כתובת לא תקינה"
          });

          if (Object(lodash__WEBPACK_IMPORTED_MODULE_11__["get"])(error, "response.data.errorCode") === "UNAUTHORIZED") {
            this.props.onLogout();
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
          }
        });
      }
    });
  }

  componentDidMount() {
    this.nameInput.focus();
    this.props.height && react_scroll__WEBPACK_IMPORTED_MODULE_7__["animateScroll"].scrollTo(this.props.height / 4);
  }

  render() {
    const {
      activeStep
    } = this.props.stepper;
    const errorMessageStep2 = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["get"])(this.props, "user.errorMessageStep2", "");
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "personal-info-section": true,
        "personal-info-section-2": true,
        "personal-info-section-active": activeStep === _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_8__[/* STEPPER_STEP2 */ "d"]
      })
    }, __jsx("form", {
      className: "personal-info-form",
      id: "personal-info-form",
      onSubmit: this.onSubmit
    }, __jsx("div", {
      className: "personal-info-form-container form-container"
    }, __jsx("p", {
      className: "input-block-row"
    }, __jsx("label", {
      htmlFor: "input-personal-info-city",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "input-label": true,
        "input-not-empty": this.state.city && this.state.city.length > 0,
        "input-error": this.state.cityValidate.error !== void 0
      })
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "text",
      id: "input-personal-city",
      ref: input => {
        this.nameInput = input;
      },
      placeholder: "\xA0",
      onChange: e => this.handleChangeState(e, e.target.value, "city"),
      value: this.state.city ? this.state.city : ""
    }), __jsx("span", {
      className: "input-label-span"
    }, "*\u05E2\u05D9\u05E8"), __jsx("span", {
      className: "input-border"
    }), this.state.cityValidate.error !== void 0 && __jsx("span", {
      className: "personal-info-input-error span-error"
    }, "required"))), __jsx("p", {
      className: "input-block-row"
    }, __jsx("label", {
      htmlFor: "input-personal-info-street",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "input-label": true,
        "input-not-empty": this.state.street && this.state.street.length > 0,
        "input-error": this.state.streetValidate.error !== void 0
      })
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "text",
      id: "input-personal-info-street",
      ref: input => {
        this.nameInput = input;
      },
      placeholder: "\xA0",
      onChange: e => this.handleChangeState(e, e.target.value, "street")
    }), __jsx("span", {
      className: "input-label-span"
    }, "*\u05E8\u05D7\u05D5\u05D1"), __jsx("span", {
      className: "input-border"
    }), this.state.streetValidate.error !== void 0 && __jsx("span", {
      className: "personal-info-input-error span-error"
    }, "required"))), __jsx("p", {
      className: "input-block-row"
    }, __jsx("label", {
      htmlFor: "input-personal-info-house-number",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "input-label": true,
        "input-not-empty": this.state.street_no && this.state.street_no.length > 0,
        "input-error": this.state.street_noValidate.error !== void 0
      })
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "text",
      id: "input-personal-info-house-number",
      ref: input => {
        this.nameInput = input;
      },
      placeholder: "\xA0",
      onChange: e => this.handleChangeState(e, e.target.value, "street_no")
    }), __jsx("span", {
      className: "input-label-span"
    }, "*\u05DE\u05E1\u05E4\u05E8 \u05D1\u05D9\u05EA"), __jsx("span", {
      className: "input-border"
    }), this.state.street_noValidate.error !== void 0 && __jsx("span", {
      className: "personal-info-input-error span-error"
    }, "required"))), __jsx("p", {
      className: "input-block-row"
    }, __jsx("label", {
      htmlFor: "input-personal-info-apartment-number",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "input-label": true,
        "input-not-empty": this.state.apt_no && this.state.apt_no.length > 0,
        "input-error": this.state.apt_noValidate.error !== void 0
      })
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "text",
      id: "input-personal-info-apartment-number",
      ref: input => {
        this.nameInput = input;
      },
      placeholder: "\xA0",
      onChange: e => this.handleChangeState(e, e.target.value, "apt_no")
    }), __jsx("span", {
      className: "input-label-span"
    }, "\u05DE\u05E1\u05E4\u05E8 \u05D3\u05D9\u05E8\u05D4"), __jsx("span", {
      className: "input-border"
    }), this.state.apt_noValidate.error !== void 0 && __jsx("span", {
      className: "personal-info-input-error span-error"
    }, "required")))), __jsx("p", {
      style: {
        color: "#e7736d",
        paddingRight: "20px"
      }
    }, errorMessageStep2), __jsx("div", {
      className: "btn-block"
    }, __jsx("input", {
      className: "input-submit btn-blue btn-small btn-bold",
      id: "personal-info-submit",
      type: "submit",
      value: "\u05D4\u05DE\u05E9\u05DA"
    })))));
  }

}

const mapStateToProps = state => {
  return {
    user: state.user,
    stepper: state.forms.stepper
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetStepper: action => {
      dispatch(Object(_actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_5__[/* stepper */ "b"])(action));
    },
    onSetUserData: action => {
      dispatch(_actions_users_users_actions__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].setUserData(action));
    },
    onLogout: action => {
      dispatch(Object(_actions_common_common_actions__WEBPACK_IMPORTED_MODULE_12__[/* logout */ "a"])(action));
    }
  };
};

const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(PersonalInfoStep2);
/* harmony default export */ __webpack_exports__["default"] = (withConnect);

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