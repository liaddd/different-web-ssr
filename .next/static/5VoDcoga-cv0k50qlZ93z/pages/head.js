(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var i=o(n("q1tI")),a=n("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=u,e.useAmp=function(){return u(i.default.useContext(a.AmpStateContext))}},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),o=n("hfKm"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};o(e,"__esModule",{value:!0});var a=i(n("q1tI")),u=i(n("Xuae")),c=n("lwAK"),f=n("FYa8"),l=n("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce(function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)},[])):t.concat(e)}e.defaultHead=s;var p=["name","httpEquiv","charSet","itemProp"];function h(t,e){return t.reduce(function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)},[]).reduce(d,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,o={};return function(i){if(i.key&&"number"!==typeof i.key&&0===i.key.indexOf(".$"))return!t.has(i.key)&&(t.add(i.key),!0);switch(i.type){case"title":case"base":if(e.has(i.type))return!1;e.add(i.type);break;case"meta":for(var a=0,u=p.length;a<u;a++){var c=p[a];if(i.props.hasOwnProperty(c))if("charSet"===c){if(n.has(c))return!1;n.add(c)}else{var f=i.props[c],l=o[c]||new r;if(l.has(f))return!1;l.add(f),o[c]=l}}}return!0}}()).reverse().map(function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})})}var m=u.default();function v(t){var e=t.children;return a.default.createElement(c.AmpStateContext.Consumer,null,function(t){return a.default.createElement(f.HeadManagerContext.Consumer,null,function(n){return a.default.createElement(m,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:l.isInAmpMode(t)},e)})})}v.rewind=m.rewind,e.default=v},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},FYa8:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var i=o(n("q1tI"));e.HeadManagerContext=i.createContext(null)},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),o=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},KCgP:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("8Kt/"),a=n.n(i),u=o.a.createElement,c="\u05d4\u05d9\u05d0 \u05e4\u05dc\u05d8\u05e4\u05d5\u05e8\u05de\u05d4 \u05d3\u05d9\u05d2\u05d9\u05d8\u05dc\u05d9\u05ea \u05d4\u05de\u05d1\u05d8\u05d9\u05d7\u05d4 \u05dc\u05db\u05dd \u05d1\u05d8\u05d7\u05d5\u05df \u05d5\u05e9\u05e7\u05d8 \u05e0\u05e4\u05e9\u05d9 \u05d1\u05db\u05dc \u05d4\u05e0\u05d5\u05d2\u05e2 \u05dc\u05e9\u05db\u05e8 \u05d4\u05d3\u05d9\u05e8\u05d4 \u05e9\u05dc\u05db\u05dd. \u05d1\u05e2\u05d1\u05d5\u05e8 \u05e8\u05e7 2.5% \u05de\u05d3\u05de\u05d9 \u05d4\u05e9\u05db\u05d9\u05e8\u05d5\u05ea \u05d4\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd, \u05de\u05e7\u05d1\u05dc \u05d1\u05e2\u05dc \u05d4\u05d3\u05d9\u05e8\u05d4 \u05d0\u05ea \u05d4\u05d1\u05d8\u05d7\u05ea \u05d3\u05de\u05d9 \u05d4\u05e9\u05db\u05d9\u05e8\u05d5\u05ea \u05e2\u05d3 \u05ea\u05d5\u05dd \u05d4\u05d7\u05d5\u05d6\u05d4, \u05e4\u05d9\u05e0\u05d5\u05d9 \u05d3\u05d9\u05d9\u05e8 \u05e1\u05e8\u05d1\u05df \u05d5\u05de\u05e6\u05d9\u05d0\u05ea \u05d3\u05d9\u05d9\u05e8 \u05d7\u05dc\u05d5\u05e4\u05d9 \u05d1\u05de\u05e7\u05e8\u05d4 \u05d4\u05e6\u05d5\u05e8\u05da DiffeRent";e.default=function(t){return u(o.a.Fragment,null,u(a.a,null,u("meta",{charset:"utf-8"}),u("link",{rel:"shortcut icon",href:"/img/home-banner-small.png"}),u("link",{rel:"canonical",href:"https://www.diffe-rent.co.il/"}),u("meta",{property:"og:url",content:"https://www.diffe-rent.co.il"}),u("meta",{property:"og:type",content:"website"}),u("meta",{property:"og:title",content:"DiffeRent - \u05de\u05d1\u05d8\u05d9\u05d7\u05d9\u05dd \u05dc\u05da \u05d0\u05ea \u05e9\u05db\u05e8 \u05d4\u05d3\u05d9\u05e8\u05d4"}),u("meta",{property:"og:description",content:c}),u("meta",{property:"og:image",itemprop:"image",content:"https://www.diffe-rent.co.il/img/home-banner-small-test.png"}),u("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),u("meta",{name:"google-site-verification",content:"_kVAnQarUqnT7UKA321avgTWpBMJelwbfAfHfr69XrM"}),u("script",{id:"ze-snippet",src:"https://static.zdassets.com/ekr/snippet.js?key=01c76c6a-b643-4fa7-9a06-11d8c9ef03f5"}),u("title",null,t.title||"DiffeRent - \u05de\u05d1\u05d8\u05d9\u05d7\u05d9\u05dd \u05dc\u05da \u05d0\u05ea \u05e9\u05db\u05e8 \u05d4\u05d3\u05d9\u05e8\u05d4"),u("meta",{name:"description",content:t.description||c})),t.children)}},PQJW:function(t,e,n){var r=n("d04V"),o=n("yLu3");t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},Qs3m:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/head",function(){return n("KCgP")}])},TbGu:function(t,e,n){var r=n("fGSI"),o=n("PQJW"),i=n("2PDY");t.exports=function(t){return r(t)||o(t)||i()}},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),i=n("JB68"),a=n("sNwI"),u=n("NwJ3"),c=n("tEej"),f=n("IP1Z"),l=n("fNZA");o(o.S+o.F*!n("TuGD")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,s,d=i(t),p="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,v=void 0!==m,w=0,y=l(d);if(v&&(m=r(m,h>2?arguments[2]:void 0,2)),void 0==y||p==Array&&u(y))for(n=new p(e=c(d.length));e>w;w++)f(n,w,v?m(d[w],w):d[w]);else for(s=y.call(d),n=new p;!(o=s.next()).done;w++)f(n,w,v?a(s,m,[o.value,w],!0):o.value);return n.length=w,n}})},VKFn:function(t,e,n){n("bBy9"),n("FlQf"),t.exports=n("ldVq")},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),i=n("/+P4"),a=n("K47E"),u=n("WaGi"),c=n("N9n2"),f=n("TbGu"),l=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var s=n("q1tI"),d=!1;e.default=function(){var t,e=new l;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(f){function l(t){var u;return r(this,l),u=o(this,i(l).call(this,t)),d&&(e.add(a(u)),n(a(u))),u}return c(l,f),u(l,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),u(l,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(s.Component)}},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},ldVq:function(t,e,n){var r=n("QMMT"),o=n("UWiX")("iterator"),i=n("SBuE");t.exports=n("WEpk").isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var i=o(n("q1tI"));e.AmpStateContext=i.createContext({})},ttDY:function(t,e,n){t.exports=n("+iuc")},xvv9:function(t,e,n){n("cHUd")("Set")},yLu3:function(t,e,n){t.exports=n("VKFn")}},[["Qs3m",1,0]]]);