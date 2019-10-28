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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

/***/ "04c1":
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

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-resize-detector"
var external_react_resize_detector_ = __webpack_require__("sLq7");
var external_react_resize_detector_default = /*#__PURE__*/__webpack_require__.n(external_react_resize_detector_);

// EXTERNAL MODULE: ./components/SummaryBlock/SummaryBlock.scss
var SummaryBlock_SummaryBlock = __webpack_require__("OYHR");

// EXTERNAL MODULE: ./actions/forms/forms.actions.js
var forms_actions = __webpack_require__("0tj1");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/SummaryBlock/SummaryBlock.js

var __jsx = external_react_default.a.createElement;





class SummaryBlock_SummaryBlock_SummaryBlock extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "getDate", date => {
      let d = new Date(date);
      return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    });
  }

  render() {
    const {
      first_name,
      last_name,
      phone,
      id_number,
      birth_date,
      city,
      street,
      street_number,
      apartment_number,
      selected_tenant_user,
      price,
      entry_date,
      exit_date
    } = this.props.user;
    const startDate = entry_date && this.getDate(entry_date);
    const endDate = exit_date && this.getDate(exit_date);
    const fee = (price * 0.025).toFixed(0);
    if (this.props.SummaryHeaderTitle === void 0) throw new Error('SummaryHeaderTitle is required');
    if (this.props.SummaryHeaderSubTitle === void 0) throw new Error('SummaryHeaderSubTitle is required');
    return __jsx(external_react_["Fragment"], null, __jsx("section", {
      className: "summary-block"
    }, __jsx("header", {
      className: "summary-header"
    }, __jsx("div", {
      className: "summary-header-img"
    }), this.props.SummaryHeaderTitle ? __jsx("h2", {
      className: "summary-header-title"
    }, this.props.SummaryHeaderTitle) : null, this.props.SummaryHeaderSubTitle ? __jsx("div", {
      className: "summary-header-subtitle"
    }, this.props.SummaryHeaderSubTitle) : null), __jsx("div", {
      className: "summary-inner-content"
    }, __jsx("div", {
      className: "summary"
    }, __jsx("h2", {
      className: "summary-title"
    }, "\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD \u05E9\u05DC \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4"), __jsx("p", {
      className: "summary-content"
    }, __jsx("span", {
      className: "summary-text-name"
    }, "\u05D1\u05D8\u05D7\u05D5\u05DF \u05D1\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05DC"), __jsx("span", {
      className: "summary-text"
    }, __jsx("strong", null, first_name, " ", last_name))), __jsx("p", {
      className: "summary-content"
    }, __jsx("span", {
      className: "summary-text-name"
    }, "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF"), "\xA0", __jsx("span", {
      className: "summary-text"
    }, __jsx("strong", {
      dir: "ltr"
    }, phone))), __jsx("p", {
      className: "summary-content"
    }, __jsx("span", {
      className: "summary-text-name"
    }, "\u05DE\u05E1\u05E4\u05E8 \u05EA.\u05D6"), "\xA0", __jsx("span", {
      className: "summary-text"
    }, __jsx("strong", null, id_number)))), __jsx("div", {
      className: "summary"
    }, __jsx("h2", {
      className: "summary-title"
    }, "\u05E4\u05E8\u05D8\u05D9 \u05D4\u05E0\u05DB\u05E1 \u05DC\u05D4\u05E9\u05DB\u05E8\u05D4"), __jsx("p", {
      className: "summary-content"
    }, __jsx("span", {
      className: "summary-text-name"
    }, "\u05DC\u05DB\u05EA\u05D5\u05D1\u05EA:"), "\xA0", __jsx("span", {
      className: "summary-text"
    }, __jsx("strong", null, city, ", ", street, " ", street_number, " / ", apartment_number)))), __jsx("div", {
      className: "summary"
    }, __jsx("h2", {
      className: "summary-title"
    }, "\u05E4\u05E8\u05D8\u05D9 \u05D4\u05E9\u05D5\u05DB\u05E8 \u05E9\u05DC \u05D4\u05DE\u05E9\u05DB\u05D9\u05E8"), __jsx("div", null, selected_tenant_user && __jsx("div", {
      key: selected_tenant_user.id_number
    }, __jsx("p", {
      className: "summary-content"
    }, __jsx("span", {
      className: "summary-text-name"
    }, "\u05E9\u05DD \u05D4\u05E9\u05D5\u05DB\u05E8"), "\xA0", __jsx("span", {
      className: "summary-text"
    }, __jsx("strong", null, selected_tenant_user.first_name, " ", selected_tenant_user.last_name))), __jsx("p", {
      className: "summary-content"
    }, __jsx("span", {
      className: "summary-text-name"
    }, "\u05DE\u05E1\u05E4\u05E8 \u05EA.\u05D6."), "\xA0", __jsx("span", {
      className: "summary-text"
    }, __jsx("strong", null, selected_tenant_user.id_number))), __jsx("p", {
      className: "summary-content"
    }, __jsx("span", {
      className: "summary-text-name"
    }, "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF"), "\xA0", __jsx("span", {
      className: "summary-text"
    }, __jsx("strong", {
      dir: "ltr"
    }, selected_tenant_user.phone)))))), __jsx("div", {
      className: "summary"
    }, __jsx("h2", {
      className: "summary-title"
    }, "\u05E4\u05E8\u05D8\u05D9 \u05D4\u05E1\u05DB\u05DD \u05E9\u05DB\u05D9\u05E8\u05D5\u05EA"), __jsx("p", {
      className: "summary-content"
    }, __jsx("span", {
      className: "summary-text-name"
    }, "\u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D4\u05DE\u05D1\u05D5\u05E7\u05E9"), "\xA0", __jsx("span", {
      className: "summary-text"
    }, __jsx("strong", null, price))), __jsx("p", {
      className: "summary-content"
    }, __jsx("span", {
      className: "summary-text-name"
    }, "\u05D4\u05E1\u05DB\u05DD \u05D4\u05D4\u05D1\u05D8\u05D7\u05D4 \u05D9\u05DB\u05E0\u05E1 \u05DC\u05EA\u05D5\u05E7\u05E3 \u05DE\u05EA\u05D0\u05E8\u05D9\u05DA"), "\xA0", __jsx("span", {
      className: "summary-text"
    }, __jsx("strong", null, startDate)), "\xA0", __jsx("span", {
      className: "summary-text-name"
    }, "\u05E2\u05D3"), "\xA0", __jsx("span", {
      className: "summary-text"
    }, __jsx("strong", null, endDate))))), __jsx("footer", {
      className: "summary-footer"
    }, __jsx("p", {
      className: "monthly-rent"
    }, __jsx("span", {
      className: "monthly-rent-value"
    }, "2.5%"), " \u05DE\u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9"), __jsx("p", {
      className: "total-monthly"
    }, __jsx("span", {
      className: "total-monthly-cardment"
    }, __jsx("strong", null, "\u05E1\u05D4\u05F4\u05DB \u05EA\u05E9\u05DC\u05D5\u05DD \u05D7\u05D5\u05D3\u05E9\u05D9:"))), __jsx("p", {
      className: "total-monthly"
    }, __jsx("span", {
      className: "total-monthly-sum"
    }, __jsx("strong", null, fee)), "\xA0", __jsx("span", {
      className: "total-monthly-currency"
    }, __jsx("strong", null, "\u05E9\u05F4\u05D7"))))));
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
      dispatch(Object(forms_actions["c" /* stepper_toggle */])(action));
    }
  };
};

const withConnect = Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(SummaryBlock_SummaryBlock_SummaryBlock);
/* harmony default export */ var components_SummaryBlock_SummaryBlock = (withConnect);
// EXTERNAL MODULE: ./pages/card/CardBlock.js
var CardBlock = __webpack_require__("KQo5");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/Modal/Modal.scss
var Modal = __webpack_require__("8i0C");

// CONCATENATED MODULE: ./components/Modal/ModalInfo.js
var ModalInfo_jsx = external_react_default.a.createElement;





class ModalInfo_ModalInfo extends external_react_["Component"] {
  render() {
    return ModalInfo_jsx(external_react_["Fragment"], null, ModalInfo_jsx("div", {
      className: external_classnames_default()("modal-block modal-effect-slide")
    }, " ", ModalInfo_jsx("div", {
      className: "modal-overlay"
    }), ModalInfo_jsx("div", {
      className: "modal-content"
    }, ModalInfo_jsx("div", {
      className: "modal-header"
    }), ModalInfo_jsx("div", {
      className: "modal-inner-content"
    }, ModalInfo_jsx("div", {
      className: "modal-info-block"
    }, ModalInfo_jsx("h1", {
      className: "modal-info-title"
    }, "\u05D9\u05E9\u05E8\u05D0\u05DC \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9,"), ModalInfo_jsx("div", {
      className: "modal-info-subtitle"
    }, "\u05EA\u05D5\u05D3\u05D4 \u05E9\u05E8\u05DB\u05E9\u05EA \u05D0\u05E6\u05DC\u05E0\u05D5 \u05D0\u05EA ", ModalInfo_jsx("br", null), "\u05E9\u05D9\u05E8\u05D5\u05EA \u05D1\u05D8\u05D7\u05D5\u05DF \u05D1\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05E9\u05DC DiffeRent"), ModalInfo_jsx("div", {
      className: "modal-info-contacts"
    }, "\u05DC\u05DB\u05DC \u05E4\u05E0\u05D9\u05D9\u05D4 \u05D5\u05E9\u05D0\u05DC\u05D4 \u05D0\u05E0\u05D5 \u05DB\u05D0\u05DF \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA\u05DA,"), ModalInfo_jsx("div", {
      className: "modal-info-column"
    }, ModalInfo_jsx("div", {
      className: "modal-info-column-item"
    }, ModalInfo_jsx("h4", {
      className: "modal-info-column-title"
    }, "\u05DE\u05D9\u05D9\u05DC :"), ModalInfo_jsx("a", {
      href: "mailto:service@diffe-rent.co.il"
    }, "service@diffe-rent.co.il")), ModalInfo_jsx("div", {
      className: "modal-info-column-item"
    }, ModalInfo_jsx("h4", {
      className: "modal-info-column-title"
    }, "\u05D8\u05DC\u05E4\u05D5\u05DF :"), ModalInfo_jsx("a", {
      href: "tel:050-2192570"
    }, "050-2192570"))), ModalInfo_jsx("div", {
      className: "modal-info-contacts"
    }, "\u05E9\u05E2\u05D5\u05EA \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA: \u05D9\u05DE\u05D9\u05DD \u05D0'-\u05D4' \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 9:00-19:00."), ModalInfo_jsx(link_default.a, {
      href: "/personal-info",
      as: "/personal-info/1"
    }, ModalInfo_jsx("a", {
      className: "btn btn-blue btn-small"
    }, ModalInfo_jsx("div", {
      className: "btn-block"
    }, "+ \u05D4\u05D5\u05E1\u05E3 \u05D1\u05D8\u05D7\u05D5\u05DF \u05D1\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05DC\u05E0\u05DB\u05E1 \u05E0\u05D5\u05E1\u05E3"))), ModalInfo_jsx(link_default.a, {
      href: "/"
    }, ModalInfo_jsx("a", {
      className: "btn btn-white btn-small"
    }, ModalInfo_jsx("div", {
      className: "btn-block"
    }, "\u05D4\u05D1\u05E0\u05EA\u05D9"))))))));
  }

}

/* harmony default export */ var Modal_ModalInfo = (ModalInfo_ModalInfo);
// EXTERNAL MODULE: ./actions/common/common.actions.constants.js
var common_actions_constants = __webpack_require__("XOLt");

// EXTERNAL MODULE: ./pages/card/Card.scss
var card_Card = __webpack_require__("eoFo");

// CONCATENATED MODULE: ./pages/card/Card.js


var Card_jsx = external_react_default.a.createElement;









class Card_Card extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      checkedItem: 1,
      width: 0,
      height: 0
    });

    Object(defineProperty["a" /* default */])(this, "onResize", (width, height) => {
      this.setState(prevProps => {
        return Object(objectSpread["a" /* default */])({}, prevProps, {
          width,
          height
        });
      });
    });
  }

  render() {
    return Card_jsx(external_react_["Fragment"], null, Card_jsx(external_react_resize_detector_default.a, {
      handleWidth: true,
      handleHeight: true,
      onResize: this.onResize
    }, Card_jsx("div", {
      className: "card-page bg-image"
    }, Card_jsx("div", {
      className: "container"
    }, Card_jsx("div", {
      className: "card-menu-block"
    }, Card_jsx("nav", {
      className: "card-menu"
    }, Card_jsx("input", {
      type: "radio",
      className: "card-menu-input",
      id: "card-menu-input-1",
      checked: this.state.checkedItem === 1,
      onChange: e => {
        e.preventDefault();
      }
    }), Card_jsx("label", {
      className: "card-menu-label" // htmlFor="card-menu-input-1"
      ,
      onClick: () => {
        this.setState({
          checkedItem: 1
        });
      }
    }), Card_jsx("input", {
      type: "radio",
      className: "card-menu-input",
      id: "card-menu-input-2",
      checked: this.state.checkedItem === 2,
      onChange: e => {
        e.preventDefault();
      }
    }), Card_jsx("label", {
      className: "card-menu-label" // htmlFor="card-menu-input-2"
      ,
      onClick: () => {
        this.setState({
          checkedItem: 2
        });
      }
    }))), Card_jsx("div", {
      className: "arrow-right-block"
    }, Card_jsx(link_default.a, {
      href: "/personal-info",
      as: "/personal-info/4"
    }, Card_jsx("a", {
      className: "arrow-right-link"
    }, "\u05D7\u05D6\u05D5\u05E8"))), Card_jsx("div", {
      className: "card-page-block"
    }, common_actions_constants["a" /* MOBILE_VIEW_SIZE */] < this.state.width || this.state.checkedItem === 1 ? Card_jsx(components_SummaryBlock_SummaryBlock, {
      SummaryHeaderTitle: `אז מה היה לנו?`,
      SummaryHeaderSubTitle: `מעכשיו אתה יכול להיות שקט`
    }) : null, common_actions_constants["a" /* MOBILE_VIEW_SIZE */] < this.state.width || this.state.checkedItem === 2 ? Card_jsx(CardBlock["default"], null) : null)), Card_jsx(Modal_ModalInfo, null))));
  }

}

/* harmony default export */ var pages_card_Card = __webpack_exports__["default"] = (Card_Card);

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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("04c1");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

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

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

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

/***/ "OYHR":
/***/ (function(module, exports) {



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

/***/ "XOLt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RESET_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOBILE_VIEW_SIZE; });
// RESET_STORE is reset for logout
const RESET_STORE = "RESET_STORE"; //

const MOBILE_VIEW_SIZE = 767;

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

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

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

/***/ "eoFo":
/***/ (function(module, exports) {



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

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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