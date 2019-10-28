import React, { Fragment } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import "./Info.scss";

const Info = props => {
  return (
    <Fragment>
      <div className="info-page bg-image">
        <div className="container">
          <div className="info-block">
            <h1 className="info-title">
              {props.user.first_name} {props.user.last_name}
            </h1>
            <div className="info-subtitle">
              תודה שרכשת אצלנו את
              <br />
              “הסכם ההבטחה” של DiffeRent.
            </div>
            {/* <p className="info-text">
              <strong>
                בדרך לפגוש את השוכר החדש, לא לשכוח…
              </strong>
            </p>
            <p className="info-text">
              לקחת המחאות פתוחות - חשבון ארנונה,גז ומים
            </p>
            <p className="info-text info-text-center">
              <strong>
                ומה קורה אם אני רוצה לעשות מימוש או ביטול בטחון בשכירות?
              </strong>
            </p> */}
            <p className="info-contacts">לכל פנייה ושאלה אנו כאן לשירותך,</p>
            <div className="info-column">
              <div className="info-column-item">
                <h4 className="info-column-title">מייל :</h4>
                {/* <a href="mailto:service@diffe-rent.co.il">service@diffe-rent.co.il</a> */}
                <a href="mailto:service@diffe-rent.co.il">
                  service@diffe-rent.co.il
                </a>
              </div>
              <div className="info-column-item">
                <h4 className="info-column-title">טלפון :</h4>
                <a href="tel:050-2192570">050-2192570</a>
              </div>
            </div>
            <p className="info-contacts">
              שעות פעילות: ימים א'-ה' בין השעות 9:00-18:00.
            </p>
            <div className="btn-block">
              <Link href={"/personal-info"} as={"/personal-info/1"}>
                <div className="text-w">
                  <button className="btn btn-blue btn-small ">
                    + הוסף בטחון לשכירות לנכס נוסף
                  </button>
                </div>
              </Link>
            </div>
            <div className="btn-block">
              <Link href="/">
                <button className="btn btn-white btn-small ">הבנתי</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
