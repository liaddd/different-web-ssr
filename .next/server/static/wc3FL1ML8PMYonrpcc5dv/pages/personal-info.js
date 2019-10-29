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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "/zW0":
/***/ (function(module, exports) {



/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

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

/***/ "1/UH":
/***/ (function(module, exports) {



/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jH/F");


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

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "4sMK":
/***/ (function(module, exports) {

module.exports = require("date-fns/locale/he");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "6C1A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("NNaO");
/* harmony import */ var _actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("0tj1");
/* harmony import */ var _utils_validate_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Ha/8");
/* harmony import */ var _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("sFnd");
/* harmony import */ var _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("ErnG");
/* harmony import */ var _actions_common_common_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("CMMb");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const DEFAULT_ERROR = "value isn't valid ";

class PersonalInfoStep1 extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "state", {
      first_name: null,
      last_name: null,
      id_number: null,
      phone: null,
      first_nameValidate: {
        error: void 0
      },
      last_nameValidate: {
        error: void 0
      },
      id_numberValidate: {
        error: void 0
      },
      phoneValidate: {
        error: void 0
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onSubmit", e => {
      e.preventDefault();
      let first_name = _utils_validate_index__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].validate.validate(_utils_validate_index__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].constants.InputStringRegex, this.state.first_name, DEFAULT_ERROR);

      if (first_name && first_name.error) {
        this.setState({
          first_nameValidate: {
            error: first_name.error
          }
        });
      } else {
        this.setState({
          first_nameValidate: {
            error: void 0
          }
        });
      }

      let last_name = _utils_validate_index__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].validate.validate(_utils_validate_index__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].constants.InputStringRegex, this.state.last_name, DEFAULT_ERROR);

      if (last_name && last_name.error) {
        this.setState({
          last_nameValidate: {
            error: last_name.error
          }
        });
      } else {
        this.setState({
          last_nameValidate: {
            error: void 0
          }
        });
      }

      let id_number = _utils_validate_index__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].validate.validate(_utils_validate_index__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].constants.IdNumberRegex, this.state.id_number, DEFAULT_ERROR);

      if (id_number && id_number.error) {
        this.setState({
          id_numberValidate: {
            error: id_number.error
          }
        });
      } else {
        this.setState({
          id_numberValidate: {
            error: void 0
          }
        });
      }

      let phone = _utils_validate_index__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].validate.validate(_utils_validate_index__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].constants.IsraelPhoneNumberRegex, this.state.phone, DEFAULT_ERROR);

      if (phone && phone.error) {
        this.setState({
          phoneValidate: {
            error: phone.error
          }
        });
      } else {
        this.setState({
          phoneValidate: {
            error: void 0
          }
        });
      }

      if (first_name.valid && last_name.valid && id_number.valid && phone.valid) {
        this.props.onSetUserData({
          showModal: true
        });
        _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].step1({
          flow_type: "EXIST_TENANT",
          id_number: this.state.id_number,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          birth_date: "19/01/1980"
          /* ,
          "landlord_phone": this.props.user.phone,
          "email": "template@template.com" */

        }, this.props.user.auth.session_token).then(data => {
          data.data.showModal = false;
          this.props.onSetUserData(data.data);
          this.props.onSetStepper({
            activeStep: 2,
            step1: {
              edit: true
            }
          });
          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/personal-info", "/personal-info/2", {
            shallow: true
          });
        }).catch(error => {
          if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(error, "response.data.errorCode") === "INVALID_ID") {
            this.setState({
              id_numberValidate: {
                error: "*ת.ז לא תקינה"
              }
            });
          }

          this.props.onSetUserData({
            showModal: false
          });

          if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(error, "response.data.errorCode") === "UNAUTHORIZED") {
            this.props.onLogout();
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
          }
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleChangeState", (e, value, type) => {
      e.preventDefault();
      this.setState({
        [type]: value
      });
    });
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    const {
      activeStep
    } = this.props.stepper;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        "personal-info-section": true,
        "personal-info-section-1": true,
        "personal-info-section-active": activeStep === _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_6__[/* STEPPER_STEP1 */ "c"]
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
      htmlFor: "input-personal-info-first-name",
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        "input-label": true,
        "input-not-empty": this.state.first_name && this.state.first_name.length > 0,
        "input-error": this.state.first_nameValidate.error !== void 0
      })
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "text",
      id: "input-personal-first-name",
      ref: input => {
        this.nameInput = input;
      },
      placeholder: "\xA0",
      onChange: e => this.handleChangeState(e, e.target.value, "first_name"),
      value: this.state.first_name ? this.state.first_name : ""
    }), __jsx("span", {
      className: "input-label-span"
    }, "*\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9"), __jsx("span", {
      className: "input-border"
    }), this.state.first_nameValidate.error !== void 0 && __jsx("span", {
      className: "personal-info-input-error span-error"
    }, "*\u05E9\u05DD \u05DC\u05D0 \u05E0\u05DB\u05D5\u05DF"))), __jsx("p", {
      className: "input-block-row"
    }, __jsx("label", {
      htmlFor: "input-personal-info-last-name",
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        "input-label": true,
        "input-not-empty": this.state.last_name && this.state.last_name.length > 0,
        "input-error": this.state.last_nameValidate.error !== void 0
      })
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "text",
      id: "input-personal-info-last-name",
      ref: input => {
        this.nameInput = input;
      },
      placeholder: "\xA0",
      onChange: e => this.handleChangeState(e, e.target.value, "last_name"),
      value: this.state.last_name ? this.state.last_name : ""
    }), __jsx("span", {
      className: "input-label-span"
    }, "*\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4"), __jsx("span", {
      className: "input-border"
    }), this.state.last_nameValidate.error !== void 0 && __jsx("span", {
      className: "personal-info-input-error span-error"
    }, "\u05E9\u05DD \u05DC\u05D0 \u05E0\u05DB\u05D5\u05DF"))), __jsx("p", {
      className: "input-block-row"
    }, __jsx("label", {
      htmlFor: "input-personal-info-id-number",
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        "input-label": true,
        "input-not-empty": this.state.id_number && this.state.id_number.length > 0,
        "input-error": this.state.id_numberValidate.error !== void 0
      })
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "number",
      id: "input-personal-info-id-number",
      ref: input => {
        this.nameInput = input;
      },
      placeholder: "\xA0",
      onChange: e => this.handleChangeState(e, e.target.value, "id_number"),
      value: this.state.id_number ? this.state.id_number : ""
    }), __jsx("span", {
      className: "input-label-span"
    }, "*\u05DE\u05E1\u05E4\u05E8 \u05EA.\u05D6"), __jsx("span", {
      className: "input-border"
    }), this.state.id_numberValidate.error !== void 0 && __jsx("span", {
      className: "personal-info-input-error span-error"
    }, "*\u05EA.\u05D6 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4"))), __jsx("p", {
      className: "input-block-row"
    }, __jsx("label", {
      htmlFor: "input-personal-info-phone-number",
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        "input-label": true,
        "input-not-empty": this.state.phone && this.state.phone.length > 0,
        "input-error": this.state.phoneValidate.error !== void 0
      })
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "tel",
      dir: "auto",
      style: {
        textAlign: "end"
      },
      id: "input-personal-info-phone-number",
      ref: input => {
        this.nameInput = input;
      },
      placeholder: "\xA0",
      onChange: e => this.handleChangeState(e, e.target.value, "phone"),
      value: this.state.phone ? this.state.phone : ""
    }), __jsx("span", {
      className: "input-label-span"
    }, "*\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF"), __jsx("span", {
      className: "input-border"
    }), this.state.phoneValidate.error !== void 0 && __jsx("span", {
      className: "personal-info-input-error span-error"
    }, "*\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF")))), __jsx("div", {
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
      dispatch(Object(_actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_7__[/* stepper */ "b"])(action));
    },
    onSetUserData: action => {
      dispatch(_actions_users_users_actions__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].setUserData(action));
    },
    onLogout: action => {
      dispatch(Object(_actions_common_common_actions__WEBPACK_IMPORTED_MODULE_11__[/* logout */ "a"])(action));
    }
  };
};

const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(PersonalInfoStep1);
/* harmony default export */ __webpack_exports__["default"] = (withConnect);

/***/ }),

/***/ "8i0C":
/***/ (function(module, exports) {



/***/ }),

/***/ "8x5e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-resize-detector"
var external_react_resize_detector_ = __webpack_require__("sLq7");
var external_react_resize_detector_default = /*#__PURE__*/__webpack_require__.n(external_react_resize_detector_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./utils/cookie.js
var cookie = __webpack_require__("cph9");

// EXTERNAL MODULE: ./utils/requestClient/requests.js + 2 modules
var requests = __webpack_require__("sFnd");

// EXTERNAL MODULE: ./components/Header/Header.scss
var Header_Header = __webpack_require__("1/UH");

// EXTERNAL MODULE: ./public/icons/chevron-down-icon.svg
var chevron_down_icon = __webpack_require__("vqfn");
var chevron_down_icon_default = /*#__PURE__*/__webpack_require__.n(chevron_down_icon);

// EXTERNAL MODULE: ./actions/header/header.actions.js
var header_actions = __webpack_require__("XH21");

// EXTERNAL MODULE: ./actions/users/users.actions.js
var users_actions = __webpack_require__("ErnG");

// EXTERNAL MODULE: ./actions/common/common.actions.js
var common_actions = __webpack_require__("CMMb");

// CONCATENATED MODULE: ./components/Account/Account.component.js
var __jsx = external_react_default.a.createElement;








class Account_component_Account extends external_react_["Component"] {
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
    return __jsx(external_react_["Fragment"], null, __jsx("div", {
      className: "drop-menu-block",
      ref: this.setWrapperRef
    }, __jsx("button", {
      className: "btn btn-white btn-medium",
      onClick: () => {
        this.props.onSetToggleMenu(!this.props.toggleMenu);
      }
    }, firsName, " ", lastName, __jsx("img", {
      src: chevron_down_icon_default.a,
      className: "icon-chevron-down",
      alt: ""
    })), this.props.toggleMenu ? __jsx("nav", {
      className: "drop-menu"
    }, __jsx(link_default.a, {
      href: "/signin"
    }, __jsx("a", {
      onClick: () => {
        this.props.onLogout();
        localStorage.clear();
      },
      className: "drop-menu-link"
    }, __jsx("span", {
      className: "icon icon-avatar"
    }), "\u05DE\u05E9\u05EA\u05DE\u05E9 \u05D7\u05D3\u05E9")), __jsx(link_default.a, {
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
      dispatch(header_actions["a" /* default */].accountMenuToggle(action));
    },
    setUserData: action => {
      dispatch(users_actions["a" /* default */].setUserData(action));
    },
    onLogout: action => {
      dispatch(Object(common_actions["a" /* logout */])(action));
    }
  };
};

/* harmony default export */ var Account_component = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(Account_component_Account));
// EXTERNAL MODULE: ./actions/forms/forms.actions.js
var forms_actions = __webpack_require__("0tj1");

// CONCATENATED MODULE: ./components/Header/Header.js



var Header_jsx = external_react_default.a.createElement;













 // MAIN_HEADER_CLASS is main header class

const MAIN_HEADER_CLASS = "main-header"; // ADDITIONAL_HEADER_CLASS detected scroll page for show static header

const ADDITIONAL_HEADER_CLASS = "scroll"; // DETECT_BROWSER_WITH detect browser with distance to detect show or hide toggleMenu inside header

const DETECT_BROWSER_WITH = 1024; // Header

class Header_Header_Header extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "state", {
      width: 0,
      height: 0,
      toggleButton: false
    });

    Object(defineProperty["a" /* default */])(this, "_unbindScroll", () => {
      window.removeEventListener("scroll", this._handleScroll);
    });

    Object(defineProperty["a" /* default */])(this, "_bindScroll", () => {
      // Use passive event listener if available
      let supportsPassive = false;

      try {
        const opts = define_property_default()({}, "passive", {
          get: () => {
            supportsPassive = true;
          }
        });

        window.addEventListener("test", null, opts);
      } catch (e) {
        console.log("ERROR:", e);

        if (Object(external_lodash_["get"])(e, "response.data.errorCode") === "UNAUTHORIZED") {
          this.props.onLogout();
          router_default.a.push("/");
        }
      }

      window.addEventListener("scroll", this._handleScroll, supportsPassive ? {
        passive: true
      } : false);
    });

    Object(defineProperty["a" /* default */])(this, "_handleScroll", () => {
      const top = document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop; // Test < 1 since Safari's rebound effect scrolls past the top

      if (top < 1) {
        const className = `${MAIN_HEADER_CLASS}`;
        this._header.className = className;
      } else {
        const className = `${MAIN_HEADER_CLASS}  ${ADDITIONAL_HEADER_CLASS}`;
        this._header.className = className;
      }
    });

    Object(defineProperty["a" /* default */])(this, "onResize", (width, height) => {
      this.setState(prevProps => {
        return Object(objectSpread["a" /* default */])({}, prevProps, {
          width,
          height
        });
      });
    });

    Object(defineProperty["a" /* default */])(this, "onClickToggleButton", e => {
      this.setState(prevState => {
        return Object(objectSpread["a" /* default */])({}, prevState, {
          toggleButton: !prevState.toggleButton
        });
      });
    });

    this._header = external_react_default.a.createRef();
  }

  componentWillUnmount() {
    this._unbindScroll();
  }

  componentDidMount() {
    this._bindScroll();

    this._handleScroll();

    const global_token = Object(cookie["a" /* getCookie */])("global_token");

    if (!this.props.userAuth && global_token) {
      requests["a" /* default */].authByToken(global_token).then(data => {
        this.props.onSetUserData(data.data);
      }).catch(err => {
        console.error("Error get User", err);
      });
    } // window.scrollTo(0, 0); //? scroll to top each time component is mounted.

  } // _unbindScroll is remove detection header block position


  render() {
    const activeLink = Object(external_lodash_["get"])(this.props, "router.pathname");
    return Header_jsx(external_react_["Fragment"], null, Header_jsx(external_react_resize_detector_default.a, {
      handleWidth: true,
      handleHeight: true,
      onResize: this.onResize
    }, Header_jsx("header", {
      className: "main-header",
      ref: ref => {
        this._header = ref;
      }
    }, Header_jsx("div", {
      className: "top-block-container"
    }, Header_jsx("div", {
      className: "block-toggle-menu"
    }, Header_jsx("button", {
      className: "toggle-menu",
      type: "button",
      onClick: e => this.onClickToggleButton(e)
    }, Header_jsx("span", null))), Header_jsx("div", {
      className: "block-logo"
    }, Header_jsx(link_default.a, {
      href: "/"
    }, Header_jsx("a", {
      className: "logo"
    }))), this.state.toggleButton || this.state.width > DETECT_BROWSER_WITH ? Header_jsx("nav", {
      className: "main-menu container flex"
    }, Header_jsx(link_default.a, {
      href: "/about-us"
    }, Header_jsx("a", {
      className: activeLink === "/about-us" ? "menu-link active" : "menu-link"
    }, "\u05D0\u05D5\u05D3\u05D5\u05EA\u05D9\u05E0\u05D5")), Header_jsx(link_default.a, {
      href: "/questions-and-answers"
    }, Header_jsx("a", {
      className: activeLink === "/questions-and-answers" ? "menu-link active" : "menu-link"
    }, " ", "\u05E9\u05D0\u05DC\u05D5\u05EA \u05D5\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA")), Header_jsx(link_default.a, {
      href: "/cabinet"
    }, Header_jsx("a", {
      className: activeLink === "/cabinet" ? "menu-link active" : "menu-link"
    }, "\u05D4\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D0\u05D9\u05E9\u05D9 \u05E9\u05DC\u05D9")), Header_jsx(link_default.a, {
      href: "/contact"
    }, Header_jsx("a", {
      className: activeLink === "/contact" ? "menu-link active" : "menu-link"
    }, "\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8")), Header_jsx("a", {
      href: "https://blog.diffe-rent.co.il",
      className: "menu-link"
    }, "\u05D4\u05D1\u05DC\u05D5\u05D2 \u05E9\u05DC\u05E0\u05D5")) : null, Header_jsx("div", {
      className: "block-link"
    }, this.props.userAuth ? Header_jsx(Account_component, null) : Header_jsx(link_default.a, {
      href: "/signin"
    }, Header_jsx("a", {
      className: "btn btn-white btn-medium"
    }, " \u05D0\u05E0\u05D9 \u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4")))))));
  }

}

const Header_mapStateToProps = state => {
  return {
    state,
    userAuth: state.user.auth,
    step: state.forms.stepper.activeStep
  };
};

const Header_mapDispatchToProps = dispatch => {
  return {
    onSetUserData: action => {
      dispatch(users_actions["a" /* default */].setUserData(action));
    },
    onSetStepper: action => {
      dispatch(Object(forms_actions["b" /* stepper */])(action));
    },
    onLogout: action => {
      dispatch(Object(common_actions["a" /* logout */])(action));
    }
  };
};

const withConnect = Object(external_react_redux_["connect"])(Header_mapStateToProps, Header_mapDispatchToProps)(Object(router_["withRouter"])(Header_Header_Header));
/* harmony default export */ var components_Header_Header = __webpack_exports__["a"] = (withConnect);

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

/***/ "DHy3":
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
/* harmony import */ var _CurrentTenantBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("kiNs");
/* harmony import */ var _actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0tj1");
/* harmony import */ var _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("NNaO");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("I/1N");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_8__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









class PersonalInfoStep3 extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "state", {
      activeRadioButton: 2
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onRadioButtonChanged", activeRadioButton => {
      this.setState({
        activeRadioButton
      });
    });
  }

  componentDidMount() {
    this.props.height && react_scroll__WEBPACK_IMPORTED_MODULE_8__["animateScroll"].scrollTo(this.props.height - this.props.height / 2);
  }

  render() {
    const {
      activeStep
    } = this.props.stepper;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        "personal-info-section": true,
        "personal-info-section-3": true,
        "personal-info-section-show": Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(this.props, "stepper.activeStep") === 3 ? this.props.stepper.mobileToggleStep3 : false,
        "personal-info-section-active": activeStep === _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_7__[/* STEPPER_STEP3 */ "e"]
      })
    }, __jsx("div", {
      className: "personal-info-toggle-block"
    }, __jsx("div", {
      className: "personal-info-toggle"
    }, __jsx("input", {
      type: "radio",
      id: "personal-info-tenant",
      checked: this.state.activeRadioButton === 2,
      onChange: e => e.preventDefault()
    }), __jsx("label", {
      onClick: e => this.onRadioButtonChanged(2)
    }, "\u05D3\u05D9\u05D9\u05E8 \u05E4\u05D5\u05D8\u05E0\u05E6\u05D9\u05D0\u05DC\u05D9", " "), __jsx("input", {
      type: "radio",
      id: "personal-info-new-tenant",
      checked: this.state.activeRadioButton === 1,
      onChange: e => e.preventDefault()
    }), __jsx("label", {
      onClick: e => this.onRadioButtonChanged(1)
    }, "\u05D3\u05D9\u05D9\u05E8 \u05E9\u05D2\u05E8 \u05D1\u05D3\u05D9\u05E8\u05D4 \u05DB\u05E8\u05D2\u05E2"))), __jsx(_CurrentTenantBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
      width: this.props.width,
      activeRadioButton: this.state.activeRadioButton,
      height: this.props.height
    })));
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
      dispatch(Object(_actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_6__[/* stepper */ "b"])(action));
    }
  };
};

const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(PersonalInfoStep3);
/* harmony default export */ __webpack_exports__["default"] = (withConnect);

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

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KCgP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
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

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KajC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOGGLE_ACCOUNT_MENU; });
/*
 * action types
 */
const TOGGLE_ACCOUNT_MENU = 'TOGGLE_ACCOUNT_MENU';
/* harmony default export */ __webpack_exports__["b"] = ({
  TOGGLE_ACCOUNT_MENU
});

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "MWhd":
/***/ (function(module, exports) {



/***/ }),

/***/ "NAfk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("I/1N");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ZTWx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns_locale_he__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4sMK");
/* harmony import */ var date_fns_locale_he__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_he__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ReactDatePicker_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("SZ74");
/* harmony import */ var _ReactDatePicker_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ReactDatePicker_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("0tj1");
/* harmony import */ var _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("NNaO");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("Ha/8");
/* harmony import */ var _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("sFnd");
/* harmony import */ var _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("ErnG");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _actions_common_common_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("CMMb");
/* harmony import */ var _PersonalInfo_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("XgNU");
/* harmony import */ var _PersonalInfo_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_PersonalInfo_scss__WEBPACK_IMPORTED_MODULE_17__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
















const DEFAULT_ERROR = "value isn't valid ";
const DEFAULT_DATE_FORMAT = "y M d";
const NOT_EMPTY_DATE_FORMAT = "y/M/d";
const MAX_PRICE = 7000;
const MIN_PRICE = 1000;
Object(react_datepicker__WEBPACK_IMPORTED_MODULE_7__["registerLocale"])("he", date_fns_locale_he__WEBPACK_IMPORTED_MODULE_8___default.a);

class PersonalInfoStep4 extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "state", {
      price: this.props.user.price || void 0,
      enterDate: Object(lodash__WEBPACK_IMPORTED_MODULE_15__["get"])(this.props, "user.entry_date") ? new Date(this.props.user.entry_date) : null,
      leaveDate: Object(lodash__WEBPACK_IMPORTED_MODULE_15__["get"])(this.props, "user.exit_date") ? new Date(this.props.user.exit_date) : null,
      priceValidate: {
        error: void 0
      },
      leaveDateValidate: {
        error: void 0
      },
      enterDateValidate: {
        error: void 0
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onChangeLeaveDate", date => {
      this.setState({
        leaveDate: date
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onChangeEnterDate", date => {
      this.setState({
        enterDate: date
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onSubmit", e => {
      e.preventDefault();
      let price = _utils_validate__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].validate.validate(_utils_validate__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].constants.InputStringRegex, this.state.price, DEFAULT_ERROR);

      if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.price) >= MAX_PRICE) {
        price.error = "שכר דירה חודשי מקסימלי: 7,000";
      }

      if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.price) <= MIN_PRICE) {
        price.error = "שכר דירה חודשי מינימלי: 1,000";
      }

      if (price && price.error) {
        this.setState({
          priceValidate: {
            error: price.error
          }
        });
      } else {
        this.setState({
          priceValidate: {
            error: void 0
          }
        });
      }

      let enterDate = _utils_validate__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].validate.validate(_utils_validate__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].constants.InputStringRegex, this.state.enterDate, DEFAULT_ERROR);

      if (enterDate && enterDate.error) {
        this.setState({
          enterDateValidate: {
            error: enterDate.error
          }
        });
      } else {
        this.setState({
          enterDateValidate: {
            error: void 0
          }
        });
      }

      let leaveDate = _utils_validate__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].validate.validate(_utils_validate__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].constants.InputStringRegex, this.state.leaveDate, DEFAULT_ERROR);

      if (leaveDate && leaveDate.error) {
        this.setState({
          leaveDateValidate: {
            error: leaveDate.error
          }
        });
      } else {
        this.setState({
          leaveDateValidate: {
            error: void 0
          }
        });
      }

      if (price.valid && enterDate.valid && leaveDate.valid && !price.error) {
        this.props.onSetUserData({
          showModal: true
        });
        _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].step4({
          property_id: this.props.user.id,
          price: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.price),
          property_type: 1,
          exit_date: this.state.leaveDate,
          entry_date: this.state.enterDate
        }, this.props.user.auth.session_token).then(data => {
          data.data.showModal = false;
          this.props.onSetUserData(data.data);
          this.props.onSetStepper({
            activeStep: 4,
            step4: {
              edit: true
            }
          }); // TODO: move route name to constant

          next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/card");
        }).catch(error => {
          console.error(error);
          this.props.onSetUserData({
            showModal: false
          });

          if (Object(lodash__WEBPACK_IMPORTED_MODULE_15__["get"])(error, "response.data.errorCode") === "UNAUTHORIZED") {
            this.props.onLogout();
            next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/");
          }
        });
      }
    });
  }

  componentDidMount() {
    this.props.height && react_scroll__WEBPACK_IMPORTED_MODULE_5__["animateScroll"].scrollTo(this.props.height - this.props.height / 2);
  }

  render() {
    const {
      activeStep
    } = this.props.stepper;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
        "personal-info-section": true,
        "personal-info-section-4": true,
        "personal-info-section-active": activeStep === _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_11__[/* STEPPER_STEP4 */ "f"]
      })
    }, __jsx("form", {
      className: "personal-info-form",
      id: "personal-info-form",
      noValidate: true,
      onSubmit: e => this.onSubmit(e)
    }, __jsx("div", {
      className: "personal-info-form-container form-container"
    }, __jsx("div", {
      className: "input-block-row width-max"
    }, __jsx("label", {
      htmlFor: "input-personal-info-city",
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
        "input-label": true,
        "input-not-empty": this.state.price,
        "input-error": this.state.priceValidate.error !== void 0
      })
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "number",
      id: "input-personal-info-city",
      placeholder: "\xA0",
      value: this.state.price,
      onChange: e => {
        this.setState({
          price: e.target.value
        });
      }
    }), __jsx("span", {
      className: "input-label-span"
    }, "\u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D1\u05D4\u05E1\u05DB\u05DD \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA"), __jsx("span", {
      className: "input-border"
    }), this.state.priceValidate.error !== void 0 && __jsx("span", {
      className: "personal-info-input-error span-error"
    }, this.state.priceValidate.error))), __jsx("div", {
      className: "input-block-row"
    }, __jsx("label", {
      htmlFor: "input-personal-info-house-number",
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
        "input-label": true,
        "input-not-empty": !!this.state.enterDate,
        "input-error": this.state.enterDateValidate.error !== void 0
      })
    }, __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, {
      selected: this.state.enterDate ? this.state.enterDate : null,
      onChange: date => this.onChangeEnterDate(date),
      className: "input-text input-text-grey input-date-picker",
      minDate: new Date(),
      locale: "he",
      dateFormat: this.state.enterDate ? NOT_EMPTY_DATE_FORMAT : DEFAULT_DATE_FORMAT
    }), __jsx("span", {
      className: "input-label-span-date"
    }, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05DB\u05E0\u05D9\u05E1\u05D4 \u05DC\u05D3\u05D9\u05E8\u05D4"), __jsx("span", {
      className: "input-border"
    }), this.state.enterDateValidate.error !== void 0 && __jsx("span", {
      className: "personal-info-input-error span-error"
    }, "require"))), __jsx("div", {
      className: "input-block-row"
    }, __jsx("label", {
      htmlFor: "input-personal-info-street",
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
        "input-label": true,
        "input-not-empty": !!this.state.leaveDate,
        "input-error": this.state.leaveDateValidate.error !== void 0
      })
    }, __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, {
      selected: this.state.leaveDate ? this.state.leaveDate : null,
      onChange: this.onChangeLeaveDate,
      className: "input-text input-text-grey input-date-picker",
      minDate: this.state.enterDate ? this.state.enterDate : new Date(),
      locale: "he",
      dateFormat: this.state.leaveDate ? NOT_EMPTY_DATE_FORMAT : DEFAULT_DATE_FORMAT
    }), __jsx("span", {
      className: "input-label-span-date"
    }, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D9\u05E6\u05D9\u05D0\u05D4 \u05DE\u05D4\u05D3\u05D9\u05E8\u05D4"), __jsx("span", {
      className: "input-border"
    }), this.state.leaveDateValidate.error !== void 0 && __jsx("span", {
      className: "personal-info-input-error span-error"
    }, "require")))), __jsx("div", {
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
      dispatch(Object(_actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_10__[/* stepper */ "b"])(action));
    },
    onSetUserData: action => {
      dispatch(_actions_users_users_actions__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].setUserData(action));
    },
    onLogout: action => {
      dispatch(Object(_actions_common_common_actions__WEBPACK_IMPORTED_MODULE_16__[/* logout */ "a"])(action));
    }
  };
};

const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(PersonalInfoStep4);
/* harmony default export */ __webpack_exports__["default"] = (withConnect);

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

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "SZ74":
/***/ (function(module, exports) {



/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UHQH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8i0C");
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

/* harmony default export */ __webpack_exports__["a"] = (ModalLoader);

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "XH21":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export accountMenuToggle */
/* harmony import */ var _header_actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KajC");

/*
 * action creators
 */
// user authentication action

function accountMenuToggle(toggleMenu) {
  return {
    type: _header_actions_constants__WEBPACK_IMPORTED_MODULE_0__[/* TOGGLE_ACCOUNT_MENU */ "a"],
    payload: {
      toggleMenu
    }
  };
}
/* harmony default export */ __webpack_exports__["a"] = ({
  accountMenuToggle
});

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

/***/ "XgNU":
/***/ (function(module, exports) {



/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZTWx":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");
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

    if (false) {}

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

if (false) {}

var _default = Link;
exports.default = _default;

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

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dJwx":
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
/* harmony import */ var _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("NNaO");
/* harmony import */ var _actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0tj1");
/* harmony import */ var _actions_common_common_actions_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XOLt");
/* harmony import */ var _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ErnG");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










class PersonalInfoSummary extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "state", {
      mobileToggleStep3: false,
      buttonsCount: Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(this.props, "user.checked_users.length", 1)
    });
  }

  componentWillUpdate(nextProps, nextState) {
    const checkedUserProps = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(this.props, "user.checked_users.length", 1);
    const checkedUserNext = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(nextProps, "user.checked_users.length", 1);

    if (checkedUserProps !== checkedUserNext) {
      this.setState({
        buttonsCount: checkedUserNext
      });
    }
  }

  render() {
    const {
      activeStep,
      step1,
      step2,
      step3,
      step4
    } = this.props.stepper;
    const buttonsCount = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(this.props, "user.checked_users.length", 1);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("section", {
      className: "personal-summary-block"
    }, __jsx("header", {
      className: "personal-summary-header"
    }, __jsx("h2", {
      className: "personal-summary-header-title"
    }, "\u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4,", __jsx("br", null), "\u05DE\u05D2\u05D9\u05E2 \u05DC\u05DA \u05E9\u05E7\u05D8 \u05E0\u05E4\u05E9\u05D9."), __jsx("div", {
      className: "personal-summary-header-subtitle"
    }, "DiffeRent \u05DE\u05D1\u05D8\u05D9\u05D7\u05D4 \u05DC\u05DA", __jsx("br", null), "\u05D0\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4.")), __jsx("div", {
      className: "personal-summary-inner-content"
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        "personal-summary": true,
        "personal-summary-1": true,
        "personal-summary-active": activeStep === _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_4__[/* STEPPER_STEP1 */ "c"],
        "personal-summary-default": !step1.edit && activeStep !== _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_4__[/* STEPPER_STEP1 */ "c"],
        "personal-summary-edit": step1.edit && activeStep !== _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_4__[/* STEPPER_STEP1 */ "c"]
      })
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/personal-info",
      as: "/personal-info/1"
    }, __jsx("div", {
      className: "personal-summary-icon",
      onClick: () => {
        this.props.onSetStepper({
          activeStep: 1
        });
      }
    })), __jsx("h2", {
      className: "personal-summary-title"
    }, "\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD \u05E9\u05DC \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4"), __jsx("div", {
      className: "personal-summary-subtitle"
    }, "\u05DE\u05D4\u05DD \u05E4\u05E8\u05D8\u05D9\u05D5 \u05E9\u05DC \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4?"), __jsx("div", {
      className: "personal-summary-content"
    }, __jsx("p", {
      className: "personal-summary-text"
    }, __jsx("span", {
      className: "personal-summary-text-name"
    }, "\u05E9\u05DD:"), "\xA0", this.props.user.first_name, " ", this.props.user.last_name)), __jsx("div", {
      className: "personal-summary-content"
    }, __jsx("p", {
      className: "personal-summary-text"
    }, __jsx("span", {
      className: "personal-summary-text-name"
    }, "\u05EA.\u05D6:"), "\xA0", this.props.user.id_number)), __jsx("div", {
      className: "personal-summary-content"
    }, __jsx("p", {
      className: "personal-summary-text"
    }, __jsx("span", {
      className: "personal-summary-text-name"
    }, "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF:"), "\xA0", __jsx("strong", {
      dir: "ltr"
    }, this.props.user.phone)))), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        "personal-summary": true,
        "personal-summary-2": true,
        "personal-summary-active": activeStep === _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_4__[/* STEPPER_STEP2 */ "d"],
        "personal-summary-default": !step2.edit && activeStep !== _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_4__[/* STEPPER_STEP2 */ "d"],
        "personal-summary-edit": step2.edit && activeStep !== _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_4__[/* STEPPER_STEP2 */ "d"]
      })
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/personal-info",
      as: "/personal-info/2"
    }, __jsx("div", {
      className: "personal-summary-icon",
      onClick: () => {
        this.props.onSetStepper({
          activeStep: 2
        });
      }
    })), __jsx("h2", {
      className: "personal-summary-title"
    }, "\u05E4\u05E8\u05D8\u05D9 \u05D4\u05D3\u05D9\u05E8\u05D4"), __jsx("div", {
      className: "personal-summary-subtitle"
    }, "\u05DE\u05D4\u05DD \u05E4\u05E8\u05D8\u05D9 \u05D4\u05D3\u05D9\u05E8\u05D4", __jsx("br", null), "\u05E9\u05EA\u05E8\u05E6\u05D4 \u05DC\u05D4\u05E9\u05DB\u05D9\u05E8?"), __jsx("div", {
      className: "personal-summary-content"
    }, __jsx("p", {
      className: "personal-summary-text"
    }, __jsx("span", {
      className: "personal-summary-text-name"
    }, "\u05DB\u05EA\u05D5\u05D1\u05EA:"), "\xA0", this.props.user.street, " , ", this.props.user.street_number, " ", "\u05D3\u05D9\u05E8\u05D4 ", this.props.user.apartment_number, " ", this.props.user.city))), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        "personal-summary-with-nav": true,
        "personal-summary": true,
        "personal-summary-3": true,
        "personal-summary-active": activeStep === _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_4__[/* STEPPER_STEP3 */ "e"],
        "personal-summary-default": !step3.edit && activeStep !== _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_4__[/* STEPPER_STEP3 */ "e"],
        "personal-summary-edit": step3.edit && activeStep !== _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_4__[/* STEPPER_STEP3 */ "e"]
      })
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/personal-info",
      as: "/personal-info/3"
    }, __jsx("div", {
      className: "personal-summary-icon",
      onClick: () => {
        this.props.onSetStepper({
          activeStep: 3
        });
      }
    })), __jsx("h2", {
      className: "personal-summary-title"
    }, "\u05DE\u05D9\u05D4\u05D5 \u05D4\u05D3\u05D9\u05D9\u05E8 \u05E9\u05EA\u05E8\u05E6\u05D4 \u05E9\u05E0\u05D1\u05D3\u05D5\u05E7 \u05E2\u05D1\u05D5\u05E8\u05DA?"), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("personal-summary-nav-content", {
        "personal-summary-nav-content-hide": this.props.stepper.mobileToggleStep3 || this.props.width >= _actions_common_common_actions_constants__WEBPACK_IMPORTED_MODULE_6__[/* MOBILE_VIEW_SIZE */ "a"]
      })
    }, __jsx("div", {
      className: "personal-summary-subtitle"
    }, "\u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D3\u05D9\u05D9\u05E8 \u05E9\u05D2\u05E8 \u05D1\u05D3\u05D9\u05E8\u05D4 \u05DB\u05E8\u05D2\u05E2 \u05D0\u05D5 \u05D3\u05D9\u05D9\u05E8 \u05E4\u05D5\u05D8\u05E0\u05E6\u05D9\u05D0\u05DC\u05D9."), __jsx("div", {
      className: "personal-summary-subtitle"
    }, __jsx("strong", null, "DiffeRent \u05DE\u05D1\u05D8\u05D9\u05D7\u05D4 \u05E8\u05E7 \u05D0\u05EA \u05EA\u05E9\u05DC\u05D5\u05DE\u05D9 \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E9\u05DC \u05D4\u05D3\u05D9\u05D9\u05E8\u05D9\u05DD \u05E9\u05D0\u05D5\u05E9\u05E8\u05D4 \u05D1\u05D3\u05D9\u05E7\u05EA\u05DD \u05D5\u05E9\u05D9\u05D5\u05E4\u05D9\u05E2\u05D5 \u05D1\u05D4\u05E1\u05DB\u05DD \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA.")), __jsx("div", {
      className: "personal-summary-subtitle"
    }, "\u05D1\u05D7\u05E8\u05D5 \u05D0\u05EA \u05DE\u05E1\u05E4\u05E8 \u05D4\u05D3\u05D9\u05D9\u05E8\u05D9\u05DD \u05D4\u05DE\u05D5\u05E4\u05D9\u05E2\u05D9\u05DD", __jsx("br", null), "\u05D1\u05D4\u05E1\u05DB\u05DD \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA"), __jsx("nav", {
      className: "personal-summary-nav"
    }, __jsx("button", {
      type: "button",
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("personal-summary-button", {
        "personal-summary-button-checked": buttonsCount >= 1
      }),
      onClick: () => {
        this.props.onSetUserData({
          buttonsCount: 1
        });
        this.setState({
          buttonsCount: 1
        });
      }
    }, "1"), __jsx("button", {
      type: "button",
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("personal-summary-button", {
        "personal-summary-button-checked": buttonsCount >= 2
      }),
      onClick: () => {
        this.props.onSetUserData({
          buttonsCount: 2
        });
        this.setState({
          buttonsCount: 2
        });
      }
    }, "2"), __jsx("button", {
      type: "button",
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("personal-summary-button", {
        "personal-summary-button-checked": buttonsCount >= 3
      }),
      onClick: () => {
        this.props.onSetUserData({
          buttonsCount: 3
        });
        this.setState({
          buttonsCount: 3
        });
      }
    }, "3"), __jsx("button", {
      type: "button",
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("personal-summary-button", {
        "personal-summary-button-checked": buttonsCount >= 4
      }),
      onClick: () => {
        this.props.onSetUserData({
          buttonsCount: 4
        });
        this.setState({
          buttonsCount: 4
        });
      }
    }, "+4")), __jsx("div", {
      className: "btn-block"
    }, __jsx("button", {
      className: "btn-blue btn-small btn-bold",
      onClick: e => {
        this.props.onSetStepper({
          mobileToggleStep3: true
        });
      }
    }, "\u05D4\u05DE\u05E9\u05DA")))), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        "personal-summary-footer": true,
        "personal-summary": true,
        "personal-summary-4": true,
        "personal-summary-active": activeStep === _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_4__[/* STEPPER_STEP4 */ "f"],
        "personal-summary-default": activeStep !== _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_4__[/* STEPPER_STEP4 */ "f"],
        "personal-summary-edit": step4.edit && activeStep !== _actions_forms_forms_actions_constants__WEBPACK_IMPORTED_MODULE_4__[/* STEPPER_STEP4 */ "f"]
      })
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/personal-info",
      as: "/personal-info/4"
    }, __jsx("div", {
      className: "personal-summary-icon",
      onClick: () => {
        this.props.onSetStepper({
          activeStep: 4
        });
      }
    })), __jsx("h2", {
      className: "personal-summary-title"
    }, "\u05E4\u05E8\u05D8\u05D9 \u05D4\u05E1\u05DB\u05DD \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA"), __jsx("div", {
      className: "personal-summary-subtitle"
    }, "\u05DE\u05D4\u05DD \u05E4\u05E8\u05D8\u05D9 \u05D4\u05E1\u05DB\u05DD \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA", __jsx("br", null), "\u05D1\u05D9\u05E0\u05DA \u05DC\u05D1\u05D9\u05DF \u05D4\u05D3\u05D9\u05D9\u05E8?")))));
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
      dispatch(Object(_actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_5__[/* stepper_toggle */ "c"])(action));
    },
    onSetUserData: action => {
      dispatch(_actions_users_users_actions__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].setChangedUsersCount(action));
    }
  };
};

const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(PersonalInfoSummary);
/* harmony default export */ __webpack_exports__["default"] = (withConnect);

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const is_dynamic_1 = __webpack_require__("/jkW");

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

      if (false) {}

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
        if (false) {}

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

        if (false) {} // @ts-ignore pathname is always defined


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
    if (false) {}

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

      if (false) {}

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
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

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
    (self.__HAS_SPR || "production" !== 'production') && Component.__NEXT_SPR) {
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

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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
  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "g5IV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sLq7");
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_resize_detector__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PersonalInfo_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("XgNU");
/* harmony import */ var _PersonalInfo_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_PersonalInfo_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PersonalInfoStepMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("3BOi");
/* harmony import */ var _PersonalInfoSummary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("dJwx");
/* harmony import */ var _PersonalInfoStep1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("6C1A");
/* harmony import */ var _PersonalInfoStep2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("sIpn");
/* harmony import */ var _PersonalInfoStep3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("DHy3");
/* harmony import */ var _PersonalInfoStep4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("NAfk");
/* harmony import */ var _components_Modal_ModalLoader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("UHQH");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;














class PersonalInfo extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "state", {
      width: 0,
      height: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onResize", (width, height) => {
      this.setState(prevProps => {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevProps, {
          width,
          height
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "handleRenderPersonalPage", page => {
      switch (page) {
        case 1:
          return __jsx(_PersonalInfoStep1__WEBPACK_IMPORTED_MODULE_10__["default"], {
            width: this.state.width,
            height: this.state.height
          });

        case 2:
          return __jsx(_PersonalInfoStep2__WEBPACK_IMPORTED_MODULE_11__["default"], {
            width: this.state.width,
            height: this.state.height
          });

        case 3:
          return __jsx(_PersonalInfoStep3__WEBPACK_IMPORTED_MODULE_12__["default"], {
            width: this.state.width,
            height: this.state.height
          });

        case 4:
          return __jsx(_PersonalInfoStep4__WEBPACK_IMPORTED_MODULE_13__["default"], {
            width: this.state.width,
            height: this.state.height
          });

        default:
          return __jsx(_PersonalInfoStep1__WEBPACK_IMPORTED_MODULE_10__["default"], {
            width: this.state.width,
            height: this.state.height
          });
      }
    });
  }

  render() {
    let currentPath = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(this.props, "stepper.activeStep", 1);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx(react_resize_detector__WEBPACK_IMPORTED_MODULE_4___default.a, {
      handleWidth: true,
      handleHeight: true,
      onResize: this.onResize
    }, __jsx("div", {
      className: "personal-info-page bg-image"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "personal-info-page-block"
    }, __jsx(_PersonalInfoStepMenu__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_PersonalInfoSummary__WEBPACK_IMPORTED_MODULE_9__["default"], {
      width: this.state.width,
      height: this.state.height
    }), __jsx("section", {
      className: "personal-info-block"
    }, this.handleRenderPersonalPage(currentPath)))), __jsx(_components_Modal_ModalLoader__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
      show: this.props.user.showModal
    }))));
  }

}

const mapStateToProps = state => {
  return {
    user: state.user,
    stepper: state.forms.stepper
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(PersonalInfo));
/* harmony default export */ __webpack_exports__["default"] = (withConnect);

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

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

/***/ "jH/F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8x5e");
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KCgP");
/* harmony import */ var _PersonalInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("g5IV");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MWhd");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import initialize from "../../utils/initialize";






const PersonalInfoPage = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "DiffeRent"
  }, __jsx("div", {
    lang: "he",
    dir: "rtl",
    className: "app personal-info"
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), __jsx(_PersonalInfo__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
}; // PersonalInfoPage.getInitialProps = ctx => {
//   initialize(ctx);
// };


/* harmony default export */ __webpack_exports__["default"] = (PersonalInfoPage);

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kiNs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./pages/personal-info/PersonalInfo.scss
var PersonalInfo = __webpack_require__("XgNU");

// EXTERNAL MODULE: ./utils/validate/index.js + 2 modules
var validate = __webpack_require__("Ha/8");

// EXTERNAL MODULE: ./utils/requestClient/requests.js + 2 modules
var requests = __webpack_require__("sFnd");

// EXTERNAL MODULE: ./actions/forms/forms.actions.js
var forms_actions = __webpack_require__("0tj1");

// EXTERNAL MODULE: ./actions/users/users.actions.js
var users_actions = __webpack_require__("ErnG");

// EXTERNAL MODULE: ./components/Modal/Modal.scss
var Modal = __webpack_require__("8i0C");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./components/PriceForm/PriceForm.scss
var PriceForm = __webpack_require__("/zW0");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/Modal/ModalButtonsBlock.js

var __jsx = external_react_default.a.createElement;









class ModalButtonsBlock_ModalButtonsBlock extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      step4: false
    });

    Object(defineProperty["a" /* default */])(this, "userRender", (user, i) => {
      return __jsx("button", {
        type: "button",
        key: i,
        disabled: !user.exist_tenant_id,
        className: external_classnames_default()("buttons-block-button", {
          "buttons-block-button-active": this.state.idUser === user.id_number
        }),
        onClick: e => {
          this.setState({
            step4: true,
            idUser: user.id_number,
            selectedTentant: user
          });
        }
      }, user.last_name, " ", user.first_name);
    });
  }

  render() {
    return __jsx(external_react_["Fragment"], null, __jsx("div", {
      className: "buttons-block"
    }, __jsx("div", {
      className: "modal-title buttons-block-title buttons-block-lines"
    }, "\u05D0\u05D5"), __jsx("p", {
      className: "modal-text"
    }, __jsx("strong", null, "\u05D1\u05D7\u05E8 \u05D0\u05EA \u05D4\u05D3\u05D9\u05D9\u05E8 \u05D0\u05D9\u05EA\u05D5 \u05EA\u05E8\u05E6\u05D4 \u05DC\u05D7\u05EA\u05D5\u05DD \u05E2\u05DC \u05D4\u05E1\u05DB\u05DD \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA")), __jsx("nav", {
      className: "buttons-block-nav"
    }, this.props.users && this.props.users.map((user, i) => this.userRender(user, i))), __jsx("div", {
      className: "btn-block"
    }, __jsx(link_default.a, {
      href: "/personal-info",
      as: "/personal-info/4"
    }, __jsx("button", {
      disabled: !this.state.step4,
      className: external_classnames_default()("btn btn-small", {
        "btn-blue": this.state.step4,
        "btn-grey": !this.state.step4
      }),
      onClick: () => {
        if (this.state.step4) {
          if (this.state.selectedTentant) {
            this.props.onSetUserData({
              selected_tenant_user: this.state.selectedTentant
            });
          }

          this.props.onSetStepper({
            activeStep: 4,
            step3: {
              edit: true
            }
          });
        }
      }
    }, "\u05D4\u05DE\u05E9\u05DA \u05DC\u05E1\u05D9\u05D5\u05DD \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA")))));
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
      dispatch(Object(forms_actions["b" /* stepper */])(action));
    },
    onSetUserData: action => {
      dispatch(users_actions["a" /* default */].setUserData(action));
    }
  };
};

const withConnect = Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(ModalButtonsBlock_ModalButtonsBlock);
/* harmony default export */ var Modal_ModalButtonsBlock = (withConnect);
// CONCATENATED MODULE: ./components/Modal/ModalPersonalInfoStep2.js
var ModalPersonalInfoStep2_jsx = external_react_default.a.createElement;




class ModalPersonalInfoStep2_ModalPersonalInfoStep2 extends external_react_["Component"] {
  render() {
    return ModalPersonalInfoStep2_jsx(external_react_["Fragment"], null, ModalPersonalInfoStep2_jsx("div", {
      className: "modal-header"
    }, ModalPersonalInfoStep2_jsx("div", {
      className: this.props.showError ? "modal-user modal-user-icon-shield-x" : "modal-user modal-user-icon-shield-v"
    }), ModalPersonalInfoStep2_jsx("span", {
      className: "modal-close modal-close-icon",
      onClick: () => this.props.sendData()
    })), ModalPersonalInfoStep2_jsx("div", {
      className: "modal-inner-content"
    }, ModalPersonalInfoStep2_jsx("p", {
      className: "modal-text"
    }, this.props.showError ? ModalPersonalInfoStep2_jsx("strong", null, "\u05D1\u05D3\u05D9\u05E7\u05EA\u05E0\u05D5 \u05D4\u05E1\u05EA\u05D9\u05D9\u05DE\u05D4,", ModalPersonalInfoStep2_jsx("br", null), "DiffeRent \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC \u05DC\u05D4\u05D1\u05D8\u05D9\u05D7 \u05D0\u05EA \u05EA\u05E9\u05DC\u05D5\u05DE\u05D9 \u05D4\u05D3\u05D9\u05D9\u05E8 \u05E9\u05DC\u05DA.") : ModalPersonalInfoStep2_jsx("strong", null, "\u05D1\u05D3\u05D9\u05E7\u05EA\u05E0\u05D5 \u05D4\u05E1\u05EA\u05D9\u05D9\u05DE\u05D4,", ModalPersonalInfoStep2_jsx("br", null), "DiffeRent \u05EA\u05E9\u05DE\u05D7 \u05DC\u05D4\u05D1\u05D8\u05D9\u05D7 \u05D0\u05EA \u05EA\u05E9\u05DC\u05D5\u05DE\u05D9 \u05D4\u05D3\u05D9\u05D9\u05E8 \u05E9\u05DC\u05DA")), ModalPersonalInfoStep2_jsx("div", {
      className: "modal-btn-block"
    }, ModalPersonalInfoStep2_jsx("button", {
      className: "btn btn-white btn-small",
      onClick: () => this.props.sendData()
    }, "\u05DC\u05D1\u05D3\u05D9\u05E7\u05EA \u05D3\u05D9\u05D9\u05E8 \u05E0\u05D5\u05E1\u05E3")), ModalPersonalInfoStep2_jsx("p", {
      className: "modal-text"
    }, ModalPersonalInfoStep2_jsx("strong", null, "\u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D3\u05D5\u05E7 \u05E2\u05D3 5 \u05D3\u05D9\u05D9\u05E8\u05D9\u05DD")), !this.props.showError && ModalPersonalInfoStep2_jsx(Modal_ModalButtonsBlock, {
      users: this.props.users,
      sendData: this.props.sendData
    })));
  }

}

/* harmony default export */ var Modal_ModalPersonalInfoStep2 = (ModalPersonalInfoStep2_ModalPersonalInfoStep2);
// CONCATENATED MODULE: ./components/Modal/ModalPersonalInfo.js
var ModalPersonalInfo_jsx = external_react_default.a.createElement;


 // import ModalPersonalInfoStep1 from './ModalPersonalInfoStep1';



class ModalPersonalInfo_ModalPersonalInfo extends external_react_["Component"] {
  render() {
    return ModalPersonalInfo_jsx(external_react_["Fragment"], null, ModalPersonalInfo_jsx("div", {
      className: external_classnames_default()("modal-block modal-effect-slide", {
        "modal-show": this.props.show
      })
    }, " ", ModalPersonalInfo_jsx("div", {
      className: "modal-overlay"
    }), ModalPersonalInfo_jsx("div", {
      className: "modal-content modal-with-buttons"
    }, ModalPersonalInfo_jsx(Modal_ModalPersonalInfoStep2, {
      users: this.props.users,
      sendData: this.props.sendData,
      showError: this.props.showError
    }))));
  }

}

/* harmony default export */ var Modal_ModalPersonalInfo = (ModalPersonalInfo_ModalPersonalInfo);
// EXTERNAL MODULE: ./components/Modal/ModalLoader.js
var ModalLoader = __webpack_require__("UHQH");

// EXTERNAL MODULE: ./actions/common/common.actions.js
var common_actions = __webpack_require__("CMMb");

// CONCATENATED MODULE: ./pages/personal-info/CurrentTenantBlock.js


var CurrentTenantBlock_jsx = external_react_default.a.createElement;













const DEFAULT_ERROR = "value isn't valid ";
const DEFAULT_ERROR_ID = "*ת.ז לא תקינה";
const ERROR_RESPONSE = "אתה לא יכול לבדוק את עצמך";
const MAX_VALIDATE_TENANTS = 5;

class CurrentTenantBlock_CurrentTenantBlock extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      showModal: false,
      showModalError: false,
      checked_user: null,
      checkBox: false,
      declarationCheckBox: false,
      errorMessage: "",
      checked_users: this.props.user.checked_users
    });

    Object(defineProperty["a" /* default */])(this, "sendData", data => {
      if (data) {
        this.setState(Object(objectSpread["a" /* default */])({}, data));
      } else this.setState({
        showModal: false
      });
    });

    Object(defineProperty["a" /* default */])(this, "initiateTenant", (tenant, id) => {
      const number = id + 1;
      return CurrentTenantBlock_jsx(external_react_["Fragment"], {
        key: id
      }, CurrentTenantBlock_jsx("div", {
        className: "personal-info-form-title"
      }, CurrentTenantBlock_jsx("span", {
        className: "personal-info-form-title-text"
      }, "\u05D3\u05D9\u05D9\u05E8"), CurrentTenantBlock_jsx("span", {
        className: "personal-info-form-title-number"
      }, number)), CurrentTenantBlock_jsx("div", {
        className: "personal-info-form-container form-container"
      }, CurrentTenantBlock_jsx("p", {
        className: "input-block-row"
      }, CurrentTenantBlock_jsx("label", {
        htmlFor: "input-personal-info-first-name",
        className: external_classnames_default()("input-label", {
          "input-error": this.state.checked_users && this.state.checked_users[id] && this.state.checked_users[id].hasOwnProperty("first_nameValidate") && this.state.checked_users[id].first_nameValidate.hasOwnProperty("error") && this.state.checked_users[id].first_nameValidate.error !== void 0,
          "input-not-empty": this.state.checked_users[id] && this.state.checked_users[id].first_name && this.state.checked_users[id].first_name.length > 0
        })
      }, CurrentTenantBlock_jsx("input", {
        className: "input-text input-text-grey",
        type: "text",
        id: "input-personal-first-name",
        placeholder: "\xA0",
        value: this.state.checked_users[id].first_name ? this.state.checked_users[id].first_name : "",
        onChange: e => {
          let tenants = this.state.checked_users;
          tenants[id].first_name = e.target.value;
          this.setState({
            tenants
          });
        }
      }), CurrentTenantBlock_jsx("span", {
        className: "input-label-span"
      }, " *\u05E9\u05DD \u05D4\u05E4\u05E8\u05D8\u05D9"), CurrentTenantBlock_jsx("span", {
        className: "input-border"
      }), this.state.checked_users[id] && this.state.checked_users[id].hasOwnProperty("first_nameValidate") && this.state.checked_users[id].first_nameValidate.hasOwnProperty("error") && this.state.checked_users[id].first_nameValidate.error !== void 0 && CurrentTenantBlock_jsx("span", {
        className: "personal-info-input-error span-error"
      }, "error"))), CurrentTenantBlock_jsx("p", {
        className: "input-block-row"
      }, CurrentTenantBlock_jsx("label", {
        htmlFor: "input-personal-info-last-name",
        className: external_classnames_default()("input-label", {
          "input-error": this.state.checked_users[id] && this.state.checked_users[id].hasOwnProperty("last_nameValidate") && this.state.checked_users[id].last_nameValidate.hasOwnProperty("error") && this.state.checked_users[id].last_nameValidate.error !== void 0,
          "input-not-empty": this.state.checked_users[id] && this.state.checked_users[id].last_name && this.state.checked_users[id].last_name.length > 0
        })
      }, CurrentTenantBlock_jsx("input", {
        className: "input-text input-text-grey",
        type: "text",
        id: "input-personal-info-last-name",
        placeholder: "\xA0",
        value: this.state.checked_users[id].last_name ? this.state.checked_users[id].last_name : "",
        onChange: e => {
          let tenants = this.state.checked_users;
          tenants[id].last_name = e.target.value;
          this.setState({
            tenants
          });
        }
      }), CurrentTenantBlock_jsx("span", {
        className: "input-label-span"
      }, "*\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05EA\u05D9"), CurrentTenantBlock_jsx("span", {
        className: "input-border"
      }), this.state.checked_users[id] && this.state.checked_users[id].hasOwnProperty("last_nameValidate") && this.state.checked_users[id].last_nameValidate.hasOwnProperty("error") && this.state.checked_users[id].last_nameValidate.error !== void 0 && CurrentTenantBlock_jsx("span", {
        className: "personal-info-input-error span-error"
      }, "error"))), CurrentTenantBlock_jsx("p", {
        className: "input-block-row"
      }, CurrentTenantBlock_jsx("label", {
        htmlFor: "input-personal-info-id-number",
        className: external_classnames_default()("input-label", {
          "input-error": this.state.checked_users[id] && this.state.checked_users[id].hasOwnProperty("id_numberValidate") && this.state.checked_users[id].id_numberValidate.hasOwnProperty("error") && this.state.checked_users[id].id_numberValidate.error !== void 0,
          "input-not-empty": this.state.checked_users[id] && this.state.checked_users[id].id_number && this.state.checked_users[id].id_number.length > 0
        })
      }, CurrentTenantBlock_jsx("input", {
        className: "input-text input-text-grey",
        type: "number",
        id: "input-personal-info-id-number",
        placeholder: "\xA0",
        value: this.state.checked_users[id].id_number ? this.state.checked_users[id].id_number : "",
        onChange: e => {
          let tenants = this.state.checked_users;
          tenants[id].id_number = e.target.value;
          this.setState({
            tenants
          });
        }
      }), CurrentTenantBlock_jsx("span", {
        className: "input-label-span"
      }, "*\u05DE\u05E1\u05E4\u05E8 \u05EA.\u05D6"), CurrentTenantBlock_jsx("span", {
        className: "input-border"
      }), this.state.checked_users[id] && this.state.checked_users[id].hasOwnProperty("id_numberValidate") && this.state.checked_users[id].id_numberValidate.hasOwnProperty("error") && this.state.checked_users[id].id_numberValidate.error !== void 0 && CurrentTenantBlock_jsx("span", {
        className: "personal-info-input-error span-error"
      }, DEFAULT_ERROR_ID))), CurrentTenantBlock_jsx("p", {
        className: "input-block-row"
      }, CurrentTenantBlock_jsx("label", {
        htmlFor: "input-personal-info-phone-number",
        className: external_classnames_default()("input-label", {
          "input-error": this.state.checked_users[id] && this.state.checked_users[id].hasOwnProperty("phoneValidate") && this.state.checked_users[id].phoneValidate.hasOwnProperty("error") && this.state.checked_users[id].phoneValidate.error !== void 0,
          "input-not-empty": this.state.checked_users[id] && this.state.checked_users[id].phone && this.state.checked_users[id].phone.length > 0
        })
      }, CurrentTenantBlock_jsx("input", {
        className: "input-text input-text-grey",
        type: "tel",
        dir: "auto",
        style: {
          textAlign: "end"
        },
        id: "input-personal-info-phone-number",
        placeholder: "\xA0",
        value: this.state.checked_users[id].phone ? this.state.checked_users[id].phone : "",
        onChange: e => {
          let tenants = this.state.checked_users;
          tenants[id].phone = e.target.value;
          this.setState({
            tenants
          });
        }
      }), CurrentTenantBlock_jsx("span", {
        className: "input-label-span"
      }, "*\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF"), CurrentTenantBlock_jsx("span", {
        className: "input-border"
      }), this.state.checked_users[id] && this.state.checked_users[id].hasOwnProperty("phoneValidate") && this.state.checked_users[id].phoneValidate.hasOwnProperty("error") && this.state.checked_users[id].phoneValidate.error !== void 0 && CurrentTenantBlock_jsx("span", {
        className: "personal-info-input-error span-error"
      }, "error")))));
    });

    Object(defineProperty["a" /* default */])(this, "validateTenant", tenant => {
      let first_name = validate["a" /* default */].validate.validate(validate["a" /* default */].constants.InputStringRegex, tenant.first_name, DEFAULT_ERROR);

      if (first_name && first_name.error) {
        tenant.first_nameValidate.error = first_name.error;
      } else {
        if (Object(external_lodash_["get"])(tenant, "first_nameValidate.error")) {
          tenant.first_nameValidate.error = void 0;
        } else {
          tenant.first_nameValidate = {
            error: void 0
          };
        }
      }

      let last_name = validate["a" /* default */].validate.validate(validate["a" /* default */].constants.InputStringRegex, tenant.last_name, DEFAULT_ERROR);

      if (last_name && last_name.error) {
        tenant.last_nameValidate.error = last_name.error;
      } else {
        if (Object(external_lodash_["get"])(tenant, "last_nameValidate.error")) {
          tenant.last_nameValidate.error = void 0;
        } else {
          tenant.last_nameValidate = {
            error: void 0
          };
        }
      }

      let id_number = validate["a" /* default */].validate.validate(validate["a" /* default */].constants.IdNumberRegex, tenant.id_number, DEFAULT_ERROR_ID);

      if (id_number && id_number.error) {
        tenant.id_numberValidate.error = id_number.error;
      } else {
        if (Object(external_lodash_["get"])(tenant, "id_numberValidate.error")) {
          tenant.id_numberValidate.error = void 0;
        } else {
          tenant.id_numberValidate = {
            error: void 0
          };
        }
      }

      let phone = validate["a" /* default */].validate.validate(validate["a" /* default */].constants.IsraelPhoneNumberRegex, tenant.phone, DEFAULT_ERROR);

      if (phone && phone.error) {
        tenant.phoneValidate.error = phone.error;
      } else {
        if (Object(external_lodash_["get"])(tenant, "phoneValidate.error")) {
          tenant.phoneValidate.error = void 0;
        } else {
          tenant.phoneValidate = {
            error: void 0
          };
        }
      }

      if (tenant.property_id === null) {
        tenant.property_id = this.props.user.id;
      }

      return tenant;
    });

    Object(defineProperty["a" /* default */])(this, "onSubmit", e => {
      let validateForm = [];
      let validateFormToString = [];
      e.preventDefault();
      let tenants = this.state.checked_users;
      const validatedTenants = tenants.map(tenant => {
        return this.validateTenant(tenant);
      });
      this.setState({
        tenants: validatedTenants
      });
      let users = [];

      for (let i = 0, length = tenants.length - 1; i <= length; i++) {
        if (tenants[i].first_nameValidate.error !== void 0 || tenants[i].last_nameValidate.error !== void 0 || tenants[i].id_numberValidate.error !== void 0 || tenants[i].phoneValidate.error !== void 0) {
          validateForm[i] = false;
        } else {
          let phone = tenants[i].phone;

          if (tenants[i].phone[0] === "0") {
            phone = phone.replace(/^0/, "+972");
          }

          users.push({
            property_id: tenants[i].property_id,
            phone: phone,
            first_name: tenants[i].first_name,
            last_name: tenants[i].last_name,
            id_number: tenants[i].id_number
          });
          validateForm[i] = true;
        }

        validateFormToString[i] = true;
      }

      if (validateFormToString.toString() === validateForm.toString()) {
        this.setState({
          loading: true
        }); //this.props.onSetUserData({showModal: true});

        requests["a" /* default */].step3(users, this.props.user.auth.session_token).then(data => {
          if (Object(external_lodash_["get"])(data, "data.credit")) {
            const resUsers = Object(external_lodash_["get"])(data, "data.checked_users", []);
            const result = resUsers.filter(user => user.exist_tenant_id); // TODO return only with exist_tenant_id

            this.setState({
              showModal: true,
              showModalError: false,
              loading: false,
              result,
              errorMessage: ""
            }); // this.props.onSetUserData({credit:data.data.credit, checked_users_step3:result, buttonsCount:result.length})
          } else {
            this.setState({
              showModalError: true,
              showModal: true,
              loading: false,
              errorMessage: "לא עבר בדיקה"
            });
          }
        }).catch(error => {
          let errorMessage = "";

          if (Object(external_lodash_["get"])(error, "response.data.errorCode") === "INVALID_ID") {
            errorMessage = DEFAULT_ERROR_ID;
          }

          if (Object(external_lodash_["get"])(error, "response.data.errorCode") === "BAD_DATA") {
            errorMessage = ERROR_RESPONSE;
          }

          if (Object(external_lodash_["get"])(error, "response.data.errorCode") === "CREDIT_SCORE_ERROR") {
            errorMessage = "לא עבר בדיקה";
          }

          if (Object(external_lodash_["get"])(error, 'response.data.errorCode') === "E164_NUMBER") {
            errorMessage = 'מספר טלפון לא תקין';
          } // this.props.onSetUserData({showModal: false});


          this.setState({
            showModal: true,
            showModalError: true,
            loading: false,
            errorMessage
          });

          if (Object(external_lodash_["get"])(error, "response.data.errorCode") === "UNAUTHORIZED") {
            this.props.onLogout();
            router_default.a.push("/");
          }
        });
      }
    });
  }

  render() {
    const checked_users = Object(external_lodash_["get"])(this.props, "user.checked_users", []);
    return CurrentTenantBlock_jsx(external_react_["Fragment"], null, this.state.showModal && this.state.result && CurrentTenantBlock_jsx(Modal_ModalPersonalInfo, {
      show: this.state.showModal,
      users: this.state.result,
      sendData: this.sendData,
      showError: this.state.showModalError
    }), CurrentTenantBlock_jsx(ModalLoader["a" /* default */], {
      show: this.state.loading
    }), CurrentTenantBlock_jsx("form", {
      className: "personal-info-form-3 personal-info-form",
      id: "personal-info-form",
      onSubmit: this.onSubmit,
      noValidate: true
    }, checked_users.map((tenant, i) => this.initiateTenant(tenant, i)), this.state.checked_users && this.state.checked_users.length < MAX_VALIDATE_TENANTS && CurrentTenantBlock_jsx("div", {
      className: "personal-info-add-block",
      onClick: () => {
        let tenants = this.state.checked_users;

        if (tenants.length < MAX_VALIDATE_TENANTS) {
          tenants.push({
            first_name: null,
            last_name: null,
            id_number: null,
            phone: null,
            property_id: this.props.user.id,
            first_nameValidate: {
              error: void 0
            },
            last_nameValidate: {
              error: void 0
            },
            id_numberValidate: {
              error: void 0
            },
            phoneValidate: {
              error: void 0
            }
          });
          this.setState({
            checked_users: tenants
          });
          this.props.onSetUserData({
            buttonsCount: tenants.length,
            checked_users: tenants
          });
        }
      }
    }, CurrentTenantBlock_jsx("div", {
      className: "personal-info-add"
    }, CurrentTenantBlock_jsx("img", {
      className: "personal-info-add-icon",
      src: "/img/plus-icon-white.svg",
      alt: ""
    }), "\u05D4\u05D0\u05DD \u05D9\u05E9 \u05D3\u05D9\u05D9\u05E8 \u05E0\u05D5\u05E1\u05E3 \u05D1\u05D4\u05E1\u05DB\u05DD \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05D0\u05D5\u05EA\u05D5 \u05EA\u05E8\u05E6\u05D4 \u05E9\u05E0\u05D1\u05D3\u05D5\u05E7?")), CurrentTenantBlock_jsx("div", {
      className: "personal-info-checkbox-block"
    }, this.props.activeRadioButton === 1 && CurrentTenantBlock_jsx("label", {
      className: "personal-info-label-checkbox",
      htmlFor: "personal-info-checkbox"
    }, CurrentTenantBlock_jsx("input", {
      className: "personal-info-input-checkbox input-checkbox",
      id: "personal-info-checkbox",
      checked: this.state.checkBox,
      onChange: e => {
        this.setState({
          checkBox: !this.state.checkBox
        });
      },
      type: "checkbox"
    }), "\u05D4\u05E6\u05D4\u05E8\u05EA\u05D9 \u05DC\u05D2\u05D1\u05D9 \u05D3\u05D9\u05D9\u05E8 \u05D6\u05D4: \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05D1\u05D2\u05D9\u05DF \u05D7\u05D5\u05D3\u05E9 \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05D5\u05DC\u05DD \u05D1\u05D6\u05DE\u05DF \u05D5\u05DC\u05D0 \u05D4\u05D9\u05D5 \u05DE\u05D0\u05D6 \u05E2\u05D9\u05DB\u05D5\u05D1\u05D9\u05DD \u05D5/\u05D0\u05D5 \u05D7\u05D5\u05E1\u05E8\u05D9\u05DD \u05D1\u05EA\u05E9\u05DC\u05D5\u05DD.")), CurrentTenantBlock_jsx("div", {
      className: "personal-info-checkbox-block"
    }, CurrentTenantBlock_jsx("label", {
      className: "personal-info-label-checkbox",
      htmlFor: "personal-info-checkbox"
    }, CurrentTenantBlock_jsx("input", {
      className: "personal-info-input-checkbox input-checkbox",
      id: "personal-info-checkbox",
      checked: this.state.declarationCheckBox,
      onChange: e => {
        this.setState({
          declarationCheckBox: !this.state.declarationCheckBox
        });
      },
      type: "checkbox"
    }), "\u05D4\u05E0\u05E0\u05D9 \u05DE\u05E6\u05D4\u05D9\u05E8 \u05DB\u05D9 \u05D0\u05E0\u05D9 \u05DE\u05D9\u05D9\u05D3\u05E2 \u05D0\u05EA \u05D4\u05E9\u05D5\u05DB\u05E8 \u05D1\u05D4\u05E2\u05D1\u05E8\u05EA \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DC\u05E6\u05D5\u05E8\u05DA \u05D1\u05D3\u05D9\u05E7\u05D4 \u05D5\u05E8\u05DB\u05D9\u05E9\u05EA \u05DE\u05D5\u05E6\u05E8 \u05D4\u05D1\u05D8\u05D7\u05EA \u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4")), CurrentTenantBlock_jsx("p", {
      style: {
        color: "#e7736d"
      }
    }, this.state.errorMessage), CurrentTenantBlock_jsx("div", {
      className: "btn-block"
    }, CurrentTenantBlock_jsx("input", {
      className: this.state.declarationCheckBox && (this.state.checkBox || this.props.activeRadioButton !== 1) ? "input-submit btn-small btn-blue btn-bold" : "input-submit btn-small btn-grey btn-bold",
      id: "personal-info-submit",
      disabled: !this.state.checkBox && this.props.activeRadioButton === 1,
      type: "submit",
      value: "\u05D1\u05D3\u05D5\u05E7"
    }))));
  }

}

const CurrentTenantBlock_mapStateToProps = state => {
  return {
    user: state.user,
    stepper: state.forms.stepper
  };
};

const CurrentTenantBlock_mapDispatchToProps = dispatch => {
  return {
    onSetStepper: action => {
      dispatch(Object(forms_actions["b" /* stepper */])(action));
    },
    onSetUserData: action => {
      dispatch(users_actions["a" /* default */].setUserData(action));
    },
    onLogout: action => {
      dispatch(Object(common_actions["a" /* logout */])(action));
    }
  };
};

const CurrentTenantBlock_withConnect = Object(external_react_redux_["connect"])(CurrentTenantBlock_mapStateToProps, CurrentTenantBlock_mapDispatchToProps)(CurrentTenantBlock_CurrentTenantBlock);
/* harmony default export */ var personal_info_CurrentTenantBlock = __webpack_exports__["default"] = (CurrentTenantBlock_withConnect);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "sLq7":
/***/ (function(module, exports) {

module.exports = require("react-resize-detector");

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

/***/ "vqfn":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+NUQ2MzE3NUMtNDNFMi00QzI3LUFCNzAtQjRBRTlGMzAyMDI5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSJJY29ucy0vLWNoZXZyb25fZG93bl9vdXRsaW5lIiBzdHJva2U9IiMwMDdBRkYiIHN0cm9rZS13aWR0aD0iMC44Ij4KICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJTdHJva2UtNTAiIHBvaW50cz0iMiA2IDkgMTMgMTYgNiI+PC9wb2x5bGluZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

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