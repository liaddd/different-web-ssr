(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"Ha/8":function(e,a,t){"use strict";var r={IsraelPhoneNumberRegex:/(^\+?[1-9]\d{8,14}$|^0[0-9]\d{8,11})/,InputCheckerRegex:/true$/,InputStringRegex:/[\S]+/,InputNumberRegex:/[\d]+/,IdNumberRegex:/^[\d]{9}$/,CreditCardRegex:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/,EmailRegex:/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,PhoneErrorText:"\u05e7\u05d5\u05d3 \u05e9\u05d2\u05d5\u05d9",CheckboxErrorText:"\u05e0\u05d0 \u05dc\u05d0\u05e9\u05e8 \u05d0\u05ea \u05d4\u05ea\u05e7\u05e0\u05d5\u05df",PhoneErrorValidation:"\u05de\u05e1\u05e4\u05e8 \u05d8\u05dc\u05e4\u05d5\u05df \u05dc\u05d0 \u05ea\u05e7\u05d9\u05df"},n={validate:function(e,a,t){var r=!!a&&e.test(a),n={valid:r};return r||(n.error=t),n}};a.a={constants:r,validate:n}},KQo5:function(e,a,t){"use strict";t.r(a);var r=t("0iUn"),n=t("sLSF"),i=t("MI3g"),s=t("a7VT"),o=t("AT/M"),c=t("Tit0"),l=t("vYYK"),d=t("q1tI"),u=t.n(d),p=t("TSYQ"),m=t.n(p),b=t("LvDl"),h=t("nOHt"),v=t.n(h),N=t("Ha/8"),k=t("sFnd"),x=t("ErnG"),g=t("/MKj"),f=t("UHQH"),V=u.a.createElement,S=" \u05d0\u05d7\u05d3 \u05d0\u05d5 \u05d9\u05d5\u05ea\u05e8 \u05de\u05d4\u05e4\u05e8\u05d8\u05d9\u05dd \u05d0\u05d9\u05e0\u05d5 \u05e0\u05db\u05d5\u05df ",y=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),d=0;d<n;d++)c[d]=arguments[d];return t=Object(i.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c))),Object(l.a)(Object(o.a)(t),"state",{formValid:!1,cardNumber:null,cardExpireDate:null,cvv:null,name:null,idNumber:null,email:null,errorMessage:"",clickOnCheckbox:!1,clickOnCheckbox2:!1,cardNumberValidate:{error:void 0},cardExpireDateValidate:{error:void 0},cvvValidate:{error:void 0},nameValidate:{error:void 0},idNumberValidate:{error:void 0},emailValidate:{error:void 0}}),Object(l.a)(Object(o.a)(t),"onValidateForm",function(){var e=N.a.validate.validate(N.a.constants.CreditCardRegex,t.state.cardNumber,S);e&&e.error?t.setState({cardNumberValidate:{error:e.error}}):t.setState({cardNumberValidate:{error:void 0}});var a=N.a.validate.validate(N.a.constants.InputStringRegex,t.state.cardExpireDate,S);a&&a.error?t.setState({cardExpireDateValidate:{error:a.error}}):t.setState({cardExpireDateValidate:{error:void 0}});var r=N.a.validate.validate(N.a.constants.InputStringRegex,t.state.cvv,S);r&&r.error?t.setState({cvvValidate:{error:r.error}}):t.setState({cvvValidate:{error:void 0}});var n=N.a.validate.validate(N.a.constants.InputStringRegex,t.state.name,S);n&&n.error?t.setState({nameValidate:{error:n.error}}):t.setState({nameValidate:{error:void 0}});var i=N.a.validate.validate(N.a.constants.IdNumberRegex,t.state.idNumber,S);i&&i.error?t.setState({idNumberValidate:{error:i.error}}):t.setState({idNumberValidate:{error:void 0}});var s=N.a.validate.validate(N.a.constants.EmailRegex,t.state.email,S);return s&&s.error?t.setState({emailValidate:{error:s.error}}):t.setState({emailValidate:{error:void 0}}),e.valid&&a.valid&&r.valid&&n.valid&&i.valid&&s.valid}),Object(l.a)(Object(o.a)(t),"onSubmit",function(e){if(e.preventDefault(),t.onValidateForm()&&t.state.clickOnCheckbox){t.props.onSetUserData({formValid:!1,showModal:!0});var a=t.state.cardExpireDate.split("/");k.a.cardChecker({CardNumber:t.state.cardNumber,ExpirationMonth:a[0],ExpirationYear:a[1],CVV:t.state.cvv,CitizenID:t.state.idNumber,Credentials:{CompanyID:"".concat("34087818"),APIPublicKey:"".concat("HQDWdkU5aGZ3za8faQtleVaKmCOjJ8BtZk0wYV47ii3GlW6oXS")},ResponseLanguage:"he"},t.props.user.auth.session_token).then(function(e){return e.data.UserErrorMessage&&t.setState({errorMessage:e.data.UserErrorMessage}),e}).then(function(e){var a=e.data.Data.SingleUseToken,r={property_id:t.props.user.id,tenant_id:Object(b.get)(t.props,"user.selected_tenant_user.exist_tenant_id",""),is_agent:!1,card:{user_id:t.props.user.id,token:a,card_holder_id:t.state.idNumber,card_holder_name:t.state.name,invoice_email:t.state.email}};k.a.guaranteeAgreement(r,t.props.user.auth.session_token).then(function(e){e.data.showModal=!1,t.props.onSetUserData(e.data),v.a.push("/info")}).catch(function(e){var a="\u05d0\u05d7\u05d3 \u05d0\u05d5 \u05d9\u05d5\u05ea\u05e8 \u05de\u05e4\u05e8\u05d8\u05d9 \u05d4\u05d0\u05e9\u05e8\u05d0\u05d9 \u05e9\u05d2\u05d5\u05d9";"tenant_id key is required"!==Object(b.get)(e,"response.data.errorMessage")&&(a=Object(b.get)(e,"response.data.errorMessage","")),t.setState({errorMessage:a}),t.props.onSetUserData({showModal:!1})})}).catch(function(e){t.setState({errorMessage:"\u05d0\u05d7\u05d3 \u05d0\u05d5 \u05d9\u05d5\u05ea\u05e8 \u05de\u05e4\u05e8\u05d8\u05d9 \u05d4\u05d0\u05e9\u05e8\u05d0\u05d9 \u05e9\u05d2\u05d5\u05d9"}),console.error(e),t.props.onSetUserData({showModal:!1})})}else t.setState({formValid:!1})}),t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this;return V(d.Fragment,null,V("section",{className:"card-block"},V("div",{className:"card-block-form"},V("form",{className:"card-form",id:"card-form",onSubmit:function(a){return e.onSubmit(a)},noValidate:!0},V("div",{className:"card-content-column-top"},V("header",{className:"card-header"},V("h2",{className:"card-header-title"},"\u05d0\u05de\u05e6\u05e2\u05d9 \u05ea\u05e9\u05dc\u05d5\u05dd")),V("div",{className:"card-form-container form-container"},V("p",{className:"input-block"},V("label",{htmlFor:"input-card-card-number",className:m()({"input-label":!0,"input-not-empty":this.state.cardNumber&&this.state.cardNumber.length>0,"input-error":void 0!==this.state.cardNumberValidate.error})},V("input",{className:"input-text input-text-grey",type:"tel",id:"input-card-card-number",placeholder:"\xa0",onChange:function(a){e.setState({cardNumber:a.target.value})}}),V("span",{className:"input-label-span"},"\u05de\u05e1\u05e4\u05e8 \u05db\u05e8\u05d8\u05d9\u05e1 \u05d0\u05e9\u05e8\u05d0\u05d9"),V("span",{className:"input-border"}),void 0!==this.state.cardNumberValidate.error&&V("span",{className:"card-input-error span-error"},"\u05de\u05e1\u05e4\u05e8 \u05db\u05e8\u05d8\u05d9\u05e1 \u05d0\u05e9\u05e8\u05d0\u05d9"))),V("p",{className:"input-block-row"},V("label",{htmlFor:"input-card-validity",className:m()({"input-label":!0,"input-not-empty":this.state.cardExpireDate&&this.state.cardExpireDate.length>0,"input-error":void 0!==this.state.cardExpireDateValidate.error})},V("input",{className:"input-text input-text-grey",type:"text",id:"input-card-validity",placeholder:"\xa0",onChange:function(a){e.setState({cardExpireDate:a.target.value})}}),V("span",{className:"input-label-span"},"\u05ea\u05d5\u05e7\u05e3 \u05d4\u05db\u05e8\u05d8\u05d9\u05e1"),V("span",{className:"input-border"}),void 0!==this.state.cardExpireDateValidate.error&&V("span",{className:"card-input-error span-error"},"require"))),V("p",{className:"input-block-row cvv-key-block"},V("label",{htmlFor:"input-cvv",className:m()({"input-label":!0,"input-not-empty":this.state.cvv&&this.state.cvv.length>0,"input-error":void 0!==this.state.cvvValidate.error})},V("input",{className:"input-email input-text-grey cvv-key-input",type:"password",id:"input-cvv",placeholder:"\xa0",onChange:function(a){e.setState({cvv:a.target.value})}}),V("span",{className:"input-label-span"},"CVV"),V("span",{className:"input-border"}),void 0!==this.state.cvvValidate.error&&V("span",{className:"card-input-error span-error"},"require"))),V("p",{className:"input-block"},V("label",{htmlFor:"input-card-name",className:m()({"input-label":!0,"input-not-empty":this.state.name&&this.state.name.length>0,"input-error":void 0!==this.state.nameValidate.error})},V("input",{className:"input-text input-text-grey",type:"text",id:"input-card-name",placeholder:"\xa0",onChange:function(a){e.setState({name:a.target.value})}}),V("span",{className:"input-label-span"},"\u05e9\u05dd \u05d1\u05e2\u05dc \u05d4\u05db\u05e8\u05d8\u05d9\u05e1"),V("span",{className:"input-border"}),void 0!==this.state.nameValidate.error&&V("span",{className:"card-input-error span-error"},"require"))),V("p",{className:"input-block"},V("label",{htmlFor:"input-card-id-number",className:m()({"input-label":!0,"input-not-empty":this.state.idNumber&&this.state.idNumber.length>0,"input-error":void 0!==this.state.idNumberValidate.error})},V("input",{className:"input-text input-text-grey",type:"number",id:"input-card-id-number",placeholder:"\xa0",onChange:function(a){e.setState({idNumber:a.target.value})}}),V("span",{className:"input-label-span"},"\u05de\u05e1\u05e4\u05e8 \u05ea.\u05d6 \u05e9\u05dc \u05d1\u05e2\u05dc \u05d4\u05db\u05e8\u05d8\u05d9\u05e1"),V("span",{className:"input-border"}),void 0!==this.state.idNumberValidate.error&&V("span",{className:"card-input-error span-error"},"*\u05ea.\u05d6 \u05dc\u05d0 \u05ea\u05e7\u05d9\u05e0\u05d4"))),V("p",{className:"input-block"},V("label",{htmlFor:"input-card-email",className:m()({"input-label":!0,"input-not-empty":this.state.email&&this.state.email.length>0,"input-error":void 0!==this.state.emailValidate.error})},V("input",{className:"input-text input-text-grey",type:"email",id:"input-card-email",placeholder:"\xa0",onChange:function(a){e.setState({email:a.target.value})}}),V("span",{className:"input-label-span"},"\u05d3\u05d5\u05d0\u05e8 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9 \u05dc\u05e9\u05dc\u05d9\u05d7\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d9\u05ea"),V("span",{className:"input-border"}),void 0!==this.state.emailValidate.error&&V("span",{className:"card-input-error span-error"},"require")))),V("div",{className:"card-block-checkbox"},V("input",{className:"card-checkbox input-checkbox",id:"card-checkbox",type:"checkbox",checked:this.state.clickOnCheckbox,onChange:function(){return e.setState({clickOnCheckbox:!e.state.clickOnCheckbox})}}),V("label",{className:"card-checkbox-label",htmlFor:"card-checkbox"},"\u05e7\u05e8\u05d0\u05ea\u05d9 \u05d5\u05d0\u05e0\u05d9 \u05de\u05d0\u05e9\u05e8\u05ea \u05d0\u05ea",V("a",{href:"https://diffe-rent.s3-eu-west-1.amazonaws.com/%D7%91%D7%98%D7%97%D7%95%D7%9F+%D7%91%D7%A9%D7%9B%D7%99%D7%A8%D7%95%D7%AA+-+DiffeRent.pdf",target:"_blank"}," \u05ea\u05e0\u05d0\u05d9 \u05e9\u05d9\u05e8\u05d5\u05ea \u05d1\u05d8\u05d7\u05d5\u05df \u05d1\u05e9\u05db\u05d9\u05e8\u05d5\u05ea "))),V("br",null),V("div",{className:"card-block-checkbox"},V("input",{className:"card-checkbox input-checkbox",id:"card-checkbox",type:"checkbox",checked:this.state.clickOnCheckbox2,onChange:function(){return e.setState({clickOnCheckbox2:!e.state.clickOnCheckbox2})}}),V("label",{className:"card-checkbox-label",htmlFor:"card-checkbox"},"\u05d0\u05e0\u05d9 \u05de\u05d0\u05e9\u05e8 \u05e7\u05d1\u05dc\u05ea \u05d3\u05d9\u05d5\u05d5\u05e8 \u05d5/\u05d0\u05d5 \u05d7\u05d5\u05de\u05e8 \u05e4\u05e8\u05e1\u05d5\u05de\u05d9"))),V("br",null),V("p",{style:{color:"#ff776f"}},this.state.errorMessage),V("div",{className:"card-footer card-content-column-bottom"},V("div",{className:"btn-block"},V("input",{className:m()({"input-submit btn-small":!0," btn-blue":this.state.clickOnCheckbox,"btn-grey":!this.state.clickOnCheckbox}),id:"card-submit",type:"submit",value:"\u05d0\u05d9\u05e9\u05d5\u05e8"})))))),V(f.a,{show:this.props.user.showModal}))}}]),a}(d.Component),C=Object(g.b)(function(e){return{user:e.user}},function(e){return{onSetUserData:function(a){e(x.a.setUserData(a))}}})(y);a.default=C},Qdrh:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/card/CardBlock",function(){return t("KQo5")}])},UHQH:function(e,a,t){"use strict";var r=t("0iUn"),n=t("sLSF"),i=t("MI3g"),s=t("a7VT"),o=t("Tit0"),c=t("q1tI"),l=t.n(c),d=t("TSYQ"),u=t.n(d),p=(t("8i0C"),l.a.createElement),m=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return p(c.Fragment,null,p("div",{className:u()("modal-block modal-effect-slide",{"modal-show":this.props.show})}," ",p("div",{className:"modal-overlay"}),p("div",{className:"modal-content-loader"},p("div",{className:"modal-header"},p("div",{className:"modal-user modal-user-icon-loader"}),p("div",{className:"modal-user-text"},"\u05d1\u05d1\u05d3\u05d9\u05e7\u05d4\u2026")))))}}]),a}(c.Component);a.a=m}},[["Qdrh",1,0,2]]]);