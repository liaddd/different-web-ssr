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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
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

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3BOi");


/***/ }),

/***/ "3BOi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ErnG");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0tj1");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class PersonalInfoStepMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
      className: "personal-info-step-menu-block"
    }, __jsx("nav", {
      className: "personal-info-step-menu"
    }, __jsx("input", {
      type: "radio",
      className: "personal-info-step-input",
      id: "personal-info-step-input-1",
      checked: this.props.stepper.activeStep === 1,
      onChange: e => {
        e.preventDefault();
      }
    }), __jsx("label", {
      className: "personal-info-step-label",
      onClick: () => {
        if (this.props.stepper.step1.edit) {
          this.props.onSetStepper({
            activeStep: 1
          });
          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/personal-info", "/personal-info/1", {
            shallow: true
          });
        }
      }
    }), __jsx("input", {
      type: "radio",
      className: "personal-info-step-input",
      id: "personal-info-step-input-2",
      checked: this.props.stepper.activeStep === 2,
      onChange: e => {
        e.preventDefault();
      }
    }), __jsx("label", {
      className: "personal-info-step-label",
      onClick: () => {
        if (this.props.stepper.step2.edit) {
          this.props.onSetStepper({
            activeStep: 2
          });
          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/personal-info", "/personal-info/2", {
            shallow: true
          });
        }
      }
    }), __jsx("input", {
      type: "radio",
      className: "personal-info-step-input",
      id: "personal-info-step-input-3",
      checked: this.props.stepper.activeStep === 3,
      onChange: e => {
        e.preventDefault();
      }
    }), __jsx("label", {
      className: "personal-info-step-label",
      onClick: () => {
        if (this.props.stepper.step3.edit) {
          this.props.onSetStepper({
            activeStep: 3
          });
          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/personal-info", "/personal-info/3", {
            shallow: true
          });
        }
      }
    }), __jsx("input", {
      type: "radio",
      className: "personal-info-step-input",
      id: "personal-info-step-input-4",
      checked: this.props.stepper.activeStep === 4,
      onChange: e => {
        e.preventDefault();
      }
    }), __jsx("label", {
      className: "personal-info-step-label",
      onClick: () => {
        if (this.props.stepper.step4.edit) {
          this.props.onSetStepper({
            activeStep: 4
          });
          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/personal-info", "/personal-info/4", {
            shallow: true
          });
        }
      }
    }))));
  }

}

const mapStateToProps = state => {
  return {
    stepper: state.forms.stepper
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetStepper: action => {
      dispatch(Object(_actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_3__[/* stepper_toggle */ "c"])(action));
    },
    onSetUserData: action => {
      dispatch(_actions_users_users_actions__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].setUserData(action));
    }
  };
};

const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(PersonalInfoStepMenu);
/* harmony default export */ __webpack_exports__["default"] = (withConnect);

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

/***/ })

/******/ });