import React, { Fragment } from "react";

import "./MyProfile.scss";
import PriceForm from "./../../components/PriceForm/PriceForm";
import Link from "next/link";

const MyProfileEmpty = props => {
  return (
    <Fragment>
      <div className="myprofile-block">
        <div className="myprofile-block-title">
          <h2 className="myprofile-title">אין כרגע עסקאות חדשות </h2>
          <div className="btn-block">
            <Link href={props.userAuth ? "personal-info" : "signin"}>
              <button className="btn btn-blue btn-small">
                רוצה בטחון בשכירות
              </button>
            </Link>
          </div>
        </div>
        <div className="myprofile-block-form">
          <PriceForm PriceFormTitle={`עלות השירות לשכר הדירה שאני מבקש:`} />
        </div>
      </div>
    </Fragment>
  );
};

export default MyProfileEmpty;
