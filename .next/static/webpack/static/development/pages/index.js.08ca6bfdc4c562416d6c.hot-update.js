webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-resize-detector */ "./node_modules/react-resize-detector/lib/esm/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/cookie */ "./utils/cookie.js");
/* harmony import */ var _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/requestClient/requests */ "./utils/requestClient/requests.js");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Header.scss */ "./components/Header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Account_Account_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../Account/Account.component */ "./components/Account/Account.component.js");
/* harmony import */ var _actions_common_common_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../actions/common/common.actions */ "./actions/common/common.actions.js");
/* harmony import */ var _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../actions/users/users.actions */ "./actions/users/users.actions.js");
/* harmony import */ var _actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../actions/forms/forms.actions */ "./actions/forms/forms.actions.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;













 // MAIN_HEADER_CLASS is main header class

var MAIN_HEADER_CLASS = "main-header"; // ADDITIONAL_HEADER_CLASS detected scroll page for show static header

var ADDITIONAL_HEADER_CLASS = "scroll"; // DETECT_BROWSER_WITH detect browser with distance to detect show or hide toggleMenu inside header

var DETECT_BROWSER_WITH = 1024; // Header

var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Header, _Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Header).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      width: 0,
      height: 0,
      toggleButton: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_unbindScroll", function () {
      window.removeEventListener("scroll", _this._handleScroll);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_bindScroll", function () {
      // Use passive event listener if available
      var supportsPassive = false;

      try {
        var opts = _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1___default()({}, "passive", {
          get: function get() {
            supportsPassive = true;
          }
        });

        window.addEventListener("test", null, opts);
      } catch (e) {
        console.log("ERROR:", e);

        if (Object(lodash__WEBPACK_IMPORTED_MODULE_14__["get"])(e, "response.data.errorCode") === "UNAUTHORIZED") {
          _this.props.onLogout();

          next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/");
        }
      }

      window.addEventListener("scroll", _this._handleScroll, supportsPassive ? {
        passive: true
      } : false);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_handleScroll", function () {
      var top = document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop; // Test < 1 since Safari's rebound effect scrolls past the top

      if (top < 1) {
        var className = "".concat(MAIN_HEADER_CLASS);
        _this._header.className = className;
      } else {
        var _className = "".concat(MAIN_HEADER_CLASS, "  ").concat(ADDITIONAL_HEADER_CLASS);

        _this._header.className = _className;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onResize", function (width, height) {
      _this.setState(function (prevProps) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevProps, {
          width: width,
          height: height
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onClickToggleButton", function (e) {
      _this.setState(function (prevState) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
          toggleButton: !prevState.toggleButton
        });
      });
    });

    _this._header = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Header, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._unbindScroll();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._bindScroll();

      this._handleScroll();

      var global_token = Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_15__["getCookie"])("global_token");

      if (!this.props.userAuth && global_token) {
        _utils_requestClient_requests__WEBPACK_IMPORTED_MODULE_16__["default"].authByToken(global_token).then(function (data) {
          _this2.props.onSetUserData(data.data);
        })["catch"](function (err) {
          console.error("Error get User", err);
        });
      } // window.scrollTo(0, 0); //? scroll to top each time component is mounted.

    } // _unbindScroll is remove detection header block position

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var activeLink = Object(lodash__WEBPACK_IMPORTED_MODULE_14__["get"])(this.props, "router.pathname");
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, __jsx(react_resize_detector__WEBPACK_IMPORTED_MODULE_13__["default"], {
        handleWidth: true,
        handleHeight: true,
        onResize: this.onResize
      }, __jsx("header", {
        className: "main-header",
        ref: function ref(_ref) {
          _this3._header = _ref;
        }
      }, __jsx("div", {
        className: "top-block-container"
      }, __jsx("div", {
        className: "block-toggle-menu"
      }, __jsx("button", {
        className: "toggle-menu",
        type: "button",
        onClick: function onClick(e) {
          return _this3.onClickToggleButton(e);
        }
      }, __jsx("span", null))), __jsx("div", {
        className: "block-logo"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/"
      }, __jsx("a", {
        className: "logo"
      }))), this.state.toggleButton || this.state.width > DETECT_BROWSER_WITH ? __jsx("nav", {
        className: "main-menu container flex"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/about-us"
      }, __jsx("a", {
        className: activeLink === "/about-us" ? "menu-link active" : "menu-link"
      }, "\u05D0\u05D5\u05D3\u05D5\u05EA\u05D9\u05E0\u05D5")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/questions-and-answers"
      }, __jsx("a", {
        className: activeLink === "/questions-and-answers" ? "menu-link active" : "menu-link"
      }, " ", "\u05E9\u05D0\u05DC\u05D5\u05EA \u05D5\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/cabinet"
      }, __jsx("a", {
        className: activeLink === "/cabinet" ? "menu-link active" : "menu-link"
      }, "\u05D4\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D0\u05D9\u05E9\u05D9 \u05E9\u05DC\u05D9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/contact"
      }, __jsx("a", {
        className: activeLink === "/contact" ? "menu-link active" : "menu-link"
      }, "\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8")), __jsx("a", {
        href: "https://blog.diffe-rent.co.il",
        className: "menu-link"
      }, "\u05D4\u05D1\u05DC\u05D5\u05D2 \u05E9\u05DC\u05E0\u05D5")) : null, __jsx("div", {
        className: "block-link"
      }, this.props.userAuth ? __jsx(_Account_Account_component__WEBPACK_IMPORTED_MODULE_18__["default"], null) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/signin"
      }, __jsx("a", {
        className: "btn btn-white btn-medium"
      }, " \u05D0\u05E0\u05D9 \u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4")))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state,
    userAuth: state.user.auth,
    step: state.forms.stepper.activeStep
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSetUserData: function onSetUserData(action) {
      dispatch(_actions_users_users_actions__WEBPACK_IMPORTED_MODULE_20__["default"].setUserData(action));
    },
    onSetStepper: function onSetStepper(action) {
      dispatch(Object(_actions_forms_forms_actions__WEBPACK_IMPORTED_MODULE_21__["stepper"])(action));
    },
    onLogout: function onLogout(action) {
      dispatch(Object(_actions_common_common_actions__WEBPACK_IMPORTED_MODULE_19__["logout"])(action));
    }
  };
};

var withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Header));
/* harmony default export */ __webpack_exports__["default"] = (withConnect);

/***/ })

})
//# sourceMappingURL=index.js.08ca6bfdc4c562416d6c.hot-update.js.map