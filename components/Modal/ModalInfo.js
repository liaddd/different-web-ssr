import React, { Component, Fragment } from "react";
import ClassName from "classnames";
import Link from "next/link";

import "./Modal.scss";

class ModalInfo extends Component {
  render() {
    return (
      <Fragment>
        <div className={ClassName("modal-block modal-effect-slide")}>
          {" "}
          {/*  add class  modal-show */}
          <div className="modal-overlay"></div>
          <div className="modal-content">
            <div className="modal-header"></div>
            <div className="modal-inner-content">
              <div className="modal-info-block">
                <h1 className="modal-info-title">ישראל ישראלי,</h1>
                <div className="modal-info-subtitle">
                  תודה שרכשת אצלנו את <br />
                  שירות בטחון בשכירות של DiffeRent
                </div>
                <div className="modal-info-contacts">
                  לכל פנייה ושאלה אנו כאן לשירותך,
                </div>
                <div className="modal-info-column">
                  <div className="modal-info-column-item">
                    <h4 className="modal-info-column-title">מייל :</h4>
                    {/*   <Link to="mailto:service@diffe-rent.co.il">service@diffe-rent.co.il</Link> */}
                    <a href="mailto:service@diffe-rent.co.il">
                      service@diffe-rent.co.il
                    </a>
                  </div>
                  <div className="modal-info-column-item">
                    <h4 className="modal-info-column-title">טלפון :</h4>
                    <a href="tel:050-2192570">050-2192570</a>
                  </div>
                </div>
                <div className="modal-info-contacts">
                  שעות פעילות: ימים א'-ה' בין השעות 9:00-19:00.
                </div>

                <Link href={"/personal-info/step1"}>
                  <a className="btn btn-blue btn-small">
                    <div className="btn-block">
                      + הוסף בטחון בשכירות לנכס נוסף
                    </div>
                  </a>
                </Link>

                <Link href="/">
                  <a className="btn btn-white btn-small">
                    <div className="btn-block">הבנתי</div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ModalInfo;
