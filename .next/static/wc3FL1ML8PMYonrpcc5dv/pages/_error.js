(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var o=i(n("q1tI")),a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery;return n||i&&(void 0!==o&&o)}t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))}},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"1HF/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("Y0NT")}])},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),i=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};i(t,"__esModule",{value:!0});var a=o(n("q1tI")),c=o(n("Xuae")),u=n("lwAK"),s=n("FYa8"),l=n("/0+H");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=f;var h=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce(function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,i={};return function(o){if(o.key&&"number"!==typeof o.key&&0===o.key.indexOf(".$"))return!e.has(o.key)&&(e.add(o.key),!0);switch(o.type){case"title":case"base":if(t.has(o.type))return!1;t.add(o.type);break;case"meta":for(var a=0,c=h.length;a<c;a++){var u=h[a];if(o.props.hasOwnProperty(u))if("charSet"===u){if(n.has(u))return!1;n.add(u)}else{var s=o.props[u],l=i[u]||new r;if(l.has(s))return!1;l.add(s),i[u]=l}}}return!0}}()).reverse().map(function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})})}var v=c.default();function b(e){var t=e.children;return a.default.createElement(u.AmpStateContext.Consumer,null,function(e){return a.default.createElement(s.HeadManagerContext.Consumer,null,function(n){return a.default.createElement(v,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)})})}b.rewind=v.rewind,t.default=b},"8x5e":function(e,t,n){"use strict";var r=n("zrwo"),i=n("hfKm"),o=n.n(i),a=n("0iUn"),c=n("sLSF"),u=n("MI3g"),s=n("a7VT"),l=n("AT/M"),f=n("Tit0"),d=n("vYYK"),h=n("q1tI"),p=n.n(h),v=n("YFqc"),b=n.n(v),m=n("nOHt"),g=n.n(m),y=n("/MKj"),M=n("yUt2"),w=n("LvDl"),D=n("cph9"),N=n("sFnd"),I=(n("1/UH"),n("vqfn")),j=n.n(I),O=n("XH21"),A=n("ErnG"),_=n("CMMb"),k=p.a.createElement,T=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).setWrapperRef=n.setWrapperRef.bind(Object(l.a)(n)),n.handleClickOutside=n.handleClickOutside.bind(Object(l.a)(n)),n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.props.onSetToggleMenu(!1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.firsName,r=t.lastName;return k(h.Fragment,null,k("div",{className:"drop-menu-block",ref:this.setWrapperRef},k("button",{className:"btn btn-white btn-medium",onClick:function(){e.props.onSetToggleMenu(!e.props.toggleMenu)}},n," ",r,k("img",{src:j.a,className:"icon-chevron-down",alt:""})),this.props.toggleMenu?k("nav",{className:"drop-menu"},k(b.a,{href:"/signin"},k("a",{onClick:function(){e.props.onLogout(),localStorage.clear()},className:"drop-menu-link"},k("span",{className:"icon icon-avatar"}),"\u05de\u05e9\u05ea\u05de\u05e9 \u05d7\u05d3\u05e9")),k(b.a,{href:"/"},k("a",{onClick:function(){e.props.onLogout(),localStorage.clear()},className:"drop-menu-link"},k("span",{className:"icon icon-cog"}),"\u05d4\u05ea\u05e0\u05ea\u05e7"))):null))}}]),t}(h.Component),z=Object(y.b)(function(e){return{toggleMenu:e.header.toggleMenu,userAuth:e.user.auth,firsName:e.user.first_name,lastName:e.user.last_name}},function(e){return{onSetToggleMenu:function(t){e(O.a.accountMenuToggle(t))},setUserData:function(t){e(A.a.setUserData(t))},onLogout:function(t){e(Object(_.a)(t))}}})(T),C=n("0tj1"),E=p.a.createElement,S="main-header",x="scroll",L=function(e){function t(e){var n;return Object(a.a)(this,t),n=Object(u.a)(this,Object(s.a)(t).call(this,e)),Object(d.a)(Object(l.a)(n),"state",{width:0,height:0,toggleButton:!1}),Object(d.a)(Object(l.a)(n),"_unbindScroll",function(){window.removeEventListener("scroll",n._handleScroll)}),Object(d.a)(Object(l.a)(n),"_bindScroll",function(){var e=!1;try{var t=o()({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(r){console.log("ERROR:",r),"UNAUTHORIZED"===Object(w.get)(r,"response.data.errorCode")&&(n.props.onLogout(),g.a.push("/"))}window.addEventListener("scroll",n._handleScroll,!!e&&{passive:!0})}),Object(d.a)(Object(l.a)(n),"_handleScroll",function(){if((document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop)<1){var e="".concat(S);n._header.className=e}else{var t="".concat(S,"  ").concat(x);n._header.className=t}}),Object(d.a)(Object(l.a)(n),"onResize",function(e,t){n.setState(function(n){return Object(r.a)({},n,{width:e,height:t})})}),Object(d.a)(Object(l.a)(n),"onClickToggleButton",function(e){n.setState(function(e){return Object(r.a)({},e,{toggleButton:!e.toggleButton})})}),n._header=p.a.createRef(),n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this._unbindScroll()}},{key:"componentDidMount",value:function(){var e=this;this._bindScroll(),this._handleScroll();var t=Object(D.a)("global_token");!this.props.userAuth&&t&&N.a.authByToken(t).then(function(t){e.props.onSetUserData(t.data)}).catch(function(e){console.error("Error get User",e)})}},{key:"render",value:function(){var e=this,t=Object(w.get)(this.props,"router.pathname");return E(h.Fragment,null,E(M.a,{handleWidth:!0,handleHeight:!0,onResize:this.onResize},E("header",{className:"main-header",ref:function(t){e._header=t}},E("div",{className:"top-block-container"},E("div",{className:"block-toggle-menu"},E("button",{className:"toggle-menu",type:"button",onClick:function(t){return e.onClickToggleButton(t)}},E("span",null))),E("div",{className:"block-logo"},E(b.a,{href:"/"},E("a",{className:"logo"}))),this.state.toggleButton||this.state.width>1024?E("nav",{className:"main-menu container flex"},E(b.a,{href:"/about-us"},E("a",{className:"/about-us"===t?"menu-link active":"menu-link"},"\u05d0\u05d5\u05d3\u05d5\u05ea\u05d9\u05e0\u05d5")),E(b.a,{href:"/questions-and-answers"},E("a",{className:"/questions-and-answers"===t?"menu-link active":"menu-link"}," ","\u05e9\u05d0\u05dc\u05d5\u05ea \u05d5\u05ea\u05e9\u05d5\u05d1\u05d5\u05ea")),E(b.a,{href:"/cabinet"},E("a",{className:"/cabinet"===t?"menu-link active":"menu-link"},"\u05d4\u05d0\u05d6\u05d5\u05e8 \u05d4\u05d0\u05d9\u05e9\u05d9 \u05e9\u05dc\u05d9")),E(b.a,{href:"/contact"},E("a",{className:"/contact"===t?"menu-link active":"menu-link"},"\u05d9\u05e6\u05d9\u05e8\u05ea \u05e7\u05e9\u05e8")),E("a",{href:"https://blog.diffe-rent.co.il",className:"menu-link"},"\u05d4\u05d1\u05dc\u05d5\u05d2 \u05e9\u05dc\u05e0\u05d5")):null,E("div",{className:"block-link"},this.props.userAuth?E(z,null):E(b.a,{href:"/signin"},E("a",{className:"btn btn-white btn-medium"}," \u05d0\u05e0\u05d9 \u05d1\u05e2\u05dc \u05d3\u05d9\u05e8\u05d4")))))))}}]),t}(h.Component),R=Object(y.b)(function(e){return{state:e,userAuth:e.user.auth,step:e.forms.stepper.activeStep}},function(e){return{onSetUserData:function(t){e(A.a.setUserData(t))},onSetStepper:function(t){e(Object(C.b)(t))},onLogout:function(t){e(Object(_.a)(t))}}})(Object(m.withRouter)(L));t.a=R},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),i=n("n3ko");e.exports=n("raTm")("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return r.def(i(this,"Set"),e=0===e?0:e,e)}},r)},CMMb:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("XOLt"),i=n("cph9");function o(){return Object(i.b)("global_token"),{type:r.b}}},FYa8:function(e,t,n){"use strict";var r=n("hfKm"),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var o=i(n("q1tI"));t.HeadManagerContext=o.createContext(null)},HXcA:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("YFqc"),a=n.n(o),c=(n("AxI1"),n("rQpH")),u=n.n(c),s=n("Pwfg"),l=n.n(s),f=n("Tl9E"),d=n.n(f),h=i.a.createElement,p=["\u05d4\u05d1\u05d8\u05d7\u05ea \u05e9\u05db\u05e8 \u05d3\u05d9\u05e8\u05d4","\u05e4\u05d9\u05e0\u05d5\u05d9 \u05e9\u05d5\u05db\u05e8","\u05ea\u05e9\u05dc\u05d5\u05dd \u05e9\u05db\u05e8 \u05d3\u05d9\u05e8\u05d4 \u05d1\u05db\u05e8\u05d8\u05d9\u05e1 \u05d0\u05e9\u05e8\u05d0\u05d9","\u05d1\u05d3\u05d9\u05e7\u05ea \u05e8\u05e7\u05e2 \u05e9\u05dc \u05e9\u05d5\u05db\u05e8\u05d9\u05dd"];t.a=function(){return h(r.Fragment,null,h("footer",{className:"footer"},h("div",{className:"section section-footer"},h("div",{className:"footer-block"},h("div",{className:"logo-block"},h(a.a,{href:"/"},h("div",{className:"logo-link"},h("img",{className:"logo logo-grey",src:u.a,alt:"DiffeRent"})))),h("div",{className:"follow-block"},h("button",{className:"icon-facebook icon-dims"},h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.facebook.com/DiffeRent-%D7%9E%D7%91%D7%98%D7%99%D7%97%D7%99%D7%9D-%D7%9C%D7%9A-%D7%90%D7%AA-%D7%A9%D7%9B%D7%A8-%D7%94%D7%93%D7%99%D7%A8%D7%94-482879752481635"},h("img",{src:l.a,alt:"icon facebook"}))),h("button",{className:"icon-linkedin icon-dims"},h("img",{src:d.a,alt:"icon linkedin"}))),h("div",{className:"help-block"},h(a.a,{href:"/contact"},h("div",{className:"btn btn-circle help-link"},"\u05d0\u05e4\u05e9\u05e8",h("br",null),"\u05dc\u05e2\u05d6\u05d5\u05e8?")))),h("div",{className:"footer-container"},h("div",{className:"links-block"},h("nav",{className:"links-block-row"},h("span",{className:"links-block-title"},h("strong",null,"\u05d4\u05d7\u05d1\u05e8\u05d4")),h(a.a,{href:"/about-us"},h("a",null,"\u05d0\u05d5\u05d3\u05d5\u05ea\u05d9\u05e0\u05d5")),h(a.a,{href:"/contact"},h("a",null,"\u05d9\u05e6\u05d9\u05e8\u05ea \u05e7\u05e9\u05e8")),h(a.a,{href:"/questions-and-answers"},h("a",null,"\u05e9\u05d0\u05dc\u05d5\u05ea \u05d5\u05ea\u05e9\u05d5\u05d1\u05d5\u05ea"))),h("nav",{className:"links-block-row"},h("span",{className:"links-block-title"},h("strong",null,"\u05ea\u05e0\u05d0\u05d9\u05dd ")),h("a",{href:"https://diffe-rent.s3-eu-west-1.amazonaws.com/%D7%9E%D7%93%D7%99%D7%A0%D7%99%D7%95%D7%AA+%D7%94%D7%A4%D7%A8%D7%98%D7%99%D7%95%D7%AA-DiffeRent.pdf",target:"_blank",rel:"noopener noreferrer"},"\u05de\u05d3\u05d9\u05e0\u05d9\u05d5\u05ea \u05e4\u05e8\u05d8\u05d9\u05d5\u05ea"),h("a",{href:"https://diffe-rent.s3-eu-west-1.amazonaws.com/%D7%AA%D7%A7%D7%A0%D7%95%D7%9F-+DiffeRent.pdf",target:"_blank",rel:"noopener noreferrer"},"\u05ea\u05e7\u05e0\u05d5\u05df \u05d4\u05d7\u05d1\u05e8\u05d4"),h("a",{href:"https://diffe-rent.s3-eu-west-1.amazonaws.com/%D7%91%D7%98%D7%97%D7%95%D7%9F+%D7%91%D7%A9%D7%9B%D7%99%D7%A8%D7%95%D7%AA+-+DiffeRent.pdf",target:"_blank",rel:"noopener noreferrer"},"\u05e9\u05d9\u05e8\u05d5\u05ea \u05d1\u05d8\u05d7\u05d5\u05df \u05d1\u05e9\u05db\u05d9\u05e8\u05d5\u05ea")),h("nav",{className:"links-block-row"},h("span",{className:"links-block-title"},h("strong",null,"\u05d4\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd \u05e9\u05dc\u05e0\u05d5")),p.map(function(e,t){return h(a.a,{key:t,href:{pathname:"/services"},as:"/services/".concat(t+1)},h("a",null,e))})))))))}},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),i=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,i(0,n)):e[t]=n}},KCgP:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("8Kt/"),a=n.n(o),c=i.a.createElement,u="\u05d4\u05d9\u05d0 \u05e4\u05dc\u05d8\u05e4\u05d5\u05e8\u05de\u05d4 \u05d3\u05d9\u05d2\u05d9\u05d8\u05dc\u05d9\u05ea \u05d4\u05de\u05d1\u05d8\u05d9\u05d7\u05d4 \u05dc\u05db\u05dd \u05d1\u05d8\u05d7\u05d5\u05df \u05d5\u05e9\u05e7\u05d8 \u05e0\u05e4\u05e9\u05d9 \u05d1\u05db\u05dc \u05d4\u05e0\u05d5\u05d2\u05e2 \u05dc\u05e9\u05db\u05e8 \u05d4\u05d3\u05d9\u05e8\u05d4 \u05e9\u05dc\u05db\u05dd. \u05d1\u05e2\u05d1\u05d5\u05e8 \u05e8\u05e7 2.5% \u05de\u05d3\u05de\u05d9 \u05d4\u05e9\u05db\u05d9\u05e8\u05d5\u05ea \u05d4\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd, \u05de\u05e7\u05d1\u05dc \u05d1\u05e2\u05dc \u05d4\u05d3\u05d9\u05e8\u05d4 \u05d0\u05ea \u05d4\u05d1\u05d8\u05d7\u05ea \u05d3\u05de\u05d9 \u05d4\u05e9\u05db\u05d9\u05e8\u05d5\u05ea \u05e2\u05d3 \u05ea\u05d5\u05dd \u05d4\u05d7\u05d5\u05d6\u05d4, \u05e4\u05d9\u05e0\u05d5\u05d9 \u05d3\u05d9\u05d9\u05e8 \u05e1\u05e8\u05d1\u05df \u05d5\u05de\u05e6\u05d9\u05d0\u05ea \u05d3\u05d9\u05d9\u05e8 \u05d7\u05dc\u05d5\u05e4\u05d9 \u05d1\u05de\u05e7\u05e8\u05d4 \u05d4\u05e6\u05d5\u05e8\u05da DiffeRent";t.default=function(e){return c(i.a.Fragment,null,c(a.a,null,c("meta",{charset:"utf-8"}),c("link",{rel:"shortcut icon",href:"/img/home-banner-small.png"}),c("link",{rel:"canonical",href:"https://www.diffe-rent.co.il/"}),c("meta",{property:"og:url",content:"https://www.diffe-rent.co.il"}),c("meta",{property:"og:type",content:"website"}),c("meta",{property:"og:title",content:"DiffeRent - \u05de\u05d1\u05d8\u05d9\u05d7\u05d9\u05dd \u05dc\u05da \u05d0\u05ea \u05e9\u05db\u05e8 \u05d4\u05d3\u05d9\u05e8\u05d4"}),c("meta",{property:"og:description",content:u}),c("meta",{property:"og:image",itemprop:"image",content:"https://www.diffe-rent.co.il/img/home-banner-small-test.png"}),c("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),c("meta",{name:"google-site-verification",content:"_kVAnQarUqnT7UKA321avgTWpBMJelwbfAfHfr69XrM"}),c("script",{id:"ze-snippet",src:"https://static.zdassets.com/ekr/snippet.js?key=01c76c6a-b643-4fa7-9a06-11d8c9ef03f5"}),c("title",null,e.title||"DiffeRent - \u05de\u05d1\u05d8\u05d9\u05d7\u05d9\u05dd \u05dc\u05da \u05d0\u05ea \u05e9\u05db\u05e8 \u05d4\u05d3\u05d9\u05e8\u05d4"),c("meta",{name:"description",content:e.description||u})),e.children)}},KajC:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r="TOGGLE_ACCOUNT_MENU";t.b={TOGGLE_ACCOUNT_MENU:r}},PQJW:function(e,t,n){var r=n("d04V"),i=n("yLu3");e.exports=function(e){if(i(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},Pwfg:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+NjM4MUZBN0ItMTUyRi00NDI2LUE5ODItRTBGNThGQzA0RTM2PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSJJY29ucy0vLWZhY2Vib29rX2ZpbGwtZ3JleS0yNCIgZmlsbD0iIzU2NTM1MCIgc3Ryb2tlPSIjNTY1MzUwIiBzdHJva2Utd2lkdGg9IjAuOCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMC40NzgyNjA5LDIyIEwxMC40NzgyNjA5LDEyLjQzNDc4MjYgTDcsMTIuNDM0NzgyNiBMNyw5LjgyNjA4Njk2IEwxMC40NzgyNjA5LDkuODI2MDg2OTYgTDEwLjQ3ODI2MDksNi4zNDc4MjYwOSBDMTAuNDc4MjYwOSwzLjk0Njk1NjUyIDEyLjQyNTIxNzQsMiAxNC44MjYwODcsMiBMMTcuNDM0NzgyNiwyIEwxNy40MzQ3ODI2LDQuNjA4Njk1NjUgTDE0LjgyNjA4Nyw0LjYwODY5NTY1IEMxMy44NjUyMTc0LDQuNjA4Njk1NjUgMTMuMDg2OTU2NSw1LjM4Njk1NjUyIDEzLjA4Njk1NjUsNi4zNDc4MjYwOSBMMTMuMDg2OTU2NSw5LjgyNjA4Njk2IEwxNy40MzQ3ODI2LDkuODI2MDg2OTYgTDE2LjU2NTIxNzQsMTIuNDM0NzgyNiBMMTMuMDg2OTU2NSwxMi40MzQ3ODI2IEwxMy4wODY5NTY1LDIyIEwxMC40NzgyNjA5LDIyIEwxMC40NzgyNjA5LDIyIFoiIGlkPSJTdHJva2UtOTIiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},TbGu:function(e,t,n){var r=n("fGSI"),i=n("PQJW"),o=n("2PDY");e.exports=function(e){return r(e)||i(e)||o()}},Tl9E:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+OTczMDEyRDYtOEE1RS00MDVCLTlFNjYtQkE4MjM5N0FBM0NFPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSJJY29ucy0vLWxpbmtlZGluX2ZpbGwtZ3JleS0yNCIgZmlsbD0iIzU2NTM1MCIgc3Ryb2tlPSIjNTY1MzUwIiBzdHJva2Utd2lkdGg9IjAuOCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02LjM0NzkxMzA0LDQuMTczOTEzMDQgQzYuMzQ3OTEzMDQsNS4zNzQ3ODI2MSA1LjM3NDg2OTU3LDYuMzQ3ODI2MDkgNC4xNzQsNi4zNDc4MjYwOSBDMi45NzMxMzA0Myw2LjM0NzgyNjA5IDIuMDAwMDg2OTYsNS4zNzQ3ODI2MSAyLjAwMDA4Njk2LDQuMTczOTEzMDQgQzIuMDAwMDg2OTYsMi45NzMwNDM0OCAyLjk3MzEzMDQzLDIgNC4xNzQsMiBDNS4zNzQ4Njk1NywyIDYuMzQ3OTEzMDQsMi45NzMwNDM0OCA2LjM0NzkxMzA0LDQuMTczOTEzMDQgWiBNMiwyMiBMMiw4Ljk1NjUyMTc0IEw2LjM0NzgyNjA5LDguOTU2NTIxNzQgTDYuMzQ3ODI2MDksMjIgTDIsMjIgWiBNMTMuMzA0NDM0OCw5LjgyNjA4Njk2IEMxNC45NDE4MjYxLDcuNzc0NzgyNjEgMjEuOTAxODI2MSw2LjE3OTEzMDQzIDIyLjAwMDA4NywxMy4zMDQzNDc4IEwyMi4wMDAwODcsMTUuOTEzMDQzNSBMMjIuMDAwMDg3LDIyIEwxNy42NTIyNjA5LDIyIEwxNy42NTIyNjA5LDE2LjA5NDc4MjYgTDE3LjY1MjI2MDksMTUuOTEzMDQzNSBMMTcuNjUyMjYwOSwxNC4xNzM5MTMgQzE3LjY1MzEzMDQsMTEuNDQ5NTY1MiAxNC45NTQsMTAuODMyMTczOSAxMy4zMDQ0MzQ4LDEyLjQzNDc4MjYgTDEzLjMwNDQzNDgsMjIgTDguOTU2NjA4NywyMiBMOC45NTY2MDg3LDguOTU2NTIxNzQgTDEzLjMwNDQzNDgsOC45NTY1MjE3NCBMMTMuMzA0NDM0OCw5LjgyNjA4Njk2IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},"V+O7":function(e,t,n){n("aPfg")("Set")},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),i=n("Y7ZC"),o=n("JB68"),a=n("sNwI"),c=n("NwJ3"),u=n("tEej"),s=n("IP1Z"),l=n("fNZA");i(i.S+i.F*!n("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,i,f,d=o(e),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,b=void 0!==v,m=0,g=l(d);if(b&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==g||h==Array&&c(g))for(n=new h(t=u(d.length));t>m;m++)s(n,m,b?v(d[m],m):d[m]);else for(f=g.call(d),n=new h;!(i=f.next()).done;m++)s(n,m,b?a(f,v,[i.value,m],!0):i.value);return n.length=m,n}})},VKFn:function(e,t,n){n("bBy9"),n("FlQf"),e.exports=n("ldVq")},XH21:function(e,t,n){"use strict";var r=n("KajC");t.a={accountMenuToggle:function(e){return{type:r.a,payload:{toggleMenu:e}}}}},XqMk:function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.a=n}).call(this,n("3r9c"))},Xuae:function(e,t,n){"use strict";var r=n("/HRN"),i=n("ZDA2"),o=n("/+P4"),a=n("K47E"),c=n("WaGi"),u=n("N9n2"),s=n("TbGu"),l=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var f=n("q1tI"),d=!1;t.default=function(){var e,t=new l;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(s){function l(e){var c;return r(this,l),c=i(this,o(l).call(this,e)),d&&(t.add(a(c)),n(a(c))),c}return u(l,s),c(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),c(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component)}},Y0NT:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("YFqc"),a=n.n(o),c=n("KCgP"),u=n("8x5e"),s=n("HXcA"),l=(n("MWhd"),i.a.createElement),f={"text-align":"center",margin:"100px "};function d(e){var t=e.statusCode;return l(c.default,{title:"404-page"},l("div",{lang:"he",dir:"rtl",className:"app"},l(u.a,null),l("div",{style:f},t?l("div",null,l("h1",null,"\u05e2\u05de\u05d5\u05d3 \u05dc\u05d0 \u05e7\u05d9\u05d9\u05dd"),l("h2",null,"\u05d4\u05e2\u05de\u05d5\u05d3 \u05e9\u05d1\u05d9\u05e7\u05e9\u05ea \u05dc\u05d0 \u05e0\u05de\u05e6\u05d0.",l("br",null),"\u05d9\u05ea\u05db\u05df \u05e9\u05e9\u05de\u05d5 \u05d4\u05e9\u05ea\u05e0\u05d4, \u05de\u05d9\u05e7\u05d5\u05de\u05d5 \u05d4\u05d5\u05d6\u05d6 \u05d0\u05d5 \u05e9\u05d0\u05d9\u05e0\u05d5 \u05e7\u05d9\u05d9\u05dd."),l(a.a,{href:"/"},l("button",{className:"btn btn-blue btn-large"},"\u05d7\u05d6\u05e8\u05d4 \u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05e8\u05d0\u05e9\u05d9"))):"An error occurred on client"),l(s.a,null)))}d.getInitialProps=function(e){var t=e.res,n=e.err;return{statusCode:t?t.statusCode:n?n.statusCode:404}},t.default=d},bdgK:function(e,t,n){"use strict";(function(e){var n=function(){if("undefined"!==typeof Map)return Map;function e(e,t){var n=-1;return e.some(function(e,r){return e[0]===t&&(n=r,!0)}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),r="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,i="undefined"!==typeof e&&e.Math===Math?e:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),o="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},a=2;var c=20,u=["top","right","bottom","left","width","height","size","weight"],s="undefined"!==typeof MutationObserver,l=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function c(){n&&(n=!1,e()),r&&s()}function u(){o(c)}function s(){var e=Date.now();if(n){if(e-i<a)return;r=!0}else n=!0,r=!1,setTimeout(u,t);i=e}return s}(this.refresh.bind(this),c)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;u.some(function(e){return!!~n.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),f=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},d=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||i},h=y(0,0,0,0);function p(e){return parseFloat(e)||0}function v(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(t,n){return t+p(e["border-"+n+"-width"])},0)}function b(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return h;var r=d(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=p(o)}return t}(r),o=i.left+i.right,a=i.top+i.bottom,c=p(r.width),u=p(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==t&&(c-=v(r,"left","right")+o),Math.round(u+a)!==n&&(u-=v(r,"top","bottom")+a)),!function(e){return e===d(e).document.documentElement}(e)){var s=Math.round(c+o)-t,l=Math.round(u+a)-n;1!==Math.abs(s)&&(c-=s),1!==Math.abs(l)&&(u-=l)}return y(i.left,i.top,c,u)}var m="undefined"!==typeof SVGGraphicsElement?function(e){return e instanceof d(e).SVGGraphicsElement}:function(e){return e instanceof d(e).SVGElement&&"function"===typeof e.getBBox};function g(e){return r?m(e)?function(e){var t=e.getBBox();return y(0,0,t.width,t.height)}(e):b(e):h}function y(e,t,n,r){return{x:e,y:t,width:n,height:r}}var M=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=g(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),w=function(){return function(e,t){var n=function(e){var t=e.x,n=e.y,r=e.width,i=e.height,o="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(o.prototype);return f(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}(t);f(this,{target:e,contentRect:n})}}(),D=function(){function e(e,t,r){if(this.activeObservations_=[],this.observations_=new n,"function"!==typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new M(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new w(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),N="undefined"!==typeof WeakMap?new WeakMap:new n,I=function(){return function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=l.getInstance(),r=new D(t,n,this);N.set(this,r)}}();["observe","unobserve","disconnect"].forEach(function(e){I.prototype[e]=function(){var t;return(t=N.get(this))[e].apply(t,arguments)}});var j="undefined"!==typeof i.ResizeObserver?i.ResizeObserver:I;t.a=j}).call(this,n("3r9c"))},d04V:function(e,t,n){e.exports=n("0tVQ")},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},ldVq:function(e,t,n){var r=n("QMMT"),i=n("UWiX")("iterator"),o=n("SBuE");e.exports=n("WEpk").isIterable=function(e){var t=Object(e);return void 0!==t[i]||"@@iterator"in t||o.hasOwnProperty(r(t))}},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var o=i(n("q1tI"));t.AmpStateContext=o.createContext({})},rQpH:function(e,t){e.exports="/_next/static/images/different_logo_white-3b1b14dc308bb987c8621ff49e12138b.png"},ttDY:function(e,t,n){e.exports=n("+iuc")},vqfn:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+NUQ2MzE3NUMtNDNFMi00QzI3LUFCNzAtQjRBRTlGMzAyMDI5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSJJY29ucy0vLWNoZXZyb25fZG93bl9vdXRsaW5lIiBzdHJva2U9IiMwMDdBRkYiIHN0cm9rZS13aWR0aD0iMC44Ij4KICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJTdHJva2UtNTAiIHBvaW50cz0iMiA2IDkgMTMgMTYgNiI+PC9wb2x5bGluZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},xvv9:function(e,t,n){n("cHUd")("Set")},yLu3:function(e,t,n){e.exports=n("VKFn")},yUt2:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("i8i4"),a=n("bdgK"),c=function(e){var t=[],n=null,r=function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];t=i,n||(n=requestAnimationFrame(function(){n=null,e.apply(void 0,t)}))};return r.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},r},u=n("17x9");var s=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},l=n("XqMk"),f="object"==typeof self&&self&&self.Object===Object&&self,d=l.a||f||Function("return this")(),h=function(){return d.Date.now()},p=d.Symbol,v=Object.prototype,b=v.hasOwnProperty,m=v.toString,g=p?p.toStringTag:void 0;var y=function(e){var t=b.call(e,g),n=e[g];try{e[g]=void 0;var r=!0}catch(o){}var i=m.call(e);return r&&(t?e[g]=n:delete e[g]),i},M=Object.prototype.toString;var w=function(e){return M.call(e)},D="[object Null]",N="[object Undefined]",I=p?p.toStringTag:void 0;var j=function(e){return null==e?void 0===e?N:D:I&&I in Object(e)?y(e):w(e)};var O=function(e){return null!=e&&"object"==typeof e},A="[object Symbol]";var _=function(e){return"symbol"==typeof e||O(e)&&j(e)==A},k=NaN,T=/^\s+|\s+$/g,z=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,E=/^0o[0-7]+$/i,S=parseInt;var x=function(e){if("number"==typeof e)return e;if(_(e))return k;if(s(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=s(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(T,"");var n=C.test(e);return n||E.test(e)?S(e.slice(2),n?2:8):z.test(e)?k:+e},L="Expected a function",R=Math.max,P=Math.min;var Z=function(e,t,n){var r,i,o,a,c,u,l=0,f=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(L);function v(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function b(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-l>=o}function m(){var e=h();if(b(e))return g(e);c=setTimeout(m,function(e){var n=t-(e-u);return d?P(n,o-(e-l)):n}(e))}function g(e){return c=void 0,p&&r?v(e):(r=i=void 0,a)}function y(){var e=h(),n=b(e);if(r=arguments,i=this,u=e,n){if(void 0===c)return function(e){return l=e,c=setTimeout(m,t),f?v(e):a}(u);if(d)return clearTimeout(c),c=setTimeout(m,t),v(u)}return void 0===c&&(c=setTimeout(m,t)),a}return t=x(t)||0,s(n)&&(f=!!n.leading,o=(d="maxWait"in n)?R(x(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),y.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=u=i=c=void 0},y.flush=function(){return void 0===c?a:g(h())},y},Q="Expected a function";var G=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(Q);return s(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Z(e,t,{leading:r,maxWait:t,trailing:i})},H={debounce:Z,throttle:G},U=function(e){return H[e]},W=function(e){return"function"===typeof e},B=function(){return"undefined"===typeof window},Y=function(e){return e instanceof Element||e instanceof HTMLDocument};function V(e){return(V="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t){return!t||"object"!==V(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var X=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),J(this,K(t).apply(this,arguments))}var n,i,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,r["PureComponent"]),n=t,(i=[{key:"render",value:function(){return this.props.children}}])&&F(n.prototype,i),o&&F(n,o),t}();function $(e){return($="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var oe=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==$(t)&&"function"!==typeof t?ne(e):t}(this,te(t).call(this,e)),ie(ne(n),"cancelHandler",function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)}),ie(ne(n),"rafClean",function(){n.raf&&n.raf.cancel&&(n.raf.cancel(),n.raf=null)}),ie(ne(n),"toggleObserver",function(e){var t=n.getElement();t&&n.resizeObserver[e]&&n.resizeObserver[e](t)}),ie(ne(n),"getElement",function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(!B()){if(t)return document.querySelector(t);if(r&&Y(r))return r;var i=n.element&&Object(o.findDOMNode)(n.element);if(i)return i.parentElement}}),ie(ne(n),"createUpdater",function(){return n.rafClean(),n.raf=c(function(e){var t=e.width,r=e.height,i=n.props.onResize;W(i)&&i(t,r),n.setState({width:t,height:r})}),n.raf}),ie(ne(n),"createResizeHandler",function(e){var t=n.state,r=t.width,i=t.height,o=n.props,a=o.handleWidth,c=o.handleHeight;if(a||c){var u=n.createUpdater();e.forEach(function(e){var t=e&&e.contentRect||{},o=t.width,s=t.height,l=a&&r!==o||c&&i!==s;!n.skipOnMount&&l&&!B()&&u({width:o,height:s}),n.skipOnMount=!1})}}),ie(ne(n),"onRef",function(e){n.element=e}),ie(ne(n),"getRenderType",function(){var e=n.props,t=e.render,i=e.children;return W(t)?"renderProp":W(i)?"childFunction":Object(r.isValidElement)(i)?"child":Array.isArray(i)?"childArray":"parent"}),ie(ne(n),"getTargetComponent",function(){var e=n.props,t=e.render,i=e.children,o=e.nodeType,a=n.state,c={width:a.width,height:a.height};switch(n.getRenderType()){case"renderProp":return Object(r.cloneElement)(t(c),{key:"resize-detector"});case"childFunction":return Object(r.cloneElement)(i(c));case"child":return Object(r.cloneElement)(i,c);case"childArray":return i.map(function(e){return!!e&&Object(r.cloneElement)(e,c)});default:return Object(r.createElement)(o)}});var i=e.skipOnMount,u=e.refreshMode,s=e.refreshRate,l=e.refreshOptions;n.state={width:void 0,height:void 0},n.skipOnMount=i,n.raf=null,n.element=null,n.unmounted=!1;var f=U(u);return n.resizeHandler=f?f(n.createResizeHandler,s,l):n.createResizeHandler,n.resizeObserver=new a.a(n.resizeHandler),n}var n,u,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(t,r["PureComponent"]),n=t,(u=[{key:"componentDidMount",value:function(){this.toggleObserver("observe")}},{key:"componentWillUnmount",value:function(){this.toggleObserver("unobserve"),this.rafClean(),this.cancelHandler(),this.unmounted=!0}},{key:"render",value:function(){return i.a.createElement(X,{ref:this.onRef},this.getTargetComponent())}}])&&ee(n.prototype,u),s&&ee(n,s),t}();oe.propTypes={handleWidth:u.bool,handleHeight:u.bool,skipOnMount:u.bool,refreshRate:u.number,refreshMode:u.string,refreshOptions:Object(u.shape)({leading:u.bool,trailing:u.bool}),querySelector:u.string,targetDomEl:u.any,onResize:u.func,render:u.func,children:u.any,nodeType:u.node},oe.defaultProps={handleWidth:!1,handleHeight:!1,skipOnMount:!1,refreshRate:1e3,refreshMode:void 0,refreshOptions:void 0,querySelector:null,targetDomEl:null,onResize:null,render:void 0,children:null,nodeType:"div"};var ae=oe;t.a=ae}},[["1HF/",1,0,2]]]);