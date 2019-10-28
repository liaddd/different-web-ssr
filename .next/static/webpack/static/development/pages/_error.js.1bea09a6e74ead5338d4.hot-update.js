webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fliadhorovitz%2FDesktop%2FSSR-different-web%2Fpages%2F_error.js!./":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fliadhorovitz%2FDesktop%2FSSR-different-web%2Fpages%2F_error.js ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var mod = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
          next.router.update("/_error", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./head */ "./pages/head.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/main.scss */ "./pages/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var styles = {
  "text-align": "center",
  margin: "100px "
};

function Error(_ref) {
  var statusCode = _ref.statusCode;
  return __jsx(_head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "404-page"
  }, __jsx("div", {
    lang: "he",
    dir: "rtl",
    className: "app"
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx("div", {
    style: styles
  }, statusCode ? __jsx("div", null, __jsx("h1", null, "\u05E2\u05DE\u05D5\u05D3 \u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD"), __jsx("h2", null, "\u05D4\u05E2\u05DE\u05D5\u05D3 \u05E9\u05D1\u05D9\u05E7\u05E9\u05EA \u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0.", __jsx("br", null), "\u05D9\u05EA\u05DB\u05DF \u05E9\u05E9\u05DE\u05D5 \u05D4\u05E9\u05EA\u05E0\u05D4, \u05DE\u05D9\u05E7\u05D5\u05DE\u05D5 \u05D4\u05D5\u05D6\u05D6 \u05D0\u05D5 \u05E9\u05D0\u05D9\u05E0\u05D5 \u05E7\u05D9\u05D9\u05DD."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("button", {
    className: "btn btn-blue btn-large"
  }, "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E8\u05D0\u05E9\u05D9"))) : "An error occurred on client"), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
}

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ 11:
/*!************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fliadhorovitz%2FDesktop%2FSSR-different-web%2Fpages%2F_error.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fliadhorovitz%2FDesktop%2FSSR-different-web%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fliadhorovitz%2FDesktop%2FSSR-different-web%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.1bea09a6e74ead5338d4.hot-update.js.map