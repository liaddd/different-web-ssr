import React, {Component, Fragment} from 'react';
import cn from "classnames";
import {get} from 'lodash'
import Router from 'next/router'
import validator from "../../utils/validate";
import requestClient from "../../utils/requestClient/requests";
import UserActions from "../../actions/users/users.actions";
import {connect} from "react-redux";
import ModalLoader from "./../../components/Modal/ModalLoader";

const DEFAULT_ERROR = " אחד או יותר מהפרטים אינו נכון ";

class CardBlock extends Component {
    state = {
        formValid: false,
        cardNumber: null,
        cardExpireDate: null,
        cvv: null,
        name: null,
        idNumber: null,
        email: null,
      errorMessage:'',
      clickOnCheckbox:false,
      clickOnCheckbox2:false,
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
    };

  // onValidateForm
    onValidateForm = () => {
        let cardNumber = validator.validate.validate(validator.constants.CreditCardRegex, this.state.cardNumber, DEFAULT_ERROR);

        if (cardNumber && cardNumber.error) {
            this.setState({cardNumberValidate: {error: cardNumber.error}})
        } else {
            this.setState({cardNumberValidate: {error: void 0}})
        }

        let cardExpireDate = validator.validate.validate(validator.constants.InputStringRegex, this.state.cardExpireDate, DEFAULT_ERROR);
        if (cardExpireDate && cardExpireDate.error) {
            this.setState({cardExpireDateValidate: {error: cardExpireDate.error}})
        } else {
            this.setState({cardExpireDateValidate: {error: void 0}})
        }

        let cvv = validator.validate.validate(validator.constants.InputStringRegex, this.state.cvv, DEFAULT_ERROR);
        if (cvv && cvv.error) {
            this.setState({cvvValidate: {error: cvv.error}})
        } else {
            this.setState({cvvValidate: {error: void 0}})
        }

        let name = validator.validate.validate(validator.constants.InputStringRegex, this.state.name, DEFAULT_ERROR);
        if (name && name.error) {
            this.setState({nameValidate: {error: name.error}})
        } else {
            this.setState({nameValidate: {error: void 0}})
        }

        let idNumber = validator.validate.validate(validator.constants.IdNumberRegex, this.state.idNumber, DEFAULT_ERROR);
        if (idNumber && idNumber.error) {
            this.setState({idNumberValidate: {error: idNumber.error}})
        } else {
            this.setState({idNumberValidate: {error: void 0}})
        }

        let email = validator.validate.validate(validator.constants.EmailRegex, this.state.email, DEFAULT_ERROR);
        if (email && email.error) {
            this.setState({emailValidate: {error: email.error}})
        } else {
            this.setState({emailValidate: {error: void 0}})
        }

        return cardNumber.valid && cardExpireDate.valid && cvv.valid && name.valid && idNumber.valid && email.valid;
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.onValidateForm() && this.state.clickOnCheckbox) {
              this.props.onSetUserData({ formValid: false,showModal: true});
              const splitDate = this.state.cardExpireDate.split('/');
              requestClient.cardChecker(
                {
                  "CardNumber": this.state.cardNumber,
                  "ExpirationMonth": splitDate[0],
                  "ExpirationYear": splitDate[1],
                  "CVV": this.state.cvv,
                  "CitizenID": this.state.idNumber,
                  "Credentials": {
                    "CompanyID": 34087818,
                    "APIPublicKey": "HQDWdkU5aGZ3za8faQtleVaKmCOjJ8BtZk0wYV47ii3GlW6oXS"
                  },
                  "ResponseLanguage": "he"
                },
                this.props.user.auth.session_token,
              )
                .then((data) => {
                  if(data.data.UserErrorMessage){
                    this.setState({errorMessage:data.data.UserErrorMessage})
                  }
                  return data;

                })
                .then((data) => {
                  const token = data.data.Data.SingleUseToken;

                  const prepareData = {
                    "property_id": this.props.user.id,
                    "tenant_id": get(this.props,'user.selected_tenant_user.id_number',''),
                    "is_agent": false,
                    "card": {
                      "user_id": this.props.user.id,
                      "token": token,
                      "card_holder_id": this.state.idNumber,
                      "card_holder_name": this.state.name,
                      "invoice_email": this.state.email
                    }
                  };

                  requestClient.guaranteeAgreement(prepareData, this.props.user.auth.session_token)
                    .then((data) => {
                      data.data.showModal = false;

                      this.props.onSetUserData(data.data);
                      Router.push('/info')
                    })
                    .catch((error) => {
                      let errorM = "אחד או יותר מפרטי האשראי שגוי"
                      if(get(error,'response.data.errorMessage')!=='tenant_id key is required'){
                        errorM =get(error,'response.data.errorMessage','')
                      }
                      this.setState({errorMessage:errorM});
                      this.props.onSetUserData({showModal: false});

                    });
                })
                .catch(
                  (error) => {
                    this.setState({errorMessage:"אחד או יותר מפרטי האשראי שגוי"});
                    console.error(error);
                    this.props.onSetUserData({showModal: false});

                  }
                )
        } else {
            this.setState({formValid: false})
        }
    };

    render() {
      return (
            <Fragment>
                <section className="card-block">
                    <div className="card-block-form">
                        <form
                            className="card-form"
                            id="card-form"
                            onSubmit={(e) => this.onSubmit(e)}
                            noValidate
                        >
                            <div className="card-content-column-top">
                                <header className="card-header">
                                    <h2 className="card-header-title">
                                        אמצעי תשלום
                                    </h2>
                                </header>
                                <div className="card-form-container form-container">
                                    <p className="input-block">
                                        <label
                                            htmlFor="input-card-card-number"
                                            className={
                                                cn({
                                                    "input-label": true,
                                                    "input-not-empty": this.state.cardNumber && this.state.cardNumber.length > 0,
                                                    "input-error": this.state.cardNumberValidate.error !== void 0
                                                })
                                            }
                                        >
                                            <input
                                                className="input-text input-text-grey"
                                                type="tel"
                                                id="input-card-card-number"
                                                placeholder="&nbsp;"
                                                onChange={
                                                    (e) => {
                                                        this.setState({cardNumber: e.target.value})
                                                    }
                                                }
                                            />
                                            <span className="input-label-span">
                                            מספר כרטיס אשראי
                                        </span>
                                            <span className="input-border"></span>

                                            {this.state.cardNumberValidate.error !== void 0 &&
                                            <span className="card-input-error span-error">מספר כרטיס אשראי</span>}

                                        </label>
                                    </p>
                                    <p className="input-block-row">
                                        <label
                                            htmlFor="input-card-validity"
                                            className={
                                                cn({
                                                    "input-label": true,
                                                    "input-not-empty": this.state.cardExpireDate && this.state.cardExpireDate.length > 0,
                                                    "input-error": this.state.cardExpireDateValidate.error !== void 0
                                                })
                                            }
                                        >
                                            <input
                                                className="input-text input-text-grey"
                                                type="text"
                                                id="input-card-validity"
                                                placeholder="&nbsp;"
                                                onChange={
                                                    (e) => {
                                                        this.setState({cardExpireDate: e.target.value})
                                                    }
                                                }
                                                onBlur={
                                                    (e) => {
                                                        if(this.state.cardExpireDate && !this.state.cardExpireDate.includes("/")){
                                                            this.setState({cardExpireDate : e.target.value.slice(0 , 2) + "/" + e.target.value.slice(2,4)})
                                                            e.target.value = e.target.value.slice(0 , 2) + "/" + e.target.value.slice(2,4)
                                                        }
                                                    }
                                                }
                                            />
                                            <span className="input-label-span">
                                                תוקף הכרטיס
                                            </span>
                                            <span className="input-border"></span>
                                            {this.state.cardExpireDateValidate.error !== void 0 &&
                                            <span className="card-input-error span-error">require</span>}

                                        </label>
                                    </p>
                                    <p className="input-block-row cvv-key-block">
                                        <label
                                            htmlFor="input-cvv"
                                            className={
                                                cn({
                                                    "input-label": true,
                                                    "input-not-empty": this.state.cvv && this.state.cvv.length > 0,
                                                    "input-error": this.state.cvvValidate.error !== void 0
                                                })
                                            }
                                        >
                                            <input
                                                className="input-email input-text-grey cvv-key-input"
                                                type="password"
                                                id="input-cvv"
                                                placeholder="&nbsp;"
                                                onChange={
                                                    (e) => {
                                                        this.setState({cvv: e.target.value})
                                                    }
                                                }
                                            />
                                            <span className="input-label-span">
                                                CVV
                                            </span>
                                            <span className="input-border"></span>
                                            {this.state.cvvValidate.error !== void 0 &&
                                            <span className="card-input-error span-error">require</span>}
                                        </label>
                                    </p>
                                    <p className="input-block">
                                        <label
                                            htmlFor="input-card-name"
                                            className={
                                                cn({
                                                    "input-label": true,
                                                    "input-not-empty": this.state.name && this.state.name.length > 0,
                                                    "input-error": this.state.nameValidate.error !== void 0
                                                })
                                            }
                                        >
                                            <input
                                                className="input-text input-text-grey"
                                                type="text"
                                                id="input-card-name"
                                                placeholder="&nbsp;"
                                                onChange={
                                                    (e) => {
                                                        this.setState({name: e.target.value})
                                                    }
                                                }
                                            />
                                            <span className="input-label-span">
                                            שם בעל הכרטיס
                                        </span>
                                            <span className="input-border"></span>
                                            {this.state.nameValidate.error !== void 0 &&
                                            <span className="card-input-error span-error">require</span>}

                                        </label>
                                    </p>
                                    <p className="input-block">
                                        <label
                                            htmlFor="input-card-id-number"
                                            className={
                                                cn({
                                                    "input-label": true,
                                                    "input-not-empty": this.state.idNumber && this.state.idNumber.length > 0,
                                                    "input-error": this.state.idNumberValidate.error !== void 0
                                                })
                                            }
                                        >
                                            <input
                                                className="input-text input-text-grey"
                                                type="number"
                                                id="input-card-id-number"
                                                placeholder="&nbsp;"
                                                onChange={
                                                    (e) => {
                                                        this.setState({idNumber: e.target.value})
                                                    }
                                                }
                                            />
                                            <span className="input-label-span">
                                            מספר ת.ז של בעל הכרטיס
                                        </span>
                                            <span className="input-border"></span>
                                            {this.state.idNumberValidate.error !== void 0 &&
                                            <span className="card-input-error span-error">*ת.ז לא תקינה</span>}

                                        </label>
                                    </p>
                                    <p className="input-block">
                                        <label
                                            htmlFor="input-card-email"
                                            className={
                                                cn({
                                                    "input-label": true,
                                                    "input-not-empty": this.state.email && this.state.email.length > 0,
                                                    "input-error": this.state.emailValidate.error !== void 0
                                                })
                                            }
                                        >
                                            <input
                                                className="input-text input-text-grey"
                                                type="email"
                                                id="input-card-email"
                                                placeholder="&nbsp;"
                                                onChange=   {
                                                    (e) => {
                                                        this.setState({email: e.target.value})
                                                    }
                                                }
                                            />
                                            <span className="input-label-span">
                                            דואר אלקטרוני לשליחת חשבונית
                                        </span>
                                            <span className="input-border"></span>
                                            {this.state.emailValidate.error !== void 0 &&
                                            <span className="card-input-error span-error">require</span>}

                                        </label>
                                    </p>
                                </div>
                                <div className="card-block-checkbox">
                                    <input className="card-checkbox input-checkbox" id="card-checkbox" type="checkbox"
                                           checked={this.state.clickOnCheckbox} onChange={()=>this.setState({clickOnCheckbox:!this.state.clickOnCheckbox})}/>
                                    <label className="card-checkbox-label" htmlFor="card-checkbox">
                                        קראתי ואני מאשרת את
                                      <a href="https://diffe-rent.s3-eu-west-1.amazonaws.com/%D7%91%D7%98%D7%97%D7%95%D7%9F+%D7%91%D7%A9%D7%9B%D7%99%D7%A8%D7%95%D7%AA+-+DiffeRent.pdf" target="_blank"> תנאי שירות בטחון בשכירות </a>
                                    </label>
                                </div>
                              <br/>
                              <div className="card-block-checkbox">
                                <input className="card-checkbox input-checkbox" id="card-checkbox" type="checkbox"  checked={this.state.clickOnCheckbox2} onChange={()=>this.setState({clickOnCheckbox2:!this.state.clickOnCheckbox2})}/>
                                <label className="card-checkbox-label" htmlFor="card-checkbox">
                                  אני מאשר קבלת דיוור ו/או חומר פרסומי
                                </label>
                              </div>
                            </div>
                          <br/>
                            <p style={{color:"#ff776f"}}>{this.state.errorMessage}</p>
                            <div className="card-footer card-content-column-bottom">
                                <div className="btn-block">
                                    <input className={cn({"input-submit btn-small":true," btn-blue" :this.state.clickOnCheckbox, "btn-grey":!this.state.clickOnCheckbox })} id="card-submit" type="submit"
                                           value="אישור"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
              <ModalLoader show={this.props.user.showModal}/>
            </Fragment>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.user,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSetUserData: action => {
            dispatch(UserActions.setUserData(action))
        }
    }
};

const withConnect = connect(mapStateToProps, mapDispatchToProps)(CardBlock);

export default withConnect;