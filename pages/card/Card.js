import React, { Component, Fragment } from "react";
import Link from "next/link";
import ReactResizeDetector from "react-resize-detector";

import SummaryBlock from "./../../components/SummaryBlock/SummaryBlock";
import CardBlock from "./CardBlock";
import ModalInfo from "./../../components/Modal/ModalInfo";
import { MOBILE_VIEW_SIZE } from "../../actions/common/common.actions.constants";
import "./Card.scss";

class Card extends Component {
  state = {
    checkedItem: 1,
    width: 0,
    height: 0
  };

  // onResize
  onResize = (width, height) => {
    this.setState(prevProps => {
      return { ...prevProps, ...{ width, height } };
    });
  };

  render() {
    return (
      <Fragment>
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize}>
          <div className="card-page bg-image">
            <div className="container">
              <div className="card-menu-block">
                <nav className="card-menu">
                  <input
                    type="radio"
                    className="card-menu-input"
                    id="card-menu-input-1"
                    checked={this.state.checkedItem === 1}
                    onChange={e => {
                      e.preventDefault();
                    }}
                  />
                  <label
                    className="card-menu-label"
                    // htmlFor="card-menu-input-1"
                    onClick={() => {
                      this.setState({ checkedItem: 1 });
                    }}
                  />
                  <input
                    type="radio"
                    className="card-menu-input"
                    id="card-menu-input-2"
                    checked={this.state.checkedItem === 2}
                    onChange={e => {
                      e.preventDefault();
                    }}
                  />
                  <label
                    className="card-menu-label"
                    // htmlFor="card-menu-input-2"
                    onClick={() => {
                      this.setState({ checkedItem: 2 });
                    }}
                  />
                </nav>
              </div>
              <div className="arrow-right-block">
                <Link href={"/personal-info/step4"}>
                  <a className="arrow-right-link">חזור</a>
                </Link>
              </div>
              <div className="card-page-block">
                {MOBILE_VIEW_SIZE < this.state.width ||
                this.state.checkedItem === 1 ? (
                  <SummaryBlock
                    SummaryHeaderTitle={`אז מה היה לנו?`}
                    SummaryHeaderSubTitle={`מעכשיו אתה יכול להיות שקט`}
                  />
                ) : null}
                {MOBILE_VIEW_SIZE < this.state.width ||
                this.state.checkedItem === 2 ? (
                  <CardBlock />
                ) : null}
              </div>
            </div>
            <ModalInfo />
          </div>
        </ReactResizeDetector>
      </Fragment>
    );
  }
}

export default Card;
