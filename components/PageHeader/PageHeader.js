import React, { Component, Fragment } from "react";

import "./PageHeader.scss";

class PageHeader extends Component {
  render() {
    if (this.props.PageHeaderTitle === void 0)
      throw new Error("PageHeaderTitle is required");

    return (
      <Fragment>
        <div className="section page-header-section page-header-img">
          <div className="container">
            <div className="page-header-block">
              {this.props.PageHeaderTitle ? (
                <h1 className="page-header-title">
                  {this.props.PageHeaderTitle}
                </h1>
              ) : null}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default PageHeader;
