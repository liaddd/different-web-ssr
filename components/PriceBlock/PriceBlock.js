import React, { Component, Fragment } from "react";
import "./PriceBlock.scss";

import PriceForm from "./../PriceForm/PriceForm";

class PriceBlock extends Component {
  render() {
    return (
      <Fragment>
        <section className="section section-price">
          <div className="container-full">
            <h2 className="section-heading section-heading-line">
              כמה זה עולה לי?
            </h2>
            <div className="price-container">
              <div className="price-img-block">
                <div className="price-img hot-air-balloon-team"></div>
              </div>
              <div className="price-block">
                {/* <PriceForm
                                    PriceFormTitle={`
                                    לבדיקת עלות שירות בטחון בשכירות.<br/>
                                    שכר הדירה שאני מבקש:
                                    `}
                                /> */}
                <PriceForm PriceFormTitle={`שכר הדירה שאני מבקש:`} />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default PriceBlock;
