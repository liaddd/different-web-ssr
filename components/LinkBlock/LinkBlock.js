import React, { Component, Fragment } from "react";

import "./LinkBlock.scss";
import linkIcon1 from "./../../public/icons/md-lawfirm.png";
import linkIcon2 from "./../../public/icons/dun-bradstreet.svg";

class LinkBlock extends Component {
  render() {
    return (
      <Fragment>
        <div className="section section-header-links">
          <div className="container">
            <div className="header-link-block">
              <div className="header-link">
                <img src={linkIcon1} alt="" />
              </div>
              {/* <div className="header-link">
                <img src={linkIcon2} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LinkBlock;
