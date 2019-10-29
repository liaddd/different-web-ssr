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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IBju");


/***/ }),

/***/ "IBju":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_img_plus_icon_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sZTc");
/* harmony import */ var _public_img_plus_icon_white_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_img_plus_icon_white_svg__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class NewTenantBlock extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("form", {
      className: "personal-info-form-3 personal-info-form",
      id: "personal-info-form",
      noValidate: true
    }, __jsx("div", {
      className: "personal-info-form-title"
    }, __jsx("span", {
      className: "personal-info-form-title-text"
    }, "\u05D3\u05D9\u05D9\u05E8"), __jsx("span", {
      className: "personal-info-form-title-number"
    }, "1")), __jsx("div", {
      className: "personal-info-form-container form-container"
    }, __jsx("p", {
      className: "input-block-row"
    }, __jsx("label", {
      htmlFor: "input-personal-info-first-name",
      className: "input-label"
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "text",
      id: "input-personal-first-name",
      placeholder: "\xA0"
    }), __jsx("span", {
      className: "input-label-span"
    }, "*\u05E9\u05DD \u05D4\u05E4\u05E8\u05D8\u05D9"), __jsx("span", {
      className: "input-border"
    }), __jsx("span", {
      className: "personal-info-input-error span-error"
    }))), __jsx("p", {
      className: "input-block-row"
    }, __jsx("label", {
      htmlFor: "input-personal-info-last-name",
      className: "input-label"
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "text",
      id: "input-personal-info-last-name",
      placeholder: "\xA0"
    }), __jsx("span", {
      className: "input-label-span"
    }, "*\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05EA\u05D9"), __jsx("span", {
      className: "input-border"
    }), __jsx("span", {
      className: "personal-info-input-error span-error"
    }))), __jsx("p", {
      className: "input-block-row"
    }, __jsx("label", {
      htmlFor: "input-personal-info-id-number",
      className: "input-label"
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "number",
      id: "input-personal-info-id-number",
      placeholder: "\xA0"
    }), __jsx("span", {
      className: "input-label-span"
    }, "*\u05DE\u05E1\u05E4\u05E8 \u05EA.\u05D6"), __jsx("span", {
      className: "input-border"
    }), __jsx("span", {
      className: "personal-info-input-error span-error"
    }))), __jsx("p", {
      className: "input-block-row"
    }, __jsx("label", {
      htmlFor: "input-personal-info-phone-number",
      className: "input-label"
    }, __jsx("input", {
      className: "input-text input-text-grey",
      type: "tel",
      id: "input-personal-info-phone-number",
      placeholder: "\xA0"
    }), __jsx("span", {
      className: "input-label-span"
    }, "*\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF"), __jsx("span", {
      className: "input-border"
    }), __jsx("span", {
      className: "personal-info-input-error span-error"
    }))), __jsx("div", {
      className: "personal-info-add-block"
    }, __jsx("div", {
      className: "personal-info-add"
    }, __jsx("img", {
      className: "personal-info-add-icon",
      src: _public_img_plus_icon_white_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
      alt: ""
    }), "\u05D4\u05D5\u05E1\u05E3 \u05D3\u05D9\u05D9\u05E8 \u05D4\u05E9\u05D5\u05EA\u05E3 \u05DC\u05D3\u05D9\u05E8\u05D4 \u05D6\u05D5"))), __jsx("div", {
      className: "btn-block"
    }, __jsx("input", {
      className: "input-submit btn-small btn-blue btn-bold",
      id: "personal-info-submit",
      type: "submit",
      value: "\u05D1\u05D3\u05D5\u05E7"
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NewTenantBlock);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "sZTc":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjgiIGQ9Ik0xMiAxMkgyaDEwdjEwLTEwem0wIDBoMTAtMTBWMnYxMHoiLz4KPC9zdmc+Cg=="

/***/ })

/******/ });