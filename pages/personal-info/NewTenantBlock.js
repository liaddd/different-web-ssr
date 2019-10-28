import React, { Component, Fragment } from "react";

import plusIcon from "../../public/img/plus-icon-white.svg";

class NewTenantBlock extends Component {
  render() {
    return (
      <Fragment>
        <form
          className="personal-info-form-3 personal-info-form"
          id="personal-info-form"
          noValidate
        >
          <div className="personal-info-form-title">
            <span className="personal-info-form-title-text">דייר</span>
            <span className="personal-info-form-title-number">1</span>
          </div>
          <div className="personal-info-form-container form-container">
            <p className="input-block-row">
              <label
                htmlFor="input-personal-info-first-name"
                className="input-label"
              >
                <input
                  className="input-text input-text-grey"
                  type="text"
                  id="input-personal-first-name"
                  placeholder="&nbsp;"
                />
                <span className="input-label-span">*שם הפרטי</span>
                <span className="input-border"></span>
                <span className="personal-info-input-error span-error"></span>
              </label>
            </p>
            <p className="input-block-row">
              <label
                htmlFor="input-personal-info-last-name"
                className="input-label"
              >
                <input
                  className="input-text input-text-grey"
                  type="text"
                  id="input-personal-info-last-name"
                  placeholder="&nbsp;"
                />
                <span className="input-label-span">*שם משפחתי</span>
                <span className="input-border"></span>
                <span className="personal-info-input-error span-error"></span>
              </label>
            </p>
            <p className="input-block-row">
              <label
                htmlFor="input-personal-info-id-number"
                className="input-label"
              >
                <input
                  className="input-text input-text-grey"
                  type="number"
                  id="input-personal-info-id-number"
                  placeholder="&nbsp;"
                />
                <span className="input-label-span">*מספר ת.ז</span>
                <span className="input-border"></span>
                <span className="personal-info-input-error span-error"></span>
              </label>
            </p>
            <p className="input-block-row">
              <label
                htmlFor="input-personal-info-phone-number"
                className="input-label"
              >
                <input
                  className="input-text input-text-grey"
                  type="tel"
                  id="input-personal-info-phone-number"
                  placeholder="&nbsp;"
                />
                <span className="input-label-span">*מספר טלפון</span>
                <span className="input-border"></span>
                <span className="personal-info-input-error span-error"></span>
              </label>
            </p>
            <div className="personal-info-add-block">
              <div className="personal-info-add">
                <img className="personal-info-add-icon" src={plusIcon} alt="" />
                הוסף דייר השותף לדירה זו
              </div>
            </div>
          </div>
          <div className="btn-block">
            <input
              className="input-submit btn-small btn-blue btn-bold"
              id="personal-info-submit"
              type="submit"
              value="בדוק"
            />
          </div>
        </form>
      </Fragment>
    );
  }
}

export default NewTenantBlock;
