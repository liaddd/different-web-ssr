import Link from "next/link";
import "./MyProfile.scss";
import React, { Fragment } from "react";

const MyProfileBlockOrder = props => {
  const fee = props.contract.price
    ? (props.contract.price * 0.025).toFixed(0)
    : 0;
  return (
    <Fragment key={props.contract.id}>
      <div className="order-block">
        <div className="order-block-content">
          <div className="order-inner-content">
            <div className="order-content">
              <h3 className="order-title">שם המשכיר</h3>
              <p className="order-text">
                {props.fName} {props.lName}
              </p>
            </div>

            <div className="order-content">
              <h3 className="order-title">כתובת הנכס</h3>
              <p className="order-text">
                {props.contract.formatted_address}
                {/*ז׳בוטיסקי פינת החשמונאים 110 / 1,*/}
                {/*<br/>*/}
                {/*רמת גן*/}
              </p>
            </div>
          </div>
          <div className="order-inner-content">
            <div className="order-content">
              <h3 className="order-title">עלות חודשית</h3>
              <p className="order-text">
                <span className="order-text-color">{fee}</span> ש״ח לחודש
                <br />
                2.5% מתוך {props.contract.price ? props.contract.price : 0}
              </p>
            </div>
            <div className="order-content">
              <h3 className="order-title">תאריכי שירות בטחון בשכירות</h3>
              <p className="order-text">13 / 05 / 19 - 13 / 05 / 20</p>
            </div>
          </div>
        </div>
        <Link href="personal-info">
          <button className="btn btn-circle order-link">
            בדיקת
            <br /> דייר
          </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default MyProfileBlockOrder;
