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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "23Ao":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TX9i");


/***/ }),

/***/ "COQF":
/***/ (function(module, exports) {



/***/ }),

/***/ "TCh9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageHeader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("23Ao");
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

/* harmony default export */ __webpack_exports__["a"] = (PageHeader);

/***/ }),

/***/ "TX9i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AboutUs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("COQF");
/* harmony import */ var _AboutUs_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AboutUs_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TCh9");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AboutUs = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    PageHeaderTitle: `אודותינו`
  }), __jsx("div", {
    className: "section section-page-content"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "content"
  }, __jsx("div", {
    className: "column"
  }, __jsx("p", null, "DiffeRent \u05D4\u05D9\u05D0 \u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05EA \u05DE\u05E2\u05D5\u05DC\u05DE\u05D5\u05EA \u05D4\u05E4\u05E8\u05D5\u05E4\u05D8\u05E7 (Property Tech), \u05D4\u05DE\u05D1\u05D8\u05D9\u05D7\u05D4 \u05DC\u05DB\u05DD \u05D1\u05D8\u05D7\u05D5\u05DF \u05D5\u05E9\u05E7\u05D8 \u05E0\u05E4\u05E9\u05D9 \u05D1\u05DB\u05DC \u05D4\u05E0\u05D5\u05D2\u05E2 \u05DC\u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E9\u05DC\u05DB\u05DD. \u05D4\u05D9\u05D0 \u05E0\u05D5\u05DC\u05D3\u05D4 \u05DE\u05EA\u05D5\u05DA \u05D4\u05DE\u05E6\u05D9\u05D0\u05D5\u05EA \u05E9\u05DC \u05D1\u05E2\u05DC\u05D9 \u05D3\u05D9\u05E8\u05D5\u05EA \u05E8\u05D1\u05D9\u05DD \u05D0\u05E9\u05E8 \u05D2\u05D9\u05DC\u05D5 \u05E9\u05E9\u05DB\u05E8 \u05D4\u05D3\u05D9\u05E8\u05D4 \u05E8\u05D7\u05D5\u05E7 \u05DE\u05DC\u05D4\u05D9\u05D5\u05EA \u05D3\u05D1\u05E8 \u05DE\u05D5\u05D1\u05D8\u05D7. \u05DB\u05E9\u05DE\u05E9\u05D4\u05D5 \u05DE\u05E9\u05EA\u05D1\u05E9, \u05D4\u05D9\u05DB\u05D5\u05DC\u05EA \u05E9\u05DC \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05DC\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05DE\u05D2\u05D9\u05E2 \u05DC\u05D5 \u05D5\u05DC\u05E6\u05D0\u05EA \u05DE\u05DB\u05DA \u05DC\u05DC\u05D0 \u05E0\u05D6\u05E7 \u05D5\u05DC\u05DC\u05D0 \u05D1\u05D6\u05D1\u05D5\u05D6 \u05D6\u05DE\u05DF \u05DE\u05D9\u05D5\u05EA\u05E8, \u05E9\u05D5\u05D0\u05E4\u05EA \u05DC\u05D0\u05E4\u05E1. DiffeRent \u05DE\u05E9\u05E0\u05D4 \u05D0\u05EA \u05D4\u05D3\u05E8\u05DA \u05D1\u05D4 \u05D0\u05E0\u05E9\u05D9\u05DD \u05DE\u05E9\u05DB\u05D9\u05E8\u05D9\u05DD \u05D3\u05D9\u05E8\u05D5\u05EA \u05E2\u05F4\u05D9 \u05D4\u05E4\u05D9\u05DB\u05EA \u05D4\u05D7\u05D5\u05D5\u05D9\u05D4 \u05DC\u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05EA, \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D5\u05D4\u05DB\u05D9 \u05D7\u05E9\u05D5\u05D1, \u05D1\u05D8\u05D5\u05D7\u05D4. \u05DE\u05D4\u05D9\u05D5\u05DD \u05D4\u05DB\u05DC \u05E7\u05D5\u05E8\u05D4 \u05D1\u05DE\u05E7\u05D5\u05DD \u05D0\u05D7\u05D3, \u05D1\u05DC\u05D7\u05D9\u05E6\u05EA \u05DB\u05E4\u05EA\u05D5\u05E8, \u05D1\u05D6\u05DE\u05DF \u05D0\u05DE\u05EA \u05D5\u05D1\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA. \u05DC\u05D0 \u05E2\u05D5\u05D3 \u05D3\u05D0\u05D2\u05D4 \u05DE\u05EA\u05DE\u05D3\u05EA \u05D5\u05D1\u05D6\u05D1\u05D5\u05D6 \u05D6\u05DE\u05DF. \u05D1\u05E2\u05D1\u05D5\u05E8 \u05E8\u05E7 2.5% \u05DE\u05D3\u05DE\u05D9 \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD, \u05DE\u05E7\u05D1\u05DC \u05D1\u05E2\u05DC \u05D4\u05D3\u05D9\u05E8\u05D4 \u05D0\u05EA \u05D4\u05D1\u05D8\u05D7\u05EA \u05D3\u05DE\u05D9 \u05D4\u05E9\u05DB\u05D9\u05E8\u05D5\u05EA \u05E2\u05D3 \u05EA\u05D5\u05DD \u05D4\u05D7\u05D5\u05D6\u05D4, \u05E4\u05D9\u05E0\u05D5\u05D9 \u05D3\u05D9\u05D9\u05E8 \u05E1\u05E8\u05D1\u05DF \u05D5\u05DE\u05E6\u05D9\u05D0\u05EA \u05D3\u05D9\u05D9\u05E8 \u05D7\u05DC\u05D5\u05E4\u05D9 \u05D5\u05D4\u05DB\u05DC \u05D1\u05E4\u05E9\u05D8\u05D5\u05EA \u05E9\u05DC \u05DC\u05D7\u05D9\u05E6\u05EA \u05DB\u05E4\u05EA\u05D5\u05E8 - Diffe-rent.co.il."))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutUs);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });