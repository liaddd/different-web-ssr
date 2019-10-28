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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KQo5");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "8i0C":
/***/ (function(module, exports) {



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

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KQo5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ha/8");
/* harmony import */ var _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("sFnd");
/* harmony import */ var _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ErnG");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Modal_ModalLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("UHQH");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const DEFAULT_ERROR = " אחד או יותר מהפרטים אינו נכון ";

class CardBlock extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "state", {
      formValid: false,
      cardNumber: null,
      cardExpireDate: null,
      cvv: null,
      name: null,
      idNumber: null,
      email: null,
      errorMessage: '',
      clickOnCheckbox: false,
      clickOnCheckbox2: false,
      cardNumberValidate: {
        error: void 0
      },
      cardExpireDateValidate: {
        error: void 0
      },
      cvvValidate: {
        error: void 0
      },
      nameValidate: {
        error: void 0
      },
      idNumberValidate: {
        error: void 0
      },
      emailValidate: {
        error: void 0
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onValidateForm", () => {
      let cardNumber = _utils_validate__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].validate.validate(_utils_validate__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].constants.CreditCardRegex, this.state.cardNumber, DEFAULT_ERROR);

      if (cardNumber && cardNumber.error) {
        this.setState({
          cardNumberValidate: {
            error: cardNumber.error
          }
        });
      } else {
        this.setState({
          cardNumberValidate: {
            error: void 0
          }
        });
      }

      let cardExpireDate = _utils_validate__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].validate.validate(_utils_validate__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].constants.InputStringRegex, this.state.cardExpireDate, DEFAULT_ERROR);

      if (cardExpireDate && cardExpireDate.error) {
        this.setState({
          cardExpireDateValidate: {
            error: cardExpireDate.error
          }
        });
      } else {
        this.setState({
          cardExpireDateValidate: {
            error: void 0
          }
        });
      }

      let cvv = _utils_validate__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].validate.validate(_utils_validate__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].constants.InputStringRegex, this.state.cvv, DEFAULT_ERROR);

      if (cvv && cvv.error) {
        this.setState({
          cvvValidate: {
            error: cvv.error
          }
        });
      } else {
        this.setState({
          cvvValidate: {
            error: void 0
          }
        });
      }

      let name = _utils_validate__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].validate.validate(_utils_validate__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].constants.InputStringRegex, this.state.name, DEFAULT_ERROR);

      if (name && name.error) {
        this.setState({
          nameValidate: {
            error: name.error
          }
        });
      } else {
        this.setState({
          nameValidate: {
            error: void 0
          }
        });
      }

      let idNumber = _utils_validate__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].validate.validate(_utils_validate__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].constants.IdNumberRegex, this.state.idNumber, DEFAULT_ERROR);

      if (idNumber && idNumber.error) {
        this.setState({
          idNumberValidate: {
            error: idNumber.error
          }
        });
      } else {
        this.setState({
          idNumberValidate: {
            error: void 0
          }
        });
      }

      let email = _utils_validate__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].validate.validate(_utils_validate__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].constants.EmailRegex, this.state.email, DEFAULT_ERROR);

      if (email && email.error) {
        this.setState({
          emailValidate: {
            error: email.error
          }
        });
      } else {
        this.setState({
          emailValidate: {
            error: void 0
          }
        });
      }

      return cardNumber.valid && cardExpireDate.valid && cvv.valid && name.valid && idNumber.valid && email.valid;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onSubmit", e => {
      e.preventDefault();

      if (this.onValidateForm() && this.state.clickOnCheckbox) {
        this.props.onSetUserData({
          formValid: false,
          showModal: true
        });
        const splitDate = this.state.cardExpireDate.split('/');
        _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].cardChecker({
          "CardNumber": this.state.cardNumber,
          "ExpirationMonth": splitDate[0],
          "ExpirationYear": splitDate[1],
          "CVV": this.state.cvv,
          "CitizenID": this.state.idNumber,
          "Credentials": {
            "CompanyID": `${"34087818"}`,
            "APIPublicKey": `${"HQDWdkU5aGZ3za8faQtleVaKmCOjJ8BtZk0wYV47ii3GlW6oXS"}`
          },
          "ResponseLanguage": "he"
        }, this.props.user.auth.session_token).then(data => {
          if (data.data.UserErrorMessage) {
            this.setState({
              errorMessage: data.data.UserErrorMessage
            });
          }

          return data;
        }).then(data => {
          const token = data.data.Data.SingleUseToken;
          const prepareData = {
            "property_id": this.props.user.id,
            "tenant_id": Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(this.props, 'user.selected_tenant_user.exist_tenant_id', ''),
            "is_agent": false,
            "card": {
              "user_id": this.props.user.id,
              "token": token,
              "card_holder_id": this.state.idNumber,
              "card_holder_name": this.state.name,
              "invoice_email": this.state.email
            }
          };
          _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].guaranteeAgreement(prepareData, this.props.user.auth.session_token).then(data => {
            data.data.showModal = false;
            this.props.onSetUserData(data.data);
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/info');
          }).catch(error => {
            let errorM = "אחד או יותר מפרטי האשראי שגוי";

            if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(error, 'response.data.errorMessage') !== 'tenant_id key is required') {
              errorM = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(error, 'response.data.errorMessage', '');
            }

            this.setState({
              errorMessage: errorM
            });
            this.props.onSetUserData({
              showModal: false
            });
          });
        }).catch(error => {
          this.setState({
            errorMessage: "אחד או יותר מפרטי האשראי שגוי"
          });
          console.error(error);
          this.props.onSetUserData({
            showModal: false
          });
        });
      } else {
        this.setState({
          formValid: false
        });
      }
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("section", {
      className: "card-block"
    }, __jsx("div", {
      className: "card-block-form"
    }, __jsx("form", {
      className: "card-form",
      id: "card-form",
      onSubmit: e => this.onSubmit(e),
      noValidate: true
    }, __jsx("div", {
      className: "card-content-column-top"
    }, __jsx("header", {
      className: "card-header"
    }, __jsx("h2", {
      className: "card-header-title"
    }, "\u05D0\u05DE\u05E6\u05E2\u05D9 \u05EA\u05E9\u05DC\u05D5\u05DD")), __jsx("div", {
      className: "card-form-container form-container"
    }, __jsx("p", {
      className: "input-block"
    }, __jsx("label", {
      htmlFor: "input-card-card-number",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "input-label": true,
        "input-not-empty": this.state.cardNumber && this.state.cardNumber.length > 0,
        "input-error": this.state.cardNumberValidate.error !== void 0
      })
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "tel",
      id: "input-card-card-number",
      placeholder: "\xA0",
      onChange: e => {
        this.setState({
          cardNumber: e.target.value
        });
      }
    }), __jsx("span", {
      className: "input-label-span"
    }, "\u05DE\u05E1\u05E4\u05E8 \u05DB\u05E8\u05D8\u05D9\u05E1 \u05D0\u05E9\u05E8\u05D0\u05D9"), __jsx("span", {
      className: "input-border"
    }), this.state.cardNumberValidate.error !== void 0 && __jsx("span", {
      className: "card-input-error span-error"
    }, "\u05DE\u05E1\u05E4\u05E8 \u05DB\u05E8\u05D8\u05D9\u05E1 \u05D0\u05E9\u05E8\u05D0\u05D9"))), __jsx("p", {
      className: "input-block-row"
    }, __jsx("label", {
      htmlFor: "input-card-validity",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "input-label": true,
        "input-not-empty": this.state.cardExpireDate && this.state.cardExpireDate.length > 0,
        "input-error": this.state.cardExpireDateValidate.error !== void 0
      })
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "text",
      id: "input-card-validity",
      placeholder: "\xA0",
      onChange: e => {
        this.setState({
          cardExpireDate: e.target.value
        });
      }
    }), __jsx("span", {
      className: "input-label-span"
    }, "\u05EA\u05D5\u05E7\u05E3 \u05D4\u05DB\u05E8\u05D8\u05D9\u05E1"), __jsx("span", {
      className: "input-border"
    }), this.state.cardExpireDateValidate.error !== void 0 && __jsx("span", {
      className: "card-input-error span-error"
    }, "require"))), __jsx("p", {
      className: "input-block-row cvv-key-block"
    }, __jsx("label", {
      htmlFor: "input-cvv",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "input-label": true,
        "input-not-empty": this.state.cvv && this.state.cvv.length > 0,
        "input-error": this.state.cvvValidate.error !== void 0
      })
    }, __jsx("input", {
      className: "input-email input-text-grey cvv-key-input",
      type: "password",
      id: "input-cvv",
      placeholder: "\xA0",
      onChange: e => {
        this.setState({
          cvv: e.target.value
        });
      }
    }), __jsx("span", {
      className: "input-label-span"
    }, "CVV"), __jsx("span", {
      className: "input-border"
    }), this.state.cvvValidate.error !== void 0 && __jsx("span", {
      className: "card-input-error span-error"
    }, "require"))), __jsx("p", {
      className: "input-block"
    }, __jsx("label", {
      htmlFor: "input-card-name",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "input-label": true,
        "input-not-empty": this.state.name && this.state.name.length > 0,
        "input-error": this.state.nameValidate.error !== void 0
      })
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "text",
      id: "input-card-name",
      placeholder: "\xA0",
      onChange: e => {
        this.setState({
          name: e.target.value
        });
      }
    }), __jsx("span", {
      className: "input-label-span"
    }, "\u05E9\u05DD \u05D1\u05E2\u05DC \u05D4\u05DB\u05E8\u05D8\u05D9\u05E1"), __jsx("span", {
      className: "input-border"
    }), this.state.nameValidate.error !== void 0 && __jsx("span", {
      className: "card-input-error span-error"
    }, "require"))), __jsx("p", {
      className: "input-block"
    }, __jsx("label", {
      htmlFor: "input-card-id-number",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "input-label": true,
        "input-not-empty": this.state.idNumber && this.state.idNumber.length > 0,
        "input-error": this.state.idNumberValidate.error !== void 0
      })
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "number",
      id: "input-card-id-number",
      placeholder: "\xA0",
      onChange: e => {
        this.setState({
          idNumber: e.target.value
        });
      }
    }), __jsx("span", {
      className: "input-label-span"
    }, "\u05DE\u05E1\u05E4\u05E8 \u05EA.\u05D6 \u05E9\u05DC \u05D1\u05E2\u05DC \u05D4\u05DB\u05E8\u05D8\u05D9\u05E1"), __jsx("span", {
      className: "input-border"
    }), this.state.idNumberValidate.error !== void 0 && __jsx("span", {
      className: "card-input-error span-error"
    }, "*\u05EA.\u05D6 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4"))), __jsx("p", {
      className: "input-block"
    }, __jsx("label", {
      htmlFor: "input-card-email",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "input-label": true,
        "input-not-empty": this.state.email && this.state.email.length > 0,
        "input-error": this.state.emailValidate.error !== void 0
      })
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "email",
      id: "input-card-email",
      placeholder: "\xA0",
      onChange: e => {
        this.setState({
          email: e.target.value
        });
      }
    }), __jsx("span", {
      className: "input-label-span"
    }, "\u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9 \u05DC\u05E9\u05DC\u05D9\u05D7\u05EA \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA"), __jsx("span", {
      className: "input-border"
    }), this.state.emailValidate.error !== void 0 && __jsx("span", {
      className: "card-input-error span-error"
    }, "require")))), __jsx("div", {
      className: "card-block-checkbox"
    }, __jsx("input", {
      className: "card-checkbox input-checkbox",
      id: "card-checkbox",
      type: "checkbox",
      checked: this.state.clickOnCheckbox,
      onChange: () => this.setState({
        clickOnCheckbox: !this.state.clickOnCheckbox
      })
    }), __jsx("label", {
      className: "card-checkbox-label",
      htmlFor: "card-checkbox"
    }, "\u05E7\u05E8\u05D0\u05EA\u05D9 \u05D5\u05D0\u05E0\u05D9 \u05DE\u05D0\u05E9\u05E8\u05EA \u05D0\u05EA", __jsx("a", {
      href: "https://diffe-rent.s3-eu-west-1.amazonaws.com/%D7%91%D7%98%D7%97%D7%95%D7%9F+%D7%91%D7%A9%D7%9B%D7%99%D7%A8%D7%95%D7%AA+-+DiffeRent.pdf",
      target: "_blank"
    }, " \u05EA\u05E0\u05D0\u05D9 \u05E9\u05D9\u05E8\u05D5\u05EA \u05D1\u05D8\u05D7\u05D5\u05DF \u05D1\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA "))), __jsx("br", null), __jsx("div", {
      className: "card-block-checkbox"
    }, __jsx("input", {
      className: "card-checkbox input-checkbox",
      id: "card-checkbox",
      type: "checkbox",
      checked: this.state.clickOnCheckbox2,
      onChange: () => this.setState({
        clickOnCheckbox2: !this.state.clickOnCheckbox2
      })
    }), __jsx("label", {
      className: "card-checkbox-label",
      htmlFor: "card-checkbox"
    }, "\u05D0\u05E0\u05D9 \u05DE\u05D0\u05E9\u05E8 \u05E7\u05D1\u05DC\u05EA \u05D3\u05D9\u05D5\u05D5\u05E8 \u05D5/\u05D0\u05D5 \u05D7\u05D5\u05DE\u05E8 \u05E4\u05E8\u05E1\u05D5\u05DE\u05D9"))), __jsx("br", null), __jsx("p", {
      style: {
        color: "#ff776f"
      }
    }, this.state.errorMessage), __jsx("div", {
      className: "card-footer card-content-column-bottom"
    }, __jsx("div", {
      className: "btn-block"
    }, __jsx("input", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "input-submit btn-small": true,
        " btn-blue": this.state.clickOnCheckbox,
        "btn-grey": !this.state.clickOnCheckbox
      }),
      id: "card-submit",
      type: "submit",
      value: "\u05D0\u05D9\u05E9\u05D5\u05E8"
    })))))), __jsx(_components_Modal_ModalLoader__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      show: this.props.user.showModal
    }));
  }

}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetUserData: action => {
      dispatch(_actions_users_users_actions__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].setUserData(action));
    }
  };
};

const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(CardBlock);
/* harmony default export */ __webpack_exports__["default"] = (withConnect);

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

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

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

/***/ })

/******/ });