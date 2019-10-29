import React, { Fragment } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import "./PageHeaderHome.scss";

const PageHeaderHome = ({ auth, onShowVideo }) => {
  return (
    <Fragment>
      <div className="section page-header-home-section page-header-home-img">
        <div className="container margin-top-container">
          <div className="page-header-home-block">
            {/*  <div className="page-header-home-title"> */}
            <h1 className="page-header-home-title">
              בעל דירה להשכרה?
              <br />
              מהיום תוכל לישון בשקט
            </h1>
            <div className="page-header-home-subtitle-block">
              <div className="page-header-home-subtitle">בדיקת רקע לדייר</div>
              <div className="page-header-home-subtitle">שכר דירה מובטח</div>
              <div className="page-header-home-subtitle">טיפול בדייר סרבן</div>
            </div>
            <div className="btn-flex-btn">
              <Link href={auth ? "/personal-info/1" : "/signin"}>
                <a className="btn btn-blue btn-medium menu-btn-link">
                  אני בעל דירה
                </a>
              </Link>

              {/* <button
                  className="btn btn-blue "
                  onClick={e => {
                    this.props.onShowPopup(true);
                  }}
                >
                    בואו נתחיל
                </button> */}

              <button
                className="btn btn-grey btn-grey-link"
                onClick={e => {
                  onShowVideo(true);
                }}
              >
                לצפייה בסרטון הסבר
              </button>

              {/* <button
                  className="btn btn-grey btn-grey-link"
                  onClick={e => {
                    this.props.onSowSubscibe(true);
                  }}
                >
                  חוזה שכירות מותאם אישית
                </button> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.user.auth
});

export default connect(
  mapStateToProps,
  {}
)(PageHeaderHome);
