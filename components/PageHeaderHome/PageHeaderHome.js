import React, { Component, Fragment } from "react";
import Link from 'next/link'
import "./PageHeaderHome.scss";

class PageHeaderHome extends Component {
  render() {
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
              {/*  </div> */}
              <div className="page-header-home-subtitle-block">
                <div className="page-header-home-subtitle">בדיקת רקע לדייר</div>
                <div className="page-header-home-subtitle">שכר דירה מובטח</div>
                <div className="page-header-home-subtitle">
                  טיפול בדייר סרבן
                </div>
              </div>
              <div className="btn-flex-btn">
              {this.props.userAuth ? (
                  <AccountComponent />
                ) : (
                  <Link href="/signin">
                    <a className="btn btn-blue btn-medium menu-btn-link"> אני בעל דירה</a>
                  </Link>
                )}
                {/* <button
                  className="btn btn-blue "
                  onClick={e => {
                    this.props.onShowPopup(true);
                  }}
                >
                    בואו נתחיל
                </button> */}
                {<button
                    className="btn btn-grey btn-grey-link"
                    onClick={(e) =>{
                        console.log('clicked')
                        this.props.onShowVideo(true)
                    }}
                >
                    לצפייה בסרטון הסבר
                </button>}
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
  }
}
export default PageHeaderHome;
