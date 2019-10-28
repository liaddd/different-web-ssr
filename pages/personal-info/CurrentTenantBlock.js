import React, { Component, Fragment } from "react";
import cn from "classnames";
import { connect } from "react-redux";
import Router from "next/router";

import "./PersonalInfo.scss";
import validator from "../../utils/validate";
import requestClient from "../../utils/requestClient/requests";
import { stepper } from "../../actions/forms/forms.actions";
import UserActions from "../../actions/users/users.actions";
import ModalPersonalInfo from "../../components/Modal/ModalPersonalInfo";
import { get } from "lodash";
import ModalLoader from "../../components/Modal/ModalLoader";
import { logout } from "../../actions/common/common.actions";
const DEFAULT_ERROR = "value isn't valid ";
const DEFAULT_ERROR_ID = "*ת.ז לא תקינה";
const ERROR_RESPONSE = "אתה לא יכול לבדוק את עצמך";
const MAX_VALIDATE_TENANTS = 5;

class CurrentTenantBlock extends Component {
  state = {
    showModal: false,
    showModalError: false,
    checked_user: null,
    checkBox: false,
    declarationCheckBox: false,
    errorMessage: "",
    checked_users: this.props.user.checked_users
  };
  // componentWillUpdate(nextProps, nextState) {
  //         const checkedUserProps= get(this.props,'user.checked_users',[])
  //         const checkedUserNext =get(nextProps,'user.checked_users',[])
  //        if(checkedUserProps.length!==checkedUserNext.length){
  //          this.setState({checked_users:checkedUserNext})
  //         }
  // }
  sendData = data => {
    if (data) {
      this.setState({ ...data });
    } else this.setState({ showModal: false });
  };
  initiateTenant = (tenant, id) => {
    const number = id + 1;
    return (
      <Fragment key={id}>
        <div className="personal-info-form-title">
          <span className="personal-info-form-title-text">דייר</span>
          <span className="personal-info-form-title-number">{number}</span>
        </div>
        <div className="personal-info-form-container form-container">
          <p className="input-block-row">
            <label
              htmlFor="input-personal-info-first-name"
              className={cn("input-label", {
                "input-error":
                  this.state.checked_users &&
                  this.state.checked_users[id] &&
                  this.state.checked_users[id].hasOwnProperty(
                    "first_nameValidate"
                  ) &&
                  this.state.checked_users[
                    id
                  ].first_nameValidate.hasOwnProperty("error") &&
                  this.state.checked_users[id].first_nameValidate.error !==
                    void 0,
                "input-not-empty":
                  this.state.checked_users[id] &&
                  this.state.checked_users[id].first_name &&
                  this.state.checked_users[id].first_name.length > 0
              })}
            >
              <input
                className="input-text input-text-grey"
                type="text"
                id="input-personal-first-name"
                placeholder="&nbsp;"
                value={
                  this.state.checked_users[id].first_name
                    ? this.state.checked_users[id].first_name
                    : ""
                }
                onChange={e => {
                  let tenants = this.state.checked_users;
                  tenants[id].first_name = e.target.value;

                  this.setState({ tenants });
                }}
              />
              <span className="input-label-span"> *שם הפרטי</span>
              <span className="input-border"></span>
              {this.state.checked_users[id] &&
                this.state.checked_users[id].hasOwnProperty(
                  "first_nameValidate"
                ) &&
                this.state.checked_users[id].first_nameValidate.hasOwnProperty(
                  "error"
                ) &&
                this.state.checked_users[id].first_nameValidate.error !==
                  void 0 && (
                  <span className="personal-info-input-error span-error">
                    error
                  </span>
                )}
            </label>
          </p>
          <p className="input-block-row">
            <label
              htmlFor="input-personal-info-last-name"
              className={cn("input-label", {
                "input-error":
                  this.state.checked_users[id] &&
                  this.state.checked_users[id].hasOwnProperty(
                    "last_nameValidate"
                  ) &&
                  this.state.checked_users[id].last_nameValidate.hasOwnProperty(
                    "error"
                  ) &&
                  this.state.checked_users[id].last_nameValidate.error !==
                    void 0,
                "input-not-empty":
                  this.state.checked_users[id] &&
                  this.state.checked_users[id].last_name &&
                  this.state.checked_users[id].last_name.length > 0
              })}
            >
              <input
                className="input-text input-text-grey"
                type="text"
                id="input-personal-info-last-name"
                placeholder="&nbsp;"
                value={
                  this.state.checked_users[id].last_name
                    ? this.state.checked_users[id].last_name
                    : ""
                }
                onChange={e => {
                  let tenants = this.state.checked_users;
                  tenants[id].last_name = e.target.value;

                  this.setState({ tenants });
                }}
              />
              <span className="input-label-span">*שם משפחתי</span>
              <span className="input-border"></span>
              {this.state.checked_users[id] &&
                this.state.checked_users[id].hasOwnProperty(
                  "last_nameValidate"
                ) &&
                this.state.checked_users[id].last_nameValidate.hasOwnProperty(
                  "error"
                ) &&
                this.state.checked_users[id].last_nameValidate.error !==
                  void 0 && (
                  <span className="personal-info-input-error span-error">
                    error
                  </span>
                )}
            </label>
          </p>
          <p className="input-block-row">
            <label
              htmlFor="input-personal-info-id-number"
              className={cn("input-label", {
                "input-error":
                  this.state.checked_users[id] &&
                  this.state.checked_users[id].hasOwnProperty(
                    "id_numberValidate"
                  ) &&
                  this.state.checked_users[id].id_numberValidate.hasOwnProperty(
                    "error"
                  ) &&
                  this.state.checked_users[id].id_numberValidate.error !==
                    void 0,
                "input-not-empty":
                  this.state.checked_users[id] &&
                  this.state.checked_users[id].id_number &&
                  this.state.checked_users[id].id_number.length > 0
              })}
            >
              <input
                className="input-text input-text-grey"
                type="number"
                id="input-personal-info-id-number"
                placeholder="&nbsp;"
                value={
                  this.state.checked_users[id].id_number
                    ? this.state.checked_users[id].id_number
                    : ""
                }
                onChange={e => {
                  let tenants = this.state.checked_users;
                  tenants[id].id_number = e.target.value;

                  this.setState({ tenants });
                }}
              />
              <span className="input-label-span">*מספר ת.ז</span>
              <span className="input-border"></span>
              {this.state.checked_users[id] &&
                this.state.checked_users[id].hasOwnProperty(
                  "id_numberValidate"
                ) &&
                this.state.checked_users[id].id_numberValidate.hasOwnProperty(
                  "error"
                ) &&
                this.state.checked_users[id].id_numberValidate.error !==
                  void 0 && (
                  <span className="personal-info-input-error span-error">
                    {DEFAULT_ERROR_ID}
                  </span>
                )}
            </label>
          </p>
          <p className="input-block-row">
            <label
              htmlFor="input-personal-info-phone-number"
              className={cn("input-label", {
                "input-error":
                  this.state.checked_users[id] &&
                  this.state.checked_users[id].hasOwnProperty(
                    "phoneValidate"
                  ) &&
                  this.state.checked_users[id].phoneValidate.hasOwnProperty(
                    "error"
                  ) &&
                  this.state.checked_users[id].phoneValidate.error !== void 0,
                "input-not-empty":
                  this.state.checked_users[id] &&
                  this.state.checked_users[id].phone &&
                  this.state.checked_users[id].phone.length > 0
              })}
            >
              <input
                className="input-text input-text-grey"
                type="tel"
                dir="auto"
                style={{ textAlign: "end" }}
                id="input-personal-info-phone-number"
                placeholder="&nbsp;"
                value={
                  this.state.checked_users[id].phone
                    ? this.state.checked_users[id].phone
                    : ""
                }
                onChange={e => {
                  let tenants = this.state.checked_users;
                  tenants[id].phone = e.target.value;

                  this.setState({ tenants });
                }}
              />
              <span className="input-label-span">*מספר טלפון</span>
              <span className="input-border"></span>
              {this.state.checked_users[id] &&
                this.state.checked_users[id].hasOwnProperty("phoneValidate") &&
                this.state.checked_users[id].phoneValidate.hasOwnProperty(
                  "error"
                ) &&
                this.state.checked_users[id].phoneValidate.error !== void 0 && (
                  <span className="personal-info-input-error span-error">
                    error
                  </span>
                )}
            </label>
          </p>
        </div>
      </Fragment>
    );
  };

  validateTenant = tenant => {
    let first_name = validator.validate.validate(
      validator.constants.InputStringRegex,
      tenant.first_name,
      DEFAULT_ERROR
    );

    if (first_name && first_name.error) {
      tenant.first_nameValidate.error = first_name.error;
    } else {
      if (get(tenant, "first_nameValidate.error")) {
        tenant.first_nameValidate.error = void 0;
      } else {
        tenant.first_nameValidate = { error: void 0 };
      }
    }

    let last_name = validator.validate.validate(
      validator.constants.InputStringRegex,
      tenant.last_name,
      DEFAULT_ERROR
    );
    if (last_name && last_name.error) {
      tenant.last_nameValidate.error = last_name.error;
    } else {
      if (get(tenant, "last_nameValidate.error")) {
        tenant.last_nameValidate.error = void 0;
      } else {
        tenant.last_nameValidate = { error: void 0 };
      }
    }

    let id_number = validator.validate.validate(
      validator.constants.IdNumberRegex,
      tenant.id_number,
      DEFAULT_ERROR_ID
    );
    if (id_number && id_number.error) {
      tenant.id_numberValidate.error = id_number.error;
    } else {
      if (get(tenant, "id_numberValidate.error")) {
        tenant.id_numberValidate.error = void 0;
      } else {
        tenant.id_numberValidate = { error: void 0 };
      }
    }

    let phone = validator.validate.validate(
      validator.constants.IsraelPhoneNumberRegex,
      tenant.phone,
      DEFAULT_ERROR
    );
    if (phone && phone.error) {
      tenant.phoneValidate.error = phone.error;
    } else {
      if (get(tenant, "phoneValidate.error")) {
        tenant.phoneValidate.error = void 0;
      } else {
        tenant.phoneValidate = { error: void 0 };
      }
    }

    if (tenant.property_id === null) {
      tenant.property_id = this.props.user.id;
    }

    return tenant;
  };

  onSubmit = e => {
    let validateForm = [];
    let validateFormToString = [];
    e.preventDefault();
    let tenants = this.state.checked_users;
    const validatedTenants = tenants.map(tenant => {
      return this.validateTenant(tenant);
    });

    this.setState({ tenants: validatedTenants });
    let users = [];
    for (let i = 0, length = tenants.length - 1; i <= length; i++) {
      if (
        tenants[i].first_nameValidate.error !== void 0 ||
        tenants[i].last_nameValidate.error !== void 0 ||
        tenants[i].id_numberValidate.error !== void 0 ||
        tenants[i].phoneValidate.error !== void 0
      ) {
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
      this.setState({ loading: true });
      //this.props.onSetUserData({showModal: true});
      requestClient
        .step3(users, this.props.user.auth.session_token)
        .then(data => {
          if (get(data, "data.credit")) {
            const resUsers = get(data, "data.checked_users", []);
            const result = resUsers.filter(user => user.exist_tenant_id); // TODO return only with exist_tenant_id
            this.setState({
              showModal: true,
              showModalError: false,
              loading: false,
              result,
              errorMessage: ""
            });
            // this.props.onSetUserData({credit:data.data.credit, checked_users_step3:result, buttonsCount:result.length})
          } else {
            this.setState({
              showModalError: true,
              showModal: true,
              loading: false,
              errorMessage: "לא עבר בדיקה"
            });
          }
        })
        .catch(error => {
          let errorMessage = "";
          if (get(error, "response.data.errorCode") === "INVALID_ID") {
            errorMessage = DEFAULT_ERROR_ID;
          }
          if (get(error, "response.data.errorCode") === "BAD_DATA") {
            errorMessage = ERROR_RESPONSE;
          }
          if (get(error, "response.data.errorCode") === "CREDIT_SCORE_ERROR") {
            errorMessage = "לא עבר בדיקה";
          }
          if(get(error,'response.data.errorCode')==="E164_NUMBER"){
            errorMessage = 'מספר טלפון לא תקין'
          }
          // this.props.onSetUserData({showModal: false});
          this.setState({
            showModal: true,
            showModalError: true,
            loading: false,
            errorMessage
          });
          if (get(error, "response.data.errorCode") === "UNAUTHORIZED") {
            this.props.onLogout();
            Router.push("/");
          }
        });
    }
  };

  render() {
    const checked_users = get(this.props, "user.checked_users", []);
    return (
      <Fragment>
        {this.state.showModal && this.state.result && (
          <ModalPersonalInfo
            show={this.state.showModal}
            users={this.state.result}
            sendData={this.sendData}
            showError={this.state.showModalError}
          />
        )}
        <ModalLoader show={this.state.loading} />
        <form
          className="personal-info-form-3 personal-info-form"
          id="personal-info-form"
          onSubmit={this.onSubmit}
          noValidate
        >
          {checked_users.map((tenant, i) => this.initiateTenant(tenant, i))}

          {this.state.checked_users &&
            this.state.checked_users.length < MAX_VALIDATE_TENANTS && (
              <div
                className="personal-info-add-block"
                onClick={() => {
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
                    this.setState({ checked_users: tenants });
                    this.props.onSetUserData({
                      buttonsCount: tenants.length,
                      checked_users: tenants
                    });
                  }
                }}
              >
                <div className="personal-info-add">
                  <img
                    className="personal-info-add-icon"
                    src="/img/plus-icon-white.svg"
                    alt=""
                  />
                  האם יש דייר נוסף בהסכם השכירות אותו תרצה שנבדוק?
                </div>
              </div>
            )}
          <div className="personal-info-checkbox-block">
            {this.props.activeRadioButton === 1 && (
              <label
                className="personal-info-label-checkbox"
                htmlFor="personal-info-checkbox"
              >
                <input
                  className="personal-info-input-checkbox input-checkbox"
                  id="personal-info-checkbox"
                  checked={this.state.checkBox}
                  onChange={e => {
                    this.setState({ checkBox: !this.state.checkBox });
                  }}
                  type="checkbox"
                />
                הצהרתי לגבי דייר זה: התשלום בגין חודש השכירות הראשון שולם בזמן
                ולא היו מאז עיכובים ו/או חוסרים בתשלום.
              </label>
            )}
          </div>
          <div className="personal-info-checkbox-block">
            <label
              className="personal-info-label-checkbox"
              htmlFor="personal-info-checkbox"
            >
              <input
                className="personal-info-input-checkbox input-checkbox"
                id="personal-info-checkbox"
                checked={this.state.declarationCheckBox}
                onChange={e => {
                  this.setState({
                    declarationCheckBox: !this.state.declarationCheckBox
                  });
                }}
                type="checkbox"
              />
              הנני מצהיר כי אני מיידע את השוכר בהעברת הנתונים לצורך בדיקה ורכישת
              מוצר הבטחת שכר הדירה
            </label>
          </div>
          <p style={{ color: "#e7736d" }}>{this.state.errorMessage}</p>
          <div className="btn-block">
            <input
              className={
                this.state.declarationCheckBox &&
                (this.state.checkBox || this.props.activeRadioButton !== 1)
                  ? "input-submit btn-small btn-blue btn-bold"
                  : "input-submit btn-small btn-grey btn-bold"
              }
              id="personal-info-submit"
              disabled={
                !this.state.checkBox && this.props.activeRadioButton === 1
              }
              type="submit"
              value="בדוק"
            />
          </div>
        </form>
      </Fragment>
    );
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
      dispatch(stepper(action));
    },
    onSetUserData: action => {
      dispatch(UserActions.setUserData(action));
    },
    onLogout: action => {
      dispatch(logout(action));
    }
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentTenantBlock);

export default withConnect;
